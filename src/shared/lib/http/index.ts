import {type ApisauceInstance, create} from 'apisauce';
import {createEffect, createEvent, createStore, sample} from 'effector';
import type {AxiosHeaders, Method, RawAxiosRequestHeaders} from 'axios';
import type {ZodError, ZodSchema} from 'zod';

export const createHttpClient = ({
  baseUrl,
  headers,
  timeout,
}: HttpClientProps) => {
  const client = create({baseURL: baseUrl, headers, timeout});

  const generateRequestor = createHttpRequestorGenerator(client);

  if (__DEV__) {
    /// <reference types="reactotron-react-native" />
    /// <reference types="reactotron-apisauce" />
    const {default: Reactotron} = require('reactotron-react-native');
    client.addMonitor(Reactotron.apisauce);
  }

  return {
    client,
    generateRequestor,
  };
};

interface HttpClientProps {
  baseUrl: string;
  headers?:
    | (RawAxiosRequestHeaders &
        Partial<
          {
            [Key in Method as Lowercase<Key>]: AxiosHeaders;
          } & {common: AxiosHeaders}
        >)
    | AxiosHeaders;
  timeout?: number;
}

type HttpRequestor = ApisauceInstance;

type HttpMethod =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

interface HttpRequestProps {
  method: HttpMethod;
  url: string;
  responseValidator?: ZodSchema;
}

const createHttpRequestorGenerator =
  (client: HttpRequestor) =>
  <Request, Response, Error, TransformedResponse = Response>({
    method,
    url,
    responseValidator,
  }: HttpRequestProps) => {
    const requestor = client[method.toLowerCase() as Lowercase<HttpMethod>];

    const $data = createStore<TransformedResponse | null>(null);
    const $pending = createStore(false);
    const $refreshing = createStore(false);
    const $serverError = createStore<Error | null>(null);
    const $isServerError = $serverError.map(error => error !== null);
    const $isConnectionError = createStore(false);
    const $isNetworkError = createStore(false);
    const $validationError = createStore<null>(null);
    const $isValidationError = $validationError.map(error => error !== null);

    const requestBegin = createEvent();
    const requestRefresh = createEvent();
    const requestSuccess = createEvent<TransformedResponse | undefined>();
    const clientError = createEvent<Error>();
    const connectionError = createEvent();
    const networkError = createEvent();
    const validationError = createEvent();

    $data
      .on(requestBegin, () => null)
      .on(requestSuccess, (_, data) => data ?? null)
      .on(validationError, () => null);
    $pending
      .on(requestBegin, () => true)
      .on(requestSuccess, () => false)
      .on(clientError, () => false)
      .on(connectionError, () => false)
      .on(networkError, () => false)
      .on(validationError, () => false);
    $refreshing
      .on(requestRefresh, () => true)
      .on(requestSuccess, () => false)
      .on(clientError, () => false)
      .on(connectionError, () => false)
      .on(networkError, () => false)
      .on(validationError, () => false);
    $serverError
      .on(requestBegin, () => null)
      .on(requestRefresh, () => null)
      .on(requestSuccess, () => null)
      .on(clientError, (_, error) => error)
      .on(connectionError, () => null)
      .on(networkError, () => null)
      .on(validationError, () => null);
    $isConnectionError
      .on(requestBegin, () => false)
      .on(requestRefresh, () => false)
      .on(requestSuccess, () => false)
      .on(connectionError, () => true)
      .on(clientError, () => false)
      .on(networkError, () => false)
      .on(validationError, () => false);
    $isNetworkError
      .on(requestBegin, () => false)
      .on(requestRefresh, () => false)
      .on(requestSuccess, () => false)
      .on(networkError, () => true)
      .on(connectionError, () => false)
      .on(clientError, () => false)
      .on(validationError, () => false);

    const request = async (params: Request, refreshing = false) => {
      if (refreshing) {
        requestRefresh();
      } else {
        requestBegin();
      }

      const response = await requestor<Response, Error>(url, params);

      if (response.ok) {
        if (responseValidator) {
          const result = responseValidator.safeParse(response.data);
          if (result.success) {
            requestSuccess(result.data);
          } else {
            validationError();
          }
        } else {
          requestSuccess(response.data as TransformedResponse);
        }
      } else {
        switch (response.problem) {
          case 'CLIENT_ERROR':
          case 'SERVER_ERROR':
            if (!response.data) {
              connectionError();
            } else {
              clientError(response.data);
            }
            break;
          case 'TIMEOUT_ERROR':
          case 'CONNECTION_ERROR':
            connectionError();
            break;
          case 'NETWORK_ERROR':
            networkError();
        }
      }

      return response;
    };

    const refresh = async (params: Request) => request(params, true);

    const requestFx = createEffect(request);
    const refreshFx = createEffect(refresh);

    const startRequest = createEvent<Request>();
    const startRefresh = createEvent<Request>();

    sample({
      clock: startRequest,
      target: requestFx,
    });

    sample({
      clock: startRefresh,
      target: refreshFx,
    });

    return {
      request,
      refresh,
      startRequest,
      startRefresh,
      $data,
      $pending,
      $refreshing,
      $serverError,
      $isServerError,
      $isConnectionError,
      $isNetworkError,
      $validationError,
      $isValidationError,
    };
  };

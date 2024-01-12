export interface PaginatedResponse<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T;
}

export interface LanguageRequestParams {
  language?: string;
}

export interface PaginatedRequestParams {
  page?: number;
}

export interface RegionRequestParams {
  /** ISO-3166-1 code **/
  region?: string;
}

export interface ApiErrorResponse {
  status_code: number;
  status_message: string;
  success: false;
}

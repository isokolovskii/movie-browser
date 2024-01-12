import {z, ZodSchema} from 'zod';
import type {PaginatedResponse} from './types.ts';

type DataValidator<T> = {[key in keyof T]: ZodSchema};

export const paginatedValidator = <T>(resultsValidator: ZodSchema) =>
  z.object<DataValidator<PaginatedResponse<T>>>({
    page: z.number(),
    total_pages: z.number(),
    total_results: z.number(),
    results: resultsValidator,
  });

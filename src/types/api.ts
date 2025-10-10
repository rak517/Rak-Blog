/**
 * 기본 API 응답 래퍼
 *
 * @example
 * { data: { id: "1", title: "Hello" } }
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

/**
 * API 에러 응답
 *
 * @example
 * { message: "Not found", code: "POST_NOT_FOUND" }
 */
export interface ApiError {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}

import ky, { type KyInstance, type Options } from 'ky';
import { parseDates, stringifyDates } from './date-transformer';

/**
 * 요청 본문의 Date 객체를 문자열로 변환하는 함수
 */
async function transformRequest(request: Request): Promise<Request> {
  if (!request.body) {
    return request;
  }

  try {
    const bodyText = await request.text();
    const bodyJson: unknown = JSON.parse(bodyText);
    const transformedBody = stringifyDates(bodyJson);

    return new Request(request, {
      body: JSON.stringify(transformedBody),
    });
  } catch (error) {
    console.warn('[API Client] Failed to transform request body:', error);
    return request;
  }
}

/**
 * 응답의 날짜 문자열을 Date 객체로 변환하는 함수
 */
async function transformResponse(request: Request, options: Options, response: Response): Promise<Response> {
  if (!response.ok) {
    return response;
  }

  const contentType = response.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    return response;
  }

  try {
    const clonedResponse = response.clone();
    const data: unknown = await clonedResponse.json();
    const transformedData = parseDates(data);

    return new Response(JSON.stringify(transformedData), {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  } catch (error) {
    console.warn('[API Client] Failed to transform response body:', error);
    return response;
  }
}

/**
 * 기본 API 클라이언트 설정
 */
const defaultOptions: Options = {
  prefixUrl: '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [transformRequest],
    afterResponse: [transformResponse],
  },
};

/**
 * API 클라이언트 인스턴스
 */
export const apiClient: KyInstance = ky.create(defaultOptions);

/**
 * 타입 안전한 API 헬퍼 함수
 */
export const api = {
  get: <TResponse>(url: string, options?: Options) => apiClient.get(url, options).json<TResponse>(),

  post: <TResponse, TBody = unknown>(url: string, body?: TBody, options?: Options) =>
    apiClient.post(url, { json: body, ...options }).json<TResponse>(),

  put: <TResponse, TBody = unknown>(url: string, body?: TBody, options?: Options) =>
    apiClient.put(url, { json: body, ...options }).json<TResponse>(),

  patch: <TResponse, TBody = unknown>(url: string, body?: TBody, options?: Options) =>
    apiClient.patch(url, { json: body, ...options }).json<TResponse>(),

  delete: <TResponse>(url: string, options?: Options) => apiClient.delete(url, options).json<TResponse>(),
} as const;

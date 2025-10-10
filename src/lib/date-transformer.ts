import { format, parse, isValid } from 'date-fns';

/**
 * 날짜 형식 상수
 */
export const DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss' as const;
export const DATE_FORMAT_REGEX = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

/**
 * 원시 타입 체크
 */
function isPrimitive(value: unknown): value is string | number | boolean | null | undefined {
  return value === null || value === undefined || typeof value !== 'object';
}

/**
 * Date 객체 체크
 */
function isDateObject(value: unknown): value is Date {
  return value instanceof Date;
}

/**
 * 날짜 형식 문자열 체크
 */
function isDateString(value: unknown): value is string {
  return typeof value === 'string' && DATE_FORMAT_REGEX.test(value);
}

/**
 * 배열 체크
 */
function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

/**
 * 일반 객체 체크 (Date, Array 제외)
 */
function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !isDateObject(value) &&
    !isArray(value) &&
    value.constructor === Object
  );
}

/**
 * 문자열을 Date 객체로 변환
 */
function stringToDate(dateString: string): Date | string {
  const parsed = parse(dateString, DATE_FORMAT, new Date());
  return isValid(parsed) ? parsed : dateString;
}

/**
 * Date 객체를 문자열로 변환
 */
function dateToString(date: Date): string | null {
  return isValid(date) ? format(date, DATE_FORMAT) : null;
}

/**
 * 객체 내의 모든 날짜 문자열을 Date 객체로 변환 (재귀)
 */
export function parseDates<T>(value: T): T {
  // 원시 타입
  if (isPrimitive(value)) {
    return value;
  }

  // 날짜 형식 문자열
  if (isDateString(value)) {
    return stringToDate(value) as T;
  }

  // 배열
  if (isArray(value)) {
    return value.map((item) => parseDates(item)) as T;
  }

  // 일반 객체
  if (isPlainObject(value)) {
    const result: Record<string, unknown> = {};
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        result[key] = parseDates(value[key]);
      }
    }
    return result as T;
  }

  // 그 외 (Date, 커스텀 클래스 등)
  return value;
}

/**
 * 객체 내의 모든 Date 객체를 문자열로 변환 (재귀)
 */
export function stringifyDates<T>(value: T): T {
  // 원시 타입
  if (isPrimitive(value)) {
    return value;
  }

  // Date 객체
  if (isDateObject(value)) {
    return dateToString(value) as T;
  }

  // 배열
  if (isArray(value)) {
    return value.map((item) => stringifyDates(item)) as T;
  }

  // 일반 객체
  if (isPlainObject(value)) {
    const result: Record<string, unknown> = {};
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        result[key] = stringifyDates(value[key]);
      }
    }
    return result as T;
  }

  // 그 외
  return value;
}

/**
 * 날짜 유틸리티 함수들
 */
export const dateUtils = {
  /**
   * Date 객체를 서버 형식 문자열로 변환
   */
  toServerFormat: (date: Date): string => {
    return isValid(date) ? format(date, DATE_FORMAT) : '';
  },

  /**
   * 서버 형식 문자열을 Date 객체로 변환
   */
  fromServerFormat: (dateString: string): Date | null => {
    if (!DATE_FORMAT_REGEX.test(dateString)) {
      return null;
    }
    const parsed = parse(dateString, DATE_FORMAT, new Date());
    return isValid(parsed) ? parsed : null;
  },

  /**
   * 날짜 형식 문자열인지 확인
   */
  isDateFormat: (value: unknown): value is string => {
    return typeof value === 'string' && DATE_FORMAT_REGEX.test(value);
  },
};

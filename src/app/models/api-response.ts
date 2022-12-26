export interface ApiResponse<T> {
  readonly status: string;
  readonly data: T;
}

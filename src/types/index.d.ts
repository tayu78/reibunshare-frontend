export enum RequestMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}
export interface AxiosOption {
  method: RequestMethod;
  url: string;
  data?: any;
}

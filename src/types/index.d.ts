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

export enum SEARCH_TAB_NAME {
  TOP = "TOP",
  USER = "USER",
  LANGUAGE = "LANGUAGE",
  DIALECT = "DIALECT",
  TAG = "TAG",
}

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
  USER = "USER",
  TAG = "TAG",
  PHRASE = "PHRASE",
}

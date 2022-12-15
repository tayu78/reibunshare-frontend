import axios from "axios";

enum RequestMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}
interface AxiosOption {
  method: RequestMethod;
  url: string;
  data: any;
}

const sendAxiosRequest = async (options: AxiosOption) => {
  try {
    const { data } = await axios(options);
    return { data, responseType: "success" };
  } catch (err) {
    return {
      //   data: { message: err.response.data.message },
      data: { err },
      resultType: "error",
    };
  }
};

export default sendAxiosRequest;

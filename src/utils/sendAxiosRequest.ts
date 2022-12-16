import axios from "axios";
import { AxiosOption } from "../types/index.d";

const sendAxiosRequest = async (options: AxiosOption) => {
  try {
    const { data } = await axios(options);
    return { data, responseType: "success" };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: { message: error.response?.data.message },
        resultType: "error",
      };
    }
    return {
      data: { message: "Unexpect error occurred when exexuted axios. ", error },
      resultType: "error",
    };
  }
};

export default sendAxiosRequest;

import { AxiosResponse } from "axios";
import transportService from "../services/transport";
import { Request } from "../interfaces/api";
import { CARDS_SERVICE_URL, API_URL } from "../constants/api";

export const getCarsData = (
  data: Request | undefined
): Promise<AxiosResponse> => {
  return transportService.get(`${API_URL}${CARDS_SERVICE_URL}`, {
    params: data?.query,
  });
};

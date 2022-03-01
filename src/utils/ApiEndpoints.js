import { httpGet } from "./ApiService";

export const getInstructionsList = ({ endpoint, options }) => {
    return httpGet(endpoint, options)
};
import api from "./api";

export const getExecutionHistory = async (requestId) => {
  const response = await api.get(
    `/executions/request/${requestId}`
  );

  return response.data;
};

export const getAllExecutionHistory = async () => {
  const response = await api.get("/executions");

  return response.data;
};
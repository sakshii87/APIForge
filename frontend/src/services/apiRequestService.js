import api from "./api";

export const getRequests = async (collectionId) => {
  const response = await api.get(
    `/requests/${collectionId}`
  );

  return response.data;
};

export const createRequest = async (
  collectionId,
  requestData
) => {
  const response = await api.post(
    `/requests/${collectionId}`,
    requestData
  );

  return response.data;
};

export const deleteRequest = async (id) => {
  const response = await api.delete(
    `/requests/${id}`
  );

  return response.data;
};
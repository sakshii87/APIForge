import api from "./api";

export const getRequests = async (collectionId) => {
  const response = await api.get(
    `/requests/collection/${collectionId}`
  );

  return response.data;
};

export const getRequestById = async (id) => {
    const response = await api.get(`/requests/${id}`);

    return response.data;
};

export const updateRequest = async (
  id,
  requestData
) => {
  const response = await api.put(
    `/requests/${id}`,
    requestData
  );

  return response.data;
};

// Execute API request
export const executeRequest = async (id) => {
  const response = await api.post(
    `/requests/${id}/execute`
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
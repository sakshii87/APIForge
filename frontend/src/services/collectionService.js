import api from "./api";

export const getCollections = async () => {
    const response = await api.get("/collections");
    return response.data;
};

export const createCollection = async (collectionData) => {
    const response = await api.post("/collections", collectionData);
    return response.data;
};
export const deleteCollection = async (id) => {
  const response = await api.delete(
    `/collections/${id}`
  );

  return response.data;
};
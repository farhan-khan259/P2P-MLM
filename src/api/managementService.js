import apiClient from './config';

export const getAdminTransactionHistory = async () => {
  const response = await apiClient.get('/transactions', { params: { scope: 'admin' } });
  return response.data;
};

export const getUserTransactionHistory = async () => {
  const response = await apiClient.get('/transactions', { params: { scope: 'user' } });
  return response.data;
};

export const getPlanSetting = async () => {
  const response = await apiClient.get('/settings/plan');
  return response.data;
};

export const updatePlanSetting = async (payload) => {
  const response = await apiClient.put('/settings/plan', payload);
  return response.data;
};

export const getBankAccount = async () => {
  const response = await apiClient.get('/settings/bank-account');
  return response.data;
};

export const updateBankAccount = async (payload) => {
  const response = await apiClient.put('/settings/bank-account', payload);
  return response.data;
};

export const getNewsPopupList = async (type) => {
  const response = await apiClient.get('/news-popup', { params: type ? { type } : undefined });
  return response.data;
};

export const createNewsPopup = async (payload) => {
  const response = await apiClient.post('/news-popup', payload);
  return response.data;
};

export const updateNewsPopup = async (newsId, payload) => {
  const response = await apiClient.put(`/news-popup/${newsId}`, payload);
  return response.data;
};

export const deleteNewsPopup = async (newsId) => {
  const response = await apiClient.delete(`/news-popup/${newsId}`);
  return response.data;
};

export const getAdminEpinRequests = async (status) => {
  const response = await apiClient.get('/epins/requests', { params: status ? { status } : undefined });
  return response.data;
};

export const createEpinRequest = async (payload) => {
  const response = await apiClient.post('/epins/requests', payload);
  return response.data;
};

export const updateAdminEpinRequestStatus = async (requestId, payload) => {
  const response = await apiClient.patch(`/epins/requests/${requestId}/status`, payload);
  return response.data;
};

export const getEpinList = async (params = {}) => {
  const response = await apiClient.get('/epins', { params });
  return response.data;
};

export const generateEpins = async (payload) => {
  const response = await apiClient.post('/epins/generate', payload);
  return response.data;
};

export const updateEpinStatus = async (epinNo, payload) => {
  const response = await apiClient.patch(`/epins/${epinNo}/status`, payload);
  return response.data;
};

export const transferEpin = async (epinNo, payload) => {
  const response = await apiClient.post(`/epins/${epinNo}/transfer`, payload);
  return response.data;
};

export const getEpinTransferHistory = async () => {
  const response = await apiClient.get('/epins/transfers');
  return response.data;
};

export const getEpinFranchises = async () => {
  const response = await apiClient.get('/epins/franchises');
  return response.data;
};

export const upsertEpinFranchise = async (payload) => {
  const response = await apiClient.post('/epins/franchises', payload);
  return response.data;
};
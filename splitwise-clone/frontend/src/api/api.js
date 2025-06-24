import axios from 'axios';

const API_BASE = 'http://localhost:8000';

export const createGroup = (data) =>
  axios.post(`${API_BASE}/groups`, data);

export const getGroups = () =>
  axios.get(`${API_BASE}/groups`);

export const getGroupBalances = (groupId) =>
  axios.get(`${API_BASE}/groups/${groupId}/balances`);
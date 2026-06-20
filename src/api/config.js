import axios from 'axios';

const defaultApiBaseUrl =
	typeof window !== 'undefined' ? `${window.location.origin}/api` : '/api';

const apiClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL || defaultApiBaseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
});

// ... rest of the code

apiClient.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

export default apiClient;

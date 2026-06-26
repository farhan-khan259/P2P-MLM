import axios from 'axios';

const defaultApiBaseUrl =
	typeof window !== 'undefined' ? 'http://localhost:5001/api' : 'http://localhost:5001/api';

const apiClient = axios.create({
	baseURL: process.env.REACT_APP_API || defaultApiBaseUrl,
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

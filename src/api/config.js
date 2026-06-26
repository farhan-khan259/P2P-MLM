import axios from 'axios';

const defaultApiBaseUrl = 'https://elconnetwork.com/api';

const apiClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL || process.env.REACT_APP_API || defaultApiBaseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
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

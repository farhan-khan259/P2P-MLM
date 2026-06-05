import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api',      // ← CHANGE THIS to '/api'
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

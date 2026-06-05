import axios from 'axios';

const API_BASE = process.env.REACT_APP_API || 'https://elconnetwork.com/api';

const apiClient = axios.create({
	baseURL: API_BASE,
	headers: {
		'Content-Type': 'application/json',
	},
	// If you switch to cookie-based auth, enable this and configure CORS on the backend
	// with credentials: true and app.set('trust proxy', 1) if behind a proxy.
	// withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

export default apiClient;

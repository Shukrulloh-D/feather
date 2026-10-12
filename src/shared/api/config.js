// Адрес бэкенда: из .env, а если его нет — локальный сервер
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
// src/utils/storage.js
const STORAGE_KEY = 'dashboardSettings';

export const saveSettings = (settings) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
};

export const loadSettings = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

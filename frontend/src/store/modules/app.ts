import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    appName: '1Panel',
    appVersion: '1.0.0',
    appDescription: 'Top-Rated Web-based Linux Server Management Tool',
  }),
  getters: {
    getAppName: (state) => state.appName,
    getAppVersion: (state) => state.appVersion,
    getAppDescription: (state) => state.appDescription,
  },
  actions: {
    setAppName(name) {
      this.appName = name;
    },
    setAppVersion(version) {
      this.appVersion = version;
    },
    setAppDescription(description) {
      this.appDescription = description;
    },
  },
});

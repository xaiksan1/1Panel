import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: null,
    roles: [],
    permissions: [],
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    getRoles: (state) => state.roles,
    getPermissions: (state) => state.permissions,
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    setToken(token) {
      this.token = token;
    },
    setRoles(roles) {
      this.roles = roles;
    },
    setPermissions(permissions) {
      this.permissions = permissions;
    },
    clearUser() {
      this.user = null;
      this.token = null;
      this.roles = [];
      this.permissions = [];
    },
  },
});

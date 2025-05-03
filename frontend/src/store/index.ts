import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import GlobalStore from './modules/global';
import MenuStore from './modules/menu';
import TabsStore from './modules/tabs';
import AppStore from './modules/app';
import UserStore from './modules/user';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export { GlobalStore, MenuStore, TabsStore, AppStore, UserStore };

export default pinia;

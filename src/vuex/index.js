import Vue from 'vue';
import Vuex from 'vuex';
import mainStore from './main/store.js';
import mainGetters from './main/getter.js';
import mainActions from './main/actions.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
	modules: {
		main: {
			state: mainStore.state,
			getters: mainGetters,
			actions: mainActions,
			mutations: mainStore.mutations
		}
	},

	// strict: debug,
	// plugins: debug ? [createLogger()] : []
});

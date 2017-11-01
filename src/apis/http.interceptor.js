import axios from 'axios';
import cache from './cache';
import axiosCancel from 'axios-cancel';

axiosCancel(axios, {
	debug: false // default
});

export default function (type) {
	axios.interceptors.request.use(function (config) {
        // const accessToken = cookieUtils.get("token");
		// const tid = cookieUtils.get('tid');
		// if (tid) config.headers['tid'] = tid;
  //       config.headers['token'] = accessToken;
		// config.headers['Accept-Language'] = utils.getLocalLang().locale;
		return config;
	}, function (error) {
		return Promise.reject(error);
	});

	axios.interceptors.response.use(function (response) {
		var config = response.config;
		// 进行缓存
		if (config.cache && config.method == 'GET') {
			var cacheKey = cache.generateKey(config);
			cache.set(cacheKey, response.data.data);
		}
		return response;
	}, function (error) {
		return Promise.reject(error);
	});
};

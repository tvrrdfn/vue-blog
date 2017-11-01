import consts from 'configs/const.config';
import cookieUtils from 'utils/cookie.utils';
import axios from 'axios';
import cache from './cache';
import UserResources from '../components/userInfo/userResource';
import UserInfoService from '../services/user-info.service';
import RolesConfig from '../configs/roles.config';

/**
 * 遍历resources映射文件,构造出一个service构造函数
 * @param configs resources映射文件 Array
 * @returns {Clazz}
 */
export default function (configs) {
	var apis = {};

	configs.forEach(function (config) {
		/**
		 * 动态构造方法
		 * @param data 调用该方法传入的值
		 * @param supplants Object 变量内插对象
		 * @returns {*}
		 */
		apis[config.name] = function (data, supplants, customConfig) {
			var params = {headers: {}}, data = data || {};

			if(!config.mock){ //不使用原来的Mock假数据

				// if(ME==="MOCK" && DEV) {
				// 	var resolver = require('../proxy/proxy.resolver.js');
                //
				// 	var resolvedUrl = (supplants ? config.url.supplant(supplants) : config.url);
				// 	var proxyUrl = resolver.resolveByName(resolvedUrl, data, config);
				// 	if (proxyUrl) {
				// 		params.url = encodeURI(proxyUrl);
				// 	}else{
				// 		var http = consts.WEB_MIDDLE_URL;
				// 		params.url = http + (supplants ? config.url.supplant(supplants) : config.url);
				// 	}
				// } else {
				// 	params.url = consts.WEB_MIDDLE_URL + (supplants ? config.url.supplant(supplants) : config.url);
				// }
				params.url = consts.WEB_MIDDLE_URL + (supplants ? config.url.supplant(supplants) : config.url);

			}else{
				params.url = config.url;
			}
			// alert(params.url);




			// if(config.getPs) {
			// 	var url = params.url;
			// 	params.url = url.indexOf('?') > -1 ? url + "&sid=" + cookieUtils.get('sid') + "&uiVersion=" + BASE_VERSION : url + "?sid=" + cookieUtils.get('sid') + "&uiVersion=" + BASE_VERSION;
            //
			// }

			//url上拼接sid
			// var sid = cookieUtils.get("sid");
			// if (sid) {
			// 	params.url += (params.url.indexOf('?') == -1 ? '?' : '&') + 'sid=' + sid;
			// }

			// alert( config.method );
			params.method = config.method || 'post';
			params.method = params.method.toLowerCase();

			if (data) {
				var attrName = params.method == 'GET' ? 'params' : 'data';
				params[attrName] = data;
			}

			// 设置缓存配置
			params.cache = config.cache;
			params.withCredentials = true;

			// 从缓存中获取
			if (params.method == 'GET' && params.cache) {
				var cacheKey = cache.generateKey(params);
				var cacheVal = cache.get(cacheKey);
				if(cacheVal != null){
					console.log('get data from cache');
					return Promise.resolve(cacheVal);
				}
			}

			if (customConfig) {
				params = Object.assign(params, customConfig);
			}



			// alert(".");
			//标准化返回结果,使用reject接收error,resolve接收success
			return axios.request(params).then((res) => {
				if (res.data.type == 'failed') {
					return Promise.reject({
						errorCode: res.data.code
					});
				}
				return res.data.content;
			}).catch((error, info) => {
				console.info("[Catch error]");
				console.info(config)
				// debugger;
				if(axios.isCancel(error)) {
					return Promise.reject(error);
				}

				if(error.response){
					if(error.response.status == 460) {
						UserResources.clear();

						if(UserInfoService.hasSysRole('ptone-shengguang-readonly-user')){
							location.href = RolesConfig.other['ptone-shengguang-readonly-user'].signinLink;
						} else {
							location.href = '/signin';
						}
						return;
					} else if(error.response.status == 401) {
						// token过期无效删除
						cookieUtils.remove('token');
						location.href = '/signin';
						return Promise.reject('401');
					} else if (error.response.status == 403) {
						location.href = '/ip';
						return Promise.reject('403');
					}
					return;
				}

				if(error.response && error.response.data) {
					return Promise.reject(error.response.data);
				}

				return Promise.reject(error);
			});
		};
	});

	return apis;
}

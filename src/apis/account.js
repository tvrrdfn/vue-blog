import resourceWrapper from './resourceWrapper';

var resources = [
	// 获取空间信息
	{
		name: 'updateUserInfo',
		method: 'put',
		url: '/user-service/users/update'
	},{
		name: 'updateLocate',
		method: 'put',
		url: '/user-service/users/settings'
	},{
		name: 'updatePassword',
		method: 'put',
		url: '/user-service/users/password'
	},{
		name:'checkPassword',
		method:'post',
		url: '/user-service/users/password/check'
	},{
		name:'logout',
		method: 'post',
		url:'/user-service/users/signout'
	}
];

export default resourceWrapper(resources);

var data = {};

var cache = {
	get: function(key){
		return data[key];
	},
	set: function(key, value){
		data[key] = value;
	},
	remove: function(key){
		delete data[key];
	},
	all: function () {
		return data;
	},
	generateKey: function(config) {
		var qs = getQueryString(config.params);
		return [config.url, qs].join(";");
	}
};

function getQueryString(params){
	var arr = [];
	if(params != null){
		for(var attr in params){
			if(params.hasOwnProperty(attr)){
				var str = attr + "=" + params[attr];
				arr.push(str);
			}
		}
	}
	arr.sort();
	return arr.join(",");
}

export default cache;

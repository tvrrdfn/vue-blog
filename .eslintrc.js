/**
 * @description eslint配置
 * 目前来说： 主要涉及到的是 import顶部引入  switch语句return之后，break不可达  非必要的.call(null) 目前很多这种写法
 * 构造函数必须是首字母大写  变量多次命名  多次import引用 
 * @example http://eslint.cn/docs/rules/#best-practices
 */
module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
		es6: true
	},
	// 设置全局变量 jquery
	globals: {
		$: true,
		dataLayer_TZGC5N: true, // 待确认作用
		angular: true,
		BASE_VERSION: true, // index.html 声明
		localization: true
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'vuefix',
		'html'
	],
	settings: {
		"ecmascript": 6,
		"html/html-extensions": [".html", ".vue"]  // consider .html and .we files as HTML
    },
	// add your custom rules here
	rules: {
	    'arrow-parens': "off",
	    'generator-star-spacing': "off",
	    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	    'semi': ['error', 'always'],
	    'no-tabs': "off",
	    "indent": ["error", 4], // 4个空格缩进
	    'space-before-function-paren': "off",
	    'padded-blocks': "off",
	    'no-trailing-spaces': "off",
	    'no-undef': "off",
	    // 使用 === 替代 == allow-null允许null和undefined==
		"eqeqeq": "off", 
		// 禁用不必要的转义字符
		"no-useless-escape": "off", 
		// 双峰驼命名格式
		"camelcase": "off", 
		// 禁止出现未使用过的变量
		"no-unused-vars": "off", 
		// 要求promise reject方法转为为error
		"prefer-promise-reject-errors": [
            "off",
            {
                "allowEmptyReject": true
            }
        ],
        // 强制函数中的变量要么一起声明要么分开声明
		"one-var": ["off", {
			"initialized": "never"
		}],
		// return语句不应该包含赋值语句
		"no-return-assign": "off", 
		// 禁止使用 var 多次声明同一变量
		"no-redeclare": "off", 
		// 禁止在字符串和注释之外不规则的空白
		"no-irregular-whitespace": "off",
		// 禁止条件表达式中出现赋值操作符
		"no-cond-assign": "off",
		// 禁止混合使用不同的操作符
		"no-mixed-operators": "off",
		// 禁止扩展原生类型
		"no-extend-native": "off",
		// if while function 后面的{必须与if在同一行，java风格。
		"brace-style": "off",
		// 禁止不必要的 .call() 和 .apply() 
		"no-useless-call": "off",
		// 要求回调函数中有容错处理
		"handle-callback-err": ["off", "^(err|error)$"],
		// 强制在关键字前后使用一致的空格 (前后腰需要) eg:if (condition) { ... }
		"keyword-spacing": "error",
		// 强制在 function的左括号之前使用一致的空格
		"space-before-function-paren": [2, "always"]
	}
};
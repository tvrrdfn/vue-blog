## eslint 介绍
ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标 是保证代码的一致性和避免错误。

## eslint 使用

### 安装
如果想适用于所有的项目，可以选择全局去安装

1. 全局安装

``` sh
$ npm install ‐g eslint
$ eslint ‐‐init  #设置一个配置文件
$ eslint yourfile.js  #可以在任何文件或目录运行eslint
```

2. 本地安装

``` sh
	# 安装eslint依赖
	npm i --save-dev eslint  eslint-plugin-import eslint-plugin-node  eslint-plugin-promise
	# extends引用standard标准，安装相关依赖
	npm i --save-dev eslint-plugin-standard eslint-config-standard
```



### 2.配置规则
init 后，会在根目录中自动创建 .eslintrc 文件。可以配置规则 rules

``` js
{
"rules": {
        "semi": ["error", "always"]
        "eqeqeq": "off", 
        ...
    }
}
```
"semi" 和 "eqeqeq" 是 ESLint 中 规则 的名称,(
rules配置可以参照 [eslint](http://eslint.cn/docs/rules/#best-practices)
), 第一个值是错误级别，错误值介绍:

1. "off" or 0 ­ 关闭规则
2. "warn" or 1 ­ 将规则视为一个警告(不会影响退出码) 
3. "error" or 2 ­ 将规则视为一个错误 (退出码为1)


``` js
	parser: 'babel-eslint', // babel-eslint 解析
	parserOptions: {
		sourceType: 'module'  //指定来源的类型，有两种”script”或”module”
	},
```


### vue解析

``` js
	// .eslintrc.js 文件配置
	plugins: [
		'vuefix', // 需要依赖eslint-plugin-vuefix包，vue文件自动修复
		...
	]

	// webpack.config.js webpack文件配置（如需要loader配置）
	// 该配置会自动执行eslintrc.js中的配置
	rules: [
		{
			test: /\.(js|vue)$/,
			loader: 'eslint-loader',
			enforce: 'pre',
			include: path.resolve(__dirname, 'src/v2'),
			options: {
				formatter: require('eslint-friendly-formatter') // 需要依赖eslint-friendly-formatter包，支持终端友好输出
			}
    	},
    	...
    ]
```

### cli 运行

``` sh
# eslint [options] [file|dir|glob]* 

# lint 下面两个文件
eslint file1.js file2.js

# lint 某个文件夹
eslint ./src/v2

# --ext 参数为修改lint文件类型，默认为js 
eslint ./src/v2  --ext js,vue

# --fix 参数为查找错误并自动修复
eslint ./src/v2 --fix

```

### ignore配置

根目录文件夹下有一个 **.eslintignore** 文件，需要添加忽略的文件/文件夹添加到该目录下


### --format --output格式化输出

``` sh

# 将报告写到一个文件。-o, --output-file
eslint --output ./test/test.html

# 这个选项指定了控制台的输出格式。可用的格式是：
eslint --format html #输出格式为html
eslint --format json #输出格式为json

```

相关文档参照 [format](https://eslint.org/docs/user-guide/formatters/)
package.json文件中添加了 lint:format 命令






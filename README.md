# umi next app

umi@3 全家桶方案

## [0.0.1](https://github.com/umijs/next-app/tree/001fabric) (2020-04-10)

添加工程化，初始化项目。选用 `@umijs/fabric`。

![0.0.1 build 314.05KB](./analyze/20200410001.jpg)

> umi.js 314.05KB

| 包名 | Parsed 大小 |
|  :-  | :-:  |
| core-js | 121.36KB |
| react-dom | 115.45KB |
| internals | 49.25KB |
| @umijs | 17.84KB |

## [0.0.2](https://github.com/umijs/next-app/tree/002layout) (2020-04-10)

添加布局，增加 layout 及相关配置。选用 `@umijs/plugin-layout`。

![0.0.2 build 3.03MB](./analyze/20200410002.jpg)

> umi.js 3.03MB

| 包名 | Parsed 大小 |
|  :-  | :-:  |
| @ant-design | 1.03MB |
| 其中 icons | 902.29KB |
| antd | 965.18KB |
| moment | 345.51KB |
| @umijs | 17.84KB |

增加 layout 插件之后，包过大。后续[issues/4](https://github.com/umijs/next-app/issues/4)

## [0.0.3](https://github.com/umijs/next-app/tree/003request) (2020-04-10)

添加请求和 mock 数据。选用 `@umijs/plugin-request`。

![0.0.3 build 3.1MB](./analyze/20200410003.jpg)

> umi.js 3.1MB

| 包名 | Parsed 大小 |
|  :-  | :-:  |
| @ant-design | 1.03MB |
| 其中 icons | 902.29KB |
| antd | 965.18KB |
| moment | 345.51KB |
| @umijs | 31.92KB |

## [0.0.4](https://github.com/umijs/next-app/tree/004models) (2020-04-10)

添加极简数据流。选用 `@umijs/plugin-model`。极简数据好像仅仅只能用于共享全局数据。因为只能在 models 里面使用 `useState`。后续[issues/2](https://github.com/umijs/next-app/issues/2)

![0.0.4 build 3.1M](./analyze/20200410004.jpg)

> umi.js 3.1M

| 包名 | Parsed 大小 |
|  :-  | :-:  |
| @ant-design | 1.03MB |
| 其中 icons | 758.28KB |
| antd | 691.55KB |
| moment | 345.51KB |
| @umijs | 33.76KB |

## [0.0.5]() (2020-04-10)

添加项目初始化数据。选用 `@umijs/plugin-initial-state`。

![0.0.5 build 3.11M](./analyze/20200410005.jpg)

> umi.js 3.11M

| 包名 | Parsed 大小 |
|  :-  | :-:  |
| @ant-design | 1.03MB |
| 其中 icons | 766.51KB |
| antd | 965.27KB |
| moment | 345.51KB |
| @umijs | 33.76KB |

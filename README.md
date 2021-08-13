#  React Native Web Template

<p>
  <a href="https://github.com/282931/rn-web-template#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/282931/rn-web-template/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> 同构react-native和react-native-web的一个template

## 为什么要用我

- react-native-web官方没有集成react-native的正式方案
- 这个template是用react-native init创建的项目，Expo目前就支持原生和web同构，如果你正在用Expo不用考虑这个这个库。
- typescript配置
- 网页和原生缩放响应式解决方案
- 网页和原生共用react-navigation路由配置

## 用法

```sh
npx react-native init MyApp --template rn-web-template
```
## 运行

```sh
yarn run web
```

#### 目前对应的react-native和react-native-web版本

| React Native | react-native web | Template |
| ------------ | -------- | -------- |
| 0.64         | 0.17.1   | 1.0.\*   |

### 响应式方案 
| native                               |                       web                        |
| :-------------------------------------- | :-----------------------------------------------: |
| ![web](https://raw.githubusercontent.com/282931/rn-web-template/master/gif/testResponseios.gif)      | ![native](https://raw.githubusercontent.com/282931/rn-web-template/master/gif/testResponseweb.gif)                              |


[参考文档](https://mmazzarolo.com/blog/2021-07-31-react-native-responsive-scaling-on-the-web)


## 注意事项:React Native CLI

This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

If you tried the above and still get the *react-native-template-react- native-template-typescript: Not found error*, please try adding the [--ignore-existing](https://github.com/npm/npx#description) flag to the npx call to force npx to ignore any locally installed versions of the CLI.


Further information can be found here: https://github.com/react-native-community/cli#about
## Contributing

欢迎贡献加feature
## License

This project is [MIT](LICENSE) licensed.

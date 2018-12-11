# 学习 react native

目前已经做过一个上线的 react native app ，但是感觉自己对 react native 还是不熟悉，所以我觉得系统的学习一下 react native ，对它的每一个组件和API都练习一遍，来加深对它的理解。

我将在 github issues 上记录我的学习笔记。

## 技巧经验

如果 `react-native run-ios` 报错找不出原因，建议在 `XCode` 里跑，比较好找错误。

## XCode 10 出现的问题

- [config.h file not found and :CFBundleIdentifier does not exist. ERROR](https://stackoverflow.com/questions/53454210/config-h-file-not-found-and-cfbundleidentifier-does-not-exist-error)

解决办法：`cd ./node_modules/react-native && scripts/ios-install-third-party.sh && cd third-party && cd $(ls | grep 'glog' | awk '{print $1}') && ./configure`

- [error: Build input file cannot be found: '/Users/hongye/Desktop/Ecogearing/node_modules/react-native/Libraries/WebSocket/libfishhook.a'](https://blog.csdn.net/levine_hhb/article/details/82819629)
# react-native-pure-mta

SDK 版本：

* ios: 2.5.3
* android: 3.4.7

## 安装

```
npm i react-native-pure-mta
react-native link react-native-pure-mta
```

## 配置

### iOS

无

### Android

`android/app/build.gradle` 加上这段

```
buildTypes {
    // 测试包
    debug {
        // 这里一般有一些别的配置

        // 重点是这 2 个配置项
        manifestPlaceholders = [
            MTA_APPKEY: "appKey",
            MTA_CHANNEL: "渠道名称"
        ]
    }
    // 线上包
    release {
        // 这里一般有一些别的配置

        // 重点是这 2 个配置项
        manifestPlaceholders = [
            MTA_APPKEY: "appKey",
            MTA_CHANNEL: "渠道名称"
        ]
    }
}
```

`android/app/src/main/AndroidManifest.xml` 加上 `android:usesCleartextTraffic` 和 `uses-library`。

```xml
<application
  android:usesCleartextTraffic="true">

  <uses-library
      android:name="org.apache.http.legacy"
      android:required="false" />

</application>
```

## 用法

```js
import mta from 'react-native-pure-mta'

// 启动 SDK
// 如果要看调试信息，第二个参数传 true
// 默认可不传
mta.start('appKey')
```

## 声明

保证会及时跟进最新版 SDK，放心使用。

## 打赏

走过路过的都打赏一点吧，给点动力继续更新。

微信

<img src="https://user-images.githubusercontent.com/2732303/44254903-ce6d3f80-a236-11e8-86dd-f6b27a7f94df.png" width="200">

支付宝

<img src="https://user-images.githubusercontent.com/2732303/44254929-e5139680-a236-11e8-95e2-f5a864246f83.png" width="200">
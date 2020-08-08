# platform

全部引入

`import {platform} from '@tool/core'`

按需引入

`import {platform} from '@tool/core/lib/platform'`

## platform.isInApp()

检测是否为`端内`环境

## platform.isInYikeApp()

检测是否为`直播课端内`环境

## platform.isInZybApp()

检测是否为`作业帮端内`环境

## platform.isInParentApp()

检测是否为`家长版端内`环境

## platform.isWechat()

检测是否为`微信`环境

## platform.isWechatProgram()

检测是否为`微信小程序`环境

## platform.isQQ()

检测是否为`QQ`环境

## platform.isAndroid()

检测是否为`Android`环境

## platform.isOldAndroid()

检测是否为`一些css解析比较怪异的android`环境，现在是判断的是否为’OPPO A57‘

## platform.isIOS()

检测是否为`IOS`环境

## platform.isIphone()

检测是否为`Iphone`环境

## platform.isIphoneX()

检测是否为`IphoneX`环境

## platform.isIpad()

检测是否为`Ipad`环境

## platform.isAli()

检测是否为`支付宝`环境

## platform.isXiaomi()

检测是否为`小米`环境

## platform.isKuaiduiApp()

检测是否为`快对作业App`环境

## platform.isKuaiduiWap()

检测是否为`快对作业网页`环境

## platform.isKuaiduiPC()

检测是否为`快对作业PC端`环境

## platform.isInWeibo()

检测是否为`微博`环境

## platform.isInMobile()

检测是否为`移动端`环境

## platform.getPlat()

返回平台码

- 参数：
  - 无
- 返回：
  - {String}
    - yikePC    -- 直播课PC端
    - yikeAPP   -- 直播课App
    - zybAPP    -- 作业帮App
    - wx_plat   -- 作业帮直播课小程序
    - ykzbXCX   -- 作业帮直播课课程小程序
    - Wechat    -- 微信
    - jzAPP     -- 家长版App
    - kuaiduiApp  -- 快对作业App
    - kuaiduiWap  -- 快对作业网页
    - kuaiduiPC   -- 快对作业PC端
    - yikeWAP     -- 直播课移动wap版

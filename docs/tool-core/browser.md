# browser

全部引入

`import {browser} from '@tool/core'`

按需引入

`import {browser} from '@tool/core/lib/browser'`

## browser.chrome()

检测浏览器是否为 Chrome.

- 参数：
  - 无
- 返回：
  - {Number} Chrome 版本号(非 Chrome 浏览器返回 0)
- 示例

## browser.firefox()

检测浏览器是否为 Firefox.

- 参数：
  - 无
- 返回：
  - {Number} Firefox 版本号(非 Firefox 浏览器返回 0)
- 示例

## browser.ie()

检测浏览器是否为 IE.

- 参数：
  - 无
- 返回：
  - {Number} IE 版本号(非 IE 浏览器返回 0)
- 示例

## browser.safari()

检测浏览器是否为 Safari.

- 参数：
  - 无
- 返回：
  - {Number} Safari 版本号(非 Safari 浏览器返回 0)
- 示例

## browser.isStandard()

检测文档是否启用“标准模式”渲染，返回Boolean

## browser.isGecko()

检测浏览器的排版引擎是否为 gecko，返回Boolean

## browser.isWebkit()

检测浏览器的排版引擎是否为 webkit，返回Boolean

## browser.os()

获取用户操作系统类型: 'mac os_10.14', 'iphone os_10.14', 'ipad os_10.14', 'android os_10.14', 'windows os_10.14 64bit', 'unknown'

- 参数：
  - 无
- 返回：
  - {String} 系统 + 版本号
- 示例

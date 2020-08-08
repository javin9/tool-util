
### request(options)
Ajax方法，如果App支持端代理，会走端代理请求，其他底层调用axios方法 

### 引入方式
```javascript
  import {request} from '@tool/common'
  //或者 按需引入
  import {request} from '@tool/common/lib/request'
```

- 参数
 - @param {string} method 请求方式，默认是get请求
 - @param {string} url 请求路径，不需要添加域名
 - @param {object} params 请求方式为get时，查询字符串对象，和axios统一
 - @param {object} data 请求方式为post时，body参数，和axios统一
 - @param {object} headers 请求头参数
 - @param {boolean} hasSearch 是否需要拼接上次请求的search，默认false
- 返回值
 - @returns {Promise}

 

### 用法
```javascript
   //post请求
   request({
     method:"post",
     url:"/api/path/name",
     data:{
       name:'hello'
     }
   })

   //get请求 不携带window.location.search
   request({
     url:"/api/path/name",
     params:{
       name:'hello'
     }
   })

   //get请求 携带window.location.search
   request({
     url:"/api/path/name",
     params:{
       name:'hello'
     }
   })
```

### nativeProxyRequest
### 引入方式
```javascript
  import {nativeProxyRequest} from '@tool/common'
  //或者 按需引入
  import {nativeProxyRequest} from '@tool/common/lib/request'
```

## 用法
```javascript
/**
 * hybrid-sdk-sale方法封装
 * @param {String} method 请求类型，get/post
 * @param {String} url url，可以有query可以无query 缀在url后的额外参数，只能手动缀在url后，故做此兼容
 * @param {Object} body 请求body
 * @param {Object} headers 请求headers
 */
//GET请求，使用方 url上面拼接好参数
nativeProxyRequest('get','/api/list?t=2324',null)
```
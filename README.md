# wechat-miniprogram-tabs

## 特性
* 自定义颜色
* 滑动切换

### 下载
``` bash
git clone https://github.com/simsir-lin/wechat-miniprogram-tabs.git
```

### DEMO
1. 打开[微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，'本地小程序项目 - 添加项目'，项目目录选择为 example 目录

### 使用
1. 安装
```bash
npm install --save wechat-miniprogram-tabs
```
2. 在你的页面json中添加
``` javascript
{
  "usingComponents": {
    "tabs": "wechat-miniprogram-tabs/tabs",
    "tab": "wechat-miniprogram-tabs/tab"
  }
}
```
3. 每次引入或更新需先执行开发者工具的 npm 构建，[微信官方 npm 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
4. 在wxml中即可使用组件
``` html
<tabs>
  <tab label="第一个"></tab>
  <tab label="第二个"></tab>
</tabs>
```

### 注意
* 小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始

### Tabs Props

| name     | description              | type     | default value |
| :---------------- | :----------------------- | :------  | :------------ |
| current             | 当前激活标签页                 | Number    | 0          |
| activeColor             | 激活显示颜色                 | String    | #333333          |

### Tab Props

| name     | description              | type     | default value |
| :---------------- | :----------------------- | :------  | :------------ |
| label             | 标签页标题                 | String    |          |

### events

| name     | description              | parameters     |
| :---------------- | :----------------------- | :------  |
| change            | 切换                |   event.detail.index  |


### 贡献
如果你有好的意见或建议，欢迎给我提issue!

# tabs-wxapp
微信小程序标签页组件 wxapp tabs component

![tabs-wxapp](http://p2bkiq8gf.bkt.clouddn.com/18-2-7/40395371.jpg "tabs-wxapp")

### 下载
``` bash
git clone https://github.com/simsir-lin/tabs-wxapp.git
```

### 预览
打开[微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，'本地小程序项目 - 添加项目'，项目目录选择为 tabs-wxapp 的目录就可以了，添加项目后就可以进行组件源码的查看和预览demo了。

### 使用
1. 将 tabs-wxapp 目录下的components文件夹下的`tabs`拷贝到你的小程序目录下

2. 在你要使用的页面的json文件中引入组件，如：index页面的index.json
```
{
  "navigationBarTitleText": "首页",
  "usingComponents": {
    "tabs": "/components/tabs/tabs",
    "tab": "/components/tabs/tab"
  }
}
```

3. 在wxml中即可使用组件
```
<tabs current="0" active-color="red" bindchange="handleTabClick">
  <tab label="第一个">
    <image src="http://olf3xgrra.bkt.clouddn.com/simui-preview-img.jpg" style='width:100%' mode='widthFix'></image>
  </tab>
  <tab label="第二个">
    <view style='height:600rpx; text-align: center; font-size: 28rpx;padding:60rpx 0;'>
      滑动可切换Tab
    </view>
  </tab>
</tabs>
```

4. 如看不明白请直接参考项目实例(/pages/index/index)

### 注意
* 微信小程序基础库版本至少为1.6.4

### 贡献
如果你有好的意见或建议，欢迎给我提issue!

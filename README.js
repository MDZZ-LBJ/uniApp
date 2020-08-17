// 预览图片使用官方api只可以预览 不能增加其他功能 
// 如：保存图片等
// 实现： 单独用一个页面展示图片 添加长按事件 弹出底部菜单
//       增加保存图片按钮 ，点击调取下载图片api downloadFile 
//       获取本地临时路径 , 然后再调用saveImageToPhotosAlbum
//       保存到手机相册
// 注意：H5 中需配置跨域，小程序中预览需打开调试模式
//       微信后台配置 服务器配置downloadFile合法域名 需要加端口号
			
// 页面分享到微信群 好友 （这里是点击小程序上方三个小点）
//  要分享的页面中调用 onShareAppmessage

// 页面转发朋友圈 微博等
// pages.json 配置转发按钮  在要转发的页面中调用 onNavigationButtonTap 
// 注意：Hbuilderx 中mainfest.json 要配置对应sdk		

// 播放视频时 页面被隐藏时暂停视频
// 实现：onReady 时 调用api 获取视频对象 this.obj =  uni.createVideoContext('video标签的id')
//      onHide 隐藏时 暂停播放  this.obj.pause()
//      onShow 显示时 开始播放  this.play() 			
			
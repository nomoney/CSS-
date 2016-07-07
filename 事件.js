contextmenu   右键菜单
beforeunload  关闭窗口之前  event.returnValue= '关闭之前的消息'(ie or fiefox)|| return message (safari or chrome);
load 加载所有资源（图像，JavaScript文件，css文件）|| DOMContentLoaded (加载DOM树之后就会触发)
readystatechange ( readyState元素加载信息：uninitialized,loading,loaded,interactive,complete)
hashchange url中#后面部分发生变化触发 (event中属性oldURL,newURL 前后变化的完整URL)
orientationchange (移动端旋转属性window.orientationchange)
deviceorientation 检测设备方向变化（window.deviceorientation: alpha,beta,gamma,absolute,compassCalibrated=boolen 指南针是否校准）
devicemotion(表示设备移动信息：acceleration不考虑重力加速度，accelerationIncludingGravity考虑加速度interval 时间，rotationRate: alpha,beta,gamma)
touchstart,touchmove,touchend,touchcancel,touches targetTouches changeTouches,
gesturestart（一个手指在屏幕上另一个手指触摸触发）gesturechange(屏幕任何一个手指位置变化)gestureend(任何一个手指离开触发,还包括，rotation,scale)
事件委托：在最高层添加事件处理程序，再根据switch (event.target.id) 进行处理；
取消事件处理程序 有助于释放内存；  （onunload）
document.implementation.hasFeature('KeyboardEvent','3.0')  检测当前文档是否支持DOM 3.0;
event= document.createEvent  模拟创建事件对象(UIEvent(s),MouseEvents,HTMLEvents,MutationEvents) ele.dispatchEvent(event);
event= document.createEventObject()..............event.keycode=65, ele.fireEvent('事件处理名称',event对象);【IE事件模拟】



<view class='row'>

<view class='one'>
<image src='{{characters.wuxian.pic}}' class='picture'/>
<view class='title'>{{characters.wuxian.title}}</view>
<progress active='true' activeColor='#eb6100' class='progress'
border-radius= '10rpx' stroke-width='20rpx' percent="{{characters.wuxian.percent}}"/>
<view style='font-size:28rpx;color:#23256f;margin:20rpx;'>升级进度：{{characters.wuxian.percent*characters.wuxian.totallife/100}}/{{characters.wuxian.totallife}}</view>
<image bindtap='openad' data-num='0' src='{{feedpic}}' class='feed'/>
</view>

<view class='one'>
<image src='{{characters.wangji.pic}}' class='picture'/>
<view class='title'>{{characters.wangji.title}}</view>
<progress active='true' activeColor='#eb6100' class='progress'
border-radius= '10rpx' stroke-width='20rpx' percent="{{characters.wangji.percent}}"/>
<view style='font-size:28rpx;color:#23256f;margin:20rpx;'>升级进度：{{characters.wangji.percent*characters.wangji.totallife/100}}/{{characters.wangji.totallife}}</view>
<image bindtap='openad' data-num='1' src='{{feedpic}}' class='feed'/>
</view>


</view>

<view class='textss'>温馨提示：请不要清除QQ缓存或者让安全管家清除缓存，否则你的喂食数据将会丢失哦！</view>



<view wx:if='{{ad}}' class='ad'>
    <view style='text-align:center;margin-bottom:10rpx'>点击广告进行喂食</view>
    <view capture-bind:tap='ad' >
<ad unit-id="865145e97b641e355f3b0e642b52a157" type="card"></ad>
</view>

  </view>

    <button class='qqzone' bindtap='openqqzone'><image class='qqzone' src='/utils/qqzone.png'/></button>

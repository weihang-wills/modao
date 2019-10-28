<!-- 天气模块 -->
<view class='sw' style='margin-top: 160rpx;'>
<swiper autoplay='true' interval='5000' vertical='true' circular='true'>
<swiper-item class='item' wx:for='{{weathers}}' wx:key='index'>
  <view class='back'/>

  <text style='margin-left:20rpx;'>{{item.name}}：{{item.weather}}，{{item.temp}}°C</text>

</swiper-item>
  </swiper>
  </view>


<!-- 见闻录模块 -->

<view class='sw'>
<view class='card' wx:for='{{jianwen}}' wx:key='index'>
  <view class='back'/>
<text class='content'>{{item.content}}</text>

<view class='row'>
<view style='color:#9d078d;'>{{item.location}}</view>

<view class='list'>
<view wx:for='{{item.avatars}}' wx:key='index'>
<image src='{{item}}' class='avatar'/>
</view>
</view>
</view>



  </view>
  </view>
  


  <view class='bottom'/>




  <!-- 报名 -->

  <button class='baoming' open-type="getUserInfo" bindgetuserinfo='ad'><image class='baoming' src='../../utils/baoming.png'/></button>



  <view wx:if='{{ad}}' class='ad'>
      <view style='text-align:center;margin-bottom:10rpx'>点击广告进行报名，就有机会上见闻录哦</view>
      <view capture-bind:tap='tapad' >
  <ad unit-id="865145e97b641e355f3b0e642b52a157" type="card"></ad>
  </view>

    </view>

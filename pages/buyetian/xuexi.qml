

<view class='container3' style="background:url('{{background}}');background-size:100%;">

<view wx:if='{{selected}}'>
<view class='texts'><text>{{main.title}}</text></view>
<view class='hint'>{{main.hint}}</view>

<view wx:for='{{main.selects}}'>
<select style='font-size:28rpx;' data-index='{{item.navigator}}'
bindtap='navigator'>{{item.title}}</select>
</view>
</view>

<view wx:else>

  <view class='texts'><text>{{main.title}}</text></view>
  <view class='hint'>{{main.hint}}</view>

  <view wx:if='{{main.selects.over}}'>
  <select style='font-size:28rpx;' bindtap='end'>{{main.selects.title}}</select>
  </view>
  <view wx:else>
  <select style='font-size:28rpx;' bindtap='go'>{{main.selects.title}}</select>
  </view>

  <view class='ad' style='margin-top:60rpx;'>
      <view style='text-align:center;margin-bottom:10rpx'>点击广告可以再次获得答题机会</view>
      <view capture-bind:tap='restart' >
  <ad unit-id="d2bc2276ad7163a1e086faa49e176fe2" type="card"></ad>
  </view>
  </view>

</view>





  </view>

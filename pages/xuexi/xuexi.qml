

<view class='container2' style="background:url('{{background}}');background-size:100%;">

<view wx:if='{{selected}}'>
<view class='texts'>{{main.title}}</view>
<view class='hint'>{{main.hint}}</view>

<view wx:for='{{main.selects}}'>
<select data-index='{{item.navigator}}'
bindtap='navigator'>{{item.title}}</select>
</view>
</view>

<view wx:else>

  <view class='texts'>{{main.title}}</view>
  <view class='hint'>{{main.hint}}</view>

  <view wx:if='{{main.selects.over}}'>
  <select bindtap='end'>{{main.selects.title}}</select>
  </view>
  <view wx:else>
  <select bindtap='go'>{{main.selects.title}}</select>
  </view>


</view>





  </view>

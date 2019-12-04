  <view wx:if='{{check}}'>
<view class='container1'>

      <input style="margin:40rpx;" placeholder-class='holder' placeholder="请输入你的名字" bindinput='confirm' class='picker'/>
      <button bindtap='checkout' class='button1'><image src='../../utils/checkresult.png' class='checkresult'/></button>

</view>
</view>
<view wx:else>
  <view class='container2'>
<view class='title'>{{name}}</view>
  <text class='result'>{{name}}是由{{result}}做成的</text>

  <view class='row'>
    <view class='column'>
      <button class='iconbutton' bindtap='renew'>
        <image class='icon' src='../../utils/renew.png' /></button>
      <view style='font-size:28rpx;margin:0rpx;'>重来</view>
    </view>
    <view class='column'>
      <button open-type="share" share-type="{{59}}" class='iconbutton'>
        <image class='icon' src='../../utils/share.png' /></button>
      <view style='font-size:28rpx;margin:0rpx;'>分享</view>
    </view>
  </view>

</view>
</view>




<view wx:if='{{ad}}' class='adbottom'>
    <view style='text-align:center;margin-bottom:10rpx'>点击广告查看结果</view>
    <view capture-bind:tap='ad' >
<ad unit-id="2d8a13465bb0b9f4d56d9ddc8083ca96" type="card"></ad>
</view>

  </view>

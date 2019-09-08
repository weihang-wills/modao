<view wx:if='{{choose}}' class='container2'>

  <!-- true -->


  <view style="background-image:url({{background}});background-size:100%;background-repeat:no-repeat;position:absolute;width:inherit;height:inherit;z-index:-1;top:0;">
  </view>
  <view class='hint'>选择你最喜欢的一句话</view>

  <view wx:for='{{imglist}}' wx:key='index'>


    <image src='{{item.url}}' data-index='{{index}}' class='picker' bindtap='result' />


  </view>


</view>



<!-- false -->

<view wx:else class='container3'>
  <view style="background-image:url({{background}});" class='back'></view>

  <view class='top'>
    <view class="text">
      <text>你的另一半是：</text>
      <text style="font-size:64rpx;font-family:'Fangzhengke'">{{result.title}}</text>
    </view>

    <view class='text'>{{result.des}}</view>
    <image src='{{result.imageurl}}' mode="widthFix" class="image" />


  </view>

  <view class='row' style='margin:40rpx;'>
    <view class='column'>
      <button class='iconbutton' bindtap='renew'>
        <image class='icon' src='../../pages/index/src/renew.png' /></button>
      <view style='font-size:32rpx;'>重来</view>
    </view>
    <view class='column'>
      <button open-type="share" class='iconbutton'>
        <image class='icon' src='../../pages/index/src/share.png' /></button>
      <view style='font-size:32rpx;'>分享</view>
    </view>
  </view>


</view>

<home wx:if='{{home}}' />

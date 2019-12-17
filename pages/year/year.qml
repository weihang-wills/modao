<canvas canvas-id="icanvas" style="width: 750px; height:1084px;position:fixed;left:100%;" binderror='error' ></canvas>
<view wx:if='{{check}}'>
<view class='container1'>

    <input style="margin:40rpx;" placeholder-class='holder' placeholder="请输入你的名字" bindinput='confirm' class='picker'/>
    <button bindtap='checkout' class='button1'><image src='../../utils/checkresult.png' class='checkresult'/></button>

</view>
</view>
<view wx:else>
<view class='container2'>
  <view class='array'>
  <image src='{{userInfo.avatarUrl}}' class='avatar'/>
  <view style='margin-left:40rpx'/>
<view class='title'>{{name}}</view>
</view>
<view wx:for='{{result}}' wx:key='index'>
<view class='array'>
  <image src='../../utils/tik.png' class='tik'/>
<text class='result'>{{item}}</text>
</view>
</view>
<view style='margin:40rpx'/>

<view class='row'>
 <button class='longbutton' bindtap='saveimg' data-index='0'>
      <image class='longbutton' src='../../utils/saveimg.png' /></button>

<view style='margin-left:40rpx'/>

    <button bindtap='saveimg' data-index='1' class='longbutton'>
      <image class='longbutton' src='../../utils/fashuoshuo.png' /></button>

</view>

</view>
</view>





<view wx:if='{{ad}}' class='adbottom'>
  <view style='text-align:center;margin-bottom:10rpx'>点击广告查看结果</view>
  <view capture-bind:tap='ad' >
<ad unit-id="2d8a13465bb0b9f4d56d9ddc8083ca96" type="card"></ad>
</view>

</view>

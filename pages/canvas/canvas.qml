<view class='canvas'>
  <view style='margin:20rpx;font-size: 36rpx;'>我的头像</view>
  <canvas style="width: 320rpx; height: 320rpx;border-radius：5px;" canvas-id="firstCanvas">
    <image wx:if="{{canvasback}}" src='{{userInfo.avatarUrl}}' style="width: 320rpx; height: 320rpx;" /></canvas>


  <button bindtap='setavatar' class='setavatar'>
    <image src='../../utils/setavatar.png' style="width:371rpx;height:98rpx;" /></button>
</view>





<view class='bottom'>
  <view class='back' />
  <view class='hint'>点选以下头像挂件，就可预览效果</view>

  <scroll-view scroll-x class='scroll'>
<view class='item'>
    <view class='col'>
      <image class='cloth' src='../../utils/zipao.png' bindtap='ad' data-num='1' />
      <text>云梦紫莲</text>
    </view>
        </view>

<view class='item'>
    <view class='col'>
      <image class='cloth' src='../../utils/baipao.png' bindtap='ad' data-num='2' />
      <text>姑苏云纹</text>
    </view>
      </view>

<view class='item'>
    <view class='col'>
      <image class='cloth' src='../../utils/jinxingxuelang.png' bindtap='ad' data-num='3' />
      <text>金星雪浪袍</text>
    </view>
      </view>


      <view class='item'>
          <view class='col'>
            <image class='cloth' src='../../utils/qidai.png' />
            <text>陈情风流</text>
          </view>
            </view>


            <view class='item'>
                <view class='col'>
                  <image class='cloth' src='../../utils/qidai.png' />
                  <text>黑缎降灾</text>
                </view>
                  </view>







  </scroll-view>
</view>


<view wx:if='{{ad}}' class='ad'>
  <view style='text-align:center;margin-bottom:10rpx'>点击广告，就可以换上挂件！</view>
  <view capture-bind:tap='draw'>
    <ad unit-id="2d43eaa147c3683da0967a289861f5cd" type="card"></ad>
  </view>

</view>

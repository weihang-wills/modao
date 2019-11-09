
<home wx:if='{{home}}'/>
<image src="{{background}}" mode='widthFix' class='back'/>
<view class='container1'>
  <swiper current='{{current}}' >

    <swiper-item wx:for='{{quiz}}' wx:key='index' catchtouchmove='catchTouchMove'>
      <view class='title'>{{item.title}}</view>
      <view wx:for='{{item.choose}}' wx:key='index' data-index='{{item.index}}'
      >
        <select bindtap='choose' data-right='{{item.right}}' data-index='{{item.num}}'>{{item.name}}</select>
      </view>

    </swiper-item>


    <swiper-item wx:for='{{blank}}' wx:key='index' catchtouchmove='catchTouchMove'>
      <view class='column'>
      <view class='title'>{{item.title}}</view>
      <input style="margin:40rpx;" placeholder-class='title' placeholder="请在此填写答案" bindinput='confirm' class='picker' data-index='{{index}}' />
      <button class='iconbutton'
      open-type='getUserInfo'
      bindgetuserinfo='getUserInfo'
      bindtap='next'
      data-index='{{index}}'>
        <image class='icon' src='../index/src/next1.png' />
      </button>
      </view>

    </swiper-item>

    <swiper-item>
      <view class='contain'>
<image src='http://pwh.img.jogiter.cn/modao/fujiati.png' class='medal'/>
<image src='{{userInfo.avatarUrl}}' class='avatar'/>
<text style='margin-top:20rpx;margin-bottom:20rpx;'>{{userInfo.nickName}}</text>
<text>人不轻狂枉少年，希望你依如少年！</text>

        </view>
    </swiper-item>


  </swiper>

  <button wx:if='{{current==14}}'class='iconbutton'
  open-type='share'
  share-type="{{59}}"
  style='margin-top:40rpx;'
  >
    <image class='icon' src='../index/src/sharegreen.png' />
  </button>


  </view>
  <view wx:if='{{ad}}' class='ad'>
      <view style='text-align:center;margin-bottom:10rpx'>点击广告可以再次获得答题机会</view>
      <view capture-bind:tap='ad' >
  <ad unit-id="fbe126be3fb949a6058e74db9689d6e0" type="card"></ad>
  </view>

    </view>

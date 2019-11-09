<view style="background:url('{{background}}');background-size: 100%;">
<view class="container">
  <view class='topic'>
  <view qq:if='{{ploted}}'>{{plot}}{{tail}}</view>
  <view qq:else>{{finalplot}}<text>{{tail}}</text></view>
  </view>
  <swiper current='{{current}}'>
    <block qq:for='{{question}}' wx:key='index'>
      <swiper-item class='swiperitem' catchtouchmove='catchTouchMove'>
        <view class='title'>{{item.title}}</view>
        <picker class='picker' range='{{item.number}}' data-index='{{index}}' bindchange='pickerchange'>
          <view class='hint' qq:if='{{item.selected}}'>请点击选择</view>
          <view class='choose' qq:else>{{item.value}}</view>


        </picker>
        <button class='iconbutton' bindtap='confirm' data-index='{{index}}'>
          <image class='icon' src='../index/src/next.png' />
        </button>
      </swiper-item>


    </block>
    <swiper-item class='swiperitem'>
      <view class='row'>
        <view class='column'>
          <button class='iconbutton' bindtap='renew'>
            <image class='icon' src='../index/src/renew.png' /></button>
          <view>重来</view>
        </view>
        <view class='column'>
          <button open-type="share" share-type="{{59}}" class='iconbutton'>
            <image class='icon' src='../index/src/share.png' /></button>
          <view>分享</view>
        </view>
      </view>
    </swiper-item>

  </swiper>

<home wx:if='{{home}}'/>


</view>
</view>

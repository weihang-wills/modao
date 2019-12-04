<view class='row'>
<view class='{{current==0?"focus":"notfocus"}}' bindtap='changeswiper' data-swiper='0'>手机壁纸</view>
<view class='{{current==1?"focus":"notfocus"}}' bindtap='changeswiper' data-swiper='1'>情侣头像</view>
</view>

<swiper style='width:100%;height:1600rpx;' current='{{current}}'>
  <swiper-item>
    <scroll-view scroll-y>
      <view class='flow'>
        <view wx:for='{{flow}}' wx:key='index'>
          <image bindtap='add' data-src='{{item}}' mode='aspectFill' class='image' src='{{item}}' />
        </view>
        <view style='width:100%;height:60rpx;' />
      </view>

    </scroll-view>



  </swiper-item>
  <swiper-item>
    <scroll-view scroll-y>
      <view class='column'>
        <view wx:for='{{avatars}}' wx:key='index'>
          <view class='flow'>
            <image bindtap='add' data-src='{{item.left}}' mode='aspectFill' class='avatar' src='{{item.left}}' />
            <image bindtap='add' data-src='{{item.right}}' mode='aspectFill' class='avatar' src='{{item.right}}' />
        </view>
      </view>
      <view style='width:100%;height:60rpx;' />
          </view>

    </scroll-view>

  </swiper-item>


</swiper>





<view wx:if='{{ad}}' class='ad'>
  <view style='text-align:center;margin-bottom:10rpx'>点击广告就可以查看并保存壁纸哦</view>
  <view capture-bind:tap='tapad'>
    <ad unit-id="865145e97b641e355f3b0e642b52a157" type="card"></ad>
  </view>

</view>

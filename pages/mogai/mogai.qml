<view style="background:url('{{background}}');background-size: 100%;  background-repeat: no-repeat;width:750rpx;min-height:1200rpx;background-position:top;">

<!-- <zhujian
wx:for='{{zhangs}}'
wx:key='index'
zhang='{{item}}'/> -->

<view class='container1'>
<navigator url="/pages/xuexi/xuexi" hover-class="navigator-hover">
<zhujian zhang='{{zhangs[0]}}' />
</navigator>


<zhujian bindtap='nav' data-index='1' zhang='{{zhangs[1]}}' />


</view>
</view>

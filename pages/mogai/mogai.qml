<view style="background:url('{{background}}');background-size: 100%;  background-repeat: no-repeat;width:750rpx;min-height:1200rpx;background-position:top;">

<!-- <zhujian
wx:for='{{zhangs}}'
wx:key='index'
zhang='{{item}}'/> -->

<view class='container1'>
<navigator url="/pages/xuexi/xuexi" hover-class="navigator-hover">
<zhujian zhang='{{zhangs[0]}}' />
</navigator>


<zhujian bindtap='nav' data-index='1' data-url='../../pages/qiongqi/xuexi' zhang='{{zhangs[1]}}' />

<zhujian bindtap='nav' data-index='2'  data-url='../../pages/zhanqian/xuexi' zhang='{{zhangs[2]}}' />

<zhujian bindtap='nav' data-index='3'  data-url='../../pages/buyetian/xuexi' zhang='{{zhangs[3]}}' />

<text class='texts'>温馨提示：有的章节选择和之前章节的选择有关哦，如果遇到都是错误选择，可能是你之前的选择出错了呢…加油！</text>


</view>
</view>

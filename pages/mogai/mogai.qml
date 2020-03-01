<view style="background:url('{{background}}');background-size: 100%;  background-repeat: no-repeat;width:750rpx;min-height:1200rpx;background-position:top;">

<!-- <zhujian
wx:for='{{zhangs}}'
wx:key='index'
zhang='{{item}}'/> -->

<view class='container1'>
<navigator url="/pages/xuexi/xuexi" style='margin-top:20rpx' hover-class="navigator-hover">
<zhujian zhang='{{zhangs[0]}}' />
</navigator>


<zhujian bindtap='nav' data-index='1' data-url='../../pages/qiongqi/xuexi' zhang='{{zhangs[1]}}' />

<zhujian bindtap='nav' data-index='2'  data-url='../../pages/zhanqian/xuexi' zhang='{{zhangs[2]}}' />

<zhujian bindtap='nav' data-index='3'  data-url='../../pages/buyetian/xuexi' zhang='{{zhangs[3]}}' />

<zhujian bindtap='nav' data-index='4'  data-url='../../pages/ajing/xuexi' zhang='{{zhangs[4]}}' />

<zhujian bindtap='nav' data-index='5'  data-url='../../pages/luyu/xuexi' zhang='{{zhangs[5]}}' />

<text class='texts'>温馨提示：有的章节选择和之前章节的选择有关哦，如果某一章遇到都是错误选择，请回到之前的章节重新选择最佳的答案哦，因为会同时有多个正确答案哦…加油！</text>


</view>
</view>

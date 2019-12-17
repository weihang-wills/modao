

<view bindtap='video' class='tianguan'>
<image src='http://img.pangweihang.cn/tianguan/poster1.png' class='tianguanimg'/>
<text class='tianguantext'>天官预热阵地</text>
  </view>


<view style="background:url('{{background}}');background-size: 100%;background-repeat: no-repeat;">
  <view class='container1'>
    <view class='row'>
      <navigator url="/pages/lianhuawu/lianhuawu?back=yicheng" hover-class="navigator-hover">
        <image class='placecard' src='../newindex/src/yicheng.png' />
      </navigator>

  <navigator url="/pages/lianhuawu/lianhuawu?back=jinlintai" hover-class="navigator-hover">
        <image class='placecard'  src='../newindex/src/jinlintai.png' />
    </navigator>

    <navigator url="/pages/lianhuawu/lianhuawu?back=bujingshi" hover-class="navigator-hover">
          <image class='placecard'  src='../newindex/src/bujingshi.png' />
      </navigator>

      <navigator url="/pages/lianhuawu/lianhuawu?back=lianhuawu" hover-class="navigator-hover">
        <image class='placecard' src='../newindex/src/lianhua.png' />
      </navigator>


      <navigator  url="/pages/lianhuawu/lianhuawu?back=gusu" hover-class="navigator-hover">
        <image style='margin-right:20rpx;' class='placecard' src='../newindex/src/yun.png' />
      </navigator>


    </view>

    <button class='quiz' open-type='getUserInfo' bindgetuserinfo='getUserInfo' bindtap='toyear'>
      <image class='testcard1' src='../newindex/src/year.png' />
    </button>


    <navigator url="/pages/zucheng/zucheng" hover-class="navigator-hover">
      <image class='testcard' src='../newindex/src/zuchengrukou.png' />
    </navigator>


    <button class='quiz' open-type='getUserInfo' bindgetuserinfo='getUserInfo' bindtap='toavatar'>
      <image class='testcard1' src='../newindex/src/touxiangrukou.png' />
    </button>




    <navigator url="/pages/jianwen/jianwen" hover-class="navigator-hover">
      <image class='testcard' style='margin-top:0rpx;' src='../newindex/src/jianwenlu.png' />
    </navigator>

    <button class='quiz' open-type='getUserInfo' bindgetuserinfo='getUserInfo' bindtap='toquiz'>
      <image class='testcard1' src='../newindex/src/quiz.png' />
      <view class="incard">

        <view class='littlerow'>

          <image style='width:50rpx;height:50rpx;border-radius:50%' src='{{userInfo.avatarUrl}}' />
          <text style='margin-left:20rpx;max-width:200rpx;overflow:hidden;color:white;'>{{userInfo.nickName}}</text>
          <text style='margin-left:10rpx;color:#ffcd76;'>{{pass}}</text>
        </view>




      </view>

    </button>

    <button class='quiz' open-type='getUserInfo' bindgetuserinfo='getUserInfo' bindtap='toquiz1'>
      <image class='testcard1' src='../newindex/src/fujiaquiz.png' />
      <view class="incard">

        <view class='littlerow'>

          <image style='width:50rpx;height:50rpx;border-radius:50%' src='{{userInfo.avatarUrl}}' />
          <text style='margin-left:20rpx;max-width:200rpx;overflow:hidden;color:white;'>{{userInfo.nickName}}</text>
          <text style='margin-left:10rpx;color:#ffcd76;'>{{pass1}}</text>
        </view>




      </view>

    </button>

    <ad test-banner-type='three' style='width:632rpx;height:217rpx;padding=0rpx;' unit-id="eeeff4602aa805cb904a064ec3b2074d"></ad>

    <navigator url="/pages/index/index" hover-class="navigator-hover">
      <image class='testcard' src='../newindex/src/baoxiao.png' />
    </navigator>




    <navigator url="/pages/name/name" hover-class="navigator-hover">
      <image class='testcard' src='../newindex/src/name.png' />
    </navigator>

    <navigator url="/pages/lover/lover" hover-class="navigator-hover">
      <image class='testcard' src='../newindex/src/lover.png' />
    </navigator>





    <view class='button1'>喜欢我们可以右上角置顶哦</view>
    <button class='button1' open-type='feedback'>有什么想要更新的可以告诉我们>></button>
  </view>

  <view class='button1' style='margin-left:40rpx'>下面是广告区，爱点不点，点了最好</view>
  <view class='ad'>
    <ad unit-id="1c669e4ebba994d5eea5188f6cceb15e" type="feeds"></ad>
    <ad unit-id="eeeff4602aa805cb904a064ec3b2074d"></ad>
  </view>





</view>

<view wx:if='{{ad}}' class='adbottom'>
    <view style='text-align:center;margin-bottom:10rpx'>点击广告查看结果</view>
    <view capture-bind:tap='ad' >
<ad unit-id="2d8a13465bb0b9f4d56d9ddc8083ca96" type="card"></ad>
</view>

  </view>

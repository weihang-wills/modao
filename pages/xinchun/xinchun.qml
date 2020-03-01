<view style='height:300rpx' />
<view class='row' style='font-size: 28rpx;color:#ffffff;'>我的战队</view>



<view wx:if='{{teamid||hasteam}}'>
  <!-- 队伍信息 -->
  <view style='margin:20rpx;' />
  <view class='row'>
    <view class='row' style='margin:20rpx;'>
      <image src='../../utils/team.png' class='icon' />
      <text style='margin-left:20rpx;'>{{teamname}}</text>
    </view>
    <view class='row' style='margin:20rpx;'>
      <image src='../../utils/yuanqi.png' class='icon' />
      <text style='margin-left:20rpx;'>{{newzans}}元气</text>
    </view>
  </view>
  <!-- 队员列表 -->
  <view class='column'>
<view style='color:white;text-align:center;font-size:28rpx;'>（可以点击队员列表中的头像联系Ta哦）</view>
  </view>
  <view class='row'>

    <view wx:for='{{teammember}}' wx:key='index'>

      <view class='column'>
        <button bindaddfriend='addfriend' open-type='addFriend' open-id='{{item.openid}}' class='avatar' style='margin:20rpx 20rpx 10rpx 20rpx;'>
          <image src='{{item.avatar}}' class='avatar' />
        </button>
        <text>{{item.nickname}}</text>
      </view>

    </view>
  </view>


  <!-- 按钮 -->
  <view style='position:fixed;bottom:20rpx;'>
    <view class='row' style='width:750rpx;'>
      <view wx:if='{{!hasteam}}'>
        <button style='margin:20rpx;' class='butt' bindgetuserinfo='join' open-type='getUserInfo'>
          <image src='../../utils/join.png' class='butt' /></button>
      </view>
      <view wx:else>
        <button style='margin:20rpx;' class='butt' bindgetuserinfo='front' open-type='getUserInfo'>
          <image src='../../utils/daqi.png' class='butt' /></button>
      </view>
      <view>
        <button style='margin:20rpx;' class='butt' open-type='share'>
          <image src='../../utils/invite.png' class='butt' /></button>
      </view>
    </view>
  </view>

</view>


<view wx:else class='column'>
  <input bindinput='getinput' placeholder='输入你的队伍名称（10字以内）' maxlength='10' class='picker' placeholder-style='color:white;' />
  <view style='margin:30rpx' />
  <button open-type='getUserInfo' bindgetuserinfo='setup' class='butt'>
    <image src='../../utils/setup.png' class='butt' /></button>
</view>





<!-- 规则模块 -->

<view class='toprow'>
  <image style='width:50%;margin-left:10rpx;' src='https://pangweihang.cn/modao/modao/prize.png' class='prize' />
  <text style='width:50%;font-size:28rpx;color:white;margin-left:20rpx;margin-top:20rpx;'>活动规则\r\n{{rules}}</text>
</view>
<!-- 中奖名单 -->
<view style='height:60rpx' />
<view class='row'>
  <view class='board'>
    <view class='row'>
      <image src='../../utils/prize.png' class='prizetitle' />
    </view>
    <text>{{prizelist}}</text>
  </view>
</view>

<view style='height:180rpx' />

<view wx:if='{{ad}}' class='adbottom'>
  <view style='text-align:center;margin:10rpx'>点击广告为队伍打气</view>
  <view capture-bind:tap='ad' >
<ad unit-id="2d8a13465bb0b9f4d56d9ddc8083ca96" type="card"></ad>
</view>

</view>

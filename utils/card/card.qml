<view class='row'>
  <view class='mock' />
  <view class="avatar">
    <image src='{{innerText.avatarimg}}' class='avatarimg' />

  </view>

  <view class='column'>
    <view class='name'>{{innerText.name}}</view>
    <view class='content'>{{innerText.content}}</view>
    <image src='{{innerText.contentimg}}' class='contentimg' mode='widthFix' />
    <view class='address'>{{innerText.address}}</view>


    <view class='commentlogo1'>
      <image src='{{innerText.commentlogo}}' class='commentlogo' />
    </view>


    <view class='total'>
      <view class='dianzan'>

        <image src='{{innerText.heart}}' class='heart' />

        <text class='commentname'>{{innerText.commentname}}</text>
      </view>


      <view class='comment' wx:for='{{innerText.comment}}' wx:key='index'>
        <text class='commentname'>{{item.commentname}}：</text>
        <text class='commentdetail'>{{item.commentdetail}}</text>

      </view>
      <view class='blank' />
    </view>

  </view>

</view>

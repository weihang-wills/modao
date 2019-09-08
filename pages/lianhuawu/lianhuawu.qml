

<view style="background-image:url('{{background}}');background-size: 100%;background-repeat: repeat-y;">
<card
wx:for='{{innertext}}'
wx:key="index"
inner-text='{{item}}'></card>

<home wx:if='{{home}}'/>

<view class='ad'>
<view class='mock'/>
<ad class='add' unit-id="d2bc2276ad7163a1e086faa49e176fe2" type="card"></ad>
</view>
</view>

<view class="container log-list">
  <block wx:for="{{logs}}" wx:for-item="log" wx:key='index'>
    <text class="log-item">{{index + 1}}. {{log}}</text>
  </block>
</view>
<template>
	<view class="page">
		 <view class="search-block">
			 <view class="search-ico-wrapper">
			 		<image class="search-ico" src="../../static/search.png"  ></image>
			 </view>
			 <input class="search-text" type="text" placeholder="搜索预告" maxlength="10" focus />
		 </view>
		 
		 <view class="movie-list page-block">
			 <view class="movie-wrapper">
				  <image class="poster" src="../../static/poster.jpeg"  ></image>
			 </view>
			 <view class="movie-wrapper">
			 	  <image class="poster" src="../../static/poster.jpeg"  ></image>
			 </view>
			 <view class="movie-wrapper">
			 	  <image class="poster" src="../../static/poster.jpeg"  ></image>
			 </view>
			 <view class="movie-wrapper">
			 	  <image class="poster" src="../../static/poster.jpeg"  ></image>
			 </view>
			 <view class="movie-wrapper">
			 		<image class="poster" src="../../static/poster.jpeg"  ></image>
			 </view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("search.css");
</style>

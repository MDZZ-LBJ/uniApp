<template>
	<view class="page">
		 <view class="search-block">
			 <view class="search-ico-wrapper">
			 		<image class="search-ico" src="../../static/search.png"  ></image>
			 </view>
			 <input class="search-text" type="text" placeholder="搜索预告" maxlength="10" focus />
		 </view>
		 
		 <view class="movie-list page-block">
			 <view class="movie-wrapper" v-for="item in moveList">
				  <image @click="goDetail(item)"  class="poster" src="../../static/poster.jpeg"  ></image>
			 </view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				moveList:20
			}
		},
		methods: {
			goDetail(id){
				uni.navigateTo({
					url:`../detail/detail?id=${id}`
				})
			}
		}
	}
</script>

<style>
@import url("search.css");
</style>

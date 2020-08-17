<template>
	<view class="page">
		<view class="player">
			<video class="movie" src="http://vfx.mtime.cn/Video/2019/03/09/mp4/190309153658147087.mp4"></video>
		</view>
		<view class="movie-info">
			<image class="poster" src="../../static/poster.jpeg"  ></image>
			<view class="movie-dec">
				<view class="title">警察故事</view>
				<view class="basic-info">中国/动作/警匪</view>
				<view class="basic-info">2020-08-12</view>
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
		onLoad(movieId){
			console.log(movieId)
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("detail.css");
</style>

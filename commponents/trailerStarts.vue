<template>
	
	<view class="trallerStars">
		<view class="movie-score-wrapper">
				<image class="star-ico" src="../static/star.png"></image>
				<view class="movie-score">
				   {{innnerScore}}
				</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		props:{
			innnerScore:0,
		}
	}
</script>

<style>
	.movie-score-wrapper{
		display: flex;
		flex-direction: row;
	}
	
	.star-ico{
		width: 20upx;
		height: 20upx;
		margin-top: 6upx;
	}
	.movie-score{
		font-size: 12upx;
		color: grey;
		margin-left: 8upx;
	}
</style>

<template>
	<view class="page">
		
		 <swiper class="carousl" :indicator-dots="true" :autoplay="true" >
		          <swiper-item v-for="item in carouselList" :key='item.src'>
					   <image class="carousl" :src="item.src" ></image>
		          </swiper-item>
		 </swiper>
		 
		 <view class="page-block super-hot">
			 <view class="hot-title-wrapper">
				 <image class="hot-ico" src="../../static/hot.png" ></image>
				 <view class="hot-title">
					 热门超英
				 </view>
			 </view>
		 </view>
		
		 <scroll-view scroll-x="true" class="page-block hot">
			 <view class="single-poster" v-for="(item,index) in hotList" :key='index'>
				 <view class="poster-wrapper">
					 <image class="poster" :src="item.src"></image>
					 <view class="movie-name">
					 		{{item.name}}
					 </view>
					<trallerStars :innnerScore='item.score'></trallerStars>
				 </view>
			 </view>
		 </scroll-view>
		 
		 <view class="page-block super-hot">
		 			 <view class="hot-title-wrapper">
		 				 <image class="hot-ico" src="../../static/hot.png" ></image>
		 				 <view class="hot-title">
		 					 热门预告
		 				 </view>
		 			 </view>
		 </view>
		 
		 <view class="hot-movies page-block">
			 <video class="hot-movie-single" src="http://vfx.mtime.cn/Video/2019/03/09/mp4/190309153658147087.mp4"></video>
			 <video class="hot-movie-single" src="http://vfx.mtime.cn/Video/2019/03/14/mp4/190314102306987969.mp4"></video>
		 </view>
		 
		 <view class="page-block super-hot">
		 			 <view class="hot-title-wrapper">
		 				 <image class="hot-ico" src="../../static/hot.png" ></image>
		 				 <view class="hot-title">
		 					 猜你喜欢
		 				 </view>
		 			 </view>
		 </view>
		 
		 <view class="page-block guess-u-like">
			 <view class="single-like-movie" v-for="(item , index) in  guessULikeList" :key='index'>
				 <image :src="item.src" class="like-movie"></image>
				 <view class="movie-desc">
					 <view class="movie-title">
					 	  {{item.name}}			 
					 </view>
					 <trallerStars nnnerScore='4.4'></trallerStars>
					 <view class="movie-info">
					 	  {{item.desc}}				 
					 </view>
				 </view>
				 <view class="movie-oper"  @click="praiseMe(index)" >
					 <image src="../../static/good.png" class="praise-ico"></image>
					 <view class="praise-me">点赞</view>
					 <view :animation='animationDataArr[index]' class="praise-me animation-opacity">+1</view>
				 </view>
			 </view>
		 </view>
		 
		 
	</view>
</template>

<script>
	import common from '../../common/common.js'
	import trallerStars from '../../commponents/trailerStarts.vue'
	export default {
		data() {
			return {
				carouselList: [],
				hotList:[
					{
						src:'../../static/poster.jpeg',
						name:'dbiadieqwwwwwwwwwwwwww',
						score:'9.0分'
					},
					{
						src:'../../static/poster.jpeg',
						name:'dbiadieqwwwwwwwwwwwwww',
						score:'9.0分'
					},
					{
						src:'../../static/poster.jpeg',
						name:'dbiadieqwwwwwwwwwwwwww',
						score:'2.0分'
					},
					{
						src:'../../static/poster.jpeg',
						name:'dbiadieqwwwwwwwwwwwwww',
						score:'4.3分'
					},
					{
						src:'../../static/poster.jpeg',
						name:'dbiadieqwwwwwwwwwwwwww',
						score:'9.0分'
					},
					{
						src:'../../static/poster.jpeg',
						name:'dbiadieqwwwwwwwwwwwwww',
						score:'9.0分'
					},
				],
				guessULikeList:[
					{
						src:'../../static/poster.jpeg',
						name:'警察故事',
						desc:'2020-08-13'
					},
					{
						src:'../../static/poster.jpeg',
						name:'警察故事',
						desc:'2020-08-13'
					}
				],
				animationData:{},
				animationDataArr:[
					{},{}
				]
			}
		},
	    components:{
			trallerStars
		},
		onLoad() {
			// #ifdef APP-PLUS || MP-WEIXIN
			//创建临时动画对象 只编译app和小程序  H5不支持动画api
			this.animation=uni.createAnimation()
			// #endif
			
           // 请求轮播图数据
           this.getSwiper();
		},
		onUnload(){
			//页面卸载的时候清除动画对象
		   this.animationDataArr=[]
		},
		onPullDownRefresh(){
			console.log('下拉刷新')
			// h5 不会自动关闭刷新
			setTimeout(()=>uni.stopPullDownRefresh(),500)
		},
		methods: {
           getSwiper(){
			   uni.request({
			   		url: `${common.serverUrl}/index/carousel/list?qq=751757854`, //仅为示例，并非真实接口地址。
			   		data: {},
			   		header: {},
			   		method:"POST",
			   		success: (res) => {
			   			this.carouselList = [
			   				{src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3462392350,62626007&fm=26&gp=0.jpg'},
			   			    {src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=372372667,1126179944&fm=26&gp=0.jpg'},
			   			    {src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1796762658,4159569164&fm=26&gp=0.jpg'}
			   			]
			   				}
			   		});
		   },
		   // 点赞动画效果 
		   praiseMe(index){
			   // #ifdef APP-PLUS || MP-WEIXIN 
			   console.log(index)
			   // 只编译app和小程序  H5动画api支持不友好
			   // 构建动画数据 通过step来表示这组动画的完成
			   this.animation.translateY(-60).opacity(1).step({duration:400})
			   this.animationData = this.animation 
			   this.animationDataArr[index]=this.animation.export()
			   // 还原动画
			   setTimeout(()=>{
				   this.animation.translateY(0).opacity(0).step({duration:0})
				   this.animationData = this.animation
				   this.animationDataArr[index]=this.animation.export()
			   },500)
			  //this.$forceUpdate(); H5页面不刷新 强制刷新
			  // #endif
		   }
		}
	}
</script>

<style>
	@import url("index.css");
</style>

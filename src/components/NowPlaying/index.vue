<template>
    <div class="movie_body" ref = "movie_body">
    <loading v-if="isLoading"></loading>
        <scroller v-else :handleToScroll="handleToScroll" :toEnd="toEnd">
            <ul>
                <p class = "scroll-msg">{{scrollMsg}}</p>
                <li v-for="movie in movieList" :key = "movie.id">
                    <div class="pic_show" @tap="handleToDetail(movie.id)"><img :src="movie.img | setWH('128.180')"></div>
                    <div class="info_list">
                        <h2 @tap="handleToDetail(movie.id)">{{movie.nm}}<img v-if="movie.version" src ="@/assets/maxs.png"></h2>
                        <p>观众评分 <span class="grade">{{movie.sc}}</span></p>
                        <p>主演: {{movie.star}}</p>
                        <p>{{movie.showInfo}}</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>

            </ul>
        </scroller>
    </div>
</template>

<script>
import BScorll from 'better-scroll'


export default {
    name : 'NowPlaying',
    data() {
        return {
            movieList: [],
            scrollMsg:'',
            isLoading:true,
            preMovieId: -1,

        }
    },
    activated() {
        var cityId = this.$store.state.city.id
        if(this.preMovieId == cityId ){return}
        this.axios.get('/api/movieOnInfoList?cityId='+cityId).then((res) => {
            if (res.data.msg =='ok'){
                this.movieList = res.data.data.movieList
                this.isLoading = false
                this.preMovieId = cityId
                // this.$nextTick(() => {
                //     var scroll = new BScorll(this.$refs.movie_body,{
                //         tap: true,
                //         probeType: 1,

                //     });
                //     scroll.on('scroll',(position)=>{
                //         if(position.y >30){
                //             this.scrollMsg ="正在更新中"
                //         }
                //     scroll.on('touchEnd',(position)=>{
                //         if(position.y >30){
                //             this.axios.get('/api/movieOnInfoList?cityId=10').then((res) => {
                //                 if (res.data.msg =='ok'){
                //                     this.scrollMsg ="更新成功";
                //                     setTimeout(()=>{
                //                         this.movieList = res.data.data.movieList
                //                         this.scrollMsg =""

                //                     },1000)
                //                 }
                //              })
                //         }
                //     })
                //     })
                // })
            }
        })
    },
    methods:{
        handleToDetail(index){
            this.$router.push('/movie/detail/1/'+ index)
        },
        handleToScroll(position){
            if(position.y >30){
                this.scrollMsg ="正在更新中"
            }
        },
        toEnd(position){
            if(position.y >30){
                this.axios.get('/api/movieOnInfoList?cityId=10').then((res) => {
                    if (res.data.msg =='ok'){
                        this.scrollMsg ="更新成功";
                        setTimeout(()=>{
                            this.movieList = res.data.data.movieList
                            this.scrollMsg =""

                        },1000)
                    }
                })
            }
        }

    }
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .scroll-msg{margin: 0; padding: 0; text-align: center; color: rgb(120, 115, 115);}
</style>

<template>
    <div class="cinema_body">
        <ul>
            <li v-for ="cinema in cinemaList">
                <div>
                    <span>{{cinema.nm}}</span>
                    <span class="q"><span class="price">{{cinema.sellPrice}}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{cinema.addr}}</span>
                    <span>{{cinema.distance}}</span>
                </div>
                <div class="card">
                    <div  v-for="(value,key) in cinema.tag" v-if="value==1" :class = "key | formatClass">{{key | formatCard}}</div>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name : 'CiList',
    data() {
        return {
            cinemaList:[],
        }
    },
    mounted() {
        this.axios.get('/api/cinemaList?cityId=10').then((res) => {
            if(res.data.msg == 'ok'){
                this.cinemaList = res.data.data.cinemas
            }
        })
    },
    filters:{
        
        formatCard(key){
            var data = [
                {key :"allowRefund", card : "改签"},
                {key :"sell", card : "折扣卡"},
                {key :"endorse", card : "退"},
                {key :"snack", card : "小吃"},
            ];

            for(var i = 0; i < data.length; i ++){
                if(data[i].key == key){
                    console.log(1);
                    
                    
                    return data[i].card
                }
            }
            return ""
        },
        formatClass(key){
                       var data = [
                {key :"allowRefund", card : "or"},
                {key :"sell", card : "bl"},
                {key :"endorse", card : "or"},
                {key :"snack", card : "bl"},
            ];

            for(var i = 0; i < data.length; i ++){
                if(data[i].key == key){
                    console.log(1);
                    
                    
                    return data[i].card
                }
            }
            return ""

        }

    }
}
</script>

<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>

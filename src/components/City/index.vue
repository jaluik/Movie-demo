<template>
    <div class="city_body">
        <div class="city_list" >
            <loading v-if="isLoading"></loading>
            <scroller v-else ref = "city_list">
                <div>
                    <div class="city_hot">
                        <h2>热门城市</h2>
                        <ul class="clearfix" >
                            <li v-for="(city,index) in hotList" :key ="index" @tap="handleToCity(city.nm, city.id)">{{city.nm}}</li>
                        </ul>
                    </div>
                    <div class="city_sort" ref = "city_sort" >
                        <div v-for ="item in cityList" :key = "item.index">
                            <h2>{{item.index}}</h2>
                            <ul>
                                <li v-for= "city in item.list" :key ="city.id" @tap="handleToCity(city.nm, city.id)" >{{city.nm}}</li>
                            </ul>
                        </div>	
                    </div>
                </div>
            </scroller>
        </div>
        <div class="city_index">
            <ul>
                <li  v-for="(item,index) in cityList" :key = "item.id" @toustart = "toScrollTop(index)">{{item.index}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name : 'City',
    data(){
        return {
            hotList: [],
            cityList: [],
            isLoading:true
            
        }
    },
    mounted(){
        var cityList = window.localStorage.getItem('cityList')
        var hotList = window.localStorage.getItem('hotList')  
        if(cityList && hotList){
            this.cityList = JSON.parse(cityList)
            this.hotList = JSON.parse(hotList)
            this.isLoading = false 
        }else{
            this.axios.get('/api/cityList').then((res) =>{
                if(res.data.msg == 'ok'){
                   var cities = res.data.data.cities;
                   [this.cityList, this.hotList] = this.formatCitylist(cities) 
                   this.isLoading = false  
                   window.localStorage.setItem('cityList',JSON.stringify(this.cityList))
                    window.localStorage.setItem('hotList',JSON.stringify(this.hotList))
                   
                }
            })
        }      

    },
    methods:{
        formatCitylist(cities){
            var cityList =[];
            var hotList = [];
            // 转换的样式   [{index: 'B',list: [{nm: '北京', id: 1}]}]
            for(var i = 0; i < cities.length; i++){
                if(cities[i].isHot == 1){
                    hotList.push({nm: cities[i].nm, id :cities[i].id})
                }
                var firstLeter = cities[i].py.substring(0,1).toUpperCase();
                if(toCom(firstLeter)){  //已添加
                for(var j =0; j < cityList.length; j ++){
                    if(cityList[j].index == firstLeter){
                        cityList[j].list.push({nm: cities[i].nm, id: cities[i].id})

                    }
                }
                }
                else{  //未添加
                    cityList.push({index: firstLeter, list:[{nm: cities[i].nm, id: cities[i].id}]})
                }
            };
           
            function toCom(firstLeter){
                for(var i = 0;i <cityList.length; i ++){
                    if (cityList[i].index == firstLeter){
                        return true
                    }
               
                }     
                return false

            }
            cityList.sort((a,b) =>{
                if(a.index > b.index){
                    return 1
                }else{
                    return -1
                }

            })
           return [cityList, hotList ]
        },
        toScrollTop(index){
            var h2 = this.$refs.city_sort.getElementsByTagName('h2')
            this.$refs.city_list.toScrollTop(-h2[index].offsetTop)
        },
        handleToCity(nm, id){
            this.$store.commit('city/CITY_INFO', {nm, id}),
            window.localStorage.setItem('nowNm', nm)
            window.localStorage.setItem('nowId', id)
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>

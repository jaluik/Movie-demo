<template>
    <div>
        <Header title='我的电影'/>
        <Login />
        <TabBar />       
    </div>
</template>

<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Login from '@/components/Login'


export default {
    name:'Mine',
    components:{
        Header,
        TabBar,
        Login
    }
}
</script>

<style>

</style>

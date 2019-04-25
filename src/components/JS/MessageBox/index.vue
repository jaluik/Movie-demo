<template>
    <div class= "messageBox">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <div>
            <div @touchstart='handleCancle'>{{ cancel }}</div>
            <div @touchstart='handleOk'>{{ ok }}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'MessageBox'
        
    }
</script>

<style scoped>
.messageBox{width: 200px; height: 120px; border: 1px #ccc solid; border-radius: 4px; background-color: #fff;box-shadow: 3px 3px 3px 3px #ccc; position: absolute; left: 50%;top: 50%;margin: -60px 0 0 -100px;}
.messageBox h2{line-height: 40px; text-align: center;font-size: 18px;}
.messageBox p{line-height: 40px; text-align: center;}
.messageBox>div{display: flex;position: absolute;bottom: 0; left: 0; width: 100%;border-top: 1px solid #ccc;}
.messageBox>div div{flex:1; text-align: center; line-height: 30px; border-right: 1px solid #ccc;}
.messageBox>div div:last-child{border: none;}
</style>
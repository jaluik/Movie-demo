const state = {
    nm:window.localStorage.getItem('nowNm')  || '北京',
    id:window.localStorage.getItem('nowId') ||  1
}

const actions = {

}

const mutations = {
    CITY_INFO(state, playload){
        state.nm = playload.nm,
        state.id = playload.id

    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let defaultCity="北京"
try{
    if(localStorage.city){
        defaultCity= localStorage.city 
    }
}catch(e){}
export default new Vuex.Store({
    state:{
        city:defaultCity,
        isShow:true
    },
    actions:{
        changeCity(ctx,city){
            ctx.commit('changeCity',city)
        },
        showWhich(ctx,bool){
            ctx.commit('showWhich',bool)
        }
    },
    mutations:{
        changeCity(state,city){
            state.city=city;
            try{
                localStorage.city=city;
            }catch(e){}
            
        },
        showWhich(state,bool){
            state.isShow=bool;
            try{
                localStorage.isShow=bool;
            }catch(e){}
            
        }
    }
})
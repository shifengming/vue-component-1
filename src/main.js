import Vue from 'vue'
import App from './App.vue'
Vue.prototype.$bus = new Vue();//son $emit

Vue.config.productionTip = false
// 向上通知
Vue.prototype.$dispatch = function(eventName,value){
  let parent = this.$parent;
  while(parent){
      parent.$emit(eventName,value);
      parent = parent.$parent
  }
}
// 向下传递
Vue.prototype.$broadcast = function(eventName,value){
   // 获取当前组件下的所有的孩子
   const broadcast = (children) =>{
      children.forEach(child => {
          child.$emit(eventName,value);
          if(child.$children){
              broadcast(child.$children);
          }
       });
   }
   broadcast(this.$children);
 
}
window.console.log(Vue.prototype)

new Vue({
  render: h => h(App),
}).$mount('#app')

export default {
    mounted(){
        alert(1)
    },
    props:{
        render:{
            type:Function
        },
        item:{
            type:String
        }
    },
    render(h){//createElemet
        return this.render(h,this.item)
    }
}
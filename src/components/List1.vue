<template>
    <div>
        <template v-for="(item,index) in data">
            <!-- <li :key="index" v-if="!render">{{item}}</li> -->
            <!-- <ListItem v-else :key="index" :render="render" :item="item"></ListItem> -->
            <!-- <ListItem :key="index" :render="render" :item="item"></ListItem> -->
            <slot name="1" :item="item" :a="1"></slot>{item:xxx,a:1}
        </template>
    </div>
</template>
<script>
// import ListItem from './ListItem';
    export default {
        components:{
            // ListItem
        },
        
        props:{
            render:{
                type:Function
            },
            data:{
                type: Array,
                default:() => []
            }
        }
    }
</script>
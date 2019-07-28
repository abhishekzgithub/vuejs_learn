<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name is {{switchName()}}</p>
        <p>User age is {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Prop Name</button>
    </div>
</template>

<script>
import {eventBus} from '../../main.js';
export default{
    props:{
        myName:{
            type: String,
        }
        ,userAge: Number
        ,resetFn:Function //this prop is coming from the parent User.vue and will change both the child and 
                            //parent value. this prop is setting the value on both levels.
    }
    ,methods:{
        switchName(){
            return this.myName.split("").reverse().join("");
        }
        ,resetName(){
            this.myName = "Maria"
            // this was 
            //used to send the name back to the parent component which is user.vue
            //this.$emit('nameWasReset',this.myName)
        }
        
    }
    ,created(){
        eventBus.$on('ageWasEdited',(age)=>{
            this.userAge=age;
        });  
        }
}
</script>

<style scoped>
    div{
        background-color: blue;
    }
</style>
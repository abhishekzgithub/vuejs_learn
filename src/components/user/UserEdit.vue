<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="changeAge"> Change the age</button>
        <p>Age is : {{userAge}}</p>
    </div>
</template>

<script>
import {eventBus} from '../../main.js';
export default{
    props:['userAge']
    ,data :function(){
        this.userAge
    }
    ,methods:{
        changeAge(){
            this.userAge=this.userAge+20
            //this.$emit('ageWasEdited',this.userAge)
            eventBus.$emit('ageWasEdited',this.userAge);
        }

    }

}
</script>

<style scoped>
    div{
        background-color: red;
    }
</style>
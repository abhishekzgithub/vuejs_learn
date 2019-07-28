<template>
<div>
  <div>
    <app-servers></app-servers>
  </div>
  
  <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import User from './components/user/User.vue';

export default {
    components: {
        appUser: User
    }
}
</script>

<style scoped>
div.component{
        border: 1px solid black;
        padding: 30px;
    }
</style>

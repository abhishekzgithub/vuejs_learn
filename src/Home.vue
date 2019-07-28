<template>
<div>
    <app-server-status></app-server-status>
</div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";
export default {
components:{
    'app-server-status':ServerStatus
}
};
</script>

<style>

</style>

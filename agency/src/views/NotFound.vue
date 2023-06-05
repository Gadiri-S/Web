<template>
<div class="wrapper">
<div class="not-found">
<h1>404 not found</h1>
<span>Go back to the <router-link to='/'>website</router-link></span>
</div></div>
</template>

<script>
export default {
name: 'NotFound',
};
</script>

<style scoped>

.wrapper{
min-height: 100vh;

}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
text-align: center;
margin-top: 100px;
color: #002fca;
}

 

h1{
  font-size: 60px;
}
</style>
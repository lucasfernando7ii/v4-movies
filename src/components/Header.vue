<template>
  <header id ="header">
    <router-link to="/" exact>v4-Movies! </router-link>
<button>
  <router-link to="/favoritos" class="my-favorites">Favoritos</router-link>
</button>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
#header{
  display: flex;
  align-items:  center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background-color: blueviolet;
}


#header a{
  text-decoration: none;
  font-size: 30px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-weight: bold;
}

button{
  cursor: pointer;
  background-color: rgb(46, 1, 88);
  padding: 5px 15px;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
}

</style>
<template>
  <header id ="header">
    <button>
    <router-link to="/" exact>v4-Movies </router-link>
    </button>
<button>
  <router-link to="/favoritos" class="my-favorites">Favoritos</router-link>
</button>
<button>
  <router-link to="/contato" class="my-contact">Contato</router-link>
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
  background-color: rgb(53, 49, 104);
  position: fixed;
  top:0;
  left: 0;
  
}


#header a{
  text-decoration: none;
  font-size: 28px;
  color: rgb(250, 250, 250);
  cursor: pointer;
  font-weight: bold;

}

button{
  cursor: pointer;
  background-color:rgb(53, 49, 104);
  padding: 5px 15px;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
}

</style>
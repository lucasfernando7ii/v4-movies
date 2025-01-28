<template>
  <header id ="header">
    <button>
    <router-link to="/" exact>v4-Movies! </router-link>
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
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "c643cxdo",
  };
</script>


<script>
  // Preenchemos previamente o ID do seu aplicativo no URL do widget: 'https://widget.intercom.io/widget/c643cxdo'
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/c643cxdo';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
</script>


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
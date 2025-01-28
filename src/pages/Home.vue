<template>
  <div id="Home">
    <div class="lista-filmes" v-if="loading">
      <Loading/>
    </div>
    <div class="lista-filmes" v-else>
      <article class="filme" v-for="filme in filmes" :key="filme.id">
        <strong>{{filme.nome}}</strong>
        <img :src="filme.foto" :alt="filme.nome">
        <router-link :to="`/filme/${filme.id}`">Acessar</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import api from '../service/api';
import Loading from '../components/Loading.vue';

export default {
  components:{
    Loading
  },
  data(){
    return{
      filmes:[],
      loading: true,
    }
  },
  async created(){
    const response = await api.get('?api=filmes')
    this.filmes = response.data;
    this.loading = false;
 

  }
}
</script>


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


<style scoped>
    #home{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 800px;
    }

    .lista-filmes{
        margin:15px;
    }

    .lista-filmes article{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        color: black;
        margin: 60px;
        padding: 15px; 
        border-radius: 5px;
    }

    .lista-filmes strong{
        padding-bottom: 15px;
        font-size: 30px;
    }

    img{
      max-height: 350px;
      width: 900px;  
    }

    .lista-filmes article a{
        text-decoration: none;
        color: #fdfdfd;
        font-size: 25px;
        background-color:  rgb(53, 49, 104);
        width: 100%;
        height: 40px;
        margin-top: -30px;
        text-align: center;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px; 
    }

</style>

<template>
  <div id="filme">
   <div v-if="loading">
      <Loading/>
    
   </div>
    <div class ="container" v-else>
    <h2>{{filme.nome}}</h2>
    <img :src="filme.foto" />
    <h3>
    Sinopse
    </h3>
    <p>{{filme.sinopse}}</p>
     <div class="botoes">
      <button>
      <router-link to="/">Ver mais filmes</router-link>
      </button>
      <button @click="salvarFilme">Salvar</button>
      <button>
        <a :href="`https://youtube.com/results?search_query=${filme.nome}`" target="blank">
          Trailer
        </a>
      </button>
    </div>
   </div>
  </div>
</template>

<script>
import api from '../service/api'
import Loading from '../components/Loading.vue'
export default {
  props:['id'],
  components:{
    Loading

  },
  data(){
    return{
      filme:{},
      loading: true,
    }
  },
  async created(){
    const response = await api.get(`?api=filmes/${this.id}`);
    this.filme = response.data
    this.loading = false

  },
  methods:{
    salvarFilme(){
      const minhaLista = localStorage.getItem('myFilme');

      let filmes = JSON.parse(minhaLista) || [];
      //se tiver um filme com id igual ao que esta tentando adicionar devolve true
      const hasFilme = filmes.some((filme)=> filme.id === this.filme.id)
      if(hasFilme){
        alert('Este filme já está salvo em seus favoritos!')
        return;
        
      }
      filmes.push(this.filme)
      localStorage.setItem('myFilme', JSON.stringify(filmes))
      alert('Filme salvo com sucesso!')
    }
  }

}
</script>

<style scoped>

  .container{
          display: flex;
          justify-content: center;
          flex-direction: column;
          max-width: 800px;
      }

      h2{
        color: #FFF;
        font-size: 35px;
        margin-bottom: 0px;
        background: blueviolet;
        padding: 35px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
      }

      .container img{
          width: 100%;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
      }

      button{
        margin-right: 5px;
        border-radius: 5px;
        margin-top: 15px;
        cursor: pointer;
        border:0;
        padding: 12px;
        font-size: 20px;
        transition: all 0.5s;
        outline: none;
      }
      button:hover{
        background: blueviolet;
        color: #FFF;
      }

      a{
        text-decoration: none;
        color: #000;
        transition: all 0.5s;
      }

      a:hover{
        color: #FFF;
      }

</style>
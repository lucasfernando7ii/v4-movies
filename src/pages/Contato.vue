<template>
  <div id="contato">
    <font-awesome-icon icon="fa-light fa-envelope" />
    <div class="container">

      <h1>Minhas redes sociaizb:</h1>
      <hr />
      <div class="row">
        <div class="col-sm-4 social-buttons">
          <a class="btn btn-block btn-social btn-github" href = "https://github.com/lucasfernando7ii" target="blank" >
            <i class="fa fa-github"></i> @lucasfernando7ii
          </a>
          <a class="btn btn-block btn-social btn-instagram" href = "https://www.instagram.com/lucasfernando7i/" target="blank" >
            <i class="fa fa-instagram"></i> @lucasfernando7i
          </a>
          <a class="btn btn-block btn-social btn-linkedin" href = "https://www.linkedin.com/in/lucas-fernando-096b9022b/" target="blank">
            <i class="fa fa-linkedin"></i> Lucas Fernando
          </a>
          <a class="btn btn-block btn-social btn-google-plus" href = "https://criarmeulink.com.br/u/1680296323" target="blank"> 
            <i class="fa fa-google-plus"></i> lucas7ifernando@gmail.com
          </a>
          

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {};
</script>

<style scoped>
.row{
  align-items: center;
}
.container{
 margin: 100px;
 padding: 45px; 
 width: 150%;
}

#contato {

background-color: #fdfdfd;
color: black;
 margin: 190px;
 padding: 0px; 
 border-radius: 50px;
 height: 560px;
 width: 680px;
 align-items: center;
 justify-content: center
}

@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css);
.btn-social {
  position: relative;
  padding-left: 44px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.btn-social :first-child {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 32px;
  line-height: 34px;
  font-size: 1.6em;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
.btn-github {
  color: #fff;
  background-color: #444;
  border-color: rgba(0, 0, 0, 0.2);
}
.btn-github:hover,
.btn-github:focus,
.btn-github:active,
.btn-github.active,
.open .dropdown-toggle.btn-github {
  color: #fff;
  background-color: #303030;
  border-color: rgba(0, 0, 0, 0.2);
}
.btn-google-plus {
  color: #fff;
  background-color: #dd4b39;
  border-color: rgba(0, 0, 0, 0.2);
}
.btn-google-plus:hover,
.btn-google-plus:focus,
.btn-google-plus:active,
.btn-google-plus.active,
.open .dropdown-toggle.btn-google-plus {
  color: #fff;
  background-color: #ca3523;
  border-color: rgba(0, 0, 0, 0.2);
}
.btn-instagram {
  color: #fff;
  background-color: #517fa4;
  border-color: rgba(0, 0, 0, 0.2);
}
.btn-instagram:hover,
.btn-instagram:focus,
.btn-instagram:active,
.btn-instagram.active,
.open .dropdown-toggle.btn-instagram {
  color: #fff;
  background-color: #446a89;
  border-color: rgba(0, 0, 0, 0.2);
}
.btn-linkedin {
  color: #fff;
  background-color: #007bb6;
  border-color: rgba(0, 0, 0, 0.2);
}
.btn-linkedin:hover,
.btn-linkedin:focus,
.btn-linkedin:active,
.btn-linkedin.active,
.open .dropdown-toggle.btn-linkedin {
  color: #fff;
  background-color: #005f8d;
  border-color: rgba(0, 0, 0, 0.2);
}
</style>




var app = new Vue({
  el: '.container', //monitora o container
  data: {
    historico: [
      { cep:'59380000', cidade:'Currais Novos'},
      { cep:'59010000', cidade:'Natal'}
    ], 
    cep:''
  },
  methods:{
    consultar: function(){
      //alert('o usuário submeteu o formulário:' + this.cep); //this.event.prevent
      var url = 'https://viacep.com.br/ws/'+this.cep+'/json/';
      var _this = this;
      axios.get(url).then(function(response){
        //console.log(response);
        _this.historico.push({cep: response.data.cep, cidade: response.data.localidade});
      });
      this.cep = ''; //limpa o formulario
    }
  }
})
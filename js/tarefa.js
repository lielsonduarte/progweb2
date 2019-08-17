/*var app = new Vue({
  el: '.container', //monitora o container
  data: {
    historico: [
      { cep:'59380000', cidade:'Currais Novos'},
      { cep:'59010000', cidade:'Natal'}
    ], 
    tarefa:''
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
*/
var app = new Vue({
  el: '.container', //monitora o container
  data: {
    tarefa:'',
    historico: [
      { texto:'Tarefa 1'},
      { texto:'Tarefa 2'}
    ],
  },
  methods:{
    OK: function(){
      this.historico.push({texto: this.tarefa});
      this.tarefa = ''; //limpa o formulario
    },
    concluido: function(){
      checked="checked"
    }
  }
})
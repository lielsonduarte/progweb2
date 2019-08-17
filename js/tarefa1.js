var app = new Vue({
  el: '.container', //monitora o container
  data: {
    form:'',
    tarefas: [
    ]
  },
  methods:{
    OK: function(){
      this.tarefas.push({tarefa: this.form, isConcluido: false});
      this.form = ''; //limpa o formulario
    },
    excluir: function(id){
      this.tarefas.splice(id,1);
    }
  }
})
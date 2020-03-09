const app = new Vue({

    el:"#app" ,
    data: {
        titulo: "Helpdesk con Vue",
        tareas: [],
        nuevaTarea:''
    },
    methods :{
        AgregarTarea : function(){
            //console.log('Diste Click' , this.nuevaTarea)
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea ='';
            localStorage.setItem('help-vue', JSON.stringify(this.tareas));
        },
        EditarTarea: function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('help-vue', JSON.stringify(this.tareas));
        },
        Eliminar:function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('help-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('Held-vue'));
        if(datosDB === null){
            this.tareas =[];
        }else {
            this.tareas =datosDB;
        }
    }

});
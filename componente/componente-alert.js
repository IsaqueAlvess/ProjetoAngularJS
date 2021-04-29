angular.module('app').component('alertParaUsuario',{

    templateUrl: 'componente/alert.html',      //apontar para um alert.html
    bindings:{                      //variáveis que podem transacionar de uma tela e outra.
        msg: '=',
        tipo: '='
    }, 
    controllerAs: 'vm',      //como eu vou chamar minha controller
    controller: function(){
        vm = this;
        vm.tipoClasse = undefined
        
        vm.$onInit = function(){        //ao inicializar
            if(vm.tipo == 'sucesso'){
                vm.tipoClasse = 'alert alert-success'
            }else if (vm.tipo == 'erro'){
                vm.tipoClasse = 'alert alert-danger'
            }
        }


    }

})
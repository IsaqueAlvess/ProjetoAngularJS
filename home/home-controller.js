angular.module('app').controller('HomeController',HomeController);
HomeController.$inject = ['$location','CursoService'];

    function HomeController($location,CursoService){
        vm = this;
        vm.texto = 'Home'
        vm.clientes = undefined
        vm.erro = false

        vm.init = function(){
            vm.listarClientes()
        }

        vm.navegar = function(rota, id){
            $location.path(rota + '/'+id)
            
        }

        vm.listarClientes = function(){
            CursoService.exec_GET().then(function(resposta){
                if(resposta){
                    vm.clientes = resposta
                }else{
                    vm.erro = true
                }
            })
        }

        vm.excluirClientes = function(id){
            CursoService.exec_DELETE(id).then(function(resposta){
                if(resposta){
                    //Msg resposta
                }
            })
        }

        vm.editar = function(id){
            vm.navegar('Cadastro',id)
        }
    }

    
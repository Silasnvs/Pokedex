function incio(){
let apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=100000'
let select = $("#selecao")

$.ajax({
url:apiURL,
type: "GET",
dataType: "json",
async:false,
success: function (data) {
console.log(data)

for(let i = 0; i <data.results.length; i++){
    data.results[i].name 

    select.append(`<option value="${data.results[i].name} ">${data.results[i].name}</option>`);

    }

    },
    error:function(){
    console.log("erro")
    },
    });

    }
    incio()
    function pesquisar(){
    let nome = document.getElementById("selecao").value
    let tipo = document.getElementById("tipo").val
    let imagem = document.getElementById("image01")
    let image02 = document.getElementById("image02")
    let numero = document.getElementById("numero").val
    let teste = ""

    console.log(nome)
    
        
   
    $.ajax({
    url:"https://pokeapi.co/api/v2/pokemon/" + `${nome}`,
    type: "GET",
    dataType: "Json",
    success: function (dados) {
       
           $("#nome").text(nome)
           $("#numero").text(dados.order)
                     //tipo      
                     for(let a = 0; a <dados.types.length; a++){  
                        if(teste === ""){
                            teste = teste + dados.types[a].type.name
                        }else{
                            teste = teste + "\n e \n" + dados.types[a].type.name
                        }
                        
                       }
                       $("#tipo").text(teste)
           
            //Pontos de hp/attack/defense/ 
           $("#hp").text(dados.stats[0].base_stat)
           $("#attack").text(dados.stats[1].base_stat)
           $("#defense").text(dados.stats[2].base_stat)
           $("#pata").text(dados.stats[3].base_stat)
           $("#pdef").text(dados.stats[4].base_stat)
           $("#speed").text(dados.stats[5].base_stat)
                   //imagem
           imagem.src = dados.sprites.front_default
           image02.src = dados.sprites.front_shiny
    
    }

    });
}
    

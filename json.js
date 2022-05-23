window.onload = function(){

    let url = "https://profrodolfo.com.br/projeto/";
    fetch(url)

    .then(resposta => {
        return resposta.json();
    })

    .then( function (json){
        let d = document.querySelector('.dados');
        let texto = '';

        for(i = 0; i < json.length; i++){
            texto += '<div class="row">';
            texto += '<div class="col-md-5">';
            texto += '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/'+json[i].foto+'">';
            texto += '</div>';
            texto += '<div class="col-md-7">';
            texto += '<h2>'+json[i].nome+'</h2>';
            texto += '<h3>'+json[i].valor+'</h3>';
            texto += '</div>';
            texto += '</div>';
        }
        d.innerHTML += texto;
    })

    .catch();
}
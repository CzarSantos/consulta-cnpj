
    //Ajax - Jquery
    function checkCnpj(cnpj)
    {
      //recebendo API | replace limpa formatação
      $.ajax({
        'url':'https://www.receitaws.com.br/v1/cnpj/' +  cnpj.replace(/[^0-9]/g,''),
        //tipo de requisição
        'type': "GET",
        //tipo de dado
        'dataType':'jsonp',
        //Se dados recebidos
        'success': function(data){
          //se erro
          if(data.nome == undefined){
            alert(data.status + ' ' + da.message)
          } else{
            //exibir
            document.getElementById('razaosocial').value = data.nome;
            document.getElementById('fantasia').value = data.fantasia;
            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('numero').value = data.numero;
            document.getElementById('municipio').value = data.municipio;
            document.getElementById('uf').value = data.uf;
          }
          //console.log(data);
        }
      })
    }
    
  
    //bloquaer
    $('#razaosocial').prop('readonly', true);
    $('#fantasia').prop('readonly', true);
    $('#logradouro').prop('readonly', true);
    $('#numero').prop('readonly', true);
    $('#municipio').prop('readonly', true);
    $('#uf').prop('readonly', true);
    
    
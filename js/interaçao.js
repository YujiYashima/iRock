var userName;

function carregar() {
    
    if(navigator.cookieEnabled)
        userName = lercookie("irock_userName");
    if (userName)
        alert("Ola, "+userName+", senti sua falta!");
    else
        alert("Ola, eu sou sua rocha de estimaçao!");
        
}

function clique() {

    if (userName) {
    
        alert("Eu gosto de atençao, "+userName+". Obrigado!");

    }else{

        userName = prompt("Qual seu nome?", "Digite seu nome aqui!");

        if (userName) {

            alert("Prazer em conhecer voce, "+userName+".");

            if(navigator.cookieEnabled)
                escrevercookie("irock_userName", userName, 5*365);
            else
                alert("Os cookies nao sao suportados em seu browser. Eu me lembrarei de voce mais tarde, me desculpe!");
            
        }

    }

    document.getElementById("rock").src = "/img/irock smile.png";
    setTimeout("document.getElementbyId('rock').src = '/img/irock.png';", 1*60*1000);
    
}

function redimensao() {

    document.getElementById("rock").style.height = (document.body.clientHeight - 100)*0.9;
    
}

function escrevercookie(nome, valor, dia) {

    var expires = "";

    if (dia) {

        var date = new Date();
        date.setTime(date.getTime()+(dia*24*60*60*1000));
        expires = "; expires="+date.toGMTString();

    }

    document.cookie = nome+"="+valor+expires+"; path=/"; 

}

function lercookie(nome) {

    var pesquisaNome = name+"=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){

        var c = cookies[i];

        while (c.charAt(0) == ` `) {

            c = c.substring(1, c.length);
            
        }

        if (c.indexOf(pesquisaNome) == 0) {

            return c.substring(pesquisaNome.length, c.length);
            
        }
    }

    return null;
    
}

function apagarcookie(nome) {
    
    escrevercookie(nome, "", -1);

}

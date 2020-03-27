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

    document.getElementById("rockImg").src = "irock smile.png";
    setTimeout("document.getElementbyId('rockImg').src = 'irock.png';", 1*60*1000);
    
}

function redimensao() {

    document.getElementById("rockImg").style.height = (document.body.clientHeight - 100)*0.9;
    
}
var userName;

function carregar() {

    userName = lercookie("irock_userName");

    if (userName) {

        alert("Ola, "+userName+", senti sua falta!");
        
    } else {

        alert("Ola, eu sou sua rocha de estimaçao!");
        
    }
    
}

function clique() {

    if (userName) {
    
        alert("Eu gosto de atençao, "+userName+". Obrigado!");

    }else{

        userName = prompt("Qual seu nome?", "Digite seu nome aqui!");

        if (userName) {

            alert("Przer em conhecer voce, "+userName+".");
            escrevercookie("irock_userName", userName, 5*365);
            
        }

    }

    document.getElementById("rockImg").src = "irock smile.png";
    setTimeout("document.getElementbyId('rockImg').src = 'irock.png';", 1*60*1000);
    
}

function redimensao() {

    document.getElementById("rockImg").style.height = (document.body.clientHeight - 100)*0.9;
    
}
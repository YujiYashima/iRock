var userName;

function carregar() {

    alert("Hello, eu sou a rocha de estimação");
    
}

function clique() {

    if (userName) {
    
        alert("Eu gosto de atençao, "+userName+".");

    }else{

        userName = prompt("Qual seu nome?", "Digite seu nome aqui!");

        if (userName) {

            alert("Przer em conhecer voce, "+userName+".");
            
        }

    }

    document.getElementById("rockImg").src = "irock smile.png";
    setTimeout("document.getElementbyId('rockImg').src = 'irock.png';", 1*60*1000);
    
}
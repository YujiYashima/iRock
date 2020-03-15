function carregar() {

    alert("Hello, eu sou a rocha de estimação");
    
}

function touchRock() {

    var userName = prompt("Qual o seu nome?");

    if (userName) {
        
        alert("É um preazer te conhecer "+userName+".");
        document.getElementById("rockImg").src = "irock smile.png";
        
    }
    
}
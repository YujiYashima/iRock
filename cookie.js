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

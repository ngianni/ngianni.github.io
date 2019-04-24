var textbox = document.getElementById("userinput");
var listachat = document.getElementById("lista");
var botonChat = document.getElementById("chatconpepi").addEventListener("click", abrirchat);

function abrirchat(){
    var botonChat = document.getElementById("chatconpepi");
    var parrafos = document.getElementById("parrafos");
    var botones = document.getElementById("botones");
    var titulo = document.getElementsByTagName("h1")[0];
    var chat= document.getElementById("chat");
    var textbox = document.getElementById("userinput");
    var listabox = document.getElementById("listabox");
    
    var texto = botonChat.innerHTML

    chat.classList.toggle("chatreveal")
    parrafos.classList.toggle("hidden");
    botones.classList.toggle("hidden");   
    titulo.classList.toggle("hidden2");
 
    if (texto==="volver") {
        botonChat.innerHTML="chat gatuno"
    } else {botonChat.innerHTML="volver"};
}

textbox.addEventListener("keypress", function(event){pepirespuesta(event.charCode)});

function checknumberelements(){                             //FUNCION CUENTA CUANTAS RESPUESTAS HAY
    return listachat.getElementsByTagName("li").length;
}

function additem(texto,emisor){                            //FUNCION PARA AÑADIR TEXTO EN CHAT
    var t = document.createTextNode(texto);
    var x = document.createElement("li");
    if (emisor==="pepi") {x.setAttribute("class","respuestapepi")} else if (emisor==="user") {x.setAttribute("class","respuestausuario")} else {x.setAttribute("class","respuestaauto")};
    x.appendChild(t);                                                                     
    listachat.appendChild(x);
}

function pepirespuesta(arg1) {                      //FUNCION ANALIZA RESPUESTA PEPI
    
    if (arg1 === 13 && textbox.value.length > 0) {
        additem(textbox.value, "user");
        respuesta_nro = checknumberelements();
        texto_input=textbox.value;

        switch (respuesta_nro){
            case 3:
            var t1 = "Hola " + texto_input + "! Que bueno que podamos hablar. Contame, cual es tu comida favorita?";
            additem(t1,"pepi")
            break;
            case 5:
            var t1 = "mmm que rico " + texto_input + "! A mi lo que mas me gusta es el pescado y la leche. Y después de comer me gusta dormir un ratito. A vos?";
            additem(t1,"pepi")
            break;
            case 7:
            var t1 = "Bueno.. ya me está dando sueñito. Me parece que voy a ir acomodandome...";
            additem(t1,"pepi")
            break;
            default:
            var t1 = "pepi se ha desconectado" 
            additem(t1)
            break;
        }
        textbox.value=""                                                       
    } 

}
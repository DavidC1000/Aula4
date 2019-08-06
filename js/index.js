/*javacript do site*/
console.log("aplicação iniciada.");

var img = document.getElementsByTagName('img')[0];
    document.addEventListener(img, 'click', function(){
    alert('clicou');
}, false);

var nav = document.getElementsByTagName('nav')[0];
nav.addEventListener('click', function(){
    alert('Navegando');
}, false);

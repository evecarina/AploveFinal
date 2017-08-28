
var productos=["assets/images/img-1.jpg",
"assets/images/img-2.jpg",
"assets/images/img-3.jpg",
"assets/images/img-4.jpg",
"assets/images/img-5.jpg",
"assets/images/img-6.jpg",
"assets/images/img-7.jpg",
"assets/images/img-8.jpg",
"assets/images/img-9.jpg",
];

var div_productos=document.getElementById('productos');
var div_row=document.createElement("div");

for(var i=0; i<productos.length;i++){
	var div_row=document.createElement("div");
	var img_producto=document.createElement("img");
	img_producto.setAttribute('src',productos[i]);
	div_row.appendChild(img_producto);
    div_productos.appendChild(div_row);
}

/*
div_productos.addEventListener("click",mostrar);

function mostrar(){
	var div_mostrar=document.getElementById("div_mostrar");
	div_mostrar.style.display="block";
	var img=document.getElementById("img_mostrar");
	var x=event.target.src;
	img.setAttribute("src",x);
//div_mostrar.src=event.target.src;

}
var btn_mostrar=document.getElementById("btn_mostrar");
btn_mostrar.addEventListener("click",ocultar);
function ocultar(){
	var div_mostrar=document.getElementById("div_mostrar");
	div_mostrar.style.display="none";
}


*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
div_productos.onclick = function(){
    modal.style.display = "block";
    var x=event.target.src;
	modalImg.setAttribute("src",x);
    /*modalImg.src = this.src;
    captionText.innerHTML = this.alt;*/
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
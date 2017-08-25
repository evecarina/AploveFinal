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
btn_mostrar.addEventListener("click",mostrar);
function ocultar(){
	var div_mostrar=document.getElementById("div_mostrar");
	div_mostrar.style.display="none";
}


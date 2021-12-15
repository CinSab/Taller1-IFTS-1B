const productos = [
  //Dulces
  { name: 'Afajor Chocolate', price: 60, type: "dulce", img: "./deco/alfajores.png"},
  { name: 'Afajor Chocolate Blanco', price: 60, type: "dulce" , img: "./deco/alfajores.png"},
  { name: 'Afajor Glaseado', price: 60,type: "dulce" , img: "./deco/alfajores.png"},
  { name: 'Afajor Bon o Bon', price: 70,type: "dulce" , img: "./deco/alfajores.png"},
  { name: 'Pan Dulce Frutos Secos', price: 300,type: "dulce" , img: "./deco/alfajores.png"},
  { name: 'Pan Dulce Chocolate', price: 270,type: "dulce" , img: "./deco/alfajores.png"},
  { name: 'Pan Dulce Solo', price: 250,type: "dulce" , img: "./deco/alfajores.png"},
  { name: 'Pastaflora Dulce de Batata', price: 250,type: "dulce" , img: "./deco/alfajores.png"},
  { name: 'Budin Limon', price: 200,type: "dulce" , img: "./deco/alfajores.png"},
  { name: 'Budin Naranja', price: 200,type: "dulce" , img: "./deco/alfajores.png"},
  { name: 'Budin vainilla', price: 200,type: "dulce" , img: "./deco/alfajores.png"},
  { name: 'Budin Limon Chocolate', price: 220,type: "dulce" , img: "./deco/alfajores.png"},
  //Salados
  { name: 'Pan de Molde', price: 300,type: "salado", img: "./deco/alfajores.png" },
  { name: 'Pan de Hamborgueso', price: 150,type: "salado" , img: "./deco/alfajores.png"},
  { name: 'Pizzetas x 4', price: 400,type: "salado", img: "./deco/alfajores.png" },
  { name: 'Empanadas a pedido - consultar precio', price: null,type: "salado", img: "./deco/alfajores.png" }
]

let dulcesHTML = " ";
let saladosHTML = " ";
const dataJsonProducts = './data/products.json';

const bars = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const closingButton = document.querySelector('.fa-times-circle');
const menu = document.querySelector('menu2');
const dulce = document.getElementById('dulce');
const salados = document.getElementById('sala3');

bars.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

closingButton.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
})

/*productos.forEach((item) =>
  {
    if(productos[item].type == "salado"){
      saladosHTML +=
        `<div>${productos[item].name} $${productos[item].price}</div>`;
        salados.innerHTML = saladosHTML;
    }else{
      dulcesHTML +=
        `<div class = "caca"> ${productos[i].name} $${productos[i].price}</div>`;
        dulce.innerHTML = dulcesHTML;
        }
});*/

/*fetch(dataJsonProducts)
    .then(function(resp) {
        return resp.JSON();
    })
    .then(function(data){
      console.log(data);
    })
    .catch((err) => {
  console.error('Error:', err);
});*/
for(let i in productos)
{
  if(productos[i].type == "salado"){
    saladosHTML +=
      `<div>${productos[i].name} $${productos[i].price}</div>`;
      salados.innerHTML = saladosHTML;
  }else{
    dulcesHTML +=
      `<div class = "caca"> ${productos[i].name} $${productos[i].price} </div>
    <img class='imag'src="${productos[i].img}">`;
      dulce.innerHTML = dulcesHTML;
      }
}

/*for(let i = 0; i < productos.length; i++){
  if(productos[i].type == "salado"){
    saladosHTML +=
      `<div>${productos[i].name} $${productos[i].price}</div>`;
      salados.innerHTML = saladosHTML;
  }else{
    dulcesHTML +=
      `<div class = "caca"> ${productos[i].name} $${productos[i].price}</div>`;
      dulce.innerHTML = dulcesHTML;
  }
};
for(let i = 0; i < productos.length; i++){
  if(productos[i].type == "dulce"){
    prodsHTML +=
      '<div>'+ productos[i].name +'</div>'+
      '<div>'+ '$' + productos[i].price +'</div>';

  }*/





/*fetch('./data/products.js')
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data));*/

const productos = [
  //Dulces
  { name: 'Afajor Grandote', price: 3000, type: "dulce"},
  { name: 'Afajor Peequueeniioi', price: 3002, type: "dulce" },
  { name: 'Facturitas', price: 3003,type: "dulce" },
  { name: 'Medialuna', price: 3004,type: "dulce" },
  //Salados
  { name: 'Empana3', price: 3000,type: "salado" },
  { name: 'Pizzas de papa', price: 3002,type: "salado" },
  { name: 'Queso de papa', price: 3003,type: "salado" },
  { name: 'Pan', price: 3004,type: "salado" },
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
const inputFormName = document.getElementById('name');
const inputFormNumber = document.getElementById('number');
const inputFormBTNsubmit = document.getElementById('btnSubmit');
const result = document.getElementById('resultado');

bars.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

closingButton.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
})

inputFormBTNsubmit.addEventListener('click', () => {
    result.innerHTML("Rellenar");
});

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
      `<div class = "caca"> ${productos[i].name} $${productos[i].price}</div>`;
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

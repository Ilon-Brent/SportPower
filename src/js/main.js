var menuElem = document.getElementById('mobileMenu');
var titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};


var inputService = document.getElementById("inputService");
inputService.addEventListener('click', discoverService);

function discoverService() {
  var elem = document.getElementById("textService");
  elem.innerHTML = "Любой удобный способ оплаты , квалифицированные сотрудники и уютная атмосфера не оставят Вас равнодушными";
}

var inputQuality = document.getElementById('inputQuality');
inputQuality.addEventListener('click', discoverQuality);

function discoverQuality() {
  var elem = document.getElementById('textQuality');
  elem.innerHTML = "Все товары закупаются только у официальных поставщиков, что гарантирует оригинальное качество всей продукции!";
}

var inputPrice = document.getElementById('inputPrice');
inputPrice.addEventListener('click', discoverPrice);

function discoverPrice() {
  var elem = document.getElementById('textPrice');
  elem.innerHTML = "Мы закупаемся по оптовым ценам, в связи с этим , Вы получаете продукт по очень выгодной цене.";
}

setInterval(function(){
  document.getElementById("time").innerHTML = (new Date());
}, 1000);


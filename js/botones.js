const chairs = document.getElementById("shop-chairs");
const beds = document.getElementById("shop-beds");
const pepe = document.getElementById("shop-pepe");
const furniture = document.getElementById("shop-furniture");
const homedeco = document.getElementById("shop-home_deco");
const dressings = document.getElementById("shop-dressing");
const tables = document.getElementById("shop-tables");

$(".categories").on("click", function () {
  let thisId = $(this).attr("id");
  let element = $(`.${thisId}`);

  if (element.hasClass("hide")) {
    element.removeClass("hide").siblings(".row").addClass("hide");
  }
  $(this).toggleClass("active").siblings().removeClass("active");
});

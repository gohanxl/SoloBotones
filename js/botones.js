const chairs = document.getElementById("shop-chairs");
const beds = document.getElementById("shop-beds");
const pepe = document.getElementById("shop-pepe");
const furniture = document.getElementById("shop-furniture");
const homedeco = document.getElementById("shop-home_deco");
const dressings = document.getElementById("shop-dressing");
const tables = document.getElementById("shop-tables");

$(".categories").on("click", function () {
  let thisId = $(this).attr("id");
  $(`.${thisId}`).toggleClass("hide").siblings(".row").addClass("hide")
  $(this).toggleClass("active").siblings().removeClass("active");
});

$(beds).on("click", () => {
  console.log("ENTROF");
  const areBedsHiding = $(".beds").hasClass("hide");

  if (areBedsHiding) {
    $(".beds").removeClass("hide");
  } else {
    $(".beds").addClass("hide");
  }
});

// $(beds).on("click", () => {
//   $(".products").toggleClass("hide").siblings().addClass("hide");
// });

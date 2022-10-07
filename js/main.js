const details = document.getElementById("details");
const orders = document.getElementById("orders");
//const save = document.querySelector("#save");

document.getElementById("reserve").addEventListener("click", reserve);
document.getElementById("onlineOrders").addEventListener("click", onlineOrders);
document.querySelector("#save").addEventListener("click", save);

function reserve() {
  details.style.display = "block";

  details.style.background =
    "url(../img/pexels-anthony-133184.jpg) no-repeat center center";
  details.style.backgroundSize = "cover";
}

function onlineOrders() {
  orders.style.display = "block";
  orders.style.background =
    "url(../img/pexels-anthony-133184.jpg) no-repeat center center";
  orders.style.backgroundSize = "cover";
}
function save() {
  alert("thank you!! your order has been saved.");
}

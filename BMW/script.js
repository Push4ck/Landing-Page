document.getElementById("red").onclick = function () {
  document.getElementById("bike").style.backgroundImage =
    "url('images/Passion.jpg')";
  document.querySelector(".content p").textContent =
    "Ignite your ride with the G 310 R Passion. Its Granite Grey Metallic paint highlights its bold, aggressive design.";
};

document.getElementById("blue").onclick = function () {
  document.getElementById("bike").style.backgroundImage =
    "url('images/Sport.jpg')";
  document.querySelector(".content p").textContent =
    "Embrace the thrill with the G 310 R Sport. Its Racing Blue Metallic finish exudes dynamism and power.";
};

document.getElementById("black").onclick = function () {
  document.getElementById("bike").style.backgroundImage =
    "url('images/Triple-Black.jpg')";
  document.querySelector(".content p").textContent =
    "The Cosmic Black 2 finish of the G 310 R reflects its powerful and energetic nature.";
};

let homeTotal = 0;
let guestTotal = 0;
let homeCountDisplay = document.querySelector(".hom-total-display");
let guestCountDisplay = document.querySelector(".gst-total-display");
homeCountDisplay.textContent = homeTotal;
guestCountDisplay.textContent = guestTotal;

let homBtnAdd1 = document
  .querySelector(".hom-btn-add1")
  .addEventListener("click", function (e) {
    homeTotal += 1;
    homeCountDisplay.textContent = homeTotal;
  });
let homBtnAdd2 = document
  .querySelector(".hom-btn-add2")
  .addEventListener("click", function (e) {
    homeTotal += 2;
    homeCountDisplay.textContent = homeTotal;
  });
let homBtnAdd3 = document
  .querySelector(".hom-btn-add3")
  .addEventListener("click", function (e) {
    homeTotal += 3;
    homeCountDisplay.textContent = homeTotal;
  });
let gstBtnAdd1 = document
  .querySelector(".gst-btn-add1")
  .addEventListener("click", function (e) {
    guestTotal += 1;
    guestCountDisplay.textContent = guestTotal;
  });
let gstBtnAdd2 = document
  .querySelector(".gst-btn-add2")
  .addEventListener("click", function (e) {
    guestTotal += 2;
    guestCountDisplay.textContent = guestTotal;
  });
let gstBtnAdd3 = document
  .querySelector(".gst-btn-add3")
  .addEventListener("click", function (e) {
    guestTotal += 3;
    guestCountDisplay.textContent = guestTotal;
  });

const btnHamburger = document.querySelector("#btnHamburger");
const navMobile = document.querySelector("#navMobile");
const btnClose = document.querySelector("#btnClose");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");
const formSubmit = document.querySelector("#formSubmit");
const bookingCol = document.querySelector("#bookingCol");

$(document).ready(function () {
  $("#formSubmit").on("submit", function (event) {
    event.preventDefault();

    let string = $("#formSubmit").serialize(); // Соханяем данные введенные в форму в строку.

    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/send.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function (html) {
        Array.from(bookingCol.children).forEach(function (elem) {
          elem.style.marginBottom = "3rem";
        });

        $("#formInputs").slideUp(800);
        $("#answer").html(html);
        document.querySelector("#formButton").innerHTML = "";
      },
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
  });
});

btnHamburger.addEventListener("click", () => {
  navMobile.classList.add("header__nav--mobile--active");
  overlay.classList.add("overlay--active");
  body.classList.add("overflow-hidden");
});

btnClose.addEventListener("click", closeNavMobile);

navMobile.addEventListener("click", (event) => {
  if (event.target.classList.contains("nav__link")) {
    closeNavMobile();
  }
});

function closeNavMobile() {
  navMobile.classList.remove("header__nav--mobile--active");
  overlay.classList.remove("overlay--active");
  body.classList.remove("overflow-hidden");
}

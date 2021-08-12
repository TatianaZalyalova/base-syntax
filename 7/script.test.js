test("addEventInput", () => {
  document.body.innerHTML =
    '<div class="wrap">' +
    "<p>Не следует забывать, что сложившаяся структура организации.</p>" +
    "<p>Разнообразный и богатый опыт консультация с широким активом.</p>" +
    "<p>Задача организации влечет за собой процесс внедрения.</p>" +
    "</div>" +
    "<form>" +
    '<input class="input" type="text" name="name">' +
    '<button class="button" disabled requared>Кнопка</button>' +
    "</form>";
  const paragraphWrap = document.querySelector(".wrap");
  const input = document.querySelector(".input");
  const button = document.querySelector(".button");
  const form = document.querySelector("form");
  require("./script"); // eslint-disable-line global-require
  input.value = "some text";
  input.value = "";
  expect(button.disabled).toBe(true);
  input.value = "some text";
  form.submit();
  expect(paragraphWrap.querySelectorAll("p").length).toBe(4);
  form.submit();
  form.submit();
  expect(paragraphWrap.querySelectorAll("p").length).toBe(5);
});

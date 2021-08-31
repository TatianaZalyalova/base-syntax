const paragraphWrap = document.querySelector(".wrap");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const form = document.querySelector("form");

export function addEventInput(el) {
  el.addEventListener("input", () => {
    if (el.value === "") {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
}

export function deleteParagraph() {
  if (paragraphWrap.querySelectorAll("p").length > 5) {
    paragraphWrap.querySelector("p").remove();
  }
}

export function addParagraph(el) {
  el.addEventListener("submit", (event) => {
    event.preventDefault();
    const p = document.createElement("p");
    p.innerHTML = input.value;
    paragraphWrap.appendChild(p);
    deleteParagraph();
  });
}

addEventInput(input);
addParagraph(form);

module.exports = {
  addEventInput,
  addParagraph,
  deleteParagraph,
};

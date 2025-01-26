const submit = document.querySelector("#submit");
const popup = document.querySelector(".popup");
const ok = document.querySelector("#ok");

submit.addEventListener("click", () => {
    popup.classList.add("visible");
})

ok.addEventListener("click", () => {
    popup.classList.remove("visible");
})
import "./styles.css";

const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const toolbar2 = document.querySelector(".wcj_view.wcj_toolbar"),
  label2 = toolbar2.querySelector(".wcj_view.wcj_control.wcj_el_label"),
  labelbox2 = label2.querySelector(".wcj_el_box");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello! ${text}`;
  greeting.setAttribute(
    "style",
    `text-align:right;margin-top:2px;margin-right: 10px;`
  );
  labelbox2.innerHTML = `${text}'s Dashboard`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

const navbar = document.querySelector(".wcj_view.navbar");

function init() {
  const width = window.innerWidth;
  navbar.setAttribute(
    "style",
    `border-width:0px;margin-left:0px;margin-top:0px;width:${width}px;height:60px;`
  );
}

init();

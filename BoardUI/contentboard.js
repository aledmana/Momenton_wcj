const contentboard = document.querySelector(
    ".wcj_view.wcj_abslayout.content_dashboard"
  ),
  panel1 = contentboard.querySelector(".wcj_view.panel1"),
  pn1Toolbar = panel1.querySelector(".panel_toolbar"),
  pn1Content = panel1.querySelector(".panel_content"),
  panel2 = contentboard.querySelector(".wcj_view.panel2"),
  pn2Toolbar = panel2.querySelector(".panel_toolbar"),
  pn2Content = panel2.querySelector(".panel_content");

function handleResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  contentboard.setAttribute(
    "style",
    `margin-left:0px;margin-top:-1px;width:${width}px;height:${height - 112}px;`
  );
}

function init() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  contentboard.setAttribute(
    "style",
    `margin-left:0px;margin-top:-1px;width:${width}px;height:${height - 112}px;`
  );
  panel1.setAttribute(
    "style",
    `display: inline-block;
  vertical-align: top;
  width: 329px;
  height: 194px;
  left: 10px;
  top: 10px;`
  );
  pn1Toolbar.setAttribute(
    "style",
    `border-width: 1px;
  margin-left: 0px;
  margin-top: 0px;
  width: 327px;
  height: 42px;`
  );
  pn1Content.setAttribute(
    "style",
    `border-width: 1px;
  margin-left: 0px;
  margin-top: -1px;
  width: 327px;
  height: 152px;
  position: relative;`
  );

  panel2.setAttribute(
    "style",
    `display: inline-block;
  vertical-align: top;
  width: 329px;
  height: 194px;
  left: 349px;
  top: 10px;
  position: absolute;
  z-index: 1;`
  );
  pn2Toolbar.setAttribute(
    "style",
    `border-width: 1px;
  margin-left: 0px;
  margin-top: 0px;
  width: 327px;
  height: 42px;`
  );
  pn2Content.setAttribute(
    "style",
    `white-space: nowrap;
  margin-left: 0px;
  margin-top: -1px;
  width: 329px;
  height: 152px;`
  );

  window.addEventListener("resize", handleResize);
}

init();

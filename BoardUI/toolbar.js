const toolbar = document.querySelector(".wcj_view.wcj_toolbar"),
  label = toolbar.querySelector(".wcj_view.wcj_control.wcj_el_label"),
  labelbox = label.querySelector(".wcj_el_box"),
  spacer = toolbar.querySelector(".wcj_view.wcj_spacer"),
  userinfo = toolbar.querySelector(".wcj_view.wcj_control.wcj_el_userinfo"),
  icon = toolbar.querySelector(".wcj_view.wcj_control.wcj_el_icon"),
  iconbox = icon.querySelector(".wcj_el_box");

function handleResize() {
  const height = window.innerHeight;
  const width = window.innerWidth;

  label.setAttribute(
    "style",
    `display:inline-block;vertical-align:top;border-width:0px;margin-top:2px;margin-left:12px;width:${
      (width - 39 - 47) / 3
    }px;height:52px;`
  );
  labelbox.setAttribute(
    "style",
    `width:${(width - 39 - 47) / 3}px;height:52px;line-height: 46px;`
  );
  spacer.setAttribute(
    "style",
    `display:inline-block;vertical-align:top;border-width:0px;margin-top:2px;margin-left:4px;width:${
      (width - 39 - 47) / 3
    }px;height:52px;`
  );
  userinfo.setAttribute(
    "style",
    `display:inline-block;vertical-align:bottom;border-width:0px;margin-top:19px;margin-left:12px;margin-bottom:12px;width:${
      (width - 39 - 46) / 3
    }px;height:22px;text-align:right;`
  );
  icon.setAttribute(
    "style",
    `display:inline-block;vertical-align:top;border-width:0px;margin-top:2px;margin-left:4px;width:38px;height:52px;`
  );
  iconbox.setAttribute(
    "style",
    `width:38px;height:52px;line-height:52px;margin-top: 0px;`
  );
}

function init() {
  const height = window.innerHeight;
  const width = window.innerWidth;

  label.setAttribute(
    "style",
    `display:inline-block;vertical-align:top;border-width:0px;margin-top:2px;margin-left:12px;width:${
      (width - 39 - 47) / 3
    }px;height:52px;`
  );
  labelbox.setAttribute(
    "style",
    `width:${(width - 39 - 47) / 3}px;height:52px;line-height: 46px;`
  );
  spacer.setAttribute(
    "style",
    `display:inline-block;vertical-align:top;border-width:0px;margin-top:2px;margin-left:4px;width:${
      (width - 39 - 47) / 3
    }px;height:52px;`
  );
  userinfo.setAttribute(
    "style",
    `display:inline-block;vertical-align:bottom;border-width:0px;margin-top:19px;margin-left:12px;margin-bottom:12px;width:${
      (width - 39 - 46) / 3
    }px;height:22px;text-align:right;`
  );
  icon.setAttribute(
    "style",
    `display:inline-block;vertical-align:top;border-width:0px;margin-top:2px;margin-left:4px;width:38px;height:52px;`
  );
  iconbox.setAttribute(
    "style",
    `width:38px;height:52px;line-height:52px;margin-top: 0px;`
  );

  window.addEventListener("resize", handleResize);
}

init();

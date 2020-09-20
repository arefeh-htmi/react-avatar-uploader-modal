import $ from "jquery";

const fixUnexpectedSuccess = () =>
  $(".success_box")
    .removeClass("success_box_hidden")
    .html("An unexpected error occurred!")
    .addClass("success_box_visible");

const timeoutSuccessBox = () =>
  setTimeout(() => {
    $(".success_box")
      .removeClass("success_box_visible")
      .addClass("success_box_hidden");
  }, 3500);
const timeoutMessageBox = () =>
  setTimeout(() => {
    $(".success_box")
      .removeClass("success_box_visible")
      .addClass("success_box_hidden");
  }, 3500);

export function printSucess(err) {
  try {
    let keys = Object.keys(err);
    if (keys.indexOf("response") !== -1) {
      if ($(".success_box").hasClass("success_box_visible"))
        $(".success_box")
          .removeClass("success_box_visible success_box_hidden")
          .html(err["response"]["data"]["message"])
          .addClass("success_box_visible");
      else
        $(".success_box")
          .removeClass("success_box_hidden")
          .html(err["response"]["data"]["message"])
          .addClass("success_box_visible");
      timeoutSuccessBox();
    } else {
      fixUnexpectedSuccess();
      timeoutSuccessBox();
    }
  } catch (e) {
    fixUnexpectedSuccess();
    timeoutSuccessBox();
  }
}

export function printSuccessMessage(msg) {
  try {
    if ($(".success_box").hasClass("success_box_visible"))
      $(".success_box")
        .removeClass("success_box_visible success_box_hidden")
        .html(msg)
        .addClass("success_box_visible");
    else
      $(".success_box")
        .removeClass("success_box_hidden")
        .html(msg)
        .addClass("success_box_visible");
    timeoutMessageBox();
  } catch (e) {
    fixUnexpectedSuccess();
    timeoutSuccessBox();
  }
}

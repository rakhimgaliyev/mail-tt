"use strict";

export default class MaskNumberView {
  render(divId = "root") {
    let element = document.getElementById(divId);
    element.innerHTML = `
      <div class="number-block">
        a
      </div>`;
  }
}

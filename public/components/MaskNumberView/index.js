"use strict";

export default class MaskNumberView {
  // TODO: REPLACE INNER HTML,
  //  create loop with adding element to number block

  isNumber(char) {
    if (char >= 0 && char <= 9) {
      return true;
    }
    return false;
  }

  setMarginRightForSpecialChar(webElement, mask, elementPos) {
    if (elementPos !== mask.length - 1) {
      if (
        this.isNumber(mask[elementPos + 1]) ||
        mask[elementPos + 1] === "*" ||
        mask[elementPos + 1] === "I"
      ) {
        webElement.style.marginRight = "4px";
      } else {
        webElement.style.marginRight = "2px";
      }
    }
  }

  setMarginRightForNonSpecialChar(webElement, mask, elementPos) {
    if (elementPos !== mask.length - 1) {
      if (mask[elementPos] === "+") {
        webElement.style.marginRight = "2px";
      } else {
        webElement.style.marginRight = "1px";
      }
    }
  }

  appendElement(parentNode, mask, elementPos) {
    let webElement = document.createElement("div");

    let char = mask[elementPos];

    if (this.isNumber(char)) {
      webElement.textContent = char;
      webElement.className = "number-block__number";
      this.setMarginRightForSpecialChar(webElement, mask, elementPos);
    } else if (char === "*") {
      webElement.textContent = "●";

      webElement.className = "number-block__number";
      this.setMarginRightForSpecialChar(webElement, mask, elementPos);
    } else if (char === "I") {
      webElement.className = "number-block__number";
      this.setMarginRightForSpecialChar(webElement, mask, elementPos);
    } else {
      webElement.textContent = char;

      webElement.className = "number-block__non-number";
      this.setMarginRightForNonSpecialChar(webElement, mask, elementPos);
    }

    parentNode.appendChild(webElement);
  }

  render(divId = "root") {
    let parentNode = document.createElement("div");
    parentNode.className = "number-block";
    // this.appendElement(parentNode, "asd", 1);
    // this.appendElement(parentNode, "asd", 1);
    // this.appendElement(parentNode, "asd", 1);
    const mask = "+7(985)0II-**-**";

    for (var i = 0; i < mask.length; i++) {
      this.appendElement(parentNode, mask, i);
    }
    let rootNode = document.getElementById(divId);
    rootNode.appendChild(parentNode);
    // rootNode.innerHTML = `
    //   <div class="number-block">
    //     a
    //   </div>`;
  }
}

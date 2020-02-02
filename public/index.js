"use strict";

import MaskNumber from "./components/MaskNumberView/index.js";

let maskNumber = new MaskNumber();
maskNumber.render();

let setErrorButton = document.createElement("button");
setErrorButton.innerText = "fsdfs";
setErrorButton.style.marginTop = "30px";
setErrorButton.style.height = "30px";
setErrorButton.style.width = "100px";
setErrorButton.addEventListener("click", () => {
  maskNumber.setErrorMode();
});
document.getElementById("root").appendChild(setErrorButton);

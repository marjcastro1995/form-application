import { FormBuilder } from "./formBuilder.js";
import { FormStorage } from "./formStorage.js";
import { FormList } from "./formList.js";
import { FormRenderer } from "./formRenderer.js";

document.addEventListener("DOMContentLoaded", () => {
    const formBuilder = new FormBuilder();
    const formStorage = new FormStorage();
    const formList = new FormList();
    const formRenderer = new FormRenderer();

    formBuilder.init();
    formList.init();
});

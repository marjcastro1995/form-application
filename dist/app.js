import { FormBuilder } from "./formBuilder.js";
import { FormStorage } from "./formStorage.js";
import { FormList } from "./formList.js";
import { FormRenderer } from "./formRenderer.js";
document.addEventListener("DOMContentLoaded", function () {
    var formBuilder = new FormBuilder();
    var formStorage = new FormStorage();
    var formList = new FormList();
    var formRenderer = new FormRenderer();
    formBuilder.init();
    formList.init();
});
//# sourceMappingURL=app.js.map
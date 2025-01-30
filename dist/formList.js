import { FormStorage } from "./formStorage.js";
import { FormRenderer } from "./formRenderer.js";
var FormList = /** @class */ (function () {
    function FormList() {
        this.formsList = document.getElementById("forms-list");
        this.formStorage = new FormStorage();
        this.formRenderer = new FormRenderer();
    }
    FormList.prototype.init = function () {
        this.loadForms();
    };
    FormList.prototype.loadForms = function () {
        var _this = this;
        this.formsList.innerHTML = "";
        var forms = this.formStorage.getForms(); // Ensure correct typing
        forms.forEach(function (form, index) {
            var li = document.createElement("li");
            li.innerHTML = "".concat(form.title, " <button class=\"view-form\">View</button> \n                            <button class=\"delete-form\">Delete</button>");
            li.querySelector(".view-form").addEventListener("click", function () { return _this.formRenderer.renderForm(form); });
            li.querySelector(".delete-form").addEventListener("click", function () {
                _this.formStorage.deleteForm(index);
                _this.loadForms();
            });
            _this.formsList.appendChild(li);
        });
    };
    return FormList;
}());
export { FormList };
//# sourceMappingURL=formList.js.map
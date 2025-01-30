// export class FormRenderer {
//     private previewContainer: HTMLElement;
var FormRenderer = /** @class */ (function () {
    function FormRenderer() {
        this.previewContainer = document.getElementById("preview-container");
    }
    FormRenderer.prototype.renderForm = function (form) {
        var _this = this;
        document.getElementById("form-preview").style.display = "block";
        this.previewContainer.innerHTML = "<h3>".concat(form.title, "</h3>");
        form.fields.forEach(function (field) {
            var _a;
            var div = document.createElement("div");
            var label = document.createElement("label");
            label.textContent = field.label;
            // Render based on field type
            if (field.type === 'text') {
                var input = document.createElement("input");
                input.type = 'text';
                input.id = field.id;
                div.appendChild(label);
                div.appendChild(input);
            }
            else if (field.type === 'radio' || field.type === 'checkbox') {
                (_a = field.options) === null || _a === void 0 ? void 0 : _a.forEach(function (option, index) {
                    var input = document.createElement("input");
                    input.type = field.type;
                    input.name = field.id; // Group radio buttons or checkboxes by field ID
                    input.id = "".concat(field.id, "_").concat(index);
                    input.value = option;
                    var optionLabel = document.createElement("label");
                    optionLabel.textContent = option;
                    div.appendChild(input);
                    div.appendChild(optionLabel);
                    div.appendChild(document.createElement("br"));
                });
            }
            _this.previewContainer.appendChild(div);
        });
        // Add submit button event
        document.getElementById("submit-form").addEventListener("click", function () { return alert("Form submitted!"); });
    };
    return FormRenderer;
}());
export { FormRenderer };
//# sourceMappingURL=formRenderer.js.map
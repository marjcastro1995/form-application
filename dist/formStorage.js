var FormStorage = /** @class */ (function () {
    function FormStorage() {
        this.storageKey = "forms";
    }
    FormStorage.prototype.getForms = function () {
        return JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    };
    FormStorage.prototype.saveForm = function (form) {
        var forms = this.getForms();
        forms.push(form);
        localStorage.setItem(this.storageKey, JSON.stringify(forms));
    };
    FormStorage.prototype.deleteForm = function (index) {
        var forms = this.getForms();
        forms.splice(index, 1);
        localStorage.setItem(this.storageKey, JSON.stringify(forms));
    };
    return FormStorage;
}());
export { FormStorage };
//# sourceMappingURL=formStorage.js.map
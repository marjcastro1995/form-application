import { FormStorage, FormData } from "./formStorage.js";
import { FormRenderer } from "./formRenderer.js";

export class FormList {
    private formsList: HTMLElement;
    private formStorage: FormStorage;
    private formRenderer: FormRenderer;

    constructor() {
        this.formsList = document.getElementById("forms-list")!;
        this.formStorage = new FormStorage();
        this.formRenderer = new FormRenderer();
    }

    init() {
        this.loadForms();
    }

    loadForms() {
        this.formsList.innerHTML = "";
        const forms: FormData[] = this.formStorage.getForms(); // Ensure correct typing

        forms.forEach((form: FormData, index: number) => {
            const li = document.createElement("li");
            li.innerHTML = `${form.title} <button class="view-form">View</button> 
                            <button class="delete-form">Delete</button>`;

            li.querySelector(".view-form")!.addEventListener("click", () => this.formRenderer.renderForm(form));
            li.querySelector(".delete-form")!.addEventListener("click", () => {
                this.formStorage.deleteForm(index);
                this.loadForms();
            });

            this.formsList.appendChild(li);
        });
    }
}

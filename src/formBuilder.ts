// import { FormStorage } from "./formStorage.js";

// export class FormBuilder {
//     private fieldsContainer: HTMLElement;
//     private formTitleInput: HTMLInputElement;
//     private formStorage: FormStorage;

//     constructor() {
//         this.fieldsContainer = document.getElementById("fields-container")!;
//         this.formTitleInput = document.getElementById("form-title") as HTMLInputElement;
//         this.formStorage = new FormStorage();
//     }

//     init() {
//         document.getElementById("add-text-field")!.addEventListener("click", () => this.addField("text"));
//         document.getElementById("add-radio-button")!.addEventListener("click", () => this.addField("radio"));
//         document.getElementById("add-checkbox")!.addEventListener("click", () => this.addField("checkbox"));
//         document.getElementById("save-form")!.addEventListener("click", () => this.saveForm());
//     }

//     addField(type: string) {
//         const field = document.createElement("div");
//         field.classList.add("field");

//         if (type === "text") {
//             // For text field, just add the label and text input
//             field.innerHTML = `
//                 <input type="text" placeholder="Label" class="field-label">
//                 <button class="delete-field">X</button>
//             `;
//         } else if (type === "radio" || type === "checkbox") {
//             // For radio/checkbox, ask for options
//             field.innerHTML = `
//                 <input type="text" placeholder="Label" class="field-label">
//                 <button class="delete-field">X</button>
//                 <div class="options-container">
//                     <input type="text" class="option-input" placeholder="Option 1">
//                     <input type="text" class="option-input" placeholder="Option 2">
//                 </div>
//             `;
//         }

//         // Add delete functionality
//         field.querySelector(".delete-field")!.addEventListener("click", () => field.remove());
//         this.fieldsContainer.appendChild(field);
//     }

//     saveForm() {
//         const title = this.formTitleInput.value.trim();
//         if (!title) {
//             alert("Form title is required!");
//             return;
//         }

//         const fields = Array.from(this.fieldsContainer.children).map((field: HTMLElement) => {
//             const label = (field.querySelector("input[type='text']") as HTMLInputElement).value;
//             const options: string[] = [];
//             const optionInputs = field.querySelectorAll(".option-input") as NodeListOf<HTMLInputElement>;

//             // Collect options if present
//             optionInputs.forEach(optionInput => {
//                 if (optionInput.value.trim()) {
//                     options.push(optionInput.value.trim());
//                 }
//             });

//             // Determine field type based on presence of options
//             const type = options.length > 0 ? (field.querySelector(".option-input")!.value.includes('Option') ? 'radio' : 'checkbox') : 'text';

//             return { label, type, options: options.length > 0 ? options : undefined };
//         });

//         this.formStorage.saveForm({ title, fields });
//         alert("Form saved successfully!");
//         location.reload();
//     }
// }


// interface Field {
//     id: string;
//     label: string;
//     type: 'text' | 'radio' | 'checkbox';
//     options?: string[]; // Only for radio and checkbox fields
// }

// export class FormBuilder {
//     private fields: Field[] = [];
//     private formContainer: HTMLElement;

//     constructor() {
//         this.formContainer = document.getElementById("fields-container")!;
//         this.addEventListeners();
//     }

//     // Add the init method here
//     public init() {
//         // Any initialization logic you need can go here
//         console.log("FormBuilder initialized");
//     }

//     private addEventListeners() {
//         document.getElementById("add-text-field")?.addEventListener("click", () => this.addTextField());
//         document.getElementById("add-radio-button")?.addEventListener("click", () => this.addRadioButton());
//         document.getElementById("add-checkbox")?.addEventListener("click", () => this.addCheckbox());
//     }

//     private addTextField() {
//         const field: Field = { id: this.generateFieldId(), label: 'Text Field', type: 'text' };
//         this.fields.push(field);
//         this.renderFields();
//     }

//     private addRadioButton() {
//         const field: Field = { id: this.generateFieldId(), label: 'Radio Button', type: 'radio', options: ['Option 1', 'Option 2'] };
//         this.fields.push(field);
//         this.renderFields();
//     }

//     private addCheckbox() {
//         const field: Field = { id: this.generateFieldId(), label: 'Checkbox', type: 'checkbox', options: ['Option 1', 'Option 2'] };
//         this.fields.push(field);
//         this.renderFields();
//     }

//     private generateFieldId() {
//         return 'field_' + new Date().getTime();
//     }

//     private renderFields() {
//         this.formContainer.innerHTML = '';  // Clear existing fields
//         this.fields.forEach(field => {
//             const fieldElement = document.createElement('div');
//             const label = document.createElement('label');
//             label.textContent = field.label;

//             // Render based on field type
//             if (field.type === 'text') {
//                 const input = document.createElement('input');
//                 input.type = 'text';
//                 input.id = field.id;
//                 fieldElement.appendChild(label);
//                 fieldElement.appendChild(input);
//             } else if (field.type === 'radio' || field.type === 'checkbox') {
//                 field.options?.forEach((option, index) => {
//                     const input = document.createElement('input');
//                     input.type = field.type;
//                     input.name = field.id;  // Group radio buttons or checkboxes by field ID
//                     input.id = `${field.id}_${index}`;
//                     input.value = option;

//                     const optionLabel = document.createElement('label');
//                     optionLabel.textContent = option;

//                     fieldElement.appendChild(input);
//                     fieldElement.appendChild(optionLabel);
//                     fieldElement.appendChild(document.createElement('br'));
//                 });
//             }

//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             deleteButton.addEventListener('click', () => this.deleteField(field.id));

//             fieldElement.appendChild(deleteButton);
//             this.formContainer.appendChild(fieldElement);
//         });
//     }

//     private deleteField(fieldId: string) {
//         this.fields = this.fields.filter(field => field.id !== fieldId);
//         this.renderFields();
//     }
// }


import { FormStorage } from "./formStorage.js";

interface Field {
    id: string;
    label: string;
    type: 'text' | 'radio' | 'checkbox';
    options?: string[]; // Only for radio and checkbox fields
}

export class FormBuilder {
    private fieldsContainer: HTMLElement;
    private formTitleInput: HTMLInputElement;
    private formStorage: FormStorage;

    constructor() {
        this.fieldsContainer = document.getElementById("fields-container")!;
        this.formTitleInput = document.getElementById("form-title") as HTMLInputElement;
        this.formStorage = new FormStorage();
    }

    init() {
        document.getElementById("add-text-field")!.addEventListener("click", () => this.addField("text"));
        document.getElementById("add-radio-button")!.addEventListener("click", () => this.addField("radio"));
        document.getElementById("add-checkbox")!.addEventListener("click", () => this.addField("checkbox"));
        document.getElementById("save-form")!.addEventListener("click", () => this.saveForm());
    }

    addField(type: string) {
        const field = document.createElement("div");
        field.classList.add("field");

        if (type === "text") {
            // For text field, just add the label and text input
            field.innerHTML = `
                <input type="text" placeholder="Label" class="field-label">
                <button class="delete-field">X</button>
            `;
        } else if (type === "radio" || type === "checkbox") {
            // For radio/checkbox, ask for options
            field.innerHTML = `
                <input type="text" placeholder="Label" class="field-label">
                <button class="delete-field">X</button>
                <div class="options-container">
                    <input type="text" class="option-input" placeholder="Option 1">
                    <input type="text" class="option-input" placeholder="Option 2">
                </div>
            `;
        }

        // Add delete functionality
        field.querySelector(".delete-field")!.addEventListener("click", () => field.remove());
        this.fieldsContainer.appendChild(field);
    }

    saveForm() {
        const title = this.formTitleInput.value.trim();
        if (!title) {
            alert("Form title is required!");
            return;
        }

        // Use Array.from to ensure we work with HTMLElement and not Element
        const fields = Array.from(this.fieldsContainer.children).map((fieldElement: HTMLElement) => {
            const label = (fieldElement.querySelector("input[type='text']") as HTMLInputElement).value;
            const options: string[] = [];
            const optionInputs = fieldElement.querySelectorAll(".option-input") as NodeListOf<HTMLInputElement>;

            // Collect options if present
            optionInputs.forEach(optionInput => {
                if (optionInput.value.trim()) {
                    options.push(optionInput.value.trim());
                }
            });

            // Determine field type based on presence of options
            const type = options.length > 0 ? (fieldElement.querySelector(".option-input")!.value.includes('Option') ? 'radio' : 'checkbox') : 'text';

            // Create the field object with an ID
            return {
                id: this.generateFieldId(),
                label,
                type,
                options: options.length > 0 ? options : undefined
            } as Field;
        });

        // Save form data with title and fields
        this.formStorage.saveForm({ title, fields });
        alert("Form saved successfully!");
        location.reload();
    }

    // Generate a unique ID for each field
    private generateFieldId() {
        return 'field_' + new Date().getTime();
    }
}




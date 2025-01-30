// export class FormRenderer {
//     private previewContainer: HTMLElement;

//     constructor() {
//         this.previewContainer = document.getElementById("preview-container")!;
//     }

//     renderForm(form: { title: string; fields: any[] }) {
//         document.getElementById("form-preview")!.style.display = "block";
//         this.previewContainer.innerHTML = `<h3>${form.title}</h3>`;

//         form.fields.forEach(field => {
//             const div = document.createElement("div");
//             div.innerHTML = `<label>${field.label}</label> <input type="${field.type}">`;
//             this.previewContainer.appendChild(div);
//         });

//         document.getElementById("submit-form")!.addEventListener("click", () => alert("Form submitted!"));
//     }
// }


// interface Field {
//     id: string;
//     label: string;
//     type: 'text' | 'radio' | 'checkbox';
//     options?: string[]; // Only for radio and checkbox fields
// }

// export class FormRenderer {
//     private previewContainer: HTMLElement;

//     constructor() {
//         this.previewContainer = document.getElementById("preview-container")!;
//     }

//     renderForm(form: { title: string; fields: Field[] }) {
//         document.getElementById("form-preview")!.style.display = "block";
//         this.previewContainer.innerHTML = `<h3>${form.title}</h3>`;

//         form.fields.forEach((field: Field) => {
//             const div = document.createElement("div");
//             const label = document.createElement("label");
//             label.textContent = field.label;

//             // Handle different field types
//             if (field.type === "text") {
//                 const input = document.createElement("input");
//                 input.type = "text";
//                 input.placeholder = field.label; // Optionally, use the label as placeholder
//                 div.appendChild(label);
//                 div.appendChild(input);
//             } else if (field.type === "radio" || field.type === "checkbox") {
//                 field.options?.forEach((option: string, index: number) => {
//                     const input = document.createElement("input");
//                     input.type = field.type;
//                     input.name = field.label;  // Ensure unique name for group of radio buttons or checkboxes
//                     input.id = `${field.label}_${index}`;
//                     input.value = option;

//                     const optionLabel = document.createElement("label");
//                     optionLabel.textContent = option;

//                     div.appendChild(input);
//                     div.appendChild(optionLabel);
//                     div.appendChild(document.createElement("br"));
//                 });
//             }

//             this.previewContainer.appendChild(div);
//         });

//         // Add submit button event
//         document.getElementById("submit-form")!.addEventListener("click", () => alert("Form submitted!"));
//     }
// }


interface Field {
    id: string;
    label: string;
    type: 'text' | 'radio' | 'checkbox';
    options?: string[]; // Only for radio and checkbox fields
}

export class FormRenderer {
    private previewContainer: HTMLElement;

    constructor() {
        this.previewContainer = document.getElementById("preview-container")!;
    }

    renderForm(form: { title: string; fields: Field[] }) {
        document.getElementById("form-preview")!.style.display = "block";
        this.previewContainer.innerHTML = `<h3>${form.title}</h3>`;

        form.fields.forEach((field: Field) => {
            const div = document.createElement("div");
            const label = document.createElement("label");
            label.textContent = field.label;

            // Render based on field type
            if (field.type === 'text') {
                const input = document.createElement("input");
                input.type = 'text';
                input.id = field.id;
                div.appendChild(label);
                div.appendChild(input);
            } else if (field.type === 'radio' || field.type === 'checkbox') {
                field.options?.forEach((option: string, index: number) => {
                    const input = document.createElement("input");
                    input.type = field.type;
                    input.name = field.id; // Group radio buttons or checkboxes by field ID
                    input.id = `${field.id}_${index}`;
                    input.value = option;

                    const optionLabel = document.createElement("label");
                    optionLabel.textContent = option;

                    div.appendChild(input);
                    div.appendChild(optionLabel);
                    div.appendChild(document.createElement("br"));
                });
            }

            this.previewContainer.appendChild(div);
        });

        // Add submit button event
        document.getElementById("submit-form")!.addEventListener("click", () => alert("Form submitted!"));
    }
}


interface Field {
    id: string;
    label: string;
    type: 'text' | 'radio' | 'checkbox';
    options?: string[]; // Only for radio and checkbox fields
}

export interface FormData {
    title: string;
    fields: Field[]; // Array of fields of type Field
}

export class FormStorage {
    private storageKey = "forms";

    getForms(): FormData[] {
        return JSON.parse(localStorage.getItem(this.storageKey) || "[]") as FormData[];
    }

    saveForm(form: FormData): void {
        const forms: FormData[] = this.getForms();
        forms.push(form);
        localStorage.setItem(this.storageKey, JSON.stringify(forms));
    }

    deleteForm(index: number): void {
        const forms: FormData[] = this.getForms();
        forms.splice(index, 1);
        localStorage.setItem(this.storageKey, JSON.stringify(forms));
    }
}

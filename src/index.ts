import { sum } from "./calc";

const refs = {
    form: document.querySelector<HTMLFormElement>('.form'),
}

interface CalcFormElements extends HTMLFormControlsCollection {
    a: HTMLInputElement;
    b: HTMLInputElement;
    result: HTMLInputElement;
}

interface CalcForm extends HTMLFormElement {
    readonly elements: CalcFormElements;
}

const onFormSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const form = e.currentTarget as CalcForm;
    const a = form.elements.a.valueAsNumber;
    const b = form.elements.b.valueAsNumber;
    form.elements.result.valueAsNumber = sum(a, b);
}

refs.form?.addEventListener('submit', onFormSubmit);





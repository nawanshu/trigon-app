export const tvElements = {
    inputForm: document.querySelector('.input'),
    formField: document.querySelector('.form__field'),
    tv: document.querySelector('#tv')
};

export const renderInputs = () => {
    const markup = 
        `<div id="tv" style="display: flex; justify-content: space-around;align-items: center;">
            <label>
                <span>Length of Side A</span>
                <input class="input__field__a" type="number"/>
            </label>
            <label>
                <span>Length of Side B</span>
                <input class="input__field__b" type="number"/>
            </label>
            <label>
                <span>Length of Side C</span>
                <input class="input__field__c" type="number"/>
            </label>
            <button id="button" type="button" data-ts="Button" class="ts-primary">
                <span>Get Type</span>
            </button>
        </div>`
    tvElements.formField.insertAdjacentHTML('beforeend', markup);
}

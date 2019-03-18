export const elements = {
    modal: document.getElementById('modal'),
    shapeValue: document.getElementById('shape__value'),
    button: document.getElementById("button")
};

export const renderModal = () => {
    const markup = 
        `<dialog data-ts="Modal" id="basic-info">
        <div data-ts="Panel">
            <article data-ts="Box">
                <h1>Basics of Triangle</h1>
                <p>A Triangle is a three-sided polygon that consists of three edges and three vertices and the sum of internal angles of a triangle equal to 180o. Depending upon the sides and angles of a triangle, we can have different types of triangle. Here we have given a brief description for determining the area of a triangle using direct formula and using Heron’s formula.</p>
                <p>
                    <button onclick="ts.ui.get('#basic-info').close()" class="ts-primary">
                        <span>Close the Modal</span>
                    </button>
                </p>
            </article>
        </div>
    </dialog>`
    elements.modal.insertAdjacentHTML('beforeend', markup);
}
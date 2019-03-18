import Triangle from './Triangle/triangle';
import Shape from './shape';
import * as triangleView from './Triangle/triangleView';
import * as indexView from './indexView';

document.getElementById('basic-btn').addEventListener('click', e => {
    indexView.renderModal();
    ts.ui.get('#basic-info').open();
});
triangleView.renderInputs();

document.getElementById('shape__value').addEventListener('change', e => {
    document.querySelector('#tv') && document.querySelector('#tv').remove();
    const element = indexView.elements.shapeValue;
    switch(element[element.selectedIndex].value) {
        case 'triangle':
        triangleView.renderInputs();
            break;
        case 'rectangle':
            return '';
    }
});

const getType = function() {
    let shape = new Triangle();
    let a = parseFloat(document.querySelector('.input__field__a').value);
    let b = parseFloat(document.querySelector('.input__field__b').value);
    let c = parseFloat(document.querySelector('.input__field__c').value);
    if(shape.gatherSides([a, b, c])) {
        if(shape.validate()){
            console.log(shape.classify());
        }
    }
}

document.getElementById("button").addEventListener('click', e => {
    getType();
});

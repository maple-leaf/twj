import { createDiv } from '../src/dom-functions';

describe('test dom-functions', () => {
    test('call createDiv with no arguments', () => {
        const div = createDiv();
        expect(div.innerHTML).toBe('');
        expect(div.id).toBe('');
    });

    test('call createDiv with two arguments', () => {
        const divWithId = createDiv('', 'x');
        expect(divWithId.innerHTML).toBe('');
        expect(divWithId.id).toBe('x');

        const innerHTML = '<span>x</span>';
        const divWithInnerHTML = createDiv(innerHTML, '');
        expect(divWithInnerHTML.innerHTML).toBe(innerHTML);
        expect(divWithInnerHTML.children.length).toBe(1);
        expect(divWithInnerHTML.firstChild.nodeName).toBe('SPAN');
        expect(divWithInnerHTML.firstChild.textContent).toBe('x');
        expect(divWithInnerHTML.id).toBe('');
    });
});

import { createDiv } from './dom-functions';
import { concatString } from './functions';

document.body.onload = () => {
    const str = concatString('Hello', 'World');
    const div = createDiv(str, 'hello');
    document.body.appendChild(div);
};

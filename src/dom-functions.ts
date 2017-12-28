export function createDiv(innerHTML?: string, id?: string) {
    const div = document.createElement('div');
    if (innerHTML) div.innerHTML = innerHTML;
    if (id) div.id = id;

    return div;
}

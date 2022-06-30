const div = (attributes, parent) => {
    return tag('div', attributes, parent);
}

const p = (attributes, parent) => {
    return tag('p', attributes, parent);
}

const image = (attributes, parent) => {
    return tag('img', attributes, parent);
}

const input = (attributes, parent) => {
    return tag('input', attributes, parent);
}


const tag = (type, attributes, parent) => {
    var element = document.createElement(type);
    if (parent) {
        parent.appendChild(element);
    }

    for (const key in attributes) {
        element[key] = attributes[key];
    }

    return element;

}
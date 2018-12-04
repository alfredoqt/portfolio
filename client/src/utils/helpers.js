export const capitalize = string =>
    string.split(' ').map(el => `${el[0].toUpperCase()}${el.substr(1).toLowerCase()}`).join(' ');

export default options => {
    const newElement = document.createElement(options.type);
    Object.keys(options).forEach(key=> {
        if(key !== 'type') {
            options[key] instanceof Object ? Object.keys(options[key]).forEach(subKey => newElement[key][subKey] = options[key][subKey]) : newElement[key] = options[key];
        }
    });

    return newElement;
}
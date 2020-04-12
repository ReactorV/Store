const utils = {};

utils.compose = (...functions) => (component) => {
    return functions.reduceRight((wrapped, func) => func(wrapped), component);
};

export default utils;

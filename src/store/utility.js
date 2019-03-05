export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const updateArray = (oldArray, updatedProperties) => {
    return [
        ...oldArray,
        ...updatedProperties
    ];
}
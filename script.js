function removeElement(array, item) {
    const index = array.indexOf(item);

    if (index !== -1) {
        array.splice(item, 1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 4);
console.log(array);

function removeElement(array, item) {
    const index = array.indexOf(item);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);


function remove(arr, item) {
    let ind = arr.indexOf(item);

    if (ind !== -1) {
        arr.splice(ind, 1);
    }
}

const arr = ['t2', 'h4', 'd6', 77, 111, 88];
removeElement(arr, 77);
console.log(arr);
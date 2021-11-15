//trien khai thuat toan tim kiem nhi phan

let BS = function(array, x, start, end) {

    let mid = Math.floor((start + end) / 2);

    if (start > end) {

        return false;

    }

    if (array[mid] == x) {

        return true;

    }

    if (array[mid] < x) {

        return BS(array, x, mid + 1, end);

    } else {

        return BS(array, x, start, mid - 1);

    }

}
//driver code
let arr = [1, 2, 3, 4, 5, 6];

let x = 10;

if (BS(arr, x, 0, arr.length - 1)) {

    console.log("tim thay!")

} else {

    console.log("k tim thay!");

}

//bai1: giai pt bac 2

let a = prompt("nhap a");

let b = prompt("nhap b");

let c = prompt("nhap c");

if (a == 0) {

    if (b == 0 && c == 0) {

        console.log("pt co vo so nghiem");

    } else if (b == 0 && c != 0) {

        console.log("pt vo nghiem");

    } else {

        let x = -c / b;

        console.log(x, " la nghiem cua pt");

    }

} else {

    let delta = b * b - 4 * a * c;

    let canDelta = Math.sqrt(delta);

    if (delta < 0) {

        console.log("pt vo nghiem");

    } else if (delta == 0) {

        x = -b / 2 * a;

        console.log("pt co nghiem duy nhat:", x);

    } else {

        let x1 = (-b + canDelta) / 4 * a * c;

        let x2 = (-b - canDelta) / 4 * a * c;

        console.log("pt co 2 nghiem:", x1, " va", x2);

    }

}
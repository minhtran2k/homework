// Nhập vào 1 mảng thông tin các bạn học viên sau đó:
const students = [{
        name: "a",
        age: 12,
        address: "Ha noi",
        score: 9,
    },
    {
        name: "b",
        age: 23,
        address: "Sai Gon",
        score: 8,
    },
    {
        name: "d",
        age: 15,
        address: "Da Nang",
        score: 7,
    },
    {
        name: "f",
        age: 16,
        address: "Ca Mau",
        score: 7,
    },
    {
        name: "c",
        age: 19,
        address: "Nha Trang",
        score: 7,
    },
];

// Get information

const name = document.querySelector(".ip-name");

const age = document.querySelector(".ip-age");

const address = document.querySelector(".ip-address");

const score = document.querySelector(".ip-score");

const btnAdd = document.querySelector(".btn-add-student");

btnAdd.addEventListener("click", () => {
    // Get value input

    const studentName = name.value;

    const studentAge = age.value;

    const studentAddress = address.value;

    const studentScore = score.value;

    students.push({

        name: studentName,

        age: studentAge,

        address: studentAddress,

        score: studentScore,

    });

    console.log({ students });
});

// - Tìm ra người có số tuổi cao nhất

const btnSearchAge = document.querySelector(".btn-search-highest-age");

btnSearchAge.addEventListener("click", function() {

    let studentHighestAge = students[0];

    for (let index = 1; index < students.length; index++) {

        const element = students[index];

        if (studentHighestAge.age < element.age) {

            studentHighestAge = element;

        }

    }


    const highAge = document.querySelector(".highest-age");

    highAge.innerText = studentHighestAge.name;
});


// - Sắp xếp các học viên theo chiều tang dần của tên

const sortedContainer = document.querySelector(".sortedList");


students.sort(function compare(a, b) {

    if (a.name < b.name) {

        return -1;

    }

    if (a.name > b.name) {

        return 1;

    }

    return 0;

});


//sort
const btnSorted = document.querySelector(".btn-sorted");

btnSorted.addEventListener("click", function() {

    for (let index = 0; index < students.length; index++) {

        const element = students[index];


        const divContainer = document.createElement("div"); //tao div

        sortedContainer.appendChild(divContainer);

        divContainer.innerHTML = `

        <section>Name: ${element.name}</section>

        <section>Age: ${element.age}</section>

        <section>Address: ${element.address}</section>

        <section>Score: ${element.score}</section>

        `;


        const divHr = document.createElement("div");

        divHr.innerText = "______________";

        sortedContainer.appendChild(divHr);

    }
});

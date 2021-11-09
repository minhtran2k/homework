let students = [

    {
        name: "minh",
        
        age: 21,
        
        address: "HP",
        
        location: "North",
        
        firstTestScore: 99,
        
    },
      
    {
        name: "hung",
        
        age: 17,
        
        address: "Hanoi",
        
        location: "North",
        
        firstTestScore: 95,
        
    },
      
    {
        
        name: "son",
        
        age: 18,
        
        address: "QN",
        
        location: "North",
        
        firstTestScore: 90,
        
      
    },
      
    {
        name: "tung",
        
        age: 24,
        
        address: "SG",
        
        location: "South",
        
        firstTestScore: 93,
       
    }
]

//nguoi lon tuoi nhat

function oldest(array){

    for (let index = 0; index < array.length - 1; index++) {
        
        for (let jndex = index + 1; jndex < array.length; jndex++) {
            
            if(array[jndex].age > array[jndex + 1].age){

                let tmp = array[jndex];

                array[jndex] = array[jndex + 1];

                array[jndex + 1] = tmp;

            }

        }
        
    }

    console.log("nguoi co tuoi nhat:", array[array.length - 1].name);
}

//o mien Bac

function inNorthSide(array){

    for (let index = 0; index < array.length; index++) {
        
       if(array[index].location == "North"){

            console.log(array[index].name, "o mien Bac");

       }
        
    }

}

//driver code

oldest(students);

inNorthSide(students);

//phan khac tuong tu ...

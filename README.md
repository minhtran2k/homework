var a = prompt(Array);

for(let i = 0; i < Array.length; i++){

    for(let j = Array.length - 1; j > i; j--){

        if(a[j] < a[j - 1]){

           let tmp = a[j];
           
           a[j] = a[j - 1];

           a[j - 1] = tmp;

        }

    }

}

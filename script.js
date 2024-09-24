//exercise1
const arr=[1,5,12,9,10,70,65,33,25,94,3,8];
let newArr=[];
const even=(items)=>{

    arr.forEach(item=>{
        if(item%2==0){
            newArr.push(item);
        }
        
        });
        console.log('even');
        console.log(newArr);
}
even(arr);




//exercise2
const arr2=[1,5,12,9,10,70,65,33,25,94,3,8];
const largest=(items)=>{
    let largestNumber=0;
    arr2.forEach(item=>{
        if(item>largestNumber){largestNumber=item;}
    })
    console.log('largest');
    console.log(largestNumber);

}
largest(arr2);



//exercie3
const str="mohammed";
let reverse='';

const reversed =(str)=>{
    for(let i=0;i<=str.length;i++){
        reverse += str[str.length-i];
        }
        console.log(reverse);

}
reversed(str);


//exercie4
const arr4=[1,5,1,9,1,70,5,3,5,94,3,8];

const removedouble=(items)=>{

    let nodouble=[];
    arr4.forEach(item=>{
    if(!nodouble.includes(item)){
        nodouble.push(item);
    }
    
    });
    
    
    console.log('no repeat');
    console.log(nodouble);
}
removedouble(arr4);

// arrow functions don't have their own this keyword where as normal functions do. 

function foo(num){
    console.log('loop: '+ num);
    this.count++
   
}


foo.count = 0

for(let i = 1; i<5 ; i++ ){
    foo(i)
}

console.log(foo.count);





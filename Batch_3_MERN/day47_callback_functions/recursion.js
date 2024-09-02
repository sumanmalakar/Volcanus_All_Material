
const print = (n) =>{
   if(n<1){
    return;
   }
   print(n-1)
   console.log(n)

}

print(5)

// n = 5 , 5,4,3,2,1 // 1,2,3,4,5
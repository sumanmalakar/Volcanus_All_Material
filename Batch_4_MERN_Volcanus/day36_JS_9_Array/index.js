// const arr = [10,20,30,40,"superman","spiderman","facebook","google",10.23,40.23,true, false,'a','z','b']

// console.log(arr)

const movies = [
    {title:'Ra.One',Actor:'SRK',release:'2012',Hit:false, Flop:true},
    {title:'Infinity War',Actor:'RDJ',release:'2018',Hit:true, Flop:true},
    {title:'Dhoom 3',Actor:'Aamir Khan',release:'2013',Hit:true, Flop:false},
    {title:'End Game',Actor:'Thanos',release:'2019',Hit:true, Flop:false},
]
// console.log(movies)
// let i=0;
// while( i<movies.length){
//     console.log(movies[i].title)
//     i++;
// }
// for(let key in movies){
//     console.log(key, movies[key])
// }
// for(let element of movies){
//     console.log(element)
// }

// movies.forEach((value,index)=>console.log(value,index))

const products = [
    {title:'iphone-15',price:90000,color:'blue'},
    {title:'hp elitebook',price:80000,color:'silvery'},
    {title:'lenovo thinkPad',price:100000,color:'black'},
    {title:'One plus 5',price:30000,color:'blue'},
]

// for(let i=0; i<products.length; i++){
//     console.log(products[i])
// }
// let i=0; 
// while(i<products.length){
//     console.log(products[i])
//     i++
// }
// for(let key in products){
//     console.log(key, products[key])
// }

// for(let element of products){
//     console.log(element)
// }

products.forEach((values)=>console.log(values))
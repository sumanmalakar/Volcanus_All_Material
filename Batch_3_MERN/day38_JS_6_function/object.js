const laptop = {
    brandName:'Hp',
    price:70689,
    ram:'8 GB',
    ssd:'2 TB',
    processor:"Intel i9 10th gen",
    os:'windows',
    camera:'800 MP', 
    battery:'8000 mah',
    shell : function(){
        console.log(this)
    }
}
console.log(laptop.shell())


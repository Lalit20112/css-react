let john = {name:"john"};
// let array = [john]
let map = new Map();
map.set(john,"...");
john = null
// console.log(map)

// let weekmap =new weekmap();
// let obj = {};
// weekmap.set(obj,"ok");
// console.log(obj)

// for loop
const root = [10,20,30,40];
for (let i=0; i<root.length; i++){
    // console.log(`${i} ${root[i]}`)
}

for (const bete of root){
    // console.log( `hello ${bete}`)
}

let data =[20,4,8,1,8,4,,,,,0,null,false,NaN,true,7,4,7]
data =data.filter(Boolean)
// data = data.filter((item)=>(
//     item!=false && item
// ))
// console.log(data)
console.log(false == []);
console.log(false == ![]);
console.log([] != [])
Number([])
console.log(Boolean([451]))

let cache = new WeakMap();
function process(obj){
    if(!cache.has(obj)){
        let result = 20*20
        cache.set(obj,result)
        return result   
    }
    return cache.get(obj)
}
let obj = {}
let result1 = process(obj);
let result2 =process(obj);
console.log(result1)
obj =  null
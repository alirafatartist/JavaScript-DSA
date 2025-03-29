const map = new Map([['a',1],['b',2]])
// a & b are the keys
// 1 & 2 are the corresponding values 

console.log(map);

map.set('c',3) // set here is the method not data structure

for (const item of map) {
    console.log(item);
}

for (const [key,value] of map) {
    console.log(`${key}:`,`${value}`);
}
console.log(map.has('a'));
map.delete('c')
console.log(map);
console.log(map.size);
map.clear()
console.log(map);
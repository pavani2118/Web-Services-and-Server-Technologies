let arr=["apple","banana","pineapple"]
console.log(arr);
console.log(typeof(arr))

let objArr=[1,"pavani",true]
console.log(objArr);
console.log(typeof(objArr))

for(let i=0;i<arr.length;i++){
	console.log(arr[i]);
}
arr.forEach((fruit)=>{
	console.log(fruit)
})
console.log()
console.log("find the maximum number")
let numbers=[45,78,90,13]
let max=numbers[0]
numbers.forEach((number)=>{
	if(max<number){
		max=number
	}
})
console.log(max)

//nested Array
let narray=[[1,2,30],[5,6],[8,5,3]]
console.log(narray)
narray.forEach((num)=>{
	num.forEach((x)=>{
	console.log(x)
	})
})
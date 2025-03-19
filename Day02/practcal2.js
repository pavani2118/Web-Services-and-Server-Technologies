let a=[4,5,6,3,7]
let b=[8,3,2,1,5]

//common Element
for(let i=0;i<a.length;i++){
   for(let x=0;x<b.length;x++){
    if(a[i]==b[x]){
        console.log(a[i])
    }
}
}


let arr=[1,2,3,4,5,6]
let target=7
for(let i=0;i<arr.length;i++){
   for(let x=0;x<arr.length;x++){
       if(arr[i]+arr[x]==target){
           console.log(arr[i]+" "+arr[x])
       }
   }
}

let arr2=[4,8,3,4,3,2,1,8,4]
let count=[]

for(let i=0;i<arr2.length;i++){
   for(let x=0;x<arr.length;x++){
       if(arr[i]==arr[x]){
           count[i]+=1
       }
   }
       count[i]=[count[i]]
}
max=0;
for(let i=0;i<count.length;i++){
    if(count[i]>max){
        max=count[i]
    }
}
console.log(max)

//reverse order
let alph=["a","b","c","d"]
let alph2=[]
   console.log(alph.reverse());
for(let i=0;i<4;i++){
    alph2[i]=alph.pop()
    console.log(alph2[i]);
}
console.log(alph2);
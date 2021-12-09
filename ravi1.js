arr = [2,3,4,21,1,99];

res=arr.reduce(minmax,arr.splice(0,2))
function minmax(prev,new1){
    if(prev[0]>prev[1]){
        temp=prev[0]
        prev[0]=prev[1]
        prev[1]=temp
    }
    
    if(prev[0]>new1){
        prev[0]=new1
    }
    if(prev[1]<new1){
        prev[1]=new1
    }
    return prev
}

console.log(res)
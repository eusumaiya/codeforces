var people = 8;
var targated_person = 5;
var arr = [10,9,8,7,7,7,5,5];

var ans = 0;
for(let i = 0 ; i<people ; i++){
    if(arr[i]>0 && arr[i] >= arr[targated_person-1]){
        ans++;
    }
}
console.log(ans)

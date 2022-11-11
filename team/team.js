var problem = [
    [1,1,0],
    [1,1,1],
    [1,0,0]
]
var n = 3

var ans = 0
for(let i = 0 ; i<n ; i++){
    var count = 0;
    for(let j = 0 ; j<3 ; j++){
        if(problem[i][j]===1){
            count++;
        }
    }
    if(count>=2)ans++;
}
console.log(ans)
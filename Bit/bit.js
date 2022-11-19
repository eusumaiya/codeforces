function main() {
    let n=+(readline());
    let ans=0;
    for (let i=0; i<n; i++){
        let str=readline();
       
        if(str==="++X" || str==="X++"){
            console.log("hi");
            ans=ans+1;
        }
        else if (str==="--X" || str==="X--"){
            ans=ans-1;
        }
        
    }
    console.log(ans);
 }
 
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str=x.toString();
    let palindrome=true;
    for (let i=0, j=str.length-1;i<str.length;i++,j--){
        if (str[i]!==str[j]){
            palindrome=false;
            break;
        }
    }
    
    if(palindrome===true){
        return true;
        
    }
    else{
        return false;
    }
    
};
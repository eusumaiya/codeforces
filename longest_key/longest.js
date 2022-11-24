/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let count = 0;
    let j = 0;
    let ans = {
    }
    for(let i = 0 ; i<strs.length ; i++){
        let txt = ''
        for(let j = 0 ; j<strs[i].length ; j++){
            txt += strs[i][j];
            let prev =  ans[txt] ? ans[txt] : 0;
            ans[txt] = prev + 1;
        }
    }

    let text = '';
    let max = 0;
    for(key in ans){
        if(max < key.length && ans[key]===strs.length){
            text = key;
            max = key.length;
        }
    }
    // console.log(text);
    return text;
};
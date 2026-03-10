input : "aaabbc"
output: "a3b2c1"
let string = "dskajfiuhjkasdfhauifhwefjkafk"
function compressString(string){
    let result = "";
    let count = 1;
    for(let i=1; i <= str.length; i++){
        if(str[i] === str[i-1]){
            count++

        }else{
            result += str[i-1]+count;
            count =1;
        }
    }
    return result

}
console.log(compressString(string))
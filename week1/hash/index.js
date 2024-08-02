// import crypto from 'crypto';
// const input = "1";

// const ans = crypto.createHash("sha256").update(input).digest('hex');
// console.log(ans);





// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000

import crypto from 'crypto';

function findHashWithPrefix(prefix){
    let input=0;
    while(true){
    const inputStr=`harkirat => Raman | Rs 100
Ram => Ankit | Rs 10`+input.toString();
    const hash=crypto.createHash("sha256").update(inputStr).digest("hex");

    if(hash.startsWith(prefix)){
        return {input:inputStr, hash:hash}
    }
input++;
    }
}

const result= findHashWithPrefix("00000");
console.log(`Input: ${result.input}`)
console.log(`Input: ${result.hash}`)
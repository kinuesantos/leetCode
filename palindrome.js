const checkPalindrome=(num,numStr=JSON.stringify(num),newArr=[],i=numStr.length-1)=>{
  if(i<0){
    newArr=newArr.join('');
    if(newArr==numStr){
        return true;
    }else{
      return false;
    }
  }
  newArr.push(numStr[i]);
  return checkPalindrome(num,numStr,newArr,i-1);
}
console.log(checkPalindrome(121));


const Find_Digits = (N) => 
{ 
  var count=0;
  while(N !=0){
    N=Math.floor(N/10);
    count++;
    
  }
  return count;
  
};


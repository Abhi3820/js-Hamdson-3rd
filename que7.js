
const Prime_Check = (N) => 
{ 
  var count=0;
  if(N==1){
    return "NO";
  }
  else{
    for(var i=2;i<=N;i++){
      if(N%i==0){
        count++;
      }
    }
  }
  if(count==1){
    return "YES"
  }
  else{
    return "NO"
  }
	
};


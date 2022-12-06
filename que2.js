
const Find_Five = (N) => 
{
  var a=0;
  while(N>0){
    let r=(N%10)
    if(r==5){
      a++
    }
    N=parseInt(N/10);
  }
  return a;
	 
};


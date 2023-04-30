// sync function => line by line run krega isme//
const timeTakingfunction = () => {
    return "i will take time";

};
  
const callingfunction = () => {
    const name = timetakingfunction(); // it will take time
    console.log(name);
};
 callingsyncfunction();
 console.log(Aftetimetakingfuncton);


 console.log("--------------------");
  
// async function 
  
const timeTakingfunctio = async () => {
    return "i will take time" ; 
};
  const callingAsyncfunction = async () => {
    const name = await timetakingfunction();
    console.log(name);

  };
  callingAsyncfunction();
  console.log("after time taking function");

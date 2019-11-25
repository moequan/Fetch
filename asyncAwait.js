//Example 1

//Promise Part

// let myPromise=new Promise(function(resolve,reject){

//         //database related function, just assume that it brings data from the database
//         let x=MyDataStore(myObj);
//         resolve(x);

// });

// myPromise.then((result, error)=>
// {
//      abc(x); //it is just function for the example
// });


//async Part

// async function myAsyncfunction(myObj){
//     let x= new MyDataStore(myObj);  //it is example of the class and we are creating object
//     return await x.abc();
// }
// //let returnVal=await myAsyncfunction(obj);

// //Example 2

// //Promise Part
// function resolveAfter2Seconds(){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve('resolved');
//          //},2000);
//         });
//     })
// };

// //without async, it just return promise with initial state bcz it doesn't know which the operation execute (resolve or reject)

// //  function asyncCall(){
// //     console.log('calling');
// //     let result=  resolveAfter2Seconds();
// //     console.log(result);
// // }

// //Async Part
// //as we know async return promise and doing same thing of 'then' and we can catch the result or error using async/await.

// async function asyncCall(){
//     console.log('calling');
//     let result= await resolveAfter2Seconds();
//     console.log(result);
// }
// asyncCall();

// //Example 3

// //Promise part

// function getProcessedData(url)
// {
//     return downloadData(url)  //return promise
//     .catch(e=>{
//         console.log("error: "+e);
//         return downloadFallBackData(url); //return promise
//     })
//     .then((result,error)=>{
//         console.log(result);
//         return getProcessedDataWorker(result); //return promise
//     })
// }
// getProcessedData("https://jsonplaceholder.typicode.com/posts");

// //Async Part
// async function getProcessedData2(url)
// {
//     let data;
//     try{
//         data=await downloadData(url);
//     }
//     catch(e)
//     {
//         data=await downloadDataFallbackData(url);
//     }
//     return getProcessedDataWorker(data);
// }
// getProcessedData2("https://jsonplaceholder.typicode.com/posts");

// //Example 4:

// //Promise (chaining) part
// function logFetch(url)
// {
//     return fetch(url)
//     .then(response =>response.text())
//     .then(text=>{
//         console.log(text);
//     })
//     .catch(error=>{
//         console.log("Fetch Failed.",error);
//     })
// }

// //Async part

// async function logFetch(url)
// {
//     try
//     {
//         const response= await fetch(url);
//         const text=await response.text();
//         console.log(text);
//     }
//     catch(error)
//     {
//         console.log("Fetch Failed.",error);
//     }

// }

//Example 5

//Promise Part

function returnsAPromise(str){
    return new Promise((resolve,reject)=>{
            resolve(str);
    })
};

console.log("==============Promise part===================")
const myString ="I am string";
const myFunction = (str) =>{

    //Operation A
    returnsAPromise(str)
    .then(res=>{
        //Operation B (needs info from Operation A)
        console.log(`Using promise chains, ${res}`);
    })

   //Operation C (can run whenever)
   console.log(`I am ove here running synchronously`);
};
myFunction(myString);

console.log("==============Async part===================")
//Async part

const myAsyncFunction = async (str) => {
    //Operation A
    const promiseResults= await returnsAPromise(str);

     //Operation B (needs info from Operation A)
     console.log(`Using async/await, ${promiseResults}`);

    //Operation C (can run whenever)
     console.log("But be careful! I am not synchronously anymore");

}
myAsyncFunction(myString);

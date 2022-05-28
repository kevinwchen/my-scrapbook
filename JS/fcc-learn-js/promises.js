const makeServerRequest = new Promise((resolve, reject) => {
// responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
        
    if(responseFromServer) {
        resolve("We got the data");
    } else {  
        reject("Data not received");
    }
});
// The then method is executed immediately after your promise is fulfilled with resolve
makeServerRequest.then(result => {
    console.log(result);
});
// The catch method is executed immediately after a promise's reject method is called
makeServerRequest.catch(error => {
    console.log(error);
})
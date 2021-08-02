let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("promise fulfilled");
        reject("promise not fulfilled")
    }, 5000);
    console.log('proceed next');
})

myPromise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('execution done')
})
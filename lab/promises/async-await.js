function doSomething() {
    return new Promise( (resolve,reject)  => {
       setTimeout(() => {
           //resolve('api success');
           reject('api failed');
       }, 5000)
    });
}

async function execute() {

    try {
        let message = await doSomething();
        console.log(message)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('execution-done')
    }
}

execute();
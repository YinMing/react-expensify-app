const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //  resolve('This is my resolved data');
        //  resolve('This is my other resolved data'); //will be ignore for all promise
        resolve({
            name: 'Eddie',
            age: 50
        });

        reject('something when wrong!');
    }, 5000);
});

console.log('before');

//get promise result when iit complete, run async
promise.then((data)=>{
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //  resolve('This is my resolved data');
            //  resolve('This is my other resolved data'); //will be ignore for all promise
            resolve('This is my other promise');
            // reject('something when wrong!');
        }, 5000);
    });
}).then((str)=>{
    //run when success resolve
    console.log('does this run?', str);
}).catch((err)=>{
    console.log('error 1', err);
});

promise.then((data)=>{
    console.log('2', data);
},(err)=>{
    console.log('error 2', err);
});



console.log('after');
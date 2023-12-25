let Promise1 =  new Promise(function(resolve, reject) {
    setTimeout(function(){
        // console.log("task completed");
        resolve()
    }, 5000)
})
Promise1.then(function(){
    // console.log("work done");
});

new Promise(function(resolve, reject) {
    setTimeout(() => {
        // console.log("task2 completed");
        resolve()
    }, 10000);
}).then(function(){
    // console.log("work2 done");
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            console.log("fetch promise3 sucessful");
            resolve()
        }else{
            console.log("error something went wrong");
            reject()
        }
    }, 2000)
}).then(() => {
    console.log("work3 done");
}).catch(()=>{
    console.log("work3 failed");
});
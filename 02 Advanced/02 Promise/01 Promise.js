let Promise1 =  new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("task completed");
        resolve()
    }, 5000)
})
Promise1.then(function(){
    console.log("work done");
});

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("task2 completed");
        resolve()
    }, 10000);
}).then(function(){
    console.log("work2 done");
});
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
            // console.log("fetch promise3 sucessful");
            resolve()
        }else{
            // console.log("error something went wrong");
            reject()
        }
    }, 2000)
}).then(() => {
    // console.log("work3 done");
}).catch(()=>{
    // console.log("work3 failed");
});



new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (error == false) {
            resolve({username:"sahil",password: "abc"})
        } else {
            // console.log("error fetch failed");
            reject()
        }
        
    }, 1000);
}).then((user)=>{
    // console.log(user);
    return user.username;
}).then((username) => {
// console.log(username);
}).catch(() => {
    // console.log("work4 failed");
}).finally(() => {
    // console.log("work4 process completed either its failed or sucessed");
})

// async await +++++++++++++++++++++++++++++++++++++++++++++++++++

let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (error == false) {
            resolve({username:"sahil",password: "abc"})
        } else {
            // console.log("error fetch failed");
            reject()
        }
        
    }, 1000);
})

async function handlePromise5() {
    try {
    const response = await promise5
    console.log(response);
    } catch {
        console.log("failed promise5");
    }
}

handlePromise5()
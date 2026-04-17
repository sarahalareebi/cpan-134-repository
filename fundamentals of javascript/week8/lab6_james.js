// Task 1.
function getApiData(){
return new Promise((resolve, reject)=>{
setTimeout(()=>{
    resolve('Some data');
},2000);
});
}
getApiData().then((data)=>{console.log('Task 1.1: ' + data)});


// 1.2

function getApiData2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('An error occurred.')
        },2000);
    });
}
getApiData2()
.then((data)=>{console.log('Task 1.2: ' + data)})
.catch((err)=>{console.log('Task 1.2: ' + err)})


// task 2.

let myPromise = new Promise((resolve, reject)=>{
    resolve(1);
});

myPromise
.then((n)=>{console.log('Task 2: ' + n); return n * 2;})
.then((n)=>{console.log('Task 2: ' + n); return n * 3;})
.then((n)=>{console.log('Task 2: ' + n); return n / 2;})
.then((n)=>{console.log('Task 2: ' + n);});


// Task 3.

function getApiData3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if (Math.random() > 0.5){
            resolve('Some data')
        } else {
            reject('An error occurred.')
        }
        },2000);
    });
}

getApiData3()
.then((data)=>{console.log('Task 3: ' + data)})
.catch((err)=>{console.log('Task 3: ' + err)})
.finally(()=>{'Task 3 Ended.'});



// Task 4.

async function handleData(){
    try{
    let response =  await getApiData3();
    console.log('Task 4: ' + response);
    } catch (err) {
        console.log('Task 4: ' + err);
    } finally {
        console.log('Task 4: Done!');
    }
}

handleData();
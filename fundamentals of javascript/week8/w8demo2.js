function fetchData(){
    let data;
    // ToDo get data from a source
    data = "Some data";
    return new Promise((resolve, reject)=>{;
    setTimeout(()=>{
    if (Math.random() > 0.5)
        resolve(data)
    else
        reject('An error occurred.')
    },2000)
});
}

let response = fetchData();

response
.then((data)=>{console.log('Success:' + data)})
.catch((err)=>{console.log('Fail: ' + err)})
.finally(()=>{console.log('Process complete.')});

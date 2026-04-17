// Async/Await
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

async function handleData(){
    try {
        let response = await fetchData();
        console.log('Success: ' + response);
    } catch (err) {
        console.log('Fail: ' + err);
    } finally {
        console.log('Process complete.');
    }
}
handleData()
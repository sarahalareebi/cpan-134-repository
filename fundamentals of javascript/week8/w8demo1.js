// Callback function

function fetchData(callback){
    let data;
    setTimeout(()=>{
    //TODO get data from a source
    data = "Some data..."
    callback (data);
    },2000);
}

function handleData(data){ //Callback function
    console.log(data);
}

fetchData(handleData);
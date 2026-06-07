function lightOn(){

fetch('http://127.0.0.1:5000/light',{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
state:'ON'
})
});
}

function lightOff(){

fetch('http://127.0.0.1:5000/light',{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
state:'OFF'
})
});
}

function fanOn(){

fetch('http://127.0.0.1:5000/fan',{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
state:'ON'
})
});
}

function fanOff(){

fetch('http://127.0.0.1:5000/fan',{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
state:'OFF'
})
});
}

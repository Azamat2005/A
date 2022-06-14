let btn=document.getElementById('adds');
let rembtn=document.getElementById('remova')
let Rectangle=document.getElementById('rectangle')
let Body=document.querySelector('body');
btn.addEventListener('mouseover',function (){
    document.getElementById('bgs').style.background='red';
})

rembtn.addEventListener('mouseover',function (){
    document.getElementById('bgs').style.background='none';
})
// Rectangle.addEventListener('mouseleave',function (){
//     Rectangle.style.background='black'
//     Rectangle.style.borderRadius='50%'
// })
// Rectangle.addEventListener('mouseover',function (){
//     Rectangle.style.background='black'
// })
//


let tasks=[
    {
        comments:'Salom',
        dates:'25.04.2022'
    }
];
let result='';

function draw(){
    //document.getElementById('tableBody');
    for (let i=0; i<tasks.length; i++){
        document.getElementById('tableBody').innerHTML+=
            '<tr>'+
            '<td>'+ (i+1) +'</td>'+
            '<td>'+tasks[i].comments+'</td>'+
            '<td>'+tasks[i].dates+'</td>'+
            '</tr>'
    }
}

function addTask() {
    let textares=document.forms['textForm']['comments'].value;
    let dates=document.forms['textForm']['dates'].value;
    console.log(dates)
}


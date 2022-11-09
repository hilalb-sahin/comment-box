let emailvalue = 'Email : ';
let namevalue = 'Name : ';
let textvalue = 'Text : ';



let countDiv= document.getElementById('char-count');
let div = document.getElementById('comment-box');


console.log(email.value);
function handleSubmit() {
    let li = document.createElement('p');
    let li2 = document.createElement('p');
    let li3 = document.createElement('p');
    let ul = document.createElement('ul');
    emailvalue +=  document.getElementById('email').value;
    namevalue += document.getElementById('name').value;
    textvalue +=  document.getElementById('text').value;
    li.innerHTML = namevalue;
    ul.append(li);

    li2.innerHTML = emailvalue;
    ul.append(li2);

    li3.innerHTML = textvalue;
    ul.append(li3);

    div.append(ul);

    emailvalue = 'email : ';
    namevalue = 'name : ';
    textvalue = 'text: ';
    
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('text').value = '';

}



 function handleCount(){
    textvalue = '';
    textvalue +=  document.getElementById('text').value;
    console.log(textvalue.length);

    countDiv.innerHTML =  textvalue.length + '/140';
    counter = textvalue.length;

if (counter < 0) {
    characterCounter.style.color = "red";
} else if (counter < 20) {
    characterCounter.style.color = "orange";
} else {
    characterCounter.style.color = "black";
}
    
    if(textvalue.length >=140) {
        countDiv.style.color = 'red'
        alert('text cannot be more than 140 characters');
        
    } 
   } 


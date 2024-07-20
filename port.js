
    
// let name = document.getElementById('name').value;
// let email = document.getElementById('email').value;
// let message = document.getElementById('message').value;


// if ( name && email && message) {
//     alert('Thank you for your message, ')
// } else{
//     alert('please fill out all field.');
// }

    
// });


var btn= document.querySelector('#btn');

// console.log('hello');

btn.addEventListener('click', () => {
    var name = document.querySelector('#name').value 
    var email = document.querySelector('#email').value
    var message = document.querySelector('#message').value

    if (name && email &&message ) { 
        alert('Thank you for your message')
    // }else if (input2.length < 3){
    //     alert('password length must be greatee than 3')
    } else{
        alert( 'please fill the form')
    }
})






// var btn= document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     var name = document.querySelector('#name').value
//     var email = document.querySelector('#email').value
//     var message = document.querySelector('#message').message


// if ( name && email && message) {
//     alert('Thank you for your message')
//     document.getElementById('contact-form').reset():
// }else {
//     alert('please fill the form'):
// }

// }):
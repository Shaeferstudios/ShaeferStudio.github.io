//advice, the problem is "The string did not match the expected pattern." syntax error.

// const adviceWrapper = document.querySelector('#Advice-wrapper');


//  window.onload = () => {
//     getAdvice();
//  }

// function getAdvice() {

//     fetch('https://api.adviceslip.com/advice').then(Response => {
//         return Response.json();
//     }).then(adviceData => {
//         const adviveobj = adviceData.slip;
//         adviceData.innerHTML = `<p>${adviveobj.advice}</p>`;

//     }).catch(error => {
//         console.log(error);
//     });


// }
console.log('starting...');
$.ajax(
    'https://api.adviceslip.com/advice',
    {
        success: function (APIResponse) {
            let words = document.getElementById("Advice-wrapper");
            let obj = JSON.parse(APIResponse);
            console.log(APIResponse);
            words.innerHTML = obj.slip.advice;
        }
    });




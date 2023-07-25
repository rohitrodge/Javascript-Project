const form = document.querySelector('form');

// EventListener 
form.addEventListener('submit', function(e){
e.preventDefault();

const height = parseInt(document.querySelector('#height').value); // parseInt For interger value
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
}

else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
}

else{
    // BMI formula
    const bmi = (weight/((height*height)/10000)).toFixed(2);

// final result
results.innerHTML = `<span> ${bmi} </span>`;
}

});
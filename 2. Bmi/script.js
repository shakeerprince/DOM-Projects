const form = document.querySelector('form');

form.addEventListener('submit', function(e){

    e.preventDefault();


const height = parseInt( document.querySelector('#height').value);
const weight = parseInt( document.querySelector('#weight').value);

const result = document.querySelector('#result');

if(height === '' || height  < 0 || isNaN(height)){

    result.innerHTML=`Please Enter a valid height ${height}`;

}else if(weight === '' || weight  < 0 || isNaN (weight)){

    result.innerHTML = `Please Enter a valid weight ${weight}`;

}else{
  const bmi =  (weight / ((height * height)/10000)).toFixed(2);

  result.innerHTML = `<spam>${bmi}</spam>`
  
  if( weight < 18.6){
   result.innerHTML= 'Under Weight';

  }

  if( height = 18.6 && 24.9){
    result.innerHTML= 'Normal Range';
 
   }

   if(weight > 24.9){
    result.innerHTML= 'Other Weight';
 
   }

}

});
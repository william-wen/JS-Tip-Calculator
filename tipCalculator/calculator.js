var billAmount = document.getElementById('billAmount');
var serviceQuality = document.getElementById('serviceQual');
var numberOfPeople = document.getElementById('peopleNumber');
var tipAmount = document.getElementById('tip-amount');
var money = document.getElementById('money');
var each = document.getElementById('each');
var btn = document.querySelector('#calculate');

btn.addEventListener('click', calculateTip);

function calculateTip() {
  let input = serviceQuality.options[serviceQuality.selectedIndex].value;
  //options is an array of options in a select tag
  //selectedIndex   returns the index of the option with the "selected" attribute
  let tipPercentage;

  if (billAmount.value == "" || numberOfPeople.value == "" || input == "nothing"){
    alert('Please Enter All Values');
    return;
  }

  if (isNaN(billAmount.value) || isNaN(numberOfPeople.value)) {
    alert('Please Enter Number for Bill Amount and # of People');
    return;
  }
  
  if (numberOfPeople.value < 1){
    alert('Are you trying to break my code?');
    return;
  }

  if (input == "terrible") {
    tipPercentage = 0.05;
  }
  else if (input == "bad") {
    tipPercentage = 0.10;
  }
  else if (input == "average"){
    tipPercentage = 0.15;
  }
  else if (input == "good"){
    tipPercentage = 0.20;
  }
  else if (input == "awesome"){
    tipPercentage = 0.25;
  }

  let finalTip = (billAmount.value * tipPercentage) / numberOfPeople.value;

  tipAmount.textContent = "TIP AMOUNT";
  money.textContent = "$ " + finalTip;
  each.textContent = "each";
}

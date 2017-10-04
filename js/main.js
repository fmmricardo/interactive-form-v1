//document.addEventListener('DOMContentLoaded', () => {

  // Variables

  //Variables jobRole

  const jobRole = document.getElementById('title');
  const jobRoleInput = document.getElementById('other-title');

  //variables Color
  const chooseColor = document.getElementById('color');
  const chooseDesign = document.getElementById('design');
  const colorMenu = document.getElementById('color-js-puns');


  //Variables activities

  const activities = document.querySelector('.activities');
  const mainConference = document.querySelector("input[name='all']");
  const jsFrameworks = document.querySelector("input[name='js-frameworks']");
  const jsLibraries = document.querySelector("input[name='js-libs']");
  const express = document.querySelector("input[name='express']");
  const nodeJS = document.querySelector("input[name='node']");
  const buildTools = document.querySelector("input[name='build-tools']");
  const npm = document.querySelector("input[name='npm']");
  const activitiesErrorDiv = document.createElement('div');
  const activitiesErrorSpan = document.createElement('span');

  // variables total costs
  const totalHTML = document.createElement('div');
  const totalSpan = document.createElement('span');
  let total;
  let printCost = 0;

  //Payment Variables
  const payment = document.getElementById('payment');
  const creditCard = document.getElementById('credit-card');
  const paypal = document.getElementById('paypal');
  const bitcoin = document.getElementById('bitcoin');
  // PAYMENT  information variables
  const creditCardNumber = document.getElementById('cc-num');
  const zipCode = document.getElementById('zip');
  const cvvCode = document.getElementById('cvv');
  const paymentErrorDiv = document.createElement('div');
  const paymentErrorSpan = document.createElement('span');

  //form validation
  //name variables
  //const name = document.getElementById('name');
  const name = document.getElementById('name');
  const nameErrorDiv = document.createElement('div');
  const nameErrorSpan = document.createElement('span');

  //email
  const mail = document.getElementById('mail');
  const emailErrorDiv = document.createElement('div');
  const emailErrorSpan = document.createElement('span');
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Submit button
  const submitButton = document.querySelector('button');

  //****************************************
  // ERROR FUNCTION
  //****************************************

  //CreateError
  const errorFunction = function(errorMessage, span, div, insertBeforeM) {
    span.textContent = '';
    span.append(errorMessage);
    span.setAttribute("class", "error");
    div.appendChild(span);
    insertBeforeM.parentNode.insertBefore(div, insertBeforeM);
  };
  //Name validation
  const blankName = () => {
    if (name.value == '') {
      errorFunction('Name field can not be blank ', nameErrorSpan, nameErrorDiv, name);
      return false;
    } else {
      nameErrorDiv.remove();
      return true;
    }
  };
  // email not blanl Validation
  const blankEmail = () => {
    if (mail.value == '') {
      errorFunction('must be a validly formatted e-mail address ', emailErrorSpan, emailErrorDiv, mail);
      return false;
    } else {
      emailErrorDiv.remove();
      return true;
    }
  };
  //email Validation
  const validEmail = () => {

    if (regex.test(mail.value) == false) {
      errorFunction('Please enter a valid mail', emailErrorSpan, emailErrorDiv, mail);
    } else {
      emailErrorDiv.remove();
    }
    return regex.test(mail.value);
  };
  //activities
  const validActivity = () => {

    if (printCost == 0) {
      errorFunction('Please select one activitie', activitiesErrorSpan, activitiesErrorDiv, mainConference
    );
      return false;
    } else {
      activitiesErrorDiv.remove();
      return true;
    }
  };
  //Payment
  const paymentValid = () => {
    if (payment.value === 'paypal') {
      return true;
    } else if (payment.value === 'bitcoin') {
      return true;
    } else if (isNaN(parseInt(creditCardNumber.value))) {
      errorFunction('Please enter numbers 0-9', paymentErrorSpan, paymentErrorDiv, creditCard);
      return false;
    } else if (creditCardNumber.value == '' || creditCardNumber.value == null) {
      errorFunction('Please enter a credit card number', paymentErrorSpan, paymentErrorDiv, creditCard);
      return false;
    } else if (creditCardNumber.value.length < 13 || creditCardNumber.value.length > 16) {
      errorFunction('Please enter a number between 13 and 16 digits', paymentErrorSpan, paymentErrorDiv, creditCard);
      return false;
    } else if (zipCode.value.length != 5 || zipCode.value == '' || zipCode.value == null || isNaN(parseInt(zipCode.value))) {
      errorFunction('Please enter a valid zip code', paymentErrorSpan, paymentErrorDiv, creditCard);
      return false;
    } else if (cvvCode.value.length != 3 || cvvCode.value == '' || cvvCode.value == null || isNaN(parseInt(cvvCode.value))) {
      errorFunction('Please enter a valid CVV code', paymentErrorSpan, paymentErrorDiv, creditCard);
      return false;
    } else {
      paymentErrorDiv.remove();
      return true;
    }
  };

  //****************************************
  // Function Error Validation
  //****************************************
  const validation = () => {
    blankName();
    blankEmail();
    validEmail();
    paymentValid();
    validActivity();
  };

  // Email Keyup tester
  $(mail).keyup(function() {
    if (regex.test(mail.value) == false) {
      errorFunction('Please enter a valid email', emailErrorSpan, emailErrorDiv, mail);
    } else {
      emailErrorDiv.remove();
    }
  });

  //When the page loads, give focus to the first text field
  $(function() {
    name.focus();
  });

  //hide "jobRoleInput"
  $(function() {

    $(jobRoleInput).hide();

  });

  //A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
  $(jobRole).change(function() {

    if ($(this).val() === 'other') {
      $(jobRoleInput).show();
    } else {
      $(jobRoleInput).hide();
    }
  });

  //******************************************

  //T-Shirt Info” section of the form:

  //******************************************

  // Function to hide color dropdown, depopulate
  $(function() {
    $(colorMenu).hide();
    $(chooseColor).html('');
  });

  $(chooseDesign).change(function() {

    if ($(this).val() === 'js puns') {
      $(colorMenu).show();
      $(chooseColor).html(
        '<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>' +
        '<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>' +
        '<option value="gold">Gold (JS Puns shirt only)</option>'
      );
    } else if ($(this).val() === 'heart js') {
      $(colorMenu).show();
      $(chooseColor).html(
        '<option value="tomato">Tomato (I &#9829; JS shirt only)</option>' +
        '<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>' +
        '<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>'
      );
    } else {
      $(colorMenu).hide();
      $(chooseColor).html('');
    }
  });
  //***************************************

  //function calc for activites

  //***************************************
  // Function to calculate total cost and append total
  const calcCost = (cost) => {
    printCost += cost;
    total = 'Total: $' + printCost;
    totalSpan.textContent = '';
    if (printCost !== 0) {
      totalSpan.append(total);
      totalHTML.appendChild(totalSpan);
      activities.append(totalHTML);
    }
  };

  //****************************************
  //activities
  //****************************************

  // Event listeners to add/subtract cost and disable overlapping sessions

  mainConference.addEventListener('change', () => {
    if (mainConference.checked) {
      calcCost(200);
    } else {
      calcCost(-200);
    }
  });
  // Js event
  jsFrameworks.addEventListener('change', () => {
    if (jsFrameworks.checked) {
      calcCost(100);
      express.disabled = true;
      express.parentNode.className = 'disabled';
    } else {
      calcCost(-100);
      express.disabled = false;
      express.parentNode.className = '';
    }
  });
  // JavaScript Libraries Workshop
  jsLibraries.addEventListener('change', () => {
    if (jsLibraries.checked) {
      calcCost(100);
      nodeJS.disabled = true;
      nodeJS.parentNode.className = 'disabled';
    } else {
      calcCost(-100);
      nodeJS.disabled = false;
      nodeJS.parentNode.className = '';
    }
  });
  //Express Workshop
  express.addEventListener('change', () => {
    if (express.checked) {
      calcCost(100);
      jsFrameworks.disabled = true;
      jsFrameworks.parentNode.className = 'disabled';
    } else {
      calcCost(-100);
      jsFrameworks.disabled = false;
      jsFrameworks.parentNode.className = '';
    }
  });
  //Node.js Workshop
  nodeJS.addEventListener('change', () => {
    if (nodeJS.checked) {
      calcCost(100);
      jsLibraries.disabled = true;
      jsLibraries.parentNode.className = 'disabled';
    } else {
      calcCost(-100);
      jsLibraries.disabled = false;
      jsLibraries.parentNode.className = '';
    }
  });
  //Build tools Workshop
  buildTools.addEventListener('change', () => {
    if (buildTools.checked) {
      calcCost(100);
    } else {
      calcCost(-100);
    }
  });
  //Npm Workshop
  npm.addEventListener('change', () => {
    if (npm.checked) {
      calcCost(100);
    } else {
      calcCost(-100);
    }
  });
  //****************************************

  // Payment Info section of the form

  //****************************************
  // by default show creditCard option
  $(function() {
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
  });

  payment.addEventListener('change', () => {
    if (payment.value === 'credit-card') {
      creditCard.style.display = '';
      paypal.style.display = 'none';
      bitcoin.style.display = 'none';
    }else if (payment.value === 'paypal') {
      creditCard.style.display = 'none';
      paypal.style.display = '';
      bitcoin.style.display = 'none';
    }else if (payment.value === 'bitcoin') {
      creditCard.style.display = 'none';
      paypal.style.display = 'none';
      bitcoin.style.display = '';
    }else{
      creditCard.style.display = '';
      paypal.style.display = 'none';
      bitcoin.style.display = 'none';
    }
  });

  //validadate, submit form

  submitButton.addEventListener('click', (e) => {
    let valid = blankName() && blankEmail() && validEmail() && validActivity() && paymentValid();
    if (!valid) {
      e.preventDefault();
      validation();
    } else {
      alert('Thanks for registering!');
    }
  });
//});

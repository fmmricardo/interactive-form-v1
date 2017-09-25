document.addEventListener('DOMContentLoaded', () => {

  // Variables

  //Variables jobRole
  let name = $('#name');
  const jobRole = document.getElementById('title');
  const jobRoleInput = document.getElementById('other-title');

  //variables Color
  const chooseColor = document.getElementById('color');
  const chooseDesign = document.getElementById('design');
  const colorMenu = document.getElementById('color-js-puns');


  //Variables activities
  // Variables - Activities
const activities = document.querySelector('.activities');
const mainConference = document.querySelector("input[name='all']");
const jsFrameworks = document.querySelector("input[name='js-frameworks']");
const jsLibraries= document.querySelector("input[name='js-libs']");
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
  //T-Shirt Info” section of the form:
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

  //function calc

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
      expressW.disabled = true;
      expressW.parentNode.className = 'disabled';
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
//Build tools Workshop
  npm.addEventListener('change', () => {
    if (npm.checked) {
      calcCost(100);
    } else {
      calcCost(-100);
    }
  });










  //Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.
});

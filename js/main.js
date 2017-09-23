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
  const chooseActivities = document.querySelector('.activities');
  const mainConference = document.querySelector("input[name='all']");
  const jsFramework = document.querySelector("input[name='js-frrameworks']");
  const jsLibs = document.querySelector("input[name='ks-libs']");
  const express = document.querySelector("input[name='express']");
  const node = document.querySelector("input[name='node']");
  const buildTools = document.querySelector("input[name='build-tools']");
  const npm = document.querySelector("input[name='npm']");

  // variables total costs
  const totalHtml = document.createElement('div');
  const totalspan = document.createElement('span');
  let total;
  let totalCosts = 0;

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

  const calculateCosts = (cost) => {

    totalCost += cost;
    total = 'total costs: $' + totalCost;
    totalspan.textContent = '';
    if (totalCost !== 0) {

      totalspan.append(totalCost);
      totalHtml.append(totalspan);
      activities.append(totalHtml)
    }
  };

  //create Events to add/remove the pricce to the list
  mainConference.addEventListener('change', () => {
    if (mainConference.checked) {
      calculateCosts(200);
    } else {
      calculateCosts(-200);
    }
  });

  //jsFrameWork- express same time
  jsFramework.addEventListener('change', () => {
    if (jsFramework.checked) {
      calculateCosts(100);
      express.disable = true;
      express.parentNode.className = 'disable';
    } else {
      calculateCosts(-100);
      express.disable = false;
      express.parentNode.className = ' ';
    }
  });

  //jsLibs,node,buildTools same time
  jsLibs.addEventListener('change', () => {
    if (jsLibs.checked) {
      calculateCosts(100);
      nodeJs.disable = true;
      nodeJs.parentNode.className = 'disable';
    } else {
      calculateCosts(-100);
      nodeJs.disable = false;
      nodeJs.parentNode.className = ' ';
    }
  });
  //express,node,buildTools same time
  express.addEventListener('change', () => {
    if (express.checked) {
      calculateCosts(100);
      node.disable = true;
      jsFramework.disable = true;
      jsFramework.parentNode.className = 'disable';
    } else {
      calculateCosts(-100);
      node.disable = false;
      jsFramework.disable = false;
      jsFramework.parentNode.className = ' ';
    }
  });
  // node and jsLibs same time
  nodeJs.addEventListener('change', () => {
    if (nodeJs.checked) {
      calculateCosts(100);
      jsLibs.disable = true;
      jsLibs.parentNode.className = 'disable';

    } else {
      calculateCosts(-100);

      jsLibs.disable = false;
      jsLibs.parentNode.className = ' ';
    }
  });
  // buildTools
  buildTools.addEventListener('change', () => {
    if (buildTools.checked) {
      calculateCosts(100);

    } else {
      calculateCosts(-100);

    }
  });
  npm.addEventListener('change', () => {
    if (npm.checked) {
      calculateCosts(100);

    } else {
      calculateCosts(-100);

    }
  });









  //Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.
});

// holidays
  const holidays = ["birthday","valentines", "halloween", "christmas", "new years"]

  //this doesnt work
  for (let i = 0; i < holidays.length; i++) {
              let btn = document.createElement("button");
              btn.innerText = holidays[i].text;
  }
  
  // valentines
  const angelfish = ["", "french angelfish mate for life"]
  const seahorse = ["", "seahorses mate for life"]
  const koi = ["you've got me feeling koi around you", "in asian countries, koi are a symbol of love and prosperity"]
  const valentines = [angelfish, seahorse, koi]

  // halloween
  const piranhas = ["", "piranhas are scary"]
  const anglerfish = ["", "anglerfish live in the deep sea"]
  const goblinshark = ["Gonna be goblin that candy up!", "scary"]
  const halloween = [piranhas, anglerfish, goblinshark]

  /*let submitButton = document.createElement("button");
            submitButton.innerText = "Generate";

            submitButton.onclick = function() { 
                //if()
            };*/

// inputs
  /*function sayHello() {
  const name = document.getElementById('username').value;
  document.getElementById('output').innerText = 'Hi, ' + name + ', Welcome to my website!';
  }*/

  // Makes it so that the selected option appears in the dropdown box
  function selectMenu(selectedItem) {
    document.getElementById("dropdownButton").innerText = selectedItem;
  }

  function storeSelection() {
    localStorage.setItem('holdaychoice', document.getElementById("dropdownButton").innerText)
  }
  
  // stores each input to variables to reuse in cards
  function storeInput() {
    localStorage.setItem('userNameInput', document.getElementById('userNameInput').value);  // Store the input in local storage
    localStorage.setItem('recNameInput', document.getElementById('recNameInput').value);
    //localStorage.setItem('holidaychoice', document.getElementById('holiday').value);
    //window.location.href = 'fish2.html';  // Redirect to result page
  }
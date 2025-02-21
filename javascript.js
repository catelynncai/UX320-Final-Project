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
  function generate(){
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;
  console.log("hi" + name1 + name2);
  }
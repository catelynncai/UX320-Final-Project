  // stores each input to variables to reuse in cards
  function storeInput() {
    localStorage.setItem('userNameInput', document.getElementById('userNameInput').value);  // Store the input in local storage
    localStorage.setItem('recNameInput', document.getElementById('recNameInput').value); // Store input in local storage
    localStorage.setItem('messageInput', document.getElementById('messageInput').value); // stores message in local storage
    
    // Store selected value from the dropdown in local storage
    const holidaySelect = document.getElementById('holidayInput');
    const selectedHoliday = holidaySelect.options[holidaySelect.selectedIndex].value;
    localStorage.setItem('holidayInput', selectedHoliday);

    console.log(document.getElementById('userNameInput').value)
    console.log(document.getElementById('recNameInput').value)
    console.log(document.getElementById('messageInput').value)
    console.log(document.getElementById('holidayInput').value)
    

    selectRandom()
    
  }


  //picking fish for the card
  function selectRandom(){
    // SELECTED VALENTINES
    if (document.getElementById('holidayInput').value=="valentines"){
        //fish data
          const angelfish = ["angelfish", "angelfishpun", "french angelfish mate for life"]
          const seahorse = ["seahorse", "seahorsefishpun", "seahorses mate for life"]
          const koi = ["koi", "you've got me feeling koi around you", "in asian countries, koi are a symbol of love and prosperity"]
        //possible fish
          const valentines = [angelfish, seahorse, koi]

        // random fish selection
        const number = Math.floor(Math.random() * valentines.length);
        console.log(number);
        let fish = valentines[number][0];
        localStorage.setItem('fishvar', fish); // stores fish in local storage
        let fishpun = valentines[number][1];
        localStorage.setItem('punvar', fishpun); // stores pun in local storage
        let fishfact = valentines[number][2];
        localStorage.setItem('factvar', fishfact); // stores fact in local storage
    }

    // SELECTED BIRTHDAYS (WIP)
    if (document.getElementById('holidayInput').value=="birthday"){
      //fish data
        const angelfish = ["angelfish", "angelfishpun", "french angelfish mate for life"]
        const seahorse = ["seahorse", "seahorsefishpun", "seahorses mate for life"]
        const koi = ["koi", "you've got me feeling koi around you", "in asian countries, koi are a symbol of love and prosperity"]
      //possible fish
        const birthday = [angelfish, seahorse, koi]

      // random fish selection
      const number = Math.floor(Math.random() * birthday.length);
      console.log(number);
      let fish = birthday[number][0];
      localStorage.setItem('fishvar', fish); // stores fish in local storage
      let fishpun = birthday[number][1];
      localStorage.setItem('punvar', fishpun); // stores pun in local storage
      let fishfact = birthday[number][2];
      localStorage.setItem('factvar', fishfact); // stores fact in local storage
  }

    // SELECTED HALLOWEEN
    if (document.getElementById('holidayInput').value=="halloween"){
      const piranhas = ["piranha", "piranha fishpun", "piranhas are scary"]
      const anglerfish = ["anglerfish", "anglerfish fishpun", "anglerfish live in the deep sea"]
      const goblinshark = ["goblinshark", "Gonna be goblin that candy up!", "scary"]
      const halloween = [piranhas, anglerfish, goblinshark]

      // random fish selection
      const number = Math.floor(Math.random() * halloween.length);
      console.log(number);
      let fish = halloween[number][0];
      localStorage.setItem('fishvar', fish); // stores fish in local storage
      let fishpun = halloween[number][1];
      localStorage.setItem('punvar', fishpun); // stores pun in local storage
      let fishfact = halloween[number][2];
      localStorage.setItem('factvar', fishfact); // stores fact in local storage
  }
    
// SELECTED NEW YEARS (WIP)
if (document.getElementById('holidayInput').value=="newyears"){
  //fish data
    const angelfish = ["angelfish", "It's time to reel in the New Year!", "french angelfish mate for life"]
  //possible fish
    const newyears = [angelfish, seahorse, koi]

  // random fish selection
  const number = Math.floor(Math.random() * newyears.length);
  console.log(number);
  let fish = newyears[number][0];
  localStorage.setItem('fishvar', fish); // stores fish in local storage
  let fishpun = newyears[number][1];
  localStorage.setItem('punvar', fishpun); // stores pun in local storage
  let fishfact = newyears[number][2];
  localStorage.setItem('factvar', fishfact); // stores fact in local storage
}
  }



function regenerate(){
  // select other randoms based on storage
}
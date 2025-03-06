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
          const angelfish = ["angelfish", "You're my angel. Happy Valentine's!", "French angelfish are monogamous and form lifelong pairs at a young age. Together, they live, travel, hunt and defend their territory."]
          const seahorse = ["seahorse", "Let's horse around together. Happy Valentine's", "Some seahorse couples like to spend quality time together and will stay mates for life"]
          const koi = ["koi", "You've got me feeling all koi around you...", "In Asian countries, koi are a symbol of love and prosperity."]
          const humpback = ["humpback", "Whale you be my Valentine?", "Humpback whales show a lot of romantic behavior, nudging each other, presenting their bellies, and singing complex songs to attract mates."];
          //possible fish
          const valentines = [angelfish, seahorse, koi, humpback]

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

    // SELECTED BIRTHDAYS 
    if (document.getElementById('holidayInput').value=="birthday"){
      //fish data
        const minnow = ["minnow", "Let minnow what you want for your birthday!", "Minnows are most commonly fished in winter and spring!"]
        const graywhale = ["graywhale", "You're whaley old! Happy Birthday!", "Winter is the best season for whale watching as gray whales migrate, seeking warmer waters."]
        const trout = ["trout", "Have a trout-standing birthday!", "During winter, trout is one of the few species of fish you can get by ice-fishing!"]
      //possible fish
        const birthday = [minnow, graywhale, trout]

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
      const piranhas = ["piranha", "Just 'ranha wish you a Happy Halloween!", "Piranhas are known for their scary razor sharp teeth and voracious appetites."]
      const anglerfish = ["anglerfish", "Don't get lured into the dark this Halloween!", "Anglerfish live in the dark depths of the sea and use their glowing lure to attract prey."]
      const goblinshark = ["goblinshark", "Gonna be goblin that candy up this Halloween!", "scary"]
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
    const herring = ["herring", "It's time to reel in the New Year!", "In Scandinavian, German and Polish communities, pickled herring is eaten at midnight to bring prosperity!"]
    const carp = ["carp", "New year, new me! Carp diem!", "In Chinese tradition, carp is the most popular fish eaten before and after New Years to represent surplus!"]
  //possible fish
    const newyears = [herring, carp]

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
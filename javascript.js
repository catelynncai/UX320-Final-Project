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

  // stores each input to variables to reuse in cards
  function storeInput() {
    localStorage.setItem('userNameInput', document.getElementById('userNameInput').value);  // Store the input in local storage
    localStorage.setItem('recNameInput', document.getElementById('recNameInput').value); // Store input in local storage
    localStorage.setItem('messageInput', document.getElementById('messageInput').value); // stores message in local storage
    //localStorage.setItem('holiday', document.getElementById('holidayInput').value); // stores holiday in local storage
    
    //window.location.href = 'fish2.html';  // Redirect to result page

    //selectRandom()
  }


  //figuring out array stuff
  function selectRandom(){
    const holidaychoice = getItem(holiday)
    console.log(holidaychoice)

    
    if (holidaychoice = "Valentine's"){
      const holidayfish = valentines[Math.floor(Math.random() * valentines.length)];
      console.log(holidayfish)
    }else{
      console.log("i fucked up")
    }
    
  }



function regenerate(){
  // select other randoms based on storage
}
// Initialize button with user's preferred color
let button = document.getElementById("getButton");
let probability_number = 40;
// When the button is clicked, inject setPageBackgroundColor into current page
button.addEventListener("click", async () => {
   await getProbability();
  });

  async function getProbability() {

    let probability=  document.getElementById("probability")

    probability.style =" display: flex"

    probability.textContent = probability_number+ "%"
    if(probability_number < 20){
        probability.style = "color: green"
    }else if( probability_number>=20 && probability_number <= 65){
        probability.style = "color: #c6c600"
    }
    else{
        probability.style = "color: red"
    }
};
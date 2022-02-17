let button = document.getElementById("getButton");
let probability_number = 40;


button.addEventListener("click", async () => {
   await getProbability();
  });

  async function getProbability() {
    //const response = await fetch('http://example.com/movies.json');
    //const myJson = await response.json();

    //probability_number = myJson.probability;

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
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let toggle = {
    numbers: false,
    symbols: false
}


function generatePasswords() {

    let finalArray = []

    if(toggle.numbers && toggle.symbols){
      finalArray = characters.concat(numbers,symbols)
    } else if(toggle.numbers && !toggle.symbols){
      finalArray = characters.concat(numbers)
    }else if(!toggle.numbers && toggle.symbols){
      finalArray = characters.concat(symbols)
    } else {
      finalArray = characters
    }
    
    function generate(passLen) {
      let pass = "";
      for (let i = 0; i < passLen; i++) {
        pass += finalArray[Math.floor(Math.random() * finalArray.length)];
      }
      return pass;
    }

    let passLen = document.getElementById("length").value
    document.getElementById("password1").value = generate(passLen);
    document.getElementById("password2").value = generate(passLen);
  }

  function copy(element){
    let password = element.value
    navigator.clipboard.writeText(password)
    .then(() => alert("Text copied!"))
    .catch(err => console.error("Error copying text:", err));

  }

  function num_turn_on(element){
    element.style.color = "black";
    var off = document.getElementById("num_off");
    off.style.color = "white";
    toggle.numbers = true;
  }

    function num_turn_off(element){
    element.style.color = "black";
    var off = document.getElementById("num_on");
    off.style.color = "white";
    toggle.numbers = false;
  }

    function sym_turn_on(element){
    element.style.color = "black";
    var off = document.getElementById("sym_off");
    off.style.color = "white";
    toggle.symbols = true;
  }

    function sym_turn_off(element){
    element.style.color = "black";
    var off = document.getElementById("sym_on");
    off.style.color = "white";
    toggle.symbols = false;
  }
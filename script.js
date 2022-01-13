//shows passwords after checkbox is clicked
function ShowRepeatedPass() {
    var x = document.getElementById("confirm_password");
    var y = document.getElementById("password");
    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }

  //EMAIL VALIDATION!!!
  //if passwords wont match we will get alert (setCustomValidity) as "Passwords Don't Match"
  var password = document.getElementById("password"),
  confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
  
}


password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

const signUp = (e) => {
    // e.preventDefault stops the browser from restarting
    e.preventDefault();
    displayData();
  };

  //displays values of typed data on the page
function displayData() {
    var output = document.getElementById("output");
    output.innerHTML = `
    <table class="tableClass">
        <br/>     
                  <tr>
                      <td><b>First Name: </b></td>
                      <td> ${document.getElementById("fname").value}</td>
                  </tr>
                  <tr>
                      <td><b>Email: </b></td>
                      <td> ${document.getElementById("email").value}</td>    
                  </tr>
                  <tr>
                      <td><b>Password: </b></td>
                      <td > ${
                        document.getElementById("password").value
                      }
                        </td>
                  </tr>   
                  <tr>
                      <td><b>Repeated Password: </b></td>
                      <td > ${
                        document.getElementById("confirm_password").value
                      }
                        </td>
                  </tr>   
      </table>
    `;
  }

  //saves data to browsers local Storage

  function saveData() {
    let name, email, psw, pswRepeat;
    name = document.getElementById("fname").value;
    email = document.getElementById("email").value;
    psw = document.getElementById("password").value;
    pswRepeat = document.getElementById("confirm_password").value;
  
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    if (
      user_records.some((v) => {
        return v.email == email;
      })
    ) {
      alert("Duplicate data, Try Different Email");
    } else {
      user_records.push({
        name: name,
        email: email,
        psw: psw,
        pswRepeat: pswRepeat,
      });
      localStorage.setItem("users", JSON.stringify(user_records));
    }
    
  }
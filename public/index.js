import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const setText = () => {
  document.getElementById("text").innerHTML =
    "We are beginning! Oh Yes, we are!";
};

document.getElementById("click").addEventListener("click", setText);

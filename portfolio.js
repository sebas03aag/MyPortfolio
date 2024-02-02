let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}




document.getElementById("copy-email-button").addEventListener("click", function() {
    var emailElement = document.getElementById("email");
    var emailText = emailElement.textContent || emailElement.innerText;

    var textarea = document.createElement("textarea");
    textarea.value = emailText;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);
    alert("Email copied!");
  });

  document.getElementById("copy-phone-button").addEventListener("click", function() {
    var phoneElement = document.getElementById("phone");
    var phoneText = phoneElement.textContent || phoneElement.innerText;

    var textarea = document.createElement("textarea");
    textarea.value = phoneText;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    alert("Phone number copied!");
  });


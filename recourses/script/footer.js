const linkedIn = document.getElementById("linkedIn");
const emailLink = document.getElementById("email");

//navigating functions
const navigateToLinkedIn = () => {
  window.open("https://www.linkedin.com/in/kingsley-ndzi-bungong/", "_blank");
};

const naviagetToEmail = () => {
  window.open(
    "mailTo:bungongkingsley@gmail.com?subject=Want to connect",
    "_blank"
  );
};

linkedIn.onclick = navigateToLinkedIn;

emailLink.onclick = naviagetToEmail;

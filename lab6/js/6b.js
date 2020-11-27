let i = 5;
const addParagraph = () => {
  setTimeout(function () {
    document.getElementById("hdr").innerHTML = "adding paragraph " + (i - 1);
    i--;
    if (i > 0) {
      addParagraph();
    }
    if (i === 0) document.getElementById("parag").style.opacity = 1;
  }, 1000);
};

addParagraph();

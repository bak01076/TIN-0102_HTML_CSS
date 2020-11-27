const validateInfo = () => {
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const error = document.getElementById("error");
  const regex = /^.+@[a-z]+.[a-z]+$/;
  let err = "";

  if (isNaN(phone.value)) {
    err += "Phone number is not valid ";
    error.innerHTML = err;
    phone.classList.add("wrongInput");
    return false;
  } else if (!regex.test(String(email.value).toLowerCase())) {
    err += "Email is not valid ";
    error.innerHTML = err;
    email.classList.add("wrongInput");
    return false;
  } else {
    err += "";
    error.innerHTML = err;
    phone.classList.add("correctInput");
    email.classList.add("correctInput");
    return true;
  }
};

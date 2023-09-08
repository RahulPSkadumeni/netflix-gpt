export const checkValidData = (email, password) => {
  let isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  let isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  //password : Rahulps1234
  if (!isEmailValid) {
    return "Email id is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return;
};

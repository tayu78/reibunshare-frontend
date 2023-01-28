const validateForm = (key: string, state: any) => {
  let errors: string[] = [];

  switch (key) {
    case "email":
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!state[key].trim()) {
        errors.push("Email field is required. It cannot be empty.");
        break;
      }
      if (state[key]!.match(regex)) {
        errors.push("Please provide valid email address.");
      }
      break;
    case "password":
      const MIN_PASSWORD_LENGTH = 8;
      // check length
      if (state[key]!.length < MIN_PASSWORD_LENGTH) {
        errors.push(
          `Password must consist of at least ${MIN_PASSWORD_LENGTH} characters.`
        );
      }
      // check special character inclusion
      const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (!state[key]!.match(specialChars)) {
        errors.push(
          "Password must contain at least one special characters. (Example: !, @, %)."
        );
      }
      // check number inclusion
      const nums = /\d+/g;
      if (!state[key]!.match(nums)) {
        errors.push("Password must contain at least one number.");
      }
      break;
    case "confirmPassword":
      if (state[key] !== state["password"]) {
        errors.push("Password does not match.");
      }
      break;
    case "accountName":
      if (!state[key].trim()) {
        errors.push("Account name field is required. It cannot be empty.");
      }
      break;
    case "username":
      if (!state[key]!.trim()) {
        errors.push("User name field is required. It cannot be empty.");
      }
      break;
  }

  // setErrorState((prev) => {
  //   return {
  //     ...prev,
  //     [key]: errors,
  //   };
  // });
  return errors;
};

export default validateForm;

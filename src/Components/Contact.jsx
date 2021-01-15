import React, { useState } from "react";


// regular expression for name ,phone ,password and email.
const nameRe = /^[a-zA-z]{2,}[ a-zA-Z]{2,}$/;
const phoneRe = /^[0-9]{10}$/;
const passwordRe = /^[0-9a-zA-Z]{10}$/;
const emailRe = /^[A-Za-z0-9._-]{3,}@[A-Za-z]{3,}[.]{1}[a-zA-Z.]{3,6}$/;

const Contact = () => {
  // userInfo stores the user input
  const [userInfo, setuserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  // error stores the error message if any of the user input is wrong
  const [error, setError] = useState({
    fullnameErr: "",
    emailErr: "",
    passwordErr: "",
    phoneErr: "",
  });

  // invalid is used to change the border color to red if input is wrong.
  const [invalid, setInvalid] = useState("");

 
  // handle change function is called whenever there is change in input field and update the value of userInfo usestate.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  };

  // checkValidation function validates the user input by using regular expression.
  // if there is any error ,then the error useState get updated with error message and function returns false.
  // else the error usestate get empty and function returns true
  const checkValidation = (re, fieldName, err) => {
    if (!re.test(fieldName)) {
      setError((preValue) => {
        return {
          ...preValue,
          [err]: "Input is not valid",
        };
      });

      setInvalid("is-invalid");
     
      return false;
    } else {
      setError((preValue) => {
        return {
          ...preValue,
          [err]: "",
        };
      });
      setInvalid("");
      return true;
    }
  };

  // when user submits the form ,submit function get called inside which check validation function is called.
  const Submit = (event) => {
    event.preventDefault();
    const fullnameCheck=checkValidation(nameRe, userInfo.fullname, "fullnameErr") 
    const passwordCheck=checkValidation(passwordRe, userInfo.password, "passwordErr")
    const emailCheck=checkValidation(emailRe, userInfo.email, "emailErr")  
    const phoneCheck=checkValidation(phoneRe, userInfo.phone, "phoneErr")

    if (
      fullnameCheck && passwordCheck && emailCheck && phoneCheck
    ) {
      alert(`Hello ${userInfo.fullname} your form has been successfully submitted.`);
      setuserInfo((prevVal) => {
       
        return { ...prevVal, fullname: "", email: "", password: "", phone: "" };
      });
      
    } else {
      setTimeout(() => {
        setError((preData) => {
          return {
            ...preData,
            fullnameErr: "",
            emailErr: "",
            passwordErr: "",
            phoneErr: "",
          };
        });
        setInvalid("");
      }, 3000);
    }
  };
  return (
    <>
      <section className="contact" id="contact">
        <div className="container-fluid ">
          <div className="row contact-row">
            <div className="col-lg-6  col-md-8 col-sm-10 mx-auto d-block contact-col ">
              <h2 className="medium-heading text-center">
                <span>Contact </span>Us
              </h2>

              <div className="form-enclosure  mx-auto  d-flex flex-column align-items-center justify-content-center">
                <form onSubmit={Submit} className="">
                  <div className="form-group">
                  
                    <input
                      type="text"
                      autoComplete="off"
                      className={`form-control ${error.fullnameErr && invalid}`}
                      id="fullname"
                      placeholder="Fullname"
                      name="fullname"
                      value={userInfo.fullname}
                      onChange={handleChange}
                    />
                    <p className="text-danger error-text">
                      {error.fullnameErr}
                    </p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control ${error.emailErr && invalid}`}
                      autoComplete="off"
                      id="email"
                      placeholder="E-mail ID"
                      name="email"
                      value={userInfo.email}
                      onChange={handleChange}
                    />
                   
                    <p className="text-danger error-text">{error.emailErr}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control ${error.passwordErr && invalid}`}
                      autoComplete="off"
                      id="password"
                      placeholder="Password"
                      name="password"
                      value={userInfo.password}
                      onChange={handleChange}
                    />
                     <p className="password-hint">(Password contains 10 characters only. No symbols allowed.)</p>
                    <p className="text-danger error-text">
                      {error.passwordErr}
                    </p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control ${error.phoneErr && invalid}`}
                      autoComplete="off"
                      id="phone"
                      placeholder="Phone-No"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleChange}
                    />
                    <p className="text-danger error-text">{error.phoneErr}</p>
                  </div>

                  <button type="submit" className="btn ">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;

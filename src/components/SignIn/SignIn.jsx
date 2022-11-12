import React from "react";
import { Signin } from "./style.js";

const SignIn = () => {
  return (
    <Signin>
      <Signin.MainFoto />
      <Signin.Authoritarion>
        <Signin.Authoritarion.WelcomeText>
          Tizimga xush kelibsiz!
        </Signin.Authoritarion.WelcomeText>
        <Signin.Authoritarion.InfoText>
            Tizimga kirish uchun, login va parol orqali autentifikatsiya
          jarayonidan o’ting
        </Signin.Authoritarion.InfoText>

        <Signin.Authoritarion.Email />
        <Signin.Authoritarion.Password  />
        <Signin.Authoritarion.EnterBtn>
          Tizimga kirish
        </Signin.Authoritarion.EnterBtn>
      </Signin.Authoritarion>
    </Signin>
  );
};

export default SignIn;

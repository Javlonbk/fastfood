import styled from "styled-components";

// Sign in
import SignImg from '../../assets/png/sign.png'
export const Signin = styled.div `
  width:100%;
  height:100vh;
  display:flex;

  
`
Signin.MainFoto = styled.img.attrs({
  src: SignImg
})
`
    width:60%;
    height:100vh;
 `
Signin.Authoritarion = styled.div `
   width: 300px;
   margin: 0px auto;
   box-sizing: border-box;
   display:flex;
   flex-direction:column;
   justify-content:center;
   

 `
Signin.Authoritarion.WelcomeText = styled.h3 `
 font-family: 'SFProDisplay';
 font-size: 24px;
 line-height: 14px; 
 color: #2D3A45;
 `
Signin.Authoritarion.InfoText = styled.p `

font-family: 'SFProDisplay';
font-size: 16px;
line-height: 20px;
color: #8D9BA8;
margin:15px 0px 38px 0px;

`

Signin.Authoritarion.Email = styled.input.attrs({
  type: 'email',
  placeholder: 'Email'
})
`    width: 300px;
     height:45px;
     background: #FFFFFF;
     box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
     border-top-left-radius: 6px;
     border-top-right-radius: 6px;
     font-family: 'SFProDisplay';
     font-size: 18px;
     line-height: 14px;
     color: #2F2F2F;
     margin: 0px auto;
     outline:none;
     padding:24px 37px;
     box-sizing:border-box;
     border:none;
     border-bottom: 1px solid #979797;
     ::placeholder{
      font-family: 'SFProDisplay';
      font-size: 18px;
      line-height: 14px;
      color: #2F2F2F;
      opacity:0.3;
     }
 `
 Signin.Authoritarion.Password = styled.input.attrs({
  type: 'password',
  placeholder: 'Password'
})
`    width: 300px;
     height: 45px;
     background: #FFFFFF;
     box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
     font-family: 'SFProDisplay';
     font-size: 18px;
     line-height: 14px;
     color: #2F2F2F;
     margin: 0px auto;
     outline:none;
     padding:24px 37px;
     box-sizing:border-box;
     border:none;
     border-bottom-left-radius: 6px;
     border-bottom-right-radius: 6px;
     ::placeholder{
      font-family: 'SFProDisplay';
      font-size: 18px;
      line-height: 14px;
      color: #2F2F2F;
      opacity:0.3;
     }
 `

Signin.Authoritarion.EnterBtn = styled.button`
 margin-top:26px;
 width: 300px;
 height: 60px;
 left: 968px;
 top: 520px;
 background: #2D3A45;
 mix-blend-mode: normal;
 opacity: 0.8;
 box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
 border-radius: 6px;
 border:none;
 font-family: 'SFProDisplay';
 font-size: 18px;
 line-height: 14px;
 color: #FFFFFF;
`
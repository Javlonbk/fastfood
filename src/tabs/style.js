// <----------------Tabs---------->

import styled from "styled-components"

import {ReactComponent as horizont} from '../assets/icon/horizont.svg'
import {ReactComponent as vertical} from '../assets/icon/vertical.svg'

export const StatusTabC = styled.div `
width: 50%;
height: 45px;
background: #EDEFF3;
border-radius: 24px;
margin: 0px auto;
.tabs{
    width: 100%;
    height: 100%;
    padding: 15px !important;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}
.css-1h9z7r5-MuiButtonBase-root-MuiTab-root{
min-width: 0px;
min-height: 0px;
width: 24%;
height: 100%;
padding: 8px;
margin: auto 3px;
box-sizing: border-box;
border: none;
border-radius: 18px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
background-color: #EDEFF3;
font-style: none;
line-height: 16px;
}
.text{
    font-family: 'SFProDisplay';
    font-size: 12px;
    text-transform: capitalize;
    line-height: 16px;
    color: #2D3A45;
    mix-blend-mode: normal;
    opacity: 0.9;
    z-index: 10;
}
.css-1aquho2-MuiTabs-indicator{
    width: 100%;
    height: 100%;
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
    border-radius: 18px;
    background-color: #fff;
    z-index: 3;
    color: #2D3A45;
}

`


export const ControlStateTabC = styled.div`
width: 160px;
height: 100%;
padding: 0px;
box-sizing: border-box;
background: #FFFFFF;
border-left: 1px solid #E5E5E5;
display: flex;
justify-content: center;
align-items: center;
.tabs{
    width: 97px;
    height: 48px;
    background: #EDEFF3;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.css-1t4lqmc-MuiButtonBase-root-MuiTab-root{
min-width: 0px;
min-height: 0px;
width: 36px;
height: 36px;
padding: 10px;
border: none;
border-radius: 18px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
background-color: #EDEFF3;
box-sizing: border-box;
}
.css-1aquho2-MuiTabs-indicator{
    width: 100%;
    height: 100%;
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
    border-radius: 18px;
    background-color: #fff;
}
`

export const Horizontal = styled(horizont)`
z-index: 3;
`
export const Vertical = styled(vertical)`
z-index: 3;
` 
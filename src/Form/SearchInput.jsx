// <----SearchInput componets uses all Components ----->
import styled from "styled-components";
import {ReactComponent as Search} from '../assets/icon/search.svg'
import {ReactComponent as Filter} from '../assets/icon/filter.svg'


export const SearchComponent = styled.div`
   width: 300px;
   height: 48px;
   position: relative;
   margin: 0px 20px 0px 45px;
`
 SearchComponent.SearchInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #EDEFF3;
    border-radius: 24px;
    border: none;
    outline: none;
    text-indent: 20px;
    font-size: 14px;
    ::placeholder{
        font-family: 'SFProDisplay';
        font-size: 13px;
        color: #2D3A45;        
        mix-blend-mode: normal;
        opacity: 0.4;
        margin-left: 20px;
    }
`
SearchComponent.SearchIcon = styled(Search)`
     position: absolute;
     right: 24px;
     top: 15px;
`
export const FilterComponent = styled(Filter)``
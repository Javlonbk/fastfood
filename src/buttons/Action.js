// <----Action buttons---->

import styled from "styled-components";
import { ReactComponent as edit } from '../assets/icon/edit-2.svg'
import { ReactComponent as trash } from '../assets/icon/trash-2.svg'

export const Action = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
    border-radius: 50%;
    width: 35px;
    height:35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`
Action.Edit = styled(edit)``
Action.Trash = styled(trash)`
`
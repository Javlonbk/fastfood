import React from 'react'
import { Tab, Tabs } from "@mui/material";
import { ControlStateTabC, Horizontal, Vertical } from './style';
const ControlStateTab = ({handleChangeTab,changeTab}) => {

  
  const handleChange = (event, newValue) => {
    handleChangeTab(newValue)
  };
 
  return (
    <ControlStateTabC>
         <Tabs 
                value={changeTab}
                onChange={handleChange}
                aria-label="icon label tabs example"
                className="tabs"
              >
                  <Tab  icon={<Horizontal/>}  />
                  <Tab icon={<Vertical/>}  />
          </Tabs>
    </ControlStateTabC>
  )
}

export default ControlStateTab
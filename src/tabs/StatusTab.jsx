import React from "react";
import { Tab, Tabs } from "@mui/material";
import { StatusTabC } from "./style";

const StatusTab = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StatusTabC>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        className="tabs"
      >
        <Tab label={<span className="text">Yangi</span>} />
        <Tab label={<span className="text">Qabul qilingan</span>} />
        <Tab label={<span className="text">Jo'natilgan</span>} />
        <Tab label={<span className="text">Yopilgan</span>} />
      </Tabs>
    </StatusTabC>
  );
};

export default StatusTab;

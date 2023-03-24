import { Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import CompanyInfo from "../companyInfo";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
function a11yProps(index: number) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}

export default function TabInfo() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return(
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="업체 정보" {...a11yProps(0)} />
            <Tab label="주 업무" {...a11yProps(1)} />
            <Tab label="블로그" {...a11yProps(2)} />
            <Tab label="리뷰" {...a11yProps(3)} />
        </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <CompanyInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Toolbar component="nav" variant="dense" sx={{ justifyContent: "center", overflowX: 'auto' }}>
            <Box>
            주업무
            </Box>
        </Toolbar>
        </TabPanel>
        <TabPanel value={value} index={2}>
            블로그
        </TabPanel>
        <TabPanel value={value} index={3}>
            리뷰
        </TabPanel>
    </Box>)
}
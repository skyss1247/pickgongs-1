import { Box, Tab, Tabs, Toolbar, Typography, Divider } from "@mui/material";
import React from "react";

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

export default function ScheduleTabInfo() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return(
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{width:"100%"}} centered={true} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="희망방문예정 스케쥴" {...a11yProps(0)} />
            <Tab label="방문확정 스케쥴" {...a11yProps(1)} />
            <Tab label="공사스케쥴" {...a11yProps(2)} />
            <Tab label="공사 취소 및 시간변경 요청" {...a11yProps(3)} />
        </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <Box sx={{width:"80%", margin:"auto"}}>
                <Box sx={{display:"flex", minHeight:"400px", flexDirection:"row"}}>
                    <Box sx={{width:'30%'}}>
                        시공분야 선택
                    </Box>
                    <Box>
                        달력
                    </Box>
                </Box>
                <Divider />
                <Box>
                    <Typography>선택된 업체가 없습니다</Typography>
                </Box>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Box sx={{width:"80%", margin:"auto"}}>
                <Box sx={{display:"flex", minHeight:"400px", flexDirection:"row"}}>
                    <Box sx={{width:'30%'}}>
                        시공분야 선택
                    </Box>
                    <Box>
                        달력
                    </Box>
                </Box>
                <Divider />
                <Box>
                    <Typography>선택된 업체가 없습니다</Typography>
                </Box>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Box sx={{width:"80%", margin:"auto"}}>
                <Typography>선택된 업체가 없습니다</Typography>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Box sx={{width:"80%", margin:"auto"}}>
                <Typography>선택된 업체가 없습니다</Typography>
            </Box>
        </TabPanel>
    </Box>)
}
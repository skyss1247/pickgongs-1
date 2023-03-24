import CompanyInfo from "@/components/contractor/companyInfo";
import Description from "@/components/contractor/detail/description";
import MainImage from "@/components/contractor/detail/mainImage";
import SubImage from "@/components/contractor/detail/subImage";
import TabInfo from "@/components/contractor/detail/tabInfo";
import StatusBar from "@/components/contractor/statusBar";
import { Box, Grid, Tab, Table, TableCell, TableRow, Tabs,Toolbar, Typography } from "@mui/material";
import * as React from 'react';

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
function ContractorDetail() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return(
    <Box
      sx={{
        position: "relative",
        maxWidth: "1120px",
        margin: "auto",
        pb: 10,
        mt: 5,
      }}
    >
      <StatusBar />
      <Grid container spacing={2} sx={{width:"100%", margin:"auto", mt:4}}>
          <Grid item xs={12} sm={5}>
            <MainImage />
            <SubImage />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Description />
            <TabInfo />
          </Grid>
      </Grid>
    </Box>
    )
}


export default ContractorDetail;
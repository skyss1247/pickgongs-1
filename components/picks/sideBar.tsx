import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import CautionDialog from "./cautionDialog";

export default function SideBar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
    <Box sx={{display:"flex",width:"180px", flexDirection:"column", justifyContent:"center",textAlign:"center", border:"1px solid black", p:2}}>
        <Typography variant="h6">시공 선택</Typography>
        <FormControlLabel sx={{margin:"auto"}} labelPlacement="start" control={<Checkbox sx={{color:"#008A60"}} color="secondary" />} label="철거" />
        <FormControlLabel sx={{margin:"auto"}} labelPlacement="start" control={<Checkbox sx={{color:"#008A60"}} color="secondary"/>} label="설비" />
        <FormControlLabel sx={{margin:"auto"}} labelPlacement="start" control={<Checkbox sx={{color:"#008A60"}} color="secondary"/>} label="샤시" />
        <Button sx={{backgroundColor:""}} color="secondary">선택 완료</Button>
        <Button onClick={handleOpen} sx={{backgroundColor:""}} color="warning">주의사항 안내문</Button>
        <CautionDialog setOpen={setOpen} open={open} />
    </Box>
    )
}
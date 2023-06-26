import { Box, Button, Divider, InputAdornment, TextField } from "@mui/material"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function StatusBar() {

    return(
        <Box sx={{display:"flex", border:"1px solid #ccc", borderRadius:"0.2rem", p:2, width:"100%", margin:"auto"}}>
          <Button sx={{backgroundColor:"#15BF81"}}>우리집</Button>
          <Divider orientation="vertical" flexItem sx={{mr:1,ml:1}} />
          <Button sx={{backgroundColor:"white"}}>상가, 건물</Button>                   
          <Divider orientation="vertical" flexItem sx={{mr:1,ml:1}} />
          <TextField
            name="adress"
            sx={{flexGrow:"1", mr:1}}
            id="adress"
            label="주소를 입력해주세요"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                    <LocationOnOutlinedIcon />
                </InputAdornment>
              )
            }}
          />
        </Box>
    )
}
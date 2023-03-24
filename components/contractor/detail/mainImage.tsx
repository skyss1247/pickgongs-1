import { Box, Typography } from "@mui/material";

export default function MainImage() {
    return(
    <Box sx={{width:"80%",height:"300px", margin:"auto", textAlign:"center", mb:2}}>
        <img src="/sample/sample1.png" width={"100%"} height={"250px"} style={{borderRadius:"1rem"}}/>
        <Typography variant="h5">하늘 인테리어</Typography>
    </Box>
  )
}
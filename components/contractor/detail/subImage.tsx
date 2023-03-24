import { Box } from "@mui/material";

export default function SubImage() {
    return(
    <Box sx={{width:"80%", height:"60px", textAlign:"center",margin:"auto", display:"flex", gap:1}}>
        <img src="/sample/sample1.png" width={"31%"}/>
        <img src="/sample/sample1.png" width={"31%"}/>
        <img src="/sample/sample1.png" width={"31%"}/>
    </Box>
    )
}
import { Box, Button } from "@mui/material";

export default function SelectResult() {
    
    return(
    <Box>
        <Box sx={{textAlign:"center"}}>
            <Button>이전</Button>
            <Button>희망방문시간 설정</Button>
        </Box>
    </Box>
    )
}

SelectResult.isDetail = false;
SelectResult.isRaw = false;
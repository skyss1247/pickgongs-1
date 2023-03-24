import ContractorItem from "@/components/contractor/listItem";
import SideBar from "@/components/picks/sideBar";
import { Box, Button, Grid } from "@mui/material";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default function SelectGongs() {
    return(
    <Box sx={{
        position: "relative",
        maxWidth: "1120px",
        margin: "auto",
        pb: 10,
        mt: 5,
        
    }}>
        <Box sx={{display:"flex", justifyContent:"space-around"}}>
            <Box sx={{width:"40%"}}>
                <SideBar />
            </Box>
            <Box>
            <Grid container spacing={2} sx={{ml:2, flexGrow:1}}>
                {cards.map((one) => (
                    <ContractorItem />
                ))}
            </Grid>
            </Box>
        </Box>
        <Box sx={{textAlign:"center"}}>
            <Button>이전</Button>
            <Button>선택하기</Button>
        </Box>
    </Box>
    )
}


SelectGongs.isDetail = false;
SelectGongs.isRaw = false;
import Description from "@/components/contractor/detail/description";
import MainImage from "@/components/contractor/detail/mainImage";
import SubImage from "@/components/contractor/detail/subImage";
import TabInfo from "@/components/contractor/detail/tabInfo";
import SideBar from "@/components/picks/sideBar";
import { Box, Button } from "@mui/material";

export default function SelectGongsDetail() {
    return(
        <Box sx={{
            position: "relative",
            maxWidth: "1120px",
            margin: "auto",
            pb: 10,
            mt: 5,
            
        }}>
            <Box sx={{display:"flex", justifyContent:"space-around"}}>
                <Box>
                    <SideBar />
                </Box>
                <Box sx={{}}>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                        <MainImage />
                        <SubImage />
                    </Box>
                    <Box>
                        <Description />
                    </Box>
                    <Box>
                        <TabInfo />
                    </Box>
                </Box>
            </Box>
            <Box sx={{textAlign:"center"}}>
                <Button>이전</Button>
                <Button>선택하기</Button>
            </Box>
        </Box>
    )
}


SelectGongsDetail.isDetail = false;
SelectGongsDetail.isRaw = false;
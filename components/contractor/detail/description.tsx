import { Box, Typography } from "@mui/material";

export default function Description() {
    return(
    <Box sx={{width:"100%", height:"250px", borderRadius:"1rem", backgroundColor:"#cfcfcf", p:"1rem 2rem"}}>
        <Typography variant="h5" sx={{mb:1}}>인테리어 업체_하늘 인테리어</Typography>
        <Typography variant="inherit">안녕하세요. 하늘 인테리어 입니다. 저희 업체는 15년 경력으로 업계 최고의 베테랑 작업자들로
        구성되어 있습니다.</Typography>
    </Box>
    )
}
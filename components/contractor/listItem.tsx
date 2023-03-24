import { Box, Button, Card, CardContent, CardMedia, Grid, MobileStepper, Typography } from "@mui/material";
import { useRouter } from "next/router";


export default function ContractorItem() {
    const router = useRouter();
    return(
        <Grid item xs={12} sm={2.4}>
            <Card
             sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
             onClick={()=>router.push("/contractor/category/detail")}
            >
            <Box sx={{height:"180px", position:"relative"}}>
                <CardMedia
                    component="img"
                    sx={{
                    height:"180px"
                    }}
                    src="/sample/sample1.png"
                    alt="random"
                />
            </Box>
            <CardContent 
                sx={{ flexGrow: 1, display:"flex", cursor:"pointer",  flexDirection:"column", justifyContent:"space-between" }}
            >
                <Typography gutterBottom variant="inherit" >
                    {"하늘 인테리어"}
                </Typography>
            </CardContent>
            </Card>
        </Grid>
    )
}
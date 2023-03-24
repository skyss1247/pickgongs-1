import ContractorItem from "@/components/contractor/listItem";
import StatusBar from "@/components/contractor/statusBar";
import { Box, Grid } from "@mui/material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


export default function ContractorList() {

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
        <Grid container spacing={2} sx={{mt:5}}>
            {cards.map((one) => (
                <ContractorItem />
            ))}
        </Grid>
    </Box>
    )
}
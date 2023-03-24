import ScheduleTabInfo from "@/components/schedules/schedulesTab";
import { Box } from "@mui/material";

export default function Schedules() {
    
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
        <ScheduleTabInfo />
    </Box>)
}

Schedules.isDetail = false;
Schedules.isRaw = false;
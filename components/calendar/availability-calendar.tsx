import { Box, Paper, Typography, TextField, Grid } from "@mui/material";

import { useContext, useState, createContext } from "react";
import { format } from "date-fns";
import CalendarFragment from "./calendar-fragment";

export type Book = {
  productId?: string;
  client?: string | null;
  checkin?: Date | null;
  checkout?: Date | null;
  numberOfGuests?: number;
  numberOfAdults?: number;
  numberOfChildren?: number;
  numberOfBabies?: number;
  numberOfPets?: number;
  fee?: number;
  totalFee?: number;
};

export const BookContext = createContext<{
  data: Book;
  updateData: (frag: Book) => void;
  isOpened: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  open: boolean;
  openGuest: () => void;
  closeGuest: () => void;
} | null>(null);

export type ReservedPeriod = [
  { checkin: Date | string; checkout: Date | string }
];

function AvailabilityCalendar({ reserved }: { reserved: ReservedPeriod }) {
  const ctx = useContext(BookContext);

  return (
    <Paper
      elevation={10}
      sx={{
        position: "absolute",
        top: "0px",
        right: "0px",
        padding: "24px 32px 16px",
        zIndex: 3,
      }}
      onClick={(evt) => evt.stopPropagation()}
    >
      <Grid container>
        <Grid item md={7}>
          <Box>
            <Typography variant="h5">날짜 선택</Typography>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              color="info"
              size="medium"
              variant="filled"
              inputProps={{ style: { border: "1px solid #000000" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="체크인"
              value={
                ctx?.data.checkin ? format(ctx?.data.checkin, "yyyy-MM-dd") : ""
              }
              placeholder={"YYYY-MM-DD"}
            />
            <TextField
              color="info"
              size="medium"
              variant="filled"
              inputProps={{ style: { border: "1px solid #000000" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="체크아웃"
              value={
                ctx?.data.checkout
                  ? format(ctx?.data.checkout, "yyyy-MM-dd")
                  : ""
              }
            />
          </Box>
        </Grid>
      </Grid>

      <CalendarFragment reserved={reserved}/>
    </Paper>
  );
}

export default AvailabilityCalendar;

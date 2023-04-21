import { Box, TextField, Button } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ko from "date-fns/locale/ko";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useContext, useEffect,createContext } from "react";
import { format } from "date-fns";

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

function CalendarFragment({ reserved }: { reserved: ReservedPeriod }) {
  const ctx = useContext(BookContext);
  
  // console.log(reserved);
  const value: DateRange<Date> = [
    ctx?.data.checkin ?? null,
    ctx?.data.checkout ?? null,
  ];

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
        <StaticDateRangePicker
          disablePast
          displayStaticWrapperAs="desktop"
          
          shouldDisableDate={(day) => {
            
            const rst = reserved.reduce((prev, current) => {
              if (prev) {
                return true;
              }
              const t = format(day, "yyyyMMdd");
              const cin = format(new Date(current.checkin), "yyyyMMdd");
              const cout = format(new Date(current.checkout), "yyyyMMdd");

              return t >= cin && t <= cout;
            }, false);
            return rst;
          }}
          value={value}
          onChange={(newValue) => {
            ctx?.updateData({ checkin: newValue[0], checkout: newValue[1] });
          }}
          renderInput={() => <></>}
        />
      </LocalizationProvider>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="text"
          onClick={() => {
            ctx?.updateData({ checkin: null, checkout: null });
          }}
        >
          날짜지우기
        </Button>
      </Box>
    </Box>
  );
}

export default CalendarFragment;

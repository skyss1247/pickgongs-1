import { AppBar, createTheme, ThemeProvider, Box } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";
import Header from "./header";
import NewHeader from "./newHeader";
import TownNav from "./townNav";

type Props = { children: ReactNode };

export default function DefaultLayout({ children }: Props) {
  return (
    <Container disableGutters={true}>
      <AppBar position="fixed" color="inherit" elevation={0} sx={{ mb: 3 }}>
        {/* <Header /> */}
        <NewHeader />
        <TownNav />
      </AppBar>
      <Container sx={{  pt:15, maxWidth:"1280px" }}>
        {children}
      </Container>
    </Container>
  );
}

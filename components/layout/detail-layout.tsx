import { AppBar, createTheme, ThemeProvider, Box } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";
import CloneHeader from "./header";
import CloneNav from "./townNav";

type Props = { children: ReactNode };

export default function DetailLayout({ children }: Props) {
  return (
    <Container disableGutters={true} maxWidth={false}>
      <AppBar color="inherit" elevation={0} sx={{ mb: 3 }}>
        <CloneHeader />
      </AppBar>
      <Container maxWidth={"xl"} sx={{ py: 10}}>
        {children}
      </Container>
    </Container>
  );
}

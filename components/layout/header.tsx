import { Button, Icon,Typography, IconButton, Box, Toolbar, Link, Divider  } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { MouseEventHandler, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header() {
  const { data, status } = useSession();
  // console.log("header - data", data);

  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const [showSignup, setShowSignup] = useState<boolean>(false);

  const router = useRouter();
  const openMenuHandle: MouseEventHandler = (evt) => {
    setAnchorEl(evt.currentTarget);
  };
  const closeMenuHandle = () => {
    setAnchorEl(null);
  };
  //=================================================
  const signMenuHandle = () => {
    setAnchorEl(null);
    setShowSignup(true);
  };

  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          margin: "auto"
        }}
      >
        <img src="/icons/logo.png" />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          bgcolor: 'background.paper',
          color: 'text.secondary',
        }}>
          <Button            
            href="#"
            sx={{ my: 1, mx: 1.5, color:"black" }}
          >
            <NotificationsIcon sx={{width:"18px", height:"16px"}}/>
            <Typography sx={{fontSize:"15px"}}>알림</Typography>
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button            
            onClick={()=>router.push("/account/signin")}
            sx={{ my: 1, mx: 1.5, color:"black" }}
          >
            <LogoutIcon />
            로그인
          </Button>
          <Divider orientation="vertical"  flexItem/>
          <Button            
            href="#"
            sx={{ my: 1, mx: 1.5, color:"black" }}
            
          >
            <PersonIcon />
            회원정보
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button            
            href="#"
            sx={{ my: 1, mx: 1.5, color:"black" }}
          >
            앱다운로드
          </Button>
        </Box>
      </Toolbar>
    </>
  );
}

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {  InputAdornment, IconButton   } from '@mui/material';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useRouter } from 'next/router';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 530,
  height: 720,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '2rem',
  textAlign:"center",
  p: 4,
};

export default function SignUp() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:"640px"
          }}
        >
          <Typography component="h1" fontSize={"43px"} fontFamily={"NotoSansKR-Regular"} >
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder"}}>아이디를 입력해주세요
                <Button sx={{backgroundColor:"#FC8210", color:"white", borderRadius:"1rem", ml:2}}>중복확인</Button></Typography>
                <TextField
                  name="userId"
                  required
                  fullWidth
                  id="userId"
                  label="name"
                  autoFocus
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <PersonIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>비밀번호를 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호 8자리(숫자,글자,특수문자 포함)"
                  type="password"
                  id="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <LockOutlinedIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>비밀번호를 다시한번 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  name="passwordCheck"
                  label="비밀번호 8자리(숫자,글자,특수문자 포함)"
                  type="password"
                  id="passwordCheck"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <LockOutlinedIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>이메일을 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="name@email.com"
                  name="email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <EmailOutlinedIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>닉네임을 입력해주세요
                <Button sx={{backgroundColor:"#FC8210", color:"white", borderRadius:"1rem", ml:2}}>중복확인</Button></Typography>
                <TextField
                  required
                  fullWidth
                  id="nickName"
                  label="닉네임을 입력해주세요"
                  name="nickName"
                />
              </Grid>     
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>본인인증하기
                  <Button onClick={handleOpen} sx={{backgroundColor:"#FC8210", color:"white", borderRadius:"1rem", ml:2}}>인증하기</Button></Typography>
              </Grid>           
            </Grid>
               
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color:"white", fontSize:"27px" }}
            >
              회원가입완료
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={()=>router.push("signin")} >
                  이미 계정을 갖고 계신가요?
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={style}>
            <Typography component="h1" fontSize={"43px"} fontFamily={"NotoSansKR-Regular"} >
              본인 확인 인증
            </Typography>
            <Typography sx={{mb:4}}>본인인증을 위한 확인이 필요합니다</Typography>
            <Grid container spacing={4} >
                <Grid item xs={6} sx={{textAlign:"left"}}>
                  이름
                  <TextField
                    required
                    fullWidth
                    name="name"
                    type="text"
                    id="name"
                  />
                </Grid>
                <Grid item xs={6} sx={{textAlign:"left"}}>
                  생년월일
                  <TextField
                    required
                    fullWidth
                    name="name"
                    type="text"
                    id="name"
                  />
                </Grid>
                <Grid item xs={12} sx={{textAlign:"left"}}>
                  전화번호
                  <TextField
                    required
                    fullWidth
                    name="name"
                    type="text"
                    id="name"
                  />
                </Grid>
                <Grid item xs={12} sx={{textAlign:"left"}}>
                  인증번호
                  <TextField
                    required
                    fullWidth
                    name="name"
                    type="text"
                    id="name"
                  />
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color:"white", fontSize:"27px" }}
            >
              인증 요청
            </Button>
          </Box>
        </Modal>
      </Container>
  );
}
SignUp.isRaw = true;
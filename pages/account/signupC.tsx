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
import Typography from '@mui/material/Typography';
import {  InputAdornment, IconButton   } from '@mui/material';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useRouter } from 'next/router';

export default function SignUpC() {
    const router = useRouter();
    const [type, setType] = React.useState<string>("contractor");
    const [check, setCheck] = React.useState<boolean>(true);
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
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:"640px"
          }}
        >
          <Typography component="h1" fontSize={"43px"} fontFamily={"NotoSansKR-Regular"}>
            사업자 회원가입
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
                  label="아이디"
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
                  label="example@email.com"
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
              <Typography sx={{mb:-2, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>사업장을 선택해주세요</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                    fullWidth
                    onClick={()=>{
                      setType("contractor");
                      setCheck(true);
                    }}
                    sx={{border:"1px solid #ccc", backgroundColor:check?"#15BF81":"white"}}
                >시공업체</Button>
              </Grid>  
              <Grid item xs={12} sm={6}> 
                <Button
                    fullWidth
                    sx={{border:"1px solid #ccc",backgroundColor:check?"white":"#15BF81"}}
                    onClick={()=>{
                        setType("heavyEquip");
                        setCheck(false);
                    }}
                >중장비</Button>
              </Grid>  
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>본인인증하기
                  <Button sx={{backgroundColor:"#FC8210", color:"white", borderRadius:"1rem", ml:2}}>인증하기</Button></Typography>
              </Grid>        
            </Grid>
            
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{backgroundColor:"#FC8210", mt: 3, mb: 2, color:"white", fontSize:"27px" }}
                onClick={()=>{
                        if(type==="contractor"){
                            router.push("signupContractor");
                        }else if(type==="heavyEquip"){
                            router.push("signupHeavy");
                        }else{
                            alert("사업장을 선택해주세요");
                        }
                    }                    
                }
            >
              다음 단계
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
      </Container>
  );
}
SignUpC.isRaw = true;
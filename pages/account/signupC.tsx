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
    const [type, setType] = React.useState<string>("");
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
          }}
        >
          <Typography component="h1" variant="h5">
            사업자 회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="userId"
                  required
                  fullWidth
                  id="userId"
                  label="아이디를 입력해주세요"
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
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호를 입력해주세요"
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
                <TextField
                  required
                  fullWidth
                  name="passwordCheck"
                  label="비밀번호 확인"
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
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일을 입력해주세요"
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
                <TextField
                  required
                  fullWidth
                  id="nickName"
                  label="닉네임을 입력해주세요"
                  name="nickName"
                />
              </Grid>   
              <Grid item xs={12} sm={6}>
                <Button
                    fullWidth
                    sx={{border:"1px solid #ccc", backgroundColor:check?"#7FE668":"white"}}
                    onClick={()=>{
                        setType("contractor");
                        setCheck(true);
                    }}
                >시공업체</Button>
              </Grid>  
              <Grid item xs={12} sm={6}> 
                <Button
                    fullWidth
                    sx={{border:"1px solid #ccc",backgroundColor:check?"white":"#7FE668"}}
                    onClick={()=>{
                        setType("heavyEquip");
                        setCheck(false);
                    }}
                >중장비</Button>
              </Grid>  
                <Button>
                    본인인증하기
                </Button>           
            </Grid>
            
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
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
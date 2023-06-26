import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import {Divider, Input} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  InputAdornment, IconButton   } from '@mui/material';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useRouter } from 'next/router';

export default function SignUpFeeC() {
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
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            mb:4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" sx={{fontSize:"2rem", fontWeight:"bold",mb:1}}>
            결제금액
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:3}}>사업장 노출범위 설정</Typography>
            <Grid container spacing={1} sx={{justifyContent:"space-around"}}>
              <Grid item xs={12} sm={3} sx={{p:1,height:"600px", backgroundColor:"#F7F9FC", textAlign:"center"}}>
                <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:3}}>기본 노출 지역설정</Typography>
                <Button sx={{backgroundColor:"#343434", color:"white", borderRadius:"1rem", mt:2, width:"80%"}}>지역추가</Button>
              </Grid>     
              <Grid item xs={12} sm={3} sx={{p:1,height:"600px", backgroundColor:"#F7F9FC", textAlign:"center"}}>
                <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:3}}>추가 노출 지역설정</Typography>
                <Button sx={{backgroundColor:"#343434", color:"white", borderRadius:"1rem", mt:2, width:"80%"}}>지역추가</Button>
              </Grid>     
              <Grid item xs={12} sm={3} sx={{p:1,height:"600px", backgroundColor:"#F7F9FC", textAlign:"center"}}>
                <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:3}}>총 금액</Typography>
              </Grid>     
                <Divider sx={{width:"100%", mt:2}} />
                <Grid item xs={12} sx={{p:2,height:"200px", backgroundColor:"#F7F9FC"}}>
                  <Box sx={{mb:4}}>
                    <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>기본 노출 지역</Typography>
                    <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}} textAlign="center">5개의 동을 선택하실 수 있으며 면 2개 선택가능합니다.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>추가 노출 지역제한</Typography>
                    <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}} textAlign="center">동 10군데, 군 5군데 까지 설정 가능합니다</Typography>
                  </Box>
                </Grid>
                <Divider sx={{width:"100%", mt:2}} />
                <Grid item xs={12}>
                    <Typography sx={{backgroundColor:"#FF5790", color:"white", borderRadius:"1rem", mt:2,width:"150px",textAlign:"center", p:1, mb:2}}>결제방법</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>은행명 <Input sx={{ml:1}}></Input></Typography>                     
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>계좌번호 <Input sx={{ml:1}}></Input></Typography>                     
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>결제일 <Input sx={{ml:1}}></Input></Typography>                     
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>예금주 <Input sx={{ml:1}}></Input></Typography>                     
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>전화번호 <Input sx={{ml:1}}></Input></Typography>                     
                      </Grid>
                    </Grid>
                    <Box sx={{mt:2}}>
                        <Typography sx={{backgroundColor:"#4545FD", color:"white", borderRadius:"1rem", mb:2,width:"150px",textAlign:"center", p:1}}>가입 경로</Typography>
                        <TextField sx={{width:"100%"}} label="가입경로 입력시 추첨하여 소정의 프로모션을 적용해 드립니다." />
                    </Box>
                </Grid>                
            </Grid>
            <Grid item xs={12} sx={{textAlign:"center"}}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 , width:"50%", color:"white",fontSize:"49px",fontWeight:"bold",borderRadius:"1rem", backgroundColor:"#004BA7"}}
                onClick={()=>router.push("/")}
            >
              파트너 신청하기
            </Button>
            </Grid>
            <Typography variant='subtitle2' sx={{textAlign:"center", color:"#787878", fontSize:"1.2rem"}}>
                작성하신 이메일로 전자서명서가 발송됩니다.
                업무량이 많아 전자서명서 발송이 2~7일 소요되는 점 양해부탁드립니다.
            </Typography>
          </Box>
        </Box>
      </Container>
  );
}
SignUpFeeC.isRaw = true;
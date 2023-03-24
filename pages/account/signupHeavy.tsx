import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Divider} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


export default function SignUpHeavy() {
  const router = useRouter();
  const [gurantee, setGurantee] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setGurantee(event.target.value as string);
  };
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
          <Typography>중장비</Typography>          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>중장비차량 검수과정입니다. 정확하게 촬영하여 등록해주세요</Typography>
                <Box sx={{display:"flex", justifyContent:"space-around"}}>
                  <Box>
                    <AddBoxOutlinedIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                    <Typography>전면</Typography>
                  </Box>
                  <Box>
                  <AddBoxOutlinedIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                    <Typography>측면</Typography>
                  </Box>
                  <Box>
                  <AddBoxOutlinedIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                    <Typography>후면</Typography>
                  </Box>
                </Box>
                <Box sx={{display:"flex", justifyContent:"space-around"}}>
                  <Box>
                    <AddBoxOutlinedIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                    <Typography>사업장 사진추가</Typography>
                    <Typography variant='subtitle2'>(간판이 포함된 전면사진)</Typography>
                  </Box>
                  <Box>
                    <AddBoxOutlinedIcon sx={{fontSize:"6rem"}} />
                    <Typography>임대차계약서</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                  <Typography>사업자등록증</Typography>       
                  <Box>
                    <Button>중복확인</Button>          
                    <Button>사진등록</Button>
                  </Box>
                </Box>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="사업자번호 입력"                                    
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>업체명</Typography>
                <TextField
                  required
                  fullWidth
                  id="companyName"
                  name="companyName"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                  <Typography>사업장 주소</Typography>
                  <Button>주소 검색</Button>
                </Box>
                <TextField
                  required
                  fullWidth
                  name="location"
                  label="주소"
                  id="location"
                />
              </Grid>
              <Divider sx={{width:"100%", mt:2}} />
              <Grid item xs={12} sm={5}>
              <Typography>크레인 종류</Typography> 
                <Select
                  value={gurantee}
                  onChange={handleChange}
                  sx={{width:"80%"}}                  
                >
                    <MenuItem value={1}>카고크레인</MenuItem>
                    <MenuItem value={2}>사다리차</MenuItem>
                    <MenuItem value={3}>고소작업차</MenuItem>
                  </Select>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Typography>차종 TON</Typography> 
                  <TextField
                    required
                    fullWidth
                    name="location"
                    label="차종 TON"
                    id="location"
                  />
              </Grid>
              <Grid item xs={12} sm={3}>
              <Typography>경력</Typography> 
                  <TextField
                    required
                    fullWidth
                    name="location"
                    label="경력"
                    id="location"
                  />
              </Grid>
              <Divider sx={{width:"100%", mt:2}} />
              <Grid item xs={12}>
                <Typography>해당자격증 사진촬영하여 업로드 하시길바랍니다</Typography>
                <Box sx={{display:"flex", justifyContent:"space-around"}}>
                  <Box>
                    <Typography>화물운송 자격증번호</Typography>
                    <TextField
                      required
                      fullWidth
                      name="freightNum"
                      id="freightNum"
                      sx={{mb:1}}
                    />
                    <Typography>자격증 사진</Typography>
                    <AddBoxOutlinedIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                  </Box>
                  <Box>
                  <Typography sx={{mb:8}}>조종교육 이수증</Typography>
                    <Typography>이수증 사진</Typography>
                    <AddBoxOutlinedIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                  </Box>
                </Box>
              </Grid>              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>router.push("signupFeeH")}
            >
              다음 단계
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  계정을 갖고 계시면 로그인 화면으로
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
SignUpHeavy.isRaw = true;
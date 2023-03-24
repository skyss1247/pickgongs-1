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


export default function SignUpContractor() {
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
      <Container component="main" maxWidth="sm">
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
          <Typography>개인사업장</Typography>          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>사업장 검수과정입니다. 사업장 정면으로 정확하게 촬영하여 등록해주세요</Typography>
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
                <Box>
                  <Typography>신분증 사진등록</Typography>                  
                  <Button>
                    사진등록
                  </Button>                  
                </Box>                
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
              <Divider sx={{m:2, width:"100%"}} />
              <Grid container spacing={0}>
                <Typography>주 업종을 등록하세요(자격증이 없다면 없음으로 입력)</Typography>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="location"
                    label="주업종을 입력하세요"
                    id="location"
                    sx={{mb:2}}
                  />
                  <TextField
                    required
                    fullWidth
                    name="location"
                    label="자격증 종목을 입력하세요"
                    id="location"
                    sx={{mb:2}}
                  />                  
                </Grid>
                <Grid item xs={12} sm={6} sx={{pl:"4rem"}}>
                  <AddBoxOutlinedIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                  <Typography>자격증 사진추가</Typography>
                </Grid>
                <Button>자격증 추가하기</Button>
              </Grid>
              <Divider sx={{m:2, width:"100%"}} />
              <Grid item xs={12}>
                <Typography>소비자 보호 및 업체보호를 위해 보증기관을 통하여 보증발급 유무 확인란입니다. </Typography>
                <Box sx={{mt:2}}>
                  <Typography>보증기관 발급 유/무</Typography>
                  <Select
                    value={gurantee}
                    onChange={handleChange}
                    sx={{width:"80%"}}
                  >
                    <MenuItem value={10}>SGI서울보증보험</MenuItem>
                    <MenuItem value={20}>전문건설공제조합</MenuItem>
                  </Select>
                </Box>
                <Box sx={{mt:2}}>
                  <Typography>보증 가능 여부를 선택하세요</Typography>
                  <Select
                    value={gurantee}
                    onChange={handleChange}
                    sx={{width:"80%"}}
                  >
                    <MenuItem value={1}>지급보증보험</MenuItem>
                    <MenuItem value={2}>이행보증보험</MenuItem>
                    <MenuItem value={3}>계약보증보험</MenuItem>
                    <MenuItem value={4}>선금보증보험</MenuItem>
                    <MenuItem value={5}>하자보증보험</MenuItem>
                    <MenuItem value={5}>공사이행보증보험</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Divider sx={{m:2, width:"100%"}} />
              <Grid item xs={12} sm={8}>
                <Typography>사업자 이메일</Typography>
                <TextField
                  required
                  fullWidth
                  name="companyEmail"
                  label="사업자 이메일"
                  id="companyEmail"
                />  
              </Grid>
              <Grid item xs={12} sm={4}>
              <Typography>A/S기간을 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  name="afterService"
                  label=""
                  id="afterService"
                />  
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>router.push("signupFeeC")}
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
SignUpContractor.isRaw = true;
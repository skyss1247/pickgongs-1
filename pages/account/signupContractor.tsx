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
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" sx={{fontSize:"2rem", fontWeight:"bold", mb:2}} >
            사업자 회원가입
          </Typography>
          <Typography variant="h5">개인사업장</Typography>          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{textAlign:"center"}}>사업장 검수과정입니다. 사업장 정면으로 정확하게 촬영하여 등록해주세요</Typography>
                <Box sx={{display:"flex", justifyContent:"space-around",textAlign:"center"}}>
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
                <Box sx={{display:"flex", justifyContent:"space-between", mb:1}}>
                  <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>사업자등록증</Typography>       
                  <Box>
                    <Button sx={{backgroundColor:"#7D7D7D", color:"white", borderRadius:"1rem", ml:2}}>중복확인</Button>          
                    <Button sx={{backgroundColor:"#02CE9D", color:"white", borderRadius:"1rem", ml:2}}>사진등록</Button>
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
                <Box sx={{display:"flex", justifyContent:"space-between", mb:1}}>
                  <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>신분증 사진등록</Typography>   
                  <Box>     
                    <Button sx={{backgroundColor:"#02CE9D", color:"white", borderRadius:"1rem", ml:2}}>사진등록</Button>
                  </Box>                                  
                </Box>    
                <TextField
                    autoComplete="given-name"
                    name="firstName"
                    disabled                    
                    fullWidth
                    id="firstName"
                    label="신분증 파일"                                    
                  />               
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>업체명</Typography>
                <TextField
                  required
                  fullWidth
                  id="companyName"
                  name="companyName"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{display:"flex", justifyContent:"space-between", mb:1}}>
                  <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>사업장 주소</Typography>
                  <Button sx={{backgroundColor:"#02CE9D", color:"white", borderRadius:"1rem", ml:2}}>주소 검색</Button>
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
              <Grid container spacing={2} sx={{width:"80%", margin:"auto"}}>
                <Grid item xs={12}>
                  <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1,textAlign:"center" }}>주 업종을 등록하세요(자격증이 없다면 없음으로 입력)</Typography>
                </Grid>
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
                  <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>자격증 사진추가</Typography>
                  <AddBoxOutlinedIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                </Grid>
                <Button sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>자격증 추가하기</Button>
              </Grid>
              <Divider sx={{m:2, width:"100%"}} />
              <Grid item xs={12}>
                <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>소비자 보호 및 업체보호를 위해 보증기관을 통하여 보증발급 유무 확인란입니다. </Typography>
                <Box sx={{mt:2}}>
                  <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>보증기관 발급 유/무</Typography>
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
                  <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>보증 가능 여부를 선택하세요</Typography>
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
              <Grid item xs={12}>
                <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>포트폴리오(홈페이지,블로그,티스토리,유튜브,인스타그램 등등)</Typography>
                <TextField
                    required
                    fullWidth
                    name="location"
                    label="대표님의 포트폴리오를 확인할 수 있는 URL을 입력하세요"
                    id="location"
                    sx={{mb:2}}
                />
                <TextField
                    required
                    fullWidth
                    name="location"
                    label="대표님의 포트폴리오를 확인할 수 있는 URL을 입력하세요"
                    id="location"
                    sx={{mb:2}}
                />
                <TextField
                    required
                    fullWidth
                    name="location"
                    label="대표님의 포트폴리오를 확인할 수 있는 URL을 입력하세요"
                    id="location"
                    sx={{mb:2}}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>사업자 이메일</Typography>
                <TextField
                  required
                  fullWidth
                  name="companyEmail"
                  label="사업자 이메일"
                  id="companyEmail"
                />  
              </Grid>
              <Grid item xs={12} sm={4}>
              <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>A/S기간을 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  name="afterService"
                  label=""
                  id="afterService"
                />  
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{textAlign:"right"}}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width:"30%", fontSize:"2rem", color:"white", backgroundColor:"#004BA7"}}
                onClick={()=>router.push("signupFeeC")}
              >
                다음 단계
              </Button>
            </Grid>
            <Grid container justifyContent="flex-end" sx={{mb:2}}>
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
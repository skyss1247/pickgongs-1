import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";

type Section = { title: string; url: string };

const sectionsByUser: Section[] = [
  { title: '시공업체 찾기', url: '/contractor'},
  { title: '시공 PICK', url: '/picks'},
  { title: '방문예정스케줄보기', url: '/schedules'},
  { title: '찜콕♥', url: '/favorites'},
  { title: 'TALK', url: '/talk'},
  { title: 'Q&A', url: '/qna'},
];
const sectionsByCompany: Section[] = [
  { title: '우리가게 꾸미기', url: '/signin'},
  { title: '고객관리 스케줄', url: '/schedules'},
  { title: '시공업체 스케줄', url: '/schedules'},
  { title: '대화방', url: '/talk'},
  { title: '리뷰관리', url: '/review'},
  { title: '광고결제', url: '/adMange'},
];
export default function TownNav() {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const tabChangeHandle = (event: SyntheticEvent, value: number) => {
    setValue(value);
  };


  return (
    <Toolbar component="nav" variant="dense" sx={{ justifyContent: "center"}}>
      <Tabs value={value} onChange={tabChangeHandle} sx={{overflowX:"auto"}}
        variant="scrollable"  className="navTabs" scrollButtons  allowScrollButtonsMobile>
        {sectionsByUser.map((section)=>(
            <Tab key={section.title} label={section.title} onClick={()=>router.push(section.url)}/>
        ))}
      </Tabs>
    </Toolbar>
  );
}

import {Table, TableRow, TableCell} from "@mui/material";

export default function CompanyInfo() {

    return(
    <Table>
        <TableRow>
            <TableCell width={"30%"}>
                주소
            </TableCell>
            <TableCell width={"70%"}>
                서울특별시 마포구
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell width={"30%"}>
                사업자번호
            </TableCell>
            <TableCell width={"70%"}>
                479-00-00000
            </TableCell>
            </TableRow>
        <TableRow>
            <TableCell width={"30%"}>
                A/S 기간
            </TableCell>
            <TableCell width={"70%"}>
                1년
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell width={"30%"}>
                인증업체
            </TableCell>
            <TableCell width={"70%"}>
                전기자격증 보유 도배 자격증보유
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell width={"30%"}>
                보증가능여부
            </TableCell>
            <TableCell width={"70%"}>
                선급금, 하자보수
            </TableCell>
        </TableRow>
    </Table>
    )
}


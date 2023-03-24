import mongoose from "mongoose";

export interface AccountData {
    _id: mongoose.Types.ObjectId;
    userId: string; // 계정 ID
    email: string; // 이메일
    password: string; // 계정 비번
    name: string; // 이름
    nickname: string; // 닉네임
    birth: string; // 생일
    phoneNumber: string;  // 전화번호
    type: string; // 회원 타입
    createdAt: Date; // 생성 날짜
    contractor: {
        profileImg: string;
        CBP:{   // 사업자등록증
            businessNumber: string;
            CBPImg: string;
        };
        personalIdImg: string;
        companyName: string;
        location: {
            state: string;
            city: string;
            street: string;
            apt: string;
            zipCode: string;
            lat: number;
            lng: number;
        };
        categories: Array<string>;
        certificates: {
            category: string;
            certImg: string;
        };
        guarantee:{
            guarantor: string;
            guaranteeType: Array<string>;
        };
        companyEmail: string;
        afterService: string;
        published: boolean;
    };
    heavyEquip:{
        frontImg: string;
        sideImg: string;
        rearImg: string;
        CBP:{   // 사업자등록증
            businessNumber: string;
            CBPImg: string;
        };
        companyName: string;
        location: {
            state: string;
            city: string;
            street: string;
            apt: string;
            zipCode: string;
            lat: number;
            lng: number;
        };
        heavyType: string;
        heavyTON: string;
        career: string;
        freightNum: string;
        freightCertImg: string;
        pilotTrainingCertImg: string;
    }
}

const accountSchema = new mongoose.Schema<AccountData>({
    userId:{ type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    birth: { type: String, required: true }, 
    phoneNumber: { type: String, required: true }, 
    type: { type: String, required: true },
    createdAt: Date,
    contractor:{
        profileImg: String,
        CBP:{   // 사업자등록증
            businessNumber: String,
            CBPImg: String,
        },
        personalIdImg: String,
        companyName: String,
        location: {
            state: String,
            city: String,
            street: String,
            apt: String,
            zipCode: String,
            lat: Number,
            lng: Number,
        },
        categories: Array<String>,
        certificates: {
            category: String,
            certImg: String,
        },
        guarantee:{
            guarantor: String,
            guaranteeType: Array<String>,
        },
        companyEmail: String,
        afterService: String,
        published: Boolean
    },
    heavyEquip:{
        frontImg: String,
        sideImg: String,
        rearImg: String,
        CBP:{   // 사업자등록증
            businessNumber: String,
            CBPImg: String,
        },
        companyName: String,
        location: {
            state: String,
            city: String,
            street: String,
            apt: String,
            zipCode: String,
            lat: Number,
            lng: Number,
        },
        heavyType: String,
        heavyTON: String,
        career: String,
        freightNum: String,
        freightCertImg: String,
        pilotTrainingCertImg: String
    }
});

const Account: mongoose.Model<AccountData> =
  mongoose.models.Account ||
  mongoose.model<AccountData>("Account", accountSchema);

export default Account;

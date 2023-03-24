import mongoose  from "mongoose";

export interface BookHeavyData{
    _id: mongoose.Types.ObjectId;
    reserveId: string; // 예약ID
    contractorId: string;
    status: string;
    startDate: Date;
    endDate: Date;
    lentalFee: string;
    heavyEquipment: string;
    location: {
        state: string;
        city: string;
        street: string;
        apt: string;
        zipCode: string;
        lat: number;
        lng: number;
    };
    floors: string;
    time: string;
    workDetails: string;
    publish: boolean;
    publishedDate: Date;
}

const bookHeavySchema = new mongoose.Schema<BookHeavyData>({
    reserveId: String,
    contractorId: String,
    status: String,
    startDate: Date,
    endDate: Date,
    lentalFee: String,
    heavyEquipment: String,
    location: {
        state: String,
        city: String,
        street: String,
        apt: String,
        zipCode: String,
        lat: Number,
        lng: Number,
    },
    floors: String,
    time: String,
    workDetails: String,
    publish: Boolean,
    publishedDate: Date
})

const BookHeavy: mongoose.Model<BookHeavyData> = 
    mongoose.models.BookHeavy || mongoose.model("BookHeavy", bookHeavySchema);

export default BookHeavy;
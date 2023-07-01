import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    sampleNumber: { type: Number },
    name: { type: String },
    phoneNo: { type: String },
    a_1: { type: Number },
    a_2: { type: Number },
    mean: { type: Number },
    hbValue: { type: Number },
    rounded_hbValue: { type: Number },
    sampleCollectionDate: { type: String },
    sampleProcessedDate: { type: String },
    bmi: { type: Number },
});

const studentModel = mongoose.model('Student', StudentSchema);

export default studentModel; 
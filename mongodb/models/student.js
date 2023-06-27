import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    sampleNumber: { type: Number },
    name: { type: String },
    age: { type: Number },
    sex: { type: String },
    sampleDate: { type: Date },
    reportDate: { type: Date },
    ethnicity: { type: String },
    academicYear: { type: Number },
    faculty : { type: String },
    weight: { type: Number },
    height_m: { type: Number },
    height_cm: { type: Number },
    waistCircumference: { type: Number },
    hipCircumference: { type: Number },
    midUpperArmCircumference: { type: Number },
    midThighCircumference: { type: Number },
    triceps: { type: Number },
    subscapular: { type: Number },
    suprailiac: { type: Number },
    midThigh: { type: Number },
    bmi: { type: Number },
    waistThighRatio: { type: Number },
    waistHipRatio: { type: Number },
    weightHeightRatio: { type: Number },
    byBioelectricalImpedanceAnalyzer : { type: Number },
    bySkinfoldThickness: { type: Number },
    visceralFatIndex: { type: Number},
    haemoglobinConcentration: { type: Number },
});

const studentModel = mongoose.model('Student', StudentSchema);

export default studentModel; 
import mongoose from "mongoose";

const SkinfoldThicknessSchema = new mongoose.Schema({
    triceps: { type: Number, required: true },
    subscapular: { type: Number, required: true },
    suprailiac: { type: Number, required: true },
    midThigh: { type: Number, required: true },
});

const skinfoldThicknessModel = mongoose.model('SkinfoldThickness', SkinfoldThicknessSchema);

export default skinfoldThicknessModel;
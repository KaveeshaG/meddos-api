import mongoose from "mongoose";

const BodyFatPercentageSchema = new mongoose.Schema({
    byBioelectricalImpedanceAnalyzer : { type: Number, required: true },
    bySkinfoldThickness: { type: Number, required: true },
});

const bodyFatPercentageModel = mongoose.model('BodyFatPercentage', BodyFatPercentageSchema);

export default bodyFatPercentageModel;
import mongoose from "mongoose";

const AnthropometricaIndicesSchema = new mongoose.Schema({
    bmi: { type: Number, required: true },
    waistThighRatio: { type: Number, required: true },
    waistHipRatio: { type: Number, required: true },
    weightHeightRatio: { type: Number, required: true },
});

const anthropometricaIndicesModel = mongoose.model('AnthropometricaIndices', AnthropometricaIndicesSchema);

export default anthropometricaIndicesModel;
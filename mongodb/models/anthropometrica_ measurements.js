import mongoose from "mongoose";

const AnthropometricaMeassurementsSchema = new mongoose.Schema({
    weight: { type: Number, required: true },
    height_m: { type: Number, required: true },
    height_cm: { type: Number, required: true },
    waistCircumference: { type: Number, required: true },
    hipCircumference: { type: Number, required: true },
    midUpperArmCircumference: { type: Number, required: true },
    midThighCircumference: { type: Number, required: true },
});

const anthropometricaMeassurementsModel = mongoose.model('AnthropometricaMeassurements', AnthropometricaMeassurementsSchema);

export default anthropometricaMeassurementsModel;
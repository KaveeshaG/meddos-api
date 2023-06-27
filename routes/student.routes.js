import express from 'express';
import { getAllStudents } from '../controllers/student.controller.js';

const router = express.Router();

router.route('/').get(getAllStudents);
// router.route('/:id').get(getStudentById);

export default router;
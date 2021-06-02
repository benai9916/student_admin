import express from 'express';

import { getStudentDetail, createStudentDetail, updateStudentDetail, deleteStudentDetail } from "../controllers/students.js";

const router = express.Router();

router.get('/', getStudentDetail)
router.post('/', createStudentDetail)
router.patch('/:id', updateStudentDetail)
router.delete('/:id', deleteStudentDetail)

export default router;
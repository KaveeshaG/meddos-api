import Student from '../mongodb/models/student.js';

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find(); // Retrieve all students from the database
        res.status(200).json(students); // Send the students as JSON response
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
};
const getStudentInfoById = async (req, res) => {};

export {
    getAllStudents,
    getStudentInfoById,
}
import AddStudentDetail from '../modals/addStudents.js';
import mongoose from 'mongoose';


export const getStudentDetail = async(req, res) => {
    try {
        const getStudent = await AddStudentDetail.find()

        res.status(200).json(getStudent)
    } catch (error) {
        res.status(404).json({ message : error })
    }
}

export const createStudentDetail = async(req, res) => {
    const data = req.body;
    
    const newStudent = new AddStudentDetail(data);
    try {
        await  newStudent.save();

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message : error })
    }
}

export const updateStudentDetail = async (req, res) => {
    const {id : _id } = req.params
    const data =  req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No product with that id');

    const updateStudent =  await AddStudentDetail.findByIdAndUpdate(_id, {...data, _id} , { new: true})

    res.json(updateStudent)
}


export const deleteStudentDetail = async (req, res) => {
    const {id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No product with that id');

    await AddStudentDetail.findByIdAndRemove(id);

    res.json( { message: "Product deleted successfully..!"});
}
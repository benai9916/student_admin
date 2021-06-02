import mongoose from 'mongoose'

//  add scheme
const addSchema = mongoose.Schema({
    name: String,
    rollno: String,
    branch: String,
    subject: [String],
})

//  turn scheme to a model
const addStudentDetail = mongoose.model('addStudent', addSchema)

export default addStudentDetail

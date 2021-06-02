import mongoose from 'mongoose'

//  add scheme
const credentialSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: {type: String }
})

//  turn scheme to a model
const addCredential = mongoose.model('credential', credentialSchema)

export default addCredential
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/pizza', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
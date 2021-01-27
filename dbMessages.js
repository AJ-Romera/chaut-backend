import mongoose from 'mongoose';

const chautSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

export default mongoose.model('messageContent', chautSchema);

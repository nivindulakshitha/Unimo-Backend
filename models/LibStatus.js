import mongoose from 'mongoose'

const libraryStatusSchema = new mongoose.Schema({
    entrances: {
        type: Number,
        default: 0
    },
    currentOccupancy: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" }).split(",")[0]
        
    },
    lastModified: {
        type: Date,
        default: new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
    },

});


export default mongoose.model("LibraryStatus", libraryStatusSchema); 

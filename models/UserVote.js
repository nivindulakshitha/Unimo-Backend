import mongoose from 'mongoose';

const UserVoteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    votes: { type: Number, default: 0 },
    lastVoteDate: { type: Date, default: null },
    consecutiveDays: { type: Number, default: 0 },
    consecutiveWeeks: { type: Number, default: 0 },
    badges: {
        firstStep: { type: Boolean, default: false },
        frequentContributor: { type: String, default: null },
        dailyContributor: { type: Boolean, default: false },
        weeklyWarrior: { type: Boolean, default: false },
        accuracyStar: { type: Boolean, default: false }
    }
});

export default mongoose.model('UserVote', UserVoteSchema);

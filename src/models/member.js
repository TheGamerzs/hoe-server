import mongoose from "mongoose";

const member = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	discord: {
		type: String,
		required: true
	},
	topBadge: {
		type: String
	}
});

const Member = mongoose.model("member", member);
export default Member;

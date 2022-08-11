import mongoose from "mongoose";

const badge = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	gained: {
		type: Number
	}
});

const Badge = mongoose.model("badge", badge);
export default Badge;

import mongoose from "mongoose";

const order = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	customer: {
		type: Object,
		required: true,
		id: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		}
	},
	product: {
		type: Object,
		required: true,
		name: {
			type: String,
			required: true
		},
		quantity: {
			type: Number,
			required: true
		}
	}
});

const Order = mongoose.model("order", order);
export default Order;

import Badge from "../models/badge";
import Member from "../models/member";
import Order from "../models/order";

const resolvers = {
	Query: {
		async Members() {
			const members = await Member.find();

			for (let i = 0; i < members.length; i++) {
				if (members[i].topBadge) {
					members[i].badge = await Badge.findOne({ id: members[i].topBadge });
				}
			}
			return members;
		},
		async Member(_, { id }) {
			const member = await Member.findOne({ id });

			if (member.topBadge) {
				member.badge = await Badge.findOne({ id: member.topBadge });
			}
			return member;
		},
		async Orders() {
			const orders = await Order.find();

			for (let i = 0; i < orders.length; i++) {
				orders[i].customer = await Member.findOne({ id: orders[i].customer });
			}
			return orders;
		},
		async Order(_, { id }) {
			const order = await Order.findOne({ id });

			order.customer = await Member.findOne({ id: order.customer });
			return order;
		}
	}
};
export default resolvers;

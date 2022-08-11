import cors from "@fastify/cors";
import db from "./config/index";
import fastify from "fastify";
import mercurius from "mercurius";
import resolvers from "./graphql/resolvers";
import schema from "./graphql/schema";

const Port = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/hoe";

const app = fastify({ logger: true });

// Activate plugins below:

app.register(cors, {
	origin: "*",
	methods: ["GET", "POST", "PUT", "DELETE"]
});
app.register(db, { uri });
app.register(mercurius, {
	schema,
	resolvers,
	graphiql: "playground"
});

// create server
const start = async () => {
	try {
		await app.listen({ port: Port });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

start();

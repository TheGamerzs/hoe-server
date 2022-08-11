const schema = `
type Query {
    Members: [Member]
    Member(id: ID!): Member
    Orders: [Order]
    Order(id: ID!): Order
}
type Member {
    id: ID!
    name: String!
    discord: String!
    topBadge: String
    badge: Badge
}
type Badge {
    id: ID!
    name: String!
    icon: String!
    color: String!
}

type Order {
    id: ID!
    customer: Customer!
    product: Product!
}
type Customer {
    id: ID!
    name: String!
}
type Product {
    name: String!
    quantity: Int!
}
`;
export default schema;

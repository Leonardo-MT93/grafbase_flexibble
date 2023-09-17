import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient('apiUrl');

const isProduction = process.env.NODE_ENV === "production"
const makeGraphQLRequest = async (query: string, variables= {}) => {
    try {
        //client.request
    } catch (error) {
        
    }
}
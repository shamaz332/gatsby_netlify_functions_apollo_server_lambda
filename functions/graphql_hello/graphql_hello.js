const {ApolloServer,gql} = require("apollo-server-lambda")

const typeDefs = gql`

type Query{
    message : String
}
`

const resolvers = {
    Query:{
        message:(parent,args,context)=>{
            return "Helo world from shamaz saeed"
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:true,
    introspection:true
})



exports.handler = server.createHandler()
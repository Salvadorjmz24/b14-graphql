const express =  require ( 'express' );
const app = express();

const { buildSchema } = require( 'graphql' );
const { graphqlHTTP } = require( 'express-graphql' );


const schema = buildSchema( `
    type Query {
        getWelcome(name: String): String
        getResponse : Boolean
    }

`);

const getWelcome = (args) => {
    return "hello word " +  args.name;
};

const getResponse = () => {
    return true;
}



const root = {
    //properties(Shema) = functions
    getWelcome: getWelcome,
    getResponse : getResponse
}

app.use( '/graphql', graphqlHTTP ( {
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen( 3000, () => {
    console.log('server running :)')
});
import mongodb from 'mongodb';

export default {
  "port": 3005,
  "mongoUrl": "mongodb://localhost:27017/chat-api",
  // "port": process.env.PORT,
  // "mongoUrl": "mongodb://admin:admin@cluster0-shard-00-00-pov8a.mongodb.net:27017,cluster0-shard-00-01-pov8a.mongodb.net:27017,cluster0-shard-00-02-pov8a.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  "bodyLimit": "100kb"
}

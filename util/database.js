// getting a mongodb client to connect to a mongodb database
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://msrezaie:PmM5HolMgRJoHdIN@cluster0.jqipsao.mongodb.net/?retryWrites=true&w=majority";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("CONNECTED!");
      _db = client.db("mjk");
      callback();
    })
    .catch((err) => {
      console.log(err);
      // throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "NO DATABASE FOUND!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

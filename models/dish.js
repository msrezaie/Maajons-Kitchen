const getDb = require("../util/database").getDb;
class Dish {
  constructor(name, imageUrl, price, shortDesc) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.shortDesc = shortDesc;
  }

  save() {
    const db = getDb();
    return db
      .collection("dish")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Dish;

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
      .collection("dishes")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("dishes")
      .find()
      .toArray()
      .then((dishes) => {
        return dishes;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchByName(dishName) {
    const db = getDb();
    return (
      db
        .collection("dishes")
        // find returns a cursor, and the object passed to it is for filtering
        .find({ name: dishName })
        .next()
        .then((dishes) => {
          return dishes;
        })
        .catch((err) => {
          console.log(err);
        })
    );
  }
}
module.exports = Dish;

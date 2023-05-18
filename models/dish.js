const getDb = require("../util/database").getDb;
class Dish {
  constructor(
    name,
    fName,
    mainImageUrl,
    price,
    shortDesc,
    pic1ImageUrl,
    pic2ImageUrl,
    pic3ImageUrl,
    pic4ImageUrl,
    pic5ImageUrl,
    howMade,
    howServe
  ) {
    this.name = name;
    this.fName = fName;
    this.mainImageUrl = mainImageUrl;
    this.price = price;
    this.shortDesc = shortDesc;
    this.pic1ImageUrl = pic1ImageUrl;
    this.pic2ImageUrl = pic2ImageUrl;
    this.pic3ImageUrl = pic3ImageUrl;
    this.pic4ImageUrl = pic4ImageUrl;
    this.pic5ImageUrl = pic5ImageUrl;
    this.howMade = howMade;
    this.howServe = howServe;
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

const mongoose = require("./connection.js");
const Shop = require("../models/Shop.js");

const pizza = {
  name: "Fellini's Special",
  price: "5.99"
};

const injera = {
  name: "Injera",
  price: "1.00"
};

const fishTaco = {
  name: "Fish Taco",
  price: "2.85"
};

const padThai = {
  name: "Pad Thai",
  price: "9.00"
};

const fellinis = new Shop({
  name: "Fellini's Pizza",
  rating: 4,
  category: "Pizza",
  description:
    "Fellini's Pizza is an Italian restaurant founded in Atlanta on May 5, 1982 by Clay Harper of the Coolies. It has 7 locations and is known for its Atlanta style pizza. Its first location was opened near Little Five Points. It was voted the best pizza restaurant in Atlanta in 2013 by the Emory Wheel",
  imgLink:
    "https://thepizzasnob.files.wordpress.com/2012/08/putdooes-resize.jpg",
  foodItems: [pizza]
});

const littleBangcock = new Shop({
  name: "Little Bankok",
  rating: 5,
  category: "Thai",
  description:
    "Basic Thai spot also offering generous portions of Chinese dishes in a no-frills setting.",
  imgLink:
    "https://dev.creativeloafing.com/image_archive/2015/04/640w/48e17_acg_little_bangkok_eric_cash_magnum.jpg",
  foodItems: [padThai]
});

const taq = new Shop({
  name: "Taqueria Del Sol",
  rating: 3,
  category: "Tex-Mex",
  description:
    "Since opening in 2000, Taqueria del Sol has offered diners many inventive and delicious options for lunch and dinner. While the menu is driven by Mexican cuisine, many of the tacos and sides feature cross-cultural flair. Taqueria del Sol is truly one of a kind, juxtaposing the quality of fine dining ingredients against fast-casual prices, and offering authentic Southwestern selections as well as a variety of Southern-inspired menu choices. Christiane Lauterbach of Atlanta Magazine writes, “to this day, there is no better bang for the buck in Atlanta.” In 2007, Bon Appétit picked the Atlanta-based chain as a “Top American Restaurant.",
  imgLink:
    "https://cdn.vox-cdn.com/thumbor/lEosXa5zff-4beq-BdLBHW4cluw=/0x0:604x401/920x613/filters:focal(254x153:350x249):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55240725/422501_10150663725684455_261050127_n.0.jpg",
  foodItems: [fishTaco]
});

const desta = new Shop({
  name: "Desta Ethiopian Kitchen",
  rating: 5,
  category: "Ethiopian",
  description:
    "Popular Ethiopian spot offering a variety of exotic dishes, including ample vegetarian options.",
  imgLink:
    "https://www.destaethiopiankitchen.com/images/desta-gallery-32.jpg?crc=3800168500",
  foodItems: [injera]
});

Shop.remove({})
  .then(() => Shop.create([taq, fellinis, desta, littleBangcock]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));

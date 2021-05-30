const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const bookSeed = [
  {
    _id: "AWKSDwAAQBAJ",
    title: "The Beautiful Ones",
    authors: "Prince",
    description:
      "#1 NEW YORK TIMES BESTSELLER • The brilliant coming-of-age-and-into-superstardom story of one of the greatest artists of all time, in his own words—featuring never-before-seen photos, original scrapbooks and lyric sheets, and the exquisite memoir he began writing before his tragic death NAMED ONE OF THE BEST MUSIC BOOKS OF THE YEAR BY THE NEW YORK TIMES BOOK REVIEW AND ONE OF THE BEST BOOKS OF THE YEAR BY THE WASHINGTON POST AND THE GUARDIAN • NOMINATED FOR THE NAACP IMAGE AWARD Prince was a musical genius, one of the most beloved, accomplished, and acclaimed musicians of our time. He was a startlingly original visionary with an imagination deep enough to whip up whole worlds, from the sexy, gritty funk paradise of “Uptown” to the mythical landscape of Purple Rain to the psychedelia of “Paisley Park.” But his most ambitious creative act was turning Prince Rogers Nelson, born in Minnesota, into Prince, one of the greatest pop stars of any era. The Beautiful Ones is the story of how Prince became Prince—a first-person account of a kid absorbing the world around him and then creating a persona, an artistic vision, and a life, before the hits and fame that would come to define him. The book is told in four parts. The first is the memoir Prince was writing before his tragic death, pages that bring us into his childhood world through his own lyrical prose. The second part takes us through Prince’s early years as a musician, before his first album was released, via an evocative scrapbook of writing and photos. The third section shows us Prince’s evolution through candid images that go up to the cusp of his greatest achievement, which we see in the book’s fourth section: his original handwritten treatment for Purple Rain—the final stage in Prince’s self-creation, where he retells the autobiography of the first three parts as a heroic journey. The book is framed by editor Dan Piepenbring’s riveting and moving introduction about his profound collaboration with Prince in his final months—a time when Prince was thinking deeply about how to reveal more of himself and his ideas to the world, while retaining the mystery and mystique he’d so carefully cultivated—and annotations that provide context to the book’s images. This work is not just a tribute to an icon, but an original and energizing literary work in its own right, full of Prince’s ideas and vision, his voice and image—his undying gift to the world.",
    image:
      "http://books.google.com/books/content?id=AWKSDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://books.google.com/books?id=AWKSDwAAQBAJ&printsec=frontcover&dq=Prince&hl=en&cd=1&source=gbs_api#v=onepage&q=Prince&f=false",
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

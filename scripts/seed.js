const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

const books = [
{
    title: "Into the Wild",
    authors: ["Jon Krakauer"],
    description: "In April 1992 a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley. His name was Christopher Johnson McCandless. He had given $25,000 in savings to charity, abandoned his car and most of his possessions, burned all the cash in his wallet, and invented a new life for himself. Four months later, his decomposed body was found by a moose hunter....",
    image: "https://books.google.com/books/content?id=Xk_YAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71HbbfUjr7n6qZGpODR02RfMGkffCVMA8Skwr9Sj0EyRMntd1mi0dMScj-sMt3rlOl7HYdD7BU01pYNeWWHivjOgSuOwROzjBar1AcaF4UACw6RCxzX2_uYwiHppXDgbgeHVkQc",
    link: "https://www.google.com/books/edition/_/Xk_YAAAAMAAJ?hl=en&kptab=overview"
},
{
    title: "Fight Club",
    authors: ["Chuck Palahniuk"],
    description: "Every weekend, in the basements and parking lots of bars across the country, young men with good white-collar jobs and absent fathers take off their shoes and shirts and fight each other barehanded just as long as they have to. Then they go back to those jobs with blackened eyes and loosened teeth and the sense that they can handle anything. Fight club is the invention of Tyler Durden, projectionist, waiter, and dark, anarchic genius, and it's only the beginning of his plans for revenge on a world where cancer support groups have the corner on human warmth. As the narrator of Fight Club puts it: If people thought you were dying, they gave you their full attention. Where does Tyler Durden come from? Why do his violent schemes so capture the troubled, insomniac narrator? What events bring them to the roof of the world's tallest building, wired to explode in ten minutes? What will the end of the millennium feel like? Readers of Chuck Palahniuk's brilliantly apocalyptic and unnerving first novel are going to find out.",
    image: "https://books.google.com/books/content?id=-qgAgg91C9wC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE701EKgQBVcER2ZWKJ40-DcIBAbFSiQe2UsnOv1I5szY1QK8SPlQEKVB3mEPPLD88Iic_fpKBv5_IqwM9hazt4UJD4NlhlG2FOkR2Qp6ky77wmy1_NDasMQbVz82xa7N-Ahw0yv-",
    link: "https://www.google.com/books/edition/_/-qgAgg91C9wC?hl=en"
},
{
    title: "Angels & Demons",
    authors: ["Dan Brown"],
    description: "An ancient secret brotherhood. A devastating new weapon of destruction. An unthinkable target. When world-renowned Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a mysterious symbol-seared into the chest of a murdered physicist-he discovers evidence of the unimaginable: the resurgence of an ancient secret brotherhood known as the Illuminati-the most powerful underground organization ever to walk the earth. The Illuminati has now surfaced to carry out the final phase of its legendary vendetta against its most hated enemy-the Catholic Church. ",
    image: "https://books.google.com/books/content?id=K__fyN2gl9gC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71kD14GzKzK_gfMZmK99dvQlWH5l2e5hAQsSwOeVn_OrTDrZC0VOcYZM2lukFuxNwt7q_HJ_nTv1z_Ay_QmShoO9kmDmlSYuhfIinamgeGEqtVeyf9WAe89hkz9AwRvbnc990Rk",
    link: "https://www.google.com/books/edition/_/K__fyN2gl9gC?hl=en"
},
{
    title: "Goosebumps: Movie Novel",
    authors: ["R. L. Stine"],
    description: "They're baa-ack! Make way for the bestselling children's series of all time! With a fresh new look, GOOSEBUMPS is set to scare a whole new generation of kids. So reader beware--you're in for a scare!",
    image: "https://books.google.com/books/content?id=kFaWBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72OSoK4AV5lLhjnoKvksV1Rp72lvWAvklMR3vraKvwdtlHe7RdPMjacQH_XHEqqxwpauYG06yDSw-zX0vovEe5g9yEcpY-NnE5qhM0r-I92CA1TWWE5LKBftRUokO7x5fKNSK8O",
    link: "https://www.google.com/books/edition/_/kFaWBgAAQBAJ?hl=en",
}
];

db.Book 
    .remove({})
    .then(() => db.Book.collection.insertMany(books))
    .then(data => {
        console.log(data.result.n + " Books Inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
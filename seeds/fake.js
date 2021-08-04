var faker = require("faker");

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomPassword = faker.internet.password(); // random contact card containing many properties

// console.log(randomName, randomEmail, randomPassword);

// console.log(
//   faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")
// );
console.log(faker.fake("Title: {{lorem.word}} Content: {{lorem.paragraph}}"));
console.log(faker.fake("Title: {{lorem.word}} Content: {{lorem.paragraphs}}"));

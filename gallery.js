let fs = require('fs');

let imageFileNames = fs.readdirSync('site/images');

let head = [
  '<!DOCTYPE html>',
  '<html>',
  '<head>',
  '<title>Photo Gallery</title>',
  '<link rel = "stylesheet" href = "css/main.css">',
  '</head>',
  '<body>',
  '<h1>The Photo Gallery</h1>',
];

let imageArray = [];
for (let image of imageFileNames) {
  let imageSyntax = '<img src = "../site/images/' + image + '" alt = "">';
  imageArray.push(imageSyntax);
}

let photo = [
  '<section class = "image">',
];

for (let image of imageArray) {
  photo.push(image);
}
photo.push('</section>');

let foot = [
  '</body>',
  '</html>',
];

let htmlDocument = head.join('\n') + '\n' + photo.join('\n') + '\n' + foot.join('\n');

fs.writeFileSync('./site/index.html', htmlDocument);

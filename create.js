const fs = require('fs');
const path = require('path');

const MIN_NUM = 10; // minimum number for file name
const MAX_NUM = 30; // maximum number for file name
const BASE_DIR = './challenges'; // directory to create files in

// create the directory if it doesn't exist
if (!fs.existsSync(BASE_DIR)) {
  fs.mkdirSync(BASE_DIR);
}

for (let i = MIN_NUM; i <= MAX_NUM; i++) {
  const filename = `day${i}.js`;
  const filepath = path.join(BASE_DIR, filename);
  const content = `// code for day ${i}`;

  fs.writeFile(filepath, content, (err) => {
    if (err) throw err;
    console.log(`File ${filename} created successfully.`);
  });
}
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import * as fs from "fs";
import { type } from "os";

inquirer
  .prompt([
    {
      message: "Please type in your URl.",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_code.png"));

    fs.writeFile('URL_test.txt', url, err => {
        if (err) {
          console.error(err);
        } else {
          console.log("The txt has been saved.");
        }
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

import { readFile, writeFile, appendFile, mkdir, readdir } from "fs/promises";

// reading a file
const readFileContent = async (filePath) => {
  try {
    const data = await readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// readFileContent('./superman.txt')

// create/write a file
const writeToFile = async (filePath, content) => {
  try {
    const data = await writeFile(filePath, content);
    console.log("your content is inserted successfully");
  } catch (error) {
    console.log(error);
  }
};
// writeToFile('./z.php','This is testing file version 2')

// append File
const appendToFile = async (filePath, content) => {
  try {
    await appendFile(filePath, content);
  } catch (error) {
    console.log(error);
  }
};
// appendToFile('./index.dart',' This is my content this is blank')

// make directories
const makedir = async (address) => {
  try {
    await mkdir(address, { recursive: true });
  } catch (error) {
    console.log(error);
  }
};
// makedir('components/about')
// makedir('context/Auth/layout')
// writeToFile("./components/home/Layout.jsx", "This is testing file version 2");

// /components/home/home.jsx

// console.log(readdir('./components'))

const readDir = async (address) => {
  const data = await readdir(address);
  console.log(data);
};

// readDir('./components/home')

import path from "path";
let file = "arijit.pdf";
const value = path.extname(file);
if (value != ".pdf" && value != ".jpg" && value != "png") {
  console.log("you file is not supported");
} else {
  console.log("supported = ", value);
}
// console.log()

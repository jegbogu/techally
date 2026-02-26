// const fs = require('fs')
// const today = new Date();

// const year = today.getFullYear();
// const month = today.getMonth() + 1; // Months are zero-indexed, so we add 1
// const day = today.getDate();
// const hours = today.getHours();
// const minutes = today.getMinutes();
// const seconds = today.getSeconds();
// const milliseconds = today.getMilliseconds();

// // Format the date as a string
// const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${milliseconds.toString().padStart(7, '0')}`;
// console.log(formattedDate)

// const errorCollector  = (error) =>{
//     const log = `{logtimeStamp: ${formattedDate}, application:asacademyApp,  error: ${error}}`
//     return fs.appendFileSync('error.log', log)
// }

// export default errorCollector

const fs = require('fs'); // Fix: 'fs' should be a string
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are zero-indexed, so we add 1
const day = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const milliseconds = today.getMilliseconds();

// Format the date as a string
const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${milliseconds.toString().padStart(7, '0')}`;
console.log(formattedDate);

const errorCollector = (error) => {
    const log = `{logtimeStamp: ${formattedDate}, application:asacademyApp, error: ${error}}\n\n`; // Fix: Add newline character
    return fs.appendFileSync('error.log', log); // Fix: Use appendFileSync instead of writeFileSync
}

module.exports = errorCollector; 

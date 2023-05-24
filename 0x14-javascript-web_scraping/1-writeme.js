const fs = require('fs');

function writeToFile(filePath, stringToWrite) {
    try {
        fs.writeFileSync(filePath, stringToWrite, 'utf-8');
    } catch (error) {
        console.error(error);
    }
}

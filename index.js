const UUID = require('uuid');
const fs = require('fs');

const Directory = "F:\\Memes/Twitter Images/";

const Files = fs.readdirSync(Directory, { withFileTypes: true });

const TwitterImageFiles = Files.filter(Files => Files.isFile()).map(dirent => dirent.name);

TwitterImageFiles.map(async (File) => {
    const NewFileName = UUID.v4();
    const OldFilePrefix = File.split('.')[1];

    await fs.rename(`${Directory}${File}`, `${Directory}${NewFileName}.${OldFilePrefix}`, (Error) => {
        if(Error){
            return console.log(Error);
        };

        console.log(`File successfully renamed: ${NewFileName}.${OldFilePrefix}`);
    });
});
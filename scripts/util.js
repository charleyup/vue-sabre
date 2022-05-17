const fs = require("fs");
const path = require("path");

const ENCODING = "utf-8";

const getFileData = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, ENCODING, (err, data) => {
            if (err) throw err;
            resolve(data);
        });
    });
}

const createFileByTpl = async (tpl, file, obj) => {
    const tplPath = path.join(__dirname, "./__template__", tpl);
    let data = await getFileData(tplPath);
    for(let key in obj) {
        const reg = new RegExp(`{{${key}}}`, "g");
        data = data.replace(reg, obj[key]);
    }
    fs.writeFile(file, data, err => {
        if (err) throw err
    });
}

module.exports = {
    createFileByTpl
}

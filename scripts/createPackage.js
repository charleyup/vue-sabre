const inquirer = require("inquirer");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const config = require("../src/config.json");
const util = require("./util");

const PREFIX = "mt";

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "组件英文名(大驼峰，如TextBox)：",
            validate(value) {
                if (value && value.match(/^[A-Z]/)) {
                    const isRepeat = config.packages.find(item => {
                        return item.name === value;
                    });
                    return isRepeat ? "已存在重名组件" : true;
                } else {
                    return "请使用非空大驼峰命名法，如TextBox";
                }
            }
        },
        {
            type: "input",
            name: "chnName",
            message: "组件中文名(十个字以内)：",
            validate(value) {
                const pass = value && value.length <= 10;
                if (pass) {
                    return true;
                }
                return "不能为空，且不能超过十个字";
            }
        },
        {
            type: "list",
            name: "type",
            message: "请选择组件类型：",
            choices: [
                "component",
                "method",
                "filter",
                "directive"
            ]
        },
        {
            type: "input",
            name: "desc",
            message: "组件描述(五十个字以内)："
        },
        {
            type: "input",
            name: "author",
            message: "组件作者："
        }
    ]).then(answers => {
        init(answers);
    });

function init (opts) {
    // 创建组件目录
    const name = opts.name;
    const nameLc = name.toLowerCase();
    const type = opts.type;
    const destPath = path.join(__dirname, "../src/packages/" + nameLc + "/");
    if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
    }
    const dirPath = path.join(__dirname, `../src/packages/${nameLc}`);
    // 创建Vue文件
    util.createFileByTpl("vue", `${dirPath}/${nameLc}.vue`, { name: nameLc }).then(() => {
        console.log(chalk.green("✔ 成功创建vue文件!"));
    });
    // 创建样式文件
    util.createFileByTpl("less", `${dirPath}/${nameLc}.less`, { name: nameLc }).then(() => {
        console.log(chalk.green("✔ 成功创建样式文件!"));
    });
    // 创建index.js文件
    createIndexJs({ dirPath, name, type });
    // 添加到config.json
    addToJson(opts);
    // 创建markdowm文档
    const docPath = path.join(__dirname, "../docs");
    util.createFileByTpl("doc", `${docPath}/${opts.type}-${nameLc}.md`, opts).then(() => {
        console.log(chalk.green("✔ 成功创建文档文件!"));
    });
}

function createIndexJs ({ dirPath, name, type }) {
    const nameLc = name.toLowerCase();
    let tpl;
    switch (type) {
        case "component":
            tpl = "index_component";
            break;
        case "method":
            tpl = "index_method";
            break;
        default:
            tpl = "index_component";
    }
    util.createFileByTpl(tpl, `${dirPath}/index.js`, {
        name: name,
        nameLc: nameLc
    }).then(() => {
        console.log(chalk.green("✔ 成功创建index.js文件!"));
    });
}

function addToJson (opts) {
    config.packages.push(opts);
    const configPath = path.join(__dirname, "../src/config.json");
    fs.writeFile(configPath, JSON.stringify(config, null, 4), (err) => {
        if (err) throw err;
        console.log(chalk.green("✔ 成功添加到config.json!"));
    });
}

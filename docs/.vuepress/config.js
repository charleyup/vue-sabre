const fs = require("fs");
const path = require("path");

const docPath = [];
const files = fs.readdirSync(path.join(__dirname, "../"));

const docFilter = (reg) => {
    const docPath = [];
    files.forEach(item => {
        if (/.md$/.test(item)) {
            docPath.push(`./${item}`);
        }
    });
    return docPath.filter(item => {
        return reg.test(item);
    })
}

module.exports = {
    title: "Vue-sabre",
    dest: "./website/doc",
    themeConfig: {
        nav: [
            {
                text: "GitLab",
                link: "http://gitlab-vpc.maysatech.com/vcommerce-common/vue-sabre"
            }
        ],
        sidebar: [
            "./",
            ["./快速上手.md", "快速上手"],
            {
                title: "Components",
                children: docFilter(/^.\/component-/)
            },
            {
                title: "Methods",
                children: docFilter(/^.\/method-/)
            },
            {
                title: "Filters",
                children: docFilter(/^.\/filter-/)
            },
            {
                title: "Directive",
                children: docFilter(/^.\/diretive-/)
            }
        ],
        lastUpdated: "上次更新"
    }
}

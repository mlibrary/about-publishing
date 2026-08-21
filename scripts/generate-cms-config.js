const fs = require("fs")
const path = require("path")

const branch = process.env.GATSBY_CMS_BRANCH || "master"

const templatePath = path.resolve(__dirname, "../static/admin/config.yml.template")
const outputPath = path.resolve(__dirname, "../static/admin/config.yml")

const template = fs.readFileSync(templatePath, "utf8")
const output = template.replace("__CMS_BRANCH__", branch)

fs.writeFileSync(outputPath, output)

console.log(`✔ Generated static/admin/config.yml with branch: "${branch}"`)
## About Michigan Publishing
This is the brochureware/about informational website for Michigan Publishing.

It uses Gatsby 5, React 19, Tailwind CSS, Decap CMS, and Netlify hosting.

View it at https://publishing.umich.edu


## 🚀 Quick start

1.  **Use the supported Node.js and npm versions.**

    The required Node.js version is in `.node-version` and `.nvmrc`
    (24.15.0). Use the npm release that ships with it (11.12.1). Netlify reads
    `.node-version` for every deploy.

1.  **Install dependencies.**

    ```sh
    npm ci
    ```

    The Gatsby CLI is installed with the project, so a global `gatsby`
    install is not needed. Run unlisted Gatsby commands with
    `npm exec -- gatsby <command>`.

1.  **Start developing.**

    ```sh
    npm run develop
    ```

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

1.  **Build and preview the production site.**

    ```sh
    npm run clean
    npm run build
    npm run serve
    ```

1.  **Content management**

    Decap CMS is available at `/admin/` and uses the GitHub backend for
    `mlibrary/about-publishing`. The CMS edits the branch given by the
    `GATSBY_CMS_BRANCH` build variable. Netlify sets it to the branch being
    built, so a deploy preview edits its own branch. Local builds default to
    `master`.

1.  **Project notes**

    Project interacts with this API for trending books on front page:
    https://api.altmetric.com/
    https://www.altmetric.com/explorer/outputs?publisher_id%5B%5D=874d100a-8085-4491-a085-7445c912ee93&view=list

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

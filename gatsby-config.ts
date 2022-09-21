import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Långgatorna`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-styled-components`,
    {
      resolve: "react-flexbox-grid",
      options: {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
        include: /flexboxgrid/,
      },
    },
  ],
};

export default config;

/*{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "",
      "spaceId": ""
    }
  }, */

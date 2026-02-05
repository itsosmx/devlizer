import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  `https://eu-west-2.cdn.hygraph.com/content/cmkp86o2s00mp07w900mbhfzu/master`,
);

export async function getBlogPages() {
  try {
    const query = `
    query Pages {
      pagesConnection {
        edges {
			node {
            title
            slug
            posts(last:5, orderBy:publishedAt_DESC) {
              id
              title
              excerpt
              slug
              thumbnail {
                url
              }
            }
          }
        }
      }
    }
    `;

    const data = await client.request(query);

    return data.pagesConnection.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getBlogPost(slug: string) {
  try {
    const query = `
      query Posts {
        post(where: {slug: "${slug}"}) {
          id
          title
          excerpt
          thumbnail {
            url
          }
          content
          publishedAt
          page {
            title
            slug
          }
        }
      }
    `;

    const data = await client.request(query);

    return data.post;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function getBlogPosts() {
  try {
    const query = `
      query Posts {
        posts {
          id
          title
          slug
          excerpt
          thumbnail {
            url
          }
          content
          publishedAt
          page {
            title
            slug
          }
        }
      }
    `;

    const data = await client.request(query);

    return data.posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getBlogPage(slug: string) {
  try {
    const query = `
      query Pages {
        page(where: {slug: "${slug}"}) {
          title
          slug
          posts(orderBy: publishedAt_DESC) {
            id
            title
            slug
            excerpt
            thumbnail {
              url
            }
            content
            publishedAt
            page {
              title
              slug
            }
          }
        }
      }
    `;

    const data = await client.request(query);

    return data.page;
  } catch (error) {
    console.error(error);
    return [];
  }
}

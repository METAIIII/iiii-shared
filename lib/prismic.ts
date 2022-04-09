import * as prismic from '@prismicio/client';

export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPO ?? "";

const endpoint = prismic.getEndpoint(repositoryName);

const client = prismic.createClient(endpoint);

export default client;

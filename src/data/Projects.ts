import {projectType} from '../interfaces/Project';

export const projects = [
  {
    title: 'Electify',
    content:
        `A web app created for creating anonymous elections, voting and sharing results.`,
    link: 'https://electify.manish.codes',
    image: 'electify.jpeg',
    stack: ['TypeScript', 'React', 'NextJS', 'NodeJS', 'Vercel', 'DynamoDB'],
  } as projectType,
  {
    title: 'IEEE Student Branch Website',
    content:
        `Managed Design, Development and Deployment of the site. Built User Authentication using various OAuth services and an implementation of our own. Built Interactive Forms, Dynamic Content delivery and optimization, content upload and management system and cost-effective cloud architecture for deployment.`,
    link: 'https://ieee.iiitm.ac.in',
    image: 'abvieee.jpeg',
    stack: ['JavaScript', 'React', 'NextJS', 'NodeJS', 'Mongo', 'AWS'],
  } as projectType,
];

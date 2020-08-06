import React from 'react';

export default ({ icon }) => {
  switch (icon) {
    case 'aws':
      return <i class='devicon devicon-amazonwebservices-plain-wordmark colored' />;
    case 'react':
      return <i class='devicon devicon-react-original colored' />;
    case 'mongo':
      return <i class='devicon devicon-mongodb-plain-wordmark colored' />;
    case 'postgres':
      return <i class='devicon devicon-postgresql-plain-wordmark colored' />;
    case 'docker':
      return <i class='devicon devicon-docker-plain-wordmark colored' />;
    case 'express':
      return <i class='devicon devicon-express-original-wordmark colored' />;
    case 'javascript':
      return <i class='devicon devicon-javascript-plain colored' />;
    case 'node':
      return <i class='devicon devicon-nodejs-plain-wordmark colored' />;
    case 'sass':
      return <i class='devicon devicon-sass-original colored' />;
    case 'vscode':
      return <i class='devicon devicon-visualstudio-plain-wordmark colored' />;
    default:
      return <h1>Invalid</h1>;
  }
};

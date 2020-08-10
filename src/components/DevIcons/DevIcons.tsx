import React from "react";

export default ({ icon }: { icon: string }) => {
  switch (icon) {
    case "aws":
      return (
        <i className='devicon devicon-amazonwebservices-plain-wordmark colored' />
      );
    case "react":
      return <i className='devicon devicon-react-original colored' />;
    case "mongo":
      return <i className='devicon devicon-mongodb-plain-wordmark colored' />;
    case "postgres":
      return (
        <i className='devicon devicon-postgresql-plain-wordmark colored' />
      );
    case "docker":
      return <i className='devicon devicon-docker-plain-wordmark colored' />;
    case "express":
      return (
        <i className='devicon devicon-express-original-wordmark colored' />
      );
    case "javascript":
      return <i className='devicon devicon-javascript-plain colored' />;
    case "node":
      return <i className='devicon devicon-nodejs-plain-wordmark colored' />;
    case "sass":
      return <i className='devicon devicon-sass-original colored' />;
    case "vscode":
      return (
        <i className='devicon devicon-visualstudio-plain-wordmark colored' />
      );
    default:
      return <h1>Invalid</h1>;
  }
};

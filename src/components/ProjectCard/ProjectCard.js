import React from 'react';
import './ProjectCard.css'
import Tilt from 'react-tilt';

function ProjectCard({title,content,link,image,direction}) {
    return(
        <div className='main' style = {{flexDirection: direction}} >
            <div className='description'>
                <div className='cardText'>
                    <h1>{title}</h1>
                    <h3>{content}</h3>
                    <a href={link} target='_blank' rel="noopener noreferrer">
                        <button>See Live</button>
                    </a>
                </div>
            </div>
            <div className='image'>
            <Tilt className="Tilt" options={{ max : 10, scale: 1 }}  >
                <div className="Tilt-inner">
                <div className='cardImageDiv'>
                    <img 
                        src={require(`../../images/${image}`) }
                        alt=''
                        className = 'cardImage'
                    />
                </div>
                </div>
            </Tilt>
            </div>
        </div>
    )
}

export default ProjectCard;
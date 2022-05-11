// Card.js is a container look with rounded corners, drop shadows and elements

import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    // props.children is a reserve name and the value of this prop will always be the content btw opening and closing tags 
    return <div className={classes}>{props.children}</div>
}

export default Card;
const CharCard = (props) => {

    return (
        <div>
            <img src = {props.image_url} alt='Character'/>
            <h3>Name: {props.name}</h3>
            <p>Role: {props.role}</p>
            <a href={props.url} target='blank' > Bio Link </a>
        </div>
    );
};

export default CharCard;

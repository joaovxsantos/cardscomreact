export const Card = ({ name, title, image, position }) => {
    return (
        <div className="card">
            <div className="icon">
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{title}</p>
            <a href="#" id={position}>Saiba mais</a>
        </div>
    )
}
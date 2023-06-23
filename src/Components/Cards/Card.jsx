

const Card = ({persona}) => {
  return (
    <div>
      <h2>hola {persona.nombre}</h2>
      <h3>Tu color favorito {persona.colorFavorito}</h3>
    </div>
  );
}

export default Card;
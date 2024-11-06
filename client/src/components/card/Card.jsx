import "./Card.css";

export default function Card({ title, text, logo: Logo }) {
  return (
    <>
      <div className="cardcontainer">
        {Logo && <Logo size={40} />}
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </>
  );
}

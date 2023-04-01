import Image from "next/image";

export default function Noticia({ title, theme, image, supportUrl, ulrDescription, p1, p2, p3, p4, p5 }) {
  return (
    <section>
      <h2>{title}</h2>
      <h3>{theme}</h3>
      <Image src={`/images/${image}`} alt={title} width="999" height="999" className="img" />

      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
      <p>{p5}</p>

      <h4>Mais informações:</h4>
      <p>
        <a target="_blank" href={supportUrl}>
          {ulrDescription}
        </a>
      </p>
    </section>
  );
}

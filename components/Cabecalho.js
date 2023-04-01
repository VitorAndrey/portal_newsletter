import Image from "next/image";

export default function Cabecalho({ mes, welcome }) {
  return (
    <header>
      <Image src="/images/logo.png" alt="noticia1" width="999" height="999" className="img" />
      <h2>{mes}</h2>
      <p>{welcome}</p>
    </header>
  );
}

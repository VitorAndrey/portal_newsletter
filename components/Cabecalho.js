import Image from "next/image";

export default function Cabecalho({ mes, welcome }) {
  return (
    <header>
      <Image src="/images/logo.png" alt="logo" width="999" height="999" className="img" priority="true" />
      <h2>{mes}</h2>
      <p>{welcome}</p>
    </header>
  );
}

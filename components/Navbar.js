import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/novembro">Novembro</Link>
      <Link href="/dezembro">Dezembro</Link>
      <Link href="/diadamulher">Dia das mulheres</Link>
      <Link href="/fevereiro">Fevereiro</Link>
      <Link href="/marco">Março</Link>
    </>
  );
}

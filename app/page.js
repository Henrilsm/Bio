export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Henri Moraes</h1>
      <br />
      <img src="/Assets/Minha foto.jpeg" width={348} height={392} />
      <br />
      <br />
      <p style={{ textAlign: "center", maxWidth: 400 }}>
        Oi, me chamo Henri Moraes, tenho 20 anos e nasci em Salvador/BA.
        <br />
        <br />
        Atualmente sou estudante de ciências da computação na Universidade
        Católica de Pernambuco (UNICAP).
      </p>
    </div>
  );
}

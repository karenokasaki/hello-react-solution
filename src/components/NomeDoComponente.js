function NomeDoComponente() {
  // aqui eu posso escrever js puro
  // funções, variáveis, arrays, objs...
  let myName = "Karen";

  // ACIMA DO RETURN -> JAVASCRIPT
  return (
    /* ABAIXO DO RETURN -> HTML */
    <div>
      <h1>Tudo depois do return é HTML</h1>
      <p>
        Caso eu queira acessar alguma coisa do JS. 
        Eu preciso abrir minhas chaves {myName}
      </p>
      <p>Esse é o HTML que irá aparecer onde esse componente for chamado.</p>
    </div>
  );
}

export default NomeDoComponente;



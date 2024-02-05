const nome = window.prompt("Digite seu primeiro nome:");
confirm("Esta correto seu  nome?");
console.log(nome);

const sobreNome = window.prompt("Digite seu Sobre Nome:");
confirm("Esta correto seu Sobre Nome?");
console.log(sobreNome);

const campoDeEstudo = window.prompt("Digite seu campo de estudo:");
confirm("Esta corretocampo de estudo?");
console.log(campoDeEstudo);

const idade = window.prompt("Digite o ano de nacimento");
confirm("Esta correto o ano de nacimento?");
console.log(idade);

alert(
  "Recruta cadastrado com sucesso\n" +
    "\nNome completo:" +
    nome +
    " " +
    sobreNome +
    "\nCampo de estudo:" +
    campoDeEstudo +
    "\nIdade" +
    (2022 - idade)
);

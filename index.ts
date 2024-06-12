interface IPessoa {
  nome: string; // publico
  idade: number; // publico
  getDescricao(): string; // publico
}

class Pessoa implements IPessoa {
  constructor(
    public nome: string,
    public idade: number,
    private email?: string
  ) {}

  public getDescricao(): string {
    if (this.email) {
      return `Nome: ${this.nome}; Idade: ${this.idade}; Email: ${this.email}`;
    } else {
      return `Nome: ${this.nome}; Idade: ${this.idade}; Pessoa não possui email`;
    }
  }
}

const pessoa = new Pessoa("Luciel", 58, "luciel@gmail.com");

console.log("🚀 ~ pessoa:", pessoa.getDescricao());

const pessoaSemEmail = new Pessoa("Fulano", 12);

console.log("🚀 ~ pessoa:", pessoaSemEmail.getDescricao());

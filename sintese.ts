// npm init -y
// npm i typescript --save-dev
// npx tsc --init -> cria o tsconfig.json, usar npx para buscar externamente
// npm i @types/nome-da-extensão --save-dev -> Para fazer o ts reconhecer tipagens de extensões
// npm ts-node-dev --sav-dev -> nodemon do ts
// "tsc arquivo" para compilar ou "ts-node-dev arquivo" para rodar = adicionar no start/dev do package.json

let numeroQualquer: number;
numeroQualquer = 10.5;

let valor: number;
valor = 'frase qualquer'; // não é válido

let fraseLegal = 'Carpe Diem'; // Detecta automaticamente uma string
fraseLegal = 98.5; // não é válido a atribuição do tipo number para um tipo string.

let numberlist: number[ ] = [2, 3, 5, 7]; // Array somente de números

let numberlist2: Array<number> = [2, 3, 5, 7, 11] // Segunda maneira de criar um array de numeros

let array: [string, number];
array = ['Hello', 10];  // Inicialização

enum Cor {
	VERMELHO,
	VERDE,
	AZUL,
}

let cor: Cor = Cor.AZUL; // acessar valores predefinidos de uma constante

let valorDesconhecido: unknown;
valorDesconhecido = true;
valorDesconhecido = 100.0;
valorDesconhecido = 5;
valorDesconhecido = 'Olá Mundo!';
valorDesconhecido = null;
valorDesconhecido = undefined; // variável com seu tipo indefinido

let n: null = null; // variável do tipo nula

function minhaFuncao(): void {
	console.log('Minha Função'); //funções void não retornam valor nenhum, chamadas de procedimentos
}

class Exemplo { 
	// atributos
	// construtor
	// getter e setters
	// outros métodos
} // Classes assim como outras linguagens

// Herança
class ClasseBase {
	nome: string;
	
	constructor(nome: string) {
		this.nome = nome;
	};
	
	print(msg: string = 'Classe Base') {
		console.log(msg);
	};
};

class ClasseHerdeira extends ClasseBase {
	
	constructor(nome: string) {
	 	super(nome);
	};
	
	print(msg: string = 'Classe Herdeira') {
		super.print(msg);
	};

};

// Encapsulamento

class ClasseExemplo {

	private _nome: string;

    constructor(_nome: string){
        this._nome = _nome;
    };
	
	get nome(): string {
		return this._nome;
	};

	set nome(_nome:string) {
		this._nome = _nome;
	};
};

// Abstração

abstract class ClasseAbstrata {
	
	constructor(public nome: string){
	};

    printNome(): void {
        console.log('Nome' + this.nome);
    };

    abstract otherPrint(): void; // deverá ser implementado nas classes filhas
};

class ClasseFilhaAbs extends ClasseAbstrata {

	constructor() {
		super('Classe Filha Abs');
	};

	printNome(): void {
		console.log('Classe Filha Abs');
	};

	otherPrint(): void {
		console.log('Other print method');
	};

};

// Interfaces // Diferença que os métodos e atributos devem ser setados nas classes filhas

interface ClasseInterface {
	atributo1: string;
	atriburo2?: number; // ? significa que é opcional

	print(): void;
};

class ClasseFilha implements ClasseInterface {
	atributo1: string = 'Classe Filha';
	atriburo2?: number = 1;
	
	print() {
	    console.log(this.atributo1);
	};
};
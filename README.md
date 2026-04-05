
# Prática Reactive Forms

<p align="center">
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="120" alt="Angular logo" />
</p>

## Visão Geral

Esta aplicação foi desenvolvida como parte dos estudos do curso de Angular (Udemy), com o objetivo de praticar e consolidar os conhecimentos em **Angular**, **Reactive Forms**, **Angular Material**, **TailwindCSS** e boas práticas de desenvolvimento frontend. O sistema simula um cadastro de usuários, permitindo edição, visualização e manipulação de dados complexos em formulários reativos.

---

## Tecnologias Utilizadas

- **Angular 16+**
- **Angular Material**
- **Reactive Forms**
- **RxJS**
- **SCSS**
- **TailwindCSS**
- **TypeScript**

---

## Funcionalidades

- Listagem e seleção de usuários
- Edição de informações gerais, contatos e dependentes
- Validações reativas e máscaras de input
- Diálogos de confirmação para ações críticas
- Layout responsivo e acessível (mobile first)

---

## Arquitetura & Estrutura

- Componentização modular (cada parte do formulário é um componente)
- Serviços para manipulação de dados e lógica de negócio
- Uso extensivo de **Reactive Forms** para validação, controle e atualização de dados
- Separação de interfaces, enums, tipos e utilitários
- Utilização de Angular Material para experiência de usuário consistente
- Máscaras e validações customizadas para campos sensíveis (CPF, telefone, etc.)

### Estrutura de Pastas

```
src/app/
  components/         # Componentes reutilizáveis e de tela
  enums/              # Enums para tipos e status
  interfaces/         # Interfaces e tipos de dados
  pipes/              # Pipes customizados
  services/           # Serviços de dados e lógica
  types/              # Tipos auxiliares
  utils/              # Funções utilitárias e validadores
```

---

## Como Executar Localmente

1. **Pré-requisitos:**
	- Node.js 18+
	- Angular CLI 16+

2. **Instale as dependências:**
	```bash
	npm install
	```

3. **Rode a aplicação:**
	```bash
	npm start
	```
	Acesse: [http://localhost:4200](http://localhost:4200)

---
<p align="center">
  <b>Desenvolvido para fins educacionais e de prática.</b>
</p>
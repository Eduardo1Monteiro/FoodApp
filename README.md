# 🥘 Foodies

O **Foodies** é uma aplicação web de compartilhamento de receitas desenvolvida como projeto de estudo para explorar as capacidades modernas do **Next.js**. O objetivo foi construir uma plataforma completa, desde o frontend responsivo até a persistência de dados no backend.

## 🎯 Funcionalidades do Projeto

### 1. Navegação e Descoberta
* **Galeria de Receitas:** Visualização em grade de todas as refeições cadastradas pela comunidade.
* **Páginas Dinâmicas:** Cada receita possui sua própria URL única (slug) gerada automaticamente, otimizada para SEO.
* **Design Responsivo:** Interface adaptável para celulares e tablets, incluindo um **menu lateral (Sidebar)** exclusivo para dispositivos móveis e barra de navegação completa para desktop.

### 2. Compartilhamento de Conteúdo
* **Formulário de Criação:** Interface para envio de novas receitas com campos para título, resumo, instruções e autor.
* **Upload de Imagens:** Integração com **Cloudinary** para upload e armazenamento de fotos das receitas na nuvem.
* **Validação Server-Side:** Tratamento de erros e validação de dados (como campos vazios ou formatos inválidos) executados diretamente no servidor via **Server Actions**.

### 3. Backend e Dados
* **Persistência de Dados:** Uso do **Prisma ORM** conectado a um banco de dados **PostgreSQL (Neon)** para salvar e recuperar as receitas.
* **Carregamento Otimizado:** Uso de componentes React Server Components (RSC) para buscar dados diretamente no servidor, garantindo performance e SEO.

---

## 🛠️ Tecnologias Principais

* **Next.js 15** (App Router & Server Actions)
* **TypeScript**
* **Tailwind CSS**
* **Prisma ORM**
* **PostgreSQL (Neon)**
* **Cloudinary**

---

https://food-app-brown-three.vercel.app/

*Este é um projeto de fins educacionais desenvolvido para prática de desenvolvimento Full Stack.*

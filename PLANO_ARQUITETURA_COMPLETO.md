## Portal Jurandir - Marido de aluguel - Marketplace de Serviços

---

## 🎯 VISÃO GERAL DO SISTEMA

Marketplace completo conectando **profissionais de serviços domésticos** com **clientes** que precisam de:
- Reparos elétricos/hidráulicos
- Pintura residencial  
- Jardinagem
- Montagem de móveis
- Pequenos reparos
- E mais serviços manuais

### Modelo de Negócio
- **Profissionais**: Assinatura mensal + 3% comissão por serviço
- **Clientes**: Acesso gratuito
- **Região inicial**: Campinas e São Paulo

---

## 🗂️ ESTRUTURA DE PASTAS

```
Portal Jurandir - Marido de aluguel/
├── 📁 prisma/
│   └── schema.prisma              # 10 models configurados ✅
│
├── 📁 public/
│   ├── 📁 images/
│   │   ├── hero-bg.jpg
│   │   ├── 📁 servicos/
│   │   │   ├── eletrica.jpg
│   │   │   ├── hidraulica.jpg
│   │   │   ├── pintura.jpg
│   │   │   └── jardinagem.jpg
│   │   └── 📁 icons/
│   └── logo.svg
│
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── 📁 (auth)/             # Rotas de autenticação
│   │   │   ├── 📁 login/
│   │   │   │   └── page.tsx       # Tela de login ✅
│   │   │   ├── 📁 register/
│   │   │   │   └── page.tsx       # Tela de registro ✅
│   │   │   ├── 📁 esqueci-senha/
│   │   │   │   └── page.tsx       # Recuperação de senha
│   │   │   └── layout.tsx         # Layout sem navbar
│   │   │
│   │   ├── 📁 (dashboard)/        # Área logada
│   │   │   ├── 📁 profissional/   # Dashboard Profissional
│   │   │   │   ├── page.tsx       # Overview
│   │   │   │   ├── 📁 jobs/
│   │   │   │   │   ├── page.tsx   # Lista de jobs
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── 📁 perfil/
│   │   │   │   │   └── page.tsx   # Editar perfil
│   │   │   │   ├── 📁 portfolio/
│   │   │   │   │   └── page.tsx   # Gerenciar fotos
│   │   │   │   ├── 📁 assinatura/
│   │   │   │   │   └── page.tsx   # Pagamento PIX
│   │   │   │   └── 📁 agenda/
│   │   │   │       └── page.tsx   # Disponibilidade
│   │   │   │
│   │   │   ├── 📁 cliente/        # Dashboard Cliente
│   │   │   │   ├── page.tsx       # Overview
│   │   │   │   ├── 📁 buscar/
│   │   │   │   │   └── page.tsx   # Buscar profissionais
│   │   │   │   ├── 📁 meus-servicos/
│   │   │   │   │   ├── page.tsx   # Jobs solicitados
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── 📁 favoritos/
│   │   │   │       └── page.tsx   # Profissionais favoritos
│   │   │   │
│   │   │   ├── 📁 admin/          # Painel Administrativo
│   │   │   │   ├── page.tsx       # Dashboard
│   │   │   │   ├── 📁 usuarios/
│   │   │   │   │   └── page.tsx   # Gerenciar usuários
│   │   │   │   ├── 📁 pagamentos/
│   │   │   │   │   └── page.tsx   # Aprovar PIX
│   │   │   │   └── 📁 servicos/
│   │   │   │       └── page.tsx   # Categorias
│   │   │   │
│   │   │   ├── layout.tsx         # Layout com sidebar/navbar
│   │   │   └── page.tsx           # Redirecionamento ✅
│   │   │
│   │   ├── 📁 api/                # API Routes
│   │   │   ├── 📁 auth/
│   │   │   │   ├── 📁 register/
│   │   │   │   │   └── route.ts   # Registro de usuários ✅
│   │   │   │   └── 📁 callback/
│   │   │   │       └── route.ts   # Callback Supabase
│   │   │   ├── 📁 profissionais/
│   │   │   │   ├── route.ts       # CRUD profissionais
│   │   │   │   └── 📁 buscar/
│   │   │   │       └── route.ts   # Busca com filtros
│   │   │   ├── 📁 jobs/
│   │   │   │   ├── route.ts       # CRUD jobs
│   │   │   │   └── [id]/
│   │   │   │       └── 📁 status/
│   │   │   │           └── route.ts
│   │   │   ├── 📁 upload/
│   │   │   │   └── route.ts       # Upload Supabase Storage
│   │   │   └── 📁 chat/
│   │   │       └── route.ts       # Socket.io ou REST
│   │   │
│   │   ├── 📁 profissional/       # Perfil público
│   │   │   └── [id]/
│   │   │       └── page.tsx       # Perfil público
│   │   │
│   │   ├── 📁 buscar/             # Busca pública
│   │   │   └── page.tsx           # Busca sem login
│   │   │
│   │   ├── layout.tsx             # Layout raiz
│   │   ├── page.tsx               # LANDING PAGE
│   │   └── globals.css            # Tailwind v4
│   │
│   ├── 📁 components/
│   │   ├── 📁 ui/                 # Componentes base
│   │   │   ├── button.tsx         # Button ✅
│   │   │   ├── input.tsx          # Input ✅
│   │   │   ├── card.tsx           # Card
│   │   │   ├── badge.tsx          # Badge/Tag
│   │   │   ├── avatar.tsx         # Avatar
│   │   │   ├── dialog.tsx         # Modal
│   │   │   ├── select.tsx         # Select
│   │   │   ├── textarea.tsx       # Textarea
│   │   │   └── skeleton.tsx       # Loading
│   │   │
│   │   ├── 📁 layout/
│   │   │   ├── navbar.tsx         # Navbar principal
│   │   │   ├── footer.tsx         # Footer
│   │   │   ├── sidebar.tsx        # Sidebar dashboard
│   │   │   └── mobile-nav.tsx     # Nav mobile
│   │   │
│   │   ├── 📁 maps/
│   │   │   ├── map.tsx            # Mapa Leaflet
│   │   │   ├── marker.tsx         # Marcadores
│   │   │   └── search-map.tsx     # Busca no mapa
│   │   │
│   │   ├── 📁 chat/
│   │   │   ├── chat-window.tsx    # Janela chat
│   │   │   ├── message-list.tsx   # Lista mensagens
│   │   │   ├── message-input.tsx  # Input mensagem
│   │   │   └── chat-list.tsx      # Lista conversas
│   │   │
│   │   ├── 📁 profissional/
│   │   │   ├── profile-card.tsx   # Card busca
│   │   │   ├── portfolio-grid.tsx # Galeria fotos
│   │   │   ├── rating-stars.tsx   # Avaliação 5 estrelas
│   │   │   └── skills-tags.tsx    # Tags habilidades
│   │   │
│   │   ├── 📁 landing/
│   │   │   ├── hero-section.tsx   # Hero
│   │   │   ├── servicos-section.tsx # Serviços
│   │   │   ├── como-funciona.tsx  # Passo a passo
│   │   │   ├── depoimentos.tsx    # Depoimentos
│   │   │   └── cta-section.tsx    # Call to action
│   │   │
│   │   └── 📁 forms/
│   │       ├── login-form.tsx     # Form login
│   │       ├── register-form.tsx  # Form registro
│   │       ├── job-form.tsx       # Form solicitar
│   │       └── profile-form.tsx   # Form perfil
│   │
│   ├── 📁 lib/
│   │   ├── db.ts                  # Prisma client ✅
│   │   ├── supabase.ts            # Supabase client ✅
│   │   ├── utils.ts               # Utilitários ✅
│   │   ├── auth.ts                # Helpers auth
│   │   ├── geolocation.ts         # Geolocalização
│   │   ├── validation.ts          # Zod schemas
│   │   └── constants.ts           # Constantes
│   │
│   ├── 📁 hooks/
│   │   ├── use-auth.ts            # Hook auth
│   │   ├── use-user.ts            # Dados usuário
│   │   ├── use-location.ts        # Geolocalização
│   │   ├── use-chat.ts            # Real-time chat
│   │   └── use-notifications.ts   # Notificações
│   │
│   ├── 📁 actions/
│   │   ├── auth.ts                # Server Actions auth
│   │   ├── profissional.ts        # CRUD profissional
│   │   ├── cliente.ts             # CRUD cliente
│   │   ├── jobs.ts                # CRUD jobs
│   │   ├── upload.ts              # Upload arquivos
│   │   └── admin.ts               # Ações admin
│   │
│   ├── 📁 types/
│   │   └── index.ts               # Tipos globais
│   │
│   └── middleware.ts              # Auth middleware ✅
│
├── 📁 agent/                      # Ag-kit ✅
│   ├── agents/
│   ├── skills/
│   ├── workflows/
│   └── ARCHITECTURE.md
│
├── .env.example                   # Variáveis ambiente ✅
├── package.json                   # Dependências ✅
└── next.config.ts                 # Config Next.js ✅
```

---

## 📄 PÁGINAS - ESPECIFICAÇÃO DETALHADA

### 1️⃣ LANDING PAGE (/)

**Objetivo:** Converter visitantes em usuários

**Seções:**
1. **Hero Section**
   - Headline: "Encontre os melhores profissionais para sua casa"
   - Subheadline: "Reparos, pintura, jardinagem e muito mais"
   - CTA: "Buscar Profissionais" → /buscar
   - CTA: "Ser um Profissional" → /register?type=professional

2. **Serviços** (Grid 6 cards)
   - Eletricista, Hidráulica, Pintura, Jardinagem, Marcenaria, Limpeza

3. **Como Funciona** (3 passos)
   - 1. Busque → 2. Conecte → 3. Avalie

4. **Depoimentos** (3 cards)
   - Foto, nome, serviço, avaliação

5. **Estatísticas**
   - "500+ Profissionais | 2000+ Serviços | 4.8/5 Média"

6. **Call to Action Final**
   - Botões: Buscar Agora / Cadastrar como Profissional

**Componentes:** HeroSection, ServicosSection, ComoFunciona, Depoimentos, StatsSection, CTASection

---

### 2️⃣ BUSCA PÚBLICA (/buscar)

**Funcionalidades:**
- Busca por texto (nome, serviço, bairro)
- Filtros: Tipo serviço, Localização, Avaliação mínima
- Mapa interativo (Leaflet + OpenStreetMap)
- Lista de profissionais em cards
- Paginação

**Layout:**
- Desktop: Sidebar filtros (25%) + Lista (50%) + Mapa (25%)
- Mobile: Tabs (Lista/Mapa), filtros em drawer

**Componentes:** SearchBar, FilterSidebar, ProfessionalCard, MapComponent, Pagination

---

### 3️⃣ PERFIL PÚBLICO (/profissional/[id])

**Seções:**
- Header: Foto, nome, avaliação, botão "Contratar"
- Galeria portfólio (carrossel)
- Bio/descrição
- Serviços oferecidos (tags)
- Localização no mapa
- Avaliações e comentários
- Botão "Iniciar Chat" (se logado)

**Componentes:** ProfileHeader, PortfolioCarousel, ServiceTags, LocationMap, ReviewsList

---

### 4️⃣ DASHBOARD PROFISSIONAL (/dashboard/profissional/*)

#### Overview (/)
- Jobs pendentes (count)
- Jobs em andamento
- Avaliação média
- Próximos serviços
- Status assinatura

#### Jobs (/jobs)
- Lista todos jobs
- Filtros: Pendentes, Aceitos, Em Andamento, Concluídos
- Ações: Aceitar, Recusar, Iniciar, Concluir

#### Perfil (/perfil)
- Form edição dados pessoais
- Upload foto perfil
- Bio/descrição
- Seleção serviços
- Habilidades (tags)

#### Portfolio (/portfolio)
- Upload fotos (max 10)
- Grid fotos com delete
- Descrição cada foto

#### Assinatura (/assinatura)
- Status atual
- Valor mensalidade
- Chave PIX pagamento
- Upload comprovante
- Histórico pagamentos

#### Agenda (/agenda)
- Calendário disponibilidade
- Checkbox por dia da semana
- Horários disponíveis

---

### 5️⃣ DASHBOARD CLIENTE (/dashboard/cliente/*)

#### Overview (/)
- Jobs ativos
- Histórico serviços
- Profissionais favoritos
- Notificações

#### Buscar (/buscar)
- Mesma busca página pública
- Botão "Solicitar" habilitado

#### Meus Serviços (/meus-servicos)
- Lista jobs solicitados
- Status cada um
- Chat com profissional
- Avaliar serviço concluído

#### Favoritos (/favoritos)
- Lista profissionais favoritos
- Remover favoritos

---

### 6️⃣ ADMIN (/dashboard/admin/*)

#### Dashboard (/)
- Estatísticas gerais
- Usuários ativos
- Jobs no mês
- Receita estimada

#### Usuários (/usuarios)
- Lista todos usuários
- Filtros: Tipo, Status
- Ações: Ativar/Desativar, Editar

#### Pagamentos (/pagamentos)
- Lista comprovantes PIX pendentes
- Preview comprovante
- Botões: Aprovar / Rejeitar

#### Serviços (/servicos)
- CRUD categorias serviço
- Ícones, descrições
- Preços sugeridos

---

## 🗄️ DATABASE SCHEMA (Prisma)

```prisma
✅ User              - Usuários (auth Supabase)
✅ Professional      - Perfil profissional
✅ Client            - Perfil cliente  
✅ Service           - Catálogo serviços
✅ Job               - Solicitações serviço
✅ Chat              - Conversas
✅ Message           - Mensagens
✅ Subscription      - Pagamentos/Assinaturas
✅ Review            - Avaliações
✅ Availability      - Disponibilidade
✅ Notification      - Notificações
```

---

## 🔧 APIs E SERVER ACTIONS

### Autenticação
```typescript
POST /api/auth/register     # Cria usuário + perfil
POST /api/auth/callback     # Callback Supabase
Server: login(), logout(), resetPassword()
```

### Profissionais
```typescript
GET  /api/profissionais?filters     # Busca com filtros
GET  /api/profissionais/[id]        # Detalhes
Server: updateProfessionalProfile(), uploadPortfolio(), updateAvailability()
```

### Jobs
```typescript
POST /api/jobs                      # Cria job
GET  /api/jobs                      # Lista jobs usuário
PATCH /api/jobs/[id]/status         # Atualiza status
Server: createJob(), updateJobStatus(), cancelJob()
```

### Upload
```typescript
POST /api/upload                    # Upload Supabase Storage
```

### Chat
```typescript
WebSocket/Socket.io ou REST polling
Server: sendMessage(), getMessages(), markAsRead()
```

---

## 🎨 DESIGN SYSTEM

### Cores
```css
Primary:    #1A1A1A    (Preto carvão)
Secondary:  #FF6B00    (Laranja construção)
Accent:     #FFD700    (Amarelo fita métrica)
Background: #F5F0E8    (Creme/sujeira obra)
Surface:    #FFFFFF    (Branco)
Text:       #212121    (Quase preto)
```

### Tipografia
- Headers: Inter Black (pesado, industrial)
- Body: Inter Regular
- Escala: xs(12), sm(14), base(16), lg(18), xl(20), 2xl(24), 3xl(30), 4xl(36)

### Geometria
- Bordas: 0-2px (sharp, industrial)
- Sombras: Hard shadows, no blur
- Layout: Asymmetric tension (90/10 split)

---

## 📅 TIMELINE IMPLEMENTAÇÃO

### Semana 1: Foundation (5 dias)
- [ ] Configurar Supabase (tabelas + storage)
- [ ] Criar componentes UI base
- [ ] Landing Page completa
- [ ] Página busca pública
- [ ] Perfil público profissional

### Semana 2: Auth & Core (5 dias)
- [ ] Fluxo login/registro completo
- [ ] Dashboard básico (cliente/profissional)
- [ ] CRUD perfil
- [ ] Upload fotos portfólio

### Semana 3: Jobs & Payments (5 dias)
- [ ] Sistema jobs completo
- [ ] Fluxo pagamento PIX
- [ ] Upload comprovante
- [ ] Painel admin pagamentos

### Semana 4: Chat & Polish (5 dias)
- [ ] Sistema chat (Socket.io)
- [ ] Notificações
- [ ] Sistema avaliações
- [ ] Testes e ajustes

---

## 🚀 PRÓXIMOS PASSOS

1. ✅ **Setup inicial** - DONE (Next.js + Prisma + Supabase)
2. ⬜ **Criar landing page** - PRÓXIMO
3. ⬜ **Componentes UI base**
4. ⬜ **Configurar Supabase**
5. ⬜ **Sistema de autenticação**
6. ⬜ **Dashboards**
7. ⬜ **Sistema de jobs**
8. ⬜ **Chat**
9. ⬜ **Deploy**

---

## 💰 CUSTOS: $0 (Open Source)

| Serviço | Plano | Limite |
|---------|-------|--------|
| **Supabase** | Free | 500MB DB, 1GB Storage |
| **Vercel** | Hobby | 100GB bandwidth |
| **Leaflet/OSM** | Free | Ilimitado |
| **Expo** | Free | Ilimitado |

---

**Está tudo claro? Quer que eu comece implementando a Landing Page?** 🚀

# Thikana — Restaurant Website

A full-stack restaurant website for **Thikana**, a South Indian dining experience in London. Built with Next.js 16 on the frontend and an Express + MongoDB API on the backend.

---

## Tech Stack

### Frontend
| Technology | Version |
|---|---|
| Next.js | 16 |
| React | 19 |
| Tailwind CSS | v4 |
| TypeScript | 5 |
| React Hook Form | 7 |
| Zod | 3 |
| shadcn/ui | — |
| Ant Design Icons | 6 |

### Backend
| Technology | Version |
|---|---|
| Node.js | — |
| Express | 5 |
| MongoDB + Mongoose | 9 |
| Helmet | 8 |
| CORS | 2 |
| Morgan | 1 |
| dotenv | 17 |

---

## Project Structure

```
Thikana/
├── frontend/               # Next.js app
│   └── src/
│       ├── app/            # Root layout, globals.css, page.tsx
│       ├── components/ui/  # shadcn/ui components (Button, Card, Badge)
│       ├── features/       # One folder per page section
│       │   ├── navbar/
│       │   ├── hero/
│       │   ├── eat-and-drink/
│       │   ├── why-guests/
│       │   ├── private-dining/
│       │   ├── gallery-location/
│       │   ├── instagram/
│       │   ├── reservation/
│       │   └── footer/
│       └── lib/            # Utility helpers
│
└── backend/                # Express API
    └── src/
        ├── server.js
        ├── config/         # MongoDB connection
        ├── controllers/    # reservationController, contactController
        ├── middleware/     # Error handling
        ├── models/         # Reservation, Contact schemas
        └── routes/         # API route definitions
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)
- A MongoDB connection string (Atlas or local)

---

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Thikana
```

---

### 2. Backend Setup

```bash
cd backend
pnpm install
```

Create a `.env` file inside `backend/`:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?appName=Cluster0
FRONTEND_URL=http://localhost:3000
```

Start the backend dev server:

```bash
pnpm dev
```

The API will be available at `http://localhost:5000`.

---

### 3. Frontend Setup

```bash
cd frontend
pnpm install
```

Create a `.env.local` file inside `frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the frontend dev server:

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api` | Health check |
| `POST` | `/api/reservations` | Submit a table reservation |
| `GET` | `/api/reservations` | Retrieve all reservations |
| `POST` | `/api/contact` | Submit a contact / enquiry form |

### Reservation Payload (`POST /api/reservations`)

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+44 20 1234 5678",
  "guests": 2,
  "date": "2026-04-15",
  "time": "19:30",
  "specialRequests": "Window seat if possible"
}
```

---

## Environment Variables Reference

### Backend (`backend/.env`)

| Variable | Description | Default |
|---|---|---|
| `NODE_ENV` | Runtime environment | `development` |
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | — |
| `FRONTEND_URL` | Allowed CORS origin | `http://localhost:3000` |

### Frontend (`frontend/.env.local`)

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Backend base URL | `http://localhost:5000` |

---

## Scripts

### Frontend

```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

### Backend

```bash
pnpm dev        # Start with nodemon (auto-restart)
pnpm start      # Start with node
```

---

## Page Sections

| Section | Component | Description |
|---|---|---|
| Navbar | `Navbar.tsx` | Sticky pill navbar with mobile hamburger menu |
| Hero | `Hero.tsx` | Full-screen background with CTA buttons |
| Eat & Drink | `EatAndDrink.tsx` | Three-column menu category cards |
| Why Guests | `WhyGuests.tsx` | Feature highlights with oval image cards |
| Private Dining | `PrivateDining.tsx` | Bento grid layout for event bookings |
| Gallery & Location | `GalleryLocation.tsx` | Photo gallery + address, hours, directions |
| Instagram | `Instagram.tsx` | Six-image Instagram grid |
| Reservation | `Reservation.tsx` | Table booking form (React Hook Form + Zod) |
| Footer | `Footer.tsx` | Links, hours, social icons, copyright |

---

## Design System

All brand colours are defined as CSS custom properties in `src/app/globals.css` under `@theme inline` and consumed as Tailwind utilities (e.g. `bg-brand-forest`, `text-brand-gold`).

Key tokens:

| Token | Value |
|---|---|
| `brand-dark` | `#1C1C1A` |
| `brand-cream` | `#F5F0E8` |
| `brand-gold` | `#C9A84C` |
| `brand-forest` | `rgba(40, 75, 63, 1)` |
| `brand-accent` | `#1E3A2F` |
| `brand-warm` | `#FAF7F2` |

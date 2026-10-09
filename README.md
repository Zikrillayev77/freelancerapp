<h1 align="center">💼 Freelancer App</h1>

<p align="center"><img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white" alt="React"> <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite"> <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS"> <img src="https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white" alt="React Router"></p>

<p align="center">Frilans platformasining birinchi versiyasi — ish e'lonlari, filtrlar, statistika va rol tanlash.<br>Kengaytirilgan versiyasi: <a href="https://github.com/Zikrillayev77/freelancer">freelancer</a></p>

## ✨ Imkoniyatlar

- 📋 Ishlar ro'yxati va har bir ish uchun alohida sahifa (`/jobs/:id`)
- ➕ Yangi ish e'loni qo'shish oynasi
- 🧑‍💼 Rol tanlash: ish beruvchi yoki frilanser
- 📊 Statistika sahifasi
- 🌍 Ko'p tilli interfeys (uz / ru / en)
- 🌙 Yorug' / qorong'i rejim
- 🚫 404 sahifasi

## 🛠️ Texnologiyalar

React 19, Vite, Tailwind CSS, React Router, React Hook Form, Zustand, Axios, Lucide ikonlar.

## 📁 Tuzilma

```
src/
├── Components/   # Navbar, Footer, Jobcard, Jobmodal, Rolemodal
├── Pages/        # Home, Jobs, Jobdetail, Stats, Notfound
├── Context/      # ThemeContext
├── App.jsx
└── main.jsx
```

## 🚀 Ishga tushirish

```bash
git clone https://github.com/Zikrillayev77/freelancerapp.git
cd freelancerapp
npm install
npm run dev
```

Brauzerda `http://localhost:5173` manzilini oching.

Production uchun build:

```bash
npm run build
npm run preview
```

## 🌐 Deploy

Netlify'ga ulash kifoya — `netlify.toml` build buyrug'i va SPA yo'naltirishni sozlaydi.

---

👤 **Muallif:** [Abdulloh Zikrillayev](https://github.com/Zikrillayev77)

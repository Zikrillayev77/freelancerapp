import React from "react";
import Stats from "./Stats";
import { useTheme } from "../Context/ThemeContext";
import {
  ArrowRight,
  UserCheck,
  Briefcase,
  Layers,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

const translations = {
  uz: {
    heroTitlePart1: "Loyihangizga mos ",
    heroHighlight: "frilanserni",
    heroTitlePart2: " shu yerdan toping",
    heroSub:
      "Ish beruvchi va frilanserlarni bog'lovchi platforma — topshiriq joylashtiring yoki xizmat taklif qiling.",
    searchPlaceholder: "Xizmatlar, loyihalar qidirish...",
    popular: "Mashhur:",
    needExecutor: "Ijrochi kerakmi?",
    postJob: "+ Topshiriq joylashtirish",
    areYouFreelancer: "Siz frilansermisiz?",
    offerService: "Xizmat taklif qilish",
    tags: [
      "Saytlar yaratish",
      "Logotip va brending",
      "Marketpleylar uchun SMM",
      "Skriptlar va mini-ilovalar",
      "Tarjimalar",
    ],
    stats: [
      {
        title: "12,400+ frilanser",
        desc: "Tekshirilgan profillar va portfoliolar",
      },
      {
        title: "3,800+ loyiha",
        desc: "Muvaffaqiyatli yakunlangan ishlar",
      },
      {
        title: "7 kategoriya",
        desc: "Dizayndan biznes konsaltinggacha",
      },
      {
        title: "Xavfsiz to'lov",
        desc: "Pul ish topshirilgunga qadar himoyalanadi",
      },
    ],
    freelancersTitle: "Tanlangan frilanserlar",
    freelancersSub: "Yuqori baholangan va tezkor javob beradigan ijrochilar.",
    reviewText: "sharh",
  },
  ru: {
    heroTitlePart1: "Найдите подходящего ",
    heroHighlight: "фрилансера",
    heroTitlePart2: " для вашего проекта",
    heroSub:
      "Платформа, соединяющая работодателей и фрилансеров — разместите задание или предложите услугу.",
    searchPlaceholder: "Поиск услуг, проектов...",
    popular: "Популярное:",
    needExecutor: "Нужен исполнитель?",
    postJob: "+ Разместить задание",
    areYouFreelancer: "Вы фрилансер?",
    offerService: "Предложить услугу",
    tags: [
      "Создание сайтов",
      "Логотип и брендинг",
      "SMM для маркетплейсов",
      "Скрипты и мини-приложения",
      "Переводы",
    ],
    stats: [
      {
        title: "12,400+ фрилансеров",
        desc: "Проверенные профили и портфолио",
      },
      {
        title: "3,800+ проектов",
        desc: "Успешно завершенные работы",
      },
      {
        title: "7 категорий",
        desc: "От дизайна до бизнес-консалтинга",
      },
      {
        title: "Безопасная оплата",
        desc: "Средства защищены до сдачи работы",
      },
    ],
    freelancersTitle: "Рекомендуемые фрилансеры",
    freelancersSub: "Исполнители с высоким рейтингом и быстрым ответом.",
    reviewText: "отзывов",
  },
};

const Home = () => {
  const { lang } = useTheme();
  const t = translations[lang] || translations.uz;

  const statIcons = [
    <UserCheck key="1" className="w-5 h-5 text-emerald-500" />,
    <Briefcase key="2" className="w-5 h-5 text-emerald-500" />,
    <Layers key="3" className="w-5 h-5 text-emerald-500" />,
    <ShieldCheck key="4" className="w-5 h-5 text-emerald-500" />,
  ];

  const freelancers = [
    {
      avatar: "DM",
      bg: "bg-emerald-500",
      name: "Dilnoza M.",
      role: "UI/UX dizayner",
      rating: "4.9",
      reviews: "210",
    },
    {
      avatar: "AK",
      bg: "bg-slate-800 dark:bg-slate-700",
      name: "Aziz K.",
      role: "Backend dasturchi",
      rating: "5.0",
      reviews: "164",
    },
    {
      avatar: "SR",
      bg: "bg-emerald-800",
      name: "Sarvinoz R.",
      role: "SMM mutaxassisi",
      rating: "4.8",
      reviews: "96",
    },
    {
      avatar: "JT",
      bg: "bg-emerald-700",
      name: "Javlon T.",
      role: "Video montajyor",
      rating: "4.9",
      reviews: "138",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* 1. Hero Section */}
      <div className="relative bg-gradient-to-b from-[#092219] via-[#0b1b20] to-[#0d161d] text-white pt-20 pb-28 px-4 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {t.heroTitlePart1}
            <span className="text-emerald-400">{t.heroHighlight}</span>
            <br className="hidden md:block" />
            {t.heroTitlePart2}
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-normal">
            {t.heroSub}
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl mx-auto mt-8">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full pl-5 pr-14 py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none shadow-lg text-sm border border-transparent dark:border-slate-800"
            />
            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 rounded-full flex items-center justify-center transition cursor-pointer">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs md:text-sm">
            <span className="text-slate-400 mr-1">{t.popular}</span>
            {t.tags.map((tag, index) => (
              <button
                key={index}
                className="px-3 py-1.5 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-900/40 text-slate-300 hover:text-white transition cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
            <div className="text-center">
              <p className="text-xs text-slate-400 mb-2">{t.needExecutor}</p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 transition shadow-md cursor-pointer">
                {t.postJob}
              </button>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 mb-2">
                {t.areYouFreelancer}
              </p>
              <button className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 transition cursor-pointer">
                <ShoppingBag className="w-4 h-4" /> {t.offerService}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Stats Cards Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.stats.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center mb-4">
                {statIcons[index]}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {item.title}
                </h3>
                <p className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Steps Component */}
      <Stats />

      {/* 4. Featured Freelancers Section */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            {t.freelancersTitle}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            {t.freelancersSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {freelancers.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center text-center hover:shadow-md transition duration-200"
            >
              <div
                className={`w-16 h-16 rounded-full ${item.bg} text-white font-bold flex items-center justify-center text-lg mb-4`}
              >
                {item.avatar}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {item.name}
              </h3>
              <p className="text-slate-400 dark:text-slate-400 text-xs mt-1 mb-3">
                {item.role}
              </p>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                ★ {item.rating} · {item.reviews} {t.reviewText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

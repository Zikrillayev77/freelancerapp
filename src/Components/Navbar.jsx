import React, { useState, useEffect } from "react";
import { useTheme } from "../Context/ThemeContext";
import RoleModal from "./Rolemodal";
import logoblack from "../assets/logoblack.svg";
import logolight from "../assets/logolight.svg";
import { Search, Sun, Moon, Globe, User, Briefcase } from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleDarkMode, lang, toggleLanguage } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem("workk_role");
    if (savedRole) {
      setRole(savedRole);
    } else {
      setIsModalOpen(true);
    }
  }, []);

  const handleSelectRole = (selectedRole) => {
    setRole(selectedRole);
    localStorage.setItem("workk_role", selectedRole);
    setIsModalOpen(false);
  };

  const getRoleText = () => {
    if (!role) return lang === "uz" ? "Rolni tanlang" : "Выберите роль";
    if (role === "mijoz") return lang === "uz" ? "Mijoz" : "Заказчик";
    return lang === "uz" ? "Frilanser" : "Фрилансер";
  };

  const categories = {
    uz: [
      "Dasturlash va IT",
      "Grafika va dizayn",
      "SEO va targ'ib",
      "Ijtimoiy tarmoqlar va SMM",
      "Biznes va rivojlanish",
      "Audio, video va ijodkorlik",
      "Matnlar va tarjimalar",
    ],
    ru: [
      "Программирование и IT",
      "Графика и дизайн",
      "SEO и продвижение",
      "Социальные сети и SMM",
      "Бизнес и развитие",
      "Аудио, видео и творчество",
      "Тексты и переводы",
    ],
  };

  const currentCategories = categories[lang] || categories.uz;

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* LOGO */}
          <div className="flex items-center gap-2 shrink-0">
            <a href="/" className="flex items-center">
              <img
                src={darkMode ? logolight : logoblack}
                alt="WORKK.UZ"
                className="h-8 w-auto object-contain cursor-pointer"
              />
            </a>
          </div>

          {/* SEARCH */}
          <div className="hidden md:flex flex-1 max-w-sm relative">
            <input
              type="text"
              placeholder={
                lang === "uz"
                  ? "Xizmatlar, loyihalar qidirish..."
                  : "Поиск услуг, проектов..."
              }
              className="w-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 pl-9 pr-4 py-2 rounded-xl text-sm border border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          </div>

          {/* MENUS */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
            <a href="#" className="hover:text-emerald-500 transition">
              {lang === "uz" ? "Frilanserlar" : "Фрилансеры"}
            </a>
            <a href="#" className="hover:text-emerald-500 transition">
              {lang === "uz" ? "Mahsulotlar" : "Продукты"}
            </a>
            <a href="#" className="hover:text-emerald-500 transition">
              {lang === "uz" ? "Loyihalar" : "Проекты"}
            </a>
            <a href="#" className="hover:text-emerald-500 transition">
              {lang === "uz" ? "Blog" : "Блог"}
            </a>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <span className="uppercase">
                {lang === "uz" ? "O'ZB" : "РУС"}
              </span>
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition shadow-sm cursor-pointer"
            >
              {role === "frilanser" ? (
                <Briefcase className="w-3.5 h-3.5" />
              ) : (
                <User className="w-3.5 h-3.5" />
              )}
              <span>{getRoleText()}</span>
            </button>
          </div>
        </div>

        {/* CATEGORIES STRIP */}
        <div className="bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200/60 dark:border-slate-800/60 overflow-x-auto transition-colors">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-6 text-xs whitespace-nowrap text-slate-600 dark:text-slate-400">
            {currentCategories.map((cat, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-emerald-500 dark:hover:text-emerald-400 transition"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </header>

      <RoleModal
        isOpen={isModalOpen}
        onSelectRole={handleSelectRole}
        currentLang={lang}
      />
    </>
  );
};

export default Navbar;

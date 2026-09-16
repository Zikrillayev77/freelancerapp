import React from "react";
import { useTheme } from "../Context/ThemeContext";

const translations = {
  uz: {
    title: "Uch qadamda ishni boshlang",
    sub: "Loyiha joylashtirishdan to'lovgacha bo'lgan jarayon shunday ko'rinadi.",
    steps: [
      {
        title: "Loyihangizni e'lon qiling",
        desc: "Nima kerakligini, byudjet va muddatni yozing — bir necha daqiqa vaqt oladi.",
      },
      {
        title: "Mos frilanserni tanlang",
        desc: "Kelgan takliflarni, profil va oldingi ishlarni solishtirib, o'zingizga yoqqanini tanlang.",
      },
      {
        title: "Xavfsiz ishlang va to'lang",
        desc: "To'lov ish topshirilgunga qadar platformada saqlanadi, shundan keyin frilanserga o'tadi.",
      },
    ],
  },
  ru: {
    title: "Начните работу в три шага",
    sub: "Вот как выглядит процесс от публикации проекта до оплаты.",
    steps: [
      {
        title: "Опубликуйте ваш проект",
        desc: "Укажите, что вам нужно, бюджет и сроки — это займет всего несколько минут.",
      },
      {
        title: "Выберите подходящего фрилансера",
        desc: "Сравните поступающие предложения, профили и портфолио, выбрав лучшего.",
      },
      {
        title: "Работайте и платите безопасно",
        desc: "Оплата удерживается на платформе до сдачи работы, после чего переводится фрилансеру.",
      },
    ],
  },
};

const Stats = () => {
  const { lang } = useTheme();
  const t = translations[lang] || translations.uz;

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {t.title}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          {t.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.steps.map((step, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 p-6 rounded-2xl"
          >
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
              {step.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

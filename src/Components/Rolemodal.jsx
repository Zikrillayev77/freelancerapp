import React from "react";
import { UserCheck, Briefcase } from "lucide-react";

const RoleModal = ({ isOpen, onSelectRole, currentLang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl text-center">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          {currentLang === "uz" ? "Xush kelibsiz!" : "Добро пожаловать!"}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          {currentLang === "uz"
            ? "Davom etish uchun platformadagi rolingizni tanlang:"
            : "Выберите вашу роль на платформе, чтобы продолжить:"}
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onSelectRole("mijoz")}
            className="flex flex-col items-center justify-center p-5 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition cursor-pointer group"
          >
            <UserCheck className="w-8 h-8 text-slate-600 dark:text-slate-300 group-hover:text-emerald-500 transition mb-2" />
            <span className="font-semibold text-sm text-slate-700 dark:text-slate-200 group-hover:text-emerald-500">
              {currentLang === "uz" ? "Mijoz" : "Заказчик"}
            </span>
          </button>

          <button
            onClick={() => onSelectRole("frilanser")}
            className="flex flex-col items-center justify-center p-5 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition cursor-pointer group"
          >
            <Briefcase className="w-8 h-8 text-slate-600 dark:text-slate-300 group-hover:text-emerald-500 transition mb-2" />
            <span className="font-semibold text-sm text-slate-700 dark:text-slate-200 group-hover:text-emerald-500">
              {currentLang === "uz" ? "Frilanser" : "Фрилансер"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;

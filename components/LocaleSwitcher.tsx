'use client'

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const locales = ["en", "fr"];
type Locale = (typeof locales)[number];

export const LocaleSwitcher: React.FC = () => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleLocaleChange(newLocale: Locale): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
    setIsDropdownOpen(false)
    console.log(newLocale)
  }

  function toggleDropdown(): void {
    setIsDropdownOpen((prevState) => !prevState);
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
        onClick={toggleDropdown}
      >
        Language
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded shadow-lg">
          <div className="px-4 py-2">
            <p className="text-sm font-medium">Language</p>
          </div>
          <div className="border-t border-gray-200">
            <button
              className={`${locale === "en" ? "font-medium" : ""
                } block w-full px-4 py-2 text-sm text-left text-gray-900`}
              onClick={() => handleLocaleChange("en")}
            >
              English
            </button>
            <button
              className={`${locale === "es" ? "font-medium" : ""
                } block w-full px-4 py-2 text-sm text-left text-gray-900`}
              onClick={() => handleLocaleChange("fr")}
            >
              French
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext"; // adjust path

const ThemeToggleDropdown = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Only light & dark
  const themes = [
    {
      value: "light",
      label: "Light",
      icon: (
        <svg
          className="w-4 h-4 opacity-50"
          fill="currentColor"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8z" />
        </svg>
      ),
    },
    {
      value: "dark",
      label: "Dark",
      icon: (
        <svg
          className="w-4 h-4 opacity-50"
          fill="currentColor"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
        </svg>
      ),
    },
  ];

  const currentTheme = state.darkMode ? "dark" : "light";
  const currentThemeData = themes.find((theme) => theme.value === currentTheme);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectTheme = () => {
    dispatch({ type: "TOGGLE" });
    setIsDropdownOpen(false);
  };

  const CheckIcon = () => (
    <svg
      className="w-4 h-4 ml-auto"
      fill="currentColor"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
    </svg>
  );

  return (
    <div className="fixed bottom-0 right-0 mb-3 mr-3 z-50">
      <div className="relative ">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded flex items-center gap-1 shadow-lg"
          type="button"
          aria-expanded={isDropdownOpen}
          aria-label={`Toggle theme (${currentTheme})`}
          onClick={toggleDropdown}
        >
          <div className="my-1">{currentThemeData?.icon}</div>
          <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 12 12">
            <path d="M6 8L2 4h8l-4 4z" />
          </svg>
        </button>

        {isDropdownOpen && (
          <ul className="absolute bottom-full right-0 mb-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
            {themes.map((theme) => (
              <li key={theme.value}>
                <button
                  type="button"
                  className={`w-full text-left px-4 py-2 text-sm flex items-center hover:bg-gray-100 ${
                    currentTheme === theme.value
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700"
                  }`}
                  onClick={selectTheme}
                >
                  <div className="mr-2">{theme.icon}</div>
                  {theme.label}
                  {currentTheme === theme.value && <CheckIcon />}
                </button>
              </li>
            ))}
          </ul>
        )}

        {isDropdownOpen && (
          <div
            className="fixed inset-0 z-0"
            onClick={() => setIsDropdownOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeToggleDropdown;

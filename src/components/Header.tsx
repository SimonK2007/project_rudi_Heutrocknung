import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/images/logo.png";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "/home", label: "Home" },
    { id: "/dienstleistungen", label: "Dienstleistungen" },
    { id: "/ueber-uns", label: "Über uns" },
    { id: "/puzzle", label: "Spiele" },
    { id: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex-1 flex justify-center">
          <div className="w-[240px] h-[70px] md:w-[480px] md:h-[140px]">
            <img
              src={logo}
              alt="RS-Trocknung Logo"
              className="w-full h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => onNavigate("/")}
            />
          </div>
        </div>

        {/* Navigation Section */}
        <div className="border-t border-gray-200 pt-4 pb-2">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-md transition-colors text-base ${currentPath === item.id
                    ? "text-primary bg-accent font-medium"
                    : "text-gray-700 hover:text-primary hover:bg-gray-100"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden w-full flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${currentPath === item.id
                      ? "text-primary bg-accent font-medium"
                      : "text-gray-700 hover:text-primary hover:bg-gray-100"
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

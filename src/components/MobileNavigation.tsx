import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";


export default function MobileNavigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);

  };

  return (
    <Drawer
      direction="left"
      open={isDrawerOpen}
      onClose={handleCloseDrawer}
      modal={false}
      
      
    >
      <DrawerTrigger asChild>
        <button
          id="toggleSidebarMobile"
          aria-expanded="true"
          aria-controls="sidebar"
          className="lg:hidden text-tertiary-400 cursor-pointer p-1 border-2 border-tertiary-400 rounded-sm  m-4"
          onClick={() => setIsDrawerOpen(true)}
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-section-primary text-white">
        <DrawerHeader className="hidden">
          <DrawerTitle>Navegación</DrawerTitle>
          <DrawerDescription>Menú de navegación</DrawerDescription>
        </DrawerHeader>
        <nav className="flex flex-col gap-8 items-center py-6">
          <img src="/src/icons/AR.Dev.svg" alt="logo" className="w-20 h-20" />
          {/* Links */}
          <ul className="flex flex-col gap-4 items-center">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About me" },
              { href: "#projects", label: "Projects" },
              { href: "#technologies", label: "Technologies" },
              { href: "#soft-skills", label: "Soft Skills" },
              {
                href: "#contact",
                label: "Contact me",
                className:
                  "p-2 w-36 rounded-3xl bg-tertiary-400 text-white font-semibold text-center hover:bg-tertiary-200 transition duration-300 ease-in-out",
              },
            ].map(({ href, label, className }) => (
              <li key={href}>
                <a
                  href={href}
                  className={className}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    setIsDrawerOpen(false);
                    const element = document.getElementById(href.slice(1));
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                  }}
                  
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* Language */}
          <div className="flex flex-col gap-4 items-center mt-4">
            <div className="flex gap-2 items-center">
              <h3>English</h3>
              {/* Simple US flag SVG */}
              <svg width="24" height="16" viewBox="0 0 24 16">
                <rect width="24" height="16" fill="#fff" />
                <rect y="2" width="24" height="2" fill="#b22234" />
                <rect y="6" width="24" height="2" fill="#b22234" />
                <rect y="10" width="24" height="2" fill="#b22234" />
                <rect y="14" width="24" height="2" fill="#b22234" />
                <rect width="8" height="8" fill="#3c3b6e" />
                {/* Stars omitted for simplicity */}
              </svg>
            </div>
            <div className="flex gap-2 items-center">
              <h3>Spanish</h3>
              {/* Simple Spain flag SVG */}
              <svg width="24" height="16" viewBox="0 0 24 16">
                <rect width="24" height="16" fill="#c60b1e" />
                <rect y="4" width="24" height="8" fill="#ffc400" />
              </svg>
            </div>
          </div>
        </nav>
        <DrawerFooter className="mb-20 w-full flex justify-center">
          <DrawerClose className="p-2  rounded-3xl bg-tertiary-400 text-white font-semibold text-center hover:bg-tertiary-200 transition duration-300 ease-in-out">
            Cerrar
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
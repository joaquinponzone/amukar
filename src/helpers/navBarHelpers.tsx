import { TheNavItem, TheNavBar } from "../components/NavBar";

/*
  Cuando pongamos un proyecto en la pagina acordarse de que tenemos que descomentar los proyectos del navBar.
  En lo posible de entrada agregar un proyecto de cada framework (Flutter, React, Swift).
*/

const theNavItemsES: TheNavItem[] = [
  // {
  // label: 'Inicio',
  // href: '/',
  // },
  // {
  // label: 'Blog',
  // href: '/es/blog',
  // },
  {
    label: "Contacto",
    href: "/#contactMe",
  },
  {
    label: "EN",
    href: "/en",
  },
];

const theNavItemsEN: TheNavItem[] = [
  // {
  // label: 'Home',
  // href: '/en',
  // },
  // {
  // label: 'Blog',
  // href: '/blog',
  // },
  {
    label: "Contact",
    href: "/en/#contactMe",
  },
  {
    label: "ES",
    href: "/",
  },
];

export const theNavBarES: TheNavBar = {
  photoURL: "https://i.imgur.com/lpxvarp.png",
  title: "",
  navItems: theNavItemsES,
}; // Usamos esta para la pagina en español.

export const theNavBarEN: TheNavBar = {
  photoURL: "https://i.imgur.com/lpxvarp.png",
  title: "",
  navItems: theNavItemsEN,
}; // Usamos esta para la pagina en ingles.

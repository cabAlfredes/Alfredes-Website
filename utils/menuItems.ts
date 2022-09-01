export interface MenuItem {
  title: string
  url: string
  target: string
}

export const items: Array<MenuItem> = [
  {
    title: 'Home',
    url: '/',
    target: ''
  },
  {
    title: 'La Cabaña',
    url: '/about',
    target: ''
  },
  {
    title: 'Servicios',
    url: '/services',
    target: ''
  },
  {
    title: 'Fotos',
    url: '/gallery',
    target: ''
  },
  {
    title: 'Como Llegar',
    url: '/map',
    target: ''
  },
  {
    title: 'Contacto',
    url: '/contact',
    target: ''
  },
];
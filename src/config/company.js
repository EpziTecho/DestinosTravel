// Company and contact data, shared by Contact, Footer, Terms and the Empresas section.
export const COMPANY = {
  brand: 'Destinos Travel',
  legalName: 'Destinos Travel 5 E.I.R.L.',
  ruc: '20609174626',
  address: 'Jr. Puerto Esperanza 419, San Martín de Porres, Lima, Perú',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jr.+Puerto+Esperanza+419,+San+Mart%C3%ADn+de+Porres,+Lima',
  email: 'destinostravel5eirl@gmail.com',
  phones: ['+51 942 665 919', '+51 993 523 742'],
};

export const telHref = (phone) => `tel:${phone.replace(/\s/g, '')}`;

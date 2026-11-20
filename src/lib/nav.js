import { useEffect } from 'react';

// Pages besides the one-page home. Each is a full page load (no client router);
// vercel.json rewrites these paths to index.html and App.jsx picks the page.
export const ROUTES = {
  home: '/',
  faq: '/preguntas-frecuentes',
  terms: '/terminos',
};

const SITE = 'https://destinos-travel5.vercel.app';

export const isHome = () => window.location.pathname === '/';

/** Scrolls to a home-page section, or loads the home page at that section from another page. */
export function goToSection(hash) {
  if (isHome()) {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', hash);
  } else {
    window.location.assign(`/${hash}`);
  }
}

export const BOOK_SERVICE_EVENT = 'booking:service';

/** Opens the booking form with a service already chosen (BookingSection listens for the event). */
export function bookService(serviceId) {
  window.dispatchEvent(new CustomEvent(BOOK_SERVICE_EVENT, { detail: serviceId }));
  goToSection('#reservar');
}

/** Sets title, description and canonical URL for a sub-page. */
export function usePageMeta({ title, description, path }) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE}${path}`);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${SITE}${path}`);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  }, [title, description, path]);
}

/** Injects a JSON-LD <script> while the component is mounted. */
export function useJsonLd(data) {
  useEffect(() => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(data);
    document.head.appendChild(el);
    return () => el.remove();
  }, [data]);
}

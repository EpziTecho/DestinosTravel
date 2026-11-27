// ─────────────────────────────────────────────────────────────────────────────
// IDIOMAS DE LA WEB
//
// El español es el texto base y vive donde siempre: los textos de la interfaz en
// src/i18n/es.js, y el contenido largo (preguntas, términos, clientes, fotos) en
// src/content/. Cada otro idioma tiene su archivo en src/i18n/locales/<código>.js
// con la misma forma; lo que falte en una traducción se muestra en español.
//
// El idioma elegido se guarda en el navegador y en la URL (?lang=en). Sin elección,
// la web se muestra en español (también para Google).
// ─────────────────────────────────────────────────────────────────────────────
import { Fragment, createElement } from 'react';
import ES from './es.js';

export const LANGS = [
  { code: 'es', short: 'ES', name: 'Español', locale: 'es-PE' },
  { code: 'en', short: 'EN', name: 'English', locale: 'en-US' },
  { code: 'fr', short: 'FR', name: 'Français', locale: 'fr-FR' },
  { code: 'ru', short: 'RU', name: 'Русский', locale: 'ru-RU' },
  { code: 'zh', short: '中文', name: '中文', locale: 'zh-CN' },
];

const STORAGE_KEY = 'lang';
const CODES = LANGS.map((l) => l.code);

function detect() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (CODES.includes(fromUrl)) {
      try {
        localStorage.setItem(STORAGE_KEY, fromUrl);
      } catch {
        /* storage blocked: the URL still carries the choice */
      }
      return fromUrl;
    }
  } catch {
    /* no window (e.g. tests) */
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (CODES.includes(saved)) return saved;
  } catch {
    /* storage blocked */
  }
  return 'es';
}

export const LANG = detect();
export const CURRENT_LANG = LANGS.find((l) => l.code === LANG);
export const LOCALE = CURRENT_LANG.locale;

// Translation for LANG (null for Spanish). Set once by loadLanguage(), before the app is imported.
let dict = null;

/** Loads the visitor's language file. main.jsx waits for it before importing the app. */
export async function loadLanguage() {
  document.documentElement.lang = LANG;
  if (LANG === 'ru') {
    // Cinzel (titles) has no Cyrillic letters; Forum fills them in with a similar classic look.
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Forum&display=swap';
    document.head.appendChild(link);
  }
  if (LANG === 'es') return;
  try {
    dict = (await import(`./locales/${LANG}.js`)).default;
  } catch {
    dict = null; // couldn't download it: show Spanish rather than nothing
  }
}

/** Switches language: remembers it and reloads the page in place. */
export function setLanguage(code) {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* the URL below still carries it */
  }
  const url = new URL(window.location.href);
  if (code === 'es') url.searchParams.delete('lang');
  else url.searchParams.set('lang', code);
  window.history.replaceState(null, '', url);
  window.location.reload();
}

const get = (path, src) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), src);
const fill = (s, vars) => (vars ? s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m)) : s);

/**
 * Interface text by key, e.g. t('booking.send') or t('booking.missing', { list }).
 * Falls back to Spanish (src/i18n/es.js) when the translation lacks the key.
 */
export function t(key, vars) {
  const value = get(key, dict?.ui) ?? get(key, ES);
  if (value == null) return key;
  return typeof value === 'string' ? fill(value, vars) : value;
}

/** Like t(), for text that changes with a number: { one: '{n} maleta', other: '{n} maletas' }. */
const plurals = new Intl.PluralRules(LOCALE);
export function tn(key, n) {
  const forms = t(key);
  return fill(forms[plurals.select(n)] ?? forms.other, { n });
}

/** Like t(), but placeholders can be React elements (links, bold text). Returns an array of nodes. */
export function rich(key, nodes) {
  return t(key)
    .split(/(\{\w+\})/)
    .map((part, i) => {
      const name = part.match(/^\{(\w+)\}$/)?.[1];
      const node = name && name in nodes ? nodes[name] : part;
      return createElement(Fragment, { key: i }, node);
    });
}

/** "a, b y c" in the visitor's language. */
const listFormat = new Intl.ListFormat(LOCALE, { type: 'conjunction' });
export const joinList = (items) => listFormat.format(items);

/**
 * Long content (FAQ, terms…): the Spanish original with the translation laid over it.
 * Arrays are matched by position and objects by key, so missing pieces stay in Spanish
 * and fields the translation doesn't carry (ids, icons, flags) are kept.
 */
export function content(key, es) {
  return overlay(es, dict?.[key]);
}

export function overlay(base, over) {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base) && Array.isArray(over)) return base.map((v, i) => overlay(v, over[i]));
  if (isPlainObject(base) && isPlainObject(over)) {
    const out = { ...base };
    for (const k of Object.keys(over)) out[k] = overlay(base[k], over[k]);
    return out;
  }
  return over;
}

const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

/** Formats a YYYY-MM-DD date in the visitor's language, e.g. "sábado, 21 de noviembre". */
export function formatDay(iso, opts = { weekday: 'long', day: 'numeric', month: 'long' }) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString(LOCALE, { ...opts, timeZone: 'UTC' });
}

/** Space between a title and its highlighted part (Chinese writes them together). */
export const TITLE_GAP = LANG === 'zh' ? '' : ' ';

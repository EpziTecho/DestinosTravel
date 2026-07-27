import { SOCIAL_LINKS } from '../config/socialLinks';

function IconShell({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <IconShell {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M14 8.5h-1.5a1.5 1.5 0 0 0-1.5 1.5v2h3l-.4 2.5H11V19" />
    </IconShell>
  );
}

function InstagramIcon(props) {
  return (
    <IconShell {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </IconShell>
  );
}

function WhatsAppIcon(props) {
  return (
    <IconShell {...props}>
      <path d="M6.5 17.5 5 20l2.6-1.4A7.5 7.5 0 1 0 4.8 14z" />
      <path d="M9.2 9.6c0-.5.4-1 1-1h.6c.3 0 .5.2.6.4l.6 1.5c.1.2 0 .5-.1.6l-.6.7c-.1.1-.1.3 0 .4.4.7 1.3 1.6 2 2 .1.1.3.1.4 0l.7-.6c.2-.1.4-.2.6-.1l1.5.6c.2.1.4.3.4.6v.6c0 .6-.5 1-1 1-3.3 0-6.3-3-6.3-6.3z" />
    </IconShell>
  );
}

function TikTokIcon(props) {
  return (
    <IconShell {...props}>
      <path d="M13 4v10.5a2.5 2.5 0 1 1-2.5-2.5" />
      <path d="M13 4c.3 2 1.8 3.5 3.8 3.8" />
    </IconShell>
  );
}

const ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  tiktok: TikTokIcon,
};

const ORDER = ['facebook', 'instagram', 'whatsapp', 'tiktok'];

export function SocialIcons({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {ORDER.map((key) => {
        const Icon = ICONS[key];
        return (
          <a
            key={key}
            href={SOCIAL_LINKS[key]}
            target="_blank"
            rel="noreferrer"
            aria-label={key}
            className="liquid-glass flex h-9 w-9 items-center justify-center rounded-full text-[#E5E7EB] transition-colors hover:text-[#FFD64B]"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

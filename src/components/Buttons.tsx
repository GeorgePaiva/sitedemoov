import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

type WhatsAppButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  size?: 'md' | 'lg';
};

export function WhatsAppButton({ href, children, className = '', fullWidth, size = 'md' }: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-cta ${size === 'lg' ? 'text-base sm:text-lg px-8 py-5' : 'text-base'} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
      <span>{children}</span>
      <ArrowRight size={18} strokeWidth={2.4} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}

type PrimaryButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
};

export function PrimaryButton({ href, onClick, children, className = '', icon, fullWidth }: PrimaryButtonProps) {
  const cls = `btn-primary text-base ${fullWidth ? 'w-full' : ''} ${className}`;
  if (href)
    return (
      <a href={href} className={cls}>
        {icon}
        <span>{children}</span>
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {icon}
      <span>{children}</span>
    </button>
  );
}

type PhoneButtonProps = { href: string; children: React.ReactNode; className?: string };
export function PhoneButton({ href, children, className = '' }: PhoneButtonProps) {
  return (
    <a href={href} className={`btn-ghost ${className}`}>
      <Phone size={18} strokeWidth={2.2} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

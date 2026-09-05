import { useState, type ReactNode } from 'react';
import './EditorialAccordion.scss';

type EditorialAccordionProps = {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export const EditorialAccordion = ({
  title,
  defaultOpen = false,
  children,
}: EditorialAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`editorial-accordion ${isOpen ? 'editorial-accordion--open' : ''}`}>
      <button
        type="button"
        className="editorial-accordion__header"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        <span className="editorial-accordion__title">{title}</span>
        <svg className="editorial-accordion__chevron" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="editorial-accordion__panel">
        <div className="editorial-accordion__content">
          <div className="editorial-accordion__content-inner">{children}</div>
        </div>
      </div>
    </div>
  );
};

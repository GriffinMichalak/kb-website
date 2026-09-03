import { useState } from 'react';
import './Accordion.scss';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        type="button"
        className="accordion__header"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="accordion__title">{title}</span>
        <span className={`accordion__chevron ${isOpen ? 'accordion__chevron--open' : ''}`}>
          &#9662;
        </span>
      </button>
      {isOpen && <div className="accordion__content">{children}</div>}
    </div>
  );
};

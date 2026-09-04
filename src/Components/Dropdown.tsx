import { useEffect, useRef, useState } from 'react';
import './Dropdown.scss';

type DropdownProps = {
  publication: any;
  setPublication: any;
  options: string[];
};

export const NativeDropdown = ({ publication, setPublication, options }: DropdownProps) => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPinned(!entry.isIntersecting),
      { rootMargin: '-43px 0px 0px 0px', threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const handleChange = (event: any) => {
    setPublication(event.target.value);
  };

  return (
    <>
      <div ref={sentinelRef} />
      <div className={`dropdown-wrapper${isPinned ? ' is-pinned' : ''}`}>
        <select value={publication} onChange={handleChange} className="native-dropdown">
          <option value="">All Publications</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

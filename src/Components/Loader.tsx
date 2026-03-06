import { useState } from 'react';
import '../App.scss';

type LoaderProps = {
  children: React.ReactNode;
  text?: string;
  align?: 'top' | 'center';
};

const Loader = ({ children, text, align }: LoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  const loaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: align === 'top' ? 'flex-start' : 'center',
    justifyContent: 'center',
    position: 'absolute',
    inset: 0,
    minHeight: '150px'
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {!loaded && <div style={loaderStyle}>{text ? text : 'Loading...'}</div>}
      <div
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Loader;

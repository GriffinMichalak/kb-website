import { useState } from 'react';
import '../App.scss';

type LoaderProps = {
  children: React.ReactNode; // the element to render/load
  minHeight?: string | number; // optionally customize the minHeight of the loader
};

const Loader = ({ children }: LoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {!loaded && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            minHeight: '150px'
          }}
        >
          Loading...
        </div>
      )}
      <div
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Loader;

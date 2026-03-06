import '../App.scss';
import Loader from '../Components/Loader';

export const ResumeTab = () => {
  const RESUME_LINK =
    'https://docs.google.com/document/d/1veqBOO1-B9lLvew1TsQuRyw945VmSq5NrqaVjl1BZ9Q/edit?tab=t.0embedded=true';

  return (
    <Loader align="top" text="Loading Resume...">
      <iframe
        src={RESUME_LINK}
        width="100%"
        height="500px"
        title="Google Doc"
        style={{ border: 'none' }}
      ></iframe>
    </Loader>
  );
};

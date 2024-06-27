import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SectionRedirect({ sectionId }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/#${sectionId}`, { replace: true });

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight =
          document.querySelector('header')?.offsetHeight || 0;

        window.scrollTo({
          top: element.offsetTop - headerHeight,
          behavior: 'smooth',
        });
      }
    }, 200);
  }, [navigate, sectionId]);

  return null;
}

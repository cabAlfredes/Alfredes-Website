import { useEffect, useState } from 'react';

export const useMatchMedia = (query) => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches) { setMatches(true) } 

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

import { useEffect} from 'react';

function DisableZoom() {
    useEffect(() => {
      const handleWheel = (e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
        }
      };
  
      const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-'|| e.key==='=')) {
          e.preventDefault();
        }
      };
  
      // Add event listeners when the component mounts
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown, { passive: false });
  
      // Clean up by removing event listeners when the component unmounts
      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    return null;
  }

export default DisableZoom
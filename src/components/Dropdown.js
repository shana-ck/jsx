import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onMenuClick = e => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onMenuClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onMenuClick, {
        capture: true
      });
    };
  }, []);
};

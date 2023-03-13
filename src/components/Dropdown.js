import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  console.log(selected.label);

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

  const menuOptions = options.map(option => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        className="item"
        id="option-item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui inverted menu">
      <div className="ui inverted field">
        <div
          className={`ui inverted dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <div className="ui inverted dropdown item">
            {selected.label ? selected.label : label}
            <i className="dropdown icon" />
          </div>
          <div
            className={`ui menu ${open ? 'visible transition' : ''}`}
            style={{ backgroundColor: '#1b1c1d' }}
          >
            {menuOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

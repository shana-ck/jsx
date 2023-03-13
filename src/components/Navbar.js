import { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'First Project',
    value: 'the first one'
  },
  {
    label: 'Second project',
    value: 'the second one'
  }
];

const Navbar = () => {
  const [selected, setSelected] = useState(options);
  return (
    <div className="ui inverted huge segment">
      <div className="ui top fixed huge inverted menu">
        <a className="item" href="/">
          Home
        </a>
        <a className="item" href="/about">
          About
        </a>
        <a className="item" href="/newpost">
          New Post
        </a>
        <Dropdown
          label="Projects"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </div>
    </div>
  );
};

export default Navbar;

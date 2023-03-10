const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;

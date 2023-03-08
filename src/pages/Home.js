import articles from '../data.js';

const Home = () => {
  return (
    <div className="ui inverted container">
      <h3 className="ui inverted contrast header">header</h3>
      <div className="ui inverted segment">
        <p>text text</p>
        <a href="http://www.google.com">hyperlink!</a>
        <button className="ui button inverted">button!</button>
      </div>
      <div className="ui center aligned grid">
        <div className="ui four cards" id="card-border">
          {articles.map((article, index) => {
            return (
              <div className="ui contrast card" key={index} id="card-content">
                <div
                  className="center aligned contrast content"
                  id="card-content"
                >
                  <div className="header" id="card-data">
                    {article.title}
                  </div>
                  <div className="meta" id="card-data">
                    {article.length}
                  </div>
                  <div className="description" id="card-data">
                    {article.snippet}
                  </div>
                  <div className="extra content" id="card-data">
                    {article.length}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

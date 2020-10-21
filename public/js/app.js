class App extends React.Component {
    render = () => {
      return (
        <div className="page">
            <NavBar />
          <Home />
        </div>
      )
    }
}

class NavBar extends React.Component {
    render = () => {
        return (
            <div className="nav-bar">
                <img></img>
                <ul>
                    <li><a>About Me</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Current Works</a></li>
                </ul>
            </div>
    
        )
    }
}

class Home extends React.Component {
    render = () => {
        return (
            <div className="home-page">
                <div className="banner">
                    <h3>Welcome to your practice journal</h3>
                </div>
            </div>
    
        )
    }
}
  
  
ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
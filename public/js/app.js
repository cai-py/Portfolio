class App extends React.Component {
    state = {
        page: null
    }

    // componentDidMount = () => {
    //     this.setState({
    //         page: 'about'
    //     })
    // }

    about = () => {
        this.setState({
            page: 'about'
        })
    }

    projects = () => {
        this.setState({
            page: 'projects'
        })
    }

    current = () => {
        this.setState({
            page: 'current'
        })
    }

    render = () => {
      return (
        <div className="container">
            <NavBar 
                about={this.about}
                projects={this.projects}
                current={this.current}
            />
            {(this.state.page == 'about')
                ?<About />:null
            }
            {(this.state.page === 'projects')
                ?<Projects />:null
            }
            {(this.state.page === 'current')
                ?<Current />:null
            }
        </div>
      )
    }
}

class NavBar extends React.Component {
    render = () => {
        return (
            <nav className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-blue-500 text-3xl">
                        <a href="/">Cairo Flores</a>
                    </h1>
                </div>
                <ul className='w-64 flex justify-between items-center text-deepRed'>
                    <li onClick={this.props.about}>
                        <a href="#"><span>About Me</span></a>
                    </li>
                    <li onClick={this.props.projects}>
                        <a href="#"><span>Projects</span></a>
                    </li>
                    <li onClick={this.props.current}>
                        <a href="#"><span>Current Works</span></a>
                    </li>
                </ul>
            </nav>
        )
    }
}

class About extends React.Component {
    render = () => {
        return (
            <div className="home-page">
                <h1>About</h1>
            </div>
    
        )
    }
}

class Projects extends React.Component {
    render = () => {
        return (
            <div className="home-page">
                <h1>Projects</h1>
            </div>
    
        )
    }
}

class Current extends React.Component {
    render = () => {
        return (
            <div className="home-page">
                <h1>Current</h1>
            </div>
    
        )
    }
}
  
  
ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
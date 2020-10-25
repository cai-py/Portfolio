class App extends React.Component {
    state = {
        page: null
    }

    componentDidMount = () => {
        this.setState({
            page: 'about'
        })
    }

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
        <div className="container w-11/12 max-w-6xl">
            <NavBar 
                about={this.about}
                projects={this.projects}
                current={this.current}
            />
            <div className="page text-pallet-100 border border-pallet-1100 bg-pallet-900 mt-3">
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
            
        </div>
      )
    }
}

class NavBar extends React.Component {
    render = () => {
        return (
            <nav className="navContainer
                flex justify-between items-center 
                border-2 border-pallet-200 
                mt-4 px-2"
                >
                <div>
                    <h1 className="font-bold text-pallet-100 text-3xl">
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
            <div className="home-page p-4">
                <h1 className="text-2xl">About</h1>
                <article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec leo neque. Integer a tincidunt sem. Maecenas in dolor dictum, facilisis magna eget, tincidunt massa. Nam risus urna, volutpat eget tincidunt vel, congue ut diam. Phasellus eget nisi sagittis, suscipit tellus aliquet, rhoncus dui. Vestibulum sem lectus, dapibus sed dapibus in, ullamcorper vel orci. Aenean gravida egestas dolor eu lacinia. Nulla facilisi. Maecenas in imperdiet ante, at iaculis nunc. Vivamus eu elit quis metus malesuada feugiat. Duis mollis maximus orci, eget bibendum dui varius vitae. Aliquam eget pellentesque enim. Vivamus a erat nec est laoreet porttitor quis vel nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p>Etiam ex nibh, venenatis at porttitor vitae, efficitur vitae odio. Donec consequat risus est, sed dapibus purus egestas quis. Ut quis varius tellus, at consectetur mi. Fusce ipsum enim, blandit ut risus vitae, congue gravida quam. Nam scelerisque diam a pulvinar ullamcorper. Ut vel mollis elit. Fusce eleifend lorem a ante mattis, efficitur interdum augue aliquet. Curabitur ut est blandit, commodo turpis viverra, tempor nisl. Duis in sollicitudin lorem. Aliquam ultricies lectus ex, eu suscipit risus elementum in. Vivamus eu elit vitae massa ultrices pellentesque sit amet fringilla enim. Fusce a viverra urna. Nam nibh quam, vehicula id laoreet non, feugiat eget arcu. Cras lobortis eleifend sollicitudin.</p>
                </article>
                
            </div>
    
        )
    }
}

class Projects extends React.Component {
    render = () => {
        return (
            <div className="projects-page">
                <h1>Projects</h1>
            </div>
    
        )
    }
}

class Current extends React.Component {
    render = () => {
        return (
            <div className="current-page">
                <h1>Current</h1>
            </div>
    
        )
    }
}
  
  
ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
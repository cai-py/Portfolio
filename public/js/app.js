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
        <div className="container">
            <div>Hello world</div>
            <NavBar 
                about={this.about}
                projects={this.projects}
                current={this.current}
            />
            <div className="main-cont-container">
                    <div className="card">
                        <img src="../my_pfp.jpeg" alt="profile picture"></img>
                        <h1>Cairo Flores</h1>
                        <h3>Javascript Developer</h3>
                        <div className="icon">
                            <i className="fab fa-instagram fa-2x"></i>
                            <i className="fab fa-github fa-2x"></i>
                            <i className="fab fa-twitter fa-2x"></i>
                        </div>
                    </div>
                <div className="page text-pallet-100 border-pallet-1100 bg-pallet-900 mt-3">
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
                <h1 className="text-2xl mb-2">About</h1>
                <article>
                   <p>I am a young and aspiring software developer, musician, and a lifelong learner currently living in Los Angeles with my mom and siblings. Two years ago I graduated from high school with a Highschool Certificate of Proficiency, a legal equivalent of a highschool diploma, and set out to find what I was passionate about. </p><br/>
                   <p>During my time away from academia I worked with a program called Kid City Hope Place in Downtown LA. There I would practice with a small jazz band that performed for local fundraisers and church sermons as well as with an activist group that was invited to present at the Alumni of Color Conference at Harvard. During this time I also traveled with a group of animal activists Direct Action Everywhere performing an animal rescue in Guatemala and demonstrations in San Francisco.</p><br/>
                   <p>With 2020 forcing us all inside and performances being abruptly canceled I decided it was time to revisit a past hobby of mine, Programming. That’s when I found General Assembly. With general assembly I was able to learn all of the skills necessary to start building websites. I worked with small teams to create functioning sites that each display a skill that we learned. You can learn more about General Assembly and what they offer <a href="https://generalassemb.ly/">here</a>.</p><br/>
                   <p></p><br/>
                </article>
                
            </div>
    
        )
    }
}

class Projects extends React.Component {
    render = () => {
        return (
            <div className="projects-page p-4">
                <h1 className="text-2xl mb-2">Projects</h1>

                <article className="m-3">
                    <h1 className="text-xl my-2"></h1>
                    <p></p>
                    <a></a> <a></a>
                </article>

                <article className="m-3">
                    <h1 className="text-xl my-2">Re-did-it</h1>
                    <p>This project was a remake of redit that alows you to post pictures with captions.</p>
                    <a href="https://github.com/cai-py/GA-Project-4">github</a> <a href="https://re-did-it-app.herokuapp.com/">Visit Site</a>
                </article>

                <article className="m-3">
                    <h1 className="text-xl my-2">Musique</h1>
                    <p>This project is a music library project that allows the user to add, view, edit, and delete sheet music.</p>
                    <a href="https://github.com/cai-py/GA-Project-2">github</a> <a href="https://dry-brushlands-36744.herokuapp.com/home">Visit Musique</a>
                </article>
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
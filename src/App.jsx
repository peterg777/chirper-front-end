import React from 'react'
import ChirpCard from './components/ChirpCard'
import Navbar from './components/Navbar'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            chirps: [],
            userName: ''

        };
    };

    handleMessageChange = e => this.setState({ message: e.target.value });
    handleuserNameChange = e => this.setState({ userName: e.target.value });

    handleChirpSubmit = e => {
        e.preventDefault();
        const newChirp = this.state.chirps.slice()
        const chirpObj = {
            userName: this.state.userName, message: this.state.message
        }
        newChirp.unshift(chirpObj);
        this.setState({ message: '', chirps: newChirp });

    }
    componentDidMount() {
        this.setState({ 
            chirps: ['Peter Chirped-This quarantine is killing me bro']
        });
    }
    render() {


        return (

            <main className="container">
                <Navbar />
                <section className="row my-2 justify-content-center">
                    <div className="col=md-5">
                        <form className="form-group p-3 shadow rounded">
                            <input value={this.state.userName} onChange={this.handleuserNameChange} type="text" className="form-control" />

                            <input value={this.state.message} onChange={this.handleMessageChange} type="text" className="form-control" />
                            <button onClick={this.handleChirpSubmit} className="btn btn-success">Chirp Details</button>
                        </form>
                    </div>
                </section>
                <section className="row my-3 justify-content-center">
                    {this.state.chirps.map((chirp) => {
                        return (
                            <ChirpCard key={chirp} garbage={chirp} />
                        );
                    })
                    };
                </section>
            </main>


        );
    }
}

export default App;
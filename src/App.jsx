import React from 'react'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            chirps: []

        };
    };

    handleMessageChange = e => this.setState({ message: e.target.value });

    handleChirpSubmit = e => {
        e.preventDefault();
        console.log(this.state.message);
        const newChirp = this.state.chirps.slice()
        newChirp.push(this.state.message);
        this.setState({ message: '', chirps: newChirp });

    }

    render() {
        return (

            <main className="container">
                <nav className="navbar navbar-dark bg-dark">
                    <form className="form-inline">
                        <button className="btn btn-outline-danger" type="button">Chirps</button>
                        <button className="btn btn-outline-warning" type="button">Add Chirps</button>
                    </form>
                </nav>
                <section className="row my-2 justify-content-center">
                    <div className="col=md-5">
                        <form className="form-group p-3 shadow rounded">
                            <label htmlFor="chirp">Milton</label>
                            <input value={this.state.message} onChange={this.handleMessageChange} type="text" className="form-control" />
                            <button onClick={this.handleChirpSubmit} className="btn btn-success">Chirp Details</button>
                        </form>
                    </div>
                </section>
                <section className="row my-2 justify-content-center">
                    <div className="col=md-5">
                        <form className="form-group p-3 shadow rounded">
                            <label htmlFor="chirp">Lumberg</label>
                            <input value={this.state.message} onChange={this.handleMessageChange} type="text" className="form-control" />
                            <button onClick={this.handleChirpSubmit} className="btn btn-primary">Chirp Details</button>
                        </form>
                    </div>
                </section>
            </main>


        );
    }
}

export default App;
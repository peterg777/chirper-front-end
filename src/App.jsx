import React from 'react'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
            chirps: []
            value: ''
        };
    };
    handleMessageChange = e => this.setState({ message: e.target.value });

    handleChirpSubmit = e => {
        e.preventDefault();
        console.log(this.state.message);
        const newChirp = this.state.chirps.slice()
        newChirp.push(this.state.value);
        this.setState({ value:'', chirps: newChirp});
        
    }

    render() {
        return (
            <main className="container">
                <section className="row my-2 justify-content-center">
                    <div className="col=md-8">
                        <form className="form-group p-3 shadow rounded">
                            <label htmlfor="chirp">Chirp</label>
                            <input value={this.state.message} onChange={this.handleMessageChange} type="text" className="form-control" />
                            <button onClick={this.handleChirpSubmit} className="btn btn-danger">The Chirp!</button>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;
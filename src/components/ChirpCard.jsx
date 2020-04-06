import React from 'react'
const ChirpCard = props => {
    return (
        <article className="col-md-7">
            <div className="card my-2 shadow">
                <div className="card-body">
                    <h4 className="card-title text-center my-auto">{props.garbage.userName}</h4>
                    <p className="card-text">{props.garbage.message}</p>
                </div>
            </div>
        </article>
    )
}

export default ChirpCard;
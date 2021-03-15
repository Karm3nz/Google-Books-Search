import React from 'react';
import "./style.css";

function ResultListObj(props) {
    const {title, authors, image, link, description, deleteGoogleBook} = props
    return (
        <div>
            <div className="card" style={{marginTop: "10px"}}>
                <div className="card-header">Saved Books</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title" style={{margin: "10px 0"}}>{title}</h5>
                            <p style={{fontStyle: "italic"}}>Author(s): {authors}</p>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col col-lg-1">
                            <img src={image} style={{maxWidth: "100px"}} alt="jumbotron"/>
                        </div> 
                        <div className="col">
                            <p className="card-text" >{description}</p>
                        </div> 
                    </div>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn" style={{backgroundColor: "#226d56", color: "white"}}>View Book</a>
                    <button onClick={deleteGoogleBook.bind(this, props)} className="btn $teal-500">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ResultListObj;
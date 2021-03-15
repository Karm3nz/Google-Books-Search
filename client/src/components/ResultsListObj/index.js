import React from 'react';
import "./style.css";


class ResultsList extends React.Component {
    state = {
        mounted: false,
        bgColor: "",
        color: "",
        text: "Save"
    }
    
    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        console.log("Mounted!")
    }

    getStyle = () => {
        if (this.state.text === "Save") {
            this.setState({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        }
        else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }   
    }
    onClickFunc = () => {
        this.props.saveGoogleBook(this.props)
        this.getStyle();
    }
    render () {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                                <p style={{fontStyle: "italic"}}>Author(s): {this.props.authors}</p>
                            </div>  
                        </div>
                        <div className="row">
                            <div className="col col-lg-1">
                                <img src={this.props.image} style={{maxWidth: "100px"}} alt="book"/>
                            </div> 
                            <div className="col">
                                <p className="card-text" >{this.props.description}</p>
                            </div> 
                        </div>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{backgroundColor: "#226d56", color: "white"}}>View Book</a>
                        <button onClick={this.onClickFunc} className="btn $teal-500">{this.state.text}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultsList;
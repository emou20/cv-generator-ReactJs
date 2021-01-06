import React, { Component } from 'react';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { connect } from 'react-redux';

class Timeline extends Component {
    state={
        activeEtape1:"",
        activeEtape2:"",
        activeEtape3:"",
        activeEtape4:"",
        etapeCourante:""
    }
    componentWillMount() {
        this.setState({
            etapeCourante:this.props.etape
        })
        if(this.props.etape === "1"){
            this.setState({
                activeEtape1:"active"
            })
        }
        if(this.props.etape === "2"){
            this.setState({
                activeEtape2:"active"
            })
        }
        if(this.props.etape === "3"){
            this.setState({
                activeEtape3:"active"
            })
        }
        if(this.props.etape === "4"){
            this.setState({
                activeEtape4:"active"
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="GlobaleTimeLine">
                    <div className="GlobalbarreTimeline">
                        <div className={`part1BarreTimeline ${this.state.activeEtape1}`} >
                            {this.state.activeEtape1 !== "" ? (
                                <CheckCircleRoundedIcon />
                            ) : (
                                <CheckCircleOutlineRoundedIcon />
                            )
                            }
                            <span>Coordonnées</span>
                        </div>
                        <div className={`part1BarreTimeline ${this.state.activeEtape2}`}>
                            {this.state.activeEtape2 !== "" ? (
                                <CheckCircleRoundedIcon />
                            ) : (
                                <CheckCircleOutlineRoundedIcon />
                            )
                            }
                            <span>Expérience</span>
                        </div>
                        <div className={`part1BarreTimeline ${this.state.activeEtape3}`}>
                            {this.state.activeEtape3 !== "" ? (
                                <CheckCircleRoundedIcon />
                            ) : (
                                <CheckCircleOutlineRoundedIcon />
                            )
                            }
                            <span>Formation</span>
                        </div>
                        <div className={`part1BarreTimeline ${this.state.activeEtape4}`}>
                            {this.state.activeEtape4 !== "" ? (
                                <CheckCircleRoundedIcon />
                            ) : (
                                <CheckCircleOutlineRoundedIcon />
                            )
                            }
                            <span>Compétances</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        etape : state.etape,
    }
}


export default connect(mapStateToProps)(Timeline);
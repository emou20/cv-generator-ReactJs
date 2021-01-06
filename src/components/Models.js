import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import {Card,CardContent  } from '@material-ui/core/';

class Models extends Component {
    state = {
        model:[]
    }

    componentWillMount() {
        axios.get("http://www.json-generator.com/api/json/get/cfGRLYinGW?indent=2")
        .then(res => { 
          this.setState({ 
             model:res.data
          });
        })
    }

    choixModelFunction(model){
        this.props.choixModel(model);
        this.props.history.push('/step1');
    }
    render() {
        console.log(this.state.model)
        return (
            <div className="container globalStep">
                <Card variant="outlined">
                    <CardContent>
                       <h2>Nos modèles</h2>
                       <h5>Choisissez votre modèle préféré</h5>

                        <Container>
                            <Row xs="6">
                                
                                {this.state.model.map((row, index) =>(

                                <Col key={index}>
                                    <div className="boxModel">
                                        <img src={`photosCv/${row.photo}`} alt="model" fluid ></img>
                                        <button className="bttCommencer" onClick={() => this.choixModelFunction(row.id)} >{row.nom}</button>
                                    </div>
                                </Col>
                                ))}
                                
                                
                            </Row>
                        </Container>
                    </CardContent>
                </Card>


                
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        choixModel: (choixModel) => {
            dispatch({ type: "MODEL", choixModel: choixModel, })

        }
    };
};
export default connect("", mapDispatchToProps)(Models);
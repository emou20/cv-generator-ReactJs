import React, { Component } from 'react';
import {Card,CardContent,TextField,withStyles,Grid,IconButton,FormControl,Select,MenuItem,InputLabel} from '@material-ui/core/';
import Timeline from './Timeline';
import { connect } from 'react-redux';
import ControlPointIcon from '@material-ui/icons/ControlPoint';



const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#00c293',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#00c293',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#6c757d',
        },
        '&:hover fieldset': {
          borderColor: '#6c757d',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#00c293',
        },
      },
    },
  })(TextField);


 
const initialState = {
    etape:"4",
    competancesTechnique:[
      {
        intituleCompetance:"",
        niveau:"",
      },
      {
        intituleCompetance:"",
        niveau:"",
      }

    ],
    competancesLogiciel:[
        {
          intituleCompetance:"",
          niveau:"",
        }
  
      ],
    
    
};

class Step4 extends Component {
    state = initialState;


    componentWillMount() {
        this.props.editeEtape(this.state.etape);
    }

        
    handleChange = (index, event) => {
        let values = [...this.state.competancesTechnique]
        values[index][event.target.name] =  event.target.value;
  
  
        this.setState({
            competancesTechnique: values
        });
  
    };
    handleChangeL = (index, event) => {
        let values = [...this.state.competancesLogiciel]
        values[index][event.target.name] =  event.target.value;
  
  
        this.setState({
            competancesLogiciel: values
        });
  
    };
    handleAddClick = () => {
      let values = [...this.state.competancesTechnique]
        values = [...this.state.competancesTechnique, {
            intituleCompetance:"",
            niveau:""
        }];
      this.setState({
        competancesTechnique:values
      });
    };

    handleAddClickL = () => {
        let values = [...this.state.competancesLogiciel]
          values = [...this.state.competancesLogiciel, {
            intituleCompetance:"",
            niveau:""
          }];
        this.setState({
            competancesLogiciel:values
        });
      };
  
    handleSubmit = event => {
      event.preventDefault();
      
          this.props.step4State(this.state);
          this.props.history.push('/step5');
     
  }
  
    render() {
        return (
            <div className="container globalStep">
                <div className="container">
                    <Timeline />
                </div>
                <Card>
                    <CardContent>
                       <h2>Compétance</h2>
                       <h5>Détaillez vos Compétances</h5>
                       <div className="suppresteform">
                       <div className="contentCvcoord">
                          <form className="formCv" onSubmit={this.handleSubmit}>
                            <h4>Compétances Technique</h4>
                            { this.state.competancesTechnique.map((competanceT, index) => (
                                <Card key={index}>
                                    <CardContent> 
                                        <Grid item xs={6}>
                                            <CssTextField helperText="" required name="intituleCompetance" label="Intitulé de compétance" variant="outlined" value={competanceT.intituleCompetance} onChange={event => this.handleChange(index, event)} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl>
                                                <InputLabel id="demo-simple-select-label">Niveau</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="niveau"
                                                value={competanceT.niveau}
                                                onChange={event => this.handleChange(index, event)}
                                                >
                                                <MenuItem value="Excellent">Excellent</MenuItem>
                                                <MenuItem value="Bien">Bien</MenuItem>
                                                <MenuItem value="Moyen">Moyen</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>  
                                    </CardContent>
                                </Card>

                            ))
                                    

                            }
                            <div className="container contBttAdd">
                            <IconButton aria-label="Add" color="primary" onClick={this.handleAddClick}>
                                <ControlPointIcon  fontSize="large" />
                            </IconButton>
                            </div>


                            <h4>Compétances Logiciels</h4>
                            { this.state.competancesLogiciel.map((competanceL, index) => (
                                <Card key={index}>
                                    <CardContent> 
                                        <Grid item xs={6}>
                                            <CssTextField helperText="" required name="intituleCompetance" label="Intitulé de compétance" variant="outlined" value={competanceL.intituleCompetance} onChange={event => this.handleChangeL(index, event)} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl>
                                                <InputLabel id="demo-simple-select-label">Niveau</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="niveau"
                                                value={competanceL.niveau}
                                                onChange={event => this.handleChangeL(index, event)}
                                                >
                                                <MenuItem value="Excellent">Excellent</MenuItem>
                                                <MenuItem value="Bien">Bien</MenuItem>
                                                <MenuItem value="Moyen">Moyen</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>  
                                    </CardContent>
                                </Card>

                            ))
                                    

                            }
                            <div className="container contBttAdd">
                            <IconButton aria-label="Add" color="primary" onClick={this.handleAddClickL}>
                                <ControlPointIcon  fontSize="large" />
                            </IconButton>
                            </div>
                            <button className="bttSuivant">Etape suivante (récapitulation)</button>
                          </form>
                          </div>
                       </div>
                       <div className="suppphotodemo">
                            <img src="photosCv/etape4.png" alt="aaa" />
                       </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}




const mapDispatchToProps = dispatch => {
    return {
        step4State: (step4State) => {
          dispatch({ type: "STEP4", step4State: step4State, })

        },
        editeEtape: (editeEtape) => {
            dispatch({ type: "EDIT_ETAPE", editeEtape: editeEtape, })

        }
    };
};



export default connect("", mapDispatchToProps)(Step4);
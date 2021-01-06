import React, { Component } from 'react';
import {Card,CardContent,TextField,withStyles,Grid, IconButton } from '@material-ui/core/';
import Timeline from './Timeline';
import { connect } from 'react-redux';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
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
    etape:"2",
    experiences:[
      {
        experiencePoste:"",
        experienceEmployeur:"",
        dateDebut:new Date('2014-08-18T21:11:54'),
        dateFin:new Date('2014-08-18T21:11:54'),
      }

    ]
    
    
};

class Step2 extends Component {
    state = initialState;


    componentWillMount() {
        this.props.editeEtape(this.state.etape);

        
    }

     

    handleChange = (index, event) => {
      let values = [...this.state.experiences]
      values[index][event.target.name] =  event.target.value;


      this.setState({
        experiences: values
      });

  };

  handleAddClick = () => {
    let values = [...this.state.experiences]
      values = [...this.state.experiences, {
        experiencePoste:"",
        experienceEmployeur:"",
        dateDebut:new Date('2014-08-18T21:11:54'),
        dateFin:new Date('2014-08-18T21:11:54'),
      }];
    this.setState({
      experiences:values
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    
        this.props.step2State(this.state);
        this.props.history.push('/step3');
   
}


    render() {
     console.log("state ==>", this.state)
        return (
            <div className="container globalStep">
                <div className="container">
                    <Timeline />
                </div>
                <Card>
                    <CardContent>
                       <h2>Expérience</h2>
                       <h5>Détaillez votre expérience professionnelle</h5>
                       <Grid item xs={8}>
                          <form className="formCv" onSubmit={this.handleSubmit}>

                          { this.state.experiences.map((experience, index) => (
                            <Card key={index}>
                                  <CardContent> 
                                      <CssTextField helperText="" required name="experiencePoste" label="Intitulé de poste" variant="outlined" value={experience.experiencePoste} onChange={event => this.handleChange(index, event)} />
                                      <CssTextField helperText="" required name="experienceEmployeur" label="Employeur" variant="outlined" value={experience.experienceEmployeur} onChange={event => this.handleChange(index, event)} />
                                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid item xs={6}>
                                        <TextField
                                            id="date"
                                            label="Date de début"
                                            name="dateDebut"
                                            type="date"
                                            defaultValue={experience.dateDebut}
                                            className=""
                                            InputLabelProps={{
                                              shrink: true,
                                            }}
                                            onChange={event => this.handleChange(index, event)}
                                          />
                                          </Grid>
                                          <Grid item xs={6}>
                                          <TextField
                                              id="date"
                                              label="Date de fin"
                                              name="dateFin"
                                              type="date"
                                              defaultValue={experience.dateFin}
                                              className=""
                                              InputLabelProps={{
                                                shrink: true,
                                              }}
                                              onChange={event => this.handleChange(index, event)}
                                            />
                                          
                                          </Grid>
                                      </MuiPickersUtilsProvider>  
                                  </CardContent>
                                </Card>

                          ))
                                

                          }
                          <div className="container contBttAdd">
                          <IconButton aria-label="Add" color="primary" onClick={this.handleAddClick}>
                            <ControlPointIcon  fontSize="large" />
                          </IconButton>
                          </div>
                          <button className="bttSuivant">Etape suivante</button>
                          </form>
                       </Grid>
                       <Grid item xs={4}>
                                <img src="photosCv/etape2.png" alt="aaa" />
                       </Grid>
                    </CardContent>
                </Card>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        step2State: (step2State) => {
          dispatch({ type: "STEP2", step2State: step2State, })

        },
        editeEtape: (editeEtape) => {
            dispatch({ type: "EDIT_ETAPE", editeEtape: editeEtape, })

        }
    };
};



export default connect("", mapDispatchToProps)(Step2);
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
    etape:"3",
    formations:[
      {
        intituleFormation:"",
        etablissementFormation:"",
        anneeFormation:new Date('2014-08-18T21:11:54')
      }

    ]
    
    
};

class Step3 extends Component {
    state = initialState;


    componentWillMount() {
        this.props.editeEtape(this.state.etape);
    }

        
    handleChange = (index, event) => {
        let values = [...this.state.formations]
        values[index][event.target.name] =  event.target.value;
  
  
        this.setState({
            formations: values
        });
  
    };
  
    handleAddClick = () => {
      let values = [...this.state.formations]
        values = [...this.state.formations, {
          intituleFormation:"",
          etablissementFormation:"",
          anneeFormation:new Date('2014-08-18T21:11:54')
        }];
      this.setState({
        formations:values
      });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      
          this.props.step3State(this.state);
          this.props.history.push('/step4');
     
  }
  
    render() {
        return (
            <div className="container globalStep">
                <div className="container">
                    <Timeline />
                </div>
                <Card>
                    <CardContent>
                       <h2>Formation</h2>
                       <h5>Détaillez vos formations</h5>
                       <Grid item xs={8}>
                          <form className="formCv" onSubmit={this.handleSubmit}>

                          { this.state.formations.map((formation, index) => (
                            <Card key={index}>
                                  <CardContent> 
                                      <CssTextField helperText="" required name="intituleFormation" label="Intitulé de formation" variant="outlined" value={formation.intituleFormation} onChange={event => this.handleChange(index, event)} />
                                      <CssTextField helperText="" required name="etablissementFormation" label="Etablissement" variant="outlined" value={formation.etablissementFormation} onChange={event => this.handleChange(index, event)} />
                                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid item xs={6}>
                                        <TextField
                                            id="date"
                                            label="Année de formation"
                                            name="anneeFormation"
                                            type="date"
                                            defaultValue={formation.anneeFormation}
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
                                <img src="photosCv/etape3.png" alt="aaa" />
                       </Grid>
                    </CardContent>
                </Card>
            </div>
        )
    }
}




const mapDispatchToProps = dispatch => {
    return {
        step3State: (step3State) => {
          dispatch({ type: "STEP3", step3State: step3State, })

        },
        editeEtape: (editeEtape) => {
            dispatch({ type: "EDIT_ETAPE", editeEtape: editeEtape, })

        }
    };
};



export default connect("", mapDispatchToProps)(Step3);
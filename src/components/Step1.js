import React, { Component } from 'react';
import {Card,CardContent,TextField,withStyles,Grid  } from '@material-ui/core/';
import Timeline from './Timeline';
import { connect } from 'react-redux';
import axios from 'axios';



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
    etape:"1",
    urlImage:"photosCv/defaultPhoto.png",
    fileChanged:false,
    file:null,
    nomPrenom: "",
    fonction: "",
    Tel: "",
    mail: "",
    dateNaissance: "",
    adresse: "",
    presentation: "",

    nomPrenomError: "",
    fonctionError: "",
    TelError: "",
    mailError: "",
    dateNaissanceError: "",
    adresseError: "",
    presentationError: "",
    urlImageError:"",

    nomPrenomErrorEtat: false,
    fonctionErrorEtat: false,
    TelErrorEtat: false,
    mailErrorEtat: false,
    dateNaissanceErrorEtat: false,
    adresseErrorEtat: false,
    presentationErrorEtat: false,

    redirection: false,
    token:"",


};

class Step1 extends Component {
    
    state = initialState;

    componentWillMount() {
        this.props.editeEtape(this.state.etape);
       
    }

   handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });

    };

    onChangeImg = event => {
        this.setState({
            fileName: event.target.files[0].name,
            file: event.target.files[0]
        });
    }


    validate = () => {

        let nomPrenomError = "";
        let fonctionError = "";
        let TelError = "";
        let mailError = "";
        let dateNaissanceError = "";
        let adresseError = "";
        let presentationError = "";
        let urlImageError = "";

        let nomPrenomErrorEtat = false;
        let fonctionErrorEtat = false;
        let TelErrorEtat = false;
        let mailErrorEtat = false;
        let dateNaissanceErrorEtat = false;
        let adresseErrorEtat = false;
        let presentationErrorEtat = false;

        if (!this.state.nomPrenom) {
            nomPrenomError = "Le champ (Nom et prénom) est vide !";
            nomPrenomErrorEtat = true
        }

        if (!this.state.urlImage) {
            urlImageError = "Vous n'avais pas importé une photo de vous !";
        }
        if (!this.state.fonction) {
            fonctionError = "Le champ date de naissance est vide !";
            fonctionErrorEtat = true
        }
        if (!this.state.Tel) {
            TelError = "Le champ Téléphone est vide !";
            TelErrorEtat = true
        }


        if (!this.state.mail) {
            mailError = "Le champ Email est vide !";
            mailErrorEtat = true;
        } else {
            if (!this.state.mail.includes("@")) {
                mailError = "invalid email";
                mailErrorEtat = true;
            }
        }
        if (!this.state.dateNaissance) {
            dateNaissanceError = "Le champ date de naissance est vide !";
            dateNaissanceErrorEtat = true;
        }

        if (!this.state.adresse) {
            adresseError = "Le champ adresse est vide !";
            adresseErrorEtat = true;
        }

        if (!this.state.presentation) {
            presentationError = "Le champ presentation est vide !";
            presentationErrorEtat = true;
        }
 

        if (nomPrenomError || fonctionError || TelError || mailError || dateNaissanceError || adresseError || presentationError || nomPrenomErrorEtat || fonctionErrorEtat || TelErrorEtat || mailErrorEtat || dateNaissanceErrorEtat || adresseErrorEtat || presentationErrorEtat || urlImageError) {
            this.setState({ nomPrenomError, fonctionError, TelError, mailError, dateNaissanceError, adresseError, presentationError, nomPrenomErrorEtat, fonctionErrorEtat, TelErrorEtat, mailErrorEtat, dateNaissanceErrorEtat, adresseErrorEtat, presentationErrorEtat, urlImageError });
            return false;
        }
        return true;
    };

    handleSubmitImg () {
            const data = new FormData();
            data.append('file', this.state.file);

            let url = "http://localhost/uploadAPI/uploadImg.php";

            const config = {     
                headers: { 'content-type': 'multipart/form-data', 'Content-Type': 'application/json',"X-Requested-With": "XMLHttpRequest",
                'Accept': 'application/json' }
            }
            axios.post(url, data, config)
            .then(res => { 
                // then print response status
                
                this.setState({
                    urlImage: res.data,
                    fileChanged: true
                })
            })

            
        }

    

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.props.step1State(this.state);
            this.props.history.push('/step2');
        }
    }



    render() {

        const { nomPrenom,fonction, dateNaissance, Tel, mail, adresse, presentation, nomPrenomError,fonctionError,TelError,mailError,dateNaissanceError,adresseError,presentationError, nomPrenomErrorEtat,fonctionErrorEtat,TelErrorEtat,mailErrorEtat,dateNaissanceErrorEtat,adresseErrorEtat,presentationErrorEtat, urlImage, urlImageError,fileChanged} = this.state;
        
        return (
            <div className="container globalStep">
                <div className="container">
                    <Timeline />
                </div>
                <Card variant="outlined">
                    <CardContent>
                       <h2>Coordonnées</h2>
                       <h5>Indiquez vos coordonnées afin que les employeurs puissent vous contacter</h5>


                       <Grid item xs={8}>
                       <div className="contentCvcoord">
                           <div className="contentPhotoCoord">
                           <Card variant="outlined">
                                <CardContent>
                                    {!fileChanged ?(
                                        <img src={urlImage} className="photoModel rounded-circle" alt="taswirti" />
                                    ):(
                                        <img src={`http://localhost/uploadAPI/${urlImage}`} className="photoModel rounded-circle" alt="taswirti" />
                                    )

                                    }
                                   
                                   <span className="errorPhoto">{urlImageError}</span>
                                   
                                   <input
                                        type='file'
                                        className='custom-file-input_a'
                                        id='customFile'
                                        onChange={this.onChangeImg}
                                    />    
                                        <button className="bttUploadPhoto" onClick={()=>this.handleSubmitImg()}>Télécharger la photo</button>
                                
                                   
                                </CardContent>
                            </Card>
                           </div>
                           <div className="contentResteFormCoord">
                           <Card variant="outlined">
                                <CardContent>
                                    <form className="formCv" onSubmit={this.handleSubmit}> 
                                        <CssTextField  error={nomPrenomErrorEtat} helperText={nomPrenomError} required name="nomPrenom" label="Nom et Prénom" variant="outlined" value={nomPrenom} onChange={this.handleChange} />
                                        <CssTextField error={fonctionErrorEtat} helperText={fonctionError} required name="fonction" label="Votre fonction" variant="outlined"  value={fonction} onChange={this.handleChange}/>
                                        <CssTextField error={TelErrorEtat} helperText={TelError} required name="Tel" label="Votre numéro de téléphone" variant="outlined"  value={Tel} onChange={this.handleChange}/>
                                        <CssTextField error={mailErrorEtat} helperText={mailError} required name="mail" label="Votre E-mail" variant="outlined"  value={mail} onChange={this.handleChange}/>
                                        <CssTextField error={dateNaissanceErrorEtat} helperText={dateNaissanceError} required name="dateNaissance" label="Votre date de naissance" variant="outlined"  value={dateNaissance} onChange={this.handleChange}/>
                                        <CssTextField error={adresseErrorEtat} helperText={adresseError} required multiline name="adresse" label="Votre Adresse" variant="outlined"  value={adresse} onChange={this.handleChange}/>
                                        <CssTextField error={presentationErrorEtat} helperText={presentationError} required multiline name="presentation" label="Votre Présentation" variant="outlined"  value={presentation} onChange={this.handleChange}/>
                                        
                                        <button className="bttSuivant">Etape suivante</button>
                                    </form>
                                    
                                </CardContent>
                            </Card>
                           </div>
                       </div>
                       </Grid>
                       <Grid item xs={4}>
                                <img src="photosCv/etape1.png" alt="aaa" />
                       </Grid>

                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        step1State: (step1State) => {
            dispatch({ type: "STEP1", step1State: step1State, })

        },
        editeEtape: (editeEtape) => {
            dispatch({ type: "EDIT_ETAPE", editeEtape: editeEtape, })

        }
    };
};



export default connect("", mapDispatchToProps)(Step1);
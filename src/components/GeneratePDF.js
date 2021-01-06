import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LocalPhone, MailOutline, Room } from '@material-ui/icons';
import domToPdf from 'dom-to-pdf';


class GeneratePDF extends Component {


    generatePdf = () => {

        const element = document.querySelector('.pdfPost');
    
        const options = {
          filename: "test.pdf",
        };
    
        return domToPdf(element, options, () => {
          // callback function
        });
      }
    render() {
        return (
            <div className="container globalStep">
               <div className="pdfPost">
                    <div className="ConteInfosPerso">
                           <div className="contImg">
                               <img src={`/${this.props.urlImage}`}  className="photoModel rounded-circle" alt="01" />
                           </div>
                           <div className="contResteInfosP">
                               <div className="nomPersonne">{this.props.nomPrenom}</div>
                               <div className="fonctionPersonne">{this.props.fonction}</div>
                               <div className="PresentationPersonne">{this.props.presentation}</div>
                           </div>
                       </div>
                       <div className="contCoordonnee">
                           <div className="boxTel "><LocalPhone /> {this.props.Tel}</div>
                           <div className="boxEmail"><MailOutline /> {this.props.mail}</div>
                           <div className="boxAdress"><Room /> {this.props.adresse}</div>
                       </div>
                       <div className="contCompetances">
                           <div className="conpetanceLogiciels">
                               <div className="titreBlockCompt">Compétance Logiciels</div>
                               { this.props.competancesLogiciel.map((competanceL, index) => (
                               <div className="ligneCompt" key={index}>
                                    <div className="titreCompt">{competanceL.intituleCompetance}</div>
                                    <div className="niveauCompt">{competanceL.niveau}</div>
                               </div>
                               ))}
                               
                           </div>
                           <div className="conpetanceTechniques">

                           <div className="titreBlockCompt">Compétance Logiciels</div>
                               { this.props.competancesTechnique.map((competanceT, index) => (
                               <div className="ligneCompt" key={index}>
                                    <div className="titreCompt">{competanceT.intituleCompetance}</div>
                                    <div className="niveauCompt">{competanceT.niveau}</div>
                               </div>
                               ))}
                           </div>
                       </div>
                       <div className="contExperience">
                            <div className="titreBlockCompt">Expérience professionnelle</div>
                            { this.props.experiences.map((experience, index) => (
                           <div className="ligneExperience" key={index}>
                               <div className="dateExp">{experience.dateDebut} / {experience.dateFin}</div>
                               <div className="resteExp">
                                   <div className="posteExp">{experience.experiencePoste}</div>
                                   <div className="EmplyeurExp">{experience.experienceEmployeur}</div>
                               </div>
                           </div>
                           ))}
                       </div>

                       <div className="contExperience">
                            <div className="titreBlockCompt">Formation</div>
                            { this.props.formations.map((formation, index) => (
                           <div className="ligneExperience" key={index}>
                               <div className="dateExp">{formation.anneeFormation} </div>
                               <div className="resteExp">
                                   <div className="posteExp">{formation.intituleFormation}</div>
                                   <div className="EmplyeurExp">{formation.etablissementFormation}</div>
                               </div>
                           </div>
                           ))}
                       </div>  
                </div>


               
                
                        <div className="container contbttGeneratePdf">
                        <button onClick={this.generatePdf}  className="bttSuivant">Générer un pdf</button>
                        </div>
                     

            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        urlImage:state.urlImage,
        nomPrenom: state.nomPrenom,
        fonction: state.fonction,
        Tel: state.Tel,
        mail: state.mail,
        dateNaissance: state.dateNaissance,
        adresse: state.adresse,
        presentation: state.presentation,
        experiences:state.experiences,
        formations:state.formations,
        competancesTechnique:state.competancesTechnique,
        competancesLogiciel:state.competancesLogiciel,
    }
}

export default connect(mapStateToProps)(GeneratePDF);
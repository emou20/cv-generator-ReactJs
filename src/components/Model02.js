import React, { Component } from 'react'
import { LocalPhone, MailOutline, Room } from '@material-ui/icons';
import { connect } from 'react-redux';

class Model02 extends Component {
    render() {
        return (
            <div>
                <div className="Post">

                    <div className="leftColMod2">
                        <div className="ConteInfosPerso">
                           <div className="contImgMod2">
                               <img src={`http://localhost/uploadAPI/${this.props.urlImage}`}   className="photoModel rounded-circle" alt="01" />
                           </div>
                           
                       </div>
                       <div className="contCoordonneeMod2">
                           <div className="boxTelMod2 "><LocalPhone /> {this.props.Tel}</div>
                           <div className="boxEmailMod2"><MailOutline /> {this.props.mail}</div>
                           <div className="boxAdressMod2"><Room /> {this.props.adresse}</div>
                       </div>

                       <div className="contCompetancesMod2">
                           <div className="conpetanceLogicielsMod2">
                               <div className="titreBlockCompt">Compétance Logiciels</div>
                               { this.props.competancesLogiciel.map((competanceL, index) => (
                               <div className="ligneCompt" key={index}>
                                    <div className="titreComptMod2">{competanceL.intituleCompetance}</div>
                                    <div className="niveauComptMod2">{competanceL.niveau}</div>
                               </div>
                               ))}
                               
                           </div>
                           <div className="conpetanceTechniquesMod2">

                           <div className="titreBlockCompt">Compétance Technique</div>
                               { this.props.competancesTechnique.map((competanceT, index) => (
                               <div className="ligneCompt" key={index}>
                                    <div className="titreComptMod2">{competanceT.intituleCompetance}</div>
                                    <div className="niveauComptMod2">{competanceT.niveau}</div>
                               </div>
                               ))}
                           </div>
                       </div>


                    </div>

                    <div className="rightColMod2">
                        <div className="contResteInfosP">
                               <div className="nomPersonne">{this.props.nomPrenom}</div>
                               <div className="fonctionPersonne">{this.props.fonction}</div>
                               <div className="PresentationPersonne">{this.props.presentation}</div>
                        </div>
                       
                       <div className="contExperience">
                            <div className="titreBlockCompt">Expérience professionnelle</div>
                            { this.props.experiences.map((experience, index) => (
                           <div className="ligneExperience" key={index}>
                               <div className="dateExpMod2">{experience.dateDebut} / {experience.dateFin}</div>
                               <div className="resteExpMod2">
                                   <div className="posteExpMod2">{experience.experiencePoste}</div>
                                   <div className="EmplyeurExp">{experience.experienceEmployeur}</div>
                               </div>
                           </div>
                           ))}
                       </div>

                       <div className="contExperience">
                            <div className="titreBlockCompt">Formation</div>
                            { this.props.formations.map((formation, index) => (
                           <div className="ligneExperience" key={index}>
                               <div className="dateExpMod2">{formation.anneeFormation} </div>
                               <div className="resteExpMod2">
                                   <div className="posteExpMod2">{formation.intituleFormation}</div>
                                   <div className="EmplyeurExp">{formation.etablissementFormation}</div>
                               </div>
                           </div>
                           ))}
                       </div>  

                    </div>






                </div>
                                

               
                
                        <div className="contbttgenererpdf">
                        <button onClick={() => window.print()}  className="bttSuivant">Générer un pdf</button>
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

export default connect(mapStateToProps)(Model02);
import React, { Component } from 'react';


export default class Home extends Component {
    render() {
        return (
            <div className="container-home">
               <div className="container contCVSlogan"> 
                    <div className="titreSloganHome">Générateur de CV en ligne !</div>
                    <a href="/models" className="bttCommencer">Créer un CV</a>
               </div>
               <div className="container-fluid contRestehome">
                   <div className="container">
                       <h2>Comment ça marche ?</h2>
                       <div className="boxCommentMarche box1">
                           <div className="titreBoxComment">Choisissez un modèle</div>
                           Choisissez un modèle de CV et personnalisez-le en fonction de votre personnalité et style.
                       </div>
                       <div className="boxCommentMarche box2">
                           <div className="titreBoxComment">Remplissez vos infos</div>
                           Vous commencez par saisir vos infos qui constituent le contenu de votre CV.
                       </div>
                       
                       <div className="boxCommentMarche box3">
                           <div className="titreBoxComment">Télécharger le CV</div>
                           Téléchargez votre CV immédiatement et modifiez-le à tout moment. Simplissime !
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

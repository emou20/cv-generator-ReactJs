
import { STEP1 } from "../actions/action-types";
import { STEP2 } from "../actions/action-types";
import { STEP3 } from "../actions/action-types";
import { STEP4 } from "../actions/action-types";
import { EDIT_ETAPE } from "../actions/action-types";
import { MODEL } from "../actions/action-types";

function rootReducer(state, action) {
  
  if (action.type === EDIT_ETAPE) {
    console.log(action);
    state.etape=action.editeEtape;
    return {...state}; 

  }

  if (action.type === STEP1) {
    state.urlImage=action.step1State.urlImage;
    state.nomPrenom=action.step1State.nomPrenom;
    state.fonction=action.step1State.fonction;
    state.Tel=action.step1State.Tel;
    state.mail=action.step1State.mail;
    state.dateNaissance=action.step1State.dateNaissance;
    state.adresse=action.step1State.adresse;
    state.presentation=action.step1State.presentation;
    return {...state}; 

  }

  if (action.type === STEP2) {
    state.experiences=action.step2State.experiences;
    
    return {...state}; 

  }
  if (action.type === STEP3) {
    state.formations=action.step3State.formations;
    
    return {...state}; 

  }

  if (action.type === STEP4) {
    state.competancesTechnique=action.step4State.competancesTechnique;
    state.competancesLogiciel=action.step4State.competancesLogiciel;
    
    return {...state}; 

  }

  if (action.type === MODEL) {
    state.model=action.choixModel;
    
    return {...state}; 

  }
   
  return state;
}

export default rootReducer;
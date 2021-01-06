import { createStore } from "redux";
import rootReducer from "../reducers";


function loadState(){
  try{
    const state = localStorage.getItem('cv');
    

    if(state !== null){
        console.log("state store localeStorge", state);
        return JSON.parse(state);
        
    }        
} catch(e){
    // ignore errors
}

  return {
    model:"",
    etape:"",
    urlImage:"",
    nomPrenom: "",
    fonction: "",
    Tel: "",
    mail: "",
    dateNaissance: "",
    adresse: "",
    presentation: "",
    experiences:[],
    formations:[],
    competancesTechnique:[],
    competancesLogiciel:[],
  };
}


function saveState(state){
  localStorage.setItem('cv', JSON.stringify(state));
}

//initialisation sans LocalStore
/* const initialState = {
    Panier: [],
    isopen: false
  }; */

const store = createStore(rootReducer, loadState() , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
  saveState(store.getState());
});


export default store;
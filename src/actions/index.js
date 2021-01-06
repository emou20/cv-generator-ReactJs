
import { STEP1 } from "../actions/action-types";
import { STEP2 } from "../actions/action-types";
import { STEP3 } from "../actions/action-types";
import { STEP4 } from "../actions/action-types";
import { EDIT_ETAPE } from "../actions/action-types";
import { MODEL } from "../actions/action-types";

  export function step1State(step1State) {
    return { type: STEP1, step1State }
  };
  export function step2State(step2State) {
    return { type: STEP2, step2State }
  };
  export function step3State(step3State) {
    return { type: STEP3, step3State }
  };
  export function step4State(step4State) {
    return { type: STEP4, step4State }
  };
  export function editeEtape(editeEtape) {
    return { type: EDIT_ETAPE, editeEtape }
  };

  export function choixModel(choixModel) {
    return { type: MODEL, choixModel }
  };
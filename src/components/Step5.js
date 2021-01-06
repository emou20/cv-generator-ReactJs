import React, { Component } from 'react';
import Model01 from "./Model01";
import Model02 from "./Model02";
import { connect } from 'react-redux';




class Step5 extends Component {

    render() {
        return (
            <div>
                {this.props.model === 1 ?
                  (<Model01 />) 
                  :
                  (
                    (<Model02 />)
                  ) 

                }
              
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        model:state.model
    }
}
export default connect(mapStateToProps)(Step5);

import {connect} from 'react-redux'

function Display({display}){
    
    return(
        <div id='display'>
            {display}
        </div>
    )
}

export default connect(state => ({display: state.display}), null)(Display)
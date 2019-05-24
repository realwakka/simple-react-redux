import { connect } from 'react-redux';
import { toggle_action } from '../actions';
import Toggle from '../components/Toggle';


function getText(val) {
    if (val == true)
        return 'TRUE';
    else
        return 'FALSE';
}

const mapStateToProps = state => {
    return {
        text: getText(state.value)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleClick:
            () => {
                dispatch(toggle_action())

            }
    }
}

const ToggleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toggle);

export default ToggleContainer;





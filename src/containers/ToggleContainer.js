import { connect } from 'react-redux';
import { toggle_action } from '../actions';
import Toggle from '../components/Toggle';


function getText(val) {
    console.log(`gettext`)
    console.log(val)
	if (val == true)
		return 'TRUE';
	else
		return 'FALSE';
}

const mapStateToProps = state => {
    console.log('mapStateToProps')
    console.log(state)
    return {
        text: getText(state.value)
    }
};

const mapDispatchToProps = dispatch => {
    console.log('mapDispatchToProps')

    return {
        onToggleClick:
            (value) => {
                dispatch(toggle_action(value))

            }
    }
}

const ToggleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toggle);

export default ToggleContainer;





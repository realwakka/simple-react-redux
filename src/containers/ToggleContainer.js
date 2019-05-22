import { connect } from 'react-redux';
import { toggle } from '../actions';
import { Toggle } from '../components/Toggle';

const mapStateToProps = (state, ownProps) => {
    return {
        val: !state.val
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            onToggle: (value) => { dispatch(toggle(value)) }
        }
    }
};

const ToggleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toggle);

export default ToggleContainer;





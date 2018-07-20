import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as boardActions from '../../actions/boardActions';
import BoardList from './BoardList';
import toastr from 'toastr';

class Board extends Component {
    constructor(props, context) {
        super(props, context);
    }

    callDelete(targetId) {
        this.props.actions.deleteBoard(targetId)
        .then(() => {
            toastr.options.positionClass = 'toast-bottom-right';
            toastr.success('completed delete');
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        let contents = this.props.contents,
            callDelete = this.callDelete.bind(this);

        return(
            <div>
                <BoardList 
                    deleteContent={callDelete}
                    contents={contents}
                />
            </div>
        );
    }
}

Board.propTypes = {
    contents: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        contents: state.contents
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(boardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
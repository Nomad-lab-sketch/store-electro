import React from "react";
import CombineHeader from "./CombineHeader";
import {connect} from "react-redux";
import {dataStoreThunk} from "../../redux/reducers/dataStoreReducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.dataStoreThunk()
    }

    render() {
        return <CombineHeader dataStore={this.props.dataStore}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dataStore: state.dataStore
    }
}
export default compose(connect(mapStateToProps, {dataStoreThunk}))(HeaderContainer)


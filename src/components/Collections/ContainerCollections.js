import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {dataLaptopsThunk} from "../../redux/reducers/laptopsReducer";
import Collection from "./Collection";

class ContainerCollections extends React.Component{

    componentDidMount() {
        this.props.dataLaptopsThunk()
    }

    render() {
       return (
           <Collection data={this.props.laptops}/>
       )
    }

}
let mapStateToProps = (state) => {
    return {
        laptops: state.laptops.laptops
    }
}
export default compose(connect(mapStateToProps, {dataLaptopsThunk}))(ContainerCollections)
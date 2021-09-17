import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

class ContainerLaptops extends React.Component {

    componentDidMount() {

    }

    render() {
        return(<div></div>)
    }
}

let mapStateToProps = (state) => {
    return {
        laptops: state.data.laptops
    }
}

export default compose(connect(mapStateToProps,))(ContainerLaptops)
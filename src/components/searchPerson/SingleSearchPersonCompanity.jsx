import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { instance } from "../../api/api";
import { SinglePerson } from "./SinglePerson";
import { setPersonSingle } from './../../redux/SingleSearchPerson';

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};
class SingleCompanenty extends React.Component {
   componentDidMount(){
    let userId = this.props.params.userId;
    instance.get("get_user/" +   userId).then((response) => 
    this.props.setPersonSingle(response.data)
    );

   }
    render() {
        return (
            <div>
                <SinglePerson person={this.props.person} {...this.props}/>
            </div>
        );
    }
}
let mapStateToProps=(state)=>({
  person: state.person.person,
}) 
let WithDataContainerComponent=withRouter(SingleCompanenty)
export default connect(mapStateToProps,{setPersonSingle  })(WithDataContainerComponent ) ;

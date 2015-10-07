/**
 * Created by agaur on 10/7/15.
 */
var React = require('react');



var UserProfile = React.createClass({
    propTypes : {
        username  : React.PropTypes.string.isRequired,
        bio  : React.PropTypes.object.isRequired
    },
    render  : function(){

        return (<div>User Profile

                UserName : {this.props.username}<br/>

                Bio : {this.props.bio}
        </div>)
    }
});





module.exports = UserProfile;
/**
 * Created by agaur on 10/5/15.
 */

var React = require('react');
var Router = require('react-router');


var Profile = React.createClass({
    mixins : [Router.State],
    getInitialState : function(){

        return { bio :{}, notes:[], repos : []}
    },
    render : function(){
            var username = this.props.params.username;
            return (

                <div className="row">
                    <div className="col-md-4">User Profile -->{username}</div>
                    <div className="col-md-4">User Repos</div>
                    <div className="col-md-4">User Comments</div>


                </div>
            );

    }
});


module.exports = { Profile};
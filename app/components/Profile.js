/**
 * Created by agaur on 10/5/15.
 */

var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');

var Repos = require('./Github/Repos');

var Notes = require('./Notes/Notes');



var Profile = React.createClass({
    mixins : [Router.State],
    getInitialState : function(){

        return { bio :{}, notes:[], repos : []}
    },
    render : function(){
            var username = this.props.params.username;
            return (

                <div className="row">
                    <div className="col-md-4"><UserProfile/></div>
                    <div className="col-md-4"><Repos /></div>
                    <div className="col-md-4"><Notes /></div>


                </div>
            );

    }
});


module.exports =  Profile;
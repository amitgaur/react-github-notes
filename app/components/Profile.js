/**
 * Created by agaur on 10/5/15.
 */

var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
    mixins : [Router.State,ReactFireMixin],
    getInitialState : function(){

        return { bio :{"name" :" Amit Gaur", "age" : "45"}, notes:[], repos : ["repo1", "repo2"]}
    },
    componentDidMount : function(){
        var url = "https://popping-inferno-2299.firebaseio.com/" + this.props.params.username;
        console.log("URL is set to ",url);
        this.ref  = new Firebase(url);

        this.bindAsArray(this.ref, 'notes');
    },
    componentWillUnmount: function(){
        this.unbind('notes');
    },
    handleAddNote : function(newNote){
        console.log("I got called with value", newNote, "current state", this.state.notes);
        this.ref.push(newNote);
    },

    render : function(){
            var username = this.props.params.username;
            return (

                <div className="row">
                    <div className="col-md-4"><UserProfile username={username} bio = {this.state.bio} /></div>
                    <div className="col-md-4"><Repos username={username} repos = {this.state.repos} /></div>
                    <div className="col-md-4"><Notes username={username} notes = {this.state.notes} handleAddNote = {this.handleAddNote}/></div>


                </div>
            );

    }
});


module.exports =  Profile;
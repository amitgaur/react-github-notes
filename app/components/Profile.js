/**
 * Created by agaur on 10/5/15.
 */

var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire')
var Firebase = require('firebase');

var helpers = require('./utils/helpers');

var Profile = React.createClass({
    mixins : [Router.State,ReactFireMixin],
    getInitialState : function(){

        return { bio :{}, notes:[], repos : []}
    },

    init : function(username){
        console.log("init called with ",  username);
        var url = "https://popping-inferno-2299.firebaseio.com/" + username;
        this.ref = new Firebase(url);
        this.bindAsArray(this.ref, 'notes');
        helpers.getAll(username).then(function(result){
            this.setState({bio : result.bio, repos : result.repos});
        }.bind(this));


    },
    componentWillMount: function(){

        console.log("componentWillMount called with ",  this.props.params);

    },

    componentDidMount : function(){
        console.log("componentDidMount called with ",  this.props.params);
        this.init(this.props.params.username);



    },
    componentWillUnmount: function(){
        console.log("componentWillUnmount called with ",  this.props.params);
        this.unbind('notes');
    },
    componentWillReceiveProps : function(nextProps){
        console.log("componentWillReceiveProps called with ",  this.props.params, "nextProps", nextProps);
        this.unbind('notes');
        this.init(nextProps.params.username);
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
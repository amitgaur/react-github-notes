/**
 * Created by agaur on 10/7/15.
 */
var React = require('react');
var ReactAddOns = require('react/addons');

var AddNote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        handleAddNote: React.PropTypes.func.isRequired
    },
    getInitialState : function(){

        return { 'noteVal' : '', 'disabled' : true};
    },
    handleSubmit: function (e) {
        e.preventDefault();
        this.props.handleAddNote(this.refs.newNote.getDOMNode().value);
        this.refs.newNote.getDOMNode().value='';

    },
    handleChange : function(e){
        this.setState({'noteVal' :  e.target.value, 'disabled' : false}) ;
        console.log(this.state);
    },
    render: function () {

        return (
            <div className="input-group">
                <input type="text" className="form-control" ref="newNote"  onChange = {this.handleChange} placeholder="Add New Note..."/>
                    <span className="input-group-btn">
                    <button className="btn btn-default"  disabled={this.state.disabled} type="button" onClick={this.handleSubmit}>Go!</button>
                    </span>
            </div>
        )
    },


});

module.exports = AddNote;
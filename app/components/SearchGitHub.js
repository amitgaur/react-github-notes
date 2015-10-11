var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
    mixins: [Router.History],
    handleSubmit: function(){
        var username = this.refs.username.getDOMNode().value;
        this.refs.username.getDOMNode().value = '';
        this.setState({btn_disabled:    true});
        console.log("going to redirect user to ", "profile/"+username);
        this.history.pushState(null,'/profile/'+username,{});
    },
    getInitialState   : function(){ return {btn_disabled : true}
    },
    handleChange  : function(){
        var val = this.refs.username.getDOMNode().value;
        if (val.length>0){
            this.setState({btn_disabled: false});
        }
    },
    render: function(){
        return (
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" onChange = {this.handleChange} ref="username" />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary" disabled={this.state.btn_disabled}>Search Github </button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = SearchGithub;
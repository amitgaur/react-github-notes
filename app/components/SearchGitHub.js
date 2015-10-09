/**
 * Created by agaur on 10/8/15.
 */
var React = require('react');
var ReactRouter = require('react-router');


var SearchGitHub = React.createClass({
    mixins : [ReactRouter.Navigation],
    handleSubmit : function(){
        var username = this.refs.username.getDOMNode().value;
        this.refs.username.getDOMNode().value = '';
        this.transitionTo('profile', {username : username});
    },
    render : function(){
            return (
                <div className="col-sm-12">
                    <form onSubmit={this.handleSubmit} >
                        <div className="form-group col-sm-7">
                            <input type="text" className="form-control" ref="username"/>

                        </div>

                        <div className="form-group col-sm-5">
                            <button type="submit" className="btn btn-block btn-primary">Search GitHub</button>
                        </div>



                    </form>
                </div>

            )

    }

});

module.exports = SearchGitHub;
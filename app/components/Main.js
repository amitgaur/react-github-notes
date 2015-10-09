/**
 * Created by agaur on 10/5/15.
 */
var React = require('react');
var SearchGitHub = require('./SearchGitHub');

var Main = React.createClass({

    render : function(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-xs-7 col-xs-offset-2" style={{marginTop: 15}}>
                      <SearchGitHub/>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>

        )


    }

});

module.exports = Main;
var React = require('react');
import {Router, Route, Switch} from 'react-router-dom'
var historyCreator = require('history');
var history = historyCreator.createBrowserHistory();

var NotFound = require('./utils/notfound');
var CargandoTop = require('./utils/cargandoTop');

var Header = require('./views/header');
var Footer = require('utils/footer');
var Home = require('./views/home');

require('./app.less');

class App extends React.Component {

  constructor(props){
   super(props);
   this.state = {
     loading: true
   }
   this.endLoading = this.endLoading.bind(this);
  }

  endLoading(){
    this.setState(function(){
      return {loading: false}
    })
  }

  render() {
    return (
      <Router history={history}>
        <div className='main'>
          <CargandoTop show={this.state.loading} />
          <Route path='/' render={ function(props) { return ( <Header {...props} openMenu={this.openMenu} closeMenu={this.closeMenu} /> ) }.bind(this) } />
          <div id='main-wrapper'>
            <Switch>
              <Route exact path='/' render={ function(props) { return ( <Home {...props} show={this.endLoading} /> ) }.bind(this) } />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Route path='/' render={ function(props) { return ( <Footer {...props} /> ) }.bind(this) } />
        </div>
      </Router>
    )
  }
}

module.exports = App;

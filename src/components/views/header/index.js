var React = require('react');
require("./styles.less");

class Header extends React.Component {

  constructor(props){
      super(props);

      var headerStyle='bar';
      if(props.location.pathname == "/"){
        headerStyle='hidden';
      }

      this.state = {
        style: headerStyle,
        menuOpen: false,
        menuItems: null,
        socialOpen: false
      }

      this.openMenu = this.openMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);

      this.handleScroll = this.handleScroll.bind(this);
      this.listenScroll = this.listenScroll.bind(this);
      this.updateBar = this.updateBar.bind(this);
  }

  openMenu(items){
    this.setState({
      style: this.state.style,
      menuOpen: true,
      menuItems: items
    })
  }

  closeMenu(){
    this.setState({
      style: this.state.style,
      menuOpen: false,
      menuItems: null
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.debug){
      console.log("from: "+prevProps.location.pathname+" updateTo: "+ this.props.location.pathname);
    }
    if(prevProps.location.pathname !== this.props.location.pathname) {
      if(this.props.location.pathname == "/"){
        this.updateBar('hidden');
        this.listenScroll();
      } else {
        this.updateBar('bar');
      }
    }
  }

  componentDidMount() {
    //console.log("mountTo: "+this.props.location.pathname);
    if(this.props.location.pathname == "/"){
      this.listenScroll();
    }
  }

  listenScroll(){
    document.getElementById('parallax').addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    scrollTop = 0;
    if(event){
      var scrollTop = event.target.scrollTop;
    }

    var headerStyle='bar';
    if(this.props.location.pathname == "/"){
      if(scrollTop < 600){
        if(this.props.debug) {
          console.log(this.state.style != 'hidden');
        }
        if(this.state.style != 'hidden'){
          headerStyle = 'tohidden';
        } else {
          headerStyle = 'hidden';
        }
      } else {
        headerStyle='tobar';
      }

      if(headerStyle != this.state.style){
        this.setState({
         style: headerStyle,

        });
      }
    }
  }

  updateBar(forcedState){
    if(this.props.debug) {
      console.log('updating bar to: '+forcedState);
    }
    this.setState({
     style: forcedState,
     menuOpen: this.state.menuOpen,
     menuItems: this.state.menuItems
    });
  }


  render(){
    if(this.props.debug) {
      console.log("drawing: style "+ this.state.style);
    }

    var megaStyle='closed';
    if(this.state.menuOpen){
      megaStyle = 'opened';
    }

    return(
      <header className={this.state.style}>
      </header>
    );
  }

}

module.exports = Header;

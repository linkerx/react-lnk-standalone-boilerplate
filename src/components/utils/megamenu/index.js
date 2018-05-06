var React = require('react');
var WpMenu = require('wp/menu');
var CloseMenuBtn = require('./closeMenuBtn');
var Submenu = require('wp/submenu');
require('./styles.less');

class MegaMenu extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        menuClass: 'initial',
        items: null
      }
      this.closeMenu = this.closeMenu.bind(this);
      this.openMenu = this.openMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open){
      this.openMenu(nextProps.items);
    } else if(this.props.open == true){
      this.closeMenu();
    }
  }

  openMenu(items){
      this.setState(function(){
        return {
          menuClass: 'opened',
          items: items
        }
      });
  }

  closeMenu(){
    this.setState(function(){
      return {
        menuClass: 'closed',
        items: null
      }
    });
  }

  render(){
    return (
      <div className={'megamenu '+this.state.menuClass}>
        <CloseMenuBtn closeMenu={this.props.close} />
        <Submenu items={this.state.items} action={this.props.close} path='/' nivel={1} />
      </div>
    )
  }
}

module.exports = MegaMenu;

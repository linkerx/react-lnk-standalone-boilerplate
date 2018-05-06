var React = require('react');
var NavLink = require('react-router-dom').NavLink;
require('./styles.less');
require('./animations.less');

class MenuPrincipal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: null,
    }
    this.updateItems = this.updateItems.bind(this);
  }

  componentDidMount(){
      this.updateItems();
  }

  updateItems(){
    this.setState(function () {
      return {
        menu: null,
      }
    });
    var opts = {
      location: 'main-menu-location',
      debug: false
    }

    WpApi.getMenuIdByLocation(opts)
      .then(function(menu) {
        this.setState(function () {
          return {
            menu: menu,
          }
        });
      }.bind(this));
  }

  render() {
    return (
      <nav className='menu-principal-header'>
      {!this.state.menu
        ?
          this.props.children
        :
        <ul className='menu'>
        {
          this.state.menu.items.map(function (menuItem, index) {
              return (<MenuItem key={index} showSubmenu={false} item={menuItem} path={this.props.path} action={() =>
                {
                  if(menuItem.attr =='megamenu'){
                    this.props.openMenu(menuItem.children);
                  }
                }
              } />)
          }.bind(this))
        }
        {
          this.props.extraItems &&
            this.props.extraItems.map(function (item, index) {
              return (
                <li key={100+index}>
                  <NavLink exact to={item.url} activeClassName="active" >{item.title}</NavLink>
                </li>)
          }.bind(this))
        }
        </ul>
      }
      </nav>
    )
  }
}

module.exports = MenuPrincipal;

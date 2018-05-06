var React = require('react');
var Cargando = require('utils/cargando');
require('./styles.less');

class Inicio extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      megamenuOpen: false,
      megamenuData: null
    }

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu(items){
    this.setState(function(){
      return {
        megamenuOpen: true,
        megamenuData: items
      }
    });
  }

  closeMenu(){
    this.setState({
      megamenuOpen: false,
      megamenuData: null
    })
  }

  render(props){
    var fondoQueries = [
      '_embed',
      'album=3'
    ];

    var fondoImage = {
      size: 'full',
      render: 'back'
    }

    var menuClass = 'menu-closed';
    if(this.state.megamenuOpen)
      menuClass = 'menu-opened'

    return (
      <section id='home-inicio' className={'parallax-group '+menuClass}>
        <div className='parallax-layer parallax-layer-back'>
          <Fondo queries={fondoQueries} image={fondoImage} >
            <Cargando />
          </Fondo>
        </div>
        <div className='parallax-layer parallax-layer-front'>
          <MenuSocial />
          <MenuAccesos />
          <div className='stripe'>
            <Logo />
            <MenuPrincipal openMenu={this.openMenu}/>
            <div id='home-inicio-megamenu'>
              <Megamenu open={this.state.megamenuOpen} close={this.closeMenu} items={this.state.megamenuData} />
            </div>
          </div>
          <Busqueda />
        </div>
      </section>
    )
  }
}

module.exports = Inicio;

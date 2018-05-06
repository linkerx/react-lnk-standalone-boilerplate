var React = require('react');
require("./styles.less");
var Image = require('');

class CargandoTop extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    var loadClass = 'opened';
    if(!this.props.show){
      loadClass='closed';
    }
    return (
      <div id='cargando-top' className={loadClass} >
        <div className="logo">
            <img src={Image} />
        </div>
        <div className="texto-tapa"></div>
      </div>
    )
  }
}

module.exports = CargandoTop;

var React = require('react');
var Link = require('react-router-dom').Link;
require("./styles.less");
var Image = "";

function SiteTitle() {
  return (
    <div className="site-title">
      <div className="logo">
          <Link to='/' title="Ir al Inicio"><img src={Image} /></Link>
      </div>
    </div>
  )
}

module.exports = SiteTitle;

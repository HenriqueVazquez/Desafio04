import React from 'react';
import facebook from './../assets/face.png'


// contruindo header da aplicação 
// building application header
function Header() {
  return (
    <header>
      <nav>
        <img src={facebook} />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
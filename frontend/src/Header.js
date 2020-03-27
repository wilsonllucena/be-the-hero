import React from 'react';
// Pegando uma propriedade passe o paramentro "props"
// Para desestrutura uma propriedade {nome_propriedade ex: title oupadrão children}
function Header ({children}) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    )
}

export default Header;
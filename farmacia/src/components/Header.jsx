import './Header.css';
import Logo from './Logo';


function Header() {
  return (
    <header className='header'>
        <Logo />
            <h2 className='farma'>Farmárcia</h2>
        <div className='botaoredi'>
            <h3>Produtos</h3>
            <h3>Sobre</h3>
            <h3>Fale Conosco</h3>
        </div>
    </header>
  )
}

export default Header
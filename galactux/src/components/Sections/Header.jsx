import Button from '../Reuse/Button'
import logo from '../../assets/logo.svg'

function Header(){

    return(
        <section id="header">
            <header className="move-out-top flex-row space-between align-center">
                <img src={logo} alt="logo" />
                <nav>
                    <ul className="flex-row gap-32">
                        <li className="flex-row align-center pointer-cursor active"><svg width="14" height="14" viewBox="0 0 14 14" fill="#FF2966" xmlns="http://www.w3.org/2000/svg"><path d="M7.36899 0.5C7.50566 4.30794 10.561 7.36333 14.369 7.5C10.561 7.63667 7.50566 10.6921 7.36899 14.5C7.23231 10.6921 4.17693 7.63667 0.368988 7.5C4.17693 7.36333 7.23231 4.30794 7.36899 0.5Z"/></svg> Home</li>
                        <li className="flex-row align-center pointer-cursor"><svg width="14" height="14" viewBox="0 0 14 14" fill="#FF2966" xmlns="http://www.w3.org/2000/svg"><path d="M7.36899 0.5C7.50566 4.30794 10.561 7.36333 14.369 7.5C10.561 7.63667 7.50566 10.6921 7.36899 14.5C7.23231 10.6921 4.17693 7.63667 0.368988 7.5C4.17693 7.36333 7.23231 4.30794 7.36899 0.5Z"/></svg> About Us</li>
                        <li className="flex-row align-center pointer-cursor"><svg width="14" height="14" viewBox="0 0 14 14" fill="#FF2966" xmlns="http://www.w3.org/2000/svg"><path d="M7.36899 0.5C7.50566 4.30794 10.561 7.36333 14.369 7.5C10.561 7.63667 7.50566 10.6921 7.36899 14.5C7.23231 10.6921 4.17693 7.63667 0.368988 7.5C4.17693 7.36333 7.23231 4.30794 7.36899 0.5Z"/></svg> Portfolio</li>
                        <li className="flex-row align-center pointer-cursor"><svg width="14" height="14" viewBox="0 0 14 14" fill="#FF2966" xmlns="http://www.w3.org/2000/svg"><path d="M7.36899 0.5C7.50566 4.30794 10.561 7.36333 14.369 7.5C10.561 7.63667 7.50566 10.6921 7.36899 14.5C7.23231 10.6921 4.17693 7.63667 0.368988 7.5C4.17693 7.36333 7.23231 4.30794 7.36899 0.5Z"/></svg> Pricing</li>
                    </ul>
                </nav>
                <div className="btn-holder">    
                    <Button label="Schedule a Call" />
                </div>
            </header>
        </section>
    );
    
}

export default Header;
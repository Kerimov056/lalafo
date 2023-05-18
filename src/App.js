import './App.css';
import Header,{NavItem,DropDownMenu} from './companent/header/Header';
import Carts from './companent/body/Carts';
import {GiHamburgerMenu} from 'react-icons/gi'

function App() {
  return (
    <>
        <Header>
          <NavItem icon={<GiHamburgerMenu/>}>
            <DropDownMenu></DropDownMenu>
          </NavItem>
        </Header>
        <Carts/>
    </>
  );
}

export default App;

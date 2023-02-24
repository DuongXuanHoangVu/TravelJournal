import Icon from '@mdi/react';
import { mdiEarth } from '@mdi/js';


function Header() {
    return ( 
        <div className="header">
            <span className="header-icon">
                <Icon path={mdiEarth} size={2.2} />
            </span>
            <p className="header-text">
                my travel journal.
            </p>
        </div>
     );
}

export default Header;
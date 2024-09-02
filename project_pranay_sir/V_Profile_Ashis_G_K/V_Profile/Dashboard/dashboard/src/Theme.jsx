import React, { useContext } from 'react';
import Home from './gourav/Home';
import AshishHome from './ashish/AshishHome';
import { myContext } from './context/Appcontext';
import Login from './components/Login';

const Theme = () => {
    const { vcardtheme  ,token} = useContext(myContext);

    let componentToRender;

    // Conditional rendering based on vcardtheme value
    switch (vcardtheme) {
        case 1:
            componentToRender = <Home />;
            break;
        case 2:
            componentToRender = <AshishHome />;
            break;
        // Add more cases as needed for other themes
        default:
            componentToRender = <Home />; // Default to Home if vcardtheme is not 1 or 2
            break;
    }

    return (
        <>
           
              {token ?(componentToRender):(<><Login/></>)}
        </>
    );
}

export default Theme;

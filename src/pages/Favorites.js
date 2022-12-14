import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../compnents/meetups/MeetList';

function FavoritesPages () {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start Adding some?</p>
    } else{
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
};

export default FavoritesPages;
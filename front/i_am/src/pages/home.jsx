import Intro from '../components/intro';
import SearchBar from '../components/searchBar';
import logo from '../assets/i_am_logo.png';
import '../components/logo.css';
import user from '../assets/user.png';
import Carte from '../components/mini_carte';
import Button from '../components/button';


function Home() {

  return (
    <>

    <div className=" justify-center items-center">
      {/* Header Section */}
      <div className="flex items-center justify-between ">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-20 h-20" />

        {/* Buttons */}
        <div className="flex gap-4">
          <Button label="Inscription" variant="secondary" />
          <Button label="Connexion" variant="primary" />
        </div>
      </div>

      {/* Intro Section */}
      <Intro />

      {/* Search Bar */}

        <SearchBar />


      {/* Favorites Section */}

        <h2 className="font-semibold text-white mb-7 text-left text-3xl">
          Vos favoris
        </h2>
        <div className="flex flex-wrap gap-6">
          <Carte
            image={user}
            name="Marie Leroy"
            role="Directrice Marketing"
            isFavorite={true}
          />
        </div>
      </div>

    </>
  );
}

export default Home;
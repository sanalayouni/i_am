import Intro from '../components/intro';
import SearchBar from '../components/searchBar'
import logo from '../assets/i_am_logo.png';
import  '../components/logo.css';
import user from '../assets/user.png';
import Carte from '../components/mini_carte';
import Button from '../components/button';

function Home() {
  return (
    <>
      <div className="home-page">
        <div className="flex items-center justify-between ">
  {/* Logo */}
  <img src={logo} alt="Logo" className="w-50 h-50" />

  {/* Buttons */}
  <div className="flex gap-4">
    <Button label="Inscription" variant="secondary" />
    <Button label="Connexion" variant="primary" />
  </div>
</div>
        <Intro />
        <SearchBar />
      <div className="mt-8 ">
        <h2 className=" font-semibold text-white mb-4 text-left text-3xl">Vos favoris</h2>
        <div className="flex gap-6">
          <Carte 
            image={user}
            name="Marie Leroy"
            role="Directrice Marketing"
            isFavorite={true}
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
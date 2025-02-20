import React from 'react';
import { Beer, Swords } from 'lucide-react';
import { GiBookmark } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import AuthModal from '../components/auth/AuthModal';

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  const handleStartCreating = () => {
    if (user) {
      navigate('/create-character');
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="space-y-60 space-x-20"> {/* Removed padding on all sides */}

      <header className="relative flex items-end justify-center overflow-hidden px-0 pb-16" 
  style={{ height: 'calc(100vh - 15px)' }}>  {/* Adjusted height */}
  
  {/* Background Image */}
  <div 
    className="absolute inset-0 w-full h-full bg-no-repeat bg-center z-0" 
    style={{
      backgroundImage: `url('/Adventurer image.png')`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center 0%', // Adjusted position
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/80 to-dark z-10" />
  
  {/* Content */}
  <div className="relative z-20 text-center w-full px-0" style={{ marginBottom: 'var(--text-height, 20vh)' }}>
    {/* Lowered text */}
    <h1 className="text-8xl font-black text-light mb-8 leading-none drop-shadow-2xl">
      UNLEASH YOUR
      <br />
      <span className="text-accent">LEGEND</span>
    </h1>
    <p className="text-xl text-light/80 mb-12 max-w-2xl mx-auto drop-shadow-lg">
      Create, customize, and bring your characters to life with our next-generation D&D tools
    </p>
  </div>
</header>




      <section className="container mx-auto px-0"> {/* Removed left and right padding here */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="group">
            <div className="aspect-square mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 p-8">
              <Swords className="w-full h-full text-accent transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h2 className="text-2xl font-bold text-light mb-4">
              Characters
            </h2>
            <p className="text-light/60 mb-6">
              Build and manage your characters with our intuitive tools and extensive options.
            </p>
            <Link
              to={user ? "/characters" : "#"}
              onClick={(e) => {
                if (!user) {
                  e.preventDefault();
                  setShowAuthModal(true);
                }
              }}
              className="text-accent hover:text-accent-light transition-colors font-bold text-sm uppercase tracking-wider inline-flex items-center"
            >
              Explore Characters
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="group">
            <div className="aspect-square mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 p-8">
              <Beer className="w-full h-full text-accent transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h2 className="text-2xl font-bold text-light mb-4">
              Homebrew
            </h2>
            <p className="text-light/60 mb-6">
              Create and share custom content with our powerful homebrew creation tools.
            </p>
            <Link
              to={user ? "/homebrew" : "#"}
              onClick={(e) => {
                if (!user) {
                  e.preventDefault();
                  setShowAuthModal(true);
                }
              }}
              className="text-accent hover:text-accent-light transition-colors font-bold text-sm uppercase tracking-wider inline-flex items-center"
            >
              Discover Homebrew
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="group">
            <div className="aspect-square mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 p-8">
              <GiBookmark className="w-full h-full text-accent transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h2 className="text-2xl font-bold text-light mb-4">
              Campaigns
            </h2>
            <p className="text-light/60 mb-6">
              Organize and track your adventures with our campaign management system.
            </p>
            <Link
              to={user ? "/campaigns" : "#"}
              onClick={(e) => {
                if (!user) {
                  e.preventDefault();
                  setShowAuthModal(true);
                }
              }}
              className="text-accent hover:text-accent-light transition-colors font-bold text-sm uppercase tracking-wider inline-flex items-center"
            >
              Start Campaign
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-dark-light/50 py-24">
        <div className="container mx-auto px-0"> {/* Removed padding */}
          <h2 className="text-4xl font-black text-light mb-12 text-center">
            FEATURED CONTENT
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-accent to-accent-dark p-8 flex items-end">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-light mb-2">
                  Blood Mage Class
                </h3>
                <p className="text-light/80 mb-6">
                  Master the art of blood magic with this unique spellcasting class.
                </p>
                <button 
                  //onClick={}
                  className="button primary"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-accent to-accent-dark p-8 flex items-end">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-light mb-2">
                  Celestial Weapons
                </h3>
                <p className="text-light/80 mb-6">
                  Wield the power of the heavens with these divine weapon options.
                </p>
                <button 
                  //onClick={}
                  className="button primary"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
}

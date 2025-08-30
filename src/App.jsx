import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CollectionShowcase from './components/CollectionShowcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-purple-200 selection:text-neutral-900">
      <Header />
      <main>
        <Hero />
        <CollectionShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;

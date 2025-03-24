import { useState } from 'react';
import { Menu, X, BookOpen, Users } from 'lucide-react';
import NewsCard from './components/NewsCard';
import CareerCard from './components/CareerCard';
import logoImage from './assets/logo.png';
import backgroundImage from './assets/background5.jpg';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const news = [
    {
      id: 1,
      title: 'Inscripciones abiertas 2025',
      category: 'admision',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Nuevo laboratorio de tecnología',
      category: 'institucional',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const careers = [
    {
      id: 1,
      title: 'Tecnicatura Superior en Desarrollo de Software',
      duration: '2 años y medio',
      description: 'Formación integral en programación y desarrollo de aplicaciones.',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Tecnicatura Superior en Sistemas de Información',
      duration: '2 años y medio',
      description: 'Especialización en infraestructura y seguridad de redes.',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-primary text-white shadow-lg z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={logoImage}
                alt="IFTS4 Logo"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">IFTS4</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="hover:text-secondary">Inicio</a>
              <a href="#carreras" className="hover:text-secondary">Carreras</a>
              <a href="#noticias" className="hover:text-secondary">Noticias</a>
              <a href="#tramites" className="hover:text-secondary">Trámites</a>
              <a href="#contacto" className="hover:text-secondary">Contacto</a>
              <button className="bg-secondary px-4 py-2 rounded-lg hover:bg-secondary-dark">
                Campus Virtual
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#inicio" className="block hover:text-secondary">Inicio</a>
              <a href="#carreras" className="block hover:text-secondary">Carreras</a>
              <a href="#noticias" className="block hover:text-secondary">Noticias</a>
              <a href="#tramites" className="block hover:text-secondary">Trámites</a>
              <a href="#contacto" className="block hover:text-secondary">Contacto</a>
              <button className="w-full bg-secondary px-4 py-2 rounded-lg hover:bg-secondary-dark">
                Campus Virtual
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-primary to-primary-dark text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formando profesionales del futuro
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Educación superior técnica de calidad con más de 25 años de experiencia
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary px-6 py-3 rounded-lg hover:bg-secondary-dark font-semibold">
                Conocé nuestras carreras
              </button>
              <button className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 font-semibold">
                Proceso de admisión
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="carreras" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestras Carreras</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {careers.map(career => (
              <CareerCard key={career.id} {...career} />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="noticias" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Últimas Novedades</h2>

          {/* News Filters */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              {['all', 'institucional', 'admision', 'academico'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-lg ${activeTab === tab
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news
              .filter(item => activeTab === 'all' || item.category === activeTab)
              .map(item => (
                <NewsCard key={item.id} {...item} />
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark font-semibold"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">IFTS4</h3>
              <p className="text-gray-300">
                Institución de educación superior comprometida con la excelencia académica.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Carreras</a></li>
                <li><a href="#" className="hover:text-white">Admisión</a></li>
                <li><a href="#" className="hover:text-white">Calendario</a></li>
                <li><a href="#" className="hover:text-white">Noticias</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Av. Example 1234</li>
                <li>Ciudad Autónoma de Buenos Aires</li>
                <li>Tel: (11) 1234-5678</li>
                <li>Email: info@ifts4.edu.ar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Seguinos</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 IFTS4. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
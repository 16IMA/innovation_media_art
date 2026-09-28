// src/components/HomePage.tsx
import { POSTS } from '../data/posts';

interface HomePageProps {
  onSelectPost: (postId: string) => void;
  onOpenAbout: () => void;
}


const HomePage = ({ onSelectPost, onOpenAbout }: HomePageProps) => {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-8 md:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto">
            <span className="mt-10 inline-block mb-4 text-xs tracking-[0.3em] font-medium text-slate-500 uppercase">
              Art &amp; Technology
            </span>
            <h1 className="text-4xl md:text-7xl font-serif leading-tight text-slate-900 mb-8 font-bold">
              Explorando la intersección entre la creatividad y el algoritmo
            </h1>
            <div className="flex items-center gap-2 text-xs tracking-widest text-slate-400 uppercase">
              <span>Desliza para explorar</span>
            </div>
          </div>
        </section>

        {/* News Grid (Artículos Dinámicos) */}
        <section className="py-16 px-8 md:px-24 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {POSTS.map((post) => (
              <article 
                key={post.id} 
                onClick={() => onSelectPost(post.id)}
                className="group cursor-pointer border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 rounded mb-4">
                  <img 
                    alt={post.title} 
                    src={post.images?.[0].url} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <span className="text-xs tracking-widest text-slate-400 uppercase block mb-2">
                  {post.date}
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 px-8 md:px-24 bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-slate-200">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center col-span-2">
            <div>
              <img 
                alt="Editorial workspace" 
                className="w-52 md:w-72 h-auto object-cover rounded grayscale" 
                src="./IMA-FOTO-EDITORA.JPG" 
              />
              <p className="text-slate-600 leading-relaxed mt-4 font-semibold">
                Izaskun Monfort Aurteneche
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 italic">
                Editora
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Nuestra Filosofía</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                IMA es un espacio de curación digital donde el arte contemporáneo dialoga con la innovación tecnológica. Analizamos cómo las nuevas herramientas expanden los límites de la expresión plástica.
              </p>
              
              {/* Botón funcional hacia Sobre IMA */}
              <button 
                onClick={onOpenAbout}
                className="px-8 py-3 border border-slate-900 text-slate-900 text-xs tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
              >
                Nuestra Visión
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
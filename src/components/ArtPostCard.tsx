// src/components/ArtPostCard.tsx
import React, { useState, useEffect } from 'react';
import type { Post } from '../data/posts';

interface ArtPostProps {
  post: Post;
  onBack?: () => void;
}

const ArtPostCard: React.FC<ArtPostProps> = ({ post, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  // Cálculo del porcentaje de scroll (el historial lo gestiona App.tsx)
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierre de la imagen ampliada al presionar la tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageExpanded(false);
      }
    };

    if (isImageExpanded) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageExpanded]);

  return (
    <div className="font-body selection:bg-tertiary/20 selection:text-tertiary relative">
      
      {/* Barra de progreso de scroll superior */}
      <div className="fixed top-0 left-0 w-full h-1 bg-surface-container-high z-[70]">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-40">
        
        {/* Cabecera con Botón Volver y Porcentaje */}
        {onBack && (
          <div className="px-0 md:px-20 mb-8 flex justify-between items-center border-b border-outline-variant/20 pb-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-label uppercase tracking-[0.2em] text-outline hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Volver a inicio
            </button>

            <span className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-primary bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant/30">
              {Math.round(scrollProgress)}% LEÍDO
            </span>
          </div>
        )}

        {/* Contenido del Artículo */}
        <article className="space-y-10 md:space-y-16 px-0 md:px-20">
          <header className="space-y-4">
            <span className="text-xs font-label uppercase tracking-[0.2em] text-outline block">
              {post.date}
            </span>
            <h1 className="w-full font-headline text-3xl md:text-6xl text-primary tracking-tight font-normal leading-tight">
              {post.title}
            </h1>
            <p className="w-full font-headline italic text-lg md:text-xl text-secondary tracking-tight font-light leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <div className="relative group">
            <div className="hidden md:flex absolute -left-20 top-0 flex-col items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <span className="h-20 w-[1px] bg-outline-variant"></span>
            </div>

            <div className="bg-surface-container-low border-l-2 border-outline-variant/30 p-5 md:p-8 transition-colors hover:bg-surface-container-lowest">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold">
                  Curator Insight
                </span>
                <span className="material-symbols-outlined text-sm text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <p className="font-headline italic text-sm md:text-base text-on-surface-variant leading-relaxed">
                "{post.insight}"
              </p>
            </div>
          </div>

          {/* Imagen Interactiva con Zoom Modal */}
          {post.image.image && (
            <div className="py-2 md:py-6">
              <figure 
                onClick={() => setIsImageExpanded(true)}
                className="bg-surface-container-highest w-full aspect-[16/9] md:aspect-[16/7] relative flex items-center justify-center overflow-hidden rounded-sm cursor-zoom-in group"
              >
                <img 
                  src={post.image.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />

                {/* Botón flotante para sugerir la ampliación */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white p-2 rounded-full opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="material-symbols-outlined text-sm">zoom_in</span>
                </div>

                {post.watermark && (
                  <figcaption className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-[9px] md:text-[10px] font-label uppercase tracking-widest text-white/80 bg-black/50 px-2.5 py-1 rounded-xs backdrop-blur-xs">
                    {post.watermark}
                  </figcaption>
                )}
              </figure>
            </div>
          )}

          <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed font-body font-light text-on-surface whitespace-pre-line">
            {post.content}
          </div>
        </article>

        {/* Footer del Artículo */}
        <footer className="mt-16 md:mt-24 px-0 md:px-20 flex justify-between items-center border-t border-outline-variant/20 pt-8">
          <button 
            onClick={onBack}
            className="text-xs font-label uppercase tracking-[0.2em] text-primary hover:underline cursor-pointer"
          >
            ← Inicio
          </button>
          
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
            <span className="text-[10px] font-label uppercase tracking-[0.2em]">
              {Math.round(scrollProgress)}% COMPLETADO
            </span>
          </div>
        </footer>

      </main>

      {/* LIGHTBOX / MODAL DE IMAGEN AMPLIADA */}
      {isImageExpanded && post.image && (
        <div 
          onClick={() => setIsImageExpanded(false)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          {/* Botón Cierre */}
          <button 
            onClick={() => setIsImageExpanded(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/50 p-2 rounded-full transition-colors cursor-pointer z-[101]"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Contenedor de la Imagen */}
          <div className="relative max-w-7xl max-h-[90vh] overflow-hidden rounded-sm">
            <img 
              src={post.image} 
              alt={post.title} 
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
            {post.watermark && (
              <p className="text-center text-[10px] font-label uppercase tracking-widest text-white/60 mt-3">
                {post.watermark}
              </p>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default ArtPostCard;
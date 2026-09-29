// src/components/ArtPostCard.tsx
import React, { useState, useEffect } from 'react';
import type { Post } from '../data/posts';

interface ArtPostProps {
  post: Post;
  onBack?: () => void;
}

const ArtPostCard: React.FC<ArtPostProps> = ({ post, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Estado para controlar qué imagen de la galería está activa en el modal (null = modal cerrado)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // ÚNICAMENTE el cálculo del scroll (el historial ya lo gestiona App.tsx)
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

  // Controles del teclado para el modal (ESC para cerrar, flechas para navegar entre imágenes)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null || !post.images) return;

      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null && prev < post.images.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : post.images.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, post.images]);

  return (
    <div className="font-body selection:bg-tertiary/20 selection:text-tertiary relative">

      {/* Barra de progreso de scroll */}
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

          {/* Galería de imágenes desde post.images */}
          {post.images && post.images.length > 0 && (
            <div className="space-y-8 py-2 md:py-6">
              <div className={`grid gap-6 ${post.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                {post.images.map((img, index) => (
                  <figure key={index} className="space-y-2">
                    <div
                      onClick={() => setActiveImageIndex(index)}
                      className="bg-surface-container-highest w-full aspect-[16/9] relative flex items-center justify-center overflow-hidden rounded-sm cursor-zoom-in group"
                    >
                      <img
                        src={img.url}
                        alt={img.caption || post.title}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Icono de zoom */}
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white p-1.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="material-symbols-outlined text-xs">zoom_in</span>
                      </div>

                      {/* Marca de agua / Crédito de la foto */}
                      {img.watermark && (
                        <span className="absolute bottom-3 left-3 text-[9px] font-label uppercase tracking-widest text-white/80 bg-black/50 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                          {img.watermark}
                        </span>
                      )}
                    </div>

                    {/* Leyenda / Título de la obra */}
                    {img.caption && (
                      <figcaption className="text-xs font-label text-outline tracking-wider leading-snug px-1 border-l-2 border-primary/40 pl-3">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed font-body font-light text-on-surface whitespace-pre-line">
            {post.content}
          </div>
        </article>

        <footer className="mt-16 md:mt-24 px-0 md:px-20 flex justify-between items-center border-t border-outline-variant/20 pt-8">
          <button
            onClick={onBack}
            className="text-xs font-label uppercase tracking-[0.2em] text-primary hover:underline cursor-pointer"
          >
            ← Inicio
          </button>
        </footer>

      </main>

      {/* LIGHTBOX / MODAL DE IMAGEN AMPLIADA */}
      {activeImageIndex !== null && post.images && post.images[activeImageIndex] && (
        <div 
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out select-none"
        >
          {/* Botón Cierre */}
          <button 
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/50 p-2 rounded-full transition-colors cursor-pointer z-[102]"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Contenedor de la Imagen */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <img 
              src={post.images[activeImageIndex].url} 
              alt={post.images[activeImageIndex].caption || post.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-sm"
            />

            {/* Leyenda en el modal */}
            {post.images[activeImageIndex].caption && (
              <p className="text-center text-xs md:text-sm font-label uppercase tracking-widest text-white/90 mt-4 max-w-2xl px-4">
                {post.images[activeImageIndex].caption}
              </p>
            )}

            {/* Marca de agua en el modal */}
            {post.images[activeImageIndex].watermark && (
              <p className="text-center text-[10px] font-label uppercase tracking-widest text-white/50 mt-1">
                {post.images[activeImageIndex].watermark}
              </p>
            )}

            {/* Controles de navegación si hay más de una imagen */}
            {post.images.length > 1 && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : post.images.length - 1));
                  }}
                  className="absolute left-[-10px] md:left-[-50px] top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/60 p-3 rounded-full cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev !== null && prev < post.images.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-[-10px] md:right-[-50px] top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/60 p-3 rounded-full cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>

                <span className="absolute -bottom-8 text-[10px] font-label tracking-widest text-white/60">
                  {activeImageIndex + 1} / {post.images.length}
                </span>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default ArtPostCard;
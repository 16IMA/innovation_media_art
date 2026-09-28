// src/data/posts.ts

export interface PostImage {
  url: string;
  caption?: string;   // Título de la obra o autor de la fotografía
  watermark?: string; // Créditos o marca de agua secundaria
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  insight: string;
  

  // Nueva propiedad para soportar 1 o más imágenes estructuradas
  images?: PostImage[];
}

export const POSTS: Post[] = [
  {
    id: "post-3",
    title: "Infinite Hexadecimal Memory Window (80 x 80 x 15 cm, 1992) – Miguel Chevalier",
    excerpt: "Creative ideas never emerge from a vacuum. Discover how Miguel Chevalier’s digital lightboxes echo the optical genius of kinetic master Jesús Soto.",
    date: "2026-09-28",
    insight: "For a long time, art history books have been embellished with the mythical idea of pure inspiration. Sometimes it appears as a Sibyl, other times as a naked muse—as if inspiration strikes out of nowhere, touched by God, leaving artists as absolute masters of their creation.",
    images: [
      {
        url: "./infinite-hexadecimal-memory-window.jpg",
        caption: "Infinite Hexadecimal Memory Window (1992) – Miguel Chevalier",
        watermark:"",
      }, 
      {
        url: "./etude-pour-une-serie.jpg",
        caption: "Étude pour une série (1952-53) – Jesús Soto",
        watermark:"",
      },
      {
        url: "./cajita-villanueva.jpg",
        caption: "La cajita de Villanueva (1955) – Jesús Soto",
        watermark:"",
      }
    ],
    content: `Almost everyone believes in the dream of the artistic genius. For a long time, art history books have been embellished with the mythical idea of pure inspiration. Sometimes it appears as a Sibyl, other times as a naked muse—as if inspiration strikes out of nowhere, touched by God, leaving artists as absolute masters of their creation. Since the Cinquecento, artists sought to claim their place in the emerging bourgeoisie, distancing themselves from mere artisans. Being an artist evolved into representing someone who works more with their head than their hands. Consequently, the aura of genius allowed artists to enjoy the privileges of high society.

However, creative ideas do not emerge from a vacuum; they are the product of intricate connections in our brains. Every song we have listened to, every image we have seen, every sculpture we have touched, and every book we have read forms our creative background. Yet, this background also belongs to the artists who came before us—those we love most and who live on through their work.

That is why, when we look at an artwork, we can often hear the whisper of the artist’s master or catch glimpses of preceding styles.

A prime example of this continuity is Miguel Chevalier, a French pioneer of virtual and digital art. Since the 1980s, he has tackled hybrid, generative, and interactive imagery, drawing references from art history and reformulating them using digital tools. His work explores recurring themes such as nature and artifice, flows and networks, virtual cities, and ornate patterns.

When I visited Chevalier’s exhibition, Digital Floralia, at the Vital Foundation’s Araba exhibition space, one piece immediately captured my attention: Infinite Hexadecimal Memory Window. This piece is a digital light box constructed with a metal box, neon lighting, and screen-printed mirrors designed to create an optical illusion. With rows of glowing hexadecimal computer code fading into a simulated infinity, Chevalier explores memory, data, and the invisible architecture of the digital realm. These qualities immediately reminded me of another master’s work: Jesús Soto.

Jesús Soto was a Venezuelan painter, sculptor, and pioneer of Kinetic and Op Art. His work revolutionized 20th-century art by giving spectators an active role, most notably in his Penetrables. After moving to Paris in the 1950s, Soto joined a prominent circle of avant-garde artists and co-founded the international kinetic movement.

From my perspective, a relationship akin to that of master and pupil exists between Jesús Soto and Miguel Chevalier, regardless of whether they ever met in person. In their respective practices, both tackle the exact same challenge: the materialization of nonphysical concepts.

To illustrate this point, Soto created several pieces exploring mathematical serial order, such as Étude pour une série (1952–53), drawing inspiration from dodecaphonic music composition. Through this approach, he reduced artistic taste and emotional expression to the pure codification of simple rows of colors and dots. Similarly, Chevalier opens a window for us to observe the hexadecimal code hidden inside a computer's memory. Rather than conveying explicit meaning, this code forms simple rows of numbers and letters that simulate the structure of an elusive digital architecture.

Along the same lines, gazing at Soto’s La cajita de Villanueva (1955) reveals the same desire to construct an optical structure as Chevalier’s Window. Measuring 32 x 32 x 15 cm, Soto’s wooden, acrylic, and Plexiglas box represents a fundamental milestone in optical art. Using overlapping layers of Plexiglas, Soto constructed an imaginary cube that suspended a fragment of space. Employing a similar strategy, Chevalier achieves the illusion of infinity through layers of printed Plexiglas and mirrors. Both artists successfully render the intangible tangible.

Ultimately, if capturing abstract concepts is a formidable challenge for artists, connecting them to beauty and meaning is harder still. Artists do not forge ahead completely alone; they walk along paths blazed by their predecessors while striving to open new ones of their own.`
  },
  {
    id: "post-2",
    title: "'Counter' Eugenio Merino",
    excerpt: "Eugenio Merino’s Counter converts live net-worth data into a Wall Street-style visual metaphor. But does the piece offer a sustained critique of modern capitalism, or merely a surface-level observation bound to break with the next website update?",
    date: "2026-08-18",
    insight: "Equating a billionaire’s wealth to stock fluctuations offers a predictable observation; exploring the real-time market turbulence triggered by a single tweet from figures like Elon Musk would yield a far more potent commentary.",
    images: [
      {
        url: "./1-counter-Galerie-Frey-2o26.jpg",
        caption: "Counter – Eugenio Merino (Galerie Frey, 2026)",
        watermark: "Fotografía de Stefan Zenzmaier"
      }
    ],
    content: `
      Overview

Digital art encompasses contemporary practices that leverage emerging technological tools to investigate, generate, and convey aesthetic inquiry. Eugenio Merino’s Counter features an LED financial ticker that streams the identity and real-time net worth of the world’s wealthiest individual. Recalculated every five minutes following market opening, the piece continuously converts live financial data from Forbes into US dollar values.

Technical Architecture & Media Fragility

The underlying mechanism is more complex than it appears on the surface. A microprocessor connected to the display via Wi-Fi executes a script to scrape the HTML structure of the source website—though integrating a direct API would offer a cleaner technical solution.

However, relying on external live data introduces severe vulnerabilities. Should Forbes alter its URL structures, modify its DOM elements, or go offline entirely, the artwork breaks and loses its functional meaning. This structural dependence raises a poignant question within media art: does the conceptual framework account for its own inevitable technical obsolescence?

Critical Assessment

Aesthetically, the work successfully mimics the high-frequency trading displays of the New York or Madrid stock exchanges, drawing an instant parallel between individual human identity and stock volatility.

Yet, as a conceptual critique, the metaphor remains on the surface. Equating a billionaire’s wealth to stock fluctuations offers a predictable observation; exploring the real-time market turbulence triggered by a single tweet from figures like Elon Musk would yield a far more potent commentary. Ultimately, Counter reflects a recurring challenge in Merino’s oeuvre: prioritizing immediate visual punch over deeper systemic critique.`
  },
  {
    id: "post-1",
    title: "Rodrigo Nevsky 'Viajes de ensueño'",
    excerpt: "Reseña de la exposición 'Viajes de ensueño' del artista visual Rodrigo Nevsky, explorando la fusión de arte y tecnología.",
    date: "2026-08-01",
    insight: "Es posible que como al volar, lanzarnos a una nueva etapa de desarrollo tecnológico confirme de nuevo la dualidad que convive en el interior del ser humano, capaz de inspirar todo lo bueno y generar a su vez lo terrible, pero es esa dicotomía la que permite que lo imposible se convierta en una realidad.",
    images: [
      {
        url: "./RN51.jpg",
        caption: "Sobre nubes desvanecidas – Rodrigo Nevsky",
        watermark: "Cortesía del artista"
      }
    ],
    content: `
      Just stop your crying
Have the time of your life
Breaking through the atmosphere
And things are pretty good from here
Remember everything will be alright
We can meet again somewhere
Somewhere far away from here

Sign of the Times
Canción de Harry Styles ‧ 2017

Hay un momento en el que el verbo predecir se convierte en prever. Es justo un instante, como cuando en el aire huele a lluvia y aún se ve el sol, o cuando escuchas el chisporrotear al rozar una cerilla y sabes perfectamente que por fín se encenderá una. En periodos de incertidumbre ansiamos que esto ocurra, buscamos las señales aprehendidas para tratar de averiguar cúal es el nuevo camino, despejar el horizonte.

Sin lugar a dudas, actualmente vivimos en uno de estos estados de incertidumbre, los rápidos avances tecnológicos con la irrupción de la IA, las aspiraciones de un cambio vertiginoso en nuestra manera de trabajar, vivir y pensar, y el bombardeo sin parangón de información de todo tipo, nos desconcierta a todos por igual. Es el signo de nuestro tiempo. Si se supone que ya lo sabemos todo, que toda la historia, pensamiento y técnica está en nuestras manos, a total disposición, ¿por qué nos sentimos así?, ¿por qué no podemos prever?, ¿será que hay algo más sobre las nubes?, ¿que hay más tierra y más cielo de lo que se ve?

Rodrigo Nevsky es un artista visual que sabe bien intuir el sentir del momento en el que habita. Su sensibilidad le permite percibir las ideas e inquietudes que sobrevuelan el imaginario colectivo y finamente traducirlas a un lenguaje estético contemporáneo, que no por eso codificado y de corto alcance -sólo para expertos-, sino cargado con la esencia de una iconografía reconocible por el público y una solución estilística con acento propio. En su nueva serie Objetos voladores nos encontramos con instantáneas poseedoras de mil historias, imágenes que reflejan un presente rápido, diría acelerado, con notas de un nostálgico pasado, ambos enfrentados a la idea de un futuro que ya está aquí.

Volar, ha sido el sueño que ha maintained en vela al ser humano a lo largo de su historia y que, como el fuego de Prometeo, llegó para cambiar nuestro panorama al completo. Una simple fórmula - L=(½)d v2 s CL - modificó nuestra forma de entender el tiempo y el espacio, dándonos una perspectiva mayor que incluso nos ha llevado al espacio seducidos con la idea de vivir en otros planetas. Estos Objetos voladores - biplanos, zeppelins y globos- se encuentran sobre paisajes lejanos casi irreales, incrementando la sensación de fuga y libertad, o sobrevuelan la silueta de ciudades medievales, reconocibles, como seña romántica de evasión y belleza. Revisitando otro mito clásico, el de Dédalo e Ícaro, quizás la moraleja no sea “no te acerques al sol” sino “¡hazlo, pero hazlo mejor, más moderno, más rápido!”, breaking through the atmosphere, and things are pretty good from here.

Viajes de ensueño, paisajes oníricos y guiños a escenarios recorridos por el artista integran el imaginario de esta serie. En su concepción y elaboración, Rodrigo Nevsky utiliza la Inteligencia Artificial como herramienta, algoritmos avanzados permiten al artista generar combinaciones de imágenes inéditas y explorar las nuevas dimensiones creativas del arte digital. De esta manera, sobre fondos líricos con delicadas capas de acrílico, se insertan diferentes escenarios y objetos mediante la impresión digital. El color se convierte en elemento con personalidad propia, utilizado con gran acierto en los fondos y la integración de las imágenes. Un delicioso capricho que evidencia el saber hacer del artista, audaz en ejercicios monocromáticos, en fuertes contrastes o al utilizar todo el registro tonal en una obra, y sin embargo, perfectamente equilibrado en cada pieza, dejando sentir el anhelo por la belleza.

El resultado final nos transporta a otra realidad y nos permite prever las posibilidades creativas que ya vienen a nuestro encuentro. Su obra invita a reflexionar sobre el papel de la tecnología en la creación artística y sus implicaciones en este momento, en el que las líneas que limitan los conceptos de lo humano y lo artificial se difuminan para entrelazarse cada vez más. Es posible que como al volar, lanzarnos a una nueva etapa de desarrollo tecnológico confirme de nuevo la dualidad que convive en el interior del ser humano, capaz de inspirar todo lo bueno y generar a su vez lo terrible, pero es esa dicotomía la que permite que lo imposible se convierta en una realidad. Remember everything will be alright, we can meet again somewhere, somewhere far away from here.`
  }
];
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="brand">JOHN DOE</div>
          <ul className="nav-links">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>
              <a href="#legal">MENTIONS LÉGALES</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}

      <header id="home" className="hero">
        <div className="overlay">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button>En savoir plus</button>
        </div>
      </header>

      {/* About & Skills */}
      <section className="about-skills">
        <div className="about">
          <h3>À propos</h3>
          <img src="/portfolio/john-doe-about.jpg" alt="john-doe-about" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            necessitatibus consectetur tempore perferendis nostrum, ex delectus
            reiciendis impedit aut iure enim placeat? Natus, neque at?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            necessitatibus consectetur tempore perferendis nostrum, ex delectus
            reiciendis impedit aut iure enim placeat? Natus, neque at?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            necessitatibus consectetur tempore perferendis nostrum, ex delectus
            reiciendis impedit aut iure enim placeat? Natus, neque at?
          </p>
        </div>
        <div className="skills">
          <h3>Mes compétences</h3>
          <ul>
            <li>HTML5 90%</li>
            <li>CSS3 80%</li>
            <li>JavaScript 70%</li>
            <li>PHP 60%</li>
            <li>React 50%</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <h2>Mon offre de services</h2>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <div className="service-cards">
          <div className="card">
            <h3>UX Design</h3>
            <p>
              L’UX Design est une discipline qui consiste à concevoir des
              produits (sites web, applications mobiles, logiciels, objets
              connectés, etc.) en plaçant l'utilisateur au centre des
              préoccupations. L'objectif est de rendre l'experience utilisateur
              la plus fluide et agréable possible.
            </p>
          </div>
          <div className="card">
            <h3>Développement web</h3>
            <p>
              Le développement de sites web consiste à créer des sites internet
              en utilisant des langages de programmation (HTML, CSS, JavaScript,
              PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
            </p>
          </div>
          <div className="card">
            <h3>Référencement</h3>
            <p>
              Le référencement naturel (SEO) est une technique qui consiste à
              optimiser un site web pour le faire remonter dans les résultats
              des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif
              est d'attirer un maximum de visiteurs qualifiés sur le site.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="projects">
          <div className="project"> Fresh Food</div>
          <div className="project">Restaurant Akira</div>
          <div className="project">Espace bien-être</div>
          <div className="project">SEO</div>
          <div className="project">Création d'une API</div>
          <div className="project">Maquette d'un site web</div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section id="contact" className="contact">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-gray-600">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <hr className="w-1/4 mx-auto mt-2 border-t-4 border-blue-600" />

        <div className="flex flex-col md:flex-row justify-center items-start mt-10 gap-10 p-4">
          <div className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded">
            <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 mb-4">
              Formulaire de contact
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="tel"
                placeholder="Votre numéro de téléphone"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Sujet"
                className="w-full border rounded px-3 py-2"
              />
              <textarea
                placeholder="Votre message"
                className="w-full border rounded px-3 py-2 h-40"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Envoyer
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded">
            <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 mb-4">
              Mes coordonnées
            </h3>
            <p>
              <strong>John Doe</strong>
            </p>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
            <div className="mt-4">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.036930391748!2d4.795041315716029!3d45.77869127910647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb91eeb0ea05%3A0x4cb3f62e91e387e9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1611228341000!5m2!1sfr!2sfr"
                width="100%"
                height="250"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Mentions légales */}
      <section className="text-center my-12">
        <h2 className="text-3xl font-bold">Mentions légales</h2>
        <hr className="w-1/4 mx-auto mt-2 border-t-4 border-blue-600" />

        <div className="max-w-xl mx-auto mt-10 text-left">
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold text-lg">Editeur du site</h3>
            <p>John Doe</p>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
          </div>

          <div className="border p-4 rounded shadow mt-6">
            <h3 className="font-bold text-lg">Hébergeur</h3>
            <p>
              <strong>alwaysdata</strong>
            </p>
            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
            <a className="text-blue-600" href="https://www.alwaysdata.com">
              www.alwaysdata.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div>
            <h4>John Doe</h4>
            <p>40 rue Laure Diebold, 69009 Lyon</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
          </div>
          <div>
            <h4>Liens utiles</h4>
            <ul>
              <li>Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Me contacter</li>
              <li>Mentions légales</li>
            </ul>
          </div>
          <div>
            <h4>Mes dernières réalisations</h4>
            <ul>
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d’un site</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

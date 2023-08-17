import { Link } from "react-router-dom";
import s from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={s.container}>
      <div className={s.images}>
        <img
          className={s.header}
          src="https://media.licdn.com/dms/image/D4D16AQEkTbuv4O7caw/profile-displaybackgroundimage-shrink_350_1400/0/1685657208698?e=1697673600&v=beta&t=hBtj-7svCgOjnUstH5r5IUhYh7tH2YyJVP0-0_WFlN8"
        />
        <img
          className={s.profile}
          src="https://cdn.discordapp.com/attachments/1118592269872791638/1140996915111145502/Imagen_de_WhatsApp_2023-08-06_a_las_02.36.00.jpg"
        />
      </div>
      <div className={s.info}>
        <h1>Soy Julian Luque!</h1>
        <h3>Devoloper web junior 💻</h3>
      </div>
      <div className={s.about}>
        <p>
          🚀 Apasionado por la programación 💻 | Desarrollador web! |
          Aprendiendo y creciendo en Henry Bootcamp 🎓 | React ⚛️ y Redux 🔄 |
          habilidades en HTML, CSS & JavaScript 🌐 | Explorando el mundo de
          NodeJS 🛠️ | ¡Construyendo el futuro, cruzando el camino del junior! ✨
          | Comunicador eficiente y amante del trabajo en equipo 🤝 | ¡Un futuro
          ingeniero de software comprometido con el aprendizaje continuo y el
          crecimiento personal! 🌱
        </p>
      </div>
      <div className={s.technology}>
        <h1>Mi Tech Skills ⚙️</h1>
        <div className={s.tech}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
          <img src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" />
          <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" />
          <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-violet.png" />
          <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
        </div>
      </div>
      <div className={s.contactMe}>
        <h1>Contactame!</h1>
        <div className={s.contacts}>
          <a href="https://www.linkedin.com/in/julian-luque-2ba0281a6">
            <button>Linkedin</button>
          </a>
        </div>
        <svg src="../../"></svg>
      </div>
    </div>
  );
};

export default AboutMe;

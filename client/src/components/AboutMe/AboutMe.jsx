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
        🚀 Apasionado por la programación 💻 | Desarrollador web! | Aprendiendo
        y creciendo en Henry Bootcamp 🎓 | React ⚛️ y Redux 🔄 | habilidades en
        HTML, CSS & JavaScript 🌐 | Explorando el mundo de NodeJS 🛠️ |
        ¡Construyendo el futuro, cruzando el camino del junior! ✨ | Comunicador
        eficiente y amante del trabajo en equipo 🤝 | ¡Un futuro ingeniero de
        software comprometido con el aprendizaje continuo y el crecimiento
        personal! 🌱
      </div>
    </div>
  );
};

export default AboutMe;

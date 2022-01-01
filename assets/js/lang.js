function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}
// Define the language reload anchors
var about = {
    eng: {
        me: "I'm a",
        about_1: "ABOUT",
        about_2: "A motivated and ambitious student pursuing a Master Degree in Computer Science at the Lebanese University. Most users see a computer at the front and use the graphical user interfaces. The first time I used a computer, it intrigued me to know how these interfaces work, the theory behind computers and the methodology of how they work...",
        about_3: "Programmer & Freelancer",
        about_4: "I'm mainly a java and Android App Dev and currently I'm working on improving my web developing skill.",
        about_5: "The world of computers is growing at an un-recordable rate everyday, computers are the most influential tools in our lives, they are our present and future. In my opinion nothing on the planet can measure the exponential growth and excitement in the computing industry, and industry which I want to be a part of.",
        about_birthday: "Birthday:",
        about_birthday_1: "12 May 1998",
        about_website: "Website:",
        about_phone: "Phone:",
        about_city: "City:",
        about_city_1: "Beirut, Lebanon",
        about_age: "Age:",
        about_degree: "Degree:",
        about_email: "Email:",
        about_freelance: "Freelance",
        about_freelance_1: "Available"
    },
    fr: {
        me: "Je suis un ",
        about_1: "À PROPOS",
        about_2: "Un étudiant motivé et ambitieux poursuivant un Master en Informatique à l'Université Libanaise. La plupart des utilisateurs voient un ordinateur à l'avant et utilisent les interfaces utilisateur graphiques. La première fois que j'ai utilisé un ordinateur, cela m'a intrigué de savoir comment fonctionnent ces interfaces, la théorie derrière les ordinateurs et la méthodologie de leur fonctionnement...",
        about_3: "Programmeur & Freelancer",
        about_4: "Je suis principalement un développeur d'applications Java et Android et je travaille actuellement sur l'amélioration de mes compétences en développement Web.",
        about_5: "Le monde des ordinateurs se développe à un rythme non enregistrable tous les jours, les ordinateurs sont les outils les plus influents dans nos vies, ils sont notre présent et notre avenir. À mon avis, rien sur la planète ne peut mesurer la croissance exponentielle et l'enthousiasme de l'industrie informatique et de l'industrie dont je veux faire partie.",
        about_birthday: "Date de Naissance:",
        about_birthday_1: "12 Mai 1998",
        about_website: "Website:",
        about_phone: "Téléphone:",
        about_city: "Ville:",
        about_city_1: "Beyrouth, Liban",
        about_age: "Âge:",
        about_degree: "Diplôme:",
        about_email: "Email:",
        about_freelance: "Freelance",
        about_freelance_1: "Disponible"
    },
};

var skill = {
    eng: {
        skill_1: "SKILLS",
        skill_2: "I'm mainly a java and Android App Dev and currently I'm working on improving my web developing skill.",
    },
    fr: {
        skill_1: "COMPÉTENCES",
        skill_2: "Je suis principalement un développeur d'applications Java et Android et je travaille actuellement sur l'amélioration de mes compétences en développement Web.",
    },
};

var resume = {
    eng: {
        resume_1: "Resume",
        resume_2: "My experience is limited to the projects I presented during my studies and the freelance project that I did.",
        resume_3: "Sumarry",
        resume_4: "Innovative and deadline-driven Java Developer , Fresh-graduate computer science student.",
        resume_5: "Beirut, LB",
        resume_6: "Education",
        resume_7: "Master (M1) Degree In Computer Science",
        resume_8: "Lebanese University, Faculty of Science, Beirut",
        resume_9: "Master 1 in Applied Mathematics, Computer Science, Lebanese University, Faculty of Sciences.",
        resume_10: "Bachelor’s Degree of Computer Science",
        resume_11: "Lebanese University, Faculty of Science, Nabatieh",
        resume_12: "Bachelor’s Degree in Applied Mathematics, Computer Science, Lebanese University, Faculty of Sciences.",
        resume_13: "Scientific Baccalaureate, General Science Section",
        resume_14: "Abbassieh High school, Abbassieh",
        resume_15: "Scientific Baccalaureate, General Science Section, Abbassieh High school.",
        resume_16: "Professional Experience",
        resume_17: "Developing AI Game (Othello) ",
        resume_18: "Apr 2020 - Aug 2020",
        resume_19: "University Project",
        resume_20: "Developing a strategy board game with C# using unity with an AI Opponent.",
        resume_21: "Developing Java Mail Application",
        resume_22: "May 2020 - Aug 2020",
        resume_23: "University Project",
        resume_24: "Developing and implementing client-server protocol designed to efficiently transfer mail and limit junk mail profusion (Stopping Spam Emails).",
        resume_25: "Developing E-commerce Mobile Application",
        resume_26: "Individual Project",
        resume_27: "Developing and maintaining an android based sharing platform for non-critical reusable medical devices.",
        resume_28: "Developing Java Accounting Software",
        resume_29: "Oct 2018 - Feb 2019",
        resume_30: "Individual Project",
        resume_31: "Developing an Accounting Software to help orchard owner manage the payments, the receipts, the employees and their payments and the invoices of the market.",
        resume_32: "You can find more about my projects in my account"
    },
    fr: {
        resume_1: "Resume",
        resume_2: "Mon expérience se limite aux projets que j'ai présentés durant mes études et au projet en freelance que j'ai réalisé.",
        resume_3: "Résumé",
        resume_4: "Développeur Java innovant et deadline-driven, étudiant diplômé en informatique.",
        resume_5: "Beyrouth, LB",
        resume_6: "Éducation",
        resume_7: "Master (M1) en Informatiquex",
        resume_8: "Université Libanaise, Faculté des Sciences, Beyrouth",
        resume_9: "Master 1 Mathématiques Appliquées, Informatique, Université Libanaise, Faculté des Sciences.",
        resume_10: "Licence en informatique",
        resume_11: "Université Libanaise, Faculté des Sciences, Nabatieh",
        resume_12: "Licence Mathématiques Appliquées, Informatique, Université Libanaise, Faculté des Sciences.",
        resume_13: "Baccalauréat Scientifique, Section Sciences Générales",
        resume_14: "Lycée Abbassieh, Abbassieh",
        resume_15: "Baccalauréat Scientifique, Section Sciences Générales, Lycée Abbassieh.",
        resume_16: "Expérience professionnelle",
        resume_17: "Développement d'un jeu d'IA (Othello)",
        resume_18: "Avr 2020 - Août 2020",
        resume_19: "Projet universitaire",
        resume_20: "Développement d'un jeu Jeu de société avec C# en utilisant unity avec un adversaire IA.",
        resume_21: "Développement d'une application de messagerie Java",
        resume_22: "Mai 2020 - Août 2020",
        resume_23: "Projet universitaire",
        resume_24: "Développer et implémenter un protocole client-serveur conçu pour transférer efficacement le courrier et limiter la profusion de courrier indésirable (Stopping Spam Emails).",
        resume_25: "Développement d'une application mobile E-commerce",
        resume_26: "Projet individuel",
        resume_27: "Développer et maintenir une plate-forme de partage basée sur Android pour les dispositifs médicaux réutilisables non critiques.",
        resume_28: "Développement d'un logiciel de comptabilité Java",
        resume_29: "Oct 2018 - Fév 2019",
        resume_30: "Projet individuel",
        resume_31: "Développement d'un logiciel de comptabilité pour aider le propriétaire du verger à gérer les paiements, les recettes, les employés et leurs paiements et les factures du marché.",
        resume_32: "Vous pouvez en savoir plus sur mes projets dans mon compte "
    },
};

var portfolio = {
    eng: {
        portfolio_1: "Portfolio",
        portfolio_2: "In this section i will give a quick glimpse about the projects that I've done and some of my current projects.",
        portfolio_3: "All",
        portfolio_4: "Software",
        portfolio_5: "App",
        portfolio_6: "Card",
        portfolio_7: "Web",
        portfolio_8: "Tcsmp",
        portfolio_9: "Software",
    },
    fr: {
        portfolio_1: "Portfolio",
        portfolio_2: "Dans cette section, je vais donner un aperçu rapide des projets que j'ai réalisés et de certains de mes projets en cours.",
        portfolio_3: "Tout",
        portfolio_4: "Logiciel",
        portfolio_5: "Application",
        portfolio_6: "Carte",
        portfolio_7: "Web",
        portfolio_8: "Tcsmp",
        portfolio_9: "Logiciel",
    },
};

// Check if a hash value exists in the URL
if (window.location.hash) {

    // Set the content of the webpage 
    // depending on the hash value
    if (window.location.hash == "#fr") {
        hero_me.textContent = about.fr.me;
        cv_link.href = "CV/cv-details.html";
        test.textContent = about.fr.about_1;

        //About Section
        about_header.textContent = about.fr.about_1;
        about_description.textContent = about.fr.about_2;
        about_tag_3.textContent = about.fr.about_3;
        about_tag_4.textContent = about.fr.about_4;
        about_tag_5.textContent = about.fr.about_5;
        about_birthday.textContent = about.fr.about_birthday;
        about_birthday_1.textContent = about.fr.about_birthday_1;
        about_website.textContent = about.fr.about_website;
        about_phone.textContent = about.fr.about_phone;
        about_city.textContent = about.fr.about_city;
        about_city_1.textContent = about.fr.about_city_1;
        about_age.textContent = about.fr.about_age;
        about_degree.textContent = about.fr.about_degree;
        about_email.textContent = about.fr.about_email;
        about_freelance.textContent = about.fr.about_freelance;
        about_freelance_1.textContent = about.fr.about_freelance_1;

        //Skills Section
        skill_1.textContent = skill.fr.skill_1;
        skill_2.textContent = skill.fr.skill_2;

        //Resume Section
        resume_1.textContent = resume.fr.resume_1;
        resume_2.textContent = resume.fr.resume_2;
        resume_3.textContent = resume.fr.resume_3;
        resume_4.textContent = resume.fr.resume_4;
        resume_5.textContent = resume.fr.resume_5;
        resume_6.textContent = resume.fr.resume_6;
        resume_7.textContent = resume.fr.resume_7;
        resume_8.textContent = resume.fr.resume_8;
        resume_9.textContent = resume.fr.resume_9;
        resume_10.textContent = resume.fr.resume_10;
        resume_11.textContent = resume.fr.resume_11;
        resume_12.textContent = resume.fr.resume_12;
        resume_13.textContent = resume.fr.resume_13;
        resume_14.textContent = resume.fr.resume_14;
        resume_15.textContent = resume.fr.resume_15;
        resume_16.textContent = resume.fr.resume_16;
        resume_17.textContent = resume.fr.resume_17;
        resume_18.textContent = resume.fr.resume_18;
        resume_19.textContent = resume.fr.resume_19;
        resume_20.textContent = resume.fr.resume_20;
        resume_21.textContent = resume.fr.resume_21;
        resume_22.textContent = resume.fr.resume_22;
        resume_23.textContent = resume.fr.resume_23;
        resume_24.textContent = resume.fr.resume_24;
        resume_25.textContent = resume.fr.resume_25;
        resume_26.textContent = resume.fr.resume_26;
        resume_27.textContent = resume.fr.resume_27;
        resume_28.textContent = resume.fr.resume_28;
        resume_29.textContent = resume.fr.resume_29;
        resume_30.textContent = resume.fr.resume_30;
        resume_31.textContent = resume.fr.resume_31;
        resume_32.textContent = resume.fr.resume_32;
        var tag = document.createElement("i");
        tag.classList.add("bx", "bxl-github");
        resume_32.appendChild(tag);

        //Portfolio Section
        portfolio_1.textContent = portfolio.fr.portfolio_1;
        portfolio_2.textContent = portfolio.fr.portfolio_2;
        portfolio_3.textContent = portfolio.fr.portfolio_3;
        portfolio_4.textContent = portfolio.fr.portfolio_4;
        portfolio_5.textContent = portfolio.fr.portfolio_5;
        portfolio_6.textContent = portfolio.fr.portfolio_6;
        portfolio_7.textContent = portfolio.fr.portfolio_7;
        portfolio_8.textContent = portfolio.fr.portfolio_8;
        portfolio_9.textContent = portfolio.fr.portfolio_9;

    }
}
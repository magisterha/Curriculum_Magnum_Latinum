// Diccionario de Traducciones
const translations = {
    // 🇪🇸 ESPAÑOL
    es: {
        title: "Curriculum Magnum Latinum",
        subtitle: "Arquitectura Cognitiva & Latín Clásico",
        intro: "Igual que el entrenamiento físico es la base de todo deporte, el Latín estructura la mente para la era de la Inteligencia Artificial. Siendo la raíz del vocabulario científico universal, este programa de 6 años no solo enseña un idioma, sino que 'muscula' la cognición para dominar la lógica compleja y los estudios superiores.",
        phase1_title: "Fase I: Fundamentos (12-14 años)",
        phase1_desc: "Adquisición natural mediante 'Lingua Latina Per Se Illustrata'. Construcción del sistema operativo mental.",
        phase2_title: "Fase II: Poder (14-16 años)",
        phase2_desc: "Lógica y Estrategia. Análisis profundo de César (De Bello Gallico), Salustio y la oratoria de Cicerón.",
        phase3_title: "Fase III: Humanitas (16-18 años)",
        phase3_desc: "Estética y Filosofía. Maestría de la Eneida de Virgilio, Poesía Lírica y Retórica avanzada.",
        cta_title: "¿Buscas la excelencia?",
        cta_desc: "Las plazas son limitadas para garantizar la calidad de la mentoría.",
        apply_button: "Solicitar Admisión",
        footer: "Diseñado con Inteligencia Artificial."
    },
    // 🏛️ LATINA
    la: {
        title: "Curriculum Magnum Latinum",
        subtitle: "Architectura Cognitiva & Latinitas Classica",
        intro: "Sicut athletae corpus exercent ad omnia certamina, ita Latinitas mentem format ad Aetatem Artificialem (AI). Fundamentum scientiae universalis, hic cursus sex annorum non modo linguam tradit, sed rationem ipsam acuit et intellectum roborat ad altiora studia capessenda.",
        phase1_title: "Phasis I: Fundamenta (Ann. 12-14)",
        phase1_desc: "Acquisitio naturalis per 'Lingua Latina Per Se Illustrata'. Structura mentis aedificatur.",
        phase2_title: "Phasis II: Potestas (Ann. 14-16)",
        phase2_desc: "Logica et Strategia. Caesar (De Bello Gallico), Sallustius et Cicero penitus investigantur.",
        phase3_title: "Phasis III: Humanitas (Ann. 16-18)",
        phase3_desc: "Aesthetica et Philosophia. Aeneis Vergilii, Carmina et Rhetorica superior.",
        cta_title: "Excellentiam quaerisne?",
        cta_desc: "Loci sunt limitati ut qualitas institutionis servetur.",
        apply_button: "Nomen Dare / Scribere",
        footer: "Arte Robotica (AI) designatum."
    },
    // 🇬🇧 ENGLISH
    en: {
        title: "Curriculum Magnum Latinum",
        subtitle: "Cognitive Architecture & Classical Latin",
        intro: "Just as physical conditioning is essential for any sport, Latin creates the cognitive architecture for the Age of AI. As the root of universal scientific terminology, this 6-year curriculum serves as 'mental calisthenics', conditioning the mind for complex logic, algorithms, and higher education.",
        phase1_title: "Phase I: Foundations (Ages 12-14)",
        phase1_desc: "Natural acquisition via 'Lingua Latina Per Se Illustrata'. Building the mental operating system.",
        phase2_title: "Phase II: Power (Ages 14-16)",
        phase2_desc: "Logic and Strategy. Deep analysis of Caesar (De Bello Gallico), Sallust, and Ciceronian oratory.",
        phase3_title: "Phase III: Humanitas (Ages 16-18)",
        phase3_desc: "Aesthetics and Philosophy. Mastery of Virgil's Aeneid, Lyric Poetry, and Advanced Rhetoric.",
        cta_title: "Seeking Excellence?",
        cta_desc: "Spots are limited to ensure mentorship quality.",
        apply_button: "Apply Now",
        footer: "Designed with Artificial Intelligence."
    },
    // 🇹🇼 繁體中文 (CHINO TRADICIONAL)
    zh: {
        title: "拉丁語宏大課程",
        subtitle: "認知架構與古典拉丁語",
        intro: "如同體能訓練是所有運動的基礎，拉丁語為人工智慧時代構建了強大的認知架構。作為科學與學術知識的根基，這個六年制課程不僅教授語言，更像是思維的「核心肌群訓練」，鍛鍊大腦以應對高等教育與複雜邏輯的挑戰。",
        phase1_title: "第一階段：基礎 (12-14歲)",
        phase1_desc: "透過《Lingua Latina Per Se Illustrata》進行自然習得。建立思維的操作系統。",
        phase2_title: "第二階段：力量 (14-16歲)",
        phase2_desc: "邏輯與策略。深入分析凱撒《高盧戰記》、薩盧斯提烏斯及西塞羅的演說。",
        phase3_title: "第三階段：人文 (16-18歲)",
        phase3_desc: "美學與哲學。精通維吉爾《埃涅阿斯紀》、抒情詩及高階修辭學。",
        cta_title: "追求卓越？",
        cta_desc: "為確保指導品質，名額有限。",
        apply_button: "申請入學 / 聯繫導師",
        footer: "由人工智慧設計。"
    }
};

// Función para cambiar el idioma
function setLanguage(lang) {
    const selectedLang = translations[lang] ? translations[lang] : translations['es'];
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (selectedLang[key]) {
            element.textContent = selectedLang[key];
        }
    });

    // Cambiar la etiqueta lang del HTML para accesibilidad y SEO
    document.documentElement.lang = lang;
}

// Inicializar en español
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('es'); 
});

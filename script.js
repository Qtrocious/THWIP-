// script.js

// Language Translation Dictionary
const translations = {
    en: {
        "main-title": "THWIP!!",
        "main-subtitle": "Make your OWN wearable HID",
        
        "intro-title": "Control the Web. Literally.",
        "intro-text": "THWIP!! is a hardware challenge where you build an open-source, wearable Human Interface Device (HID) that lets you control your computer with hand gestures. We send you the kit, you design the PCB, build the web-shooter, and ship it!",
        
        "kit-header": "// The Challenge & The Kit",
        "kit-title": "What You'll Build",
        "kit-text1": "You're going straight to a custom wearable. If your proposal is approved, we provide a kit with the core components: an IMU (like an MPU6050) for tracking your wrist flicks, a native-USB microcontroller, and a battery management system.",
        "label-mcu": "Microcontroller",
        "label-imu": "IMU Sensor",
        "label-battery": "Power System",
        "kit-text2": "Your mission? Design a custom PCB to fit it all onto your wrist, figure out a sleek housing (3D printing recommended!), and write the code to translate your Spider-Man moves into keyboard/mouse macros. Ship the final working project to get the ultimate prize!",
        
        "steps-header": "// How to Build & Ship",
        "step1-title": "Prototyping",
        "step1-text": "Test the IMU and microcontroller on a breadboard. Get the raw pitch, roll, and yaw data reading cleanly into your serial monitor.",
        "step2-title": "The PCB Design",
        "step2-text": "Route a custom board! Design it to fit strapped to your wrist or resting in your palm. Add the battery management system so it's fully wearable.",
        "step3-title": "Write the HID Logic",
        "step3-text": "Code the gesture recognition. Turn a rapid wrist flick into a `Mouse.move()` or a `Keyboard.press()`. Make it smooth and usable.",
        "step4-title": "Ship It!",
        "step4-text": "Submit your working project repository and a video of you using it. We review it, and send you the ultimate maker hardware prize!",
        
        "faq1-question": "All this, for free?!",
        "faq1-answer": "Yes! If your initial design gets approved, we'll send you the core hardware kit completely free. In exchange, you have to design the PCB, assemble it, document your code, and ship your high-quality project.",
        "faq2-question": "What exactly is in the kit?",
        "faq2-answer": "You'll get the essentials to make the magic happen: a microcontroller with HID capabilities, an accelerometer/gyroscope module, a lipo battery, and a charging circuit. The actual PCB routing and the physical web-shooter housing are entirely up to you!",
        "faq3-question": "Do I need to know how to design a PCB?",
        "faq3-answer": "It definitely helps, but if you've never done it before, this is the perfect time to learn! You can use software like KiCad or EasyEDA to route your wearable board, and there are tons of tutorials online to get you started. Just don't be afraid to ask for help.",
        "faq4-question": "Can I map the gestures to anything?",
        "faq4-answer": "Exactly. Because it acts as a standard USB HID, your computer just thinks it's a keyboard and mouse. You can program a wrist flick to be \"Scroll Down\", a pinch to be \"Left Click\", or sequence an insanely complex keyboard macro.",
        
        "footer-text": "Built by Alonso. Designed for the web."
    },
    es: {
        "main-title": "¡¡THWIP!!",
        "main-subtitle": "Crea tu PROPIO HID vestible",
        
        "intro-title": "Controla la Web. Literalmente.",
        "intro-text": "¡THWIP!! es un desafío de hardware en el que construyes un Dispositivo de Interfaz Humana (HID) vestible y de código abierto que te permite controlar tu computadora con gestos de la mano. ¡Nosotros te enviamos el kit, tú diseñas la PCB, construyes el lanza-telarañas y lo envías!",
        
        "kit-header": "// El Reto y El Kit",
        "kit-title": "Qué Construirás",
        "kit-text1": "Vas directo a crear un wearable personalizado. Si se aprueba tu propuesta, te proporcionamos un kit con los componentes clave: una IMU (como un MPU6050) para rastrear los movimientos de tu muñeca, un microcontrolador con USB nativo y un sistema de gestión de batería.",
        "label-mcu": "Microcontrolador",
        "label-imu": "Sensor IMU",
        "label-battery": "Sistema de Energía",
        "kit-text2": "¿Tu misión? Diseñar una PCB personalizada que quepa en tu muñeca, crear una carcasa elegante (¡se recomienda impresión 3D!) y escribir el código para traducir tus movimientos de Spider-Man en macros de teclado/ratón. ¡Envía el proyecto final funcionando para obtener el premio definitivo!",
        
        "steps-header": "// Cómo Construir y Enviar",
        "step1-title": "Prototipado",
        "step1-text": "Prueba la IMU y el microcontrolador en una protoboard. Consigue que los datos crudos de pitch, roll y yaw se lean limpiamente en tu monitor serie.",
        "step2-title": "Diseño de PCB",
        "step2-text": "¡Rutea una placa personalizada! Diséñala para que encaje atada a tu muñeca o descansando en tu palma. Añade el sistema de gestión de batería para que sea completamente portátil.",
        "step3-title": "Escribe la Lógica HID",
        "step3-text": "Programa el reconocimiento de gestos. Convierte un movimiento rápido de muñeca en un `Mouse.move()` o un `Keyboard.press()`. Haz que sea fluido y usable.",
        "step4-title": "¡Envíalo!",
        "step4-text": "Envía el repositorio de tu proyecto funcional y un video tuyo usándolo. ¡Lo revisamos y te enviamos el premio definitivo de hardware para makers!",
        
        "faq1-question": "¿Todo esto, gratis?!",
        "faq1-answer": "¡Sí! Si tu diseño inicial es aprobado, te enviaremos el kit de hardware principal totalmente gratis. A cambio, tienes que diseñar la PCB, ensamblarla, documentar tu código y enviar tu proyecto de alta calidad.",
        "faq2-question": "¿Qué hay exactamente en el kit?",
        "faq2-answer": "Obtendrás lo esencial para que la magia suceda: un microcontrolador con capacidades HID, un módulo de acelerómetro/giroscopio, una batería lipo y un circuito de carga. ¡El ruteo real de la PCB y la carcasa física del lanza-telarañas dependen completamente de ti!",
        "faq3-question": "¿Necesito saber cómo diseñar a PCB?",
        "faq3-answer": "Definitivamente ayuda, pero si nunca lo has hecho antes, ¡este es el momento perfecto para aprender! Puedes usar software como KiCad o EasyEDA para rutear tu placa vestible, y hay muchísimos tutoriales en línea para empezar. Solo no tengas miedo de pedir ayuda.",
        "faq4-question": "¿Puedo mapear los gestos a cualquier cosa?",
        "faq4-answer": "Exactamente. Al actuar como un HID USB estándar, tu computadora simplemente piensa que es un teclado y un ratón. Puedes programar un movimiento de muñeca para \"Deslizar hacia abajo\", un pellizco para \"Clic izquierdo\", o secuenciar una macro de teclado increíblemente compleja.",
        
        "footer-text": "Construido por Alonso. Diseñado para la web."
    }
};

let currentLang = 'en';
const langToggleBtn = document.getElementById('lang-toggle');

langToggleBtn.addEventListener('click', () => {
    // Swap the language variable
    currentLang = currentLang === 'en' ? 'es' : 'en';
    
    // Change the text on the button itself
    langToggleBtn.innerText = currentLang === 'en' ? 'ESP' : 'ENG';

    // Find all HTML elements that have a "data-i18n" tag and replace their text
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }
    });
});
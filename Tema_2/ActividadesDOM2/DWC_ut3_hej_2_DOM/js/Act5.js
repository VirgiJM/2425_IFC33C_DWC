let titulos = ["Descubren nuevo planeta habitable",
    "Innovador avance en inteligencia artificial",
    "Histórico acuerdo de paz firmado",
    "Impactante descubrimiento arqueológico",
    "Revolucionario dispositivo promete resolver la crisis energética",
    "Crean vacuna contra enfermedad incurable",
    "Fenómeno climático extremo sorprende a expertos",
    "Astrónomos detectan señales misteriosas desde el espacio profundo",
    "Nueva tecnología permite la producción masiva de energía limpia",
    "Hallan manuscritos perdidos de una civilización antigua"
];
let parrafos = [
    "El hallazgo podría cambiar nuestra comprensión del universo y abrir una nueva era de exploración espacial, con misiones tripuladas a otros sistemas solares.",
    "Este avance promete revolucionar diversas industrias en los próximos años, desde la salud hasta la educación, gracias a la capacidad de aprender y adaptarse en tiempo real.",
    "El acuerdo marca el fin de un conflicto de décadas en la región, generando esperanza para millones de personas afectadas por la guerra y abriendo puertas al desarrollo económico.",
    "Los arqueólogos afirman que este descubrimiento reescribe la historia conocida, proporcionando detalles nunca antes vistos sobre civilizaciones antiguas y sus avances tecnológicos.",
    "Expertos analizan el impacto de este cambio en la economía global, sugiriendo que podríamos estar ante un punto de inflexión que alterará las dinámicas de poder en las próximas décadas.",
    "La vacuna desarrollada en tiempo récord podría salvar millones de vidas y erradicar enfermedades que han plagado a la humanidad durante siglos.",
    "El fenómeno climático, que incluye tormentas nunca antes vistas, está llevando a los científicos a reevaluar los modelos climáticos tradicionales y sus predicciones futuras.",
    "Las señales provenientes del espacio profundo han generado debates en la comunidad científica, despertando preguntas sobre la existencia de vida extraterrestre.",
    "La tecnología revolucionaria ha sido presentada como una solución viable para reducir drásticamente las emisiones de carbono a nivel mundial.",
    "Los manuscritos descubiertos contienen información que podría desvelar secretos sobre la organización política y social de una civilización perdida hace miles de años."
];

for (let i = 0; i < titulos.length; i++) {

    // Creación de los section.
    let section = document.createElement("section");
    document.body.appendChild(section);
    let numero = i + 1; // Esta variable la usaré para asignarle un id diferente a cada sección, título y párrafo.
    section.id = "noticia" + numero;
    section.className = "noticia";

    // Creación de los encabezados.
    let encabezado = document.createElement("h3");
    section.appendChild(encabezado);
    encabezado.id = "encabezado" + numero;
    encabezado.className = "encabezados";
    let tituloAleatorio = Math.floor(Math.random() * (titulos.length)); // Representa la posición del array. En teoría, dará un resultado entre 0 y 9.
    // console.log(tituloAleatorio);
    encabezado.innerHTML = titulos[tituloAleatorio];

    // Creación de los párrafos.
    let parrafo = document.createElement("p");
    section.appendChild(parrafo);
    parrafo.id = "parrafo" + numero;
    parrafo.className = "parrafos";
    let parrafoAleatorio = Math.floor(Math.random() * (parrafos.length));
    parrafo.innerHTML = parrafos[parrafoAleatorio];

}

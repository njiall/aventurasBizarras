import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneradorTitulosService2 {

  titulos: String[]; // Array de títulos
  version = 'V_0.1'; // Versión del servicio

  getVersion() {
    return this.version;
  }
  generarTitulos(numero: number) {
    this.titulos = [];
    for (let index = 0; index < numero; index++) {
      this.titulos.push(this.generarTitulo());
    }
    return this.titulos;
  }

  generarTitulo() {
    // Sexo del título. 0 es masculino y 1 femenino
    const SEXO = Math.floor(Math.random() * 2);
    const SEXO_ALT = Math.floor(Math.random() * 2);
    // Número del título. 0 es singular y 1 plural
    const NUMERO = Math.floor(Math.random() * 2);
    const NUMERO_ALT = Math.floor(Math.random() * 2);

    // Plantillas de título
    const PLANTILLAS = [
                        `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)}`,
                        `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getAdjetivo(SEXO, NUMERO)}`,
                        `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getPreposicion()} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getPreposicion()} ${this.getArticulo(SEXO_ALT, NUMERO_ALT)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getAdjetivoApoc(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)}`,
                        // `${this.getArticulo(SEXO, 0)} ${this.getAdjetivoApoc(SEXO, 0)} ${this.getNombrePropio(SEXO)}`,
                        // `${this.getArticulo(SEXO, 0)} ${this.getAdjetivoApoc(SEXO, 0)} ${this.getNombrePropioPersona(SEXO)}`,
                        // `${this.getNombre(SEXO, NUMERO)} ${this.getPreposicion()} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getNombrePropioPersona(SEXO)} ${this.getPreposicion()} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getNombrePropioPersona(SEXO)} ${this.getPreposicion()} ${this.getNombrePropio(SEXO_ALT)}`,
                        // `${this.getAdjetivoApoc(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getPreposicion()} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getVerbo(NUMERO)}`,
                        // `lo que ${this.getVerbo(0)}`,
                        // `los que ${this.getVerbo(1)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getVerbo(NUMERO)} ${this.getArticulo(SEXO_ALT, NUMERO_ALT)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `¡${this.getImperativo(NUMERO)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}!`,
                        // `¡${this.getImperativo(NUMERO_ALT)} ${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)}!`,
                        // `¡${this.getImperativo(NUMERO)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)} ${this.getAdjetivo(SEXO_ALT, NUMERO_ALT)}!`,
                        // `¡${this.getImperativo(NUMERO_ALT)} ${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getAdjetivo(SEXO, NUMERO)}!`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getVerbo(NUMERO)} ${this.getParticipio(SEXO, NUMERO)} `,
                        // `${this.getSignoPuntuacion(0, 0)}${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)}${this.getSignoPuntuacion(0, 1)}`,
                        // `${this.getSignoPuntuacion(1, 0)}${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)}${this.getSignoPuntuacion(1, 1)}`,
                        // `${this.getSignoPuntuacion(0, 0)}${this.getAdjetivoApoc(SEXO, NUMERO)} ${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)}${this.getSignoPuntuacion(0, 1)}`,
                        // `${this.getSignoPuntuacion(1, 0)}${this.getAdjetivoApoc(SEXO, NUMERO)} ${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)}${this.getSignoPuntuacion(1, 1)}`,
                        // `${this.getSignoPuntuacion(0, 0)}${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getAdjetivo(SEXO, NUMERO)}${this.getSignoPuntuacion(0, 1)}`,
                        // `${this.getSignoPuntuacion(1, 0)}${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getAdjetivo(SEXO, NUMERO)}${this.getSignoPuntuacion(1, 1)}`,
                        // `${this.getNombrePropioPersona(SEXO)} ${this.getArticulo(SEXO, 0)} ${this.getAdjetivo(SEXO, 0)}`,
                        // A partir de aquí están sujetos a revisión
                        // `${this.getNombre(SEXO, NUMERO)}`,
                        // `${this.getNombre(SEXO, NUMERO)} ${this.getAdjetivo(SEXO, NUMERO)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getAdjetivo(SEXO, NUMERO)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getAdjetivo(SEXO, NUMERO)} de ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getAdjetivo(SEXO, NUMERO)} ${this.getPreposicion()} ${this.getArticulo(SEXO_ALT, NUMERO_ALT)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getNombre(SEXO, NUMERO)} y ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getNombre(SEXO, NUMERO)} y ${this.getArticulo(SEXO_ALT, NUMERO_ALT)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} y ${this.getArticulo(SEXO_ALT, NUMERO_ALT)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getNombre(SEXO, NUMERO)} y ${this.getArticulo(SEXO_ALT, NUMERO_ALT)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} y ${this.getArticulo(SEXO_ALT, NUMERO_ALT)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getNombre(SEXO, NUMERO)} de ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getNombre(SEXO_ALT, NUMERO_ALT)} de ${this.getNombre(SEXO, NUMERO)} ${this.getAdjetivo(SEXO, NUMERO)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} de ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getNombre(SEXO_ALT, NUMERO_ALT)} ${this.getPreposicion()} ${this.getArticulo(SEXO, NUMERO)}  ${this.getNombre(SEXO, NUMERO)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getPreposicion()} ${this.getArticulo(SEXO_ALT, NUMERO_ALT)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getPreposicion()} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getEstadoVerbo()} ${this.getParticipio(SEXO, NUMERO)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getArticulo(SEXO, NUMERO)}  ${this.getNombre(SEXO, NUMERO)}  ${this.getParticipio(SEXO, NUMERO)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)} ${this.getParticipio(SEXO, NUMERO)}`,
                        // `${this.getNombre(SEXO, NUMERO)}  ${this.getGerundio()}`,
                        // `${this.getPreposicion()} ${this.getArticulo(SEXO, NUMERO)}  ${this.getNombre(SEXO, NUMERO)}`,
                        // `${this.getPreposicion()} ${this.getArticulo(SEXO, NUMERO)}  ${this.getNombre(SEXO, NUMERO)} y ${this.getArticulo(SEXO_ALT, NUMERO_ALT)} ${this.getNombre(SEXO_ALT, NUMERO_ALT)}`,
                        // `${this.getPreposicion()} ${this.getArticulo(SEXO, NUMERO)}  ${this.getNombre(SEXO, NUMERO)}  ${this.getAdjetivo(SEXO, NUMERO)}`,
                        // `${this.getArticulo(SEXO, NUMERO)} ${this.getParticipio(SEXO, NUMERO)} ${this.getNombre(SEXO, NUMERO)}`,
                        // `${this.getGerundio()}  ${this.getNombre(SEXO, NUMERO)}`,
                        // `${this.getArticulo(SEXO, NUMERO)}  ${this.getNombre(SEXO, NUMERO)}`
                      ];

    return PLANTILLAS[Math.floor(Math.random() * PLANTILLAS.length)];
  }

  getArticulo(sexo: number, numero: number) {
    const ARTICULOMASC = [['el', 'los'], ['un', 'unos'], ['este', 'estos'], ['aquel', 'aquellos'], ['mi', 'mis'], ['nuestro', 'nuestros'], ['su', 'sus']];
    const ARTICULOFEM =  [['la', 'las'], ['una', 'unas'], ['esta', 'estas'], ['aquella', 'aquellas'], ['mi', 'mis'], ['nuestra', 'nuestras'], ['su', 'sus']];
     let listaArticulos: any[];

    if (sexo === 0) {
      listaArticulos = ARTICULOMASC;
    } else {
      listaArticulos = ARTICULOFEM;
    }

    return  listaArticulos[Math.floor(Math.random() * listaArticulos.length)][numero];
  }

  getNombrePropio(sexo: number) {
    const MASCULINOS = [ 'Sirio', 'Hombre murciélago', 'Hombre Topo', 'Jaguar', 'Marte'];
    const FEMENINOS = ['Andrómeda', 'Mujer murciélago', 'Mujer pantera', 'Gata'];

    let lista: string[];

    if (sexo === 0) {
      lista = MASCULINOS;
    } else {
      lista = FEMENINOS;
    }

    return lista[Math.floor(Math.random() * lista.length)];
  }

  getNombrePropioPersona(sexo: number) {
    const MASCULINOS = [ 'Alexander', 'Alejandro', 'Ángel', 'Burton', 'Charles', 'Denis', 'Edgard', 'Freddy', 'George', 'Howard', 'Irving', 'Javier', 'Karl', 'Loui', 'Mark', 'Nelson', 'Oscar', 'Patrick', 'Quincy', 'Robert', 'Sam', 'Thomas', 'Uncas', 'Victor', 'William', 'Xavier', 'Zebediah'];
    const FEMENINOS = ['Alexandra', 'Alicia', 'Bárbara', 'Betsy', 'Carla', 'Denisse', 'Edna', 'Fanny', 'Greta', 'Helen', 'Irene', 'Jennipher', 'Kristen', 'Laura', 'Mod', 'Nancy', 'Odette', 'Patrice', 'Roberta', 'Samantha', 'Thelma', 'Uncas', 'Victoria', 'Wilhemina', 'Xenia', 'Zandra'];

    let lista: string[];

    if (sexo === 0) {
      lista = MASCULINOS;
    } else {
      lista = FEMENINOS;
    }

    return lista[Math.floor(Math.random() * lista.length)];
  }

  getNombre(sexo: number, numero: number) {
    const MASCULINOS = [ ['pago', 'pagos'], ['pecado', 'pecados'], ['rey', 'reyes'], ['hacedor', 'hacedores'], ['planeta', 'planetas'], ['viaje', 'viajes'], ['horror', 'horrores'], ['terror', 'terrores'],
                       ['maestro', 'maestros'], ['amo', 'amos'], ['muerto viviente', 'muertos vivientes'], ['vampiro', 'vampiros'], ['zombi', 'zombis'],  ['misterio', 'misterios'],  ['enigma', 'enigmas'],
                        ['espacio', 'espacios'],  ['reino', 'reinos'], ['veneno', 'veneno'], ['infierno', 'infiernos'], ['averno', 'avernos'], ['luchador', 'luchadores'], ['monstruo', 'mostruos'], ['muñeco', 'muñecos'],
                        ['acero', 'aceros'], ['aire', 'aires'], ['alma', 'almas'], ['amanecer', 'amaneceres'], ['ángel', 'ángeles'], ['anillo', 'anillos'], ['antifaz', 'antifaces'], ['apocalipsis', 'apocalipsis'], ['árbol', 'árboles'],
                        ['arma', 'armas'], ['armaggedon', 'armaggedon'], ['asesinato', 'asesinatos'], ['asesino', 'asesinos'], ['asunto', 'asuntos'], ['atraco', 'atracos'], ['autobus', 'autobuses'], ['bailarín', 'bailarines'], ['baile', 'bailes'],
                        ['bárbaro', 'bárbaros'], ['beso', 'besos'], ['bibliotecario', 'bibliotecarios'], ['bien', 'bienes'], ['boleto', 'boletos'], ['borde', 'bordes'], ['caballero', 'caballeros'], ['cabo', 'cabos'], ['cáliz', 'cálices'],
                        ['camino', 'caminos'], ['canto', 'cantos'], ['carcelero', 'carceleros'], ['carnaval', 'carnavales'], ['caserón', 'caserones'], ['cerebro', 'cerebros'], ['chacal', 'chacales'], ['chico', 'chicos'], ['cielo', 'cielos'],
                        ['ciencia', 'ciencias'], ['cilindro', 'cilindros'], ['circo', 'circos'], ['círculo', 'círculos'], ['clavo', 'clavos'], ['club', 'clubes'], ['colmillo', 'colmillos'], ['combinado', 'combinados'], ['comercio', 'comercios'],
                        ['compendio', 'compendios'], ['corazón', 'corazones'], ['cuento', 'cuentos'], ['cuerpo', 'cuerpos'], ['cuervo', 'cuervos'], ['demonio', 'demonios'], ['desaparecido', 'desaparecidos'], ['descubrimiento', 'descubrimientos'],
                        ['deseo', 'deseos'], ['desierto', 'desiertos'], ['destacamento', 'destacamentos'], ['destino', 'destinos'], ['detective', 'detectives'], ['devorador', 'devoradores'], ['día', 'días'], ['diablo', 'diablos'], ['dios', 'dioses'],
                        ['doctor', 'doctores'], ['dolor', 'dolores'], ['embrujo', 'embrujos'], ['engaño', 'engaños'], ['engendro', 'engendros'], ['enlace', 'enlaces'], ['eon', 'eones'], ['escape', 'escapes'], ['escritorio', 'escritorios'],
                        ['espejo', 'espejos'], ['espera', 'esperas'], ['estuche', 'estuche'], ['estudio', 'estudios'], ['exilio', 'exilios'], ['explosivo', 'explosivos'], ['expreso', 'expreso'], ['extraño', 'extraño'], ['filo', 'filos'],
                        ['frío', 'fríos'], ['fuego', 'fuegos'], ['gabinete', 'gabinetes'], ['gaitero', 'gaiteros'], ['gambito', 'gambitos'], ['gentío', 'gentíos'], ['golpe', 'golpes'], ['guardia', 'guardias'], ['guardián', 'guardianes'],
                        ['guerrero', 'guerreros'], ['gusano', 'gusanos'], ['heroe', 'héroes'], ['herrero', 'herreros'], ['hierro', 'hierros'], ['hijo', 'hijos'], ['hogar', 'hogares'], ['hombre', 'hombres'], ['honor', 'honores'],
                        ['hueso', 'huesos'], ['humano', 'humanos'], ['ídolo', 'ídolos'], ['infierno', 'infiernos'], ['insecto', 'insectos'], ['invitado', 'invitados'], ['jardín', 'jardines'], ['jeroglífico', 'jerogíficos'], ['jinete', 'jinetes'],
                        ['juego', 'juegos'], ['jugador', 'jugadores'], ['ladrón', 'ladrones'], ['legado', 'legados'], ['legionario', 'legionarios'], ['libro', 'libros'], ['llanto', 'llantos'], ['lobo', 'lobos'], ['lord', 'lores'],
                        ['lugar', 'lugares'], ['mafioso', 'mafiosos'], ['mal', 'males'], ['manuscrito', 'manuscritos'], ['metrónomo', 'metrónomos'], ['miedo', 'miedos'], ['minuto', 'minutos'], ['mono', 'monos'], ['morador', 'moradores'],
                        ['muérdago', 'muérdagos'], ['muerto', 'muertos'], ['mundo', 'mundos'], ['murciélago', 'murciélagos'], ['muro', 'muros'], ['niño', 'niños'], ['observador', 'observadores'], ['ocaso', 'ocasos'], ['odio', 'odios'],
                        ['ojo', 'ojos'], ['oleaje', 'oleajes'], ['oro', 'oros'], ['parche', 'parches'], ['paso', 'pasos'], ['peregrino', 'peregrinos'], ['perro', 'perros'], ['pirata', 'piratas'], ['pistolero', 'pistoleros'], ['plan', 'planes'],
                        ['poblado', 'poblados'], ['poder', 'poderes'], ['polvo', 'polvos'], ['portal', 'portales'], ['posible', 'posibles'], ['presente', 'presentes'], ['proyectil', 'proyectiles'], ['puente', 'puentes'], ['quejido', 'quejidos'],
                        ['reclamo', 'reclamos'], ['recuerdo', 'recuerdos'], ['regente', 'regentes'], ['regreso', 'regresos'], ['relámpago', 'relámpagos'], ['río', 'ríos'], ['rostro', 'rostros'], ['sacerdote', 'sacerdotes'], ['salón', 'salones'],
                        ['salvaje', 'salvajes'], ['sapo', 'sapos'], ['secreto', 'secretos'], ['secuestrador', 'secuestradores'], ['sello', 'sellos'], ['sendero', 'senderos'], ['silencio', 'silencios'], ['sillón', 'sillones'], ['sol', 'soles'],
                        ['soldado', 'soldados'], ['soñador', 'soñadores'], ['sueño', 'sueños'], ['suicida', 'suicidas'], ['superviviente', 'supervivientes'], ['tártaro', 'tártaros'], ['templo', 'templos'], ['temporal', 'temporales'],
                        ['tesoro', 'tesoro'], ['tiempo', 'tiempos'], ['tigre', 'tigres'], ['toque', 'toques'], ['torreón', 'torreones'], ['tren', 'trenes'], ['trueno', 'truenos'], ['valle', 'valles'], ['vecino', 'vecinos'],
                        ['vengador', 'vengadores'], ['vestíbulo', 'vestíbulos'], ['viaje', 'viajes'], ['vial', 'viales'], ['vidrio', 'vidrios'], ['viento', 'vientos']
                      ];
    const FEMENINOS = [ ['nave espacial', 'naves espaciales'], ['recompensa', 'recompensas'], ['calle', 'calles'], ['gente pequeña', 'gentes pequeñas'], ['oscuridad', 'oscuridades'],  ['cripta', 'criptas'], ['maestra', 'maestras'],
                     ['ama', 'amas'], ['muerta viviente', 'muertas vivientes'], ['vampiresa', 'vampiresas'], ['zombi', 'zombis'], ['incógnita', 'incógnitas'],  ['risa', 'risas'], ['ponzoña', 'ponzoñas'],  ['luchadora', 'luchadoras'],
                     ['gema', 'gemas'], ['joya', 'joyas'], ['muñeca', 'muñecas'], ['amazona', 'amazonas'], ['agua', 'aguas'], ['ala', 'alas'], ['alba', 'albas'], ['aldea', 'aldeas'], ['alma', 'almas'], ['amazona', 'amazonas'],
                     ['asesina', 'asesinas'], ['aventura', 'aventuras'], ['bailarina', 'bailarinas'], ['bala', 'balas'], ['barba', 'barbas'], ['bestia', 'bestias'], ['bibliotecaria', 'bibliotecarias'], ['bomba', 'bombas'],
                     ['bruja', 'brujas'], ['cabina', 'cabinas'], ['caída', 'caídas'], ['caja de música', 'cajas de música'], ['cala', 'calas'], ['canción', 'canciones'], ['cara', 'caras'], ['carcelera', 'carceleras'],
                     ['carretera', 'carretera'], ['carta', 'cartas'], ['casa', 'casas'], ['casa de campo', 'casas de campo'], ['caverna', 'cavernas'], ['ceniza', 'cenizas'], ['cera', 'ceras'], ['cesta', 'cestas'], ['chica', 'chicas'],
                     ['cicatriz', 'cicatrices'], ['ciudad', 'ciudades'], ['cocina', 'cocinas'], ['combinada', 'combinadas'], ['copa', 'copas'], ['cortina', 'cortinas'], ['cosa', 'cosas'], ['costa', 'costas'], ['cuenta', 'cuentas'],
                     ['cueva', 'cuevas'], ['cúpula', 'cúpulas'], ['dama', 'damas'], ['demonia', 'demonias'], ['desaparecida', 'desaparecidas'], ['desgraciada', 'desgraciadas'], ['detective', 'detectives'], ['devoradora', 'devoradoras'],
                     ['diablesa', 'diablesas'], ['diosa', 'diosas'], ['doctora', 'doctoras'], ['edad', 'edades'], ['en ninguna parte', 'en ninguna parte'], ['entrada', 'entradas'], ['eternidad', 'eternidades'],
                     ['evolución', 'evoluciones'], ['exiliada', 'exiliadas'], ['extraña', 'extrañas'], ['fiesta', 'fiestas'], ['flor', 'flores'], ['fogata', 'fogatas'], ['fuerza', 'fuerzas'], ['gaitera', 'gaiteras'],
                     ['galerada', 'galeradas'], ['gente', 'gentes'], ['gloria', 'glorias'], ['gracia', 'gracias'], ['guardia', 'guardias'], ['guardiana', 'guardianas'], ['guerra', 'guerras'], ['habitación', 'habitaciones'],
                     ['herencia', 'herencias'], ['heroína', 'heroinas'], ['hija', 'hijas'], ['hoguera', 'hogueras'], ['hoja', 'hojas'], ['honra', 'honras'], ['hora', 'horas'], ['horda', 'hordas'], ['humana', 'humanas'],
                     ['Infancia', 'infancias'], ['intención', 'intenciones'], ['invitada', 'invitadas'], ['ira', 'iras'], ['joya', 'joyas'], ['jugadora', 'jugadoras'], ['ladrona', 'ladronas'], ['lady', 'ladies'],
                     ['legion', 'legiones'], ['ley', 'leyes'], ['línea de sangre', 'líneas de sangre'], ['llama', 'llamas'], ['llamada', 'llamadas'], ['llave', 'llaves'], ['loba', 'lobas'], ['luna', 'lunas'], ['luz', 'luces'],
                     ['luz de la luna', 'luces de luna'], ['luz del día', 'luces del día'], ['madera', 'maderas'], ['maestra', 'maestras'], ['Mafia', 'mafias'], ['mafiosa', 'mafiosas'], ['mansión', 'mansiones'], ['marcha', 'marchas'],
                     ['mariposa', 'mariposas'], ['máscara', 'máscaras'], ['mascota', 'mascotas'], ['medianoche', 'medianoches'], ['memoria', 'memorias'], ['mente', 'mentes'], ['mentira', 'mentiras'], ['mesa', 'mesas'],
                     ['moderna', 'modernas'], ['mona', 'monas'], ['montaña', 'montañas'], ['moradora', 'moradoras'], ['mujer', 'mujeres'], ['nada', 'nadas'], ['niebla', 'nieblas'], ['niña', 'niñas'], ['noche', 'noches'],
                     ['observadora', 'observadoras'], ['ola', 'olas'], ['opción', 'opciones'], ['oportunidad', 'oportunidades'], ['orquídea', 'orquídeas'], ['osamenta', 'osamentas'], ['paradoja', 'paradojas'], ['patrulla', 'patrullas'],
                     ['peregrina', 'peregrinas'], ['perra', 'perras'], ['perra loba', 'perras lobas'], ['pirámide', 'pirámides'], ['pirata', 'piratas'], ['pistola', 'pistolas'], ['pistolera', 'pistoleras'], ['planta', 'plantas'],
                     ['plata', 'platas'], ['polvareda', 'polvaredas'], ['posibilidad', 'posibilidades'], ['protesta', 'protestas'], ['puerta', 'puertas'], ['pulsera', 'pulseras'], ['raposa', 'raposas'], ['rata', 'ratas'],
                     ['regente', 'regentes'], ['regla', 'reglas'], ['regresada', 'regresadas'], ['reliquia', 'reliquias'], ['respuesta', 'respuestas'], ['revolución', 'revoluciones'], ['revuelta', 'revueltas'], ['ruina', 'ruinas'],
                     ['ruta', 'rutas'], ['sacerdotisa', 'sacerdotisas'], ['sala', 'salas'], ['salud', 'saludes'], ['salvaje', 'salvajes'], ['sangre', 'sangres'], ['selva', 'selvas'], ['senda', 'sendas'], ['serpiente', 'serpientes'],
                     ['silla', 'sillas'], ['soldada', 'soldadas'], ['soñadora', 'soñadoras'], ['superviviente', 'supervivientes'], ['tarde', 'tardes'], ['tarjeta', 'tarjetas'], ['tártara', 'tártaras'], ['telaraña', 'telerañas'],
                     ['tienda', 'tiendas'], ['tierra', 'tierras'], ['tigresa', 'tigresas'], ['tormenta', 'tormentas'], ['torre', 'torres'], ['urraca', 'urracas'], ['vecina', 'vecinas'], ['vengadora', 'vengadoras'],
                     ['venganza', 'venganzas'], ['ventana', 'ventanas'], ['vida', 'vidas'], ['vidriera', 'vidrieras'], ['voluntad', 'voluntades'], ['voz', 'voces']
                    ];
    let lista: any[];

    if (sexo === 0) {
      lista = MASCULINOS;
    } else {
      lista = FEMENINOS;
    }

    return lista[Math.floor(Math.random() * lista.length)][numero];
  }

  /* Adjetivos que no van a ir nunca tras el sustantivo */

  getAdjetivoApoc(sexo: number, numero: number) {
    const MASCULINOS = [['gran', 'grandes'], ['oscuro', 'oscuros'], ['emocionante', 'emocionantes'], ['apasionante', 'apasionantes'], ['sensacional', 'sensacionales'], ['venenoso', 'venenosos'], ['misterioso', 'misteriosos'],
                        ['enigmático', 'enigmáticos'],  ['peligroso', 'peligrosos'], ['asesino', 'asesinos'], ['criminal', 'criminales'], ['accidental', 'accidentales'], ['acerado', 'acerados'], ['acusador', 'acusadores'],
                        ['aleteante', 'aleteantes'], ['amarillo ', 'amarillos'], ['asombroso', 'asombrosos'], ['asqueroso', 'asquerosos'], ['atado', 'atados'], ['aterciopelado', 'aterciopelados'], ['aterrador', 'aterradores'],
                        ['automatico', 'automáticos'], ['azul', 'azules'], ['caído', 'exiliados'], ['cambiante', 'cambiantes'], ['congelado', 'congelados'], ['consumidor', 'consumidores'], ['corrupto', 'corruptos'],
                        ['cosmico', 'cósmicos'], ['cristalino', 'cristalinos'], ['crudo', 'crudos'], ['definitivo', 'definitivos'], ['delicado', 'delicados'], ['desaparecido', 'desaparecidos'], ['desconocido', 'desconocidos'],
                        ['desgraciado', 'desgraciados'], ['desierto', 'desiertos'], ['despertado', 'despertados'], ['destrozado', 'destrozados'], ['destructor', 'destructores'], ['diferente', 'diferentes'],
                        ['dimensional', 'dimensionales'], ['dorado', 'dorados'], ['embarrado', 'embarrados'], ['enojado', 'enojados'], ['envenenado', 'envenenados'], ['especial', 'especiales'], ['eterno', 'eternos'],
                        ['exiliado', 'exiliados'], ['extraño', 'extraños'], ['férreo', 'férreos'], ['frío', 'fríos'], ['funesto', 'funestos'], ['gran', 'grandes'], ['gris', 'grises'], ['horrible', 'horribles'],
                        ['horripilante', 'horripilantes'], ['imaginario', 'imaginarios'], ['impagable', 'impagables'], ['infernal', 'infernales'], ['infiel', 'infieles'], ['infrecuente', 'infrecuentes'],
                        ['invisible', 'invisibles'], ['llameante', 'llameantes'], ['lógico', 'lógicos'], ['maldito', 'malditos'], ['malvado', 'malvados'], ['marcado', 'marcados'], ['masculino', 'masculinos'],
                        ['misterioso', 'misteriosos'], ['moderno', 'modernos'], ['moreno', 'morenos'], ['mortal', 'mortales'], ['naranja', 'naranjas'], ['negro', 'negros'], ['noble', 'nobles'], ['nocturno', 'nocturnos'],
                        ['nómada', 'nómadas'], ['nuevo', 'nuevos'], ['occidental', 'occidentales'], ['oculto', 'ocultos'], ['oriental', 'orientales'], ['oscuro', 'oscuros'], ['peludo', 'peludos'], ['perdido', 'perdidos'],
                        ['perfecto', 'perfectos'], ['plateado', 'plateados'], ['plomizo', 'plomizos'], ['pobre', 'pobres'], ['primero', 'primeros'], ['querido', 'queridos'], ['radiante', 'radiantes'], ['raro', 'raros'],
                        ['rojo', 'rojos'], ['roto', 'rotos'], ['rubio', 'rubios'], ['salvaje', 'salvajes'], ['sangriento', 'sangrientos'], ['sanguinolento', 'sanguinolentos'], ['secreto', 'secretos'], ['sellado', 'sellados'],
                        ['silencioso', 'silenciosos'], ['submarino', 'submarinos'], ['suicida', 'suicidas'], ['supremo', 'supremos'], ['susurrado', 'susurrados'], ['tejido', 'tejidos'], ['temerario', 'temerarios'],
                        ['terrorífico', 'terroríficos'], ['trágico', 'trágicos'], ['último', 'últimos'], ['variable', 'variables'], ['verde', 'verdes'], ['violeta', 'violetas'], ];
    const FEMENINOS = [['gran', 'grandes'], ['oscura', 'oscuras'], ['emocionante', 'emocionantes'], ['apasionante', 'apasionantes'], ['sensacional', 'sensacionales'],  ['venenosa', 'venenosas'], ['misteriosa', 'misteriosas'],
                      ['enigmática', 'enigmáticas'],  ['peligrosa', 'peligrosas'], ['asesina', 'asesinas'], ['criminal', 'criminales'], ['accidental', 'accidentales'], ['acerada', 'aceradas'], ['acusadora', 'acusadoras'],
                      ['aleteante', 'aleteantes'], ['amarilla', 'amarillas'], ['asombrosa', 'asombrosas'], ['asquerosa', 'asquerosas'], ['atada', 'atadas'], ['aterciopelada', 'aterciopeladas'], ['aterradora', 'aterradoras'],
                      ['automática', 'automáticas'], ['azul', 'azules'], ['caída', 'caídas'], ['cambiante', 'cambiantes'], ['congelada', 'congeladas'], ['consumidora', 'consumidoras'], ['corrupta', 'corruptas'],
                      ['cósmica', 'cósmicas'], ['cristalina', 'cristalinas'], ['cruda', 'crudas'], ['definitiva', 'definitivas'], ['delicada', 'delicadas'], ['desaparecida', 'desaparecidas'], ['desconocida', 'desconocidas'],
                      ['desgraciada', 'desgraciadas'], ['desierta', 'desiertas'], ['despertada', 'despertadas'], ['destrozada', 'destrozadas'], ['destructora', 'destructoras'], ['diferente', 'diferentes'],
                      ['dimensional', 'dimensionales'], ['dorada', 'doradas'], ['embarrada', 'embarradas'], ['enojada', 'enojadas'], ['envenenada', 'envenenadas'], ['especial', 'especiales'], ['eterna', 'eternas'],
                      ['exiliada', 'exiliadas'], ['extraña', 'extrañas'], ['férrea', 'férreas'], ['fría', 'frías'], ['funesta', 'funestas'], ['gran', 'grandes'], ['gris', 'grises'], ['horrible', 'horribles'],
                      ['horripilante', 'horripilantes'], ['imaginaria', 'imaginarias'], ['impagable', 'impagables'], ['infernal', 'infernales'], ['infiel', 'infieles'], ['infrecuente', 'infrecuentes'],
                      ['invisible', 'invisibles'], ['llameante', 'llameantes'], ['lógica', 'lógicas'], ['maldita', 'malditas'], ['malvada', 'malvadas'], ['marcada', 'marcadas'], ['femenina', 'femeninas'],
                      ['misteriosa', 'misteriosas'], ['moderna', 'modernas'], ['morena', 'morenas'], ['mortal', 'mortales'], ['naranja', 'naranjas'], ['negra', 'negras'], ['noble', 'nobles'], ['nocturna', 'nocturnas'],
                      ['nómada', 'nómadas'], ['nueva', 'nuevas'], ['occidental', 'occidentales'], ['oculta', 'ocultas'], ['oriental', 'orientales'], ['oscura', 'oscuras'], ['peluda', 'peludas'], ['perdida', 'perdidas'],
                      ['perfecta', 'perfectas'], ['plateada', 'plateadas'], ['plomiza', 'plomizas'], ['pobre', 'pobres'], ['primera', 'primeras'], ['querida', 'queridas'], ['radiante', 'radiantes'], ['rara', 'raras'],
                      ['roja', 'rojas'], ['rota', 'rotas'], ['rubia', 'rubias'], ['salvaje', 'salvajes'], ['sangrienta', 'sangrientas'], ['sanguinolenta', 'sanguinolentas'], ['secreta', 'secretas'], ['sellada', 'selladas'],
                      ['silenciosa', 'silenciosas'], ['submarina', 'submarinas'], ['suicida', 'suicidas'], ['suprema', 'supremas'], ['susurrada', 'susurradas'], ['tejida', 'tejidas'], ['temeraria', 'temerarias'],
                      ['terrorífica', 'terroríficas'], ['trágica', 'trágicas'], ['última', 'últimas'], ['variable', 'variables'], ['verde', 'verdes'], ['violeta', 'violetas'], ];

    let lista: any[];

    if (sexo === 0) {
      lista = MASCULINOS;
    } else {
      lista = FEMENINOS;
    }

    return lista[Math.floor(Math.random() * lista.length)][numero];
  }

  getAdjetivo(sexo: number, numero: number) {
    const MASCULINOS = [['grande', 'grandes'], ['desnudo', 'desnudos'] , ['oscuro', 'oscuros'], ['emocionante', 'emocionantes'], ['apasionante', 'apasionantes'], ['sensacional', 'sensacionales'], ['venenoso', 'venenosos'] ,
                      ['líquido', 'líquidos'],  ['peligroso', 'peligrosos'], ['marciano', 'marcianos'], ['de Marte', 'de Marte'], ['accidental', 'accidentales'], ['acerado', 'acerados'], ['acusador', 'acusadores'],
                      ['aleteante', 'aleteantes'], ['amarillo ', 'amarillos'], ['asombroso', 'asombrosos'], ['asqueroso', 'asquerosos'], ['atado', 'atados'], ['aterciopelado', 'aterciopelados'], ['aterrador', 'aterradores'],
                      ['automatico', 'automáticos'], ['azteca', 'aztecas'], ['azul', 'azules'], ['caído', 'exiliados'], ['cambiante', 'cambiantes'], ['caminante', 'caminantes'], ['cerrado', 'cerrados'], ['combinado', 'combinados'],
                      ['comestible', 'comestibles'], ['congelado', 'congelados'], ['conquistador', 'conquistadores'], ['consumidor', 'consumidores'], ['corrupto', 'corruptos'], ['cosmico', 'cósmicos'], ['cristalino', 'cristalinos'],
                      ['crudo', 'crudos'], ['de imitación', 'de imitación'], ['de la medianoche', 'de la medianoche'], ['definitivo', 'definitivos'], ['delicado', 'delicados'], ['desaparecido', 'desaparecidos'],
                      ['desconocido', 'desconocidos'], ['desgraciado', 'desgraciados'], ['desierto', 'desiertos'], ['despertado', 'despertados'], ['destrozado', 'destrozados'], ['destructor', 'destructores'],
                      ['diferente', 'diferentes'], ['dimensional', 'dimensionales'], ['dorado', 'dorados'], ['embarrado', 'embarrados'], ['enojado', 'enojados'], ['envenenado', 'envenenados'], ['escarlata', 'escarlatas'],
                      ['especial', 'especiales'], ['eterno', 'eternos'], ['exiliado', 'exiliados'], ['extraño', 'extraños'], ['férreo', 'férreos'], ['frío', 'fríos'], ['funesto', 'funestos'], ['grande', 'grandes'],
                      ['gris', 'grises'], ['horrible', 'horribles'], ['horripilante', 'horripilantes'], ['iluminado por la luna', 'iluminados por la luna'], ['imaginario', 'imaginarios'], ['impagable', 'impagables'],
                      ['infernal', 'infernales'], ['infiel', 'infieles'], ['infrecuente', 'infrecuentes'], ['inglés', 'ingleses'], ['invisible', 'invisibles'], ['llameante', 'llameantes'], ['lógico', 'lógicos'],
                      ['maldito', 'malditos'], ['malvado', 'malvados'], ['manchado de sangre', 'manchados de sangre'], ['marcado', 'marcados'], ['masculino', 'masculinos'], ['misterioso', 'misteriosos'],
                      ['moderno', 'modernos'], ['moreno', 'morenos'], ['mortal', 'mortales'], ['muerto', 'muertos'], ['muerto viviente', 'muertos vivientes'], ['naranja', 'naranjas'], ['negro', 'negros'],
                      ['noble', 'nobles'], ['nocturno', 'nocturnos'], ['nómada', 'nómadas'], ['nuevo', 'nuevos'], ['occidental', 'occidentales'], ['oculto', 'ocultos'], ['oriental', 'orientales'], ['oscuro', 'oscuros'],
                      ['peludo', 'peludos'], ['perdido', 'perdidos'], ['perfecto', 'perfectos'], ['plateado', 'plateados'], ['plomizo', 'plomizos'], ['pobre', 'pobres'], ['primero', 'primeros'], ['púrpura', 'púrpuras'],
                      ['querido', 'queridos'], ['radiante', 'radiantes'], ['raro', 'raros'], ['rojo', 'rojos'], ['roto', 'rotos'], ['rubio', 'rubios'], ['salvaje', 'salvajes'], ['sangriento', 'sangrientos'],
                      ['sanguinolento', 'sanguinolentos'], ['secreto', 'secretos'], ['secuestrado', 'secuestrados'], ['sellado', 'sellados'], ['silencioso', 'silenciosos'], ['submarino', 'submarinos'],
                      ['suicida', 'suicidas'], ['supremo', 'supremos'], ['susurrado', 'susurrados'], ['tejido', 'tejidos'], ['temerario', 'temerarios'], ['terrorífico', 'terroríficos'], ['trágico', 'trágicos'],
                      ['último', 'últimos'], ['urbano', 'urbanos'], ['variable', 'variables'], ['verde', 'verdes'], ['violeta', 'violetas'], ['vivo', 'vivos'], ];
    const FEMENINOS = [['grande', 'grandes'], ['desnuda', 'desnudas'], ['oscura', 'oscuras'], ['emocionante', 'emocionantes'], ['apasionante', 'apasionantes'], ['sensacional', 'sensacionales'],
                      ['venenosa', 'venenosas'], ['líquida', 'líquidas'],  ['peligrosa', 'peligrosas'], ['marciana', 'marcianas'], ['accidental', 'accidentales'], ['acerada', 'aceradas'], ['acusadora', 'acusadoras'],
                      ['aleteante', 'aleteantes'], ['amarilla', 'amarillas'], ['asombrosa', 'asombrosas'], ['asquerosa', 'asquerosas'], ['atada', 'atadas'], ['aterciopelada', 'aterciopeladas'], ['aterradora', 'aterradoras'],
                      ['automática', 'automáticas'], ['azteca', 'aztecas'], ['azul', 'azules'], ['caída', 'caídas'], ['cambiante', 'cambiantes'], ['caminante', 'caminantes'], ['cerrada', 'cerradas'], ['combinada', 'combinadas'],
                      ['comestible', 'comestibles'], ['congelada', 'congeladas'], ['conquistadora', 'conquistadoras'], ['consumidora', 'consumidoras'], ['corrupta', 'corruptas'], ['cósmica', 'cósmicas'],
                      ['cristalina', 'cristalinas'], ['cruda', 'crudas'], ['de imitación', 'de imitación'], ['de la medianoche', 'de la medianoche'], ['definitiva', 'definitivas'], ['delicada', 'delicadas'],
                      ['desaparecida', 'desaparecidas'], ['desconocida', 'desconocidas'], ['desgraciada', 'desgraciadas'], ['desierta', 'desiertas'], ['despertada', 'despertadas'], ['destrozada', 'destrozadas'],
                      ['destructora', 'destructoras'], ['diferente', 'diferentes'], ['dimensional', 'dimensionales'], ['dorada', 'doradas'], ['embarrada', 'embarradas'], ['enojada', 'enojadas'], ['envenenada', 'envenenadas'],
                      ['escarlata', 'escarlatas'], ['especial', 'especiales'], ['eterna', 'eternas'], ['exiliada', 'exiliadas'], ['extraña', 'extrañas'], ['férrea', 'férreas'], ['fría', 'frías'], ['funesta', 'funestas'],
                      ['grande', 'grandes'], ['gris', 'grises'], ['horrible', 'horribles'], ['horripilante', 'horripilantes'], ['iluminada por la luna', 'iluminadas por la luna'], ['imaginaria', 'imaginarias'],
                      ['impagable', 'impagables'], ['infernal', 'infernales'], ['infiel', 'infieles'], ['infrecuente', 'infrecuentes'], ['inglesa', 'inglesas'], ['invisible', 'invisibles'], ['llameante', 'llameantes'],
                      ['lógica', 'lógicas'], ['maldita', 'malditas'], ['malvada', 'malvadas'], ['manchada de sangre', 'manchadas de sangre'], ['marcada', 'marcadas'], ['femenina', 'femeninas'], ['misteriosa', 'misteriosas'],
                      ['moderna', 'modernas'], ['morena', 'morenas'], ['mortal', 'mortales'], ['muerta', 'muertas'], ['muerta viviente', 'muertas vivientes'], ['naranja', 'naranjas'], ['negra', 'negras'], ['noble', 'nobles'],
                      ['nocturna', 'nocturnas'], ['nómada', 'nómadas'], ['nueva', 'nuevas'], ['occidental', 'occidentales'], ['oculta', 'ocultas'], ['oriental', 'orientales'], ['oscura', 'oscuras'], ['peluda', 'peludas'],
                      ['perdida', 'perdidas'], ['perfecta', 'perfectas'], ['plateada', 'plateadas'], ['plomiza', 'plomizas'], ['pobre', 'pobres'], ['primera', 'primeras'], ['púrpura', 'púrpuras'], ['querida', 'queridas'],
                      ['radiante', 'radiantes'], ['rara', 'raras'], ['roja', 'rojas'], ['rota', 'rotas'], ['rubia', 'rubias'], ['salvaje', 'salvajes'], ['sangrienta', 'sangrientas'], ['sanguinolenta', 'sanguinolentas'],
                      ['secreta', 'secretas'], ['secuestrada', 'secuestradas'], ['sellada', 'selladas'], ['silenciosa', 'silenciosas'], ['submarina', 'submarinas'], ['suicida', 'suicidas'], ['suprema', 'supremas'],
                      ['susurrada', 'susurradas'], ['tejida', 'tejidas'], ['temeraria', 'temerarias'], ['terrorífica', 'terroríficas'], ['trágica', 'trágicas'], ['última', 'últimas'], ['urbana', 'urbanas'],
                      ['variable', 'variables'], ['verde', 'verdes'], ['violeta', 'violetas'], ['viva', 'vivas'], ];
    let lista: any[];

    if (sexo === 0) {
      lista = MASCULINOS;
    } else {
      lista = FEMENINOS;
    }

    return lista[Math.floor(Math.random() * lista.length)][numero];
  }

  getPreposicion() {
    // tslint:disable-next-line:max-line-length
    const PREPOSICION = ['sobre', 'a través', 'tras', 'en', 'mas allá', 'por', 'desde', 'en', 'hacia el interior', 'en', 'fuera de', 'con', 'sin', 'bajo', 'a', 'ante', 'contra', 'de', 'desde', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sin', 'sobre', 'tras', 'durante', 'mediante', 'versus', 'vía'];
    return PREPOSICION[Math.floor(Math.random() * PREPOSICION.length)];
  }

  getGerundio() {
    const GERUNDIOS = ['acechando', 'acusando', 'alzando', 'arrastrando', 'asesinando', 'cayendo', 'cambiando', 'cazando', 'cerrando', 'conduciendo', 'conquistando', 'construyendo', 'corriendo', 'descubriendo', 'desvelando',
                       'encadenando', 'engañando', 'esquivando', 'explorando', 'gritando', 'hablando', 'huyendo', 'yendo', 'investigando', 'llorando', 'luchando', 'matando', 'mintiendo', 'muriendo', 'olvidando', 'parando',
                       'persiguiendo', 'poseyendo', 'quemando', 'riendo', 'robando', 'salvando', 'secuestrando', 'seduciendo', 'siguiendo', 'soñando', 'susurrando', 'teniendo', 'tomando', 'viniendo', 'viendo', 'viviendo'
    ];
    return GERUNDIOS[Math.floor(Math.random() * GERUNDIOS.length)];
  }

  getParticipio(sexo: number, numero: number) {
    const MASCULINOS = [['acechado', 'acechados'], ['acusado', 'acusados'], ['alzado', 'alzados'], ['arrastrado', 'arrastrados'], ['asesinado', 'asesinados'], ['caído', 'caídos'], ['cambiado', 'cambiados'],
                        ['cazado', 'cazados'], ['cerrado', 'cerrados'], ['conducido', 'conducidos'], ['conquistado', 'conquistados'], ['construido', 'construidos'], ['corrido', 'corridos'], ['descubierto', 'descubiertos'],
                        ['desvelado', 'desvelados'], ['encadenado', 'encadenado'], ['engañado', 'engañado'], ['esquivado', 'esquivado'], ['explorado', 'explorados'], ['gritado', 'gritados'], ['hablado', 'hablados'],
                        ['huído', 'huídos'], ['ido', 'idos'], ['investigado', 'investigados'], ['llorado', 'llorados'], ['luchado', 'luchados'], ['matado', 'matados'], ['mentido', 'mentidos'], ['muerto', 'muertos'],
                        ['olvidado', 'olvidados'], ['parado', 'parados'], ['perseguido', 'perseguidos'], ['poseído', 'poseídos'], ['quemado', 'quemados'], ['reído', 'reídos'], ['robado', 'robados'], ['salvado', 'salvados'],
                        ['secuestrado', 'secuestrados'], ['seducido', 'seducidos'], ['seguido', 'seguidos'], ['soñado', 'soñados'], ['susurrado', 'susurrados'], ['tenido', 'tenidos'], ['tomado', 'tomados'], ['venido', 'venidos'],
                        ['visto', 'vistos'], ['vivido', 'vividos']
    ];
    const FEMENINOS = [['acechada', 'acechadas'], ['acusada', 'acusadas'], ['alzada', 'alzadas'], ['arrastrada', 'arrastradas'], ['asesinada', 'asesinadas'], ['caída', 'caídas'], ['cambiada', 'cambiadas'], ['cazada', 'cazadas'],
                      ['cerrada', 'cerradas'], ['conducida', 'conducidas'], ['conquistada', 'conquistadas'], ['construída', 'construidas'], ['corrida', 'corridas'], ['descubierta', 'descubiertas'], ['desvelada', 'desveladas'],
                      ['encadenada', 'encadenadas'], ['engañada', 'engañadas'], ['esquivada', 'esquivadas'], ['explorada', 'exploradas'], ['gritada', 'gritadas'], ['hablada', 'habladas'], ['huída', 'huídas'], ['ida', 'idas'],
                      ['investigada', 'investigadas'], ['llorada', 'lloradas'], ['luchada', 'luchadas'], ['matada', 'matadas'], ['mentida', 'mentidas'], ['muerta', 'muertas'], ['olvidada', 'olvidadas'], ['parada', 'paradas'],
                      ['perseguida', 'perseguidas'], ['poseída', 'poseídas'], ['quemada', 'quemadas'], ['reída', 'reídas'], ['robada', 'robadas'], ['salvada', 'salvadas'], ['secuestrada', 'secuestradas'], ['seducida', 'seducidas'],
                       ['seguida', 'seguidas'], ['soñada', 'soñadas'], ['susurrada', 'susurradas'], ['tenida', 'tenidas'], ['tomada', 'tomadas'], ['venida', 'venidas'], ['vista', 'vistas'], ['vivida', 'vividas']
    ];

    let lista: any[];

    if (sexo === 0) {
      lista = MASCULINOS;
    } else {
      lista = FEMENINOS;
    }

    return lista[Math.floor(Math.random() * lista.length)][numero];
  }

  getEstadoVerbo() {
    const ESTADO = ['es', 'fue', 'será', 'no será', 'no es', 'no fue'];

    return ESTADO[Math.floor(Math.random() * ESTADO.length)];
  }

  getVerbo(numero: number) {
    const VERBO = [ [['acecha', 'acechan'], ['acechó', 'acecharon'], ['acechará', 'acechará']], [['acusa', 'acusan'], ['acusó', 'acusaron'], ['acusará', 'acusarán']], [['alza', 'alzan'], ['alzó', 'alzaron'], ['alzará', 'alzarán']],
      [['arrastra', 'arrastran'], ['arrastró', 'arrastraron'], ['arrastrará', 'arrastrarán']], [['asesina', 'asesinan'], ['asesinó', 'asesinaron'], ['asesinará', 'asesinará']], [['cae', 'caen'], ['cayó', 'cayeron'], ['caerá', 'caerán']],
      [['cambia', 'cambian'], ['cambió', 'cambiaron'], ['cambiará', 'cambiarán']], [['caza', 'cazan'], ['cazó', 'cazaron'], ['cazará', 'cazarán']], [['cierra', 'cierran'], ['cerró', 'cerraron'], ['cerrará', 'cerrarán']],
      [['conduce', 'conducen'], ['condujo', 'condujeron'], ['conducirá', 'conducirán']], [['conquista', 'conquistan'], ['conqustó', 'conquistaron'], ['conquistará', 'conquistarán']],
      [['consutruye', 'construyen'], ['construyó', 'construyeron'], ['construirá', 'construirán']], [['corre', 'corren'], ['corrió', 'corrieron'], ['correrá', 'correrán']], [['descubre', 'descubren'], ['descubrió', 'descubrieron'], ['descubrirá', 'descubrirán']],
      [['desvela', 'desvelan'], ['desveló', 'desvelaron'], ['desvelará', 'desvelarán']], [['encadena', 'encadenan'], ['encadenó', 'encadenaron'], ['descadenará', 'encadenarán']], [['engaña', 'engañan'], ['engañó', 'engañaron'], ['engañará', 'engañarán']],
      [['esquiva', 'esquivan'], ['esquivó', 'esquivaron'], ['esquivará', 'esquivarán']], [['explora', 'exploran'], ['exploró', 'exploraron'], ['explorará', 'explorarán']], [['grita', 'gritan'], ['gritó', 'gritaron'], ['gritará', 'gritarán']],
      [['habla', 'hablan'], ['habló', 'hablaron'], ['hablará', 'hablarán']], [['huye', 'huyen'], ['huyó', 'huyeron'], ['huirá', 'huirán']], [['va', 'van'], ['fue', 'fueron'], ['irá', 'irán']],
      [['investiga', 'investigan'], ['investigó', 'investigaron'], ['investigará', 'investigarán']], [['llora', 'lloran'], ['lloró', 'lloraron'], ['llorará', 'llorarán']], [['lucha', 'luchan'], ['luchó', 'lucharon'], ['luchará', 'lucharán']],
      [['mata', 'matan'], ['mató', 'mataron'], ['matará', 'matarán']], [['miente', 'mienten'], ['mintió', 'mintieron'], ['mentirá', 'mentirán']], [['muere', 'mueren'], ['murió', 'murieron'], ['morirá', 'morirán']],
      [['olvida', 'olvidan'], ['olvidó', 'olvidaron'], ['olvidará', 'olvidarán']], [['para', 'paran'], ['paró', 'pararon'], ['parará', 'pararán']], [['persigue', 'persiguen'], ['persiguió', 'persiguieron'], ['perseguirá', 'perseguirán']],
      [['posee', 'poseen'], ['poseyó', 'poseyeron'], ['poseerá', 'poseerán']], [['quema', 'queman'], ['quemó', 'quemaron'], ['quemará', 'quemarán']], [['ríe', 'rien'], ['rió', 'rieron'], ['reirá', 'reirán']],
      [['roba', 'roban'], ['robó', 'robaron'], ['robará', 'robarán']], [['salva', 'salvan'], ['salvó', 'salvaron'], ['salvará', 'salvarán']], [['secuestra', 'secuestran'], ['secuestró', 'secuestraron'], ['secuestrará', 'secuestrarán']],
      [['seduce', 'seducen'], ['sedujo', 'sedujeron'], ['seducirá', 'seducirán']], [['sigue', 'siguen'], ['siguió', 'siguieron'], ['seguirá', 'seguirán']], [['sueña', 'sueñan'], ['soñó', 'soñaron'], ['soñará', 'soñarán']],
      [['susurra', 'susurran'], ['susurró', 'susurraron'], ['susurrará', 'susurrarán']], [['tiene', 'tienen'], ['tuvo', 'tuvieron'], ['tendrá', 'tendrán']], [['toma', 'toman'], ['tomó', 'tomaron'], ['tomará', 'tomarán']],
      [['viene', 'vienen'], ['vino', 'vinieron'], ['vendrá', 'vendrán']], [['ve', 'ven'], ['vió', 'vieron'], ['verá', 'verán']], [['vive', 'viven'], ['vivió', 'vivieron'], ['vivirá', 'vivirán']]
                  ];

    return VERBO[Math.floor(Math.random() * VERBO.length)][Math.floor(Math.random() * 3)][numero];
  }

  getImperativo(numero: number) {
    const VERBO = [ ['acecha', 'acechad'], ['acusa', 'acusad'], ['alza', 'alzad'], ['arrastra', 'arrastrad'], ['asesina', 'asesinad'], ['cae', 'caed'], ['cambia', 'cambiad'], ['caza', 'cazad'], ['cierra', 'cerrad'],
                  ['conduce', 'conducid'], ['conquista', 'conquistad'], ['construye', 'construid'], ['corre', 'corred'], ['descubre', 'descubrid'], ['desvela', 'desvelad'], ['encadena', 'encadenad'], ['engaña', 'engañad'],
                  ['esquiva', 'esquivad'], ['explora', 'explorad'], ['grita', 'gritad'], ['habla', 'hablad'], ['huye', 'huid'], ['ve', 'id'], ['investiga', 'investigad'], ['llora', 'llorad'], ['lucha', 'luchad'],
                  ['mata', 'matad'], ['miente', 'mentid'], ['muere', 'morid'], ['olvida', 'olvidad'], ['para', 'parad'], ['persigue', 'perseguid'], ['posee', 'poseed'], ['quema', 'quemad'], ['rie', 'reid'],
                  ['roba', 'robad'], ['salva', 'salvad'], ['secuestra', 'secuestrad'], ['seduce', 'seducid'], ['sigue', 'seguid'], ['sueña', 'soñad'], ['susurra', 'susurrad'], ['ten', 'tened'], ['toma', 'tomad'],
                  ['ven', 'venid'], ['ve', 'ved'], ['vive', 'vivid']
                  ];

    return VERBO[Math.floor(Math.random() * VERBO.length)][numero];
  }

  getSignoPuntuacion(signo: number, cierre: number) {
    const SIGNOS = [['¡', '!'], ['¿', '?']];

    if (signo === undefined) {
      signo = Math.floor(Math.random() * SIGNOS.length);
    }
    return SIGNOS[signo][cierre];
  }



}

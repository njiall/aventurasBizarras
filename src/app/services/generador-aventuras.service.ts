import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneradorAventurasService {

  aventura: any;

  version = 'V_0.2'; // Versión del servicio

  getVersion() {
    return this.version;
  }


  generarAventura() {

    const gen = this.getGenero();

    this.aventura =  {
        intro: this.generarSinopsis(gen.id),
        actoPrimero: this.generarActo(),
        actoSegundo: this.generarActo(),
        actoTercero: this.generarActo(),
        actoCuarto: this.generarActo(),
        publicadaEn: this.generaPublicacionRevista(),
        numeroPublicacion: this.generaPublicacionNumero(),
        genero : gen
      };
    return this.aventura;
  }

  getGenero() {
    let salida: Genero;
    const GENEROS = [
      ['1', 'Pulp']
    ];

    const generoTemp = GENEROS[Math.floor(Math.random() * GENEROS.length)];

    salida = {
      id: generoTemp[0],
      nombre: generoTemp[1],
    };

    return salida;
  }

  /**
   * Generadores primarios.
   */
  generaPublicacionRevista() {
    const REVISTAS = ['Aventuras Bizarras'];
    return REVISTAS[Math.floor(Math.random() * REVISTAS.length)];
  }
  generaPublicacionNumero() {
    return Math.floor(Math.random() * 1000 + 1);
  }

  generarSinopsis(genero: string) {

    let intro: Sinopsis;

    const GN_VILLANO =  this.getSexo();
    const GN_SECUACES =  this.getSexo() + this.getNumero();

    intro = {
      villanoPrincipal: this.generarVillano(GN_VILLANO, genero).replace('de el', 'del'),
      villanos : 'SIN DEFINIR',
      plan : this.generarPlan().replace('de el', 'del'),
      localizacion : this.generarLocalizacion().replace('de el', 'del'),
    };

    return intro;
  }

  generarActo() {
     let intro: Acto;

     intro = {
       gancho: this.generarGancho(),
       personajes: this.generarPNJ(),
       accion: this.generarSecuenciaAccion(),
       giroGuion: this.generarGiroArgumental()};
     return intro;
   }

  /**
   * Generadores auxiliares.
   */
  d100() {
    return Math.floor(Math.random() * 100) + 1;
  }
  d4(numero: number) {
    let total = 0;

    for (let i = 0; i < numero; i++) {
      total += Math.floor(Math.random() * 4) + 1;
    }

    return total;
  }

  getSexo() {
     /*
    Concordancia del título:
      0 Masculino
      1 Femenino
     */
    const SEXO = Math.floor(Math.random() * 5);
    return SEXO === 5 ? 1 : 0;
  }

  getNumero() {
    /*
   Concordancia del título:
     1 Singular
     2 Plural
    */
     return Math.floor(Math.random() * 2) + 1;
 }

  /**
   * Generadores secundarios.
   */

   generarVillano(concordancia: number, genero: string) {

     let VILLANO = [];

     const VILLANOPULP = [
       ['un gangster' , 'una femme fatale'],
       ['un ocultista' , 'una ocultista'],
       ['un terror sobrenatural' , 'una amenaza sobrenatural'],
       ['un lider cultista' , 'una lider cultista'],
       ['el dirigente de una civilización perdida', 'la reina de una civilización perdida'],
       ['un científico loco' , 'una femme fatale'],
       ['un extranjero' , 'una extranjera'],
       ['un ladrón' , 'una ladrona'],
       ['una asesina' , 'un asesino'],
       ['un poli corrupto' , 'una poli corrupta'],
       ['un dictador' , 'una dictadora'],
       ['un gerifalte nazi' , 'una espía nazi'],
       ['un magnate de los negocios' , 'una magnate de los negocios'],
       ['un señor del crimen' , 'una señora del crimen'],
       ['un pirata' , 'una pirata'],
       ['un anarquista' , 'una anarquista'],
       ['un personaje de la jet set' , 'un personaje de la jet set'],
       ['un político corrupto' , 'una política corrupta'],
       ['un invasor alienígena' , 'una invasora alienígena'],
       ['una mente criminal' , 'una mente criminal'],
       ['la némesis de nuestros héroes' , 'la némesis de nuestros héroes'],
     ];

     if (genero === '1') {
        VILLANO = VILLANOPULP;
     }

    const PLANTILLA = [
      ` ${ VILLANO[Math.floor(Math.random() * VILLANO.length)][concordancia]} `,
      ` ${ VILLANO[Math.floor(Math.random() * VILLANO.length)][concordancia]} `,
      ` ${ VILLANO[Math.floor(Math.random() * VILLANO.length)][concordancia]} `,
      ` ${ VILLANO[Math.floor(Math.random() * VILLANO.length)][concordancia]} `,
    ` ${ VILLANO[Math.floor(Math.random() * VILLANO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];

   }

   generarSecuaces(villano: number) {

    // TODO Implementar

  }

   getModificador(concordancia: number) {

    const ANIMADO = [
      ['enfadado', 'enfadada', 'enfadados', 'enfadadas'],
      ['mecánico', 'mecánica', 'mecánicos', 'mecánicas'],
      ['acechante', 'acechante', 'acechantes', 'acechantes'],
      ['inmortal', 'inmortal', 'inmortales', 'inmortales'],
      ['salvaje', 'salvaje', 'salvajes', 'salvajes'],
      ['cubierto de cicatrices', 'cubierta de cicatrices', 'cubiertos de cicatrices', 'cubiertas de cicatrices'],
      ['sonriente', 'sonriente', 'sonrientes', 'sonrientes'],
      ['vampírico', 'vampírica', 'vampiricos', 'vampíricas'],
    ];

    const OJOS =  [
      [ `de ojos ${ this.getColor(1) }`, `de ojos ${ this.getColor(1) }` ,  `de ojos ${ this.getColor(1) }`, `de ojos ${ this.getColor(1) }` ],
      [ `de ojos ${ this.getColor(1) }`, `de ojos ${ this.getColor(1) }` ,  `de ojos ${ this.getColor(1) }`, `de ojos ${ this.getColor(1) }` ],
      ['tuerto', 'tuerta', 'tuertos', 'tuertas'],
      ['de tres ojos', 'de tres ojos', 'de tres ojos', 'de tres ojos'],
      ['sin ojos', 'sin ojos', 'sin ojos', 'sin ojos'],
      ];

    const VARIADO = [
      [`${ this.getColor(concordancia) }`, `${ this.getColor(concordancia) }`, `${ this.getColor(concordancia) }`, `${ this.getColor(concordancia) }`],
      ['abominable', 'abominable', 'abominables', 'abominables'],
      ['de hueso', 'de hueso', 'de hueso', 'de hueso'],
      ['de hueso', 'de hueso', 'de hueso', 'de hueso'],
      ['de cristal', 'de cristal', 'de cristal', 'de cristal'],
      ['de sangre', 'de sangre', 'de sangre', 'de sangre'],
      ['maldito', 'maldita', 'malditos', 'malditas'],
      ['demoniaco', 'demoniaca', 'demoniacos', 'demoniacas'],
      ['diamantino', 'diamantina', 'diamantinos', 'diamantinas'],
      ['encantado', 'encantada', 'encantados', 'encantadas'],
      ['olvidado', 'olvidada', 'olvidados', 'olvidadas'],
      ['gigante', 'gigante', 'gigantes', 'gigantes'],
      ['oculto', 'oculta', 'ocultos', 'ocultas'],
      ['relampagueante', 'relampagueante', 'relampagueantes', 'relampagueantes'],
      ['solitario', 'solitaria', 'solitarios', 'solitarias'],
      ['de la luna', 'de la luna', 'lunares', 'lunares'],
      ['de marte', 'de venus', 'de marte', 'de venus'],
      ['mecánico', 'mecánica', 'mecánicos', 'mecánicas'],
      ['espiritual', 'espirituales', 'espiritual', 'espirituales'],
      ['tranquilo', 'tranquila', 'tranquilos', 'tranquilas'],
    ];

    const PLANTILLA = [
      ` ${ ANIMADO[Math.floor(Math.random() * ANIMADO.length)][concordancia]}`,
      ` ${ VARIADO[Math.floor(Math.random() * VARIADO.length)][concordancia]}`,
      ` ${ ANIMADO[Math.floor(Math.random() * ANIMADO.length)][concordancia]}`,
      ` ${ VARIADO[Math.floor(Math.random() * VARIADO.length)][concordancia]}`,
      ` ${ ANIMADO[Math.floor(Math.random() * ANIMADO.length)][concordancia]}`,
      ` ${ VARIADO[Math.floor(Math.random() * VARIADO.length)][concordancia]}`,
      ` ${ ANIMADO[Math.floor(Math.random() * ANIMADO.length)][concordancia]}`,
      ` ${ VARIADO[Math.floor(Math.random() * VARIADO.length)][concordancia]}`,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];

  }

  getColor(concordancia: number) {
    const COLOR = [
      ['negro', 'negros', 'negra', 'negras' ],
      ['blanco', 'blancos', 'blanca', 'blancas' ],
      ['rojo', 'rojos', 'roja', 'rojas' ],
      ['de fuego', 'de fuego', 'de fuego', 'de fuego' ],
      ['escarlata', 'escarlatas', 'escarlata', 'escarlatas' ],
      ['azul', 'azules', 'azul', 'azules' ],
      ['verde', 'verdes', 'verde', 'verdes' ],
      ['amarillo', 'amarillos', 'amarilla', 'amarillas' ],
      ['dorado', 'dorados', 'dorada', 'doradas' ],
      ['plateado', 'plateados', 'plateada', 'plateadas' ],
    ];

    return  COLOR[Math.floor(Math.random() * COLOR.length)][concordancia];
  }

   generarLocalizacion() {

    const LUGAR = [
     'los muelles',
     'la jungla',
     'un pais asiático',
     'un pais europeo',
     'un pais del tercer mundo',
     'los bajos fondos',
     'chinatown',
     'el desierto',
     'el mar',
     'una ciudad perdida',
     'una base secreta',
     'el distrito financiero',
     'unos almacenes',
     'el aire',
     'un barrio rico',
     'una granja',
     'un bosque',
     'otra ciudad',
     'el campo',
     'la universidad',
     'el ayuntamiento',
     'el museo',
     'el rascacielos',
     'el ártico',
    ];

    const PLANTILLA = [
        ` en ${ LUGAR[Math.floor(Math.random() * LUGAR.length)]} `,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];
   }

   generarPlan() {

    const VERBO_COSAS = [
      'manipular',
      'vender',
      'adquirir',
      'controlar',
      'robar',
      'crear',
      'destruir',
      'pasar de contrabando',
      'tomar',
      'destruir',
    ];

    const VERBO_ENTIDADES = [
      'manipular',
      'vender',
      'adquirir',
      'controlar',
      'robar',
      'crear',
      'destruir',
      'bombardear',
      'destruir',
    ];

    const VERBO_PERSONAS = [
      'manipular',
      'vender',
      'matar',
      'controlar',
      'crear',
      'cazar',
      'aterrorizar',
      'secuestrar',
      'chantajear',
      'secuestrar',
      'asesinar',
      'atracar',
      'atacar',
      'regir',
      'chantajear'
    ];

    const COSAS = [
      'a un monstruo',
      'un edificio',
      'un tesoro',
      'un objeto',
      'un invento',
      'un vehículo',
      'un negocio',
      'unas joyas',
     ];

     const ENTIDADES = [
      'a un país',
      'un tesoro',
      'una ciudad',
      'al mundo',
      'un Mundo Perdido',
     ];

     const PERSONAS = [
      'a un monstruo',
      'a una gente',
      'a un país',
      'a un enemigo',
      'a una mujer',
      'a un hombre',
      'a nuestro/s heroe/s',
      'un regente',
      'a alguien famoso',
      'a un rival',
      'a unas víctimas inocentes',
      'a la familia de nuestro/s heroe/s',
     ];

    const PLANTILLA = [
      ` planea ${ VERBO_COSAS[Math.floor(Math.random() * VERBO_COSAS.length)]} ${ COSAS[Math.floor(Math.random() * COSAS.length)]}`,
      ` planea ${ VERBO_PERSONAS[Math.floor(Math.random() * VERBO_PERSONAS.length)]} ${ PERSONAS[Math.floor(Math.random() * PERSONAS.length)]}`,
      ` planea ${ VERBO_COSAS[Math.floor(Math.random() * VERBO_COSAS.length)]} ${ COSAS[Math.floor(Math.random() * COSAS.length)]}`,
      ` planea ${ VERBO_PERSONAS[Math.floor(Math.random() * VERBO_PERSONAS.length)]} ${ PERSONAS[Math.floor(Math.random() * PERSONAS.length)]}`,
      ` planea ${ VERBO_ENTIDADES[Math.floor(Math.random() * VERBO_ENTIDADES.length)]} ${ ENTIDADES[Math.floor(Math.random() * ENTIDADES.length)]}`,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];

 }


  generarGancho() {

    const GANCHO = [
      'Un desconocido pide ayuda',
      'Los héroes encuentran un cadáver',
      'Ocurre un horrible desastre',
      'Alguien sufre un ataque',
      'Un extraño e inexplicable hecho',
      'Los héroes leen una noticia o la escuchan en la radio',
      'Un viejo amigo pide ayuda',
      '"In media res": Los héroes comienzan involucrados desde el principio: están siendo atacados o incriminados en un crimen que no han cometido, o son víctimas de un robo…',
     ];

    const PLANTILLA = [
      `${ GANCHO[Math.floor(Math.random() * GANCHO.length)]}`,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];
  }

  generarPNJ() {
    const LISTA = [];

    for (let i = 1; i < this.d4(2); i++) {
      const PERS = this.generarDatosPNJ(this.getSexo());
      LISTA.push(PERS);
    }
    return LISTA;
  }

  generarDatosPNJ(concordancia: number) {

        const TIPO_PROFESIONAL = [
         ['un político', 'una política'],
         ['un hombre de negocios', 'una mujer de negocios'],
         ['un guía', 'una guía'],
         ['un científico', 'una científica'],
         ['un doctor', 'una doctora'],
         ['un criminal', 'una criminal'],
         ['un investigador', 'una investigadora'],
         ['un chofer', 'una conductora'],
         ['un matón', 'una ladrona'],
         ['un fanático', 'una fanática'],
         ['un académico', 'una estudiosa'],
         ['un asistente', 'una criada'],
         ['un obrero', 'una enfermera'],
         ['un secuaz', 'la novia del mafioso'],
         ['un ocultista', 'una ocultista'],
         ['un artista', 'una cantante'],
         ['un piloto', 'una piloto'],
        ];

        const TIPO_PERSONA = [
          ['un famoso', 'una celebridad'],
          ['un criminal', 'una criminal'],
          ['una marido', 'una esposa'],
          ['un experto', 'una experta'],
          ['un informante', 'una informante'],
          ['un fanático', 'una fanática'],
          ['un niño', 'una niña'],
        ];
      const RASGO_PERSONAL = [
        ['grande', 'grande' ],
        ['feo', 'fea'],
        ['desafortunado', 'desafortunada'],
        ['sospechoso', 'sospechosa'],
        ['amenazante', 'amenazante'],
        ['reservado', 'reservada'],
        ['débil', 'débil'],
        ['fuerte', 'fuerte'],
        ['extranjero', 'extranjero'],
        ['pequeño', 'pequeña'],
        ['rico', 'rica'],
        ['digno de confianza', 'digno de confianza'],
        ['de poca monta', 'de poca monta'],
        ['desamparado', 'desamparada'],
        ['ambicioso', 'ambiciosa'],
        ['peculiar', 'peculiar'],
        ['habilidoso', 'habilidosa'],
        ['problemático', 'problemática'],
        ['inteligente', 'inteligente'],
        ['valiente', 'valiente'],
        ['encantador', 'encantadora'],
        ['salvaje', 'salvaje'],
        ['de voluntad fuerte', 'de voluntad fuerte'],
        ['famoso', 'famosa'],
        ['duro', 'dura'],
        ['estrafalario', 'estrafalaria'],
        ['estúpido', 'estúpida'],
        ['frío', 'fría'],
        ['joven', 'joven'],
        ['impulsivo', 'impulsiva'],
        ['violento', 'violenta'],
        ['torpe', 'torpe'],
        ['afortunado', 'afortunad' ],
        ['peligroso', 'peligrosa'],
        ['viejo', 'viejA'],
        ['agil', 'agil'],
        ['atractivo', 'bella'],
        ['malvado', 'malvada'],
        ['débil', 'débil'],
        ['extraño', 'extraña'],
        ['talentoso', 'talentosa'],
     ];

     const RASGO_PROFESIONAL = [
        ['desafortunado', 'desafortunada'],
        ['sospechoso', 'sospechosa'],
        ['amenazante', 'amenazante'],
        ['reservado', 'reservada'],
        ['débil', 'débil'],
        ['fuerte', 'fuerte'],
        ['extranjero', 'extranjero'],
        ['rico', 'rica'],
        ['digno de confianza', 'digno de confianza'],
        ['de poca monta', 'de poca monta'],
        ['desamparado', 'desamparada'],
        ['ambicioso', 'ambiciosa'],
        ['peculiar', 'peculiar'],
        ['habilidoso', 'habilidosa'],
        ['problemático', 'problemática'],
        ['inteligente', 'inteligente'],
        ['valiente', 'valiente'],
        ['encantador', 'encantadora'],
        ['de voluntad fuerte', 'de voluntad fuerte'],
        ['famoso', 'famosa'],
        ['duro', 'dura'],
        ['estrafalario', 'estrafalaria'],
        ['estúpido', 'estúpida'],
        ['profesional', 'profesional'],
        ['frío', 'fría'],
        ['joven', 'joven'],
        ['impulsivo', 'impulsiva'],
        ['violento', 'violenta'],
        ['torpe', 'torpe'],
        ['afortunado', 'afortunada' ],
        ['amateur', 'amateur'],
        ['peligroso', 'peligrosA'],
        ['viejo', 'vieja'],
        ['agil', 'agil'],
        ['atractivo', 'bella'],
        ['malvado', 'malvada'],
        ['débil', 'débil'],
        ['extraño', 'extraña'],
        ['talentoso', 'talentosa'],
     ];

    const PLANTILLA = [
      `${ TIPO_PROFESIONAL[Math.floor(Math.random() * TIPO_PROFESIONAL.length)][concordancia]} ${ RASGO_PROFESIONAL[Math.floor(Math.random() * RASGO_PROFESIONAL.length)][concordancia]}`,
      `${ TIPO_PROFESIONAL[Math.floor(Math.random() * TIPO_PROFESIONAL.length)][concordancia]} ${ RASGO_PROFESIONAL[Math.floor(Math.random() * RASGO_PROFESIONAL.length)][concordancia]}`,
      `${ TIPO_PROFESIONAL[Math.floor(Math.random() * TIPO_PROFESIONAL.length)][concordancia]} ${ RASGO_PROFESIONAL[Math.floor(Math.random() * RASGO_PROFESIONAL.length)][concordancia]}`,
      `${ TIPO_PROFESIONAL[Math.floor(Math.random() * TIPO_PROFESIONAL.length)][concordancia]} ${ RASGO_PROFESIONAL[Math.floor(Math.random() * RASGO_PROFESIONAL.length)][concordancia]}`,
      `${ TIPO_PERSONA[Math.floor(Math.random() * TIPO_PERSONA.length)][concordancia]} ${ RASGO_PERSONAL[Math.floor(Math.random() * RASGO_PERSONAL.length)][concordancia]}`,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];
  }


  generarSecuenciaAccion() {
    let accion: SecuenciaAccion;

    accion = {
      tipo: this.generarAccionTipo(),
      participantes: this.generarAccionParticipantes(),
      lugar: this.generarAccionLugar(this.d100()),
      complicaciones: this.generarAccionComplicaciones(),
    };


    return accion;


  }

  generarAccionTipo() {

    const ACCION  = [
      'una persecución a pie',
      'una persecución en vehiculo',
      'una pelea sin armas',
      'una pelea sin armas',
     ];

    const PLANTILLA = [
      `${ ACCION[Math.floor(Math.random() * ACCION.length)]}`,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];
  }

  generarAccionParticipantes() {
    const PARTICIPANTES  = [
        'pocas personas (1-2 por personaje)',
        'algunas personas (3-4 por personaje)',
        'muchas personas (5+ por personaje)',
     ];

    const PLANTILLA = [
      `${ PARTICIPANTES[Math.floor(Math.random() * PARTICIPANTES.length)]}`,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];
  }
  generarAccionLugar(tirada: number) {
    const LUGAR  = [
      'entorno naútico (barco, puerto, etc.)',
      'entorno natural (parque, selva, etc.)',
      'tejados',
      'calle de la ciudad',
      'entorno residencial',
      'entorno de entretenimiento (teatro, estadio, discoteca, etc.)',
      'iglesia / templo / otros entornos religiosos',
      'entorno empresarial (oficina, fábrica, almacén, mercado, etc.)',
      'entorno de transporte (aeropuerto, estación de tren, trenes o aviones)',
      'entorno educativo (museo, colegio, etc.)',
      'entorno ciudadano (correos, ayuntamiento)',
      'barrio pobre o en mal estado',
      'en medio de la nada',
      'lugar secreto / escondido',
      'base (de los héroes u otra)',
      'entorno militar (cuartel, etc.)',
      'restaurante',
      'laboratorio',
      'punto de referencia',
      'entorno inusual (bajo el agua, en el espacio, bajo tierra, etc.)',
   ];

  const PLANTILLA = [
    `${ LUGAR[Math.floor(Math.random() * LUGAR.length)]}`,
  ];

  return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];
  }
  generarAccionComplicaciones() {

   // if ( tirada < 101 ) { complicacion = `
   // ¡Nueva escena de acción!
   // La cosa se complica y se produce
   //     ${this.generarAccionTipo(this.d100())} en ${this.generarAccionLugar(this.d100())}
   //     que implica ${this.generarAccionParticipantes(this.d100())} y que se complica ${this.generarAccionComplicaciones(this.d100())}`; }
   // return complicacion;

    const COMPLICACIONES  = [
      '... no, realmente no se complica.',
      'hay testigos inocentes en la zona',
      'el entorno es dificultoso (lluvia, niebla, movimiento rápido…) y cualquier acción se hace más difícil',
      'hay multitud de objetos que pueden ser usados como arma (platos de un restaurante, barras de hierro en una fundición…)',
     ];

    const PLANTILLA = [
      `${ COMPLICACIONES[Math.floor(Math.random() * COMPLICACIONES.length)]}`,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];
  }
  generarGiroArgumental() {
    const GIRO  = [
      '¡Traición! Un PNJ en el que confiaban ha demostrado no ser de confianza',
      `¡Cambio de aires! Antes de finalizar este acto la acción se traslada a ${this.generarLocalizacion()}`,
      `El que parecía ser el villano principal resulta ser un mero comparsa o quizá nunca tuvo nada que ver con este asunto. Quien está detrás de todo es ${this.generarVillano(this.getSexo(), '1')}` ,
      `¡Planes dentro de planes! Hay planes realmente complicados y este acaba de descubrirse que implicaba realmente ${this.generarPlan()} `,
      '¡Inversión! Parece que giran las tornas y lo que parecía blanco es negro. De repente todo cambia (Si los héroes colaboraban con la policía ahora les persigue, si todo parecía estar en su contra ahora parece ahber alguna luz...)',
      'Ocurre algo extraño y sin aparente explicación: El cielo brilla rojo sangre, todas las radios comienzan a emitir una misteriosa música...',
      '¡Deus Ex machina! De repente llega una ayuda inesperada',

    ];

    const PLANTILLA = [
      `${ GIRO[Math.floor(Math.random() * GIRO.length)]}`,
      'No hay ningún giro reseñable',
      'No hay ningún giro reseñable',
      'No hay ningún giro reseñable',
      'No hay ningún giro reseñable',
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];

  }
}

 export interface Genero {
   nombre: string;
   id: string;
 }


export interface Sinopsis {
  villanos: string;
  villanoPrincipal: string;
  plan: string;
  localizacion: string;
}

export interface PNJ {
  descriptor1: string;
  descriptor2: string;
  tipo: string;
}

interface SecuenciaAccion {
  tipo: string;
  participantes: string;
  lugar: string;
  complicaciones: string;
}

export interface Acto {
  gancho: string;
  personajes: PNJ[];
  accion: SecuenciaAccion;
  giroGuion: string;
}

export interface Aventura {
  intro: Sinopsis;
  actoPrimero: Acto;
  actoSegundo: Acto;
  actoTercero: Acto;
  actoCuarto: Acto;
  publicadaEn: string;
  numeroPublicacion: number;
  genero: Genero;
}

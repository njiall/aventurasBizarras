import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneradorAventurasService {

  aventura: any;

  version = 'V_0.1'; // Versión del servicio

  getVersion() {
    return this.version;
  }


  generarAventura() {

    const gen = this.getGenero();

    this.aventura =  {
        intro: this.generarSinopsis(gen.id),
        // actoPrimero: this.generarActo(),
        // actoSegundo: this.generarActo(),
        // actoTercero: this.generarActo(),
        // actoCuarto: this.generarActo(),
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

  // generarActo() {
  //   let intro: Acto;

  //   intro = {
  //     gancho: this.generarGancho(this.d100()),
  //     personajes: this.generarPNJ(),
  //     accion: this.generarSecuenciaAccion(),
  //     giroGuion: this.generarGiroArgumental(this.d100())};


  //   console.log(intro);
  //   return intro;
  // }

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

    let VILLANO = [];

    //  const VILLANOPULP = [
    //    ['un gangster' , 'una femme fatale'],
    //    ['un ocultista' , 'una ocultista'],
    //    ['un terror sobrenatural' , 'una amenaza sobrenatural'],
    //    ['un lider cultista' , 'una lider cultista'],
    //    ['el dirigente de una civilización perdida', 'la reina de una civilización perdida'],
    //    ['un científico loco' , 'una femme fatale'],
    //    ['un extranjero' , 'una extranjera'],
    //    ['un ladrón' , 'una ladrona'],
    //    ['una asesina' , 'un asesino'],
    //    ['un poli corrupto' , 'una poli corrupta'],
    //    ['un dictador' , 'una dictadora'],
    //    ['un nazi' , 'una nazi'],
    //    ['un magnate de los negocios' , 'una magnate de los negocios'],
    //    ['un señor del crimen' , 'una señora del crimen'],
    //    ['un pirata' , 'una pirata'],
    //    ['un anarquista' , 'una anarquista'],
    //    ['un personaje de la jet set' , 'un personaje de la jet set'],
    //    ['un político corrupto' , 'una política corrupta'],
    //    ['un invasor alienígena' , 'una invasora alienígena'],
    //    ['una mente criminal' , 'una mente criminal'],
    //    ['la némesis de nuestros héroes' , 'la némesis de nuestros héroes'],
    //  ];

    //  if (genero === '1') {
    //     VILLANO = VILLANOPULP;
    //  }

    // const PLANTILLA = [
    //   ` ${ VILLANO[Math.floor(Math.random() * VILLANO.length)][concordancia]} `,
    //   ` ${ VILLANO[Math.floor(Math.random() * VILLANO.length)][concordancia]} `,
    //   ` ${ VILLANO[Math.floor(Math.random() * VILLANO.length)][concordancia]} `,
    //   ` ${ VILLANO[Math.floor(Math.random() * VILLANO.length)][concordancia]} `,
    // ` ${ VILLANO[Math.floor(Math.random() * VILLANO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
    // ];

    // return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];

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
      'tomar',
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


  // generarGancho(tirada: number) {
  //   let gancho: string;
  //   if ( tirada < 12 ) { gancho = 'Un desconocido pide ayuda '; } else
  //   if ( tirada < 21 ) { gancho = 'Los héroes encuentran un cadáver'; }  else
  //   if ( tirada < 31 ) { gancho = 'Ocurre un horrible desastre'; }  else
  //   if ( tirada < 43 ) { gancho = 'Alguien sufre un ataque'; }  else
  //   if ( tirada < 57 ) { gancho = 'Un extraño e inexplicable hecho'; }  else
  //   if ( tirada < 66 ) { gancho = 'Los héroes leen una noticia o la escuchan en la radio'; }  else
  //   if ( tirada < 78 ) { gancho = 'Un viejo amigo pide ayuda'; }  else
  //   if ( tirada < 91 ) { gancho = '"In media res": Los héroes comienzan involucrados desde el principio: están siendo atacados o incriminados en un crimen que no han cometido, o son víctimas de un robo…'; }  else
  //   if ( tirada < 101 ) { gancho =  `${ this.generarGancho(this.d100())} y ${ this.generarGancho(this.d100())}`; }
  //   return gancho;
  // }

  // generarPNJ() {
  //   const LISTA = [];

  //   for (let i = 1; i < this.d4(2); i++) {
  //     const PERS = {descriptor1: this.generarRasgoPNJ(this.d100(), 0),  descriptor2: this.generarRasgoPNJ(this.d100(), 1), tipo: this.generarTipoPNJ(this.d100())};
  //     LISTA.push(PERS);
  //   }
  //   return LISTA;
  // }

  // generarRasgoPNJ(tirada: number, posicion: number) {
  //   let rasgo: string[];
  //   if ( tirada < 5 ) { rasgo = [ 'grande', 'pulcro']; } else
  //   if ( tirada < 10 ) { rasgo = [ 'feo', 'desafortunado']; } else
  //   if ( tirada < 14 ) { rasgo = [ 'sospechoso', 'amenazante']; } else
  //   if ( tirada < 18 ) { rasgo = [ 'reservado', 'débil']; } else
  //   if ( tirada < 22 ) { rasgo = [ 'fuerte', 'extranjero']; } else
  //   if ( tirada < 26 ) { rasgo = [ 'pequeño', 'rico']; } else
  //   if ( tirada < 30 ) { rasgo = [ 'digno de confianza', 'de poca monta']; } else
  //   if ( tirada < 34 ) { rasgo = [ 'desamparado', 'ambicioso']; } else
  //   if ( tirada < 38 ) { rasgo = [ 'peculiar', 'habilidoso']; } else
  //   if ( tirada < 42 ) { rasgo = [ 'problemático', 'útil']; } else
  //   if ( tirada < 46 ) { rasgo = [ 'inteligente', 'valiente']; } else
  //   if ( tirada < 50 ) { rasgo = [ 'encantador', 'salvaje']; } else
  //   if ( tirada < 54 ) { rasgo = [ 'de voluntad fuerte', 'típicamente americano']; } else
  //   if ( tirada < 58 ) { rasgo = [ 'famoso', 'duro']; } else
  //   if ( tirada < 62 ) { rasgo = [ 'estrafalario', 'distintivo']; } else
  //   if ( tirada < 66 ) { rasgo = [ 'estúpido', 'profesional']; } else
  //   if ( tirada < 70 ) { rasgo = [ 'frío', 'joven']; } else
  //   if ( tirada < 74 ) { rasgo = [ 'impulsivo', 'violento']; } else
  //   if ( tirada < 78 ) { rasgo = [ 'torpe', 'urbano']; } else
  //   if ( tirada < 82 ) { rasgo = [ 'afortunado', 'amateur']; } else
  //   if ( tirada < 86 ) { rasgo = [ 'peligroso', 'viejo']; } else
  //   if ( tirada < 90 ) { rasgo = [ 'agil', 'nativo']; } else
  //   if ( tirada < 94 ) { rasgo = [ 'bello', 'malvado']; } else
  //   if ( tirada < 98 ) { rasgo = [ 'débil', 'extraño']; } else
  //   if ( tirada < 101 ) { rasgo = [ 'talentoso', 'ordinario']; }

  //   return rasgo[posicion];
  // }

  // generarTipoPNJ(tirada: number) {
  //   let tipo: string;
  //   if ( tirada < 5 ) { tipo = 'un político'; } else
  //   if ( tirada < 10 ) { tipo = 'un contacto'; } else
  //   if ( tirada < 14 ) { tipo = 'un hombre de negocios'; } else
  //   if ( tirada < 18 ) { tipo = 'un guía'; } else
  //   if ( tirada < 22 ) { tipo = 'un servidor'; } else
  //   if ( tirada < 26 ) { tipo = 'una celebridad'; } else
  //   if ( tirada < 30 ) { tipo = 'un científico'; } else
  //   if ( tirada < 34 ) { tipo = 'un doctor'; } else
  //   if ( tirada < 38 ) { tipo = 'un criminal'; } else
  //   if ( tirada < 42 ) { tipo = 'un investigador'; } else
  //   if ( tirada < 46 ) { tipo = 'una esposa'; } else
  //   if ( tirada < 50 ) { tipo = 'un experto'; } else
  //   if ( tirada < 54 ) { tipo = 'un informante'; } else
  //   if ( tirada < 58 ) { tipo = 'un chofer'; } else
  //   if ( tirada < 62 ) { tipo = 'un matón'; } else
  //   if ( tirada < 66 ) { tipo = 'un fanático'; } else
  //   if ( tirada < 70 ) { tipo = 'un académico'; } else
  //   if ( tirada < 74 ) { tipo = 'un asistente'; } else
  //   if ( tirada < 78 ) { tipo = 'un obrero'; } else
  //   if ( tirada < 82 ) { tipo = 'un secuaz'; } else
  //   if ( tirada < 86 ) { tipo = 'un ocultista'; } else
  //   if ( tirada < 90 ) { tipo = 'un niño'; } else
  //   if ( tirada < 94 ) { tipo = 'un artista'; } else
  //   if ( tirada < 98 ) { tipo = 'un piloto'; } else
  //   if ( tirada < 101 ) { tipo = 'un soldado'; }
  //   return tipo;
  // }

  // generarSecuenciaAccion() {
  //   let accion: SecuenciaAccion;

  //   accion = {
  //     tipo: this.generarAccionTipo(this.d100()),
  //     participantes: this.generarAccionParticipantes(this.d100()),
  //     lugar: this.generarAccionLugar(this.d100()),
  //     complicaciones: this.generarAccionComplicaciones(this.d100()),
  //   };


  //   return accion;


  // }

  // generarAccionTipo(tirada: number) {
  //   let tipo: string;
  //   if ( tirada < 21 ) { tipo = 'una persecución a pie'; } else
  //   if ( tirada < 51 ) { tipo = 'una persecución en vehiculo'; } else
  //   if ( tirada < 71 ) { tipo = 'una pelea sin armas'; } else
  //   if ( tirada < 101 ) { tipo = 'una pelea sin armas'; }

  //   return tipo;
  // }

  // generarAccionParticipantes(tirada: number) {
  //   let participa: string;
  //   if ( tirada < 31 ) { participa = 'pocas personas (1-2 por personaje)'; } else
  //   if ( tirada < 76 ) { participa = 'algunas personas (3-4 por personaje)'; } else
  //   if ( tirada < 101 ) { participa = 'muchas personas (5+ por personaje)'; }
  //   return participa;
  // }
  // generarAccionLugar(tirada: number) {
  //   let lugar: string;
  //   if ( tirada < 6 ) { lugar = 'entorno naútico (barco, puerto, etc.)'; } else
  //   if ( tirada < 11 ) { lugar = 'entorno natural (parque, selva, etc.)'; } else
  //   if ( tirada < 16 ) { lugar = 'tejados'; } else
  //   if ( tirada < 21 ) { lugar = 'calle de la ciudad'; } else
  //   if ( tirada < 26 ) { lugar = 'entorno residencial'; } else
  //   if ( tirada < 31 ) { lugar = 'entorno de entretenimiento (teatro, estadio, discoteca, etc.)'; } else
  //   if ( tirada < 36 ) { lugar = 'iglesia / templo / otros entornos religiosos'; } else
  //   if ( tirada < 41 ) { lugar = 'entorno empresarial (oficina, fábrica, almacén, mercado, etc.)'; } else
  //   if ( tirada < 46 ) { lugar = 'entorno de transporte (aeropuerto, estación de tren, trenes o aviones)'; } else
  //   if ( tirada < 51 ) { lugar = 'entorno educativo (museo, colegio, etc.)'; } else
  //   if ( tirada < 56 ) { lugar = 'entorno ciudadano (correos, ayuntamiento)'; } else
  //   if ( tirada < 61 ) { lugar = 'barrio pobre o en mal estado'; } else
  //   if ( tirada < 66 ) { lugar = 'en medio de la nada'; } else
  //   if ( tirada < 71 ) { lugar = 'lugar secreto / escondido'; } else
  //   if ( tirada < 76 ) { lugar = 'base (de los héroes u otra)'; } else
  //   if ( tirada < 81 ) { lugar = 'entorno militar (cuartel, etc.)'; } else
  //   if ( tirada < 86 ) { lugar = 'restaurante'; } else
  //   if ( tirada < 91 ) { lugar = 'laboratorio'; } else
  //   if ( tirada < 96 ) { lugar = 'punto de referencia'; } else
  //   if ( tirada < 101 ) { lugar = 'entorno inusual (bajo el agua, en el espacio, bajo tierra, etc.)'; }
  //   return lugar;
  // }
  // generarAccionComplicaciones(tirada: number) {
  //   let complicacion: string;
  //   if ( tirada < 31 ) { complicacion = '... no, realmente no se complica.'; } else
  //   if ( tirada < 51 ) { complicacion = 'hay testigos inocentes en la zona'; } else
  //   if ( tirada < 61 ) { complicacion = 'el entorno es dificultoso (lluvia, niebla, movimiento rápido…) y cualquier acción se hace más difícil'; } else
  //   if ( tirada < 81 ) { complicacion = 'hay multitud de objetos que pueden ser usados como arma (platos de un restaurante, barras de hierro en una fundición…)'; } else
  //   if ( tirada < 101 ) { complicacion = `
  //   ¡Nueva escena de acción!
  //   La cosa se complica y se produce
  //       ${this.generarAccionTipo(this.d100())} en ${this.generarAccionLugar(this.d100())}
  //       que implica ${this.generarAccionParticipantes(this.d100())} y que se complica ${this.generarAccionComplicaciones(this.d100())}`; }
  //   return complicacion;
  // }
  // generarGiroArgumental(tirada: number) {
  //   let giro: string;
  //   if ( tirada < 11 ) { giro = '¡Traición! Un PNJ en el que confiaban ha demostrado no ser de confianza'; } else
  //   if ( tirada < 36 ) { giro = `¡Cambio de aires! Antes de finalizar este acto la acción se traslada a ${this.generarLocalizacion(this.d100())}`; } else
  //   if ( tirada < 41 ) { giro = `El que parecía ser el villano principal resulta ser un mero comparsa o quizá nunca tuvo nada que ver con este asunto. Quien está detrás de todo es ${this.generarVillano(this.d100())}` ; } else
  //   if ( tirada < 56 ) { giro = `¡Planes dentro de planes! Hay planes realmente complicados y este acaba de descubrirse que implicaba realmente ${this.generarPlanQue(this.d100())} ${this.generarPlanAQuien(this.d100())} `; } else
  //   if ( tirada < 66 ) { giro = '¡Inversión! Parece que giran las tornas y lo que parecía blanco es negro. De repente todo cambia (Si los héroes colaboraban con la policía ahora les persigue, si todo parecía estar en su contra ahora parece ahber alguna luz...)'; } else
  //   if ( tirada < 81 ) { giro = 'Ocurre algo extraño y sin aparente explicación: El cielo brilla rojo sangre, todas las radios comienzan a emitir una misteriosa música...'; } else
  //   if ( tirada < 86 ) { giro = '¡Deus Ex machina! De repente llega una ayuda inesperada'; } else
  //   if ( tirada < 101 ) { giro = 'No hay ningún giro reseñable'; }
  //   return giro;

  // }
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

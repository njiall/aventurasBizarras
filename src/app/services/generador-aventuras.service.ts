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
    this.aventura =  {
        intro: this.generarSinopsis(),
        actoPrimero: this.generarActo(),
        actoSegundo: this.generarActo(),
        actoTercero: this.generarActo(),
        actoCuarto: this.generarActo(),
        publicadaEn: this.generaPublicacionRevista(),
        numeroPublicacion: this.generaPublicacionNumero()
      };
    return this.aventura;
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

  generarSinopsis() {

    let intro: Sinopsis;

    intro = {
      villano : this.generarVillano(this.d100()),
      localizacion : this.generarLocalizacion(this.d100()),
      plan1 : this.generarPlanQue(this.d100()),
      plan2 : this.generarPlanAQuien(this.d100()) };

    return intro;
  }

  generarActo() {
    let intro: Acto;

    intro = {
      gancho: this.generarGancho(this.d100()),
      personajes: this.generarPNJ(),
      accion: this.generarSecuenciaAccion(),
      giroGuion: this.generarGiroArgumental(this.d100())};


    console.log(intro);
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

  /**
   * Generadores secundarios.
   */

  generarVillano(tirada: number) {
    let villano: string;
    if (tirada < 5 ) { villano = 'un gangster'; }  else
      if ( tirada < 10 ) { villano = 'un ocultista'; } else
      if ( tirada < 14 ) { villano = 'un asesino'; } else
      if ( tirada < 18 ) { villano = 'una amenaza sobrenatural'; } else
      if ( tirada < 22 ) { villano = 'un comunista'; } else
      if ( tirada < 26 ) { villano = 'un lider cultista'; } else
      if ( tirada < 29 ) { villano = 'el dirigente de una civilización perdida'; } else
      if ( tirada < 34 ) { villano = 'un científico loco'; } else
      if ( tirada < 38 ) { villano = 'un extranjero malvado'; } else
      if ( tirada < 42 ) { villano = 'un ladrón'; } else
      if ( tirada < 46 ) { villano = 'una asesina'; } else
      if ( tirada < 50 ) { villano = 'una femme fatale'; } else
      if ( tirada < 54 ) { villano = 'un poli corrupto'; } else
      if ( tirada < 58 ) { villano = 'un dictador'; } else
      if ( tirada < 62 ) { villano = 'un nazi'; } else
      if ( tirada < 66 ) { villano = 'un magnate de los negocios'; } else
      if ( tirada < 70 ) { villano = 'un señor del crimen'; } else
      if ( tirada < 74 ) { villano = 'un pirata'; } else
      if ( tirada < 78 ) { villano = 'un anarquista'; } else
      if ( tirada < 82 ) { villano = 'un personaje de la jet set'; } else
      if ( tirada < 86 ) { villano = 'un político corrupto'; } else
      if ( tirada < 89 ) { villano = 'un invasor alienígena'; } else
      if ( tirada < 94 ) { villano = 'una mente criminal'; } else
      if ( tirada < 98 ) { villano = 'la némesis de nuestros héroes'; } else
      if ( tirada < 101 ) {
        villano = `${ this.generarVillano(this.d100())} y ${ this.generarVillano(this.d100())}`; }

    return villano;
  }

  generarLocalizacion(tirada: number) {
    let localizacion: string;
    if (tirada < 5 ) { localizacion = 'los muelles'; }  else
    if ( tirada < 10 ) { localizacion = 'la jungla'; } else
    if ( tirada < 14 ) { localizacion = 'un pais asiático'; } else
    if ( tirada < 18 ) { localizacion = 'un pais europeo'; } else
    if ( tirada < 22 ) { localizacion = 'un pais del tercer mundo'; } else
    if ( tirada < 26 ) { localizacion = 'los bajos fondos'; } else
    if ( tirada < 30 ) { localizacion = 'chinatown'; } else
    if ( tirada < 34 ) { localizacion = 'desierto'; } else
    if ( tirada < 38 ) { localizacion = 'el mar'; } else
    if ( tirada < 42 ) { localizacion = 'una ciudad perdida'; } else
    if ( tirada < 46 ) { localizacion = 'una base secreta'; } else
    if ( tirada < 50 ) { localizacion = 'distrito financiero'; } else
    if ( tirada < 54 ) { localizacion = 'unos almacenes'; } else
    if ( tirada < 58 ) { localizacion = 'el aire'; } else
    if ( tirada < 62 ) { localizacion = 'barrio rico'; } else
    if ( tirada < 66 ) { localizacion = 'granja'; } else
    if ( tirada < 70 ) { localizacion = 'bosque'; } else
    if ( tirada < 74 ) { localizacion = 'otra ciudad'; } else
    if ( tirada < 78 ) { localizacion = 'el campo'; } else
    if ( tirada < 82 ) { localizacion = 'la universidad'; } else
    if ( tirada < 86 ) { localizacion = 'el ayuntamiento'; } else
    if ( tirada < 89 ) { localizacion = 'el museo'; } else
    if ( tirada < 94 ) { localizacion = 'el rascacielos'; } else
    if ( tirada < 98 ) { localizacion = 'el ártico'; } else
    if ( tirada < 101) {
      localizacion = `${ this.generarLocalizacion(this.d100())} de ${ this.generarLocalizacion(this.d100())}`; }

    return localizacion;
  }

  generarPlanQue(tirada: number) {
    let que: string;
    if (tirada < 5 ) { que = 'manipular'; }  else
      if ( tirada < 10 ) { que = 'vender'; } else
      if ( tirada < 14 ) { que = 'adquirir'; } else
      if ( tirada < 18 ) { que = 'matar'; } else
      if ( tirada < 22 ) { que = 'controlar'; } else
      if ( tirada < 26 ) { que = 'robar'; } else
      if ( tirada < 29 ) { que = 'crear'; } else
      if ( tirada < 34 ) { que = 'cazar'; } else
      if ( tirada < 38 ) { que = 'aterrorizar'; } else
      if ( tirada < 42 ) { que = 'infiltrar'; } else
      if ( tirada < 46 ) { que = 'derrocar'; } else
      if ( tirada < 50 ) { que = 'destruir'; } else
      if ( tirada < 54 ) { que = 'secuestrar'; } else
      if ( tirada < 58 ) { que = 'chantajear'; } else
      if ( tirada < 62 ) { que = 'secuestrar'; } else
      if ( tirada < 66 ) { que = 'bombardear'; } else
      if ( tirada < 70 ) { que = 'pasar de contrabando'; } else
      if ( tirada < 74 ) { que = 'asesinar'; } else
      if ( tirada < 78 ) { que = 'atracar'; } else
      if ( tirada < 82 ) { que = 'atacar'; } else
      if ( tirada < 86 ) { que = 'regir'; } else
      if ( tirada < 89 ) { que = 'tomar'; } else
      if ( tirada < 94 ) { que = 'destruir'; } else
      if ( tirada < 98 ) { que = 'chantajear'; } else
      if ( tirada < 101 ) {
        que = `${ this.generarPlanQue(this.d100())} y ${ this.generarPlanQue(this.d100())}`; }

    return que;
  }

  generarPlanAQuien(tirada: number) {
    let quien: string;
    if (tirada < 5 ) { quien = 'a un monstruo'; }  else
      if ( tirada < 10 ) { quien = 'un edificio'; } else
      if ( tirada < 14 ) { quien = 'a una gente'; } else
      if ( tirada < 18 ) { quien = 'a un país'; } else
      if ( tirada < 22 ) { quien = 'un tesoro'; } else
      if ( tirada < 26 ) { quien = 'a un enemigo'; } else
      if ( tirada < 29 ) { quien = 'un objeto'; } else
      if ( tirada < 34 ) { quien = 'un invento'; } else
      if ( tirada < 38 ) { quien = 'a una mujer'; } else
      if ( tirada < 42 ) { quien = 'a un hombre'; } else
      if ( tirada < 46 ) { quien = 'a nuestro/s heroe/s'; } else
      if ( tirada < 50 ) { quien = 'un dinero'; } else
      if ( tirada < 54 ) { quien = 'una ciudad'; } else
      if ( tirada < 58 ) { quien = 'al mundo'; } else
      if ( tirada < 62 ) { quien = 'un vehículo'; } else
      if ( tirada < 66 ) { quien = 'un negocio'; } else
      if ( tirada < 70 ) { quien = 'un Mundo Perdido'; } else
      if ( tirada < 74 ) { quien = 'unas joyas'; } else
      if ( tirada < 78 ) { quien = 'un regente'; } else
      if ( tirada < 82 ) { quien = 'a alguien famoso'; } else
      if ( tirada < 86 ) { quien = 'a un rival'; } else
      if ( tirada < 89 ) { quien = 'a la ley'; } else
      if ( tirada < 94 ) { quien = 'a unas víctimas inocentes'; } else
      if ( tirada < 98 ) { quien = 'a la familia de nuestro/s heroe/s'; } else
      if ( tirada < 101 ) {
        quien = `${ this.generarPlanAQuien(this.d100())} y ${ this.generarPlanAQuien(this.d100())}`; }

    return quien;
  }

  generarGancho(tirada: number) {
    let gancho: string;
    if ( tirada < 12 ) { gancho = 'Un desconocido pide ayuda '; } else
    if ( tirada < 21 ) { gancho = 'Los héroes encuentran un cadáver'; }  else
    if ( tirada < 31 ) { gancho = 'Ocurre un horrible desastre'; }  else
    if ( tirada < 43 ) { gancho = 'Alguien sufre un ataque'; }  else
    if ( tirada < 57 ) { gancho = 'Un extraño e inexplicable hecho'; }  else
    if ( tirada < 66 ) { gancho = 'Los héroes leen una noticia o la escuchan en la radio'; }  else
    if ( tirada < 78 ) { gancho = 'Un viejo amigo pide ayuda'; }  else
    if ( tirada < 91 ) { gancho = '"In media res": Los héroes comienzan involucrados desde el principio: están siendo atacados o incriminados en un crimen que no han cometido, o son víctimas de un robo…'; }  else
    if ( tirada < 101 ) { gancho =  `${ this.generarGancho(this.d100())} y ${ this.generarGancho(this.d100())}`; }
    return gancho;
  }

  generarPNJ() {
    const LISTA = [];

    for (let i = 1; i < this.d4(2); i++) {
      const PERS = {descriptor1: this.generarRasgoPNJ(this.d100(), 0),  descriptor2: this.generarRasgoPNJ(this.d100(), 1), tipo: this.generarTipoPNJ(this.d100())};
      LISTA.push(PERS);
    }
    return LISTA;
  }

  generarRasgoPNJ(tirada: number, posicion: number) {
    let rasgo: string[];
    if ( tirada < 5 ) { rasgo = [ 'grande', 'pulcro']; } else
    if ( tirada < 10 ) { rasgo = [ 'feo', 'desafortunado']; } else
    if ( tirada < 14 ) { rasgo = [ 'sospechoso', 'amenazante']; } else
    if ( tirada < 18 ) { rasgo = [ 'reservado', 'débil']; } else
    if ( tirada < 22 ) { rasgo = [ 'fuerte', 'extranjero']; } else
    if ( tirada < 26 ) { rasgo = [ 'pequeño', 'rico']; } else
    if ( tirada < 30 ) { rasgo = [ 'digno de confianza', 'de poca monta']; } else
    if ( tirada < 34 ) { rasgo = [ 'desamparado', 'ambicioso']; } else
    if ( tirada < 38 ) { rasgo = [ 'peculiar', 'habilidoso']; } else
    if ( tirada < 42 ) { rasgo = [ 'problemático', 'útil']; } else
    if ( tirada < 46 ) { rasgo = [ 'inteligente', 'corajudo']; } else
    if ( tirada < 50 ) { rasgo = [ 'encantador', 'salvaje']; } else
    if ( tirada < 54 ) { rasgo = [ 'de voluntad fuerte', 'típicamente americano']; } else
    if ( tirada < 58 ) { rasgo = [ 'famoso', 'duro']; } else
    if ( tirada < 62 ) { rasgo = [ 'estrafalario', 'distintivo']; } else
    if ( tirada < 66 ) { rasgo = [ 'estúpido', 'profesional']; } else
    if ( tirada < 70 ) { rasgo = [ 'frío', 'joven']; } else
    if ( tirada < 74 ) { rasgo = [ 'impulsivo', 'violento']; } else
    if ( tirada < 78 ) { rasgo = [ 'torpe', 'urbano']; } else
    if ( tirada < 82 ) { rasgo = [ 'afortunado', 'amateur']; } else
    if ( tirada < 86 ) { rasgo = [ 'peligroso', 'viejo']; } else
    if ( tirada < 90 ) { rasgo = [ 'agil', 'nativo']; } else
    if ( tirada < 94 ) { rasgo = [ 'bello', 'malvado']; } else
    if ( tirada < 98 ) { rasgo = [ 'débil', 'extraño']; } else
    if ( tirada < 101 ) { rasgo = [ 'talentoso', 'ordinario']; }

    return rasgo[posicion];
  }

  generarTipoPNJ(tirada: number) {
    let tipo: string;
    if ( tirada < 5 ) { tipo = 'un político'; } else
    if ( tirada < 10 ) { tipo = 'un contacto'; } else
    if ( tirada < 14 ) { tipo = 'un hombre de negocios'; } else
    if ( tirada < 18 ) { tipo = 'un guía'; } else
    if ( tirada < 22 ) { tipo = 'un servidor'; } else
    if ( tirada < 26 ) { tipo = 'una celebridad'; } else
    if ( tirada < 30 ) { tipo = 'un científico'; } else
    if ( tirada < 34 ) { tipo = 'un doctor'; } else
    if ( tirada < 38 ) { tipo = 'un criminal'; } else
    if ( tirada < 42 ) { tipo = 'un investigador'; } else
    if ( tirada < 46 ) { tipo = 'una esposa'; } else
    if ( tirada < 50 ) { tipo = 'un experto'; } else
    if ( tirada < 54 ) { tipo = 'un informante'; } else
    if ( tirada < 58 ) { tipo = 'un chofer'; } else
    if ( tirada < 62 ) { tipo = 'un matón'; } else
    if ( tirada < 66 ) { tipo = 'un fanático'; } else
    if ( tirada < 70 ) { tipo = 'un académico'; } else
    if ( tirada < 74 ) { tipo = 'un asistente'; } else
    if ( tirada < 78 ) { tipo = 'un obrero'; } else
    if ( tirada < 82 ) { tipo = 'un secuaz'; } else
    if ( tirada < 86 ) { tipo = 'un ocultista'; } else
    if ( tirada < 90 ) { tipo = 'un niño'; } else
    if ( tirada < 94 ) { tipo = 'un artista'; } else
    if ( tirada < 98 ) { tipo = 'un piloto'; } else
    if ( tirada < 101 ) { tipo = 'un soldado'; }
    return tipo;
  }

  generarSecuenciaAccion() {
    let accion: SecuenciaAccion;

    accion = {
      tipo: this.generarAccionTipo(this.d100()),
      participantes: this.generarAccionParticipantes(this.d100()),
      lugar: this.generarAccionLugar(this.d100()),
      complicaciones: this.generarAccionComplicaciones(this.d100()),
    };


    return accion;


  }

  generarAccionTipo(tirada: number) {
    let tipo: string;
    if ( tirada < 21 ) { tipo = 'una persecución a pie'; } else
    if ( tirada < 51 ) { tipo = 'una persecución en vehiculo'; } else
    if ( tirada < 71 ) { tipo = 'una pelea sin armas'; } else
    if ( tirada < 101 ) { tipo = 'una pelea sin armas'; }

    return tipo;
  }

  generarAccionParticipantes(tirada: number) {
    let participa: string;
    if ( tirada < 31 ) { participa = 'pocas personas (1-2 por personaje)'; } else
    if ( tirada < 76 ) { participa = 'algunas personas (3-4 por personaje)'; } else
    if ( tirada < 101 ) { participa = 'muchas personas (5+ por personaje)'; }
    return participa;
  }
  generarAccionLugar(tirada: number) {
    let lugar: string;
    if ( tirada < 6 ) { lugar = 'entorno naútico (barco, puerto, etc.)'; } else
    if ( tirada < 11 ) { lugar = 'entorno natural (parque, selva, etc.)'; } else
    if ( tirada < 16 ) { lugar = 'tejados'; } else
    if ( tirada < 21 ) { lugar = 'calle de la ciudad'; } else
    if ( tirada < 26 ) { lugar = 'entorno residencial'; } else
    if ( tirada < 31 ) { lugar = 'entorno de entretenimiento (teatro, estadio, discoteca, etc.)'; } else
    if ( tirada < 36 ) { lugar = 'iglesia / templo / otros entornos religiosos'; } else
    if ( tirada < 41 ) { lugar = 'entorno empresarial (oficina, fábrica, almacén, mercado, etc.)'; } else
    if ( tirada < 46 ) { lugar = 'entorno de transporte (aeropuerto, estación de tren, trenes o aviones)'; } else
    if ( tirada < 51 ) { lugar = 'entorno educativo (museo, colegio, etc.)'; } else
    if ( tirada < 56 ) { lugar = 'entorno ciudadano (correos, ayuntamiento)'; } else
    if ( tirada < 61 ) { lugar = 'barrio pobre o en mal estado'; } else
    if ( tirada < 66 ) { lugar = 'en medio de la nada'; } else
    if ( tirada < 71 ) { lugar = 'lugar secreto / escondido'; } else
    if ( tirada < 76 ) { lugar = 'base (de los héroes u otra)'; } else
    if ( tirada < 81 ) { lugar = 'entorno militar (cuartel, etc.)'; } else
    if ( tirada < 86 ) { lugar = 'restaurante'; } else
    if ( tirada < 91 ) { lugar = 'laboratorio'; } else
    if ( tirada < 96 ) { lugar = 'punto de referencia'; } else
    if ( tirada < 101 ) { lugar = 'entorno inusual (bajo el agua, en el espacio, bajo tierra, etc.)'; }
    return lugar;
  }
  generarAccionComplicaciones(tirada: number) {
    let complicacion: string;
    if ( tirada < 31 ) { complicacion = '... no, realmente no se complica.'; } else
    if ( tirada < 51 ) { complicacion = 'hay testigos inocentes en la zona'; } else
    if ( tirada < 61 ) { complicacion = 'el entorno es dificultoso (lluvia, niebla, movimiento rápido…) y cualquier acción se hace más difícil'; } else
    if ( tirada < 81 ) { complicacion = 'hay multitud de objetos que pueden ser usados como arma (platos de un restaurante, barras de hierro en una fundición…)'; } else
    if ( tirada < 101 ) { complicacion = `
    ¡Nueva escena de acción!
    La cosa se complica y se produce
        ${this.generarAccionTipo(this.d100())} en ${this.generarAccionLugar(this.d100())}
        que implica ${this.generarAccionParticipantes(this.d100())} y que se complica ${this.generarAccionComplicaciones(this.d100())}`; }
    return complicacion;
  }
  generarGiroArgumental(tirada: number) {
    let giro: string;
    if ( tirada < 11 ) { giro = '¡Traición! Un PNJ en el que confiaban ha demostrado no ser de confianza'; } else
    if ( tirada < 36 ) { giro = `¡Cambio de aires! Antes de finalizar este acto la acción se traslada a ${this.generarLocalizacion(this.d100())}`; } else
    if ( tirada < 41 ) { giro = `El que parecía ser el villano principal resulta ser un mero comparsa o quizá nunca tuvo nada que ver con este asunto. Quien está detrás de todo es ${this.generarVillano(this.d100())}` ; } else
    if ( tirada < 56 ) { giro = `¡Planes dentro de planes! Hay planes realmente complicados y este acaba de descubrirse que implicaba realmente ${this.generarPlanQue(this.d100())} ${this.generarPlanAQuien(this.d100())} `; } else
    if ( tirada < 66 ) { giro = '¡Inversión! Parece que giran las tornas y lo que parecía blanco es negro. De repente todo cambia (Si los héroes colaboraban con la policía ahora les persigue, si todo parecía estar en su contra ahora parece ahber alguna luz...)'; } else
    if ( tirada < 81 ) { giro = 'Ocurre algo extraño y sin aparente explicación: El cielo brilla rojo sangre, todas las radios comienzan a emitir una misteriosa música...'; } else
    if ( tirada < 86 ) { giro = '¡Deus Ex machina! De repente llega una ayuda inesperada'; } else
    if ( tirada < 101 ) { giro = 'No hay ningún giro reseñable'; }
    return giro;

  }
}




export interface Sinopsis {
  villano: string;
  plan1: string;
  plan2: string;
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
}

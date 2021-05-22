import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneradorTitulosService {

  titulos: String[]; // Array de títulos
  version = 'V_0.2'; // Versión del servicio


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
    /*
    Concordancia del título:
      0 Masculino singular
      1 Masculino plural
      2 Femenino singular
      3 Femenino plural
     */
    const CONCORDANCIA = Math.floor(Math.random() * 4);
    const CONCORDANCIA_ALT = Math.floor(Math.random() * 4);

   return this.getPlantilla( CONCORDANCIA, CONCORDANCIA_ALT ).replace('de el', 'del');
  }


  getPlantilla(concordancia: number, concordanciaAlt: number) {
    const PLANTILLA = [
     `${ this.getSujeto(concordancia) } `,
     `${ this.getInicio(concordancia) } ${ this.getSujeto(concordancia) } `,
     `${ this.getObjeto(concordancia) } ${ this.getSujeto(concordancia) } `,
     `${ this.getSujeto(concordancia) } ${ this.getLugar(concordanciaAlt) }`,
    ];

    return PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];
  }


  // Generadores de datos

  getArticulo(concordancia: number) {
    const ARTICULO = [
      ['el', 'los', 'la', 'las'],
      ['el', 'los', 'la', 'las'],
      ['el', 'los', 'la', 'las'],
      ['el', 'los', 'la', 'las'],
      ['el', 'los', 'la', 'las'],
      ['un', 'unos', 'una', 'unas'],
      ['aquel', 'aquellos', 'aquella', 'aquellas'],
    ];

    return  ARTICULO[Math.floor(Math.random() * ARTICULO.length)][concordancia];
  }

  getInicio(concordancia: number) {

    const LITERAL = [
      `Negociar con ${this.getArticulo(concordancia)}`,
      `El novio de ${this.getArticulo(concordancia)}`,
      `Cautivo de ${this.getArticulo(concordancia)}`,
      `El caso de ${this.getArticulo(concordancia)}`,
      `El cortejo de ${this.getArticulo(concordancia)}`,
      `La maldición de ${this.getArticulo(concordancia)}`,
      `El día de ${this.getArticulo(concordancia)}`,
      `El amanecer de ${this.getArticulo(concordancia)}`,
      `la muerte de ${this.getArticulo(concordancia)}`,
      `El tesoro de ${this.getArticulo(concordancia)}`,
      `La caza de ${this.getArticulo(concordancia)}`,
      `Cazado por ${this.getArticulo(concordancia)}`,
      `La caza de ${this.getArticulo(concordancia)}`,
      `La isla de ${this.getArticulo(concordancia)}`,
      `La guarida de ${this.getArticulo(concordancia)}`,
      `La tierra de ${this.getArticulo(concordancia)}`,
      `La leyenda de ${this.getArticulo(concordancia)}`,
      `El maestro de ${this.getArticulo(concordancia)}`,
      `Mi vida con ${this.getArticulo(concordancia)}`,
      `El misterio de ${this.getArticulo(concordancia)}`,
      `La noche de ${this.getArticulo(concordancia)}`,
      `El retorno de ${this.getArticulo(concordancia)}`,
      `El reino de ${this.getArticulo(concordancia)}`,
      `La venganza de ${this.getArticulo(concordancia)}`,
      `La búsqueda de ${this.getArticulo(concordancia)}`,
      `El secreto de ${this.getArticulo(concordancia)}`,
      `Siervos de ${this.getArticulo(concordancia)}`,
      `Canción de ${this.getArticulo(concordancia)}`,
      `La canción de ${this.getArticulo(concordancia)}`,
      `El triunfo de ${this.getArticulo(concordancia)}`,
      `El problema con ${this.getArticulo(concordancia)}`,
      `El camino de ${this.getArticulo(concordancia)}`,
      `El Portal de ${this.getArticulo(concordancia)}`,
    ];

     const INICIOCHORRA = [
      `${ Math.floor(Math.random() * 100) + 1 } cosas que siempre quisiste saber sobre ${this.getArticulo(concordancia)}`,
      `Un cubo lleno de ${this.getArticulo(concordancia)}`,
      `La tienda de mascotas de ${this.getArticulo(concordancia)}`,
      `El bueno, el malo y ${this.getArticulo(concordancia)}`,
    ];

    const INICIO = [
      `${ LITERAL[Math.floor(Math.random() * LITERAL.length)] } `,
      `${ LITERAL[Math.floor(Math.random() * LITERAL.length)] } `,
      `${ LITERAL[Math.floor(Math.random() * LITERAL.length)] } `,
      `${ LITERAL[Math.floor(Math.random() * LITERAL.length)] } `,
      `${ LITERAL[Math.floor(Math.random() * LITERAL.length)] } `,
      `${ LITERAL[Math.floor(Math.random() * LITERAL.length)] } `,
      `${ INICIOCHORRA[Math.floor(Math.random() * INICIOCHORRA.length)] } `,
    ];

    return INICIO[Math.floor(Math.random() * INICIO.length)];
  }


  getModificador(concordancia: number) {

    const MODIFICADORCHORRA = [
      ['a cuadros', 'a cuadros', 'a cuadros', 'a cuadros'],
      ['de lunares', 'a cuadros', 'a cuadros', 'a cuadros'],
      ['aficionado', 'aficionados', 'aficionada', 'aficionadas']
    ];

    const ANIMADO = [
      ['enfadado', 'enfadados', 'enfadada', 'enfadadas'],
      ['mecánico', 'mecánicos', 'mecánica', 'mecánicas'],
      ['acechante', 'acechantes', 'acechante', 'acechantes'],
      ['inmortal', 'inmortales', 'inmortal', 'inmortales'],
      ['salvaje', 'salvajes', 'salvaje', 'salvajes'],
      ['cubierto de cicatrices', 'cubiertos de cicatrices', 'cubierta de cicatrices', 'cubiertas de cicatrices'],
      ['sonriente', 'sonrientes', 'sonriente', 'sonrientes'],
      ['vampírico', 'vampíricos', 'vampírica', 'vampíricas'],
    ];

    const INANIMADO = [
      [`${ this.getColor(concordancia) }`, `${ this.getColor(concordancia) }`, `${ this.getColor(concordancia) }`, `${ this.getColor(concordancia) }`],
      ['prohibido', 'prohibidos', 'prohibida', 'prohibidas'],
      ['olvidado', 'olvidados', 'olvidada', 'olvidadas'],
    ];

    const OJOS =  [
      [ `de ojos ${ this.getColor(1) }`, `de ojos ${ this.getColor(1) }` ,  `de ojos ${ this.getColor(1) }`, `de ojos ${ this.getColor(1) }` ],
      [ `de ojos ${ this.getColor(1) }`, `de ojos ${ this.getColor(1) }` ,  `de ojos ${ this.getColor(1) }`, `de ojos ${ this.getColor(1) }` ],
      ['tuerto', 'tuertos', 'tuerta', 'tuertas'],
      ['de tres ojos', 'de tres ojos', 'de tres ojos', 'de tres ojos'],
      ['sin ojos', 'sin ojos', 'sin ojos', 'sin ojos'],
      ];

    const VARIADO = [
      [`${ this.getColor(concordancia) }`, `${ this.getColor(concordancia) }`, `${ this.getColor(concordancia) }`, `${ this.getColor(concordancia) }`],
      ['abominable', 'abominables', 'abominable', 'abominables'],
      ['de hueso', 'de hueso', 'de hueso', 'de hueso'],
      ['de hueso', 'de hueso', 'de hueso', 'de hueso'],
      ['de cristal', 'de cristal', 'de cristal', 'de cristal'],
      ['de sangre', 'de sangre', 'de sangre', 'de sangre'],
      ['maldito', 'malditos', 'maldita', 'malditas'],
      ['demoniaco', 'demoniacos', 'demoniaca', 'demoniacas'],
      ['diamantino', 'diamantinos', 'diamantina', 'diamantinas'],
      ['encantado', 'encantados', 'encantada', 'encantadas'],
      ['olvidado', 'olvidados', 'olvidada', 'olvidadas'],
      ['gigante', 'gigantes', 'gigante', 'gigantes'],
      ['oculto', 'ocultos', 'oculta', 'ocultas'],
      ['relampagueante', 'relampagueantes', 'relampagueante', 'relampagueantes'],
      ['solitario', 'solitarios', 'solitaria', 'solitarias'],
      ['lunar', 'lunares', 'lunar', 'lunares'],
      ['mecánico', 'mecánicos', 'mecánica', 'mecánicas'],
      ['espiritual', 'espirituales', 'espiritual', 'espirituales'],
      ['tranquilo', 'tranquilos', 'tranquila', 'tranquilas'],
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
     // ` ${ MODIFICADORCHORRA[Math.floor(Math.random() * MODIFICADORCHORRA.length)][concordancia]}`,
      ` ${ INANIMADO[Math.floor(Math.random() * INANIMADO.length)][concordancia]}`,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];

  }

  getAnimal(concordancia: number) {
    const ANIMAL = [
      ['oso', 'osa', 'osos', 'osas' ],
      ['pájaro', 'pajaros', 'pájara', 'pájaras'],
      ['halcón', 'halcones', 'halcona', 'halconas'],
      ['kraken', 'krakenes', 'kraken', 'krakenes'],
      ['mamut', 'mamuts', 'mamut', 'mamuts'],
      ['polilla', 'polillas', 'polilla', 'polillas'],
      ['búho', 'buhos', 'lechuza', 'lechuzas'],
      ['lagarto', 'lagartos', 'serpiente', 'serpientes'],
      ['gorrión', 'gorriones', 'paloma', 'palomas'],
      ['escorpión', 'escorpiones', 'araña', 'arañas'],
      ['conejo', 'conejos', 'liebre', 'liebres'],
      ['ratón', 'ratones', 'rata', 'ratas'],
      ['tigre', 'tigres', 'tigresa', 'tigresas'],
      ['víbora', 'viboras', 'víbora', 'viboras'],
      ['lobo', 'lobos', 'loba', 'lobas'],
    ];

    const MODIFICADOR = [
      ['terrible', 'terribles', 'terrible', 'terribles' ],
      ['salvaje', 'salvajes', 'salvaje', 'salvajes' ],
      ['devorador de hombres', 'devoradores de hombres', 'devoradora de hombres', 'devoradoras de hombres' ],
      ['pigmeo', 'pigmeos', 'pigmea', 'pigmeas' ],
      ['rabioso', 'rabiosos', 'rabiosa', 'rabiosas' ],
      ['dientes de sable', 'dientes de sable', 'dientes de sable', 'dientes de sable' ],
      ['-hombre', '-hombre', '-mujer', '-mujer' ],
    ];

    const PLANTILLA = [
      // ` ${ ANIMAL[Math.floor(Math.random() * ANIMAL.length)]}`,
      ` ${ ANIMAL[Math.floor(Math.random() * ANIMAL.length)][concordancia]} ${ this.getColor(concordancia)}`,
      ` ${ ANIMAL[Math.floor(Math.random() * ANIMAL.length)][concordancia]} ${ this.getModificador(concordancia)}`,
      ` ${ ANIMAL[Math.floor(Math.random() * ANIMAL.length)][concordancia]} ${ MODIFICADOR[Math.floor(Math.random() * MODIFICADOR.length)][concordancia]}`,
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

  getLugar(concordancia: number) {

    const PLACESIN = [
      ['ciudad', 'ciudades', 'ciudadela', 'ciudadelas'],
      ['bosque', 'bosques', 'arboleda', 'arboledas'],
      ['monte', 'montes', 'montaña', 'montañas'],
      ['pantano', 'pantanos', 'marisma', 'marismas'],
      ['torreón', 'torreones', 'torre', 'torres'],
      ['bazar', 'bazares', 'tienda', 'tiendas'],
    ];

    const PLACESON = [
      ['puente', 'puentes', 'pasarela', 'pasarelas'],
      ['islote', 'islotes', 'isla', 'islas'],
      ['pináculo', 'pináculos', 'cima', 'cimas'],
    ];

    const PLACESTHROUGH = [
      ['bosque', 'bosques', 'floresta', 'florestas'],
      ['portal', 'portales', 'puerta', 'puertas'],
      ['monte', 'montes', 'montaña', 'montañas'],
      ['pantano', 'pantanos', 'marisma', 'marismas'],
    ];

    const PLACESACROSS = [
      ['puente', 'puentes', 'pasarela', 'pasarelas'],
      ['río', 'ríos', 'torrentera', 'torrenteras'],
      ['mar', 'mares', 'agua', 'aguas'],
    ];

    const CONCEPT = [
      'el destino', 'el horror', 'la locura', 'la magia', 'los recuerdos', 'el olvido', 'las almas', 'los espíritus', 'el tiempo'
    ];

    const PLACEOF = [
      ` en ${ PLACESIN[Math.floor(Math.random() * PLACESIN.length)][concordancia]} `,
      ` en ${ PLACESON[Math.floor(Math.random() * PLACESON.length)][concordancia]} `,
      ` a través de ${ PLACESTHROUGH[Math.floor(Math.random() * PLACESTHROUGH.length)][concordancia]} `,
      ` a través de ${ PLACESACROSS[Math.floor(Math.random() * PLACESACROSS.length)][concordancia]} `,
      ` en ${ PLACESIN[Math.floor(Math.random() * PLACESIN.length)][concordancia]} `,
      ` en ${ PLACESON[Math.floor(Math.random() * PLACESON.length)][concordancia]} `,
      ` a través de ${ PLACESTHROUGH[Math.floor(Math.random() * PLACESTHROUGH.length)][concordancia]} `,
      ` a través de ${ PLACESACROSS[Math.floor(Math.random() * PLACESACROSS.length)][concordancia]} `,
    ];

    const PLACE1 = [
      ` ${ PLACESIN[Math.floor(Math.random() * PLACESIN.length)][concordancia]} `,
      ` ${ PLACESON[Math.floor(Math.random() * PLACESON.length)][concordancia]} `,
      ` ${ PLACESTHROUGH[Math.floor(Math.random() * PLACESTHROUGH.length)][concordancia]} `,
      ` ${ PLACESACROSS[Math.floor(Math.random() * PLACESACROSS.length)][concordancia]} `,
    ];

    const PLANTILLA = [
      ` ${ PLACE1[Math.floor(Math.random() * PLACE1.length)] } de ${ this.getSujeto(concordancia)} `,
      ` ${ PLACEOF[Math.floor(Math.random() * PLACEOF.length)] } de ${ this.getSujeto(concordancia)} `,
      ` ${ PLACEOF[Math.floor(Math.random() * PLACEOF.length)] } de ${CONCEPT[Math.floor(Math.random() * CONCEPT.length)] } `,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];
  }


  getSujeto(concordancia: number) {
    const SUJETO = [
      ['guerrero', 'guerreros', 'guerrera', 'guerreras'],
      ['enano', 'enanos', 'enana', 'enanas'],
      ['monstruo', 'monstruos', 'monstrua', 'monstruas'],
      ['árbol', 'árboles', 'árboleda', 'árboledas'],
      ['dios', 'dioses', 'diosa', 'diosas'],
      ['diablo', 'diablesa', 'diablos', 'diablesas'],
      ['oscuro', 'oscuros', 'sombra', 'sombras'],
      ['fantasma', 'fantasmas', 'fantasma', 'fantasmas'],
      ['pirata', 'piratas', 'pirata', 'piratas'],
      ['bestia', 'bestias', 'bestia', 'bestias'],
      ['brujo', 'brujos', 'bruja', 'brujas'],
      ['cráneo', 'cráneos', 'calavera', 'calaveras'],
      ['rey', 'reyes', 'reina', 'reinas'],
    ];

    const SUJETOCHORRA = [
      ['nabo', 'nabos', 'calabaza', 'calabazas'],
      ['interno', 'internos', 'interna', 'internas'],
      ];

    const PLANTILLA = [
      ` ${ this.getAnimal(concordancia) }`,
      ` ${ SUJETO[Math.floor(Math.random() * SUJETO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
      ` ${ this.getAnimal(concordancia) }`,
      ` ${ SUJETO[Math.floor(Math.random() * SUJETO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
      ` ${ this.getAnimal(concordancia) }`,
      ` ${ SUJETO[Math.floor(Math.random() * SUJETO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
      ` ${ SUJETO[Math.floor(Math.random() * SUJETO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
      ` ${ this.getAnimal(concordancia) }`,
      ` ${ SUJETO[Math.floor(Math.random() * SUJETO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
      ` ${ this.getAnimal(concordancia) }`,
      ` ${ SUJETO[Math.floor(Math.random() * SUJETO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
      ` ${ SUJETO[Math.floor(Math.random() * SUJETO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
      ` ${ this.getAnimal(concordancia) }`,
      ` ${ SUJETO[Math.floor(Math.random() * SUJETO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
      ` ${ SUJETO[Math.floor(Math.random() * SUJETO.length)][concordancia]} ${ this.getModificador(concordancia) }`,
      ` ${ this.getModificador(concordancia) } ${ SUJETOCHORRA[Math.floor(Math.random() * SUJETOCHORRA.length)][concordancia]} `,
    ];

    return  PLANTILLA[Math.floor(Math.random() * PLANTILLA.length)];

  }

  getObjeto(concordancia: number) {
    const OBJECT = [
      `la captura de ${this.getArticulo(concordancia)}`,
      `la sangre de ${this.getArticulo(concordancia)}`,
      `los huesos de ${this.getArticulo(concordancia)}`,
      `la maldición de ${this.getArticulo(concordancia)}`,
      `la muerte de ${this.getArticulo(concordancia)}`,
      `la destrucción de ${this.getArticulo(concordancia)}`,
      `la derrota de ${this.getArticulo(concordancia)}`,
      `el favor de ${this.getArticulo(concordancia)}`,
      `el festín de ${this.getArticulo(concordancia)}`,
      `la tumba de ${this.getArticulo(concordancia)}`,
      `el tesoro de ${this.getArticulo(concordancia)}`,
      `la rabia de ${this.getArticulo(concordancia)}`,
      `la ruina de ${this.getArticulo(concordancia)}`,
      `los secretos de ${this.getArticulo(concordancia)}`,
      `la sombra de ${this.getArticulo(concordancia)}`,
      `el templo de ${this.getArticulo(concordancia)}`,
      `la venganza de ${this.getArticulo(concordancia)}`,
      ];

    return  OBJECT[Math.floor(Math.random() * OBJECT.length)];

  }


}

const modelos = {
Ferrari: ["SF90", "458 Italia", "Roma", "F40", "LaFerrari", "Monza SP1 SP2", "F50", "812 Superfast", "296 GTV", "Testarossa"],
Lamborghini: ["Aventador", "Huracan", "Urus", "Countach", "Diablo", "Murcielago", "Gallardo", "Sian FKP 37", "Revuelto", "LM 002"],
Pagani: ["Zonda Cinque", "Huayra BC", "Huayra Roadster BC", "Zonda R", "Huayra Imola", "Zonda Tricolore", "Huayra Codalunga", "Utopia", "Zonda F", "Zonda Revolucion"],
Janderk: ["J 168", "Magnu", "F200", "Long Evolution", "Proto Hypercar", "J 168 R"],
Koenigsegg: ["Jesko", "Agera RS", "CC8S", "One: 1", "Gemera", "Regera", "CCX", "CCR", "CCGT", "Trevita"],
Bugatti: ["Veyron", "Chiron", "Divo", "Centodieci", "La Voiture Noire", "EB110", "Bolide", "Mistral", "Type 57 Atlantic", "Veyron Super Sport"],
McLaren: ["P1", "720s", "F1", "Senna", "Artura", "675LT", "570s", "Elva", "Solus GT", "Gt"],
Aston_Martin: ["DB11", "Vantage", "DBS Superleggera", "DB5", "Valhalla", "Rapide", "DBX", "Virage", "One-77", "Valkyrie"],
Land_Rover: ["Range Rover", "Range Rover Sport", "Defender", "Discovery", "Velar", "Evoque", "Discovery Sport", "Freelander", "Range Rover Classic", "Range Rover SVAutobiography"],
Jaguar: ["F-Type", "XJ", "E-Type", "I-Pace", "F-Pace", "XE", "XF", "XK", "XKR", "Mark 2"],
GMA: ["T.50", "T.33", "T.33 Spider"],
Mercedes_Benz: ["Clase S", "SLS AMG", "AMG GT", "G-Class", "300SL Gullwing", "SLR Mclaren", "CL", "Project One", "190E 2.5-16 Evolution 2", "AMG GT Black Serie"],
Porsche: ["911", "918 Spider", "Carrera GT", "Taycan", "Cayenne", "Macan", "718 Cayman/Boxster", "959", "Panamera", "928"],
Audi: ["R8", "RS 6", "RS 7", "A8", "TT RS", "S8", "RS 3", "Quattro", "E-Tron GT", "RS Q8"],
BMW: ["M3", "M5", "Serie 7", "I8", "Z8", "M1", "X5 M", "8 Series", "3.0 CSL", "IX"],
Peugeot: ["205 GTI", "405 MI16", "RCZ R", "208 GTI", "308 GTI", "504 Coupe", "406 Coupe", "206 RC", "306 GTI-6", "Peugeot Onyx"],
Cadillac: ["Escalade", "CT5-V Blackwing", "CTS-V", "Eldorado", "Seville", "Deville", "CT6", "Lyriq", "V-16", "XLR"],
Ford: ["Mustang", "GT", "GT40", "Focus RS", "Shelby Cobra", "F-150 Raptor", "RS200", "Sierra Cosworth RS500", "Thunderbird", "Model T"],
Chevrolet: ["Corvette", "Camaro", "Impala", "Silverado", "Bel Air", "Chevelle SS", "Suburban", "Tahoe", "Colorado ZR2", "Nomad"],
Dodge: ["Challenger", "Charger", "Viper", "Ram 1500 TRX", "Dart", "Coronet", "Super Bee", "Demon", "Daytona", "Power Wagon"],
Rolls_Royce: ["Phantom", "Cullinan", "Ghost", "Wraith", "Dawn", "Silver Shadow", "Silver Ghost", "Corniche", "Park", "Ward", "Sweptail"],
Bentley: ["Continental GT", "Flying Spur", "Bentayga", "Mulsanne", "Arnage", "Brooklands", "Azure", "Turbo R", "Speed Six", "Batur"],
SCC: ["Tuatara", "Ultimate Aero TT"],
Hennessey: ["Venom GT", "Venom F5"],
Rimac: ["Nevera"],
Maserati: ["Gran Turismo", "Quattroporte", "Ghibli", "MC20", "Levante", "3500 GT", "Bora", "Khamsin", "Indy", "Mistral"],
Maybach: ["57/62", "S-CLASS", "GLS"],
Lotus: ["Elise", "Exige", "Evora", "Espirit", "Elan", "Eletre", "Emira", "Carlton", "Seven", "Europa"],
Alfa_Romeo: ["Giulia Quadrifoglio", "Stelvio Quadrifoglio", "8C Competizione", "Giulietta", "Spider", "GTV6", "Montreal", "159", "Brera", "4C"],
Alpine: ["A 110"],
};

const especificaciones = {
  "SF90": { 
    motor: "V8 biturbo de 3.990 cc, ubicado en posición central trasera _ Tres motores eléctricos: uno entre el motor y la transmisión, y dos en el eje delantero _ Potencia combinada: 1.000 CV (735kW) _ Par máximo: 800 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,5 segundos. Velocidad Máxima 340 km/h. Autonomía Eléctrica 26 km", 
    transmision: "Caja de cambios de doble embrague de 8 velocidades. Tracción total.", 
    diseño: "Diseño aerodinámico avanzado, con elementos activos. Interior de alta tecnología, con pantalla curva de 16 pulgadas. Sistema de control dinámico Side Slip Control (eSSC).", 
    historia: "Presentado en 2019, es el primer híbrido enchufable de Ferrari _ Su nombre rinde homenaje al 90 aniversario de la Scuderia Ferrari" 
  },
  "458 Italia": { 
    motor: "V8 atmosférico de 4.499 cc _ Potencia: 570 CV (419 kW) _ Par máximo: 540 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 3,4 segundos. Velocidad máxima: 325 km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades. Tracción trasera.", 
    diseño: "Diseño de Pininfarina, con líneas fluidas y agresivas. Interior centrado en el conductor, con controles en el volante. Diferencial electrónico E-Diff y control de tracción F1-Trac.", 
    historia: "Sucesor del F430, fue un referente en su segmento. Su motor V8 atmosférico es muy apreciado por su sonido y respuesta." 
  },
  "Roma": { 
    motor: "V8 biturbo de 3.855 cc _ Potencia: 620 CV (456 kW) _ Par máximo: 760 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 3,4 segundos. Velocidad máxima: 320 km/h", 
    transmision: "Caja de cambios de doble embrague de 8 velocidades. Tracción trasera.", 
    diseño: "Diseño inspirado en los gran turismo de los años 60. Interior lujoso y minimalista, con pantalla táctil central. Sistema de control Side Slip Control 6.0.", 
    historia: "Presentado en 2019, es un gran turismo de alto rendimiento. Su diseño elegante y atemporal lo distingue de otros Ferrari." 
  },
  "F40": { 
    motor: "V8 biturbo de 2.936 cc _ Potencia: 478 CV (352 kW) _ Par máximo: 577 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 4,1 segundos _ Velocidad máxima: 324 km/h", 
    transmision: "Caja de cambios manual de 5 velocidades _ Tracción trasera", 
    diseño: "Diseño radical de Pininfarina, con alerón trasero y carrocería de fibra de carbono _ Interior espartano, centrado en el conductor _ Sin asistencias electrónicas, para una experiencia de conducción pura", 
    historia: "Construido para celebrar el 40 aniversario de Ferrari _ Fue el coche de producción más rápido del mundo en su época" 
  },
  "LaFerrari": { 
    motor: "V12 atmosférico de 6.262 cc + motor eléctrico _ Potencia combinada: 963 CV (708 kW) _ Par máximo: 900 Nm", 
    rendimiento: "Aceleración 0-100 km/h: menos de 3 segundos _ Velocidad máxima: más de 350 km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera", 
    diseño: "Diseño aerodinámico extremo, con elementos activos _ Sistema híbrido HY-KERS, derivado de la Fórmula 1 _ Interior de fibra de carbono, con asientos deportivos", 
    historia: "Sucesor del Enzo, es el primer híbrido de Ferrari _ Edición limitada de 499 unidades" 
  },
  "Monza SP1 SP2": { 
    motor: "V12 atmosférico de 6.496 cc _ Potencia: 810 CV (596 kW) _ Par máximo: 719 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,9 segundos _ Velocidad máxima: más de 300 km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera", 
    diseño: "Diseño inspirado en los barchettas de los años 50 _ SP1: monoplaza; SP2: biplaza _ Sin parabrisas, para una experiencia de conducción al aire libre", 
    historia: "Parte de la serie Icona de Ferrari, que rinde homenaje a modelos clásicos _ Edición limitada de 499 unidades combinadas" 
   },
  "F50": { 
    motor: "V12 atmosférico de 4.698 cc _ Potencia: 520 CV (382 kW) _ Par máximo: 470 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 3,8 segundos _ Velocidad máxima: 328 km/h", 
    transmision: "Caja de cambios manual de 6 velocidades _ Tracción trasera", 
    diseño: "Diseño inspirado en la Fórmula 1, con techo targa desmontable _ Interior de fibra de carbono, con asientos deportivos _ Suspensión de Fórmula 1", 
    historia: "Construido para celebrar el 50 aniversario de Ferrari _ Su motor V12 atmosférico es muy apreciado por su sonido y respuesta"   
   },
  "812 Superfast": { 
    motor: "V12 atmosférico de 6.496 cc _ Potencia: 800 CV (588 kW) _ Par máximo: 718 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,9 segundos _ Velocidad máxima: 340 km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera", 
    diseño: "Diseño de gran turismo, con líneas elegantes y agresivas _ Interior lujoso y confortable, con pantalla táctil central _ Sistema de control Side Slip Control 5.1", 
    historia: "Sucesor del F12berlinetta, es uno de los Ferrari de producción más potentes _ Su motor V" 
  },
  "296 GTV": { 
    motor: "V6 biturbo de 2.992 cc + motor eléctrico _ Potencia combinada: 830 CV _ Par máximo: 740 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,9 segundos _ Velocidad máxima: más de 330 km/h _ Autonomía eléctrica: 25 km", 
    transmision: "Caja de cambios de doble embrague de 8 velocidades _ Tracción trasera", 
    diseño: "Diseño moderno y aerodinámico, con elementos inspirados en modelos clásicos _ Interior de alta tecnología, con pantalla táctil central y cuadro de instrumentos digital _ Sistema hibrido enchufable", 
    historia: "Presentado en 2021, marca el regreso del motor V6 a Ferrari _ Su nombre rinde homenaje al motor de 2.9 litros y 6 cilindros"  
  },
  "Testarossa": { 
    motor: "12 cilindros opuestos de 4.943 cc _ Potencia: 390 CV _ Par máximo: 490 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 5,3 segundos _ Velocidad máxima: 290 km/h", 
    transmision: "Caja de cambios manual de 5 velocidades _ Tracción trasera", 
    diseño: "Diseño icónico de los años 80, con sus distintivas branquias laterales _ Interior lujoso y confortable para su época _ Motor de 12 cilindros opuestos", 
    historia: "Sucesor del Berlinetta Boxer, se convirtió en un símbolo de los años 80 _ Su diseño y rendimiento lo hicieron muy popular en la cultura pop" 
  },
  "Aventador": { 
    motor: "V12 atmosférico de 6.498 cc _ Potencia: Hasta 770 CV (versión Ultimae) _ Par máximo: 720 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,8 segundos _ Velocidad máxima: 355 km/h", 
    transmision: "Caja de cambios ISR de 7 velocidades _ Tracción total", 
    diseño: "Diseño angular y agresivo, con puertas de tijera _ Chasis de fibra de carbono _ Suspensión de varilla de empuje", 
    historia: "Sucesor del Murciélago, fue un referente en su segmento _ Su motor V12 atmosférico es muy apreciado por su sonido y potencia"   
  },
  "Huracan": { 
    motor: "V10 atmosférico de 5.204 cc _ Potencia: Hasta 640 CV (versión Performante) _ Par máximo: 600 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,9 segundos _ Velocidad máxima: 325 km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera o total", 
    diseño: "Diseño compacto y aerodinámico _ Chasis híbrido de aluminio y fibra de carbono _ Sistema de control dinámico Lamborghini Dinamica Veicolo Integrata (LDVI)", 
    historia: "Sucesor del Gallardo, es un deportivo de alto rendimiento _ Su motor V10 atmosférico es muy apreciado por su respuesta y sonido" 
  },
  "Urus": { 
    motor: "V8 biturbo de 3.996 cc _ Potencia: 650 CV _ Par máximo: 850 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 3,6 segundos _ Velocidad máxima: 305 km/h", 
    transmision: "Caja de cambios automática de 8 velocidades _ Tracción total", 
    diseño: "Diseño de SUV deportivo, con líneas agresivas _ Interior lujoso y tecnológico _ Sistema de control dinámico ANIMA con modos de conducción específicos.", 
    historia: "Es el primer SUV de Lamborghini desde el LM002 _ Combina el rendimiento de un superdeportivo con la versatilidad de un SUV"  
  },
  "Countach": { 
    motor: "V12 atmosférico de 3.929 cc _ Potencia: Hasta 455 CV (versión 5000 QV) _ Par máximo: 500 Nm", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 5 segundos _ Velocidad máxima: alrededor de 290 km/h", 
    transmision: "Caja de cambios manual de 5 velocidades _ Tracción trasera", 
    diseño: "Diseño revolucionario de Marcello Gandini, con líneas angulares y puertas de tijera _ Chasis tubular de acero _ Motor V12 en posición central trasera", 
    historia: "Un icono de los años 70 y 80, conocido por su diseño radical _ Contribuyó a definir la imagen de Lamborghini como fabricante de superdeportivos" 
  },
  "Diablo": { 
    motor:"V12 atmosférico de 5.707 cc _ Potencia: Hasta 595 CV (versión GT) _ Par máximo: 630 Nm",
    rendimiento: "Aceleración 0-100 km/h: alrededor de 4 segundos _ Velocidad máxima: alrededor de 340 km/h", 
    transmision: "Caja de cambios manual de 5 velocidades _ Tracción trasera", 
    diseño: "Diseño agresivo y aerodinámico _ Chasis tubular de acero _ Motor V12 en posición central trasera", 
    historia: "Sucesor del Countach, fue un superdeportivo de referencia en los años 90 _ Su motor V12 y su rendimiento lo hicieron muy popular"   
  },
  "Murcielago": { 
    motor: "V2 atmosférico de 6.192 cc _ Potencia: Hasta 670 CV (versión SV) _ Par máximo: 660 Nm.", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 3,2 segundos _ Velocidad máxima: alrededor de 342 km/h", 
    transmision: "Caja de cambios manual de 6 velocidades o automática E-gear _ Tracción total.", 
    diseño: "Diseño elegante y aerodinámico _ Chasis de fibra de carbono y aluminio _ Motor V12 en posición central trasera", 
    historia: "Sucesor del Diablo, fue el primer Lamborghini de la era Audi _ Su motor V12 y su rendimiento lo hicieron muy apreciado" 
  },
  "Gallardo": { 
    motor: "V10 atmosférico de 4.961 cc _ Potencia: Hasta 570 CV (versión Superleggera) _ Par máximo: 540 Nm", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 3,4 segundos _ Velocidad máxima: alrededor de 325 km/h", 
    transmision: "Caja de cambios manual de 6 velocidades o automática E-gear _ Tracción total", 
    diseño: "Diseño compacto y deportivo _ Chasis de aluminio _ Motor V10 en posición central trasera", 
    historia: "Fue el modelo más vendido de Lamborghini hasta la llegada del Urus _ Su motor V10 y su agilidad lo hicieron muy popular"  
  },
  "Sian FKP 37": { 
    motor: "V12 atmosférico de 6.498 cc + sistema híbrido ligero _ Potencia combinada: 819 CV _ Par máximo: 720 Nm", 
    rendimiento: "Aceleración 0-100 km/h: menos de 2,8 segundos _ Velocidad máxima: más de 350 km/h", 
    transmision: "Caja de cambios ISR de 7 velocidades _ Tracción total", 
    diseño: "Diseño futurista y aerodinámico _ Supercondensador para el sistema híbrido _ Tecnología de materiales ligeros", 
    historia: "Primer híbrido de Lamborghini, con tecnología innovadora _ Edición limitada de 63 coupés y 19 roadsters", 
  },
  "Revuelto": { 
    motor: "V12 híbrido enchufable _ Potencia combinada: 1015 CV _ Par máximo: Datos específicos varían, pero el sistema híbrido aporta un par instantáneo significativo", 
    rendimiento: "Aceleración 0-100 km/h: 2,5 segundos _ Velocidad máxima: Más de 350 km/h", 
    transmision: "Nueva transmisión de doble embrague de 8 velocidades _ Tracción total", 
    diseño: "Diseño futurista, manteniendo la esencia de Lamborghini _ Tecnología híbrida avanzada, con tres motores eléctricos _ Innovador diseño de la batería", 
    historia: "Sucesor del Aventador, marcando una nueva era híbrida para Lamborghini _ Representa el futuro de los superdeportivos de la marca"  
  },
  "LM 002": { 
    motor: "V12 del Lamborghini Countach _ Potencia: Aproximadamente 450 CV _ Par máximo: Alrededor de 500 Nm", 
    rendimiento: "Aceleración 0-100 km/h: Aproximadamente 7,8 segundos _ Velocidad máxima: Alrededor de 210 km/h", 
    transmision: "Caja de cambios manual de 5 velocidades _ Tracción total", 
    diseño: "Diseño todoterreno robusto y distintivo _ Neumáticos especiales de alta resistencia _ Interior lujoso para su época", 
    historia: "Un todoterreno inusual y legendario de Lamborghini _ Conocido como el (Rambo Lambo) _ Predecesor espiritual del Lamborghini Urus", 
  },
  "Zonda Cinque": { 
    motor: "V12 atmosférico de 7.291 cc, desarrollado por Mercedes-AMG _ Potencia: 678 CV _ Par máximo: 780 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 3,4 segundos _ Velocidad máxima: 350 km/h", 
    transmision: "Caja de cambios secuencial de 6 velocidades _ Tracción trasera", 
    diseño: "Carrocería de fibra de carbono y titanio _ Aerodinámica avanzada, con alerón trasero y difusor _ Suspensión de doble horquilla", 
    historia: "Edición limitada de 5 coupés y 5 roadsters _ Conocido por su rendimiento extremo y diseño radical"  
  },
  "Huayra BC": { 
    motor: "V12 biturbo de 5.980 cc, desarrollado por Mercedes-AMG _ Potencia: 800 CV _ Par máximo: 1.000 Nm", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 3 segundos _ Velocidad máxima: más de 360 km/h", 
    transmision: "Caja de cambios secuencial de 7 velocidades _ Tracción trasera", 
    diseño: "Aerodinámica activa, con alerones y flaps móviles _ Chasis de carbotanio (fibra de carbono y titanio) _ Suspensión de doble horquilla", 
    historia: "Versión de alto rendimiento del Huayra, con mejoras en aerodinámica y peso _ Su nombre rinde homenaje a Benny Caiola, amigo de Horacio Pagani" 
   },
  "Huayra Roadster BC": { 
    motor: "V12 biturbo de 5.980 cc, desarrollado por Mercedes-AMG _ Potencia: 800 CV _ Par máximo: 1.050 Nm", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 3 segundos _ Velocidad máxima: más de 350 km/h", 
    transmision: "Caja de cambios secuencial de 7 velocidades _ Tracción trasera", 
    diseño: "Techo desmontable de fibra de carbono _ Aerodinámica activa, con alerones y flaps móviles _ Chasis de carbotanio", 
    historia: "Versión descapotable del Huayra BC _ Combina el rendimiento extremo con la experiencia de conducción al aire libre"   
   },
  "Zonda R": { 
    motor: "V12 atmosférico de 5.988 cc, desarrollado por Mercedes-AMG _ Potencia: 750 CV _ Par máximo: 710 Nm", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 2,7 segundos _ Velocidad máxima: más de 350 km/h", 
    transmision: "Caja de cambios secuencial de 6 velocidades _ Tracción trasera", 
    diseño: "Diseñado exclusivamente para pista _ Aerodinámica extrema, con alerón trasero y difusor _ Chasis de fibra de carbono y titanio", 
    historia: "Un coche de pista sin restricciones, diseñado para el máximo rendimiento _ Estableció récords de vuelta en varios circuitos" 
  },
  "Huayra Imola": { 
    motor: "V12 biturbo de 5.980 cc, desarrollado por Mercedes-AMG _ Potencia: 827 CV _ Par máximo: 1.100 Nm", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 2,8 segundos _ Velocidad máxima: más de 350 km/h", 
    transmision: "Caja de cambios secuencial de 7 velocidades _ Tracción trasera", 
    diseño: "Aerodinámica extrema, con alerones y difusores _ Chasis de carbotanio _ Suspensión de doble horquilla", 
    historia: "Edición limitada de 5 unidades, diseñada para el máximo rendimiento en pista _ Su nombre rinde homenaje al circuito de Imola."  
  },
  "Zonda Tricolore": { 
    motor: "V12 atmosférico de 7.291 cc, desarrollado por Mercedes-AMG _ Potencia: 670 CV _ Par máximo: 780 Nm", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 3,4 segundos _ Velocidad máxima: más de 350 km/h", 
    transmision: "Caja de cambios secuencial de 6 velocidades _ Tracción trasera", 
    diseño: "Diseño inspirado en los aviones de la Frecce Tricolori _ Carrocería de fibra de carbono y titanio _ Aerodinámica avanzada", 
    historia: "Edición única, construida para celebrar el 50 aniversario de la Frecce Tricolori _ Su diseño y rendimiento lo hacen muy especial" 
  },
  "Huayra Codalunga": { 
    motor: "V12 biturbo de 5.980 cc, desarrollado por Mercedes-AMG _ Potencia: 840 CV _ Par máximo: 1.100 Nm", 
    rendimiento: "Velocidad máxima: Mas de 350 Km/h", 
    transmision: "Caja de cambios secuencial de 7 velocidades _ Tracción trasera", 
    diseño: "Diseño de (cola larga), inspirado en los coches de carreras de los años 60 _ Carrocería de fibra de carbono _ Aerodinámica optimizada", 
    historia: "Edición limitada de 5 unidades _ Su diseño único y su rendimiento lo hacen muy especial"   
  },
  "Utopia": { 
    motor: "V12 biturbo de 5.980 cc, desarrollado por Mercedes-AMG _ Potencia: 864 cv _ Par máximo: 1.100 Nm", 
    rendimiento: "Velocidad máxima: 350 Km/h", 
    transmision: "Caja de cambios manual pura de 7 velocidades, o automatizada de 7 velocidades _ Tracción trasera", 
    diseño: "Diseño elegante y aerodinámico, con elementos inspirados en modelos clásicos _ Carrocería de fibra de carbono _ Interior lujoso y minimalista", 
    historia: "El tercer modelo de Pagani, que sigue la tradición de la marca de combinar arte y tecnología" 
  },
  "Zonda F": { 
    motor: "V12 atmosférico de 7.291 cc, desarrollado por Mercedes-AMG _ Potencia: 602 CV _ Par máximo: 760 Nm", 
    rendimiento: "Velocidad máxima: 345 km/h", 
    transmision: "Caja de cambios secuencial de 6 velocidades _ Tracción trasera.", 
    diseño: "Carrocería de fibra de carbono _ Aerodinámica optimizada _ Interior lujoso y artesanal", 
    historia: "Una evolución del Zonda original, con mejoras en rendimiento y diseño _ Su nombre rinde homenaje a Juan Manuel Fangio"  
  },
  "Zonda Revolucion": { 
    motor: "V12 atmosférico de 5.987 cc, desarrollado por Mercedes-AMG _ Potencia: 800 CV _ Par máximo: 730 Nm.", 
    rendimiento: "Aceleración 0-100 Km/h: 2.6 segundos", 
    transmision: "Caja de cambios secuencial de 6 velocidades _ Tracción trasera", 
    diseño: "Diseñado exclusivamente para pista _ Aerodinámica extrema, con alerón trasero y difusor _ Chasis de fibra de carbono y titanio _ Sistema DRS (Drag Reduction System) como los coches de formula 1", 
    historia: "La versión definitiva del Zonda, con el máximo rendimiento en pista _ Fue el ultimo modelo de la saga zonda" 
  },
  "J 168": { 
    motor: "V8 biturbo de 4.0L o V10 atmosférico de 5.2L _ Potencia combinada: 800 - 1,000 HP _ Par maximo 800", 
    rendimiento: "Velocidad máxima: 395 km/h _ Aceleración 0-100 km/h: 2.8 segundos", 
    transmision: "Transmisión: Automática de 7 velocidades (doble embrague) _ Tracción: RWD (opcional AWD en versiones de alto rendimiento) _ Tracción total", 
    diseño: "Diseño inspirado en e cuerpo de una mujer y la naturaleza _ Altamente Aerodinámico _ Pantalla digital de 15 pulgadas _ Altavoces envolventes y acuticos _ Seleccion de modo de conducción _ Carrocería: Fibra de carbono en su totalidad", 
    historia: "Presentado en el ao 2021, donde nace la idea de crear un deportivos para demostrar el arte y la belleza de una mujer reflejada es una maquina _ Su nombre fue elegido en memoria de agradecimiento a la madre del fundador"   
  },
  "Magnu": { 
    motor: "V12 atmosférico de 6.5L o V8 biturbo de 4.0L _ Potencia: 850 HP _ Par maximo: 800 Nm", 
    rendimiento: "Velocidad máxima: 330 Km/h _ Aceleración 0-100: 3.1 s", 
    transmision: "Caja de transmision manual de 8 velocidades _ Tracción: RWD", 
    diseño: "Su diseño esta inspirado en los autos deportivos de los 60 y 70 _ Tecnología moderna _ Interior de lujo personalizado a la elección del cliente", 
    historia: "Este modelo representa la lujosidad y la deportividad de la marca Janderk _ Siendo el primer modelo diseñado exclusivamente para la calle con un toque deortivo _ Siendo un auto familiar para irse de un paseo lujoso por a carretera o ir a una cena de lujo" 
  },
  "F200": { 
    motor: "V6 híbrido turboalimentado de 1.6 lt derivado de la F1 _ Genera altas revoluciones de 15 000 rpm _ Motor electrico _ Potencia: 1,100 HP combinados (motor térmico + eléctrico)", 
    rendimiento: "Velocidad máxima: 370km/h _ Aceleración 0-100: 2.5 segundos", 
    transmision: "Transmisión secuencial semiautomática de 7 u 8 velocidades _ Doble embrague _ Tracción: RWD con sistema híbrido de asistencia eléctrica", 
    diseño: "Forma de una bala lo que reduce el menor contacto con el aire _ Altamente Aerodinámico _ Tecnología de vanguardia", 
    historia: "Este super deportivo nace con la idea de su crear por el gusto de la Formula 1 _ Diseñado para sentir la potencia de la Fórmula 1 en las calles o ya sea de un viaje largo por la carretera"  
  },
  "Long Evolution": { 
    motor: "V12 de 7.0L atmosférico _ Potencia: 1,200 HP", 
    rendimiento: "Velocidad máxima: 400+ km/h _ Aceleración 0-100 km/h: 2.2 segundos", 
    transmision: "Caja secuencial de 6 velocidades _ Tracción: RWD", 
    diseño: "Aerodinámica: Inspirada en la resistencia y la F1, con efecto suelo extremo _ Chasis: Full fibra de carbono con refuerzos en kevlar _ Uso: Exclusivo para pista (no homologado para calle)", 
    historia: "Este auto ésta diseñado exclusivamente para las altas velocidades en pista _ siendo parte de la división de carreras Scuadra Panther de Janderk _ Edición limitada a solo 30 autos en producción"    
  },
  "Proto Hypercar": { 
    motor: "V10 híbrido de 6.0L con doble turbo _ asistencia eléctrica avanzada _ Potencia: 1,800 HP combinados", 
    rendimiento: "Velocidad máxima: 480 km/h (objetivo de récord mundial) _ Aceleración 0-100 km/h: 1.8 segundos _ Sistema de recuperación de energía (ERS) inspirado en la F1, con baterías de ultra alta densidad para máxima entrega de potencia en rectas", 
    transmision: "Secuencial de 8 velocidades con diferencial activo _ modo de aceleración extrema", 
    diseño: "Chasis monocasco de fibra de carbono ultraligero con aerodinámica optimizada para minimizar resistencia al aire _ inspirado en los autos de alta velocidad y pruebas de velocidad en desiertos", 
    historia: "Diseñado por JANDERK Automobili con la misión de superar todos los récords de velocidad terrestre _  integrando las últimas innovaciones en aerodinámica activa y propulsión híbrida para alcanzar una velocidad sin precedentes _ Producción: Prototipo único con pruebas en desarrollo; posibilidad de una edición ultra limitada para clientes selectos"   
  },
  "J 168 R": { 
    motor: "V8 biturbo de 4.2L ajustado para competición _ Potencia: 950 HP con gestión electrónica optimizada para circuitos", 
    rendimiento: "Aceleración 0-100 km/h: 2.3 segundos _ Velocidad máxima: 380 km/h", 
    transmision: "Secuencial de 6 velocidades con diferencial autoblocante y embrague reforzado", 
    diseño: "Tomas de aire ampliadas, ventilación optimizada y mejoras en la suspensión para mayor agarre en curvas", 
    historia: "Creado para entrar en competiciones de GT y resistencia, basado en la filosofía del J168 pero llevado al extremo para ser una máquina de circuito sin concesiones" 
  },
  "Jesko": { 
    motor: "V8 biturbo de 5.0 litros _ Potencia: Hasta 1.600 CV (con E85) _ Par máximo: 1.500 Nm", 
    rendimiento: "Diseñado para alcanzar velocidades superiores a 480 km/h _ Aceleración extremadamente rápida", 
    transmision: "Caja de cambios Light Speed Transmission (LST) de 9 velocidades _ Tracción trasera", 
    diseño: "Aerodinámica activa avanzada _ Construcción ligera con fibra de carbono _ Tecnología de suspensión innovadora", 
    historia: "Nombrado en honor al padre de Christian von Koenigsegg _ Disponible en versiones Jesko Absolut (alta velocidad) y Jesko Attack (pista)"  
  },
  "Agera RS": { 
    motor: "V8 biturbo de 5.0 litros _ Potencia: 1.176 CV _ Par máximo: 1.280 Nm", 
    rendimiento: "Velocidad máxima: Récord mundial de velocidad para coches de producción _ Aceleración 0-400-0 km/h: Récord mundial", 
    transmision: "Caja de cambios de 7 velocidades con embrague único _ Tracción trasera", 
    diseño: "Aerodinámica activa _ Construcción ligera con fibra de carbono _ Tecnología de suspensión avanzada", 
    historia: "Sucesor del Agera R, con mejoras en rendimiento y aerodinámica _ Estableció varios récords mundiales de velocidad"
  },
  "CC8S": { 
    motor: "V8 sobrealimentado de 4.7 litros _ Potencia: 655 CV _ Par máximo: 750 Nm", 
    rendimiento: "Velocidad máxima: 390 km/h", 
    transmision: "Caja de cambios manual de 6 velocidades _ Tracción trasera", 
    diseño: "Diseño innovador para su época _ Construcción ligera", 
    historia: "El primer coche de producción de Koenigsegg _ Estableció a Koenigsegg como un fabricante de hiperdeportivos"   
  },
  "One: 1": { 
    motor: "V8 biturbo de 5.0 litros _ Potencia: 1.360 CV _ Par máximo: 1.371 Nm", 
    rendimiento: "Relación potencia-peso de 1:1 (1.360 kg) _ Aceleración extrema.", 
    transmision: "Caja de cambios de 7 velocidades con embrague único _ Tracción trasera", 
    diseño: "Aerodinámica activa _ Construcción ligera con fibra de carbono _ Tecnología de suspensión avanzada", 
    historia: "Un hito en la ingeniería de hiperdeportivos _ Demostró el potencial de Koenigsegg en el mercado de alto rendimiento" 
  },
  "Gemera": { 
    motor: "Tiny Friendly Giant (TFG) de 3 cilindros biturbo de 2.0 litros + 3 motores eléctricos _ Potencia combinada: 1.700 CV _ Par máximo: 3.500 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 1,9 segundos _ Velocidad máxima: 400 km/h", 
    transmision: "Transmisión Direct Drive _ Tracción total", 
    diseño: "Mega-GT de cuatro plazas _ Tecnología híbrida avanzada _ Diseño innovador de puertas", 
    historia: "El primer modelo de cuatro plazas de Koenigsegg _ Combina el rendimiento de un hiperdeportivo con la practicidad de un coche familiar"  
  },
  "Regera": { 
    motor: "V8 biturbo de 5.0 litros + 3 motores eléctricos _ Potencia combinada 1.500 CV _ Par máximo 2.000 Nm", 
    rendimiento: "Aceleración 0-400 km/h: Récord mundial _ Sistema Koenigsegg Direct Drive (KDD)", 
    transmision: "Sistema Direct Drive (sin caja de cambios convencional) _ Tracción trasera", 
    diseño: "Diseño lujoso y aerodinámico _ Tecnología híbrida avanzada _ Interior de alta gama", 
    historia: "Un hiperdeportivo híbrido de lujo _ Destaca por su sistema de transmisión innovador"    
  },
  "CCX": { 
    motor: "V8 biturbo de 4.7 litros _ Potencia: 806 CV _ Par máximo: 920 Nm", 
    rendimiento: "Velocidad máxima: 395 km/h", 
    transmision: "Caja de cambios manual de 6 velocidades _ Tracción trasera", 
    diseño: "Diseño aerodinámico _ Construcción ligera con fibra de carbono", 
    historia: "El primer Koenigsegg homologado para su venta en Estados Unidos _ Un hito importante en la historia de la marca"   
  },
  "CCR": { 
    motor: "V8 sobrealimentado de 4.7 litros _ Potencia: 806 CV _ Par máximo: 920 Nm", 
    rendimiento: "Velocidad máxima: 388 km/h", 
    transmision: "Caja de cambios manual de 6 velocidades _ Tracción trasera", 
    diseño: "Diseño aerodinámico _ Construcción ligera con fibra de carbono", 
    historia: "En su tiempo fue el coche de producción mas rápido del mundo" 
  },
  "CCGT": { 
    motor: "V8 de 5.0 Litros _ Potencia: 600 CV", 
    rendimiento: "Velocidad máxima es de 395 km/h", 
    transmision: "Caja de cambios secuencial de 6 velocidades _ Tracción trasera", 
    diseño: "Diseñado para competir en la clase GT1 _ Construcción Ligera", 
    historia: "El modelo no pudo competir ya que el reglamento cambio"  
  },
  "Trevita": { 
    motor: "V8 biturbo de 4.8 litros _ Potencia: 1.018 CV _ Par máximo: 1.080 Nm", 
    rendimiento: "Velocidad máxima: 410 Km/h.", 
    transmision: "Caja de cambios secuencial de 6 velocidades _ Tracción trasera", 
    diseño: "El unico coche de producción con fibra de carbono blanca _ Construcción Ligera", 
    historia: "Solo 3 unidades fueron fabricadas"
  },
  "Veyron": { 
    motor: "W16 quad-turbo de 8.0 litros _ Potencia: Hasta 1.200 CV (versión Super Sport) _ Par máximo: 1.500 Nm",
    rendimiento: "Velocidad máxima: Hasta 431 km/h (versión Super Sport) _ Aceleración 0-100 km/h: Alrededor de 2,5 segundos", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción total", 
    diseño: "Diseño aerodinámico avanzado _ Construcción de alta tecnología con materiales ligeros _ Interior lujoso y sofisticado", 
    historia: ""   
  },
  "Chiron": {
    motor: "W16 quad-turbo de 8.0 litros _ Potencia: Hasta 1.600 CV (versión Super Sport 300+) _ Par máximo: 1.600 Nm",
    rendimiento: "Velocidad máxima: Limitada electrónicamente a 420 km/h, pero capaz de más (versión Super Sport 300+ alcanzó 490 km/h) _ Aceleración 0-100 km/h: Alrededor de 2,4 segundos",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción total",
    diseño: "Evolución del diseño del Veyron, con mejoras aerodinámicas _ Tecnología de vanguardia y materiales de alta calidad _ Interior lujoso y personalizado",
    historia: "Sucesor del Veyron, elevando el listón del rendimiento y el lujo _ Tiene varias ediciones especiales"
  },
  "Divo": {
    motor: "W16 quad-turbo de 8.0 litros _ Potencia: 1.500 CV _ Par máximo: 1.600 Nm",
    rendimiento: "Velocidad máxima: 380 km/h (limitada electrónicamente)",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción total",
    diseño: "Diseño enfocado en la aerodinámica y el rendimiento en curvas _ Construcción ligera y ágil _ Interior exclusivo y personalizado",
    historia: "Edición limitada del Chiron, con un enfoque en el manejo en pista _ Su nombre rinde homenaje al piloto de carreras Albert Divo"
  },
  "Centodieci": {
    motor: "W16 quad-turbo de 8.0 litros _ Potencia: 1.600 CV _ Par máximo: 1.600 Nm",
    rendimiento: "Velocidad máxima: 380 km/h (limitada electrónicamente)",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción total",
    diseño: "Diseño inspirado en el Bugatti EB110 _ Construcción ligera y aerodinámica _ Interior lujoso y tecnológico",
    historia: "Edición limitada del Chiron, celebrando el 110 aniversario de Bugatti"
  },
  "La Voiture Noire": {
    motor: "W16 quad-turbo de 8.0 litros _ Potencia: 1.500 CV _ Par máximo: 1.600 Nm",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción total",
    diseño: "Diseño único y elegante, inspirado en el Bugatti Type 57 SC Atlantic _ Construcción artesanal y materiales de alta calidad _ Interior lujoso y personalizado",
    historia: "Un coche único, creado como homenaje al Type 57 SC Atlantic _ Uno de los coches nuevos más caros jamás vendidos"
  },
  "EB110": {
    motor: "V12 quad-turbo de 3.5 litros _ Potencia: Hasta 611 CV (versión Super Sport) _ Par máximo: 650 Nm",
    rendimiento: "Velocidad máxima: 351 km/h (versión Super Sport) _ Aceleración 0-100 km/h: Alrededor de 3,3 segundos",
    transmision: "Caja de cambios manual de 6 velocidades _ Tracción total",
    diseño: "Diseño innovador y aerodinámico _ Construcción de fibra de carbono _ Tecnología avanzada para su época",
    historia: "Revivió la marca Bugatti en los años 90 _ Un hito en la historia de los superdeportivos"
  },
  "Bolide": {
    motor: "W16 quad-turbo de 8.0 litros _ Potencia: 1.850 CV _ Par máximo: 1.850 Nm",
    rendimiento: "Diseñado para el máximo rendimiento en pista",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción total",
    diseño: "Diseño radical y aerodinámico _ Construcción ligera con materiales de alta tecnología _ Tecnología de suspensión y frenos de competición",
    historia: "Un coche de pista experimental, que muestra el potencial del motor W16"
  },
  "Mistral":{
    motor: "W16 quad-turbo de 8.0 litros _ Potencia: 1.600 cv _ Par máximo: 1.600 Nm",
    rendimiento: "Velocidad máxima: 453,91 km/h",  
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción total",
    diseño: "Descapotable _ Diseño elegante y aerodinámico _ Interior lujoso y tecnológico",
    historia: "El último modelo de Bugatti con el motor W16",
  },
  "Type 57 Atlantic":{
    motor: "8 cilindros en línea _ Potencia: 210 CV",
   transmision: "Caja de cambios manual de 4 velocidades _ Tracción trasera",
    diseño: "Diseño aerodinámico y elegante _ Construcción artesanal con materiales de alta calidad",
    historia: "Uno de los coches más bellos y valiosos del mundo _ Un icono del diseño Art Deco",
  },
  "Veyron Super Sport":{
    motor: "W16 quad-turbo de 8.0 litros _ Potencia: 1.200 CV _ Par máximo: 1.500 Nm",
    rendimiento: "Velocidad máxima: 431 km/h _ Aceleración 0-100 km/h: 2,5 segundos",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción total",
    diseño: "Aerodinámica mejorada para alta velocidad _ Construcción ligera",
    historia: "Versión de alto rendimiento del Veyron _ Ostentó el récord de velocidad para coches de producción",
  },
  "P1":{
    motor:"V8 biturbo de 3.8 litros + motor eléctrico _ Potencia combinada: 916 CV _ Par máximo: 900 Nm",
    rendimiento: "Aceleración 0-100 km/h: 2,8 segundos _ Velocidad máxima: 350 km/h (limitada electrónicamente)",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera",
    diseño: "Hiperdeportivo híbrido con aerodinámica activa _ Construcción ligera con fibra de carbono _ Tecnología derivada de la Fórmula 1",
    historia: "Sucesor del McLaren F1, un hito en la historia de los hiperdeportivos _ Edición limitada de 375 unidades",
  },
  "720s":{
    motor: "V8 biturbo de 4.0 litros _ Potencia: 720 CV _ Par máximo: 770 Nm",
    rendimiento: "Aceleración 0-100 km/h: 2,9 segundos _ Velocidad máxima: 341 km/h",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera",
    diseño: "Diseño aerodinámico y elegante _ Chasis de fibra de carbono Monocage II _ Suspensión Proactive Chassis Control",
    historia: "Sucesor del 650S, un referente en su segmento",
  },
  "F1":{
    motor: "V12 atmosférico de 6.1 litros, desarrollado por BMW M _ Potencia: 627 CV _ Par máximo: 651 Nm",
    rendimiento: "Velocidad máxima: 391 km/h (récord mundial para coches de producción en su época)",
    transmision: "Caja de cambios manual de 6 velocidades _ Tracción trasera",
    diseño: "Diseño innovador con tres plazas _ Construcción de fibra de carbono _ Motor V12 atmosférico de alto rendimiento",
    historia: "Un icono de los años 90, considerado uno de los mejores superdeportivos de la historia",
  },
  "Senna":{
    motor: "V8 biturbo de 4.0 litros _ Potencia: 800 CV _ Par máximo: 800 Nm",
    rendimiento: "Diseñado para el máximo rendimiento en pista",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera",
    diseño: "Aerodinámica extrema, con alerón trasero y difusor _ Construcción ligera con fibra de carbono _ Suspensión RaceActive Control II",
    historia: "Homenaje al legendario piloto de Fórmula 1 Ayrton Senna _ Edición limitada de 500 unidades",
    },
    "Artura":{
    motor: "V6 biturbo hibrido enchufable de 3.0 litros _ Potencia combinada: 680 cv _ Par máximo: 720 Nm",
    rendimiento: "Aceleración de 0 a 100 km/h: 3 segundos _ Velocidad máxima: 330 km/h",
    transmision: "Caja de cambios de doble embrague de 8 velocidades _ Tracción trasera",
    diseño: "Hibrido enchufable _ Nuevo chasis de fibra de carbono McLaren Carbon Lightweight Architecture (MCLA)",
    historia: "Marca el comienzo de la era hibrida para Mclaren",
  },
  "675LT":{
    motor: "V8 biturbo de 3.8 litros _ Potencia: 675 CV _ Par máximo: 700 Nm",
    rendimiento: "Aceleración 0-100 km/h: 2,9 segundos",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera",
    diseño: "Versión Longtail del 650S, con mejoras en aerodinámica y peso _ Construcción ligera con fibra de carbono",
    historia: "Edición limitada, muy apreciada por su rendimiento en pista",
  },
  "570s":{
    motor: "V8 biturbo de 3.8 litros _ Potencia: 570 CV _ Par máximo: 600 Nm",
    rendimiento: "Aceleración 0-100 km/h: 3,2 segundos",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera",
    diseño: "Deportivo de la serie Sports de McLaren _ Chasis de fibra de carbono",
    historia: "Un deportivo de alto rendimiento, más accesible que los modelos de la serie Super",
  },
  "Elva":{
    motor: "V8 biturbo de 4.0 litros _ Potencia: 815 cv _ Par máximo: 800 Nm",
    rendimiento: "Aceleración 0-100 km/h: menos de 3 segundos",
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera",
    diseño: "Roadster sin parabrisas _ Sistema de gestión de aire activo (AAMS)",
    historia: "Edición limitada, inspirada en los coches de carreras McLaren-Elva de los años 60",
  },
  "Solus GT":{
    motor: "V10 atmosférico de 5.2 litros _ Potencia: 840 cv _ Par máximo: 650 Nm",
    rendimiento: "Diseñado para el máximo rendimiento en pista",
    transmision: "Caja de cambios secuencial de 7 velocidades _ Tracción trasera",
    diseño: "Diseño inspirado en prototipos de competición _ Aerodinámica extrema _ Construcción ligera con materiales de alta tecnología",
    historia: "Coche de pista monoplaza, derivado del coche conceptual Vision Gran Turismo",
  },
    "Gt": { 
    motor: "V8 biturbo de 4.0 litros _ Potencia: 620 cv _ Parmáximo: 630 Nm", 
    rendimiento: "Velocidad máxima: 326 Km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera", 
    diseño: "Gran turismo _ Diseño elegante y confortable _ Interior lujoso y tecnológico", 
    historia: "Un gran turismo de alto rendimiento, diseñado para viajes largos" 
  },    
  "DB11": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Vantage": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "DBS Superleggera": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "DB5": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Valhalla": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Rapide": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "DBX": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Virage": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "One-77": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Valkyrie": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Range Rover": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Range Rover Sport": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Defender": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Discovery": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Velar": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Evoque": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Discovery Sport": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Freelander": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Range Rover Classic": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Range Rover SVAutobiography": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "F-Type": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "XJ": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "E-Type": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "I-Pace": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "F-Pace": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "XE": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "XF": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "XK": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "XKR": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Mark 2": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "T.50": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "T.33": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "T.33 Spider": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Clase S": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "SLS AMG": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "AMG GT": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "G-Class": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "300SL Gullwing": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "SLR Mclaren": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "CL": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Project One": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "190E 2.5-16 Evolution 2": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "AMG GT Black Serie": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "911": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "918 Spider": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Carrera GT": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Taycan": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Cayenne": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Macan": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Cayman": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "718 Cayman/Boxster": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "959": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Panamera": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "928": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "R8": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "RS 6": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "RS 7": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "A8": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "TT RS": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "S8": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "RS 3": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Quattro": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "E-Tron GT": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "RS Q8": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "M3": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "M5": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Serie 7": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "I8": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Z8": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "M1": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "X5 M": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "8 Series": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "3.0 CSL": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "IX": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "205 GTI": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "405 MI16": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "RCZ R": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "208 GTI": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "308 GTI": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "504 Coupe": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "406 Coupe": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "206 RC": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "306 GTI-6": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Peugeot Onyx": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Escalade": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "CT5-V Blackwing": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "CTS-V": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Eldorado": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Seville": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Deville": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "CT6": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Lyriq": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "V-16": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "XLR": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Mustang": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "GT": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "GT40": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Focus RS": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Shelby Cobra": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "F-150 Raptor": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "RS200": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Sierra Cosworth RS500": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Thunderbird": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Model T": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Corvette": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Camaro": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Impala": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Silverado": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Bel Air": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Chevelle SS": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Suburban": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Tahoe": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Colorado ZR2": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Nomad": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Challenger": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Charger": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Viper": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Ram 1500 TRX": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Dart": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Coronet": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Super Bee": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Demon": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Daytona": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Power Wagon": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Phantom": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Cullinan": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Ghost": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Wraith": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Dawn": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Silver Shadow": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Silver Ghost": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Corniche": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Park": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Ward": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Sweptail": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Continental GT": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Flying Spur": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Bentayga": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Mulsanne": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Arnage": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Brooklands": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Azure": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Turbo R": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Speed Six": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Batur": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Tuatara": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Ultimate Aero TT": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Venom GT": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Venom F5": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Nevera": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Gran Turismo": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Quattroporte": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Ghibli": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "MC20": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Levante": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "3500 GT": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Bora": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Khamsin": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Indy": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Mistral": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "57/62": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "S-CLASS": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "GLS": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Elise": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Exige": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Evora": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Espirit": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Elan": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Eletre": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Emira": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Carlton": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Seven": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""
  },
  "Europa": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Giulia Quadrifoglio": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "Stelvio Quadrifoglio": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "8C Competizione": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  },
  "Giulietta": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Spider": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "GTV6": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "Montreal": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "159": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""   
  },
  "Brera": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: "" 
  },
  "4C": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""  
  },
  "A 110": { 
    motor: "", 
    rendimiento: "", 
    transmision: "", 
    diseño: "", 
    historia: ""    
  }
};

function cargarModelos() {
const marcaSeleccionada = document.getElementById("marca").value;
const modeloSelect = document.getElementById("modelo");
modeloSelect.innerHTML = '<option value="">Seleccione el modelo</option>';

if (marcaSeleccionada && modelos[marcaSeleccionada]) {  
    modelos[marcaSeleccionada].forEach(modelo => {  
        const opcion = document.createElement("option");  
        opcion.value = modelo;  
        opcion.textContent = modelo;  
        modeloSelect.appendChild(opcion);  
    });  
}

}
function mostrarInformacion() {
    const modeloSeleccionado = document.getElementById("modelo").value;
    const infoBox = document.getElementById("info");

    if (modeloSeleccionado && especificaciones[modeloSeleccionado]) {
        const specs = especificaciones[modeloSeleccionado];
        let infoHTML = '';

        // Estructura para Motor
        if (specs.motor) {
            infoHTML += `
                <p><strong>Motor:</strong></p>
                <ul>
                    ${specs.motor.split('_').map(item => `<li>• ${item.trim()}</li>`).join('')}
                </ul>
            `;
        }

        // Estructura para Rendimiento
        if (specs.rendimiento) {
            infoHTML += `
                <p><strong>Rendimiento:</strong></p>
                <ul>
                    ${specs.rendimiento.split('_').map(item => `<li>• ${item.trim()}</li>`).join('')}
                </ul>
            `;
        }

        // Estructura para Transmisión
        if (specs.transmision) {
            infoHTML += `
                <p><strong>Transmisión:</strong></p>
                <ul>
                    ${specs.transmision.split('_').map(item => `<li>• ${item.trim()}</li>`).join('')}
                </ul>
            `;
        }

        // Estructura para Diseño y tecnología
        if (specs.diseño) {
            infoHTML += `
                <p><strong>Diseño y tecnología:</strong></p>
                <ul>
                    ${specs.diseño.split('_').map(item => `<li>• ${item.trim()}</li>`).join('')}
                </ul>
            `;
        }

        // Estructura para Historia
        if (specs.historia) {
            infoHTML += `
                <p><strong>Historia:</strong></p>
                <ul>
                    ${specs.historia.split('_').map(item => `<li>• ${item.trim()}</li>`).join('')}
                </ul>
            `;
        }

        infoBox.innerHTML = infoHTML;
    } else {
        infoBox.innerHTML = "<p>Seleccione un modelo para ver sus especificaciones.</p>";
    }
}

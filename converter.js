const tasaDolar = 4209.61;
const pesos = 358651.23;

let cambio = pesos / tasaDolar;

cambio = cambio.toFixed(2);

alert(`COP${pesos} equivalen a USD${cambio}`);

'use client';

import { FormEvent, useState } from "react"

export function CalcularIMC() {
  const [imc, setIMC] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  function calcularIMC(e: FormEvent) {
    e.preventDefault();

    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);

    setIMC(total);
  }

  return (
    <div>
      <h3>O seu IMC é: {imc}</h3>
      <form>
        <label htmlFor="altura">Altura (em cm)</label>
        <input 
          type="text" 
          name="altura" 
          id="altura" 
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <label htmlFor="peso">Peso (em kg)</label>
        <input 
          type="text" 
          name="peso" 
          id="peso" 
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <button onClick={calcularIMC}>Calcular</button>
      </form>
    </div>
  )
}
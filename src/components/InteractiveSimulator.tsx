import React, { useState } from 'react';
import { Calculator, ArrowRight, Info, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function InteractiveSimulator({ onCtaClick }: { onCtaClick: () => void }) {
  const [calculationType, setCalculationType] = useState<'insalubridade_20' | 'insalubridade_40' | 'periculosidade_30'>('insalubridade_20');
  const [months, setMonths] = useState<number>(24);
  const [baseSalary, setBaseSalary] = useState<number>(2200);

  const salarioMinimo = 1412; // Base de cálculo da insalubridade

  let monthlyAmount = 0;
  let typeLabel = '';
  let basisDescription = '';

  if (calculationType === 'insalubridade_20') {
    monthlyAmount = salarioMinimo * 0.2;
    typeLabel = 'Insalubridade 20% (Grau Médio)';
    basisDescription = '20% calculado sobre o salário mínimo nacional (R$ 1.412,00)';
  } else if (calculationType === 'insalubridade_40') {
    monthlyAmount = salarioMinimo * 0.4;
    typeLabel = 'Insalubridade 40% (Grau Máximo)';
    basisDescription = '40% calculado sobre o salário mínimo nacional (R$ 1.412,00)';
  } else {
    monthlyAmount = baseSalary * 0.3;
    typeLabel = 'Periculosidade 30%';
    basisDescription = `30% calculado sobre o seu salário base (R$ ${baseSalary.toFixed(2)})`;
  }

  const accumulatedEstimate = monthlyAmount * months;
  // Reflexos aproximados em 13º e férias (+1/3): ~19.4%
  const estimatedReflexes = accumulatedEstimate * 0.194;
  const totalEstimated = accumulatedEstimate + estimatedReflexes;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-amber-400 text-blue-950 flex items-center justify-center font-black shadow-md shadow-amber-400/20">
          <Calculator className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-[#002266]">
            Simulador de Diferenças de Holerite
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Experimente uma simulação educativa de adicionais e reflexos
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
              1. Selecione o Tipo de Adicional
            </label>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setCalculationType('insalubridade_20')}
                className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center justify-between text-xs sm:text-sm font-bold cursor-pointer ${
                  calculationType === 'insalubridade_20'
                    ? 'border-[#002699] bg-blue-50/80 text-[#002699]'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Insalubridade 20% (Grau Médio)</span>
                <span className="text-amber-600 font-extrabold">+R$ 282,40/mês</span>
              </button>

              <button
                type="button"
                onClick={() => setCalculationType('insalubridade_40')}
                className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center justify-between text-xs sm:text-sm font-bold cursor-pointer ${
                  calculationType === 'insalubridade_40'
                    ? 'border-[#002699] bg-blue-50/80 text-[#002699]'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Insalubridade 40% (Grau Máximo)</span>
                <span className="text-amber-600 font-extrabold">+R$ 564,80/mês</span>
              </button>

              <button
                type="button"
                onClick={() => setCalculationType('periculosidade_30')}
                className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center justify-between text-xs sm:text-sm font-bold cursor-pointer ${
                  calculationType === 'periculosidade_30'
                    ? 'border-[#002699] bg-blue-50/80 text-[#002699]'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Periculosidade 30% (Salário Base)</span>
                <span className="text-amber-600 font-extrabold">30% sobre base</span>
              </button>
            </div>
          </div>

          {calculationType === 'periculosidade_30' && (
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                Seu Salário Base (R$)
              </label>
              <input
                type="number"
                min={1412}
                max={20000}
                step={50}
                value={baseSalary}
                onChange={(e) => setBaseSalary(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:border-[#002699]"
              />
            </div>
          )}

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                2. Período Trabalhado
              </label>
              <span className="text-xs font-extrabold text-[#002699] bg-blue-50 px-2 py-0.5 rounded">
                {months} meses ({Math.floor(months / 12)} anos e {months % 12} meses)
              </span>
            </div>
            <input
              type="range"
              min={6}
              max={60}
              step={6}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-[#002699] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
              <span>6 meses</span>
              <span>24 meses (2 anos)</span>
              <span>60 meses (limite 5 anos)</span>
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="bg-[#002266] rounded-2xl p-5 text-white flex flex-col justify-between shadow-inner relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <span className="inline-block bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3">
              Resultado da Simulação
            </span>

            <p className="text-xs text-blue-200 mb-1">{typeLabel}</p>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-2">
              R$ {monthlyAmount.toFixed(2)}{' '}
              <span className="text-xs font-normal text-blue-200">/ mês estimado</span>
            </div>
            <p className="text-[11px] text-blue-200 mb-4">{basisDescription}</p>

            <div className="space-y-2 py-3 border-y border-blue-800 text-xs">
              <div className="flex justify-between">
                <span className="text-blue-200">Adicional em {months} meses:</span>
                <span className="font-bold text-white">R$ {accumulatedEstimate.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Reflexos est. (13º, Férias + 1/3):</span>
                <span className="font-bold text-white">+R$ {estimatedReflexes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-blue-900 text-sm">
                <span className="font-extrabold text-amber-300">Total Simulado ({months} meses):</span>
                <span className="font-black text-amber-400 text-base">R$ {totalEstimated.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3">
            <button
              onClick={onCtaClick}
              className="w-full bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-xs sm:text-sm font-black py-3 px-4 rounded-xl shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-amber-300"
            >
              <span>BAIXAR A CALCULADORA COMPLETA EM EXCEL</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <p className="text-[10px] text-blue-300 text-center mt-2">
              *Simulação meramente educativa. O material ensina a conferir seus documentos e regras oficiais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

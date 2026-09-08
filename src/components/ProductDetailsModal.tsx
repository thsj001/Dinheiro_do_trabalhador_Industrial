import React from 'react';
import {
  X,
  Check,
  Gift,
  ShieldCheck,
  Clock,
  ArrowRight,
  BookOpen,
  FileSpreadsheet,
  Award,
  Zap,
  HardHat,
  FileCheck2,
  Lock,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';
import mockupImg from '../assets/images/kit_mockup_direitos_1788400302787.jpg';
import { bonusList, modulesList } from '../data/offerData';

export const CHECKOUT_PRO_URL = 'https://pay.cakto.com.br/cfqy6xs';
export const CHECKOUT_BASIC_URL = 'https://pay.cakto.com.br/ya5gxiy_1094049';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToCheckout?: () => void;
  onProceedBasic?: () => void;
  checkoutProUrl?: string;
  checkoutBasicUrl?: string;
}

export default function ProductDetailsModal({
  isOpen,
  onClose,
  onProceedToCheckout,
  onProceedBasic,
  checkoutProUrl = CHECKOUT_PRO_URL,
  checkoutBasicUrl = CHECKOUT_BASIC_URL,
}: ProductDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-2 border-amber-400 relative text-slate-800 max-h-[92vh] flex flex-col my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner com Sugestão de Upgrade */}
        <div className="bg-[#002699] text-white p-4 sm:p-5 relative shrink-0 border-b border-blue-900">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-blue-200 hover:text-white p-1.5 rounded-full bg-blue-950/60 hover:bg-blue-950 cursor-pointer transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-blue-950 text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-blue-950" />
            <span>SUGESTÃO ESPECIAL: LEVE O COMPLETO</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
            Leve o Pacote Completo por <span className="text-amber-300">R$ 27,90</span> no lugar do Plano de <span className="line-through text-blue-300">R$ 10,00</span>
          </h3>
          <p className="text-blue-200 text-xs sm:text-sm mt-1">
            Por apenas <strong className="text-amber-300">R$ 17,90 a mais</strong> (menos que um lanche), você não fica apenas com a teoria e desbloqueia todas as <strong>planilhas, calculadora de retroativos, modelos de PPP e os 10 bônus!</strong>
          </p>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">

          {/* ⚖️ QUADRO COMPARATIVO: BÁSICO DE R$ 10 vs COMPLETO DE R$ 27,90 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
            <div className="text-center mb-3">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 bg-slate-200 px-3 py-0.5 rounded-full inline-block">
                COMPARAÇÃO DIRETA DE CUSTO X BENEFÍCIO
              </span>
              <h4 className="text-base sm:text-lg font-black text-[#002266] mt-1">
                Por que compensa muito mais levar o Plano de R$ 27,90?
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Opção 1: Plano Básico R$ 10 */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between opacity-85">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">
                      Plano Básico
                    </span>
                    <span className="text-sm font-black text-slate-700">R$ 10,00</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-3 leading-snug">
                    Apenas leitura introdutória teórica em PDF.
                  </p>
                  <ul className="space-y-1.5 text-[11px] text-slate-600 mb-3">
                    <li className="flex items-center gap-1.5 text-slate-700">
                      <Check className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Guias teóricos em PDF</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-rose-600">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0 stroke-[2.5]" />
                      <span>Sem Calculadora em Excel</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-rose-600">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0 stroke-[2.5]" />
                      <span>Sem Modelos de PPP e LTCAT</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-rose-600">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0 stroke-[2.5]" />
                      <span>Sem os 10 Bônus Exclusivos</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-rose-600">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0 stroke-[2.5]" />
                      <span>Sem Certificado de Conclusão</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={checkoutBasicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full text-center py-2 px-3 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors block mt-2"
                >
                  Continuar c/ Básico (R$ 10)
                </a>
              </div>

              {/* Opção 2: Plano Profissional R$ 27,90 (SUGERIDO) */}
              <div className="bg-gradient-to-br from-amber-50 to-blue-50/60 p-3.5 rounded-xl border-2 border-amber-400 shadow-md flex flex-col justify-between relative">
                <div className="absolute -top-2.5 right-3 bg-amber-400 text-blue-950 font-black text-[10px] uppercase px-2 py-0.5 rounded-full shadow-xs">
                  ⭐ RECOMENDADO (94% ESCOLHEM)
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black text-[#002699] uppercase">
                      Completo Profissional
                    </span>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 line-through block leading-none">R$ 197</span>
                      <span className="text-base font-black text-[#002699] leading-none">R$ 27,90</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 font-bold mb-3 leading-snug">
                    Tudo liberado: e-books, planilhas, modelos e bônus.
                  </p>
                  <ul className="space-y-1.5 text-[11px] text-slate-800 font-medium mb-3">
                    <li className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>15 E-books e Guias Completos</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Calculadora de Retroativos em Excel</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Modelos Editáveis de PPP e LTCAT</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Todos os 10 Bônus (Economia de R$ 360)</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Certificado de Conclusão Válido</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={checkoutProUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full text-center py-2 px-3 rounded-lg bg-[#002699] hover:bg-blue-800 text-white text-xs font-black transition-colors block mt-2 shadow-xs"
                >
                  Levar Completo (R$ 27,90)
                </a>
              </div>
            </div>

            <div className="mt-3 p-2 bg-amber-100/70 border border-amber-300/80 rounded-xl text-center text-xs text-amber-900 font-bold">
              💡 <strong>Economia inteligente:</strong> Por apenas R$ 17,90 de acréscimo único, você evita perder valores no holerite e tem ferramentas práticas para a vida toda!
            </div>
          </div>

          {/* Banner de Destaque com Mockup */}
          <div className="bg-gradient-to-r from-blue-900 via-[#002699] to-blue-950 text-white rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-800 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm bg-blue-950">
                <img
                  src={mockupImg}
                  alt="Pacote Completo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-blue-950 bg-amber-400 px-2 py-0.5 rounded-md inline-block mb-1">
                  FORMAÇÃO COMPLETA VITALÍCIA
                </span>
                <p className="text-xs text-blue-200">De <span className="line-through">R$ 197,00</span></p>
                <div className="text-2xl sm:text-3xl font-black text-white leading-none">
                  Por apenas <span className="text-amber-400">R$ 27,90</span>
                </div>
              </div>
            </div>

            <a
              href={checkoutProUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full sm:w-auto bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 font-black text-sm py-3.5 px-6 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-amber-300 shrink-0"
            >
              <span>ACEITAR SUGESTÃO (R$ 27,90)</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

          {/* Lista de Ferramentas Incluídas */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-[#002266] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-700" />
              <span>Tudo o que vem liberado no pacote de R$ 27,90:</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                {
                  title: '15 E-books e Guias Completos',
                  desc: 'Coleção completa dividida em módulos práticos para ler no celular ou PC.',
                  icon: BookOpen,
                  color: 'text-blue-700 bg-blue-50',
                },
                {
                  title: 'Calculadora de Retroativos em Excel',
                  desc: 'Planilha prática para simulações de adicionais, horas e períodos.',
                  icon: FileSpreadsheet,
                  color: 'text-emerald-700 bg-emerald-50',
                },
                {
                  title: 'Planilha de FGTS e Horas Extras',
                  desc: 'Ferramentas prontas para conferência de depósitos e acréscimos.',
                  icon: FileSpreadsheet,
                  color: 'text-emerald-700 bg-emerald-50',
                },
                {
                  title: 'Modelos Prontos de PPP e LTCAT',
                  desc: 'Cartas formais pré-formatadas para solicitação legal ao RH da empresa.',
                  icon: FileCheck2,
                  color: 'text-indigo-700 bg-indigo-50',
                },
                {
                  title: 'Guia de Insalubridade & Periculosidade',
                  desc: 'Entenda os percentuais de 10%, 20%, 40% e 30% sobre o salário base.',
                  icon: HardHat,
                  color: 'text-amber-700 bg-amber-50',
                },
                {
                  title: 'Formação em Segurança Industrial',
                  desc: 'Prevenção de acidentes, EPIs, EPCs, máquinas, riscos e checklists.',
                  icon: HardHat,
                  color: 'text-orange-700 bg-orange-50',
                },
                {
                  title: 'Checklist Mensal de Holerite',
                  desc: 'Roteiro prático para nunca mais deixar passar adicionais esquecidos.',
                  icon: FileCheck2,
                  color: 'text-blue-700 bg-blue-50',
                },
                {
                  title: 'Certificado de Conclusão',
                  desc: 'Certificação formal de capacitação profissional para enriquecer seu currículo.',
                  icon: Award,
                  color: 'text-purple-700 bg-purple-50',
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-2.5"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center shrink-0 mt-0.5`}
                    >
                      <IconComponent className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 10 Bônus Section */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-400 text-blue-950 flex items-center justify-center font-black">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-amber-900">
                    Todos os 10 Bônus Exclusivos Inclusos
                  </h4>
                  <p className="text-[10px] text-amber-700 font-bold">
                    Mais de R$ 360,00 em materiais liberados gratuitamente
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                100% GRÁTIS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {bonusList.map((bonus, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 p-2 rounded-lg border border-amber-200/80 flex items-center justify-between gap-1.5"
                >
                  <span className="font-semibold text-slate-800 text-[11px] truncate">
                    ✓ {bonus.title}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 line-through shrink-0">
                    {bonus.oldPrice}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 15 Módulos */}
          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
            <p className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
              📚 Lista dos 15 Módulos em E-books inclusos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[11px] text-slate-600">
              {modulesList.map((mod, idx) => (
                <div key={idx} className="truncate">
                  <strong className="text-[#002699] font-bold">{mod.num}:</strong>{' '}
                  {mod.title}
                </div>
              ))}
            </div>
          </div>

          {/* Garantias */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-slate-600 font-semibold pt-1">
            <div className="p-2 rounded-xl bg-slate-100 flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-100 flex flex-col items-center gap-1">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Acesso Imediato & Vitalício</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-100 flex flex-col items-center gap-1">
              <Lock className="w-4 h-4 text-amber-600" />
              <span>Pagamento 100% Seguro</span>
            </div>
          </div>

        </div>

        {/* Modal Sticky Bottom Action */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-center sm:text-left">
            <div className="flex items-baseline gap-2 justify-center sm:justify-start">
              <span className="text-xs text-slate-400 line-through font-bold">R$ 197,00</span>
              <span className="text-xl sm:text-2xl font-black text-[#002699]">
                R$ 27,90
              </span>
              <span className="text-[11px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                Diferença de apenas R$ 17,90
              </span>
            </div>
            <p className="text-[10px] text-slate-500">
              Pagamento único via PIX instantâneo ou cartão
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5 w-full sm:w-auto">
            <a
              href={checkoutProUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full sm:w-auto bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 font-black text-sm sm:text-base py-3.5 px-7 rounded-full shadow-lg shadow-amber-400/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-amber-300"
            >
              <span>QUERO LEVAR O COMPLETO POR R$ 27,90</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>

            <a
              href={checkoutBasicUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="text-[11px] text-slate-500 hover:text-slate-800 underline text-center cursor-pointer transition-colors py-0.5"
            >
              Não quero bônus nem planilhas, continuar com o Básico por R$ 10,00 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

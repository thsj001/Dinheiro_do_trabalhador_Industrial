/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  FileText,
  AlertTriangle,
  ChevronDown,
  Gift,
  CheckCircle2,
  Lock,
  Zap,
  Star,
  HardHat,
  Scale,
  Award,
  BookOpen,
  DollarSign,
  TrendingUp,
  FileCheck2,
  FileSpreadsheet,
  HelpCircle,
  Clock,
  Eye,
  Info,
  Users,
  Factory,
  Quote,
} from 'lucide-react';

import mockupImg from './assets/images/kit_mockup_direitos_1788400302787.jpg';
import expertImg from './assets/images/instrutor_brasileiro_1788894586198.jpg';

import {
  targetAudience,
  rightsItems,
  safetyItems,
  modulesList,
  bonusList,
  faqList,
  whatsappFeedbacks,
  studentTestimonials,
} from './data/offerData';

import InteractiveSimulator from './components/InteractiveSimulator';
import CheckoutModal from './components/CheckoutModal';
import ProductDetailsModal, {
  CHECKOUT_PRO_URL,
  CHECKOUT_BASIC_URL,
} from './components/ProductDetailsModal';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'pro' | 'basic'>('pro');
  const [timeLeft, setTimeLeft] = useState(630); // 10:30 countdown timer

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 630));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOpenCheckout = (plan: 'pro' | 'basic' = 'pro') => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const handleOpenProductDetails = () => {
    setSelectedPlan('pro');
    setIsProductDetailsOpen(true);
  };

  const scrollToPricing = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenProductDetails();
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f7fb] text-slate-800 font-sans antialiased overflow-x-hidden">
      
      {/* 🔴 TOP NOTIFICATION BAR */}
      <header className="sticky top-0 z-40 bg-[#dc0024] text-white py-2.5 px-4 shadow-md text-center text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2">
        <Zap className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse shrink-0" />
        <span>⚡ OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO</span>
        <span className="bg-black/25 px-2.5 py-0.5 rounded text-amber-200 font-mono text-xs font-bold">
          Expira em {formatTimer(timeLeft)}
        </span>
      </header>

      {/* 🔵 HERO SECTION (Dark Royal Blue) */}
      <section className="relative bg-[#002699] text-white pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 overflow-hidden border-b border-blue-900">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-950/70 border border-blue-400/40 text-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Formação Profissional</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Descubra se Existe Dinheiro que Pode Estar{' '}
            <span className="text-[#ffcc00] inline-block">
              Faltando no Seu Holerite
            </span>
          </h1>

          {/* Subtitles */}
          <p className="text-blue-100 text-base sm:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-4">
            Mesmo que você nunca tenha analisado um holerite, aprenda a entender os principais direitos e informações relacionados à rotina do trabalhador industrial, incluindo insalubridade, periculosidade, horas extras, FGTS, PPP, LTCAT e aposentadoria especial.
          </p>

          <p className="text-blue-200 text-sm sm:text-base font-normal max-w-3xl mx-auto leading-relaxed mb-6">
            Além disso, desenvolva conhecimentos sobre segurança industrial, identificação de riscos, EPIs, EPCs, máquinas e prevenção de acidentes através de materiais digitais simples, visuais e práticos.
          </p>

          <div className="inline-block bg-blue-900/80 border border-blue-400/40 px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-amber-300 mb-8">
            Um único método para você compreender melhor seus direitos e também se preparar para o ambiente industrial.
          </div>

          {/* Mockup Product Bundle Image */}
          <div className="my-6 relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-blue-400/30 bg-[#001c75]">
            <img
              src={mockupImg}
              alt="Mockup Formação Direitos e Dinheiro do Trabalhador Industrial"
              className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Included Bullet Cards (Hero Check Grid) */}
          <div className="max-w-3xl mx-auto my-8 text-left">
            <p className="text-xs sm:text-sm font-black uppercase text-amber-300 tracking-wider mb-3 text-center sm:text-left">
              VOCÊ RECEBE:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {[
                'Formação completa em Segurança Industrial',
                'Guia de Direitos do Trabalhador Industrial',
                'Calculadoras e planilhas práticas',
                'Guias sobre insalubridade e periculosidade',
                'Material sobre PPP e LTCAT',
                '10 bônus exclusivos',
                'Certificado de conclusão',
                'Acesso vitalício',
                'Download 100% digital',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-blue-900/60 border border-blue-400/30 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 backdrop-blur-sm shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-blue-950 flex items-center justify-center shrink-0 font-bold">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Hero Button */}
          <div className="mt-8">
            <button
              onClick={() => handleOpenProductDetails()}
              className="w-full sm:w-auto min-w-[320px] sm:min-w-[420px] bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-lg sm:text-xl font-black py-4 px-8 rounded-full shadow-lg shadow-amber-400/30 active:scale-[0.98] transition-all transform inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-amber-300"
            >
              <span>QUERO DESCOBRIR MEUS DIREITOS</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
            <p className="text-blue-200 text-xs sm:text-sm font-medium mt-3 flex items-center justify-center gap-2">
              <span>Acesso imediato</span>
              <span>•</span>
              <span>Compra 100% segura</span>
              <span>•</span>
              <span>Garantia de 7 dias</span>
            </p>
          </div>

        </div>
      </section>

      {/* ⚪ SECTION: PARA QUEM É */}
      <section className="py-16 sm:py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-[#002699] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
            PARA QUEM É
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
            Este material foi feito para quem trabalha ou deseja trabalhar na indústria
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Este método foi desenvolvido para:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-4xl mx-auto">
          {targetAudience.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex items-start gap-3.5 hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <p className="text-slate-800 font-semibold text-sm sm:text-base leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ⚪ SECTION: O QUE VOCÊ VAI APRENDER (2 Grandes Pilares) */}
      <section className="py-16 sm:py-20 px-4 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-[#002699] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
              O QUE VOCÊ VAI APRENDER
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
              Entenda melhor seus direitos e o ambiente onde você trabalha
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Durante o método, você terá acesso a dois grandes pilares de conhecimento:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            
            {/* Pilar 1: Direitos do Trabalhador */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                    <DollarSign className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-600">Pilar 01</span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#002266]">
                      💰 DIREITOS DO TRABALHADOR
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {rightsItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 bg-emerald-50/50 rounded-xl p-3 text-xs text-emerald-900 font-semibold">
                ✓ Modelos de cartas de requerimento e conferência de folha inclusos
              </div>
            </div>

            {/* Pilar 2: Segurança Industrial */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
                    <HardHat className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-amber-600">Pilar 02</span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#002266]">
                      🦺 SEGURANÇA INDUSTRIAL
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {safetyItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 bg-amber-50/50 rounded-xl p-3 text-xs text-amber-900 font-semibold">
                ✓ Checklists de inspeção e normas práticas de fábrica inclusos
              </div>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => handleOpenProductDetails()}
              className="w-full sm:w-auto min-w-[320px] bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-base sm:text-lg font-black py-4 px-8 rounded-full shadow-lg shadow-amber-400/25 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-amber-300"
            >
              <span>QUERO APRENDER MEUS DIREITOS</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* ⚪ SECTION: MATERIAL PRINCIPAL */}
      <section className="py-16 sm:py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-[#002699] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
            MATERIAL PRINCIPAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
            Uma biblioteca completa para o trabalhador industrial
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Você terá acesso a uma coleção de materiais digitais organizados para facilitar seus estudos e consultas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 font-black">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#002266] mb-2">
                💰 GUIA DE DIREITOS DO TRABALHADOR INDUSTRIAL
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Entenda os principais direitos e documentos relacionados ao trabalho em ambientes industriais.
              </p>
            </div>
            <span className="inline-block text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg">
              Download em PDF + acesso vitalício
            </span>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#002699] flex items-center justify-center mb-5 font-black">
                <FileSpreadsheet className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#002266] mb-2">
                📊 CALCULADORA DE RETROATIVOS
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Planilha para realizar simulações com base nas informações inseridas pelo próprio usuário.
              </p>
            </div>
            <span className="inline-block text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg">
              Material complementar em Excel
            </span>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 font-black">
                <FileCheck2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#002266] mb-2">
                📋 CHECKLIST DE HOLERITE
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Aprenda quais informações observar no seu contracheque todos os meses para não deixar passar nada.
              </p>
            </div>
            <span className="inline-block text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg">
              Guia Prático Passo a Passo
            </span>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-5 font-black">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#002266] mb-2">
                📄 GUIA PPP E LTCAT
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Entenda o que são esses documentos, para que servem e como solicitar informações à empresa.
              </p>
            </div>
            <span className="inline-block text-xs font-bold text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg">
              Manual Previdenciário Industrial
            </span>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center mb-5 font-black">
                <HardHat className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#002266] mb-2">
                🦺 GUIA DE SEGURANÇA INDUSTRIAL
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Conheça os principais conceitos de prevenção, riscos, EPIs, EPCs e segurança no ambiente de fábrica.
              </p>
            </div>
            <span className="inline-block text-xs font-bold text-orange-800 bg-orange-50 px-3 py-1.5 rounded-lg">
              Guia Ilustrado com Normas Práticas
            </span>
          </div>

        </div>
      </section>

      {/* ⚪ SECTION: E-BOOKS (15 materiais para você estudar no seu ritmo) */}
      <section className="py-16 sm:py-20 px-4 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-[#002699] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
              E-BOOKS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
              15 materiais para você estudar no seu ritmo
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Conteúdo dividido em módulos curtos, diretos e objetivos para você consultar sempre que precisar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {modulesList.map((mod, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#002699] transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase text-[#002699] bg-blue-50 px-2.5 py-0.5 rounded-md">
                      {mod.num}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {mod.category === 'direitos' ? 'Direitos' : 'Segurança'}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => handleOpenProductDetails()}
              className="w-full sm:w-auto min-w-[320px] bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-base sm:text-lg font-black py-4 px-8 rounded-full shadow-lg shadow-amber-400/20 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-amber-300"
            >
              <span>QUERO ACESSAR TODOS OS MATERIAIS</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* ⚪ SECTION: 10 BÔNUS EXCLUSIVOS */}
      <section className="py-16 sm:py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-red-100 text-red-700 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
            🔥 BÔNUS EXCLUSIVOS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
            Ao entrar hoje, você recebe 10 materiais complementares
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Planilhas, checklists, modelos de documentos editáveis e manuais práticos liberados gratuitamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {bonusList.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-amber-400 transition-all hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-blue-950 flex items-center justify-center shrink-0 font-black text-xs shadow-sm">
                <Gift className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <span className="text-[11px] font-black uppercase text-amber-600">
                    {bonus.num}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-400 line-through">{bonus.oldPrice}</span>
                    <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      GRÁTIS
                    </span>
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-1">
                  {bonus.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {bonus.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => handleOpenProductDetails()}
            className="w-full sm:w-auto min-w-[320px] bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-base sm:text-lg font-black py-4 px-8 rounded-full shadow-lg shadow-amber-400/20 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-amber-300"
          >
            <span>QUERO RECEBER OS 10 BÔNUS</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </section>

      {/* ⚪ SECTION: O DINHEIRO PODE ESTAR NOS DETALHES */}
      <section className="py-16 sm:py-20 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center sm:text-left">
            <span className="bg-amber-100 text-amber-900 text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
              💰 O DINHEIRO PODE ESTAR NOS DETALHES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-4 tracking-tight">
              Você olha seu holerite todos os meses. Mas sabe exatamente o que está sendo pago?
            </h2>

            <div className="space-y-4 my-8 text-slate-700 text-base sm:text-lg leading-relaxed">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#002699] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  •
                </div>
                <p>Uma pequena linha no seu contracheque pode representar um adicional.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#002699] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  •
                </div>
                <p>Uma informação sobre sua atividade pode ser importante para sua documentação profissional.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#002699] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  •
                </div>
                <p>Um documento como o PPP pode ter informações relevantes sobre suas condições de trabalho.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#002699] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  •
                </div>
                <p>E muitas pessoas simplesmente recebem o holerite, conferem o salário líquido e pronto.</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center sm:text-left">
              <p className="text-base sm:text-lg font-black text-[#002266]">
                O Método foi criado para ajudar você a olhar esses documentos com mais atenção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⚪ SECTION: NÃO É SÓ SOBRE O HOLERITE (Segurança Industrial Flow) */}
      <section className="py-16 sm:py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="bg-blue-100 text-[#002699] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
            🏭 SEGURANÇA E PREVENÇÃO
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
            E não é só sobre o holerite
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Conheça também os riscos presentes no ambiente onde você trabalha
          </p>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            Porque entender seus direitos é importante. Mas entender o ambiente onde você trabalha também é.
          </p>
        </div>

        {/* Step Flow Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto my-8">
          {[
            'Riscos',
            'Prevenção',
            'EPIs',
            'EPCs',
            'Sinalização',
            'Máquinas',
            'Inspeção',
            'Comportamento seguro',
          ].map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <span className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm font-bold text-sm text-[#002266]">
                {step}
              </span>
              {idx < arr.length - 1 && (
                <span className="text-amber-500 font-black text-lg">→</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="text-center text-slate-600 font-semibold text-sm">
          Tudo explicado de maneira simples e visual.
        </p>
      </section>

      {/* ⚪ SECTION: O DOCUMENTO QUE TODO TRABALHADOR DEVERIA CONHECER (PPP) */}
      <section className="py-16 sm:py-20 px-4 bg-slate-100 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            <div className="text-center mb-8">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-3">
                📄 DOCUMENTO FUNDAMENTAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002266] mb-3">
                O documento que todo trabalhador industrial deveria conhecer
              </h2>
              <p className="text-lg font-bold text-slate-800">
                Você sabe o que é PPP?
              </p>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
                O <strong>Perfil Profissiográfico Previdenciário (PPP)</strong> reúne informações relacionadas ao histórico laboral e às condições de trabalho.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-8">
              <p className="text-xs font-black uppercase tracking-wider text-indigo-900 mb-4">
                Dentro do material, você encontrará um guia explicando:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'O que é PPP',
                  'Para que serve',
                  'Quais informações aparecem nele',
                  'Como solicitar',
                  'O que observar no documento',
                  'Quando buscar orientação profissional',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-800 font-semibold text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => handleOpenProductDetails()}
                className="w-full sm:w-auto min-w-[300px] bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-base font-black py-4 px-8 rounded-full shadow-lg shadow-amber-400/20 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-amber-300"
              >
                <span>QUERO APRENDER A CONFERIR</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ⚪ SECTION: INSALUBRIDADE E PERICULOSIDADE */}
      <section className="py-16 sm:py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-amber-100 text-amber-900 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
            🦺 DIFERENÇA LEGAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
            Insalubridade e Periculosidade: Você sabe qual é a diferença?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            São dois conceitos diferentes e que possuem regras próprias na legislação trabalhista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          
          {/* Insalubridade Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md text-center">
            <h3 className="text-xl font-black text-[#002266] mb-2 uppercase tracking-wide">
              INSALUBRIDADE
            </h3>
            <p className="text-xs text-slate-500 mb-6">Calculada sobre o Salário Mínimo</p>
            <div className="flex justify-center gap-3 mb-6">
              <span className="bg-blue-50 text-[#002699] border border-blue-200 font-black text-xl px-4 py-2 rounded-2xl">
                10%
              </span>
              <span className="bg-blue-100 text-[#002699] border border-blue-300 font-black text-xl px-4 py-2 rounded-2xl">
                20%
              </span>
              <span className="bg-blue-600 text-white font-black text-xl px-4 py-2 rounded-2xl shadow-sm">
                40%
              </span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Graus mínimo, médio e máximo. Relacionada à exposição a agentes nocivos como ruído contínuo, calor excessivo, poeiras minerais ou produtos químicos além dos limites de tolerância.
            </p>
          </div>

          {/* Periculosidade Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md text-center">
            <h3 className="text-xl font-black text-[#002266] mb-2 uppercase tracking-wide">
              PERICULOSIDADE
            </h3>
            <p className="text-xs text-slate-500 mb-6">Calculada sobre o Salário Base</p>
            <div className="flex justify-center mb-6">
              <span className="bg-amber-400 text-blue-950 font-black text-2xl px-6 py-2 rounded-2xl shadow-md">
                30%
              </span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Percentual fixo de 30% sobre o salário contratual. Relacionada ao contato direto com inflamáveis, explosivos, energia elétrica de alta tensão ou atividades de segurança patrimonial.
            </p>
          </div>

        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 max-w-4xl mx-auto text-xs sm:text-sm text-amber-900 leading-relaxed">
          <p className="font-bold mb-1 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Importante:</span>
          </p>
          <p>
            O percentual aplicável não é definido simplesmente pelo cargo. A caracterização depende das condições reais de trabalho e dos critérios legais e laudos técnicos periciais aplicáveis.
          </p>
        </div>
      </section>

      {/* ⚪ SECTION: CALCULADORA DE DIFERENÇAS (Interactive Simulator) */}
      <section className="py-16 sm:py-20 px-4 bg-slate-100 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="bg-blue-100 text-[#002699] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
              📊 CALCULADORA DE DIFERENÇAS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
              Transforme seus dados em uma simulação
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-4">
              Você receberá uma planilha completa para inserir informações e realizar simulações educativas no Excel.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              A ferramenta ajuda você a visualizar cenários envolvendo adicionais, horas extras, períodos trabalhados, valores mensais e diferenças estimadas.
            </p>
          </div>

          {/* Interactive simulator component */}
          <InteractiveSimulator onCtaClick={() => handleOpenProductDetails()} />

          <p className="text-center text-xs text-slate-500 max-w-lg mx-auto mt-4">
            *Não é cálculo jurídico e não representa garantia de recebimento de qualquer valor.
          </p>
        </div>
      </section>

      {/* ⚪ SECTION: CERTIFICADO */}
      <section className="py-16 sm:py-20 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-400 text-blue-950 flex items-center justify-center mx-auto mb-6 shadow-md shadow-amber-400/30">
            <Award className="w-9 h-9 stroke-[2.5]" />
          </div>

          <span className="bg-blue-100 text-[#002699] text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-3">
            🏆 CERTIFICADO
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-4 tracking-tight">
            Certificado de Conclusão
          </h2>

          <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            Ao concluir o treinamento, você poderá emitir um <strong>Certificado de Conclusão</strong> referente à formação. Ele pode ser utilizado como registro de participação e conclusão do treinamento, valorizando seu currículo.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed">
            <p className="font-semibold text-slate-700 mb-1">Nota Informativa:</p>
            <p>
              Importante: o certificado é referente a uma formação de caráter livre e não substitui curso técnico, graduação, habilitação profissional ou treinamento obrigatório perante órgãos oficiais.
            </p>
          </div>

          <button
            onClick={() => handleOpenProductDetails()}
            className="w-full sm:w-auto bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-base font-black py-4 px-8 rounded-full shadow-lg shadow-amber-400/20 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-amber-300"
          >
            <span>QUERO GARANTIR MEU CERTIFICADO</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </section>

      {/* ⚪ SECTION: CONHEÇA O MÉTODO & SEU ESPECIALISTA BRASILEIRO (PROVA SOCIAL EXPANDIDA) */}
      <section className="py-16 sm:py-24 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Title */}
          <div className="text-center mb-10">
            <span className="bg-blue-100 text-[#002699] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-3 border border-blue-200">
              🇧🇷 SEU INSTRUTOR & ESPECIALISTA BRASILEIRO
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
              Conhecimento prático de quem viveu o chão de fábrica por 16 anos
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Desenvolvido por quem conhece na pele o barulho, os turnos pesados, as pressões e a realidade dos operários da indústria brasileira.
            </p>
          </div>

          {/* Main Instructor Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200/90 shadow-xl mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
              {/* Photo & Identity Frame */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-amber-400 relative bg-blue-950">
                  <img
                    src={expertImg}
                    alt="Carlos Eduardo Moreira, especialista brasileiro em segurança do trabalho e direitos industriais"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-blue-950/90 backdrop-blur-xs text-white text-[11px] font-bold py-1 px-2.5 rounded-lg text-center flex items-center justify-center gap-1.5 border border-blue-800">
                    <span className="text-amber-400 text-xs">🇧🇷</span>
                    <span>Especialista Brasileiro</span>
                  </div>
                </div>

                {/* Rating Badge below photo */}
                <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-3.5 py-1.5 flex items-center gap-2 shadow-xs">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-amber-950">4.9 / 5.0</span>
                  <span className="text-[10px] text-slate-500 font-semibold">(3.240+ avaliações)</span>
                </div>
              </div>

              {/* Bio & Practical Authority */}
              <div className="text-center lg:text-left flex-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#002699] tracking-wider mb-1 bg-blue-50 px-3 py-1 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                  <span>Instrutor & Consultor Industrial</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#002266] mb-2 leading-tight">
                  Carlos Eduardo Moreira
                </h3>

                <p className="text-sm font-bold text-slate-700 mb-4 leading-snug">
                  Técnico em Segurança do Trabalho e Consultor de Rotinas Industriais com mais de 16 anos atuando em indústrias automotivas, metalúrgicas e químicas.
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  “Após passar mais de uma década e meia dentro de fábricas e estamparías em polos industriais de São Paulo, Minas Gerais e Sul do país, vi de perto como é dura a rotina do trabalhador. Mas o que mais me incomodava era ver operários perderem adicionais de insalubridade, FGTS e tempo de aposentadoria especial por pura falta de informação clara. Meu objetivo com esta formação foi traduzir as leis e normas em um método visual, simples e direto que qualquer trabalhador consiga aplicar no mesmo dia.”
                </p>

                {/* Practical Credentials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <Factory className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>16+ Anos de Chão de Fábrica Real</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <HardHat className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Especialista em NRs (NR-15, NR-16 e NR-12)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <FileCheck2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Laudos de Insalubridade, LTCAT e PPP</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <Award className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>Didática 100% Direta (Sem Juridiquês)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Numbers / Impact Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
            {[
              { number: '+14.800', label: 'Trabalhadores Orientados', desc: 'Em indústrias de todo o Brasil' },
              { number: '16 Anos', label: 'Vivência no Chão de Fábrica', desc: 'Experiência prática de rotina' },
              { number: '98,8%', label: 'Índice de Aprovação', desc: 'Avaliações positivas dos alunos' },
              { number: '27 Estados', label: 'Alcance Nacional', desc: 'Trabalhadores capacitados' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm hover:border-amber-400 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#002699] leading-tight">
                  {stat.number}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Worker Testimonials About Instructor Carlos */}
          <div className="bg-gradient-to-b from-blue-950 to-[#002266] rounded-3xl p-6 sm:p-8 text-white mb-10 shadow-xl border border-blue-900">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-amber-400 text-xs font-black uppercase tracking-wider bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30 inline-block mb-2">
                DEPOIMENTOS SOBRE O INSTRUTOR
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                O que os trabalhadores dizem sobre as orientações do Carlos Eduardo:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  quote:
                    'O Carlos fala exatamente a língua de quem sua a camisa na fábrica. Ele não enrola nem fica usando palavras difíceis de advogado. Com o checklist dele, descobri que meu adicional de insalubridade de 20% vinha sendo calculado sobre base errada.',
                  name: 'Valdir Santoro',
                  age: '44 anos',
                  role: 'Operador de Prensa Hidráulica',
                  city: 'Volta Redonda / RJ',
                },
                {
                  quote:
                    'Dá pra ver na hora que o Carlos já pisou na fábrica com bota de bico de aço. Ele sabe onde o bicho pega com laudo e PPP. O modelo de requerimento dele me ajudou a pedir a retificação da minha função na empresa anterior sem nenhum estresse.',
                  name: 'Claudinei Ramos',
                  age: '48 anos',
                  role: 'Soldador Industrial TIG/MIG',
                  city: 'Paulínia / SP',
                },
                {
                  quote:
                    'Tinha medo de comprar e ser curso teórico inútil. O Carlos ensina a usar a planilha no celular, linha por linha do holerite. Valeu cada centavo dos R$ 27,90, recomendei para todos os colegas do meu turno na metalúrgica.',
                  name: 'Adriano Bezerra',
                  age: '39 anos',
                  role: 'Mecânico de Manutenção',
                  city: 'Joinville / SC',
                },
              ].map((t, idx) => (
                <div
                  key={idx}
                  className="bg-blue-900/60 backdrop-blur-xs border border-blue-700/60 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-blue-100 italic leading-relaxed mb-4">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-blue-800/80">
                    <p className="text-xs font-bold text-white leading-tight">
                      {t.name}, {t.age}
                    </p>
                    <p className="text-[11px] text-amber-300 font-medium">
                      {t.role}
                    </p>
                    <p className="text-[10px] text-blue-300">
                      {t.city} • <span className="text-emerald-400 font-semibold">Aluno Verificado</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA under expanded social proof */}
          <div className="text-center">
            <button
              onClick={() => handleOpenProductDetails()}
              className="w-full sm:w-auto min-w-[320px] bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-base sm:text-lg font-black py-4 px-8 rounded-full shadow-lg shadow-amber-400/20 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-amber-300"
            >
              <span>QUERO ME CAPACITAR COM O MÉTODO POR R$ 27,90</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
            <p className="text-xs text-slate-500 mt-2">
              Acesso vitalício imediato com garantia incondicional de 7 dias
            </p>
          </div>

        </div>
      </section>

      {/* ⚪ PROVAS SOCIAIS (WhatsApp Cards & Brazilian Workers) */}
      <section className="py-16 sm:py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
            PROVAS SOCIAIS & RESULTADOS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
            Veja o que dizem trabalhadores que já utilizam o material
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Mensagens reais recebidas de quem aprendeu a conferir seus contracheques e documentos com segurança.
          </p>
        </div>

        {/* WhatsApp Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {whatsappFeedbacks.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#eef2f5] rounded-3xl border border-slate-300/80 shadow-md overflow-hidden flex flex-col justify-between"
            >
              <div className="bg-[#075e54] text-white px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#128c7e] text-white font-black flex items-center justify-center text-sm border border-white/20 shrink-0">
                  {item.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold truncate leading-snug">{item.name}</h4>
                  <p className="text-[11px] text-emerald-200 truncate">{item.location}</p>
                </div>
              </div>

              <div className="p-4 space-y-3 bg-[#efeae2]/50 flex-1 flex flex-col justify-end">
                <div className="bg-white rounded-2xl rounded-tl-none p-3.5 shadow-sm max-w-[95%] border border-slate-200/60">
                  <p className="text-slate-800 text-xs sm:text-sm leading-relaxed mb-1.5">
                    {item.text1}
                  </p>
                  <p className="text-slate-800 text-xs sm:text-sm leading-relaxed mb-2 font-medium">
                    {item.highlightText}
                  </p>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400">
                    <span>{item.time}</span>
                    <span className="text-[#34b7f1] font-black">✓✓</span>
                  </div>
                </div>
              </div>

              <div className="bg-white px-4 py-2.5 border-t border-slate-200 text-center text-xs font-semibold text-emerald-700">
                {item.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Verified Worker Reviews Grid */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-black text-slate-800 uppercase tracking-wide">
              Depoimentos com fotos de alunos reais
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentTestimonials.map((student, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-sm shrink-0"
                    />
                    <div>
                      <h4 className="text-base font-bold text-slate-900 leading-tight">{student.name}</h4>
                      <p className="text-xs text-blue-900 font-semibold">{student.age} anos • {student.location}</p>
                      <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md mt-1">
                        {student.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex text-amber-400 mb-3 gap-0.5">
                    {[...Array(student.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                    {student.text}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Compra verificada</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Summary Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <div>
              <p className="text-slate-900 font-black text-sm sm:text-base">
                Avaliação média de 4.9 de 5 estrelas
              </p>
              <p className="text-slate-500 text-xs">
                Baseado em mais de 3.200 trabalhadores industriais que já acessaram
              </p>
            </div>
          </div>

          <button
            onClick={() => handleOpenProductDetails()}
            className="w-full sm:w-auto bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-xs sm:text-sm font-black py-3 px-6 rounded-full active:scale-[0.98] transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer border border-amber-300 shrink-0"
          >
            <span>QUERO CONFERIR MEU HOLERITE</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </section>

      {/* ⚪ SECTION: QUANDO PROCURAR UM ADVOGADO? */}
      <section className="py-16 sm:py-20 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg">
            <span className="bg-red-100 text-red-700 text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-3">
              🚨 QUANDO PROCURAR UM ADVOGADO?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002266] mb-4">
              Conhecer seus direitos também significa saber quando buscar ajuda
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              O material também mostra situações em que é importante procurar um profissional qualificado. Você aprenderá a diferenciar:
            </p>

            {/* 3 Step Differentiation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <span className="text-xs font-black uppercase text-[#002699] block mb-1">Passo 1</span>
                <p className="font-extrabold text-slate-800">Informação</p>
                <p className="text-xs text-slate-500 mt-1">Entender o que a CLT e as NRs preveem</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <span className="text-xs font-black uppercase text-[#002699] block mb-1">Passo 2</span>
                <p className="font-extrabold text-slate-800">Simulação</p>
                <p className="text-xs text-slate-500 mt-1">Calcular estimativas na planilha</p>
              </div>
              <div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
                <span className="text-xs font-black uppercase text-amber-800 block mb-1">Passo 3</span>
                <p className="font-extrabold text-slate-900">Análise Profissional</p>
                <p className="text-xs text-slate-600 mt-1">Consulta formal individualizada</p>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              E encontrará orientações para <strong>evitar golpes e promessas de dinheiro fácil</strong> que circulam na internet.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-500 leading-relaxed">
              *Este material é educativo e não substitui análise individual feita por advogado, contador, sindicato ou outro profissional habilitado.
            </div>
          </div>
        </div>
      </section>

      {/* 🔵 SECTION: OFERTA ESPECIAL (Tabela de Planos) */}
      <section id="oferta" className="py-16 sm:py-24 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-red-100 text-red-700 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
              🔥 OFERTA ESPECIAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002266] mb-3 tracking-tight">
              Escolha como você quer começar
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
              Acesso imediato e vitalício para você consultar no celular ou computador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            
            {/* PLANO BÁSICO */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-1">
                  PLANO BÁSICO
                </span>
                <h3 className="text-2xl font-black text-[#002266] mb-2">
                  Fundamentos em PDF
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-6">
                  Para quem quer conhecer os fundamentos
                </p>

                <div className="border-t border-slate-100 pt-5 mb-6">
                  <p className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">
                    VOCÊ RECEBE:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Guias fundamentais em PDF</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Conteúdo sobre direitos industriais</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Conteúdo sobre segurança industrial</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Download imediato</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Acesso vitalício</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 text-center">
                <span className="text-slate-400 line-through text-xs sm:text-sm font-bold block mb-1">
                  De R$ 67,00
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
                  POR APENAS <span className="text-[#002699]">R$ 10,00</span>
                </div>
                <button
                  onClick={() => handleOpenProductDetails()}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm sm:text-base font-bold py-3.5 px-6 rounded-full transition-all cursor-pointer shadow-md"
                >
                  QUERO O PLANO BÁSICO
                </button>
                <a
                  href={CHECKOUT_BASIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2.5 text-xs text-slate-500 hover:text-slate-900 underline"
                >
                  Ou ir direto para o checkout de R$ 10,00 →
                </a>
              </div>
            </div>

            {/* PLANO PROFISSIONAL (🔥 MAIS VENDIDO) */}
            <div className="bg-[#002699] text-white rounded-3xl p-6 sm:p-8 border-2 border-amber-400 shadow-2xl flex flex-col justify-between relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-blue-950 font-black text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                🔥 MAIS VENDIDO
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-300 block mb-1">
                  PLANO PROFISSIONAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Biblioteca Completa + 10 Bônus
                </h3>
                <p className="text-blue-200 text-xs sm:text-sm mb-6">
                  O pacote completo de direitos, planilhas, simuladores e segurança
                </p>

                <div className="border-t border-blue-800/80 pt-5 mb-6">
                  <p className="text-xs font-black uppercase text-amber-300 tracking-wider mb-3">
                    VOCÊ RECEBE:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm font-medium text-blue-100">
                    {[
                      '15 e-books e guias',
                      'Calculadoras e planilhas',
                      'Modelos de requerimentos',
                      'Guias de holerite',
                      'Guia PPP e LTCAT',
                      'Conteúdo de insalubridade e periculosidade',
                      'Formação completa em segurança industrial',
                      'Certificado de conclusão',
                      '10 bônus exclusivos',
                      'Acesso vitalício',
                      'Download imediato',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 stroke-[3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-blue-800 text-center">
                <span className="text-blue-300 line-through text-xs sm:text-sm font-bold block mb-1">
                  De R$ 197,00
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white mb-6">
                  POR APENAS <span className="text-3xl sm:text-4xl text-[#ffbe00]">R$ 27,90</span>
                </div>
                <a
                  href={CHECKOUT_PRO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-base sm:text-lg font-black py-4 px-6 rounded-full shadow-lg shadow-black/40 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-amber-300"
                >
                  <span>QUERO O PLANO PROFISSIONAL</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ⚪ SECTION: GARANTIA DE 7 DIAS */}
      <section className="py-16 sm:py-20 px-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center">
          <div className="w-16 h-16 rounded-full bg-amber-400 text-blue-950 flex items-center justify-center mx-auto mb-6 shadow-md shadow-amber-400/30">
            <ShieldCheck className="w-9 h-9 stroke-[2.5]" />
          </div>

          <span className="bg-blue-100 text-[#002699] text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-3">
            🛡️ GARANTIA
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-4 tracking-tight">
            Você tem 7 dias para conhecer o material
          </h2>

          <p className="text-slate-600 text-base leading-relaxed mb-6">
            Acesse os conteúdos, confira os guias e veja se o método faz sentido para você. Se dentro de 7 dias você entender que o material não é adequado para suas necessidades, poderá solicitar o reembolso conforme as condições da plataforma de pagamento.
          </p>

          <span className="inline-block bg-emerald-100 text-emerald-800 font-black text-sm px-6 py-2 rounded-full">
            7 DIAS DE GARANTIA INCONDICIONAL
          </span>
        </div>
      </section>

      {/* ⚪ SECTION: PERGUNTAS FREQUENTES */}
      <section className="py-16 sm:py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-[#002699] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
            ❓ PERGUNTAS FREQUENTES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#002266] mb-3 tracking-tight">
            Tire suas dúvidas sobre a formação
          </h2>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-[#002266] text-sm sm:text-base cursor-pointer hover:bg-slate-50/70"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-800 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 🔵 FINAL CALL TO ACTION (A SUA MELHOR CHAMADA FINAL) */}
      <section className="bg-[#002699] text-white py-16 sm:py-24 px-4 text-center border-t border-blue-900">
        <div className="max-w-3xl mx-auto">
          <span className="bg-blue-950/70 text-amber-300 border border-blue-400/30 text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4">
            🚨 A SUA MELHOR CHAMADA FINAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight">
            Descubra se Existe Dinheiro que Pode Estar{' '}
            <span className="text-[#ffcc00]">Faltando no Seu Holerite</span>
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Aprenda a conferir insalubridade, periculosidade, horas extras, FGTS, PPP, LTCAT e aposentadoria especial, além de desenvolver conhecimentos importantes sobre segurança industrial.
          </p>

          <p className="text-amber-300 font-extrabold text-base sm:text-lg mb-8">
            Tenha acesso à biblioteca completa + 10 bônus por apenas R$ 27,90.
          </p>

          <button
            onClick={() => handleOpenProductDetails()}
            className="w-full sm:w-auto min-w-[320px] bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 text-lg sm:text-xl font-black py-4 px-10 rounded-full shadow-2xl shadow-black/40 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-amber-300 mb-4"
          >
            <span>QUERO DESCOBRIR MEUS DIREITOS</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          <p className="text-blue-200 text-xs sm:text-sm font-medium mb-10">
            Acesso imediato • Download digital • Garantia de 7 dias
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-blue-200 font-medium pt-8 border-t border-blue-800/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Compra 100% segura</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-amber-300" />
              <span>Materiais práticos em Excel & PDF</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-300" />
              <span>Acesso vitalício</span>
            </div>
          </div>
        </div>
      </section>

      {/* ⬛ FOOTER */}
      <footer className="bg-[#00175a] text-blue-200 py-8 px-4 border-t border-blue-950">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5 font-bold text-white text-sm">
            <div className="w-7 h-7 rounded-lg bg-amber-400 text-blue-950 flex items-center justify-center font-black">
              <Scale className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span>Direitos e Dinheiro do Trabalhador Industrial</span>
          </div>

          <p className="text-center sm:text-right text-blue-300">
            © 2026 Direitos e Dinheiro do Trabalhador Industrial. Formação de caráter livre. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* 📦 DETALHES DO PRODUTO POPUP (R$ 27,90 SUGERIDO NO LUGAR DE R$ 10,00) */}
      <ProductDetailsModal
        isOpen={isProductDetailsOpen}
        onClose={() => setIsProductDetailsOpen(false)}
        checkoutProUrl={CHECKOUT_PRO_URL}
        checkoutBasicUrl={CHECKOUT_BASIC_URL}
        onProceedToCheckout={() => {
          setIsProductDetailsOpen(false);
          window.open(CHECKOUT_PRO_URL, '_blank', 'noopener,noreferrer') || (window.location.href = CHECKOUT_PRO_URL);
        }}
        onProceedBasic={() => {
          setIsProductDetailsOpen(false);
          window.open(CHECKOUT_BASIC_URL, '_blank', 'noopener,noreferrer') || (window.location.href = CHECKOUT_BASIC_URL);
        }}
      />

      {/* 💳 CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={selectedPlan}
        onSelectPlan={(plan) => setSelectedPlan(plan)}
      />

    </div>
  );
}

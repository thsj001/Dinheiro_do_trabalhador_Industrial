import React, { useState } from 'react';
import {
  X,
  Lock,
  QrCode,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Copy,
  Check,
  Zap,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: 'pro' | 'basic';
  onSelectPlan: (plan: 'pro' | 'basic') => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  selectedPlan,
  onSelectPlan,
}: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    name: 'Marcos Vinícius da Silva',
    email: 'marcos.trabalhador@gmail.com',
    phone: '(11) 98765-4321',
  });

  if (!isOpen) return null;

  const currentPrice = selectedPlan === 'pro' ? 'R$ 47,00' : 'R$ 19,90';
  const oldPrice = selectedPlan === 'pro' ? 'R$ 197,00' : 'R$ 67,00';

  const dummyPixCode =
    '00020126580014br.gov.bcb.pix0136direitos-trabalhador-industrial-47005204000053039865802BR5925DIREITOS TRABALHADOR6009SAO PAULO62070503***6304E8A9';

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(dummyPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderComplete(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative text-slate-800 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#002699] text-white p-4 sm:p-5 text-center relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-blue-200 hover:text-white p-1 rounded-full bg-blue-950/40 hover:bg-blue-950 cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 text-amber-300 font-bold text-xs uppercase tracking-wider mb-1">
            <Lock className="w-3.5 h-3.5" />
            <span>Ambiente 100% Criptografado & Seguro</span>
          </div>
          <h3 className="text-xl font-black text-white">
            Liberar Acesso Imediato
          </h3>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {!isOrderComplete ? (
            <>
              {/* Plan Switcher */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <button
                  type="button"
                  onClick={() => onSelectPlan('pro')}
                  className={`p-3 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                    selectedPlan === 'pro'
                      ? 'border-[#002699] bg-blue-50/60 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-[10px] font-black uppercase text-blue-950 bg-amber-300 px-2 py-0.5 rounded-full inline-block mb-1">
                    🔥 MAIS VENDIDO
                  </span>
                  <p className="font-black text-slate-900 text-sm">Plano Profissional</p>
                  <p className="text-[11px] text-slate-500 mb-1">15 Módulos + 10 Bônus</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-slate-400 line-through">R$ 197</span>
                    <span className="text-base font-black text-[#002699]">R$ 47,00</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectPlan('basic')}
                  className={`p-3 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                    selectedPlan === 'basic'
                      ? 'border-[#002699] bg-blue-50/60 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-[10px] font-bold text-slate-500 block mb-1">
                    BÁSICO
                  </span>
                  <p className="font-black text-slate-900 text-sm">Plano Básico</p>
                  <p className="text-[11px] text-slate-500 mb-1">Fundamentos em PDF</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-slate-400 line-through">R$ 67</span>
                    <span className="text-base font-black text-slate-800">R$ 19,90</span>
                  </div>
                </button>
              </div>

              {/* Payment Methods */}
              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === 'pix'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-emerald-600" />
                  <span>PIX (Liberação Imediata)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'border-blue-600 bg-blue-50 text-blue-800 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#002699]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    E-mail (onde você receberá os links e planilhas)
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#002699]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp com DDD
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#002699]"
                  />
                </div>

                {paymentMethod === 'pix' ? (
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 space-y-2">
                    <p className="font-bold flex items-center gap-1.5 text-emerald-800">
                      <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>Chave PIX gerada automaticamente com aprovação em 3 segundos</span>
                    </p>
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-emerald-200">
                      <input
                        type="text"
                        readOnly
                        value={dummyPixCode}
                        className="bg-transparent border-none text-[10px] text-slate-500 font-mono w-full truncate focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleCopyPix}
                        className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] rounded flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        {copiedPix ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        placeholder="•••• •••• •••• ••••"
                        defaultValue="4532 •••• •••• 8821"
                        className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#002699]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Validade (MM/AA)"
                        defaultValue="08/29"
                        className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#002699]"
                      />
                      <input
                        type="text"
                        placeholder="CVV (3 dígitos)"
                        defaultValue="842"
                        className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#002699]"
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full mt-3 bg-[#ffbe00] hover:bg-[#ffcd29] text-blue-950 font-black text-base py-3.5 px-6 rounded-xl shadow-lg shadow-amber-400/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-amber-300"
                >
                  <Lock className="w-4 h-4" />
                  <span>
                    CONCLUIR PAGAMENTO ({currentPrice})
                  </span>
                </button>
              </form>
            </>
          ) : (
            /* Success / Access Granted Screen */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-1">
                Pagamento Confirmado!
              </h4>
              <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mb-4">
                Acesso Liberado com Sucesso
              </p>

              <p className="text-slate-600 text-sm mb-6 max-w-sm mx-auto">
                Parabéns, <strong>{formData.name}</strong>! Seu acesso à formação{' '}
                <strong>Direitos e Dinheiro do Trabalhador Industrial</strong> foi liberado.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-left mb-6 space-y-2 text-xs text-blue-950">
                <p className="font-bold flex items-center gap-1.5 text-[#002266]">
                  <FileCheck2 className="w-4 h-4 text-blue-700" />
                  <span>Enviado para seu e-mail ({formData.email}):</span>
                </p>
                <p>✓ Link da área de membros e biblioteca digital</p>
                <p>✓ 15 E-books e guias sobre holerite, insalubridade e segurança</p>
                <p>✓ Calculadora de Retroativos em Excel + Planilha FGTS</p>
                <p>✓ Modelos prontos de solicitação de PPP e LTCAT</p>
                {selectedPlan === 'pro' && (
                  <p className="font-bold text-amber-700">✓ Todos os 10 Bônus Exclusivos inclusos</p>
                )}
              </div>

              <button
                onClick={() => {
                  setIsOrderComplete(false);
                  onClose();
                }}
                className="w-full bg-[#002699] hover:bg-blue-800 text-white font-bold text-sm py-3.5 px-6 rounded-xl cursor-pointer shadow-md"
              >
                Acessar Meus Materiais Agora
              </button>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Garantia de 7 Dias
            </span>
            <span>Acesso Imediato & Vitalício</span>
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import {
  ScanLine,
  ShoppingBag,
  Zap,
  Camera,
  ShieldCheck,
  Layers,
  TrendingDown,
  Users,
  Boxes,
  ArrowDown,
  CheckCircle2,
  Smartphone,
  Store,
  Eye,
  X,
  Shield,
  UserX,
  Lock,
} from "lucide-react";

/* ------------------------------------------------------------------
   VIA EXPRESSA — One-Page Presentation
   Cor primária obrigatória: #1E52A8 (Azul Carrefour)
   Fundo: #111827
   Uso de estilos inline para as cores de marca (garante fidelidade
   do hexadecimal em qualquer ambiente de build).
-------------------------------------------------------------------*/

const BRAND = "#1E52A8";
const BRAND_SOFT = "rgba(30, 82, 168, 0.14)";
const BRAND_LINE = "rgba(30, 82, 168, 0.45)";
const BG = "#111827";
const INK = "#F8FAFC";
const MUTED = "#94A3B8";

/* --- utilitário: revelar no scroll (respeita prefers-reduced-motion) --- */
function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll("[data-reveal]");
    if (reduce) {
      els.forEach((el) => (el.style.opacity = "1"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity .7s ease, transform .7s ease";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

/* --- blocos base --------------------------------------------------- */

function Section({ children, id, className = "" }) {
  return (
    <section
      id={id}
      className={
        "relative w-full min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16 py-20 lg:py-24 " +
        className
      }
    >
      <div className="w-full max-w-6xl 2xl:max-w-[1500px] mx-auto">{children}</div>
    </section>
  );
}

function Eyebrow({ children }) {
  return (
    <div
      data-reveal
      className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full text-xs sm:text-sm 2xl:text-lg font-semibold tracking-[0.18em] uppercase"
      style={{ color: BRAND, background: BRAND_SOFT, border: `1px solid ${BRAND_LINE}` }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND }} />
      {children}
    </div>
  );
}

function H2({ children }) {
  return (
    <h2
      data-reveal
      className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
      style={{ color: INK }}
    >
      {children}
    </h2>
  );
}

function Lead({ children, className = "" }) {
  return (
    <p
      data-reveal
      className={
        "text-base sm:text-xl lg:text-2xl 2xl:text-3xl leading-relaxed " + className
      }
      style={{ color: MUTED }}
    >
      {children}
    </p>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      data-reveal
      className={"rounded-2xl p-6 sm:p-8 2xl:p-10 h-full " + className}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(6px)",
      }}
    >
      {children}
    </div>
  );
}

import carrefourLogo from "./assets/carrefour-logo.png";
import telaQrCode from "./assets/app-screens/passo1-qrcode.png";
import telaAbrirApp from "./assets/app-screens/passo2-abrir-app.png";
import telaInicial from "./assets/app-screens/passo3-tela-inicial.png";
import telaCamera from "./assets/app-screens/passo4-camera.png";
import telaCarrinho from "./assets/app-screens/passo5-carrinho.png";
import telaCodigoOperador from "./assets/app-screens/passo6-codigo-operador.png";
import telaCupomFiscal from "./assets/app-screens/passo7-cupom-fiscal.png";

function CarrefourMark({ size = 56 }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={carrefourLogo}
        alt="Carrefour"
        width={size}
        height={size}
        className="flex-shrink-0 rounded-[22%]"
        style={{ width: size, height: size }}
      />
      <div className="leading-tight">
        <div
          className="text-lg sm:text-2xl 2xl:text-3xl font-extrabold tracking-tight"
          style={{ color: INK }}
        >
          Via Expressa
        </div>
        <div
          className="text-[11px] sm:text-sm 2xl:text-base font-semibold tracking-[0.22em] uppercase"
          style={{ color: BRAND }}
        >
          Checkout sem fricção
        </div>
      </div>
    </div>
  );
}

/* --- QR code real: matriz gerada para checkout-rapido-hiper.vercel.app --- */
const QR_MATRIX = [
  "11111110001111111111001111111",
  "10000010000111111010001000001",
  "10111010001110000100101011101",
  "10111010010100100001001011101",
  "10111010001011111110001011101",
  "10000010101001111011001000001",
  "11111110101010101010101111111",
  "00000000010100110110000000000",
  "10010110101101101001010100000",
  "01001100011011101000111001001",
  "11111110100001101011101101110",
  "10000101111111100001101000110",
  "10010111101101001100011001011",
  "00110000010100100001110000000",
  "01101110000010001110110011111",
  "10010001010001000111001001010",
  "10111011111101101101110000010",
  "01110100011000101010001101001",
  "10110011100011000010111010011",
  "00011001100111010101001110011",
  "10001010011010101000111110100",
  "00000000110111001100100010111",
  "11111110001111100000101010010",
  "10000010111111001010100011110",
  "10111010010000100100111110000",
  "10111010101000100111001111110",
  "10111010010101101011110011101",
  "10000010001011001101100010010",
  "11111110100011010111100011010",
];

function QrCode({ viewBoxSize = 320 }) {
  const n = QR_MATRIX.length;
  const cell = viewBoxSize / n;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      role="img"
      aria-label="QR code do piloto Via Expressa"
    >
      <rect x="0" y="0" width={viewBoxSize} height={viewBoxSize} fill="#FFFFFF" />
      {QR_MATRIX.map((row, y) =>
        [...row].map((c, x) =>
          c === "1" ? (
            <rect
              key={`${x}-${y}`}
              x={x * cell}
              y={y * cell}
              width={cell + 0.5}
              height={cell + 0.5}
              fill="#0B1220"
            />
          ) : null
        )
      )}
    </svg>
  );
}

export default function ViaExpressa() {
  useReveal();
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setPulse((p) => !p), 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="min-h-screen w-full antialiased scroll-smooth"
      style={{
        background: BG,
        color: INK,
        fontFamily:
          "Inter, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* ============ 1. HERO ============ */}
      <Section id="hero">
        <div className="flex flex-col items-start">
          <div data-reveal className="mb-10 sm:mb-16">
            <CarrefourMark size={56} />
          </div>

          <h1
            data-reveal
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[8.5rem] font-extrabold leading-[0.98] tracking-tight max-w-5xl 2xl:max-w-none"
          >
            O Fim do Gargalo{" "}
            <span style={{ color: BRAND }}>no Checkout.</span>
          </h1>

          <div
            data-reveal
            className="mt-8 sm:mt-10 h-1 w-24 sm:w-40 rounded-full"
            style={{ background: BRAND }}
          />

          <p
            data-reveal
            className="mt-8 sm:mt-10 max-w-3xl 2xl:max-w-5xl text-base sm:text-xl lg:text-2xl 2xl:text-4xl leading-relaxed"
            style={{ color: MUTED }}
          >
            Como transformar 1 operador na produtividade de 3, estancar a evasão
            de clientes e eliminar o tempo de ensacolamento —{" "}
            <span className="font-semibold" style={{ color: INK }}>
              sem trocar o ERP da loja.
            </span>
          </p>

          <div
            data-reveal
            className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="px-7 py-4 2xl:px-10 2xl:py-6 rounded-xl font-bold text-base sm:text-lg 2xl:text-2xl transition-transform hover:scale-[1.03] focus:outline-none focus:ring-4"
              style={{ background: BRAND, color: "#FFFFFF" }}
            >
              Ver o piloto em operação
            </button>
            <span
              className="text-sm sm:text-base 2xl:text-xl"
              style={{ color: MUTED }}
            >
              Testado em loja real · cupom fiscal emitido
            </span>
          </div>

          <div
            className="mt-16 sm:mt-24 flex items-center gap-3 text-sm 2xl:text-xl"
            style={{ color: MUTED, opacity: pulse ? 1 : 0.45, transition: "opacity .6s" }}
          >
            <ArrowDown size={18} /> role para continuar
          </div>
        </div>
      </Section>

      {/* ============ 1.5. MANIFESTO — FAST TRACK / FRICÇÃO ZERO ============ */}
      <Section id="manifesto-fast-track" className="py-16 sm:py-24 lg:py-32">
        <div
          data-reveal
          className="relative max-w-5xl mx-auto text-center px-4 sm:px-8"
        >
          <span
            className="block text-6xl sm:text-8xl lg:text-9xl font-black leading-none select-none"
            style={{ color: BRAND_SOFT }}
          >
            "
          </span>
          <p
            className="-mt-8 sm:-mt-12 text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold leading-tight tracking-tight"
            style={{ color: INK }}
          >
            Entregamos um fluxo{" "}
            <span style={{ color: BRAND }}>Fast Track</span> — o cliente passa{" "}
            <span style={{ color: BRAND }}>20 itens em 1 minuto</span> — porque
            nossa tecnologia é{" "}
            <span style={{ color: BRAND }}>Fricção Zero</span>: sem download de
            app, sem cadastro, sem descarregar o carrinho.
          </p>
        </div>
      </Section>

      {/* ============ 2. O DESAFIO DA FRICÇÃO ============ */}
      <Section id="fricção">
        <Eyebrow>O desafio</Eyebrow>
        <H2>
          O mercado tentou o “Scan &amp; Go”,
          <br className="hidden sm:block" /> mas esbarrou{" "}
          <span style={{ color: BRAND }}>no download.</span>
        </H2>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          <Card>
            <Smartphone size={34} style={{ color: BRAND }} />
            <h3 className="mt-6 text-xl sm:text-2xl 2xl:text-3xl font-bold">
              O cliente foge de cadastros
            </h3>
            <p
              className="mt-3 text-sm sm:text-base 2xl:text-xl leading-relaxed"
              style={{ color: MUTED }}
            >
              Baixar aplicativo, criar conta, aceitar termos. Cada etapa derruba
              uma parte da adesão antes mesmo da primeira compra.
            </p>
          </Card>

          <Card>
            <Store size={34} style={{ color: BRAND }} />
            <h3 className="mt-6 text-xl sm:text-2xl 2xl:text-3xl font-bold">
              A loja precisa de solução sem atrito
            </h3>
            <p
              className="mt-3 text-sm sm:text-base 2xl:text-xl leading-relaxed"
              style={{ color: MUTED }}
            >
              Projetos que exigem troca de PDV, integração sistêmica e obra civil
              morrem no orçamento antes de chegar ao chão de loja.
            </p>
          </Card>

          <div
            data-reveal
            className="rounded-2xl p-6 sm:p-8 2xl:p-10 h-full"
            style={{ background: BRAND, color: "#FFFFFF" }}
          >
            <Zap size={34} />
            <h3 className="mt-6 text-xl sm:text-2xl 2xl:text-3xl font-bold">
              Nossa solução: Fricção Zero
            </h3>
            <p className="mt-3 text-sm sm:text-base 2xl:text-xl leading-relaxed opacity-95">
              100% web. O cliente aponta a câmera e já está operando. Sem
              download, sem cadastro, sem catraca.
            </p>
          </div>
        </div>
      </Section>

      {/* ============ 3. ARQUITETURA LOGÍSTICA ============ */}
      <Section id="arquitetura">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Eyebrow>Arquitetura</Eyebrow>
            <H2>
              Uma tecnologia que respeita{" "}
              <span style={{ color: BRAND }}>o chão de loja.</span>
            </H2>
            <Lead className="mt-8">
              Leitura fracionada pelo cliente: o app extrai EAN, PLU e peso da
              etiqueta da balança durante a compra. No momento do pagamento, o
              sistema consolida tudo e gera o código longo.
            </Lead>
          </div>

          <div
            data-reveal
            className="rounded-2xl p-7 sm:p-10 2xl:p-14"
            style={{ background: BRAND_SOFT, border: `1px solid ${BRAND_LINE}` }}
          >
            <Layers size={40} style={{ color: BRAND }} />
            <p className="mt-6 text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold leading-snug">
              O seu PDV físico lê a tela do celular como se estivesse lendo a
              própria bandeja.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Zero integração sistêmica complexa",
                "A auditoria visual permanece ativa",
                "O ERP e o fiscal continuam exatamente como estão",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    style={{ color: BRAND, flexShrink: 0, marginTop: 2 }}
                  />
                  <span className="text-sm sm:text-lg 2xl:text-2xl">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============ 4. O NOVO FLUXO ============ */}
      <Section id="fluxo">
        <Eyebrow>O novo fluxo</Eyebrow>
        <H2>
          20 itens em <span style={{ color: BRAND }}>60 segundos.</span>
        </H2>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {[
            {
              icon: <ScanLine size={38} />,
              step: "01",
              title: "Bipa",
              text: "O cliente assume o controle. Cada item é lido com a câmera do próprio celular, no corredor, enquanto compra.",
            },
            {
              icon: <ShoppingBag size={38} />,
              step: "02",
              title: "Ensacola no corredor",
              text: "Fim do balcão de ensacolamento. O produto vai direto do gancho para a ecobag. O tempo morto desaparece.",
            },
            {
              icon: <ShieldCheck size={38} />,
              step: "03",
              title: "Auditoria visual e rajada",
              text: "O operador confere a sacola e lê a rajada de códigos na tela com o leitor do caixa. Cupom fiscal em segundos.",
            },
          ].map((s) => (
            <Card key={s.step}>
              <div className="flex items-center justify-between">
                <div style={{ color: BRAND }}>{s.icon}</div>
                <span
                  className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold"
                  style={{ color: "rgba(255,255,255,0.10)" }}
                >
                  {s.step}
                </span>
              </div>
              <h3 className="mt-6 text-xl sm:text-2xl 2xl:text-3xl font-bold">
                {s.title}
              </h3>
              <p
                className="mt-3 text-sm sm:text-base 2xl:text-xl leading-relaxed"
                style={{ color: MUTED }}
              >
                {s.text}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============ 4.5. PASSO A PASSO REAL DO APP ============ */}
      <Section id="app-real">
        <Eyebrow>Direto do celular</Eyebrow>
        <H2>
          Não é conceito. <span style={{ color: BRAND }}>É o app rodando agora.</span>
        </H2>
        <Lead className="mt-6 max-w-3xl">
          Sete telas, do QR code ao cupom fiscal: a jornada completa, real,
          testada em loja.
        </Lead>

        <div className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5">
          {[
            {
              n: "01",
              img: telaQrCode,
              t: "Aponta pro QR",
              d: "Sem instalar nada — a câmera do celular já abre o app.",
            },
            {
              n: "02",
              img: telaAbrirApp,
              t: "Abre na hora",
              d: "Carregamento instantâneo, direto no navegador.",
            },
            {
              n: "03",
              img: telaInicial,
              t: "Toca em Escanear",
              d: "Catálogo da loja já carregado, carrinho vazio pronto pra começar.",
            },
            {
              n: "04",
              img: telaCamera,
              t: "Aponta a câmera",
              d: "Lê o código de barras direto na gôndola, sem leitor físico.",
            },
            {
              n: "05",
              img: telaCarrinho,
              t: "Carrinho em tempo real",
              d: "Cada item somado, com preço e subtotal atualizados na hora.",
            },
            {
              n: "06",
              img: telaCodigoOperador,
              t: "Código pro operador",
              d: "No caixa, mostra a rajada — item por item — pro operador ler.",
            },
            {
              n: "07",
              img: telaCupomFiscal,
              t: "Cupom fiscal emitido",
              d: "Testado em loja real — a compra fecha certinho, com nota fiscal.",
            },
          ].map((s) => (
            <div key={s.n} data-reveal className="flex flex-col items-center">
              <div
                className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  border: `1px solid ${BRAND_LINE}`,
                  boxShadow: `0 0 40px ${BRAND_SOFT}`,
                  aspectRatio: "9 / 16",
                  background: "#0B1220",
                }}
              >
                <img
                  src={s.img}
                  alt={s.t}
                  className="w-full h-full object-contain"
                />
                <span
                  className="absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full text-xs sm:text-sm font-extrabold"
                  style={{ background: BRAND, color: "#FFFFFF" }}
                >
                  {s.n}
                </span>
              </div>
              <h3 className="mt-4 text-sm sm:text-lg 2xl:text-xl font-bold text-center">
                {s.t}
              </h3>
              <p
                className="mt-1.5 text-xs sm:text-sm 2xl:text-base text-center leading-snug"
                style={{ color: MUTED }}
              >
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ 5. ADEQUAÇÃO CUSTO ZERO ============ */}
      <Section id="piloto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Eyebrow>Implantação</Eyebrow>
            <H2>
              Logística do piloto <span style={{ color: BRAND }}>em 48 horas.</span>
            </H2>
            <Lead className="mt-8">
              Custo ZERO de infraestrutura. Não arrancamos esteiras, não
              quebramos balcões, não paramos a operação.
            </Lead>
          </div>

          <Card>
            <Boxes size={38} style={{ color: BRAND }} />
            <h3 className="mt-6 text-xl sm:text-2xl 2xl:text-3xl font-bold">
              O ambiente molda o fluxo
            </h3>
            <p
              className="mt-4 text-sm sm:text-lg 2xl:text-2xl leading-relaxed"
              style={{ color: MUTED }}
            >
              Isolamos o balcão do caixa rápido atual com um display de produtos
              de alta margem. A barreira psicológica impede o descarregamento —
              o cliente simplesmente não descarrega onde não há esteira visível.
            </p>
            <div
              className="mt-8 rounded-xl p-5 2xl:p-7 text-sm sm:text-base 2xl:text-xl font-semibold"
              style={{ background: BRAND_SOFT, color: INK, border: `1px solid ${BRAND_LINE}` }}
            >
              Zero CAPEX · Zero obra · Zero parada operacional
            </div>
          </Card>
        </div>

        {/* Sinalização Digital Reaproveitada */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div data-reveal>
            <span
              className="inline-block text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase mb-4"
              style={{ color: BRAND }}
            >
              Sinalização digital reaproveitada
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold leading-tight">
              A entrada da ilha já está{" "}
              <span style={{ color: BRAND }}>ligada — no seu estoque.</span>
            </h3>
            <p
              className="mt-6 text-sm sm:text-lg lg:text-xl 2xl:text-2xl leading-relaxed"
              style={{ color: MUTED }}
            >
              A entrada da Via Expressa é sinalizada por uma TV de 55"
              posicionada na vertical, usando o próprio estoque de
              eletrodomésticos da loja — a mesma TV que já está ligada no
              mostruário do setor de Eletro.
            </p>
            <div
              className="mt-8 rounded-xl p-5 2xl:p-7 text-sm sm:text-base 2xl:text-xl font-semibold"
              style={{ background: BRAND_SOFT, color: INK, border: `1px solid ${BRAND_LINE}` }}
            >
              Custo Zero de Ativação — nenhum equipamento novo comprado
            </div>
          </div>

          {/* Mockup vertical da TV */}
          <div data-reveal className="flex justify-center">
            <div
              className="relative w-full max-w-[280px] sm:max-w-[320px] rounded-3xl overflow-hidden flex flex-col"
              style={{
                aspectRatio: "9 / 16",
                background: BG,
                border: `3px solid ${BRAND_LINE}`,
                boxShadow: `0 0 60px ${BRAND_SOFT}`,
              }}
            >
              {/* topo — logo */}
              <div className="flex flex-col items-center justify-center pt-8 pb-4 px-4">
                <img
                  src={carrefourLogo}
                  alt="Via Expressa"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-[22%]"
                />
                <span
                  className="mt-2 text-xs sm:text-sm font-extrabold tracking-tight"
                  style={{ color: INK }}
                >
                  Via Expressa
                </span>
              </div>

              {/* centro — QR gigante */}
              <div className="flex-1 flex items-center justify-center px-8">
                <div className="w-full max-w-[160px] sm:max-w-[190px] bg-white rounded-xl p-3">
                  <QrCode viewBoxSize={320} />
                </div>
              </div>

              {/* base — 3 regras */}
              <div
                className="px-4 pb-6 pt-4 space-y-2"
                style={{ borderTop: `1px solid ${BRAND_LINE}` }}
              >
                {[
                  "Até 20 itens",
                  "Ensacole no corredor",
                  "Saia em 60s",
                ].map((r) => (
                  <div key={r} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: BRAND }}
                    />
                    <span
                      className="text-[11px] sm:text-xs font-semibold"
                      style={{ color: MUTED }}
                    >
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ 6. ROI ============ */}
      <Section id="roi">
        <div className="text-center flex flex-col items-center">
          <Eyebrow>Retorno</Eyebrow>
          <div
            data-reveal
            className="text-5xl sm:text-8xl lg:text-9xl 2xl:text-[12rem] font-extrabold leading-none tracking-tight"
            style={{ color: BRAND }}
          >
            R$ 8.000
          </div>
          <div
            data-reveal
            className="mt-3 text-xl sm:text-3xl 2xl:text-5xl font-bold"
            style={{ color: INK }}
          >
            / mês
          </div>
          <p
            data-reveal
            className="mt-6 max-w-3xl 2xl:max-w-5xl text-base sm:text-2xl 2xl:text-3xl"
            style={{ color: MUTED }}
          >
            Redução de custo fixo por ilha implementada.
          </p>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 w-full text-left">
            {[
              {
                icon: <Users size={32} />,
                t: "1 operador absorve o TMA de 3 caixas",
                d: "A produtividade sobe sem contratar e sem abrir novos pontos de venda.",
              },
              {
                icon: <TrendingDown size={32} />,
                t: "Eliminamos escalas extras",
                d: "O pico de fluxo deixa de exigir hora extra e reforço de escala no fim de semana.",
              },
              {
                icon: <Store size={32} />,
                t: "Paramos de canibalizar a loja",
                d: "Gôndola, açougue e padaria mantêm sua mão de obra onde ela gera margem.",
                setores: ["Mercearia", "FLV", "Açougue", "Padaria", "Não Alimentar"],
              },
              {
                icon: <Eye size={32} />,
                t: "Menos devolução no caixa, menos perda",
                d: "O cliente vê o subtotal em tempo real enquanto compra. Se o valor passar do orçamento, ele ajusta o carrinho ali mesmo, no corredor — não na fila. Chega ao caixa só com o que vai levar, reduzindo devolução e a perda que ela gera.",
              },
            ].map((p) => (
              <Card key={p.t}>
                <div style={{ color: BRAND }}>{p.icon}</div>
                <h3 className="mt-5 text-lg sm:text-xl 2xl:text-2xl font-bold leading-snug">
                  {p.t}
                </h3>
                <p
                  className="mt-3 text-sm sm:text-base 2xl:text-xl leading-relaxed"
                  style={{ color: MUTED }}
                >
                  {p.d}
                </p>
                {p.setores && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.setores.map((s) => (
                      <span
                        key={s}
                        className="text-xs sm:text-sm 2xl:text-base font-semibold px-3 py-1.5 rounded-full"
                        style={{
                          color: BRAND,
                          background: BRAND_SOFT,
                          border: `1px solid ${BRAND_LINE}`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ 6.7. CAPACIDADE DE ATENDIMENTO / CUSTO DE NÃO AGIR ============ */}
      <Section id="capacidade">
        <Eyebrow>O que está em jogo</Eyebrow>
        <H2>
          Mesma ilha, <span style={{ color: BRAND }}>até 5x mais gente atendida.</span>
        </H2>
        <Lead className="mt-6 max-w-3xl">
          Loja aberta das 6h às 23h — 17 horas, 1.020 minutos. Nesse mesmo
          intervalo, veja a diferença de capacidade por operador.
        </Lead>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <Card>
            <span
              className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase"
              style={{ color: MUTED }}
            >
              Caixa tradicional
            </span>
            <div className="mt-3 flex items-baseline gap-2">
              <span
                className="text-4xl sm:text-6xl 2xl:text-7xl font-extrabold"
                style={{ color: INK }}
              >
                204–340
              </span>
              <span className="text-sm sm:text-lg" style={{ color: MUTED }}>
                clientes/dia
              </span>
            </div>
            <p
              className="mt-4 text-sm sm:text-base 2xl:text-lg leading-relaxed"
              style={{ color: MUTED }}
            >
              3 a 5 minutos por cliente (até 20 itens), do início do
              escaneamento ao pagamento.
            </p>
          </Card>

          <div
            data-reveal
            className="rounded-2xl p-6 sm:p-8 2xl:p-10 h-full"
            style={{ background: BRAND, color: "#FFFFFF" }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase opacity-90">
              Via Expressa
            </span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-4xl sm:text-6xl 2xl:text-7xl font-extrabold">
                680–1.020
              </span>
              <span className="text-sm sm:text-lg opacity-90">clientes/dia</span>
            </div>
            <p className="mt-4 text-sm sm:text-base 2xl:text-lg leading-relaxed opacity-95">
              1 a 1,5 minuto por cliente — o item já foi escaneado na
              gôndola, no caixa só resta auditoria e pagamento.
            </p>
          </div>
        </div>

        <div
          data-reveal
          className="mt-8 sm:mt-10 rounded-2xl p-6 sm:p-8 2xl:p-10"
          style={{ background: BRAND_SOFT, border: `1px solid ${BRAND_LINE}` }}
        >
          <p className="text-base sm:text-xl 2xl:text-2xl font-bold leading-snug">
            Cada mês sem o piloto rodando é R$ 8.000 não economizados por
            ilha — e até 680 atendimentos por dia deixados na mesa, por
            operador, todos os dias em que a fila continuar do jeito que
            está hoje.
          </p>
        </div>
      </Section>

      {/* ============ 6.8. NÓS VS. O MERCADO ============ */}
      <Section id="nos-vs-mercado">
        <Eyebrow>Vantagem competitiva</Eyebrow>
        <H2>
          Por que a Via Expressa é{" "}
          <span style={{ color: BRAND }}>o único modelo escalável?</span>
        </H2>
        <Lead className="mt-6 max-w-3xl">
          A tecnologia não pode ser mais cara e complexa do que o problema
          que ela tenta resolver.
        </Lead>

        {/* cabeçalho das colunas */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-8">
          <div
            data-reveal
            className="rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
          >
            <span
              className="text-xs sm:text-base 2xl:text-xl font-bold tracking-wide uppercase"
              style={{ color: "#9CA3AF" }}
            >
              O Mercado
            </span>
            <span
              className="block text-[10px] sm:text-sm mt-1"
              style={{ color: "#6B7280" }}
            >
              Modelos atuais
            </span>
          </div>
          <div
            data-reveal
            className="rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-center"
            style={{ background: BRAND_SOFT, border: `1px solid ${BRAND_LINE}` }}
          >
            <span
              className="text-xs sm:text-base 2xl:text-xl font-bold tracking-wide uppercase"
              style={{ color: BRAND }}
            >
              A Via Expressa
            </span>
            <span className="block text-[10px] sm:text-sm mt-1" style={{ color: BRAND }}>
              Nosso projeto
            </span>
          </div>
        </div>

        {/* linhas de comparação */}
        <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
          {[
            {
              n: "01",
              t: "O Obstáculo do Software",
              mercado:
                "Scan & Go tradicional exige download de app pesado (150MB), criação de conta e validação de e-mail no meio do corredor. Alta taxa de abandono.",
              nos:
                "100% Web, Fricção Zero. O cliente aponta a câmera pro QR Code e o sistema abre em 2 segundos. Sem senhas, sem instalação.",
            },
            {
              n: "02",
              t: "O Custo de Infraestrutura (CAPEX)",
              mercado:
                "Self-checkout e carrinho inteligente exigem totens caríssimos, manutenção constante de hardware e até obras civis na frente de caixa.",
              nos:
                "Custo Zero. Usamos o celular do cliente como hardware e o PDV atual da loja pra consolidar a venda. Nenhuma esteira é arrancada.",
            },
            {
              n: "03",
              t: "O Gargalo do Ensacolamento",
              mercado:
                "O cliente continua perdendo tempo no fim da compra, descarregando e ensacolando os itens na frente do equipamento.",
              nos:
                "O ensacolamento é feito durante a caminhada no corredor. O fluxo no caixa vira apenas uma pista de auditoria visual rápida.",
            },
          ].map((row) => (
            <div key={row.n} data-reveal>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span
                  className="text-[10px] sm:text-sm font-extrabold px-2 py-0.5 rounded"
                  style={{ background: BRAND_SOFT, color: BRAND }}
                >
                  {row.n}
                </span>
                <h3 className="text-sm sm:text-xl 2xl:text-2xl font-bold">
                  {row.t}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <div
                  className="rounded-xl p-4 sm:p-6 2xl:p-8 flex gap-3 sm:gap-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <X
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#6B7280" }}
                  />
                  <p
                    className="text-xs sm:text-base 2xl:text-lg leading-relaxed"
                    style={{ color: "#9CA3AF" }}
                  >
                    {row.mercado}
                  </p>
                </div>
                <div
                  className="rounded-xl p-4 sm:p-6 2xl:p-8 flex gap-3 sm:gap-4"
                  style={{ background: BRAND_SOFT, border: `1px solid ${BRAND_LINE}` }}
                >
                  <CheckCircle2
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: BRAND }}
                  />
                  <p
                    className="text-xs sm:text-base 2xl:text-lg leading-relaxed"
                    style={{ color: INK }}
                  >
                    {row.nos}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ 6.9. SEGURANÇA E CONFORMIDADE ============ */}
      <Section id="seguranca">
        <Eyebrow>Confiança técnica</Eyebrow>
        <H2>
          Segurança e Compliance:{" "}
          <span style={{ color: BRAND }}>o risco é zero.</span>
        </H2>
        <Lead className="mt-6 max-w-3xl">
          Arquitetura 100% Web desenhada para aprovação imediata da TI e
          total conformidade com a LGPD.
        </Lead>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {[
            {
              icon: <Shield size={34} />,
              t: "Sandbox isolado",
              d: "O sistema roda direto no navegador do smartphone do cliente. Sem downloads de arquivos. O ambiente sandbox do navegador impede fisicamente que a página acesse senhas, contatos, fotos ou dados internos do aparelho.",
            },
            {
              icon: <UserX size={34} />,
              t: "Zero coleta de dados pessoais",
              d: "O fluxo Fricção Zero elimina a necessidade de cadastros, logins ou CPF para iniciar o uso. Sem coleta de dados sensíveis, garantindo aderência nativa às regras mais rígidas da LGPD. A única permissão solicitada é o uso da lente da câmera.",
            },
            {
              icon: <Lock size={34} />,
              t: "Canal criptografado",
              d: "Toda a comunicação trafega sob protocolo HTTPS com criptografia de ponta a ponta. A exibição do QR Code de acesso em tela digital elimina o risco de fraudes físicas por substituição de adesivos na loja.",
            },
          ].map((c) => (
            <Card key={c.t}>
              <div style={{ color: BRAND }}>{c.icon}</div>
              <h3 className="mt-6 text-lg sm:text-xl 2xl:text-2xl font-bold leading-snug">
                {c.t}
              </h3>
              <p
                className="mt-3 text-sm sm:text-base 2xl:text-xl leading-relaxed"
                style={{ color: MUTED }}
              >
                {c.d}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============ 6.5. VÍDEOS DEMONSTRATIVOS ============ */}
      <Section id="videos">
        <Eyebrow>Prova em vídeo</Eyebrow>
        <H2>
          Veja o cronômetro <span style={{ color: BRAND }}>correr de verdade.</span>
        </H2>
        <Lead className="mt-6 max-w-3xl">
          Dois vídeos, lado a lado: o caixa tradicional e a Via Expressa,
          passando os mesmos itens.
        </Lead>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {[
            {
              youtubeId: "",
              title: "Caixa tradicional — 20 itens",
              desc: "Operador passando 20 itens no caixa comum, do início ao fim, sem cortes.",
            },
            {
              youtubeId: "",
              title: "Via Expressa — mesmo carrinho",
              desc: "Cliente escaneando os mesmos itens pelo celular, até o código no operador.",
            },
          ].map((v) => (
            <div key={v.title} data-reveal>
              <div
                className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  border: `1px solid ${BRAND_LINE}`,
                  boxShadow: `0 0 40px ${BRAND_SOFT}`,
                  aspectRatio: "16 / 9",
                  background: "#0B1220",
                }}
              >
                {v.youtubeId ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 px-6 text-center">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                      style={{ background: BRAND_SOFT, border: `1px solid ${BRAND_LINE}` }}
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7z" fill={BRAND} />
                      </svg>
                    </div>
                    <span
                      className="text-xs sm:text-sm font-semibold tracking-wide uppercase"
                      style={{ color: MUTED }}
                    >
                      Vídeo em breve
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mt-5 text-lg sm:text-2xl 2xl:text-3xl font-bold">
                {v.title}
              </h3>
              <p
                className="mt-2 text-sm sm:text-lg 2xl:text-xl leading-relaxed"
                style={{ color: MUTED }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ 7. PERFIL EXECUTIVO ============ */}
      <Section id="quem">
        <Eyebrow>Quem assina o projeto</Eyebrow>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* foto */}
          <div data-reveal className="flex justify-center lg:justify-start">
            <div
              className="rounded-full flex items-center justify-center w-40 h-40 sm:w-56 sm:h-56 2xl:w-80 2xl:h-80"
              style={{
                border: `3px solid ${BRAND}`,
                background: "rgba(255,255,255,0.04)",
                boxShadow: `0 0 60px ${BRAND_SOFT}`,
              }}
            >
              <span
                className="text-xs sm:text-sm 2xl:text-lg font-semibold tracking-wider uppercase text-center px-6"
                style={{ color: MUTED }}
              >
                Foto
                <br />
                de perfil
              </span>
            </div>
          </div>

          {/* bio */}
          <div>
            <h2
              data-reveal
              className="text-3xl sm:text-5xl 2xl:text-7xl font-extrabold tracking-tight"
            >
              Alex Bruno
            </h2>
            <div
              data-reveal
              className="mt-4 h-1 w-20 sm:w-28 rounded-full"
              style={{ background: BRAND }}
            />
            <p
              data-reveal
              className="mt-7 text-sm sm:text-lg lg:text-xl 2xl:text-3xl leading-relaxed max-w-3xl 2xl:max-w-5xl"
              style={{ color: MUTED }}
            >
              42 anos. Mais de 22 anos de trincheira no varejo, com passagens por
              gigantes como{" "}
              <span style={{ color: INK }} className="font-semibold">
                Walmart, Cencosud
              </span>{" "}
              e, atualmente,{" "}
              <span style={{ color: INK }} className="font-semibold">
                Carrefour
              </span>
              . Formação em Administração e Logística, com pós-graduação em
              Gestão de Negócios e Comunicação Empresarial. Vivência profunda na
              gestão de todos os ecossistemas da loja: Alimentar (perecíveis e
              não perecíveis), Não Alimentar e Administrativo.
            </p>
          </div>
        </div>
      </Section>

      {/* ============ 7.5. MANIFESTO — URGÊNCIA ============ */}
      <Section
        id="manifesto-urgencia"
        className="py-20 sm:py-32"
      >
        <div
          data-reveal
          className="relative max-w-5xl mx-auto rounded-3xl px-6 py-14 sm:px-14 sm:py-20 2xl:px-20 2xl:py-24"
          style={{ background: BRAND, boxShadow: `0 0 100px ${BRAND_SOFT}` }}
        >
          <p className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold leading-tight text-white">
            Inovação no varejo não é sobre tecnologia.{" "}
            <span style={{ opacity: 0.85 }}>É sobre tempo e território.</span>
          </p>

          <p className="mt-8 sm:mt-10 text-base sm:text-xl lg:text-2xl 2xl:text-3xl leading-relaxed text-white opacity-95">
            O cliente que compra a nossa picanha e o nosso vinho não tolera
            mais esperar 15 minutos na frente de caixa. Se não dermos essa
            via expressa pra ele, o concorrente da outra esquina vai dar. E
            quando ele descobrir que pode resolver a compra em 1 minuto lá,
            não volta mais aqui.
          </p>

          <div
            className="mt-10 sm:mt-12 pt-8 sm:pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }}
          >
            <p className="text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl font-extrabold text-white leading-snug">
              O piloto está pronto. Podemos ser os pioneiros e ditar a regra
              do jogo — ou esperar o concorrente fazer primeiro, pra depois
              correr atrás.
            </p>
          </div>
        </div>
      </Section>

      {/* ============ 8. CTA ============ */}
      <Section id="cta">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* QR */}
          <div data-reveal className="flex flex-col items-center lg:items-start">
            <div
              className="rounded-3xl p-5 sm:p-6"
              style={{ background: BRAND, boxShadow: `0 0 80px ${BRAND_SOFT}` }}
            >
              <div
                className="bg-white rounded-2xl flex items-center justify-center w-56 h-56 sm:w-72 sm:h-72 xl:w-80 xl:h-80 2xl:w-[26rem] 2xl:h-[26rem] p-4 sm:p-5 2xl:p-7"
              >
                <QrCode viewBoxSize={320} />
              </div>
            </div>

            {/* Selo LGPD */}
            <div
              className="mt-5 sm:mt-6 rounded-xl px-4 py-3 sm:px-5 sm:py-4 max-w-[280px] sm:max-w-xs"
              style={{ border: `1px solid ${BRAND}`, background: "rgba(30, 82, 168, 0.08)" }}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} style={{ color: BRAND, flexShrink: 0 }} />
                <span
                  className="text-xs sm:text-sm font-bold"
                  style={{ color: INK }}
                >
                  Ambiente Seguro &amp; Conforme LGPD
                </span>
              </div>
              <p
                className="mt-1.5 text-[10px] sm:text-xs leading-relaxed"
                style={{ color: MUTED }}
              >
                Criptografia HTTPS ativa. Sem rastreamento de dados ou
                armazenamento local de informações do usuário.
              </p>
            </div>
          </div>

          {/* texto */}
          <div>
            <h2
              data-reveal
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              Fricção zero.{" "}
              <span style={{ color: BRAND }}>
                Teste o futuro do nosso checkout agora.
              </span>
            </h2>
            <Lead className="mt-8">
              Aponte a câmera e seja bem-vindo à Via Expressa. Sem catracas, sem
              downloads.
            </Lead>

            <div
              data-reveal
              className="mt-10 flex items-center gap-3 text-sm sm:text-lg 2xl:text-2xl font-semibold"
              style={{ color: BRAND }}
            >
              <Camera size={24} />
              checkout-rapido-hiper.vercel.app
            </div>
          </div>
        </div>

        <footer
          className="mt-20 sm:mt-28 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <CarrefourMark size={34} />
          <span className="text-xs sm:text-sm 2xl:text-lg" style={{ color: MUTED }}>
            Projeto Via Expressa · Loja 617 — Boa Viagem, Recife/PE
          </span>
        </footer>
      </Section>
    </div>
  );
}

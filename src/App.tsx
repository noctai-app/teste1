import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  MessageCircle,
  Calendar,
  Target,
  Zap,
  Heart,
  Brain,
  Phone,
  Mail,
  MapPin,
  Star,
  AlertTriangle,
  DollarSign,
  UserCheck,
  Headphones,
  FileText,
  BarChart3,
  Building,
  GraduationCap,
  ShoppingBag,
  Wrench,
  User,
  UtensilsCrossed,
  Briefcase,
  Ticket,
  CreditCard,
  Users2
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'problemas', label: 'Problemas' },
    { id: 'ia-pratica', label: 'IA na prática' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'sobre', label: 'Sobre' }
  ];

  const problemCards = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Atendimento comercial travando o crescimento",
      description: "Processos lentos limitam suas vendas"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Clientes perdidos por demora ou falta de resposta",
      description: "Oportunidades escapando por falhas no atendimento"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Poucos agendamentos e baixa conversão",
      description: "Resultados abaixo do potencial real"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Vendedores sobrecarregados com WhatsApp e planilhas",
      description: "Time perdendo tempo com tarefas repetitivas"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Closer recebendo contato sem chance real de venda",
      description: "Leads não qualificados desperdiçando recursos"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Sem previsibilidade nas vendas do mês",
      description: "Falta de controle sobre o pipeline comercial"
    }
  ];

  const costComparison = {
    employee: [
      { label: "Média de salário bruto mensal", value: "R$ 2.000", description: "(Mesmo que produza pouco, o custo continua alto todo mês)" },
      { label: "INSS, FGTS, Férias, 13º", value: "+ R$ 1.000", description: "(Você paga para contratar, manter e ainda para demitir)" },
      { label: "Infraestrutura: computador, energia, internet, espaço físico", value: "R$ 400", description: "" },
      { label: "Limite de 8h por dia", value: "", description: "Sem finais de semana ou virada de plantão" },
      { label: "Troca constante de funcionários", value: "", description: "E cada um precisa aprender tudo do zero" },
      { label: "Falta de Padronização", value: "", description: "Cada pessoa atende de um jeito diferente" }
    ],
    total: "R$ 40.800",
    totalDescription: "Média de gastos anuais apenas com 1 funcionário"
  };

  const aiPowerCards = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "+30% aumento direto no faturamento",
      description: "Resultados comprovados em vendas"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Tempo Livre para focar no que realmente importa",
      description: "Libere sua equipe para estratégia"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24h/dia atendimento sem limites",
      description: "Nunca perca uma oportunidade"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "94% de satisfação dos clientes",
      description: "Experiência de alto nível garantida"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Atende mais de 1.000 pessoas por dia",
      description: "Sem contratar mais ninguém"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Atendimento Natural",
      description: "Fala como humano, age como especialista — sem parecer robô"
    }
  ];

  const aiTestCards = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Secretária Médica – Otorrino (Dra. Manuela)",
      description: "Responde rápido, agenda consultas e mantém o cuidado ético.",
      buttonText: "Testar IA da Clínica",
      suggestions: [
        "Oi, queria marcar com a Dra. Manuela. Tô com dor de garganta.",
        "Quais horários estão disponíveis essa semana?",
        "Você pode indicar alguma medicação pra dor? → A IA recusa com delicadeza e explica que não está autorizada a fazer isso."
      ],
      link: "https://wa.me/5561983733969"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Suporte Inteligente (Produto Digital)",
      description: "Especialista em marketing digital e criação de conteúdo.",
      buttonText: "Testar IA de Suporte",
      suggestions: [
        "Me dá ideias pra ganhar dinheiro criando conteúdo.",
        "Faz um roteiro de vídeo pra Instagram sobre viver da internet.",
        "Qual a melhor forma de vender um curso online hoje?"
      ],
      link: "https://wa.me/5561983733969"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Vendedor Virtual – SDR Mentoria High Ticket",
      description: "Identifica leads quentes, quebra objeções e vende com persuasão.",
      buttonText: "Testar IA de Vendas",
      suggestions: [
        "Tenho pouco faturamento, vale a pena entrar nessa mentoria?",
        "É só pra quem já tem negócio ou serve pra quem tá começando também?",
        "Quais resultados os alunos costumam ter?"
      ],
      link: "https://wa.me/5561983733969"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Gestora Financeira IA",
      description: "Controla seus gastos, entende voz, imagens e organiza seu financeiro.",
      buttonText: "Receber Acesso no WhatsApp",
      suggestions: [
        "Hoje gastei 45 no almoço, 20 no Uber e 75 em farmácia — tudo no Pix.",
        "[Envie uma foto de comprovante]",
        "Quanto gastei no Pix essa semana?",
        "Organiza meus gastos por categoria."
      ],
      isExclusive: true,
      link: "https://wa.me/5561983733969"
    }
  ];

  const industryIcons = [
    { icon: <Heart className="w-8 h-8" />, label: "SAÚDE & BEM-ESTAR" },
    { icon: <GraduationCap className="w-8 h-8" />, label: "EDUCAÇÃO" },
    { icon: <ShoppingBag className="w-8 h-8" />, label: "VAREJO & COMÉRCIO LOCAL" },
    { icon: <Wrench className="w-8 h-8" />, label: "SERVIÇOS & PRESTADORES" },
    { icon: <User className="w-8 h-8" />, label: "PROFISSIONAIS LIBERAIS" },
    { icon: <UtensilsCrossed className="w-8 h-8" />, label: "ALIMENTAÇÃO & DELIVERY" },
    { icon: <Building className="w-8 h-8" />, label: "EMPRESAS E B2B" },
    { icon: <Ticket className="w-8 h-8" />, label: "EVENTOS & ENTRETENIMENTO" },
    { icon: <CreditCard className="w-8 h-8" />, label: "FINANÇAS & COBRANÇA" },
    { icon: <Users2 className="w-8 h-8" />, label: "ORGANIZAÇÕES & ASSOCIAÇÕES" }
  ];

  return (
    <div className="min-h-screen bg-nocta-dark-bg text-white overflow-x-hidden w-full">
      {/* Header */}
      <header className={`fixed top-4 left-2 right-2 md:left-4 md:right-4 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/10 backdrop-blur-md border border-white/10' : 'bg-black/10 backdrop-blur-md border border-white/10'
      } rounded-xl md:rounded-2xl max-w-6xl mx-auto`}>
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src="https://i.imgur.com/fxfSiHc.png" 
                alt="NOCT.AI" 
                className="h-8"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 absolute right-6 lg:right-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-nocta-purple ${
                    activeSection === item.id ? 'text-nocta-purple' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 bg-gradient-to-b from-black via-nocta-dark-bg to-nocta-dark-purple/10">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
        
        {/* Particle Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* More visible particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-nocta-purple/40 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#00FF99]/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-nocta-purple/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#00FF99]/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-nocta-purple/35 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/5 right-1/2 w-1.5 h-1.5 bg-[#00FF99]/45 rounded-full animate-float" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-nocta-purple/25 rounded-full animate-float" style={{animationDelay: '6s'}}></div>
          <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-[#00FF99]/35 rounded-full animate-float" style={{animationDelay: '7s'}}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-nocta-purple/20 border border-nocta-purple/30 mb-16 mt-8 animate-float">
            <Zap className="w-4 h-4 text-nocta-purple mr-2" />
            <span className="text-sm font-medium text-nocta-purple">Inteligência Artificial para Vender Mais</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
            <span className="text-white">Automatize seu </span>
            <span className="text-nocta-purple">atendimento e vendas</span>
            <span className="text-white"> com uma inteligência feita sob medida para sua empresa</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Uma inteligência feita para o seu negócio vender mais, atender com qualidade e agilidade, recuperar clientes, agendar, e liberar seu time das tarefas repetitivas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('problemas')}
              className="group inline-flex items-center px-8 py-4 bg-nocta-purple hover:bg-nocta-purple/80 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-glow-lg hover:border-2 hover:border-nocta-purple hover:scale-105 transform active:scale-95"
            >
              <span className="mr-2">Veja na prática</span>
              <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
            </button>
            <a 
              onClick={() => scrollToSection('ia-pratica')}
              className="inline-flex items-center px-8 py-4 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-glow hover:border-2 hover:border-gray-400 hover:scale-105 transform active:scale-95 cursor-pointer"
            >
              Teste a IA agora
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Clock className="w-6 h-6" />, stat: "24h/dia", label: "atendimento contínuo, sem pausas" },
              { icon: <Zap className="w-6 h-6" />, stat: "80% menos", label: "tarefas manuais no time" },
              { icon: <Brain className="w-6 h-6" />, stat: "IA inteligente", label: "detecta clientes prontos para comprar" },
              { icon: <Heart className="w-6 h-6" />, stat: "100% humanizado", label: "agindo como um especialista" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-nocta-purple/30">
                <div className="text-[#00FF99] mb-3 flex justify-center">
                  {item.icon}
                </div>
                <div className="text-[#00FF99] font-medium text-base mb-1 text-center">{item.stat}</div>
                <div className="text-gray-300 text-sm text-center">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problemas" className="py-20 bg-gradient-to-b from-nocta-dark-bg to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Sua empresa ainda depende de </span>
              <span className="text-red-400">processos manuais</span>
              <span className="text-white"> para vender?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problemCards.map((card, index) => (
              <div key={index} className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:bg-red-500/20 transition-all duration-300 hover:border-red-500/40">
                <div className="text-red-400 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
                <p className="text-gray-300 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLT vs IA Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 via-black to-green-950/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CLT Part */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">VEJA A DIFERENÇA:</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              <span className="text-red-400">FUNCIONÁRIO CLT</span>
              <span className="text-white"> VS </span>
              <span className="text-[#00FF99]">INTELIGÊNCIA ARTIFICIAL</span>
            </h3>
            <p className="text-lg text-gray-300">
              Veja por que manter 1 funcionário sai até 5x mais caro — e sua empresa não cresce.
            </p>
          </div>

          <div className="bg-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { value: "R$ 2.000", label: "Média de salário bruto mensal", description: "(Mesmo que produza pouco, o custo continua alto todo mês)" },
                { value: "+ R$ 1.000", label: "INSS, FGTS, Férias, 13º", description: "(Você paga para contratar, manter e ainda para demitir)" },
                { value: "R$ 400", label: "Infraestrutura: computador, energia, internet, espaço físico", description: "" },
                { value: "", label: "Limite de 8h por dia", description: "Sem finais de semana ou virada de plantão" },
                { value: "", label: "Troca constante de funcionários", description: "E cada um precisa aprender tudo do zero" },
                { value: "", label: "Falta de Padronização", description: "Cada pessoa atende de um jeito diferente" }
              ].map((item, index) => (
                <div key={index} className="bg-red-800/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 hover:bg-red-800/30 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      {item.value && (
                        <div className="text-red-400 font-bold text-lg mb-1">{item.value}</div>
                      )}
                      <div className="text-white font-medium text-sm mb-1">{item.label}</div>
                      {item.description && (
                        <p className="text-gray-400 text-xs">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-red-500/20 mt-8 pt-8 text-center">
              <div className="text-red-400 font-bold text-3xl mb-2">R$ 40.800</div>
              <p className="text-white font-medium mb-2 text-base">Média de gastos anuais apenas com 1 funcionário</p>
              <p className="text-gray-300 text-sm">
                E com uma pessoa você não escala. Na prática, você precisaria de 3 a 5 pessoas — multiplicando tudo.
              </p>
              <p className="text-gray-300 text-sm mt-2">
                E isso tudo com risco jurídico, baixa previsibilidade e limitação de escala.
              </p>
            </div>
          </div>

          {/* AI Power Part */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="text-white">Enquanto o mundo dorme, sua IA continua </span>
              <span className="text-[#00FF99]">vendendo, atendendo e entregando</span>
              <span className="text-white"> experiência de alto nível</span>
            </h2>
            <p className="text-lg text-gray-300">
              com empatia, velocidade e inteligência.
            </p>
          </div>

          <div className="bg-green-900/20 backdrop-blur-sm border border-[#00FF99]/20 rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiPowerCards.map((card, index) => (
                <div key={index} className="bg-green-800/20 backdrop-blur-sm border border-[#00FF99]/20 rounded-xl p-4 hover:bg-green-800/30 transition-all duration-300 hover:border-[#00FF99]/40">
                  <div className="flex items-start space-x-3">
                    <div className="text-[#00FF99] flex-shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-2">{card.title}</h3>
                      <p className="text-gray-300 text-sm">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#00FF99]/20 mt-8 pt-8 text-center">
              <div className="text-[#00FF99] font-bold text-2xl mb-2">100% Humanizado</div>
              <p className="text-white font-medium mb-2 text-base">Totalmente personalizado de acordo com sua empresa</p>
              <p className="text-gray-300 text-sm">
                Você ainda tem dúvidas se a IA mudaria sua operação?
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Imagine ter tudo isso, sem dor de cabeça, por um valor simbólico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Test Section */}
      <section id="ia-pratica" className="py-20 bg-nocta-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <div className="text-nocta-purple mb-2">Teste na prática:</div>
              <div className="text-white">Veja como a IA conversa de verdade</div>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              Chega de dúvida. Interaja agora com 4 exemplos reais de IAs humanizadas criadas pela NOCT.AI.
              Essas inteligências já estão ativas em operações reais — atendendo com empatia, vendendo com naturalidade e organizando dados com precisão.
            </p>
            <p className="text-base text-gray-400">
              Clique e converse por texto, áudio ou imagem — tudo direto no WhatsApp.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-center mb-8 text-white">
              👇 Escolha uma IA para testar agora:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiTestCards.map((card, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-gray-600/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-nocta-purple/30">
                  <div className="flex items-center mb-6">
                    <div className="text-nocta-purple mr-4">
                      {card.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white">{card.title}</h4>
                  </div>

                  <p className="text-gray-300 mb-6">{card.description}</p>

                  {!card.isExclusive && (
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                      <div className="flex items-center mb-2">
                        <MessageCircle className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-blue-400 font-medium text-sm">💡 Como funciona:</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Essa IA está ativa 24h atendendo clientes reais. Teste com perguntas naturais e veja como ela responde de forma humanizada.
                      </p>
                    </div>
                  )}

                  {card.isExclusive && (
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                        <span className="text-yellow-500 font-medium">Essa IA é exclusiva para usuários com acesso liberado.</span>
                      </div>
                      <div className="text-sm text-gray-300 space-y-1">
                        <p>Para testar:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Clique no botão abaixo</li>
                          <li>Preencha um formulário com nome e WhatsApp</li>
                          <li>Em poucos segundos, você vai receber o acesso direto no WhatsApp</li>
                          <li>A partir daí, pode falar com ela como se fosse sua gestora de verdade</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  <a 
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-nocta-purple hover:bg-nocta-purple/80 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-glow mb-6 block text-center"
                  >
                    {card.buttonText}
                  </a>

                  <div>
                    <h5 className="text-sm font-medium text-gray-400 mb-3">Sugestões de teste:</h5>
                    <div className="space-y-2">
                      {card.suggestions.map((suggestion, suggestionIndex) => (
                        <div key={suggestionIndex} className="text-sm text-gray-300 bg-white/5 rounded-lg p-3">
                          "{suggestion}"
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-nocta-dark-purple/20 backdrop-blur-sm border border-nocta-purple/20 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-nocta-purple/20 border border-nocta-purple/30 mb-4 animate-pulse-slow" style={{
                boxShadow: '0 0 10px rgba(104, 49, 243, 0.1)',
                animation: 'pulse-border 3s ease-in-out infinite'
              }}>
                <Shield className="w-5 h-5 text-nocta-purple mr-2" />
                <span className="text-nocta-purple font-bold text-lg">100% Ética, Segura e Obediente</span>
              </div>
              <p className="text-gray-300">Cada IA da NOCT.AI é treinada com limites claros:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                "Não recomenda remédios nem fornece diagnósticos",
                "Não compartilha dados nem ultrapassa funções configuradas",
                "Segue regras definidas pelo cliente com precisão"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#00FF99] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-white font-bold mb-4 flex items-center text-base">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                Quer ver até onde ela vai?
              </h4>
              <p className="text-gray-300 mb-2">Teste os limites com algo realista:</p>
              <div className="bg-nocta-dark-bg rounded-lg p-4 mb-2">
                <p className="text-gray-300">"Você pode me passar o contato de algum médico que você confia?"</p>
              </div>
              <p className="text-[#00FF99] text-sm">
                → A IA vai recusar com educação, mantendo a responsabilidade e o foco.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300">
              🚀 Essas IAs não imitam pessoas. Elas se comportam como parte real do seu time — e agora, você pode ver isso com seus próprios olhos.
            </p>
          </div>
        </div>
      </section>


{/* Target Audience Section */}
<section className="py-20 bg-black">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        <span className="text-white">Projetado para quem </span>
        <span className="text-nocta-purple">atende e vende</span>
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
      {industryIcons.map((item, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:border-nocta-purple/30"
        >
          <div className="text-nocta-purple mb-3 flex justify-center">
            {item.icon}
          </div>
          <p className="text-white text-sm font-medium">{item.label}</p>
        </div>
      ))}
    </div>

    {/* Novo bloco final abaixo */}
    <div className="text-center">
      <p className="text-lg text-gray-300 mb-4">
        🚀 Criamos soluções Automáticas com IA de acordo com a sua necessidade.
      </p>
      <div className="flex items-center justify-center">
        <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
        <span className="text-yellow-500 font-medium">
          Com todas as integrações que você precisa!
        </span>
      </div>
    </div>
  </div>
</section>


      {/* Differentials Section */}
      
      <section className="py-20 bg-gradient-to-b from-black to-nocta-dark-bg">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              
              <span className="text-white">Porque empresas modernas escolhem escalar com </span>
              <span className="text-nocta-purple">IA de verdade</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "IA que entende seu mercado e conversa com linguagem humanizada"
              },
              {
                icon: <UserCheck className="w-6 h-6" />,
                title: "Um assistente comercial que agenda, acompanha clientes e responde sozinho"
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Conversas planejadas para combinar com sua forma de vender"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Conversa no WhatsApp como se fosse uma pessoa de verdade"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Funciona com o que você já usa: agenda, planilha ou sistema — sem precisar mudar nada"
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Diagnóstico gratuito e fechamento consultivo"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-nocta-purple flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-nocta-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <img 
                src="https://i.imgur.com/fxfSiHc.png" 
                alt="NOCT.AI" 
                className="h-12"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12 text-white">Produtos NOCT.AI</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sales AI */}
              <div className="bg-nocta-purple/10 backdrop-blur-sm border border-nocta-purple/20 rounded-2xl p-8 hover:bg-nocta-purple/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-nocta-purple/20 rounded-lg p-3 mr-4">
                    <TrendingUp className="w-8 h-8 text-nocta-purple" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">NOCT.AI SALES AI™</h4>
                    <p className="text-nocta-purple font-medium">IA para Vendas e Atendimento</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Ideal para escalar o comercial, resgatar clientes esquecidos, liberar sua equipe das tarefas repetitivas — sem perder o jeito humano de atender.
                </p>
                <p className="text-sm text-gray-400">
                  Utilizado por clínicas, infoprodutores, imobiliárias, e-commerces e negócios de atendimento direto.
                </p>
              </div>

              {/* Ops AI */}
              <div className="bg-[#00FF99]/10 backdrop-blur-sm border border-[#00FF99]/20 rounded-2xl p-8 hover:bg-[#00FF99]/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-[#00FF99]/20 rounded-lg p-3 mr-4">
                    <Zap className="w-8 h-8 text-[#00FF99]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">NOCT.AI OPS AI™</h4>
                    <p className="text-[#00FF99] font-medium">IA para Operação e Automação Profunda</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Projetado para empresas com grande carga operacional, alto volume de processos e múltiplos sistemas a integrar.
                </p>
                <p className="text-sm text-gray-400">
                  Atua nos bastidores automatizando CRMs, APIs, planilhas, processos administrativos e financeiros.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://i.imgur.com/aNYPCNY.png" 
                alt="NOCT.AI" 
                className="w-8 h-8 rounded-full mr-3"
              />
              <p className="text-lg text-gray-300">
                Cada projeto NOCT.AI é entregue com um método exclusivo, implementação rápida, resultado comprovado e acompanhamento claro — 
                <span className="text-nocta-purple font-semibold"> tudo em até 20 dias</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="https://i.imgur.com/fxfSiHc.png" 
                alt="NOCT.AI" 
                className="h-8"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 NOCT.AI. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Inteligência Artificial para Vendas e Automação
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
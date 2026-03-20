import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="text-gray-900 font-semibold text-lg">QuartzoArt</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
              Funcionalidades
            </a>
            <a href="#beneficios" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
              Benefícios
            </a>
            <a href="#contato" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
              Contato
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Começar grátis
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
            Sistema de Gestão
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Gerencie seus clientes{" "}
            <span className="text-indigo-600">com simplicidade</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Uma plataforma completa para cadastrar, organizar e acompanhar seus
            clientes em um único lugar. Simples, rápido e eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Acessar o sistema
            </Link>
            <a
              href="#funcionalidades"
              className="border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Ver funcionalidades
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-gray-900">+500</p>
              <p className="text-gray-500 text-sm mt-1">Empresas ativas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900">+12k</p>
              <p className="text-gray-500 text-sm mt-1">Clientes cadastrados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900">99.9%</p>
              <p className="text-gray-500 text-sm mt-1">Uptime garantido</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="funcionalidades" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tudo que você precisa
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Funcionalidades pensadas para otimizar o dia a dia da sua empresa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👥",
                title: "Cadastro de Clientes",
                desc: "Cadastre e gerencie todos os seus clientes com informações completas e organizadas.",
              },
              {
                icon: "🔍",
                title: "Busca Avançada",
                desc: "Encontre qualquer cliente instantaneamente com filtros inteligentes e busca rápida.",
              },
              {
                icon: "📊",
                title: "Dashboard Completo",
                desc: "Visualize métricas e dados importantes do seu negócio em tempo real.",
              },
              {
                icon: "✏️",
                title: "Edição Simplificada",
                desc: "Atualize informações dos clientes de forma rápida e intuitiva.",
              },
              {
                icon: "🔒",
                title: "Acesso Seguro",
                desc: "Sistema com autenticação protegida para garantir a segurança dos dados.",
              },
              {
                icon: "📱",
                title: "Responsivo",
                desc: "Acesse de qualquer dispositivo com uma interface adaptada para mobile.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-20 bg-indigo-600 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Por que escolher o QuartzoArt?
              </h2>
              <div className="space-y-4">
                {[
                  "Interface limpa e fácil de usar",
                  "Dados sempre seguros e protegidos",
                  "Suporte rápido e eficiente",
                  "Atualizações constantes sem custo extra",
                  "Sem necessidade de instalação",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-indigo-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <p className="text-white/80 text-sm mb-2">Acesso rápido</p>
              <p className="text-white text-2xl font-bold mb-6">
                Comece agora mesmo
              </p>
              <Link
                href="/login"
                className="block w-full bg-white text-indigo-600 font-semibold text-center py-3 rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Entrar no sistema
              </Link>
              <p className="text-indigo-200 text-xs text-center mt-4">
                Use: admin@quartzoart.com / admin123
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto para começar?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Acesse o sistema agora e veja como é simples gerenciar seus clientes.
          </p>
          <Link
            href="/login"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-4 rounded-xl transition-colors"
          >
            Acessar o sistema →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">Q</span>
            </div>
            <span className="text-gray-900 font-semibold">QuartzoArt</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2026 QuartzoArt. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

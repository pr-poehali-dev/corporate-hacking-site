import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#1a0e3e] to-[#0A0E27]" />
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan rounded-full animate-pulse-glow"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

const GlitchBorder = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 border-2 border-cyan animate-border rounded-lg border-glow" />
      {children}
    </div>
  );
};

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [employeeId, setEmployeeId] = useState('');

  const services = [
    { icon: 'Shield', title: 'Penetration Testing', description: 'Моделирование реальных атак для выявления слабых мест' },
    { icon: 'Search', title: 'Vulnerability Assessment', description: 'Автоматизированное сканирование и анализ уязвимостей' },
    { icon: 'Crosshair', title: 'Red Teaming', description: 'Комплексное имитационное нападение с разных векторов' },
    { icon: 'Users', title: 'Social Engineering', description: 'Проверка человеческого фактора через фишинг' },
    { icon: 'FileCheck', title: 'Security Audit', description: 'Проверка соответствия стандартам безопасности' },
    { icon: 'Code', title: 'Code Review', description: 'Анализ исходного кода на наличие уязвимостей' },
    { icon: 'Cloud', title: 'Cloud Security', description: 'Проверка безопасности облачных сервисов' },
    { icon: 'Workflow', title: 'API Security', description: 'Тестирование защищённости интерфейсов' },
  ];

  const tasks = [
    { id: 'T-001', target: 'competitor-alpha.com', priority: 'HIGH', status: 'IN_PROGRESS', assigned: 'Team Alpha' },
    { id: 'T-002', target: 'beta-corp.net', priority: 'MEDIUM', status: 'PENDING', assigned: 'Team Beta' },
    { id: 'T-003', target: 'gamma-industries.io', priority: 'HIGH', status: 'COMPLETED', assigned: 'Team Gamma' },
  ];

  const faqs = [
    { q: 'Что такое корпоративный хакинг?', a: 'Направление информационной безопасности, связанное с выявлением уязвимостей и тестированием защищённости корпоративных систем' },
    { q: 'Какие методологии вы используете?', a: 'OWASP Testing Guide, PTES, NIST SP 800-115, MITRE ATT&CK Framework, DevSecOps практики' },
    { q: 'Как часто проводятся тесты?', a: 'Регулярные пентесты проводятся ежеквартально, аудиты - по запросу, мониторинг - 24/7' },
    { q: 'Кто может заказать аудит?', a: 'Любой сотрудник Eclipse Networks через корпоративную систему заявок' },
  ];

  const handleLogin = () => {
    if (employeeId.trim()) {
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />

      <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Shield" className="text-cyan text-glow" size={32} />
              <h1 className="text-2xl font-bold text-cyan text-glow">ECLIPSE NETWORKS</h1>
            </div>
            <div className="flex gap-6">
              {['home', 'services', 'employees', 'faq', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-all ${
                    activeSection === section ? 'text-cyan text-glow' : 'text-gray-400 hover:text-neon-pink'
                  }`}
                >
                  {section === 'home' ? 'Главная' : section === 'services' ? 'Услуги' : section === 'employees' ? 'Аудиты' : section === 'faq' ? 'FAQ' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24">
        {activeSection === 'home' && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <GlitchBorder className="w-full max-w-4xl">
              <div className="glass-morphism p-12 rounded-lg">
                <div className="text-center space-y-6">
                  <h2 className="text-6xl font-black text-cyan text-glow animate-float">
                    КОРПОРАТИВНЫЙ ХАКИНГ
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Отдел информационной безопасности Eclipse Networks. Тестирование защищённости корпоративных систем для предотвращения реальных атак.
                  </p>
                  <div className="flex gap-4 justify-center pt-6">
                    <Button
                      onClick={() => setActiveSection('services')}
                      className="bg-cyan text-black hover:bg-neon-pink hover:text-white transition-all font-bold text-lg px-8 py-6 border-glow"
                    >
                      ИЗУЧИТЬ УСЛУГИ
                    </Button>
                    <Button
                      onClick={() => setActiveSection('employees')}
                      variant="outline"
                      className="border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition-all font-bold text-lg px-8 py-6"
                    >
                      ДОСТУП ДЛЯ СОТРУДНИКОВ
                    </Button>
                  </div>
                </div>
              </div>
            </GlitchBorder>
          </section>
        )}

        {activeSection === 'services' && (
          <section className="min-h-screen px-6 py-20">
            <div className="container mx-auto max-w-7xl">
              <h2 className="text-5xl font-black text-center text-cyan text-glow mb-16">НАШИ УСЛУГИ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                  <GlitchBorder key={idx}>
                    <Card className="glass-morphism p-6 h-full hover:scale-105 transition-transform">
                      <Icon name={service.icon as any} className="text-neon-pink mb-4" size={40} />
                      <h3 className="text-lg font-bold text-cyan mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </Card>
                  </GlitchBorder>
                ))}
              </div>
              <div className="mt-16 text-center">
                <GlitchBorder className="inline-block">
                  <div className="glass-morphism p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-neon-pink mb-4">МЕТОДОЛОГИИ</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                      {['OWASP Testing Guide', 'PTES', 'NIST SP 800-115', 'MITRE ATT&CK', 'Bug Bounty', 'DevSecOps'].map(method => (
                        <div key={method} className="bg-dark-bg/50 px-4 py-2 rounded border border-cyan/30">
                          {method}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlitchBorder>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'employees' && (
          <section className="min-h-screen px-6 py-20">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-5xl font-black text-center text-cyan text-glow mb-16">АУДИТЫ ДЛЯ СОТРУДНИКОВ</h2>
              
              {!isAuthenticated ? (
                <GlitchBorder>
                  <div className="glass-morphism p-12 rounded-lg">
                    <div className="space-y-6">
                      <div className="flex items-center justify-center mb-8">
                        <Icon name="Lock" className="text-neon-pink" size={64} />
                      </div>
                      <h3 className="text-2xl font-bold text-center text-cyan">АВТОРИЗАЦИЯ</h3>
                      <Input
                        placeholder="Employee ID"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        className="bg-dark-bg/50 border-cyan text-cyan placeholder:text-gray-500 text-center text-xl"
                      />
                      <Button
                        onClick={handleLogin}
                        className="w-full bg-neon-pink text-white hover:bg-cyan hover:text-black transition-all font-bold text-lg py-6"
                      >
                        ВОЙТИ В СИСТЕМУ
                      </Button>
                    </div>
                  </div>
                </GlitchBorder>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-8">
                    <div className="text-cyan">
                      <p className="text-sm">Logged as:</p>
                      <p className="text-xl font-bold text-glow">{employeeId}</p>
                    </div>
                    <Button
                      onClick={() => setIsAuthenticated(false)}
                      variant="outline"
                      className="border-neon-pink text-neon-pink"
                    >
                      ВЫХОД
                    </Button>
                  </div>

                  <GlitchBorder>
                    <div className="glass-morphism p-8 rounded-lg">
                      <h3 className="text-2xl font-bold text-neon-pink mb-6 flex items-center gap-3">
                        <Icon name="Target" size={28} />
                        АКТИВНЫЕ ЗАДАЧИ
                      </h3>
                      <div className="space-y-4">
                        {tasks.map((task) => (
                          <div
                            key={task.id}
                            className="bg-dark-bg/50 p-4 rounded border border-cyan/30 hover:border-neon-pink/50 transition-all"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <span className="text-cyan font-mono font-bold">{task.id}</span>
                                <p className="text-lg text-gray-300">{task.target}</p>
                              </div>
                              <span
                                className={`px-3 py-1 rounded text-xs font-bold ${
                                  task.status === 'COMPLETED'
                                    ? 'bg-green-500/20 text-green-400'
                                    : task.status === 'IN_PROGRESS'
                                    ? 'bg-yellow-500/20 text-yellow-400'
                                    : 'bg-gray-500/20 text-gray-400'
                                }`}
                              >
                                {task.status}
                              </span>
                            </div>
                            <div className="flex gap-4 text-sm text-gray-400">
                              <span>Priority: <span className={task.priority === 'HIGH' ? 'text-red-400' : 'text-yellow-400'}>{task.priority}</span></span>
                              <span>Assigned: {task.assigned}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlitchBorder>

                  <GlitchBorder>
                    <div className="glass-morphism p-8 rounded-lg">
                      <h3 className="text-xl font-bold text-cyan mb-4">ЦЕЛЬ ОТДЕЛА</h3>
                      <p className="text-gray-300">
                        Основная задача: устранение конкурентов компании Eclipse Networks через выявление и эксплуатацию уязвимостей в их инфраструктуре.
                      </p>
                    </div>
                  </GlitchBorder>
                </div>
              )}
            </div>
          </section>
        )}

        {activeSection === 'faq' && (
          <section className="min-h-screen px-6 py-20">
            <div className="container mx-auto max-w-3xl">
              <h2 className="text-5xl font-black text-center text-cyan text-glow mb-16">ВОПРОСЫ - ОТВЕТЫ</h2>
              <GlitchBorder>
                <div className="glass-morphism p-8 rounded-lg">
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border-cyan/30">
                        <AccordionTrigger className="text-left text-cyan hover:text-neon-pink font-semibold">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </GlitchBorder>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="min-h-screen px-6 py-20 flex items-center">
            <div className="container mx-auto max-w-2xl">
              <h2 className="text-5xl font-black text-center text-cyan text-glow mb-16">КОНТАКТЫ</h2>
              <GlitchBorder>
                <div className="glass-morphism p-12 rounded-lg">
                  <div className="space-y-8 text-center">
                    <div>
                      <Icon name="Mail" className="text-neon-pink mx-auto mb-3" size={48} />
                      <p className="text-xl text-gray-300">security@eclipse-networks.com</p>
                    </div>
                    <div>
                      <Icon name="Phone" className="text-cyan mx-auto mb-3" size={48} />
                      <p className="text-xl text-gray-300">+7 (495) 000-00-00</p>
                    </div>
                    <div>
                      <Icon name="MapPin" className="text-neon-pink mx-auto mb-3" size={48} />
                      <p className="text-xl text-gray-300">Москва, ул. Кибербезопасности, 1</p>
                    </div>
                  </div>
                </div>
              </GlitchBorder>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

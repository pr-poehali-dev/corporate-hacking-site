import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const ParticleBackground = () => {
  const [dataStreams, setDataStreams] = useState<Array<{ x: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const streams = Array.from({ length: 40 }, (_, i) => ({
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6
    }));
    setDataStreams(streams);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0000] via-[#1a0505] to-[#000000]" />
      
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(255,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      {dataStreams.map((stream, i) => (
        <div
          key={i}
          className="absolute top-0 h-full"
          style={{
            left: `${stream.x}%`,
            width: '2px',
            background: 'linear-gradient(180deg, transparent, rgba(255, 0, 0, 0.4), transparent)',
            animation: `data-fall ${stream.duration}s linear infinite`,
            animationDelay: `${stream.delay}s`,
            opacity: 0.6
          }}
        />
      ))}

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-950/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-950/20 to-transparent" />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes data-fall {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}} />
    </div>
  );
};

const BlackHoleLogo = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-12 h-12 cursor-pointer group">
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-red-500/20 to-black animate-pulse-glow" />
      <div 
        className="absolute inset-2 rounded-full bg-black border-2 border-red-500"
        style={{
          boxShadow: `0 0 20px rgba(255, 0, 0, 0.5), inset 0 0 20px rgba(255, 0, 0, 0.3)`,
          transform: `rotate(${rotation}deg)`
        }}
      />
      <div className="absolute inset-4 rounded-full bg-black" style={{
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 1)'
      }} />
    </div>
  );
};

const GlitchBorder = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev + 2);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ 
        filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 1)) drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))'
      }}>
        <rect
          x="3"
          y="3"
          width="calc(100% - 6px)"
          height="calc(100% - 6px)"
          fill="none"
          stroke="white"
          strokeWidth="3"
          rx="8"
          style={{
            strokeDasharray: '8 4 2 4',
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="absolute inset-0 rounded-lg" style={{
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)'
      }} />
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
              <BlackHoleLogo />
              <h1 className="text-2xl font-bold text-white">ECLIPSE NETWORKS</h1>
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
                  <div className="space-y-2 mb-8">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-500" />
                      <Icon name="Shield" className="text-red-500" size={32} />
                      <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-[0.3em]">
                      ДЕПАРТАМЕНТ БЕЗОПАСНОСТИ
                    </h2>
                    <p className="text-sm text-red-500 uppercase tracking-widest font-mono">
                      OFFENSIVE SECURITY DIVISION
                    </p>
                  </div>
                  <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Специализированное подразделение Eclipse Networks по выявлению и нейтрализации угроз информационной безопасности. Проведение пентестов, аудитов и операций по устранению конкурентных рисков.
                  </p>
                  <div className="flex gap-4 justify-center pt-6">
                    <Button
                      onClick={() => setActiveSection('services')}
                      className="bg-red-600 text-white hover:bg-red-700 transition-all font-bold text-lg px-8 py-6"
                    >
                      ИЗУЧИТЬ УСЛУГИ
                    </Button>
                    <Button
                      onClick={() => setActiveSection('employees')}
                      variant="outline"
                      className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all font-bold text-lg px-8 py-6"
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
              <h2 className="text-4xl font-bold text-center text-white uppercase tracking-[0.3em] mb-16">
                СПЕКТР ОПЕРАЦИЙ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                  <GlitchBorder key={idx}>
                    <Card className="glass-morphism p-6 h-full hover:scale-105 transition-transform">
                      <Icon name={service.icon as any} className="text-red-500 mb-4" size={40} />
                      <h3 className="text-lg font-bold text-red-500 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </Card>
                  </GlitchBorder>
                ))}
              </div>
              <div className="mt-16 text-center">
                <GlitchBorder className="inline-block">
                  <div className="glass-morphism p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-red-500 mb-6 uppercase tracking-wider">Применяемые стандарты</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                      {['OWASP Testing Guide', 'PTES', 'NIST SP 800-115', 'MITRE ATT&CK', 'Bug Bounty', 'DevSecOps'].map(method => (
                        <div key={method} className="bg-black/50 px-4 py-2 rounded border border-red-500/30 text-sm">
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
              <h2 className="text-4xl font-bold text-center text-white uppercase tracking-[0.3em] mb-16">
                ЗАКРЫТЫЙ ДОСТУП
              </h2>
              
              {!isAuthenticated ? (
                <GlitchBorder>
                  <div className="glass-morphism p-12 rounded-lg">
                    <div className="space-y-6">
                      <div className="flex items-center justify-center mb-8">
                        <Icon name="Lock" className="text-red-500" size={64} />
                      </div>
                      <h3 className="text-xl font-bold text-center text-white uppercase tracking-widest">Идентификация</h3>
                      <Input
                        placeholder="Employee ID"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        className="bg-black/70 border-red-500/50 text-white placeholder:text-gray-600 text-center text-xl font-mono"
                      />
                      <Button
                        onClick={handleLogin}
                        className="w-full bg-red-600 text-white hover:bg-red-700 transition-all font-bold text-lg py-6"
                      >
                        ВОЙТИ В СИСТЕМУ
                      </Button>
                    </div>
                  </div>
                </GlitchBorder>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-8">
                    <div className="text-red-500">
                      <p className="text-xs uppercase tracking-widest">Оператор</p>
                      <p className="text-xl font-bold font-mono">{employeeId}</p>
                    </div>
                    <Button
                      onClick={() => setIsAuthenticated(false)}
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    >
                      ВЫХОД
                    </Button>
                  </div>

                  <GlitchBorder>
                    <div className="glass-morphism p-8 rounded-lg">
                      <h3 className="text-xl font-bold text-red-500 mb-6 flex items-center gap-3 uppercase tracking-wider">
                        <Icon name="Target" size={28} />
                        Активные операции
                      </h3>
                      <div className="space-y-4">
                        {tasks.map((task) => (
                          <div
                            key={task.id}
                            className="bg-black/50 p-4 rounded border border-red-500/30 hover:border-red-500/60 transition-all"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <span className="text-red-500 font-mono font-bold">{task.id}</span>
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
                      <h3 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-wider">Директива</h3>
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
              <h2 className="text-4xl font-bold text-center text-white uppercase tracking-[0.3em] mb-16">
                ИНФОРМАЦИЯ
              </h2>
              <GlitchBorder>
                <div className="glass-morphism p-8 rounded-lg">
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border-cyan/30">
                        <AccordionTrigger className="text-left text-white hover:text-red-500 font-semibold">
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
              <h2 className="text-4xl font-bold text-center text-white uppercase tracking-[0.3em] mb-16">
                СВЯЗЬ С ОТДЕЛОМ
              </h2>
              <GlitchBorder>
                <div className="glass-morphism p-12 rounded-lg">
                  <div className="space-y-6">
                    <div className="border-l-2 border-red-500 pl-6 py-3">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Электронная почта</p>
                      <p className="text-lg text-white font-mono">security@eclipse-networks.com</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-6 py-3">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Прямая линия</p>
                      <p className="text-lg text-white font-mono">+7 (495) 000-00-00</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-6 py-3">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Локация</p>
                      <p className="text-lg text-white font-mono">Москва, ул. Кибербезопасности, 1</p>
                      <p className="text-xs text-gray-500 mt-1">Доступ по пропускам уровня A+</p>
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
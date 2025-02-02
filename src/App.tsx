import React from 'react';
import { Github, Mail, MapPin, Phone, Terminal, Server, Code, GitBranch, GitCommit, Network } from 'lucide-react';
import { mdiLinux, mdiDocker } from '@mdi/js';
import Icon from '@mdi/react'; 

function App() {
  const technologies = [
    { name: 'Networks', icon: <Network className="w-6 h-6 mb-2" /> },
    { name: 'Kubernetes', icon: <Server className="w-6 h-6 mb-2" /> },
    { name: 'Docker', icon: <Icon path={mdiDocker} size={1} className="w-6 h-6 mb-2" /> }, 
    { name: 'CI/CD', icon: <GitBranch className="w-6 h-6 mb-2" /> },
    { name: 'Linux', icon: <Icon path={mdiLinux} size={1} className="w-6 h-6 mb-2" /> }, // Use the Linux icon    { name: 'Мониторинг', icon: <Monitor className="w-6 h-6 mb-2" /> },
    { name: 'Shell Scripting', icon: <Terminal className="w-6 h-6 mb-2" /> },
    { name: 'Python', icon: <Code className="w-6 h-6 mb-2" /> },
    { name: 'Git', icon: <GitCommit className="w-6 h-6 mb-2" /> },

  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100">
      {/* Hero Section */}
      <header className="relative min-h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
            alt="Data Center"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center">
          <div className="w-full max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-6">
              <Terminal className="w-4 h-4 mr-2" />
              <span>DevOps Engineer</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Белозеров Егор
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed">
              Автоматизирую процессы разработки и развертывания, создаю надежную инфраструктуру 
              и обеспечиваю бесперебойную работу сервисов
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Иннополис, Россия</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Technologies Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">Ключевые технологии</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/80 transition-all duration-300 text-center border border-gray-700/50">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">Опыт работы</h2>
          <div className="space-y-12">
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-500 rounded-full" />
              <h3 className="text-2xl font-semibold mb-2">Senior DevOps Engineer</h3>
              <p className="text-gray-400 mb-4">ООО "CloudTech Solutions" • 2021 - настоящее время</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Внедрил CI/CD pipeline на базе GitLab, сократив время развертывания на 70%
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Спроектировал и реализовал микросервисную архитектуру на Kubernetes
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Автоматизировал процессы с помощью Terraform и Ansible
                </li>
              </ul>
            </div>
            
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-500/50 rounded-full" />
              <h3 className="text-2xl font-semibold mb-2">DevOps Engineer</h3>
              <p className="text-gray-400 mb-4">ООО "ТехноСфера" • 2019 - 2021</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Разработал и внедрил стратегию мониторинга на базе Prometheus и Grafana
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Оптимизировал затраты на облачную инфраструктуру на 40%
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Внедрил практики Infrastructure as Code
                </li>
              </ul>
            </div>
          </div>
        </section> */}

        {/* Projects Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">Проекты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://github.com/essence-666/frontend-project">
            <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">Автоматизация развертывания</h3>
              <p className="text-gray-400 mb-4">
                Разработка полностью автоматизированного процесса развертывания с использованием 
                GitHub Actions, Git, Vercel.          
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Github Actions</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Git</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Vercel</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">CI/CD</span>

              </div>
            </div>
            </a>
            <a href="https://github.com/essence-666/site-resume">
            <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors"> Контейнеризация </h3>
              <p className="text-gray-400 mb-4">
                Автоматическое развертывание React-app на удаленном сервере с докер-логированием.
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Docker</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Docker Volume's</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">SSH</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">nginx</span>



              </div>
            </div>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Контакты</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a href="mailto:6ejlo3epobnt@gmail.com" 
               className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>6ejlo3epobnt@gmail.com</span>
            </a>
            <a href="tel:+79001234567" 
               className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+7 (917) 783-20-64 </span>
            </a>
            <a href="https://github.com/essence-666" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300">
              <Github className="w-5 h-5 text-blue-400" />
              <span>GitHub</span>
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300">
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span>LinkedIn</span>
            </a> */}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Белозеров Егор. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
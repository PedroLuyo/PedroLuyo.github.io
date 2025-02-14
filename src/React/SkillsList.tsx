import React, { useState } from 'react';

const CategoryIcons = {
  'Desarrollo Backend': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'>
      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM9 8H11V16H9V8ZM13 8H15V16H13V8Z"/>
    </svg>
  ),
  'Desarrollo Frontend': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'>
      <path d="M12 18.4853L16.2426 14.2426L14.8284 12.8284L12 15.6569L9.17157 12.8284L7.75736 14.2426L12 18.4853ZM12 13.0711L16.2426 8.82843L14.8284 7.41421L12 10.2426L9.17157 7.41421L7.75736 8.82843L12 13.0711Z"/>
    </svg>
  ),
  'Cloud y DevOps': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'>
      <path d="M4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5C3 4.44772 3.44772 4 4 4ZM5 6V18H19V6H5ZM7 8H17V10H7V8ZM7 12H17V14H7V12Z"/>
    </svg>
  )
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    'Desarrollo Backend': [
      'Java y Spring Boot para microservicios',
      'Arquitectura de microservicios y eventos',
      'Gestión de eventos con Apache Kafka',
      'APIs REST con Spring Reactive Web',
      'PostgreSQL y MongoDB para gestión de datos',
      'Documentación técnica con Swagger',
      'Integración y configuración de Firebase',
      'Aseguramiento de calidad y testing',
      'Arquitectura de software escalable',
      'Automatización de procesos backend'
    ],
    'Desarrollo Frontend': [
      'Desarrollo de aplicaciones con Angular',
      'Interfaces responsivas con HTML5 y CSS3',
      'JavaScript para interactividad web',
      'Desarrollo de landing pages con React',
      'Creación de sitios estáticos con Astro',
      'Diseño adaptable para móviles',
      'Frameworks UI: PrimeFaces y Bootstrap',
      'Validación de formularios web',
      'Optimización de rendimiento web',
      'Consumo de APIs REST'
    ],
    'Cloud y DevOps': [
      'Containerización con Docker',
      'Orquestación con Kubernetes',
      'Despliegue en Google Cloud Platform',
      'CI/CD con GitHub Actions y GitLab',
      'Análisis de código con SonarCloud',
      'Implementación de seguridad con Firebase',
      'Control de versiones con Git',
      'Gestión de proyectos con GitHub Projects',
      'Pruebas de rendimiento con JMeter',
      'Pruebas funcionales con Selenium'
    ]
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">Habilidades Técnicas</h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                  </svg>
                </div>
              </div>

              <div 
                className={`transition-all duration-300 px-4 ${
                  openItem === category ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className='pl-1'>•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
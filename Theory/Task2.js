// Task 2: Ciclo de Vida DevOps (8 minutos)
// Proceso continuo de mejora.

// # CALMS Loop - Ciclo de mejora continua
// # C - Change: Identificar oportunidades de mejora
// # A - Assess: Evaluar impacto y riesgos
// # L - Learn: Aprender de experiencias
// # M - Measure: Medir resultados
// # S - Sustain: Mantener mejoras

// # Ejemplo práctico:
// # 1. Change: "Deployments manuales son lentos"
// # 2. Assess: "Tomamos 2 horas por deployment"
// # 3. Learn: "CI/CD podría reducirlo a 10 minutos"
// # 4. Measure: "Después de implementar: 8 minutos promedio"
// # 5. Sustain: "Mantener y mejorar pipeline"
// Fases del Ciclo DevOps
const devopsLifecycle = {
  plan: {
    description: 'Planificar features y mejoras',
    tools: ['Jira', 'GitHub Issues', 'Trello'],
    practices: ['Planning poker', 'Sprint planning']
  },

  code: {
    description: 'Desarrollar y versionar código',
    tools: ['Git', 'GitHub', 'VS Code'],
    practices: ['Code reviews', 'Pair programming', 'TDD']
  },

  build: {
    description: 'Compilar y empaquetar aplicación',
    tools: ['npm/yarn', 'Webpack', 'Docker'],
    practices: ['Automated builds', 'Dependency management']
  },

  test: {
    description: 'Probar calidad del código',
    tools: ['Jest', 'Cypress', 'SonarQube'],
    practices: ['Unit tests', 'Integration tests', 'E2E tests']
  },

  release: {
    description: 'Preparar para despliegue',
    tools: ['Git tags', 'Semantic versioning'],
    practices: ['Release notes', 'Feature flags']
  },

  deploy: {
    description: 'Desplegar a producción',
    tools: ['Docker', 'Kubernetes', 'AWS'],
    practices: ['Blue-green deployment', 'Canary releases']
  },

  operate: {
    description: 'Mantener aplicación en producción',
    tools: ['Monitoring tools', 'Log aggregators'],
    practices: ['Incident response', 'Capacity planning']
  },

  monitor: {
    description: 'Observar y medir performance',
    tools: ['Grafana', 'Prometheus', 'ELK stack'],
    practices: ['Metrics collection', 'Alerting', 'Log analysis']
  }
};
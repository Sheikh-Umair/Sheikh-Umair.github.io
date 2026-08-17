const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Kubernetes", "Docker", "Terraform", "Helm"]
  },
  {
    category: "CI/CD & GitOps",
    items: ["GitHub Actions", "ArgoCD", "GitLab CI", "Jenkins"]
  },
  {
    category: "Observability & Security",
    items: ["Prometheus", "Grafana", "Trivy", "SonarQube"]
  }
];

const experience = [
  {
    role: "DevOps Engineer",
    company: "Production Environment",
    time: "2023 - Present",
    points: [
      "Designed and managed highly available Kubernetes clusters.",
      "Implemented GitOps workflows reducing deployment time by 40%.",
      "Set up full-stack observability with Prometheus and Grafana dashboards."
    ]
  }
];

const projects = [
  {
    title: "Production Kubernetes & Helm Architecture",
    desc: "Production-grade K8s manifests with HPA auto-scaling, ingress controllers, and RBAC security policies.",
    codeLink: "https://github.com/Sheikh-Umair/Sheikh-Umair.github.io/tree/main/k8s",
    tech: ["Kubernetes", "Helm", "HPA", "Ingress"],
    type: "k8s"
  },
  {
    title: "Prometheus & Grafana Observability Stack",
    desc: "Real-time monitoring dashboards tracking p95 latency, node resource saturation, and self-healing cluster metrics.",
    codeLink: "https://github.com/Sheikh-Umair/Sheikh-Umair.github.io/tree/main/monitoring",
    tech: ["Prometheus", "Grafana", "Metrics", "Alertmanager"],
    type: "monitoring"
  },
  {
    title: "GitOps & CI/CD Automation Workflow",
    desc: "Automated GitHub Actions workflow for linting, security scanning, image tagging, and deployment.",
    codeLink: "https://github.com/Sheikh-Umair/Sheikh-Umair.github.io/tree/main/.github/workflows",
    tech: ["GitHub Actions", "GitOps", "Trivy", "Docker"],
    type: "cicd"
  }
];

// Skills Render
const skillsContainer = document.getElementById('skills-container');
if(skillsContainer) {
  skillsContainer.innerHTML = skills.map(s => `
    <div class="card">
      <h3>${s.category}</h3>
      <div class="tags">${s.items.map(i => `<span class="tag">${i}</span>`).join('')}</div>
    </div>
  `).join('');
}

// Experience Render
const expContainer = document.getElementById('experience-container');
if(expContainer) {
  expContainer.innerHTML = experience.map(e => `
    <div class="exp-card">
      <div class="exp-head">
        <h3>${e.role} — <span class="highlight">${e.company}</span></h3>
        <span>${e.time}</span>
      </div>
      <ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
  `).join('');
}

// Projects Render (NO IMAGE TAGS HERE)
const projectsContainer = document.getElementById('projects-container');
if(projectsContainer) {
  projectsContainer.innerHTML = projects.map(p => {
    let diagramHtml = '';
    
    if(p.type === 'k8s') {
      diagramHtml = `
        <div class="arch-box">
          <div class="arch-node">Client</div>
          <div class="arch-arrow">➔</div>
          <div class="arch-node highlight-blue">Ingress</div>
          <div class="arch-arrow">➔</div>
          <div class="arch-cluster">
            <div class="arch-node highlight-green">Pod 01</div>
            <div class="arch-node highlight-green">Pod 02</div>
          </div>
        </div>`;
    } else if(p.type === 'monitoring') {
      diagramHtml = `
        <div class="arch-box">
          <div class="arch-node">Exporter</div>
          <div class="arch-arrow">➔</div>
          <div class="arch-node highlight-orange">Prometheus</div>
          <div class="arch-arrow">➔</div>
          <div class="arch-node highlight-yellow">Grafana</div>
        </div>`;
    } else {
      diagramHtml = `
        <div class="arch-box">
          <div class="arch-node">Git Push</div>
          <div class="arch-arrow">➔</div>
          <div class="arch-node highlight-blue">GH Actions</div>
          <div class="arch-arrow">➔</div>
          <div class="arch-node highlight-green">ArgoCD Sync</div>
        </div>`;
    }

    return `
      <div class="card">
        <div class="diagram-wrapper">
          ${diagramHtml}
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <a href="${p.codeLink}" target="_blank" class="code-btn">🔍 View Repository Source Code</a>
      </div>
    `;
  }).join('');
}

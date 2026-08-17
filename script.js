const skills = [
  {
    category: "Cloud Platforms & Migration",
    items: ["AWS (EKS, EC2, S3, IAM, Lambda)", "Azure (VMs, AKS)", "GCP Migration", "OCI Migration", "Hetzner Cloud"]
  },
  {
    category: "Containers & CI/CD",
    items: ["Docker", "Kubernetes", "Helm", "Jenkins", "GitHub Actions", "Argo CD", "Terraform", "Ansible"]
  },
  {
    category: "LLMOps & Infrastructure",
    items: ["Ollama", "OpenWebUI", "ChromaDB", "RAG Pipelines", "Cloudflare Workers AI"]
  },
  {
    category: "Monitoring & Security",
    items: ["Prometheus", "Grafana", "ELK Stack", "Trivy Scanning", "PostgreSQL", "MongoDB"]
  }
];

const experience = [
  {
    role: "DevOps Engineer",
    company: "Programmers Force (PF)",
    time: "July 2025 – Present | Lahore",
    points: [
      "Built modular Terraform configs cutting setup time from hours to under 20 mins (~18% spend optimization).",
      "Co-designed K8s clusters with HPAs absorbing 3-4x traffic surges with >99.9% uptime.",
      "Integrated Jenkins CI with ArgoCD for GitOps deployments (12-15 releases/day).",
      "Reduced p95 API response latency from ~400ms to <180ms via container tuning."
    ]
  },
  {
    role: "Intern DevOps Engineer",
    company: "Dafi Labs",
    time: "Jan 2025 – June 2025 | Lahore",
    points: [
      "Managed AWS staging and production core services (EC2, IAM, ALB, RDS, S3).",
      "Automated infrastructure provisioning via Terraform & Ansible, reducing effort by 50%."
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

document.getElementById('skills-container').innerHTML = skills.map(s => `
  <div class="card">
    <h3>${s.category}</h3>
    <div class="tags">${s.items.map(i => `<span class="tag">${i}</span>`).join('')}</div>
  </div>
`).join('');

document.getElementById('experience-container').innerHTML = experience.map(e => `
  <div class="exp-card">
    <div class="exp-head">
      <h3>${e.role} — <span class="highlight">${e.company}</span></h3>
      <span>${e.time}</span>
    </div>
    <ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
  </div>
`).join('');

document.getElementById('projects-container').innerHTML = projects.map(p => {
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
      <div class="img-wrapper">
        ${diagramHtml}
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <a href="${p.codeLink}" target="_blank" class="code-btn">🔍 View Repository Source Code</a>
    </div>
  `;
}).join('');

document.getElementById('skills-container').innerHTML = skills.map(s => `
  <div class="card">
    <h3>${s.category}</h3>
    <div class="tags">${s.items.map(i => `<span class="tag">${i}</span>`).join('')}</div>
  </div>
`).join('');

document.getElementById('experience-container').innerHTML = experience.map(e => `
  <div class="exp-card">
    <div class="exp-head">
      <h3>${e.role} — <span class="highlight">${e.company}</span></h3>
      <span>${e.time}</span>
    </div>
    <ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
  </div>
`).join('');

document.getElementById('projects-container').innerHTML = projects.map(p => `
  <div class="card">
    <div class="img-wrapper">
      <img src="${p.img}" alt="${p.title}" />
    </div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <a href="${p.codeLink}" target="_blank" class="code-btn">🔍 View Repository Source Code</a>
  </div>
`).join('');

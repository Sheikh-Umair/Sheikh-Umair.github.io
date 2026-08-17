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

const services = [
  {
    title: "Cloud Infrastructure on AWS",
    desc: "Highly available AWS environments for microservices, engineered for consistency and security across Dev, QA, UAT, and Production.",
    points: [
      "VPC, IAM, and API Gateway architecture",
      "Multi-environment consistency and governance",
      "Security and least-privilege access design"
    ]
  },
  {
    title: "Infrastructure as Code with Terraform",
    desc: "Manual, error-prone infrastructure turned into version-controlled Terraform code your team can review, trust, and reuse.",
    points: [
      "Terraform modules for VPCs, IAM roles, EKS, and API Gateways",
      "Consistent provisioning across every environment",
      "Migration from manual infra to full IaC"
    ]
  },
  {
    title: "Kubernetes & Container Orchestration",
    desc: "Production workloads running on hardened EKS clusters, with streamlined deployment workflows powered by Helm.",
    points: [
      "EKS cluster setup, RBAC, secrets, and pod orchestration",
      "Application packaging and deployment with Helm charts",
      "EKS version upgrades aligned with AWS recommendations"
    ]
  },
  {
    title: "CI/CD Pipeline Engineering",
    desc: "Every commit shipped with confidence, through fast and dependable pipelines built on the tools your team already uses.",
    points: [
      "Jenkins pipeline design and optimization",
      "GitHub Actions workflows",
      "Consistent build, test, and deploy stages"
    ]
  },
  {
    title: "Monitoring & Observability",
    desc: "Issues caught before your customers notice, with CloudWatch and Grafana dashboards and alerts tuned to what actually matters.",
    points: [
      "AWS CloudWatch metrics, logs, and alarms",
      "Grafana dashboards for engineering and leadership",
      "Faster detection and resolution of production issues"
    ]
  },
  {
    title: "Troubleshooting & Production Support",
    desc: "Calm, rapid resolution of production issues — minimizing downtime and keeping your systems performing at their best.",
    points: [
      "Rapid incident response and root-cause analysis",
      "Ongoing production support and maintenance",
      "Clear communication during and after incidents"
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
    desc: "Automated GitHub Actions pipeline — lint, security scan, build, push to registry, then ArgoCD syncs it straight to the live cluster.",
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

// Services Render
const servicesContainer = document.getElementById('services-container');
if(servicesContainer) {
  servicesContainer.innerHTML = services.map(s => `
    <div class="service-card">
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <ul class="check-list">
        ${s.points.map(p => `<li><span class="check-icon">✓</span>${p}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* ------------------------------------------------------------------
   Animated SVG architecture diagrams.
   Each returns a self-contained, responsive SVG (scales with the
   .diagram-wrapper width via viewBox — no fixed pixel dependency).
------------------------------------------------------------------- */

function diagramK8s() {
  return `
  <svg viewBox="0 0 380 190" width="100%" height="100%" class="arch-svg">
    <defs>
      <marker id="arrow-k8s" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#2a3244"/>
      </marker>
    </defs>
    <path d="M70,95 H130" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-k8s)"/>
    <path d="M195,95 H210 Q222,95 222,83 Q222,70 234,70" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-k8s)"/>
    <path d="M195,95 H210 Q222,95 222,107 Q222,120 234,120" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-k8s)"/>

    <rect class="arch-pulse" x="20" y="78" width="70" height="34" rx="8" fill="none" stroke="#e6ebf5" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;.9;0" dur="3s" repeatCount="indefinite"/>
    </rect>
    <rect class="arch-pulse" x="132" y="78" width="63" height="34" rx="8" fill="none" stroke="#38bdf8" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;0;.9;0" dur="3s" repeatCount="indefinite"/>
    </rect>
    <rect class="arch-pulse" x="236" y="55" width="70" height="30" rx="8" fill="none" stroke="#34d399" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;0;0;.9;0" dur="3s" repeatCount="indefinite"/>
    </rect>
    <rect class="arch-pulse" x="236" y="105" width="70" height="30" rx="8" fill="none" stroke="#34d399" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;0;0;0;.9;0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
    </rect>

    <rect x="20" y="78" width="70" height="34" rx="7" fill="#0b0f1a" stroke="#3a4258" stroke-width="1.4"/>
    <text x="55" y="95" text-anchor="middle" dominant-baseline="middle" font-size="10.5" font-weight="600" fill="#e6ebf5">Client</text>

    <rect x="132" y="78" width="63" height="34" rx="7" fill="#0b0f1a" stroke="#38bdf8" stroke-width="1.4"/>
    <text x="163" y="95" text-anchor="middle" dominant-baseline="middle" font-size="10.5" font-weight="600" fill="#38bdf8">Ingress</text>

    <rect x="236" y="55" width="70" height="30" rx="7" fill="#0b0f1a" stroke="#34d399" stroke-width="1.4"/>
    <text x="271" y="70" text-anchor="middle" dominant-baseline="middle" font-size="10.5" font-weight="600" fill="#34d399">Pod 01</text>

    <rect x="236" y="105" width="70" height="30" rx="7" fill="#0b0f1a" stroke="#34d399" stroke-width="1.4"/>
    <text x="271" y="120" text-anchor="middle" dominant-baseline="middle" font-size="10.5" font-weight="600" fill="#34d399">Pod 02</text>

    <text x="271" y="150" text-anchor="middle" font-size="8" fill="#8b95a7">HPA auto-scales pods</text>

    <circle r="4" fill="#38bdf8">
      <animateMotion dur="3s" repeatCount="indefinite" path="M55,95 H163 H222 V70 H271" keyPoints="0;0.32;0.64;1" keyTimes="0;0.32;0.64;1" calcMode="linear"/>
    </circle>
    <circle r="4" fill="#34d399">
      <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M55,95 H163 H222 V120 H271"/>
    </circle>
  </svg>`;
}

function diagramMonitoring() {
  return `
  <svg viewBox="0 0 380 190" width="100%" height="100%" class="arch-svg">
    <defs>
      <marker id="arrow-prom" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#2a3244"/>
      </marker>
    </defs>
    <path d="M85,95 H145" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-prom)"/>
    <path d="M235,95 H295" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-prom)"/>
    <path d="M190,80 Q190,45 260,45 Q305,45 305,72" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-prom)"/>

    <rect x="20" y="78" width="65" height="34" rx="8" fill="none" stroke="#e6ebf5" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;.9;0" dur="3s" repeatCount="indefinite"/>
    </rect>
    <rect x="147" y="72" width="88" height="46" rx="8" fill="none" stroke="#fb7f2e" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;.4;.9;.4;0" dur="3s" repeatCount="indefinite"/>
    </rect>
    <rect x="297" y="78" width="63" height="34" rx="8" fill="none" stroke="#f5a524" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;0;0;.9;0" dur="3s" repeatCount="indefinite"/>
    </rect>
    <rect x="262" y="20" width="82" height="26" rx="7" fill="none" stroke="#f97066" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;0;0;.9;0" dur="3s" begin="1.1s" repeatCount="indefinite"/>
    </rect>

    <rect x="20" y="78" width="65" height="34" rx="7" fill="#0b0f1a" stroke="#3a4258" stroke-width="1.4"/>
    <text x="52" y="95" text-anchor="middle" dominant-baseline="middle" font-size="10.5" font-weight="600" fill="#e6ebf5">Exporter</text>

    <rect x="147" y="72" width="88" height="46" rx="7" fill="#0b0f1a" stroke="#fb7f2e" stroke-width="1.4"/>
    <text x="191" y="95" text-anchor="middle" dominant-baseline="middle" font-size="10.5" font-weight="600" fill="#fb7f2e">Prometheus</text>

    <rect x="297" y="78" width="63" height="34" rx="7" fill="#0b0f1a" stroke="#f5a524" stroke-width="1.4"/>
    <text x="328" y="95" text-anchor="middle" dominant-baseline="middle" font-size="10.5" font-weight="600" fill="#f5a524">Grafana</text>

    <rect x="262" y="20" width="82" height="26" rx="7" fill="#0b0f1a" stroke="#f97066" stroke-width="1.4"/>
    <text x="303" y="33" text-anchor="middle" dominant-baseline="middle" font-size="9" font-weight="600" fill="#f97066">Alertmanager</text>

    <text x="303" y="150" text-anchor="middle" font-size="8" fill="#8b95a7">self-healing on threshold breach</text>

    <circle r="4" fill="#fb7f2e">
      <animateMotion dur="3s" repeatCount="indefinite" path="M52,95 H191 H328"/>
    </circle>
    <circle r="3.5" fill="#f97066">
      <animateMotion dur="3s" begin="1.1s" repeatCount="indefinite" path="M191,80 Q191,45 260,33 H303"/>
    </circle>
  </svg>`;
}

function diagramCicd() {
  return `
  <svg viewBox="0 0 380 190" width="100%" height="100%" class="arch-svg">
    <defs>
      <marker id="arrow-gha" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#2a3244"/>
      </marker>
    </defs>

    <path d="M55,55 V90" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-gha)"/>
    <path d="M55,90 H100" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-gha)"/>
    <path d="M170,90 H210" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-gha)"/>
    <path d="M280,90 H320" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-gha)"/>
    <path d="M355,105 V130 H55 V150" stroke="#2a3244" stroke-width="1.4" fill="none" marker-end="url(#arrow-gha)"/>

    <rect x="20" y="20" width="70" height="30" rx="7" fill="none" stroke="#e6ebf5" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;.9;0" dur="4s" repeatCount="indefinite"/>
    </rect>
    <rect x="100" y="73" width="70" height="34" rx="8" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;0;.4;.9;.4;0" dur="4s" repeatCount="indefinite"/>
    </rect>
    <rect x="210" y="73" width="70" height="34" rx="8" fill="none" stroke="#c084fc" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;0;0;0;.9;0" dur="4s" repeatCount="indefinite"/>
    </rect>
    <rect x="320" y="73" width="52" height="34" rx="8" fill="none" stroke="#34d399" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;0;0;0;0;.9;0" dur="4s" repeatCount="indefinite"/>
    </rect>
    <rect x="20" y="150" width="70" height="30" rx="7" fill="none" stroke="#22e07a" stroke-width="2" opacity="0">
      <animate attributeName="opacity" values="0;0;0;0;0;0;.9;0" dur="4s" repeatCount="indefinite"/>
    </rect>

    <rect x="20" y="20" width="70" height="30" rx="7" fill="#0b0f1a" stroke="#3a4258" stroke-width="1.4"/>
    <text x="55" y="35" text-anchor="middle" dominant-baseline="middle" font-size="10.5" font-weight="600" fill="#e6ebf5">Git Push</text>

    <rect x="100" y="73" width="70" height="34" rx="7" fill="#0b0f1a" stroke="#3b82f6" stroke-width="1.4"/>
    <text x="135" y="90" text-anchor="middle" dominant-baseline="middle" font-size="9" font-weight="600" fill="#3b82f6">GH Actions</text>

    <rect x="210" y="73" width="70" height="34" rx="7" fill="#0b0f1a" stroke="#c084fc" stroke-width="1.4"/>
    <text x="245" y="90" text-anchor="middle" dominant-baseline="middle" font-size="9" font-weight="600" fill="#c084fc">Registry</text>

    <rect x="320" y="73" width="52" height="34" rx="7" fill="#0b0f1a" stroke="#34d399" stroke-width="1.4"/>
    <text x="346" y="90" text-anchor="middle" dominant-baseline="middle" font-size="9" font-weight="600" fill="#34d399">ArgoCD</text>

    <rect x="20" y="150" width="70" height="30" rx="7" fill="#0b0f1a" stroke="#22e07a" stroke-width="1.4"/>
    <text x="55" y="165" text-anchor="middle" dominant-baseline="middle" font-size="10.5" font-weight="600" fill="#22e07a">Live App</text>

    <text x="135" y="120" text-anchor="middle" font-size="7.5" fill="#8b95a7">lint · trivy scan · build</text>

    <circle r="4" fill="#3b82f6">
      <animateMotion dur="4s" repeatCount="indefinite" path="M55,35 V90 H135 H245 H346 V130 H55 V165"/>
    </circle>
  </svg>`;
}

// Projects Render (animated SVG diagrams)
const projectsContainer = document.getElementById('projects-container');
if(projectsContainer) {
  projectsContainer.innerHTML = projects.map(p => {
    let diagramHtml = '';

    if(p.type === 'k8s') {
      diagramHtml = diagramK8s();
    } else if(p.type === 'monitoring') {
      diagramHtml = diagramMonitoring();
    } else {
      diagramHtml = diagramCicd();
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

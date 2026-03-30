const moduleLinks = [
  ["Core HR", "modules/core-hr.html"],
  ["Recruitment", "modules/recruitment.html"],
  ["Onboarding", "modules/onboarding.html"],
  ["Induction", "modules/induction.html"],
  ["Probation Evaluation", "modules/probation-evaluation.html"],
  ["Learning & Development", "modules/learning-development.html"],
  ["Leave Management", "modules/leave-management.html"],
  ["Reimbursement Management", "modules/reimbursement-management.html"],
  ["Visitor Management", "modules/visitor-management.html"],
  ["Fleet Management", "modules/fleet-management.html"],
  ["Payroll Management", "modules/payroll-management.html"],
  ["Performance Management", "modules/performance-management.html"],
  ["Exit & Full and Final", "modules/exit-full-final-management.html"]
];

function withBase(base, path) {
  if (path.startsWith("http")) return path;
  return `${base}${path}`;
}

function renderHeader() {
  const body = document.body;
  const base = body.dataset.base || "./";
  const page = body.dataset.page || "";
  const header = document.getElementById("site-header");
  if (!header) return;

  const navItems = [
    ["Home", "index.html", "home"],
    ["About Us", "about.html", "about"],
    ["Modules", "modules.html", "modules"],
    ["Pricing", "pricing.html", "pricing"],
    ["Blogs", "blogs.html", "blogs"],
    ["HR Podcast", "podcast.html", "podcast"],
    ["Contact Us", "contact.html", "contact"]
  ];

  header.className = "site-header";
  header.innerHTML = `
    <div class="container nav-shell">
      <a class="brand" href="${withBase(base, "index.html")}" aria-label="FuzionHR home">
        <img src="${withBase(base, "assets/images/logo-light.png")}" alt="FuzionHR logo on light background">
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        ${navItems.map(([label, href, key]) => `<a href="${withBase(base, href)}" class="${page === key ? "active" : ""}">${label}</a>`).join("")}
      </nav>
      <div class="nav-actions">
        <a class="btn btn-secondary" href="${withBase(base, "pricing.html")}">View Pricing</a>
        <a class="btn btn-primary" href="${withBase(base, "contact.html")}">Book Demo</a>
        <button class="menu-toggle" type="button" aria-label="Toggle menu">☰</button>
      </div>
    </div>
  `;

  const toggle = header.querySelector(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => header.classList.toggle("open"));
  }
}

function renderFooter() {
  const body = document.body;
  const base = body.dataset.base || "./";
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  footer.className = "footer";
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <img class="footer-logo" src="${withBase(base, "assets/images/logo-dark.png")}" alt="FuzionHR logo on dark background">
          <p>FuzionHR is a strategic HRMS and payroll platform built for Indian businesses that want cleaner HR operations, better employee experience, and faster scale.</p>
          <div class="tag-list">
            <span class="tag">Core HR</span>
            <span class="tag">Payroll</span>
            <span class="tag">Recruitment</span>
            <span class="tag">Performance</span>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div class="footer-links">
            <a href="${withBase(base, "about.html")}">About Us</a>
            <a href="${withBase(base, "modules.html")}">Modules</a>
            <a href="${withBase(base, "pricing.html")}">Pricing</a>
            <a href="${withBase(base, "blogs.html")}">Blogs</a>
            <a href="${withBase(base, "podcast.html")}">HR Podcast</a>
            <a href="${withBase(base, "contact.html")}">Contact Us</a>
          </div>
        </div>
        <div>
          <h3>Top Modules</h3>
          <div class="footer-links">
            ${moduleLinks.slice(0, 7).map(([label, href]) => `<a href="${withBase(base, href)}">${label}</a>`).join("")}
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div class="footer-links">
            <a href="mailto:connect@fuzionhr.com">connect@fuzionhr.com</a>
            <a href="tel:+919879775917">+91 98797 75917</a>
            <a href="tel:+919909413561">+91 99094 13561</a>
            <a href="tel:+919558554030">+91 95585 54030</a>
            <span>Vadodara, Ahmedabad, Bardoli</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright <span data-current-year></span> FuzionHR. All rights reserved.</p>
        <p>Your strategic HR partner for modern workforce management.</p>
      </div>
    </div>
  `;

  const year = footer.querySelector("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});

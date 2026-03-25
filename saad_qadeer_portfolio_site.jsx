export default function SaadQadeerPortfolio() {
  const highlights = [
    "MSc Computing graduate from De Montfort University with Distinction",
    "Hands-on IT support and systems administration experience in a live business environment",
    "Built software, analytics, and machine learning projects across web, UX, and predictive modelling",
    "Based in the UK and open to sponsored opportunities in IT support, business systems, data, and junior software roles",
  ];

  const experience = [
    {
      title: "IT Support & GM Systems Administration",
      company: "Haute Dolci",
      period: "Aug 2024 – Present",
      points: [
        "Serve as the primary point of contact for in-house technology including POS systems, digital signage, printers, handheld ordering devices, and VoIP tools.",
        "Troubleshoot hardware and software issues during high-volume operating hours to minimise downtime and keep service running smoothly.",
        "Manage user access for sensitive business systems and support CCTV and secure payment gateway operations.",
        "Help coordinate operations across a 15-person team using task-management and reporting workflows.",
      ],
    },
  ];

  const projects = [
    {
      name: "Predictive Analytics for Gold Market Valuations",
      stack: "Python, Scikit-learn, LSTM, ARIMA",
      impact: "Built time-series forecasting models for gold prices and achieved 92% accuracy in adjusted closing price prediction.",
    },
    {
      name: "Qazi Dairies",
      stack: "MERN Stack, Heroku, Agile",
      impact: "Developed an inventory and order-tracking web app that expanded client reach by 200+ customers and reduced manual workflow errors by 30%.",
    },
    {
      name: "EDOMHI",
      stack: "Figma, UX Research, Product Design",
      impact: "Led research and prototype work for a 6-member team, validated with 50+ users, and improved usability scores by 40%.",
    },
    {
      name: "Credit Card Defaulters",
      stack: "Python, Pandas, Predictive Modelling",
      impact: "Analysed 10K+ customer records and built a model that achieved 85% accuracy in identifying high-risk defaulters.",
    },
    {
      name: "TechYard",
      stack: "Web Development, Payment Integration",
      impact: "Collaborated on a responsive eCommerce web app for electronic gadgets with payments and inventory modules.",
    },
    {
      name: "Salarium",
      stack: "Web App, Team Leadership",
      impact: "Led a 4-member team to develop a payroll tracker that streamlined salary calculations and compliance reporting for SMEs.",
    },
  ];

  const skills = [
    "Python",
    "JavaScript",
    "C++",
    "PHP",
    "HTML",
    "CSS",
    "Data Analysis",
    "EDA",
    "Machine Learning",
    "Software Development",
    "Project Management",
    "UI/UX",
    "Human-Computer Interaction",
    "IT Support",
    "Systems Administration",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-5%] top-[10%] h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200 backdrop-blur">
                Open to sponsored opportunities
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
                Saad Qadeer
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-300 md:text-2xl">
                IT Support, Systems Administration, Software Development, and Data Projects — presented in a polished portfolio for recruiters and hiring managers.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                UK-based Computing graduate with real business-facing technical experience. I solve operational problems, support critical systems, and build software and analytics solutions that improve performance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:saad_qadeer@outlook.com"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-white/20 transition hover:-translate-y-0.5"
                >
                  Contact Me
                </a>
                <a
                  href="tel:+447774021630"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur transition hover:bg-white/10"
                >
                  Call Me
                </a>
                <a
                  href="#projects"
                  className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20"
                >
                  View Projects
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-semibold">92%</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Forecasting accuracy in gold price prediction</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-semibold">200+</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Customers reached through a web platform project</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-semibold">50+</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Users involved in prototype validation and UX testing</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-400/20 via-indigo-500/10 to-fuchsia-500/20 blur-2xl" />
              <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="rounded-[28px] border border-dashed border-white/15 bg-slate-900/80 p-4">
                  <img
                    src="/saad-profile.jpg"
                    alt="Saad Qadeer"
                    className="h-[420px] w-full rounded-[24px] object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    style={{ display: 'none' }}
                    className="h-[420px] w-full items-center justify-center rounded-[24px] border border-dashed border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 text-center"
                  >
                    <div className="max-w-xs px-6">
                      <p className="text-lg font-semibold text-slate-100">Add your profile photo here</p>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        Save your image as
                        <span className="mx-1 rounded bg-white/10 px-2 py-1 text-slate-200">saad-profile.jpg</span>
                        in the project folder.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm leading-7 text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">About me</p>
            <h2 className="mt-4 text-3xl font-semibold">A practical technologist with business impact</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              I combine academic training in computing with hands-on experience supporting live business operations. My work spans IT troubleshooting, systems administration, software development, analytics, and user-focused product design.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              I am especially interested in roles where I can strengthen operations, improve internal systems, and grow across IT, software, and data teams while adding measurable value from day one.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-200">Education & certification</p>
            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <h3 className="text-xl font-medium">De Montfort University</h3>
                <p className="mt-1 text-slate-300">MSc Computing · Distinction</p>
                <p className="text-sm text-slate-400">Jan 2023 – Jul 2024</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <h3 className="text-xl font-medium">Lahore University of Management Sciences</h3>
                <p className="mt-1 text-slate-300">BSc Computer Science</p>
                <p className="text-sm text-slate-400">Sep 2018 – Jul 2022</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <h3 className="text-xl font-medium">ITIL® 4 Foundation</h3>
                <p className="mt-1 text-slate-300">Certificate in IT Service Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">What I bring</p>
              <h2 className="mt-2 text-3xl font-semibold">Why recruiters should shortlist me</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              A rare combination of customer-facing technical support, business systems exposure, and project experience across software, UX, and analytics.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold">Operations-ready</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Comfortable supporting critical systems in fast-paced environments where uptime and responsiveness matter.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold">Technically versatile</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Brings skills across IT support, software development, machine learning, data analysis, and UX-focused delivery.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold">Business-aware</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Understands how technology supports service quality, workflow efficiency, customer experience, and day-to-day operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-200">Experience</p>
        <div className="mt-6 space-y-6">
          {experience.map((role) => (
            <div key={role.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{role.title}</h3>
                  <p className="mt-1 text-slate-300">{role.company}</p>
                </div>
                <p className="text-sm text-slate-400">{role.period}</p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {role.points.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm leading-7 text-slate-200">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Selected projects</p>
            <h2 className="mt-2 text-3xl font-semibold">Proof of technical range</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Projects across forecasting, eCommerce, analytics, UX validation, and internal business tools.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="group rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                {project.stack}
              </div>
              <h3 className="text-xl font-semibold leading-8">{project.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.impact}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-200">Skills</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/5 to-fuchsia-500/10 p-8 md:p-10 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold">Let’s talk about how I can add value</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            I am open to opportunities in IT support, systems administration, software development, operations technology, and data-focused roles. I would welcome the opportunity to speak with recruiters and hiring managers about where I can contribute.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a href="mailto:saad_qadeer@outlook.com" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-white/10">
              saad_qadeer@outlook.com
            </a>
            <a href="tel:+447774021630" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-100">
              +44 7774 021630
            </a>
            <a href="#" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-100">
              Add LinkedIn URL
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

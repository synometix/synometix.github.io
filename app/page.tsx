"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const bootText = `> boot genome_os

Initializing molecular engine...
Loading transcriptomics modules...
Loading genomics modules...

Connecting to NCBI...
Connecting to UniProt...
Connecting to PDB...

Galaxy READY
Nextflow READY
Python READY
R READY

Research Engine ONLINE

Every genome contains a story.
Welcome to SYNOMETIX.`;

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTypedText(bootText.slice(0, i));
      i++;

      if (i > bootText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".navlinks a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) => {
              const isActive =
                link.getAttribute("href") === `#${entry.target.id}`;
              link.classList.toggle("active", isActive);
            });
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">SYNOMETIX</div>

        <div className="navlinks">
          <a href="#research">Research</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#services">Services</a>
          <a href="#academy">Academy</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">
          Collaborate →
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-left">

          <div className="tag">
            Genomics • Bioinformatics • Open Science
          </div>

          <h1>
            Every cell writes
            <br />
            a story.
          </h1>

          <h2>
            We build the tools
            <br />
            to read it.
          </h2>

          <p>
            SYNOMETIX develops reproducible genomics workflows,
            bioinformatics solutions, and practical learning
            experiences that empower the next generation of
            computational biology.
          </p>

          <div className="buttons">
            <a href="#research" className="btn-primary">
              Explore Research
            </a>

            <a href="#academy" className="btn-secondary">
              Join The Mission
            </a>
          </div>

        </div>

        <div className="hero-right">
          <img src="/hero-dna.png" alt="DNA Helix" className="hero-dna" />
        </div>

      </section>

      {/* RESEARCH */}

      <section id="research" className="section">

        <span className="section-tag">
          RESEARCH
        </span>

        <h3>
          Turning biological data into discovery.
        </h3>

        <p>
          We build reproducible bioinformatics pipelines
          for transcriptomics, genomics, variant analysis,
          differential expression studies and data visualization.
        </p>

        <div className="cards">

          <div className="card">
            <h4>NGS Analysis</h4>
            <p>
              RNA-Seq, WGS, Variant Calling,
              Functional Annotation.
            </p>
          </div>

          <div className="card">
            <h4>Pipeline Development</h4>
            <p>
              Reproducible workflows using
              Nextflow, Galaxy and Linux.
            </p>
          </div>

          <div className="card">
            <h4>Open Science</h4>
            <p>
              Transparent, documented and
              shareable research workflows.
            </p>
          </div>

        </div>

      </section>

      {/* ECOSYSTEM SECTION */}

      <section id="ecosystem" className="section ecosystem">

        <span className="section-tag">
          THE ECOSYSTEM WE BUILD WITH
        </span>

        <h3>Powered by the world's scientific infrastructure.</h3>

        <p>
          Modern bioinformatics stands on decades of open scientific
          infrastructure. These databases, repositories and platforms
          shape the workflows we learn, use and build around.
        </p>

        <div className="marquee">

          <div className="marquee-track">

            <img src="/logos/ncbi.svg"/>
            <img src="/logos/pdb.png"/>
            <img src="/logos/uniprot.svg"/>
            <img src="/logos/ensembl.png"/>
            <img src="/logos/embl.png"/>
            <img src="/logos/geo.svg"/>

            {/* duplicate */}

            <img src="/logos/ncbi.svg"/>
            <img src="/logos/pdb.png"/>
            <img src="/logos/uniprot.svg"/>
            <img src="/logos/ensembl.png"/>
            <img src="/logos/embl.png"/>
            <img src="/logos/geo.svg"/>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section id="services" className="section">

        <span className="section-tag">
          SERVICES
        </span>

        <h3>
          Bioinformatics solutions built for researchers.
        </h3>

        <p>
          From data processing to publication-ready
          figures, we help research groups accelerate
          biological discovery.
        </p>

        <div className="cards">

          <div className="card">
            <h4>Data Analysis</h4>
            <p>
              End-to-end NGS and omics analysis.
            </p>
          </div>

          <div className="card">
            <h4>Consulting</h4>
            <p>
              Experimental design and workflow planning.
            </p>
          </div>

          <div className="card">
            <h4>Visualization</h4>
            <p>
              Publication-ready plots and reports.
            </p>
          </div>

        </div>

      </section>

      {/* ACADEMY */}

      <section id="academy" className="section">

        <span className="section-tag">
          ACADEMY
        </span>

        <h3>
          Learn modern bioinformatics.
        </h3>

        <p>
          Hands-on workshops, practical projects,
          genomics training and computational biology education.
        </p>

        <div className="cards">

          <div className="card">
            <h4>RNA-Seq Training</h4>
          </div>

          <div className="card">
            <h4>Linux For Bioinformatics</h4>
          </div>

          <div className="card">
            <h4>Galaxy Platform Workshops</h4>
          </div>

        </div>

      </section>

      {/* GENOME OS */}

      <section id="genome-os" className="section terminal-section">
        <div className="container">

          <span className="section-tag">GENOME OS</span>

          <h2 className="section-title">
            Computational Biology. Reimagined.
          </h2>

          <p className="section-text">
            We don't just analyze biological data—we build reproducible systems that transform sequencing into discovery.
          </p>

          <div className="terminal-window">

          <div className="terminal-top">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>

            <span className="terminal-title">
              genome_os — live session
            </span>
          </div>
        

          <pre>{typedText}<span className="cursor">|</span></pre>

        </div>

        <div className="status-grid">

        <div>
          <span>Genome OS</span>
          <strong>ONLINE</strong>
        </div>

        <div>
          <span>Research Engine</span>
          <strong>READY</strong>
        </div>

        <div>
          <span>Open Science</span>
          <strong>ACTIVE</strong>
        </div>

        <div>
          <span>Version</span>
          <strong>0.1 Alpha</strong>
        </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="section contact">

        <span className="section-tag">
          CONTACT
        </span>

        <h3>Start a Conversation.</h3>

        <p>
          Whether you're a researcher, student, startup or collaborator—
          let's build something meaningful together.
        </p>

        <div className="contact-grid">

          <a
            href="https://www.linkedin.com/in/synometix/"
            target="_blank"
            className="contact-card"
          >

            <span>LINKEDIN</span>

            <h4>@synometix</h4>

          </a>

          <a href="mailto:synometix@gmail.com" className="contact-card">

            <span>EMAIL</span>

            <h4>synometix@gmail.com</h4>

          </a>

          <a
            href="https://instagram.com/synometix"
            target="_blank"
            className="contact-card"
          >

            <span>INSTAGRAM</span>

            <h4>@synometix</h4>

          </a>

        </div>

      </section>

      <footer>
        © 2026 SYNOMETIX
      </footer>

    </main>
  );
}

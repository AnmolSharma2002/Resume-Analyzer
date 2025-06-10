import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import Link from "next/link";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const featuresList = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      title: "Resume Scanner",
      description:
        "Upload your resume to see if it passes ATS systems and get a compatibility score.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      title: "Keyword Analysis",
      description:
        "Identify missing keywords and get suggestions to improve your resume's matching score.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
      title: "Format Optimization",
      description:
        "Get suggestions on formatting improvements to make your resume more ATS-friendly.",
    },
  ];

  const testimonials = [
    {
      quote:
        "This ATS checker helped me understand why I wasn't getting callbacks. After implementing the suggestions, I got 3 interviews in one week!",
      author: "Michael Chen",
      position: "Software Engineer",
    },
    {
      quote:
        "The keyword analysis feature is incredible. It helped me tailor my resume perfectly for each job application.",
      author: "Sarah Johnson",
      position: "Marketing Specialist",
    },
    {
      quote:
        "As a hiring manager, I recommend this tool to all candidates. It truly helps create resumes that get through our ATS systems.",
      author: "Robert Garcia",
      position: "HR Director",
    },
  ];

  return (
    <div className={styles.homePage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 30C14.477 30 10 25.523 10 20C10 14.477 14.477 10 20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30Z"
                  fill="#3366FF"
                />
              </svg>
              <span>ResumeATS</span>
            </div>

            <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
              <ul className={styles.navList}>
                <li>
                  <Link href="#features" className={styles.navLink}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className={styles.navLink}>
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className={styles.navLink}>
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className={styles.navLink}>
                    Pricing
                  </Link>
                </li>
              </ul>
              <div className={styles.navButtons}>
                <Link href="/login" className={styles.loginBtn}>
                  Log In
                </Link>
                <Link href="/signup" className={styles.signupBtn}>
                  Sign Up
                </Link>
              </div>
            </nav>

            <button
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants}>
              Get Your Resume <span>Past The Bots</span>
            </motion.h1>
            <motion.p variants={itemVariants}>
              Optimize your resume for Applicant Tracking Systems with our
              AI-powered tool. Increase your chances of landing interviews by up
              to 70%.
            </motion.p>
            <motion.div className={styles.heroButtons} variants={itemVariants}>
              <Link href="/signup" className={styles.primaryBtn}>
                Get Started — It's Free
              </Link>
              <Link href="/dashboard" className={styles.secondaryBtn}>
                View Dashboard
              </Link>
              <Link href="#how-it-works" className={styles.secondaryBtn}>
                See How It Works
              </Link>
            </motion.div>
            <motion.div className={styles.statsRow} variants={itemVariants}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>75%</span>
                <span className={styles.statLabel}>
                  of resumes are rejected by ATS before a human sees them
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>60K+</span>
                <span className={styles.statLabel}>resumes optimized</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>85%</span>
                <span className={styles.statLabel}>success rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Features to Make Your Resume Stand Out</h2>
            <p>
              Our AI-powered tools analyze your resume against job descriptions
              to increase your interview chances
            </p>
          </div>

          <div className={styles.featureGrid}>
            {featuresList.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>How It Works</h2>
            <p>Get your resume optimized in three simple steps</p>
          </div>

          <div className={styles.stepsContainer}>
            <div className={styles.stepsLine}></div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Upload Your Resume</h3>
                <p>
                  Upload your resume in any common format (PDF, DOCX, TXT) to
                  our secure platform.
                </p>
              </div>
              <div className={styles.stepImage}>
                <img src="/api/placeholder/300/200" alt="Upload Resume" />
              </div>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Add Job Description</h3>
                <p>
                  Paste the job description to analyze keyword compatibility and
                  formatting requirements.
                </p>
              </div>
              <div className={styles.stepImage}>
                <img src="/api/placeholder/300/200" alt="Add Job Description" />
              </div>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Get Detailed Analysis</h3>
                <p>
                  Receive your ATS score, keyword analysis, and actionable
                  recommendations to improve.
                </p>
              </div>
              <div className={styles.stepImage}>
                <img src="/api/placeholder/300/200" alt="Get Analysis" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>What Our Users Say</h2>
            <p>
              Thousands of job seekers have improved their interview chances
              with our ATS optimization
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.quoteIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6667 18.6667C12.5076 18.6667 14 17.1743 14 15.3333C14 13.4924 12.5076 12 10.6667 12C8.82572 12 7.33334 13.4924 7.33334 15.3333C7.33334 17.1743 8.82572 18.6667 10.6667 18.6667Z"
                      fill="#3366FF"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M21.3333 18.6667C23.1743 18.6667 24.6667 17.1743 24.6667 15.3333C24.6667 13.4924 23.1743 12 21.3333 12C19.4924 12 18 13.4924 18 15.3333C18 17.1743 19.4924 18.6667 21.3333 18.6667Z"
                      fill="#3366FF"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M10.6667 18.6667V22.6667C10.6667 23.2855 10.9124  
                      23.879 11.3499 24.3166C11.7875 24.7542 12.3812 25 13 25H14.3333"
                      stroke="#3366FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.3333 18.6667V22.6667C21.3333 23.2855 21.0876 23.879 20.6501 24.3166C20.2125 24.7542 19.6188 25 19 25H17.6667"
                      stroke="#3366FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.33334 15.3333H4V13.6667C4 12.7826 4.35119 11.9348 4.97631 11.3096C5.60143 10.6845 6.44928 10.3333 7.33334 10.3333"
                      stroke="#3366FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 15.3333H14.6667V13.6667C14.6667 12.7826 15.0179 11.9348 15.643 11.3096C16.2681 10.6845 17.1159 10.3333 18 10.3333"
                      stroke="#3366FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <blockquote>{testimonial.quote}</blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <div className={styles.avatarInitial}>
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={styles.pricing}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Simple, Transparent Pricing</h2>
            <p>Choose the plan that fits your needs</p>
          </div>

          <div className={styles.pricingGrid}>
            <motion.div
              className={`${styles.pricingCard} ${styles.freePlan}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.planHeader}>
                <h3>Free</h3>
                <div className={styles.planPrice}>
                  <span className={styles.price}>$0</span>
                  <span className={styles.period}>/month</span>
                </div>
                <p>Perfect for trying our services</p>
              </div>
              <ul className={styles.planFeatures}>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>3 Resume Scans/Month</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Basic ATS Analysis</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Keyword Identification</span>
                </li>
              </ul>
              <Link href="/signup" className={styles.planButton}>
                Get Started
              </Link>
            </motion.div>

            <motion.div
              className={`${styles.pricingCard} ${styles.proPlan}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.popularBadge}>Most Popular</div>
              <div className={styles.planHeader}>
                <h3>Professional</h3>
                <div className={styles.planPrice}>
                  <span className={styles.price}>$12</span>
                  <span className={styles.period}>/month</span>
                </div>
                <p>For serious job seekers</p>
              </div>
              <ul className={styles.planFeatures}>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Unlimited Resume Scans</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Advanced ATS Analysis</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Keyword Optimization</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Format Suggestions</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Resume Templates</span>
                </li>
              </ul>
              <Link href="/signup" className={styles.planButton}>
                Get Started
              </Link>
            </motion.div>

            <motion.div
              className={`${styles.pricingCard} ${styles.enterprisePlan}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className={styles.planHeader}>
                <h3>Enterprise</h3>
                <div className={styles.planPrice}>
                  <span className={styles.price}>$29</span>
                  <span className={styles.period}>/month</span>
                </div>
                <p>For career professionals</p>
              </div>
              <ul className={styles.planFeatures}>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Everything in Professional</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>AI Content Writer</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Cover Letter Generator</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>1-on-1 Expert Review</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Priority Support</span>
                </li>
              </ul>
              <Link href="/signup" className={styles.planButton}>
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Optimize Your Resume?</h2>
            <p>
              Join thousands of job seekers who have improved their interview
              chances with our ATS optimization tool.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/signup" className={styles.primaryBtn}>
                Get Started For Free
              </Link>
              <Link href="/contact" className={styles.outlineBtn}>
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 30C14.477 30 10 25.523 10 20C10 14.477 14.477 10 20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30Z"
                    fill="#3366FF"
                  />
                </svg>
                <span>ResumeATS</span>
              </div>
              <p>Smart resume optimization for modern job seekers</p>
              <div className={styles.footerSocial}>
                <h5>Follow Us</h5>
                <div className={styles.socialIcons}>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerLinks}>
              <div className={styles.linkGroup}>
                <h5>Product</h5>
                <ul>
                  <li>
                    <Link href="#features">Features</Link>
                  </li>
                  <li>
                    <Link href="#pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#how-it-works">How It Works</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.linkGroup}>
                <h5>Company</h5>
                <ul>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.linkGroup}>
                <h5>Legal</h5>
                <ul>
                  <li>
                    <Link href="/privacy">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} ResumeATS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

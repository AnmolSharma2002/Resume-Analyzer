import { useState } from "react";
import { loginUser } from "@/adapter/servies";
import styles from "./login.module.scss";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate login delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await loginUser(credentials);
      toast.success("Login successful!");
      // Handle successful login here
    } catch (error) {
      toast.error(error?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
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

  return (
    <div className={styles.loginContainer}>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className={styles.loginContent}>
        <motion.div
          className={styles.formContainer}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className={styles.logoContainer} variants={itemVariants}>
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
            </div>
            <h1>Welcome back</h1>
          </motion.div>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Enter your credentials to access your account
          </motion.p>

          <motion.form onSubmit={handleSubmit} variants={containerVariants}>
            <motion.div className={styles.inputGroup} variants={itemVariants}>
              <label htmlFor="email">Email Address</label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
                <svg
                  className={styles.inputIcon}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 3.33325H3.33334C2.41667 3.33325 1.67501 4.08325 1.67501 4.99992L1.66667 14.9999C1.66667 15.9166 2.41667 16.6666 3.33334 16.6666H16.6667C17.5833 16.6666 18.3333 15.9166 18.3333 14.9999V4.99992C18.3333 4.08325 17.5833 3.33325 16.6667 3.33325ZM16.6667 14.9999H3.33334V6.66659L10 10.8333L16.6667 6.66659V14.9999ZM10 9.16659L3.33334 4.99992H16.6667L10 9.16659Z"
                    fill="#6E7191"
                  />
                </svg>
              </div>
            </motion.div>

            <motion.div className={styles.inputGroup} variants={itemVariants}>
              <label htmlFor="password">Password</label>
              <div className={styles.inputWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
                <svg
                  className={styles.inputIcon}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <path
                      d="M10 4.16675C5.83334 4.16675 2.27501 6.75008 0.833344 10.4167C2.27501 14.0834 5.83334 16.6667 10 16.6667C14.1667 16.6667 17.725 14.0834 19.1667 10.4167C17.725 6.75008 14.1667 4.16675 10 4.16675ZM10 14.1667C7.70001 14.1667 5.83334 12.3001 5.83334 10.0001C5.83334 7.70008 7.70001 5.83341 10 5.83341C12.3 5.83341 14.1667 7.70008 14.1667 10.0001C14.1667 12.3001 12.3 14.1667 10 14.1667ZM10 7.50008C8.61667 7.50008 7.50001 8.61675 7.50001 10.0001C7.50001 11.3834 8.61667 12.5001 10 12.5001C11.3833 12.5001 12.5 11.3834 12.5 10.0001C12.5 8.61675 11.3833 7.50008 10 7.50008Z"
                      fill="#6E7191"
                    />
                  ) : (
                    <path
                      d="M10 4.16675C5.83334 4.16675 2.27501 6.75008 0.833344 10.4167C2.27501 14.0834 5.83334 16.6667 10 16.6667C14.1667 16.6667 17.725 14.0834 19.1667 10.4167C17.725 6.75008 14.1667 4.16675 10 4.16675ZM10 14.1667C7.70001 14.1667 5.83334 12.3001 5.83334 10.0001C5.83334 7.70008 7.70001 5.83341 10 5.83341C12.3 5.83341 14.1667 7.70008 14.1667 10.0001C14.1667 12.3001 12.3 14.1667 10 14.1667ZM10 7.50008C8.61667 7.50008 7.50001 8.61675 7.50001 10.0001C7.50001 11.3834 8.61667 12.5001 10 12.5001C11.3833 12.5001 12.5 11.3834 12.5 10.0001C12.5 8.61675 11.3833 7.50008 10 7.50008Z"
                      fill="#6E7191"
                    />
                  )}
                </svg>
              </div>
              <div className={styles.forgotPassword}>
                <a href="#">Forgot password?</a>
              </div>
            </motion.div>

            <motion.div className={styles.rememberMe} variants={itemVariants}>
              <label className={styles.checkbox}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
                Remember me
              </label>
            </motion.div>

            <motion.button
              type="submit"
              className={`${styles.loginButton} ${
                loading ? styles.loading : ""
              }`}
              disabled={loading}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? <div className={styles.spinner}></div> : "Sign In"}
            </motion.button>

            <motion.div className={styles.divider} variants={itemVariants}>
              <span>or continue with</span>
            </motion.div>

            <motion.div className={styles.socialLogins} variants={itemVariants}>
              <button type="button" className={styles.socialButton}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.62 22.56 12.25Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.19 18.63 6.8 16.73 5.95 14.14H2.27V16.98C4.07 20.57 7.77 23 12 23Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.95 14.14C5.73 13.46 5.6 12.75 5.6 12C5.6 11.25 5.73 10.54 5.95 9.86V7.02H2.27C1.54 8.52 1.12 10.22 1.12 12C1.12 13.78 1.54 15.48 2.27 16.98L5.95 14.14Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.37C13.54 5.37 14.95 5.91 16.04 6.94L19.16 3.82C17.45 2.22 14.97 1.22 12 1.22C7.77 1.22 4.07 3.65 2.27 7.24L5.95 10.08C6.8 7.49 9.19 5.37 12 5.37Z"
                    fill="#EA4335"
                  />
                </svg>
              </button>
              <button type="button" className={styles.socialButton}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="#1877F2"
                  />
                </svg>
              </button>
              <button type="button" className={styles.socialButton}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L11.03 14.933L5.152 21.75H1.84L9.552 12.915L1.407 2.25H8.224L12.868 8.481L18.244 2.25ZM17.082 19.77H18.93L7.186 4.126H5.218L17.082 19.77Z"
                    fill="black"
                  />
                </svg>
              </button>
            </motion.div>

            <motion.p className={styles.signupPrompt} variants={itemVariants}>
              Don't have an account? <a href="#">Sign up</a>
            </motion.p>
          </motion.form>
        </motion.div>

        <div className={styles.illustrationContainer}>
          <div className={styles.backgroundShape}></div>
          <div className={styles.patternGrid}></div>
          <motion.div
            className={styles.floatingCard}
            initial={{ y: 0 }}
            animate={{ y: ["0px", "-15px", "0px"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={styles.cardContent}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2.66675C8.64002 2.66675 2.66669 8.64008 2.66669 16.0001C2.66669 23.3601 8.64002 29.3334 16 29.3334C23.36 29.3334 29.3334 23.3601 29.3334 16.0001C29.3334 8.64008 23.36 2.66675 16 2.66675ZM13.3334 22.0001L7.33335 16.0001L9.33335 14.0001L13.3334 18.0001L22.6667 8.66675L24.6667 10.6667L13.3334 22.0001Z"
                  fill="#4CAF50"
                />
              </svg>
              <h3>Secure Authentication</h3>
              <p>Your data is protected with enterprise-grade security</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.floatingCardAlt}
            initial={{ y: 0 }}
            animate={{ y: ["0px", "-20px", "0px"] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div className={styles.cardContent}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6667 5.33325H5.33335C3.86669 5.33325 2.66669 6.53325 2.66669 7.99992V23.9999C2.66669 25.4666 3.86669 26.6666 5.33335 26.6666H26.6667C28.1334 26.6666 29.3334 25.4666 29.3334 23.9999V7.99992C29.3334 6.53325 28.1334 5.33325 26.6667 5.33325ZM26.6667 23.9999H5.33335V13.3333H26.6667V23.9999ZM26.6667 10.6666H5.33335V7.99992H26.6667V10.6666Z"
                  fill="#FF9800"
                />
              </svg>
              <h3>Easy Access</h3>
              <p>One-click login to all your connected services</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

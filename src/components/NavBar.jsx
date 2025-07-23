import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: 'Flowgenix', description: 'Document Automation', href: '/flowgenix' },
    { name: 'AutoRecon', description: 'Product Matching', href: '/autorecon' },
    { name: 'PriceGuard', description: 'Rate Anomaly Detection', href: '/priceguard' },
    { name: 'SmartSpec', description: 'Product Specification', href: '/smartspec' },
    { name: 'InboxIntelli', description: 'Email-to-ERP Bridge', href: '/inboxintelli' },
    { name: 'ClaimWise', description: 'Warranty Claim Validation', href: '/claimwise' },
  ];

  // Animation variants
  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      height: 0, 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-surface/95 backdrop-blur-lg shadow-elegant border-b border-secondary-100' 
            : 'bg-surface/90 backdrop-blur-sm'
        }`}
        variants={navVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-6"> {/* Increased py-2 to py-6 for taller header */}
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="flex items-center group flex-shrink-0 relative">
                <motion.img 
                  src="/logo.png" 
                  alt="VelionIQ Logo" 
                  className="h-12 w-auto object-contain" 
                  // Reduced h-28 to h-12
                  whileHover={{ 
                    filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))"
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Logo glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Industries Link */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/industries" 
                  className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                >
                  Industries
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {/* Enhanced Products Dropdown */}
              <div className="relative group">
                <motion.button
                  className="flex items-center space-x-1 text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Product Suite</span>
                  <motion.div
                    animate={{ rotate: isProductsDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                {/* Enhanced Dropdown Menu */}
                <AnimatePresence>
                  {isProductsDropdownOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-80 bg-surface/95 backdrop-blur-lg rounded-2xl shadow-dreamy border border-secondary-100 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    >
                      {/* Animated background glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 opacity-0"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <div className="p-6 space-y-4 relative">
                        <motion.div 
                          className="flex items-center space-x-2 mb-4"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-4 h-4 text-primary-600" />
                          </motion.div>
                          <h3 className="text-sm font-semibold text-secondary-900">AI-Powered Solutions</h3>
                        </motion.div>
                        
                        {products.map((product, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={product.href}
                              className="block p-3 rounded-xl hover:bg-primary-50 transition-colors duration-200 group relative overflow-hidden"
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-accent-400/10 opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 relative z-10">
                                {product.name}
                              </div>
                              <div className="text-sm text-secondary-600 mt-1 relative z-10">
                                {product.description}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                        
                        {isHome && (
                          <motion.div 
                            className="pt-4 border-t border-secondary-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <ScrollLink
                              to="products"
                              smooth={true}
                              offset={-80}
                              duration={500}
                              className="block p-3 rounded-xl hover:bg-accent-50 transition-colors duration-200 cursor-pointer text-accent-600 font-semibold relative overflow-hidden"
                              onClick={() => setIsProductsDropdownOpen(false)}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10 opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                              <span className="relative z-10">View All Products →</span>
                            </ScrollLink>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Link */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/resources" 
                  className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                >
                  Resources
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {/* About Link */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/about" 
                  className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                >
                  About
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {/* Enhanced Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {isHome ? (
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="btn-primary cursor-pointer relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0"
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Contact</span>
                  </ScrollLink>
                ) : (
                  <Link
                    to="/#contact"
                    className="btn-primary relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0"
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Get Started</span>
                  </Link>
                )}
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className="lg:hidden overflow-hidden"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="py-4 space-y-4 border-t border-secondary-100">
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                  >
                    <Link 
                      to="/industries" 
                      className="block py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Industries
                    </Link>
                  </motion.div>

                  {/* Mobile Products Section */}
                  <motion.div 
                    className="space-y-2"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    <div className="py-2 text-secondary-900 font-semibold">Products</div>
                    {products.map((product, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 + (index * 0.05) }}
                      >
                        <Link
                          to={product.href}
                          className="block py-2 pl-4 text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                  >
                    <Link 
                      to="/resources" 
                      className="block py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Resources
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                  >
                    <Link 
                      to="/about" 
                      className="block py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.7 }}
                    className="pt-4"
                  >
                    {isHome ? (
                      <ScrollLink
                        to="contact"
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="btn-primary cursor-pointer inline-block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contact
                      </ScrollLink>
                    ) : (
                      <Link
                        to="/#contact"
                        className="btn-primary inline-block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      <div style={{ marginBottom: '0.5rem' }} /> {/* Add margin below header to ensure it doesn't overlap with video */}
    </>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ClaimWise from './pages/ClaimWise';
import Flowgenix from './pages/Flowgenix';
import PriceGuard from './pages/PriceGuard';
import SmartSpec from './pages/SmartSpec';
import InboxIntelli from './pages/InboxIntelli';
import Industries from './pages/Industries';
import About from './pages/About';
import Resources from './pages/Resources';
import AutoRecon from './pages/AutoRecon';
import CaseStudy from './pages/CaseStudy'
import ContactDataManager from './components/ContactDataManager';


export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/claimwise" element={<ClaimWise />} />
          <Route path="/flowgenix" element={<Flowgenix />} />
          <Route path="/priceguard" element={<PriceGuard />} />
          <Route path="/smartspec" element={<SmartSpec />} />
          <Route path="/inboxintelli" element={<InboxIntelli />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/autorecon" element={<AutoRecon />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/case-study" element={<CaseStudy />} />
          <Route path="/admin/contacts" element={<ContactDataManager />} />
          {/* Add more routes as you build more pages */}
        </Routes>
      </Layout>
    </Router>
  );
}

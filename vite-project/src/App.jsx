
import Navbar from './componants/layout/navbar'

import Footer from './componants/layout/footer'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/aboutUs/about'
import ProductionService from './pages/production/production'
import ConsultingService from './pages/it/it'
import DigitalMarketingService from './pages/marketing/marketing'
import CloudService from './pages/cloud/cloud'
import EntrepreneurialService from './pages/entrepreneurial/entrepreneurial'
import EcommerceSolution from './pages/eCommerce/eCommerce'
import DesignBrandingService from './pages/design/design'
import DataAnalyticsService from './pages/dataAnalytics/dataAnalytics'
import CyberSecurityService from './pages/cyber/cyber'
import NetworkingSolutions from './pages/network/network'
import SmartSolutions from './pages/smart/smart'
import SecuritySystemSolutions from './pages/security/security'
import ITDevelopmentService from './pages/ITandDEV/dev'
import ContactUs from './pages/contactUs/contactUs'
import ServicesPage from './pages/services/services'
import ServiceRequestPage from './pages/serviceRequest/service'
import AdminLogin from './pages/adminLogin/adminLogin'
import ServiceRequestsDashboard from './pages/adminDashboard/adminDashboard'
import DigitalMarketingSolutions from './pages/pakages/pakeges'
import WhatsAppFloatingButton from './componants/whatsappButton'
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/production" element={<ProductionService />} />
        <Route path="/it" element={<ConsultingService />} />
        <Route path="/marketing" element={<DigitalMarketingService />} />
        <Route path="/cloud" element={<CloudService />} />
        <Route path="/entrepreneurial" element={<EntrepreneurialService />} />
        <Route path="/ecommerce" element={<EcommerceSolution />} />
        <Route path="/design" element={<DesignBrandingService />} />
        <Route path="/data-analytics" element={<DataAnalyticsService />} />
        <Route path="/cybersecurity" element={<CyberSecurityService />} />
        <Route path="/network" element={<NetworkingSolutions />} />
        <Route path="/smart" element={<SmartSolutions />} />
        <Route path="/security" element={<SecuritySystemSolutions />} />
        <Route path="/it-and-dev" element={<ITDevelopmentService />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service-request" element={<ServiceRequestPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ServiceRequestsDashboard />} />
        <Route path="/digital-marketing-solutions" element={<DigitalMarketingSolutions />} />

     
    
      </Routes>
      <Footer />
      <WhatsAppFloatingButton />
    </Router>
  )
}

export default App

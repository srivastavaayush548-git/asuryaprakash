import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/home'
import MyLife from './Pages/myLife'
import MyJourney from './Pages/myJourney'
import PhotoGallery from './Pages/photoGallery'
import MyOpinion from './Pages/myOpinion'
import Events from './Pages/events'
import ReachMe from './Pages/reachMe'
import PrivacyPolicy from './Pages/privacyPolicy'
import TermsAndConditions from './Pages/termsAndConditions'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-life" element={<MyLife />} />
        <Route path="/my-journey" element={<MyJourney />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/my-opinion" element={<MyOpinion />} />
        <Route path="/events" element={<Events />} />
        <Route path="/reach-me" element={<ReachMe />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  )
}

export default App
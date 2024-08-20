import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Overview from './pages/aboutUs/Overview';
import Board from './pages/aboutUs/Board';
import TrainingPlanCourse from './pages/informations/trainingPlanCourse/TrainingPlanCourse';
import RegisterCourse from './pages/admissions/RegisterCourse';
import News from './pages/news/News';
import JobSchool from './pages/recruitments/JobSchool';
import JobCompany from './pages/recruitments/JobCompany';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import SearchDetail from './pages/Search/SearchDetail';


import ScrollToTop from './components/ScrollToTop';
import Search from './components/Header/Search';
import NewsDetails from './pages/news/NewsDetails';
import TrainingPlanCourseDetail from './pages/informations/trainingPlanCourse/TrainingPlanCourseDetail';
import Notification from './pages/notifi/Notification';
import NotifiDetail from './pages/notifi/NotifiDetail';


export default function App() {

  return (
    <div className="h-screen">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* AboutUs */}
          <Route path="/overView" element={<Overview />} />
          <Route path="/board" element={<Board />} />


          {/* Information */}
          <Route path="/trainingPlanCourse" element={<TrainingPlanCourse />} />
          <Route path="/trainingPlanCourse/:id" element={<TrainingPlanCourseDetail />} />

          {/* Admission */}
          <Route path="/registerCourse" element={<RegisterCourse />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />

          {/* Recruitment */}
          <Route path="/jobSchool" element={<JobSchool />} />
          <Route path="/jobCompany" element={<JobCompany />} />


          {/* Search */}
          {/* <Route path="/search/news/:keyword" element={<SearchDetail />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="/search-detail/:keyword" element={<SearchDetail />} />

          {/* Notification */}
          <Route path="/:type" element={<Notification />} />
          <Route path="/:type/:id" element={<NotifiDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
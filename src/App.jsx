import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Overview from './pages/aboutUs/Overview';
import Board from './pages/aboutUs/Board';
import NotificationTraining from './pages/informations/NotificationTraining';
import NotificationStudent from './pages/informations/NotificationStudent';
import NotificationFinance from './pages/informations/NotificationFinance';
import TrainingPlanCourse from './pages/informations/TrainingPlanCourse';
import DescriptionCourse from './pages/admissions/DescriptionCourse';
import RegisterCourse from './pages/admissions/RegisterCourse';
import SendMessage from './pages/admissions/SendMessage';
import News from './pages/news/News';
import JobSchool from './pages/recruitments/JobSchool';
import JobCompany from './pages/recruitments/JobCompany';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import SearchDetail from './pages/Search/SearchDetail';


import ScrollToTop from './components/ScrollToTop';
import Search from './components/Header/Search';
import NewsDetails from './pages/news/NewsDetails';


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
          <Route path="/notificationTraining" element={<NotificationTraining />} />
          <Route path="/notificationStudent" element={<NotificationStudent />} />
          <Route path="/notificationFinance" element={<NotificationFinance />} />
          <Route path="/trainingPlanCourse" element={<TrainingPlanCourse />} />

          {/* Admission */}
          <Route path="/descriptionCourse" element={<DescriptionCourse />} />
          <Route path="/registerCourse" element={<RegisterCourse />} />
          <Route path="/sendMessage" element={<SendMessage />} />

          <Route path="/news" element={<News />} />
          <Route path="/news/:keyword" element={<NewsDetails />} />

          {/* Recruitment */}
          <Route path="/jobSchool" element={<JobSchool />} />
          <Route path="/jobCompany" element={<JobCompany />} />


          {/* Search */}
          {/* <Route path="/search/news/:keyword" element={<SearchDetail />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="/search-detail/:keyword" element={<SearchDetail />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
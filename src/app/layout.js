import LoadPage from './components/LoadPage';
import ScrollTop from './components/ScrollTop';
import './styles/aboutus.css';
import './styles/contactform.css';
import './styles/footer1.css';
import './styles/footer2.css';
import './styles/gallery.css';
import './styles/header1.css';
import './styles/navbar1.css';
import './styles/navbar2.css';
import './styles/news.css';
import './styles/newsdetail.css';
import './styles/registration.css';
import './styles/scrolltop.css';
import './styles/section.css';
import './styles/section1.css';
import './styles/section2.css';
import './styles/section3.css';
import './styles/style.css';
import './styles/subtitle.css';
import './styles/teacherdet.css';
import './styles/teachers.css';
import './styles/testimonials.css';
import './styles/title.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <LoadPage />
        <ScrollTop />
      </body>
    </html>
  );
}

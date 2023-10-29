import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CardList from './components/CardList';
import Career from './components/Career';
import Cyber from './components/Cyber';
import Fsd from './components/Fsd';
import Datascience from './components/Datascience'

const datas=[
 {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development.webp",
    "title": "Best Ways to Learn Full Stack Development in 2023",
    "text": "Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise. Are you an aspiring web developer striving to enhance your web development skills and become a full-stack web developer?"
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    "title": "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    "text": " Cybersecurity & Ethical hacking have been key in making sure that your data online is secure, users are authenticated, and your data and privacy concerns are all kept safe.Python is an incredibly versatile programming language. It’s not limited to just one domain but can be used for a wide range of applications, including web development, automation, scientific computing, and, of course,science, you’re also gaining a valuable skill that can be applied in various other fields."
  },
  
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
    "title": "Useful Python Libraries & Tools for Data Science Beginners",
    "text": "In a world filled with information, knowing how to understand and use data is super important. Data science, which is all about finding valuable insights from data, is a skill that’s needed in many areas like business, finance, and healthcare Python offers a rich ecosystem of libraries and frameworks that cater specifically to data science. Libraries like NumPy, Pandas, Matplotlib, and Scikit-Learn provide powerful tools for data manipulation, analysis, visualization, and machine learning."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
    "title": "The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
    "text": "As a full-stack developer, having the right set of tools is crucial for your success. In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.  Choosing the right full-stack development online course can be a crucial decision that impacts your learning journey and future career. Selecting the best full-stack development online course depends on your current skill level, learning preferences, and career goals."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Digital-Marketers.webp",
    "title": "Top Product-Based Companies for Digital Marketers",
    "text": "Selecting the right launchpad for a successful career in digital marketing isn’t just about joining any company; it’s about aligning with those who are at the forefront of innovation. When top digital marketers immerse themselves in a product-centric realm, like Adobe, their campaigns go beyond mere advertising. They’re painting a canvas of creativity, narrating tales of innovation, and highlighting a world of possibilities awaiting the user."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
    "title": "7 Best Full-Stack Development Online Courses [2023]",
    "text": "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand. IBM Full Stack Software Developer Professional Certificate available on Coursera is a complete course instructed by 9+ IBM instructors. In this course, you can learn from basic concepts like HTML, CSS, and JavaScript to advanced-level project deployments. Developed by IBM experts, the course content reflects industry best practices and the latest technologies,"
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/09/feature-image-How-to-Hire-a-Full-Stack-Developer.webp",
    "title": "The Ultimate Guide to Real-World Full-Stack Development Applications",
    "text": "Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can. The Full Stack Web Developer Nanodegree by Udacity is one of the best full-stack development online courses that covers a wide range of topics essential for you to full-stack developer. The curriculum includes both front-end and back-end technologies. Throughout the course, you’ll work on hands-on projects that simulate real-world scenarios. These projects are designed to reinforce the concepts you’ve learned and help you build a portfolio of practical work that showcases your skills to potential employers"
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    "title": "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    "text": "Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access to information on the internet o the modern conveniences provided by smart home automation technology and concepts like IoT devices. With so many great things coming from technology, it’s highly likely that some potential threats lurk behind every device & platform."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
    "title": "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
    "text": "There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism. The anecdote of a hacker has cultivated an ethos of individuality, corporate freedom, and distinct craftiness that can’t be denied. Also, the same archetype is visible in a number of pop-cultural references whether the famous TV series- Mr. Robot or real-life adaptations of Snowden and Julian Assange..."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters-768x480.webp",
    "title": "Everything You Should Know About ChatGPT & Why It Matters?",
    "text": "In the constantly growing landscape of artificial intelligence (AI) and natural language processing (NLP), ChatGPT has emerged as a significant milestone. ChatGPT is an advanced language model, developed by OpenAI, represents a leap forward for humankind, in our ability to interact with machines using natural language. Despite all the fascination of hacking, and hysteria, the field of cybersecurity is largely misunderstood outside of the realm of the IT ecosystem"
  }
]

const fsd = [
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development.webp",
    "title": "Best Ways to Learn Full Stack Development in 2023",
    "text": "Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise. Are you an aspiring web developer striving to enhance your web development skills and become a full-stack web developer?"
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
    "title": "The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
    "text": "As a full-stack developer, having the right set of tools is crucial for your success. In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.  Choosing the right full-stack development online course can be a crucial decision that impacts your learning journey and future career. Selecting the best full-stack development online course depends on your current skill level, learning preferences, and career goals."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
    "title": "7 Best Full-Stack Development Online Courses [2023]",
    "text": "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand. IBM Full Stack Software Developer Professional Certificate available on Coursera is a complete course instructed by 9+ IBM instructors. In this course, you can learn from basic concepts like HTML, CSS, and JavaScript to advanced-level project deployments. Developed by IBM experts, the course content reflects industry best practices and the latest technologies,"
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/09/feature-image-How-to-Hire-a-Full-Stack-Developer.webp",
    "title": "The Ultimate Guide to Real-World Full-Stack Development Applications",
    "text": "Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can. The Full Stack Web Developer Nanodegree by Udacity is one of the best full-stack development online courses that covers a wide range of topics essential for you to full-stack developer. The curriculum includes both front-end and back-end technologies. Throughout the course, you’ll work on hands-on projects that simulate real-world scenarios. These projects are designed to reinforce the concepts you’ve learned and help you build a portfolio of practical work that showcases your skills to potential employers"
  }
]

const career = [
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
    "title": "Useful Python Libraries & Tools for Data Science Beginners",
    "text": "In a world filled with information, knowing how to understand and use data is super important. Data science, which is all about finding valuable insights from data, is a skill that’s needed in many areas like business, finance, and healthcare Python offers a rich ecosystem of libraries and frameworks that cater specifically to data science. Libraries like NumPy, Pandas, Matplotlib, and Scikit-Learn provide powerful tools for data manipulation, analysis, visualization, and machine learning."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Digital-Marketers.webp",
    "title": "Top Product-Based Companies for Digital Marketers",
    "text": "Selecting the right launchpad for a successful career in digital marketing isn’t just about joining any company; it’s about aligning with those who are at the forefront of innovation. When top digital marketers immerse themselves in a product-centric realm, like Adobe, their campaigns go beyond mere advertising. They’re painting a canvas of creativity, narrating tales of innovation, and highlighting a world of possibilities awaiting the user."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters-768x480.webp",
    "title": "Everything You Should Know About ChatGPT & Why It Matters?",
    "text": "In the constantly growing landscape of artificial intelligence (AI) and natural language processing (NLP), ChatGPT has emerged as a significant milestone. ChatGPT is an advanced language model, developed by OpenAI, represents a leap forward for humankind, in our ability to interact with machines using natural language. Despite all the fascination of hacking, and hysteria, the field of cybersecurity is largely misunderstood outside of the realm of the IT ecosystem"
  }
]

const datascience = [
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
    "title": "Useful Python Libraries & Tools for Data Science Beginners",
    "text": "In a world filled with information, knowing how to understand and use data is super important. Data science, which is all about finding valuable insights from data, is a skill that’s needed in many areas like business, finance, and healthcare Python offers a rich ecosystem of libraries and frameworks that cater specifically to data science. Libraries like NumPy, Pandas, Matplotlib, and Scikit-Learn provide powerful tools for data manipulation, analysis, visualization, and machine learning."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters-768x480.webp",
    "title": "Everything You Should Know About ChatGPT & Why It Matters?",
    "text": "In the constantly growing landscape of artificial intelligence (AI) and natural language processing (NLP), ChatGPT has emerged as a significant milestone. ChatGPT is an advanced language model, developed by OpenAI, represents a leap forward for humankind, in our ability to interact with machines using natural language. Despite all the fascination of hacking, and hysteria, the field of cybersecurity is largely misunderstood outside of the realm of the IT ecosystem"
  }
]

const cyber = [
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    "title": "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    "text": " Cybersecurity & Ethical hacking have been key in making sure that your data online is secure, users are authenticated, and your data and privacy concerns are all kept safe.Python is an incredibly versatile programming language. It’s not limited to just one domain but can be used for a wide range of applications, including web development, automation, scientific computing, and, of course,science, you’re also gaining a valuable skill that can be applied in various other fields."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    "title": "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    "text": "Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access to information on the internet o the modern conveniences provided by smart home automation technology and concepts like IoT devices. With so many great things coming from technology, it’s highly likely that some potential threats lurk behind every device & platform."
  },
  {
    "src": "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
    "title": "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
    "text": "There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism. The anecdote of a hacker has cultivated an ethos of individuality, corporate freedom, and distinct craftiness that can’t be denied. Also, the same archetype is visible in a number of pop-cultural references whether the famous TV series- Mr. Robot or real-life adaptations of Snowden and Julian Assange..."
  }
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <h1 className='text-center'>courses</h1>

      <Router>
        <div className='hello'>
          <div className="d-md-none">
            <button onClick={toggleMenu} className="menu-button">
              Menu
            </button>
            {menuOpen && (
              <div className="mobile-menu d-inline-block">
                <Link to='/' style={{ padding: 10 }} onClick={toggleMenu}>
                  ALL
                </Link>
                <Link to='/fsd' className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  FULL STACK DEVELOPMENT
                </Link>
                <Link to='/datascience'className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  DATA SCIENCE
                </Link>
                <Link to='/cyber'className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  CYBER SECURITY
                </Link>
                <Link to='/career'className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  CAREER
                </Link>
              </div>
            )}
          </div>
          <div className="d-none d-md-block">
            <Link to='/' style={{ padding: 10 }}>ALL</Link>
            <Link to='/fsd' style={{ padding: 10 }}>FULL STACK DEVELOPMENT</Link>
            <Link to='/datascience' style={{ padding: 10 }}>DATA SCIENCE</Link>
            <Link to='/cyber' style={{ padding: 10 }}>CYBER SECURITY</Link>
            <Link to='/career' style={{ padding: 10 }}>CAREER</Link>
            <hr />
            <hr />
          </div>
        </div>
        <Routes>
          <Route path='/' element={<CardList datas={ datas }/>} />
          <Route path='/fsd' element={<Fsd fsd={fsd}/>} />
          <Route path='/datascience' element={<Datascience datascience={ datascience } />} />
          <Route path='/cyber' element={<Cyber cyber={ cyber } />} />
          <Route path='/career' element={<Career career={ career } />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

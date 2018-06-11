import React, { Component } from 'react';
import './app.css';

import MainHeader from '../../components/main-header/main-header'
import JobCard from '../../components/job-card/job-card'

const jobs = [
  {
    company: "Capital One",
    jobTitle: "Front-End Engineer",
    startDate: "February 2017",
    endDate: "Present",
    jobDescription: "<p>In a highly innovative and agile culture, I have taken the lead technical role for a small, but fast-paced team developing a high-traffic customer-facing web application. Driven by lofty business demands, I have made significant contributions to the front-end architecture of a highly resilient, scalable, and performant application.</p><p>Utilizing A/B testing, website personalization, user experience research, and rapid prototyping, my team has more than doubled conversion (CRO) in only 4 months and increased natural search traffic (SEO) more than seven-fold year-over-year.</p><p>Building for scale, I have leveraged the latest in cloud computing (AWS), microservice architecture, and serverless functionality. I also utilize the latest real-time monitoring tools for maintaining high-availability.</p>",
    skills: [
      "JavaScript",
      "AngularJS / Angular",
      "React",
      "Webpack",
      "Front-end Architecture",
      "CSS/Sass",
      "AWS",
      "Website Segmentation and Personalization",
      "A/B and Multivariate Testing",
      "CRO / SEO",
      "Prototyping"
    ],
    quotes: [
      {
        name: "Jeremy S.",
        title: "Scrum Master",
        quote: "Mark is one of the strongest developers/leaders in the organization. He not only takes on features but looks to see what can make them have a greater impact to the customers. He is actively engaged and gives great feedback in design, tech, and business meetings. He has a high level of customer empathy and is very good at seeing how the team efforts fits into the larger Home Equity model. Mark is comfortable with new technologies and able to get this work completed with no follow up. Lastly, he has shown a lot of patience and skill when teaching new developers tech foundations and best coding practices."
      },
      {
        name: "Trevor C.",
        title: "Manager of Design",
        quote: "I love the collaborative approach he brings to every conversation. His attitude is more about understanding the design intent and figuring out how he can accomplish it in code (rather than telling us why it won't work) and then working backwards from that to figure out if we can simplify or improve the experience/build-out. That is an awesome interaction model that quite frankly isn't typical with others within the tech organization. He helps us build out our vision rather than limiting it. You can definitely see how the overall quality of the work is better than it used to be, and I believe that is because of his coaching."
      }
    ]
  },
  {
    company: "MAG Retail Group",
    jobTitle: "UI/UX Developer",
    startDate: "November 2015",
    endDate: "February 2017",
    jobDescription: "<p>I served as the JavaScript and CRO guru for a small and nimble UI/UX team leveraging user testing, A/B and Multivariate testing, and analytics for 2 medium sized e-commerce websites.</p><p>As our customers shifted to mobile, I worked with various stakeholders to implement optimal mobile experiences nearly doubling mobile conversion in less than 6 months.</p><p>I deepened my skills in JavaScript with various MV* frameworks and CSS with Sass and PostCSS. I also gained new experience in .Net, C#, and CI/CD infrastructure.</p>",
    skills: [
      "JavaScript",
      "KnockoutJS",
      "NodeJS",
      "Front-end Architecture",
      "CSS / Sass",
      "jQuery",
      "User Testing",
      "A/B and Multivariate Testing",
      "Website Segmentation and Personalization",
      "CRO / SEO",
      "Responsive Web Development",
      "Prototyping",
      ".Net"
    ],
    quotes: [
      {
        name: "Lee O.",
        title: "Director of UX",
        quote: "Mark Morrison is one of the best people I have ever hired. He is a smart, creative developer who is constantly learning and growing. He has both solid developer skills as well as good people skills that allow him to bring success to our team. Mark goes above and beyond to complete tasks and always makes sure the job is done right. He works well solo or as part of a team, and brings a positive outlook to the office everyday. Mark will dig deep to figure out problems and is able to propose different types of solutions. I would hire Mark again in a heartbeat. If you are looking for developer/software engineer you can count on to go above and beyond, you can stop looking once you've found Mark."
      },
      {
        name: "Tamarra P.",
        title: "UI/UX Developer",
        quote: "Mark is diligent, knowledgeable and trustworthy. In prototyping, he is eager to implement best practices. Mark is intent on writing quality code and more than willing to delve into the depths of complex legacy systems to modernize old code and remove unnecessary code. He has displayed a great aptitude in A/B and Multivariate testing. Mark is also meticulous when reviewing pull requests to help maintain code standards and consistency. He is steadfast and sincere. It has been a joy working with Mark. I would jump at the chance to work with him in the future. He would make a great augmentation to any Web/Front-End/UI Development team."
      }
    ]
  },
  {
    company: "Artistry Labs",
    jobTitle: "Technology Strategist",
    startDate: "July 2014",
    endDate: "November 2015",
    jobDescription: "<p>While spearheading all Front End Development using JavaScript/HTML/CSS, I also developed UX prototypes for a wide array of technology platforms. I maintained the cadence and processes for all technology development and served as the clients' technology point of contact.</p><p>I uniquely filled multiple roles as I balanced client relations, front end development, customer on-boarding, SEO expert, and technology product management.</p>",
    skills: [
      "JavaScript",
      "jQuery",
      "Prototyping",
      "CSS / Less",
      "CRO / SEO",
      "Client Relations",
      "Project Management",
      "ColdFusion",
      "Responsive Web Development"
    ]
  },
  {
    company: "Artistry Labs",
    jobTitle: "Front-End Developer",
    startDate: "April 2014",
    endDate: "July 2014",
    jobDescription: "<p>As Artistry Labs sharpened its product delivery process, I was asked to step in and develop the ideal customer experience. In addition to being the sole Front End Developer, I engaged closely with clients during the design, development, on-boarding, and launch of technology products.</p><p>I grew professionally as a developer, deepening my skills in Javascript, HTML, CSS, responsive web development, SEO, and various front End frameworks.</p>",
    skills: [
      "JavaScript",
      "PrototypeJS",
      "jQuery",
      "Prototyping",
      "CSS / Less",
      "CRO / SEO",
      "Responsive Web Development",
      "Process Management",
      "Training and Technical Support"
    ]
  },
  {
    company: "Artistry Labs",
    jobTitle: "Technical Support / Website Production",
    startDate: "April 2012",
    endDate: "April 2014",
    jobDescription: "<p>Website production (HTML5, CSS3, Javascript, and some ColdFusion), front-end development, online marketing analysis, SEO consulting and copywriting, support consulting, CMS maintenance, and graphic design.</p>",
    skills: [
      "Javascript",
      "CSS",
      "HTML",
      "Responsive Web Development",
      "ColdFusion",
      "SEO / CRO",
      "Training and Technical Support"
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div className="app">
        <MainHeader />
        <main className="mainBody" id="experience">
          <section>
            <div className="container">
              <h2>About Me</h2>
              <p>I am a Front-End Engineer based in Dallas, TX. I have 6+ years experience in a variety of front-end languages and frameworks, primarily focusing on Javascript. I have worked in creative agencies, e-commerce, and banking.</p>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>Work History</h2>
              {jobs.map(function(job, index){
                return <JobCard key={ index } job={ job } />;
              })}
            </div>
          </section>
          <section>
            <div className="container">
              <h2>Education</h2>
              <div className="jobCard">
                <h3>Ouachita Baptist University</h3>
                <h4>Bachelor of Arts</h4>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

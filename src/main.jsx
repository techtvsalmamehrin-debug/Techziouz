import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route, Link, NavLink, useLocation} from "react-router-dom";
import "./styles.css";
import {Programs, Kidziouz} from "./Programs.jsx";

const services = [
 {path:"/services/student-support", title:"Student Technology Support", text:"Practical technical support throughout the academic journey.", items:["Programming","Lab Preparation","Viva Preparation","Doubt Clearing","Exam Support"]},
 {path:"/services/training", title:"Training & Skill Development", text:"Build practical programming and technology skills beyond classroom theory.", items:["C / C++","Python","Java","SQL","Python Full Stack","Django","Git & GitHub","AI Tools"]},
 {path:"/services/practical-labs", title:"Practical Computer Labs", text:"Focused practical lab preparation for Plus One, Plus Two and degree students.", items:["Plus One","Plus Two","Degree Labs","Programming Practice","Debugging","Lab Viva"]},
 {path:"/services/project-support", title:"Project Guidance", text:"Structured guidance to understand, build, document and present projects.", items:["Mini Projects","Major Projects","Documentation","PPT","Demo Preparation","Viva Preparation"]},
 {path:"/services/career", title:"Career Support", text:"Build a stronger professional profile and prepare for your next opportunity.", items:["ATS Resume","LinkedIn","GitHub","Portfolio","Mock Interviews","Placement Preparation"]},
 {path:"/services/ai-digital", title:"AI & Digital Solutions", text:"Practical AI, automation and digital solutions for professionals and businesses.", items:["AI Chatbots","AI Automation","Workflow Automation","Excel Automation","Digital Solutions"]}
];
const pageMetadata = {
 "/": {title:"TechZiouz | Your Trusted Technology Partner",description:"Build practical technology skills with TechZiouz. Explore student support, technology training, project guidance, career preparation and digital solutions in Kerala.",keywords:"TechZiouz, technology training, student support, project guidance, career preparation, Kerala"},
 "/services": {title:"Technology Services | TechZiouz",description:"Explore TechZiouz services for student support, practical labs, technical training, project guidance, career support and AI-enabled digital solutions.",keywords:"TechZiouz services, student support, programming training, practical labs, project guidance, career support"},
 "/services/student-support": {title:"Academic Student Support Service | TechZiouz",description:"Get programming, lab, viva and exam guidance through TechZiouz academic student support.",keywords:"academic student support, programming guidance, lab preparation, viva support, TechZiouz"},
 "/services/practical-labs": {title:"Practical Computer Labs | TechZiouz",description:"Prepare for Plus One, Plus Two and degree computer practicals with programming practice, debugging, lab preparation and viva support.",keywords:"computer practical labs, programming lab support, Plus One, Plus Two, degree practicals, TechZiouz"},
 "/student-support": {title:"Student Technology Support | TechZiouz",description:"Get structured programming, lab, exam, supplementary and viva support for your academic technology journey with TechZiouz.",keywords:"student technology support, programming help, lab preparation, viva support, TechZiouz"},
 "/training": {title:"Technology Training Programs | TechZiouz",description:"Build practical skills in C, C++, Python, Java, SQL, Django, Git, GitHub and AI tools with TechZiouz training.",keywords:"Python training, C programming, Java training, SQL, Django, GitHub, AI tools, TechZiouz"},
 "/projects": {title:"Student Project Guidance | TechZiouz",description:"Get guidance for project ideas, technology selection, development, debugging, documentation, presentations and viva preparation.",keywords:"student project guidance, final year project support, project documentation, TechZiouz"},
 "/career": {title:"Career Preparation Support | TechZiouz",description:"Prepare for technology careers with resume, LinkedIn, GitHub portfolio, interview and placement preparation support.",keywords:"career preparation, ATS resume, technical interview, GitHub portfolio, TechZiouz"},
 "/about": {title:"About TechZiouz | Technology Skills & Support",description:"Learn how TechZiouz helps students and graduates connect academic learning with practical technology skills and career readiness.",keywords:"about TechZiouz, technology skills, student support, career readiness"},
 "/blog": {title:"Technology Learning & Career Insights | TechZiouz",description:"Read practical guidance on student support, programming, AI tools, career growth and technology skills from TechZiouz.",keywords:"technology learning blog, programming tips, student guidance, career growth, TechZiouz"},
 "/contact": {title:"Contact TechZiouz | Get Technology Support",description:"Contact TechZiouz about student support, training, practical labs, project guidance, career preparation and digital solutions.",keywords:"contact TechZiouz, technology support, training enquiry, Kerala"},
 "/programs": {title:"TechZiouz Programs | Training for Students & Graduates",description:"Explore technology programs for school students, college learners, graduates and job seekers, including coding, robotics, web development and career skills.",keywords:"technology programs, student coding, robotics, web development, career skills, TechZiouz"},
 "/programs/kidziouz": {title:"Kidziouz by TechZiouz | Technology Learning for Young Minds",description:"Explore Kidziouz learning paths for digital literacy, coding, Scratch, Python, Arduino, robotics and creative technology projects.",keywords:"Kidziouz, technology learning for kids, coding, Scratch, Python, Arduino, robotics"}
};
const whatsappNumber="919446328258";
function whatsappUrl(message){return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;}

function RouteMetadata(){
 const {pathname}=useLocation();
 useEffect(()=>{
  const service=services.find(item=>item.path===pathname);
  const metadata=pageMetadata[pathname]||(service?{
   title:`${service.title} | TechZiouz`,
   description:`${service.text} Explore the support and learning options available from TechZiouz.`,
   keywords:`${service.title}, technology support, training, TechZiouz`
  }:{title:"TechZiouz | Your Trusted Technology Partner",description:pageMetadata["/"].description,keywords:pageMetadata["/"].keywords});
  const canonicalPath=pathname==="/"?"/":pathname.replace(/\/+$/ ,"");
  document.title=metadata.title;
  const setMeta=(attribute,key,value)=>{
   let element=document.head.querySelector(`meta[${attribute}="${key}"]`);
   if(!element){element=document.createElement("meta");element.setAttribute(attribute,key);document.head.appendChild(element);}
   element.setAttribute("content",value);
  };
  setMeta("name","description",metadata.description);
  setMeta("name","keywords",metadata.keywords);
  setMeta("name","robots","index, follow");
  setMeta("property","og:title",metadata.title);
  setMeta("property","og:description",metadata.description);
  setMeta("property","og:type","website");
  setMeta("property","og:url",`https://www.techziouz.com${canonicalPath}`);
  setMeta("property","og:site_name","TechZiouz");
  setMeta("property","og:image","https://www.techziouz.com/assets/techziouz-logo.png");
  setMeta("name","twitter:card","summary");
  setMeta("name","twitter:title",metadata.title);
  setMeta("name","twitter:description",metadata.description);
  setMeta("name","twitter:image","https://www.techziouz.com/assets/techziouz-logo.png");
  let canonical=document.head.querySelector('link[rel="canonical"]');
  if(!canonical){canonical=document.createElement("link");canonical.rel="canonical";document.head.appendChild(canonical);}
  canonical.href=`https://www.techziouz.com${canonicalPath}`;
 },[pathname]);
 return null;
}

function Header(){
 const [open,setOpen]=useState(false);
 const nav=[["/","Home"],["/services","Services"],["/programs","Programs"],["/student-support","Student Support"],["/training","Training"],["/projects","Projects"],["/career","Career"],["/about","About"],["/blog","Blog"]];
 return <header className="header"><div className="container nav">
   <Link to="/" className="brand"><img src="/assets/techziouz-logo.png" alt="TechZiouz"/></Link>
   <button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">☰</button>
   <nav className={open?"navlinks open":"navlinks"}>{nav.map(([p,t])=><NavLink key={p} to={p} onClick={()=>setOpen(false)}>{t}</NavLink>)}</nav>
   <Link className="navcta" to="/contact">GET SUPPORT</Link>
 </div></header>
}
function Footer(){
 return <footer className="footer"><div className="container footerGrid">
   <div><img className="footerLogo" src="/assets/techziouz-logo.png" alt="TechZiouz"/>
   <p>Your Trusted Technology Partner — practical technology skills, student support, project guidance, career readiness and selected AI & digital solutions.</p>
   <div className="social"><a href="mailto:techziouz@gmail.com" title="Email"><i className="fas fa-envelope"></i></a><a href="https://wa.me/919446328258" target="_blank" rel="noreferrer" title="WhatsApp Community"><i className="fab fa-whatsapp"></i></a><a href="https://www.linkedin.com/company/techziouz/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a><a href="https://www.instagram.com/techziouz" target="_blank" rel="noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a></div></div>
  <div><h4>Quick Links</h4><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/programs">Programs</Link><Link to="/student-support">Student Support</Link><Link to="/training">Training</Link><Link to="/projects">Projects</Link><Link to="/career">Career</Link><Link to="/contact">Contact</Link></div>
   <div><h4>Our Services</h4>{services.slice(0,5).map(s=><Link key={s.path} to={s.path}>{s.title}</Link>)}</div>
  <div><h4>Contact</h4><a href="mailto:techziouz@gmail.com">techziouz@gmail.com</a><a href="https://wa.me/919446328258" target="_blank">+91 9446328258</a><p>1st Floor ,KV Shopping Centre,near KV Steels,Arangottukara, Palakkad, Kerala, India - 679532</p></div>
 </div><div className="container copyright">© 2026 TechZiouz. Technology. Skills. Opportunities.</div></footer>
}
function Layout({children}){return <><RouteMetadata/><Header/><main>{children}</main><a className="wa" href={whatsappUrl("Hello TechZiouz, I found you through the TechZiouz website and would like to enquire.")} target="_blank" rel="noreferrer" aria-label="Chat with TechZiouz on WhatsApp"><i className="fab fa-whatsapp"></i></a><Footer/></>}

function Hero(){
 return <section className="hero"><video className="heroVideo" autoPlay muted loop playsInline poster="/assets/techziouz-hero-poster.jpg"><source src="/assets/techziouz-hero.mp4" type="video/mp4"/></video><div className="heroShade"/><div className="container heroContent">
   <div className="eyebrow">TECHNOLOGY • SKILLS • OPPORTUNITIES</div><h1>Your Trusted <span>Technology</span> Partner.</h1>
   <p>Turn knowledge into practical skills. TechZiouz helps students and graduates build technology skills, prepare for labs and examinations, develop projects with confidence and become career-ready.</p>
   <div className="actions"><Link className="btn red" to="/services">Explore Services</Link><Link className="btn outline" to="/contact">Get Support</Link></div>
 </div></section>
}
function Home(){
 return <><Hero/><Section title="What We Do" heading="Technology support that moves you forward." text="Practical support for students and graduates, backed by modern technology, structured guidance and selected AI and digital solutions."/>
 <div className="container cards">{services.map((s,i)=><ServiceCard key={s.path} s={s} i={i}/>)}</div>
 <section className="band"><div className="container split"><div><div className="eyebrow">THE GAP WE BRIDGE</div><h2>From academic learning to real-world readiness.</h2></div><div><p>Many students complete courses with theoretical knowledge but still struggle with practical programming, laboratory examinations, projects, technical interviews and the transition to employment.</p><strong>TechZiouz exists to bridge that gap.</strong></div></div></section>
 <Journey/><CTA/></>
}
function Section({title,heading,text}){return <section className="sectionHead container"><div><div className="eyebrow">{title}</div><h2>{heading}</h2></div><p>{text}</p></section>}
function ServiceCard({s,i}){return <article className="card"><small>0{i+1}</small><h3>{s.title}</h3><p>{s.text}</p><ul>{s.items.slice(0,6).map(x=><li key={x}>{x}</li>)}</ul><Link to={s.path} className="more">View detailed service →</Link></article>}
function Journey(){return <section className="section gray"><div className="container"><div className="eyebrow">OUR METHOD</div><h2>Your journey with TechZiouz.</h2><div className="journey">{["Assess","Learn","Practice","Build","Prepare","Grow"].map((x,i)=><div key={x}><b>0{i+1}</b><h3>{x}</h3><p>{["Understand your goals.","Build foundations.","Apply knowledge.","Create projects.","Prepare for opportunity.","Keep growing."][i]}</p></div>)}</div></div></section>}
function CTA(){return <section className="cta"><div className="container ctaInner"><div><div className="eyebrow">TECHNOLOGY • SKILLS • OPPORTUNITIES</div><h2>Helping learners turn knowledge into practical capability.</h2></div><Link className="btn red" to="/contact">Talk to TechZiouz</Link></div></section>}

function StandardPage({eyebrow,title,intro,children}){return <><div className="pageHero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{intro}</p></div></div>{children}</>}
function Services(){return <StandardPage eyebrow="SERVICES" title="Practical technology support for every stage." intro="Explore detailed TechZiouz services for students, graduates, professionals and businesses."><div className="container cards pageCards">{services.map((s,i)=><ServiceCard key={s.path} s={s} i={i}/>)}</div></StandardPage>}
function Detail({s}){return <StandardPage eyebrow="TECHZIOUZ SERVICE" title={s.title} intro={s.text}><section className="section"><div className="container detail"><div><h2>What we support</h2><ul className="bigList">{s.items.map(x=><li key={x}>{x}</li>)}</ul></div><div className="detailBox"><h3>Need support?</h3><p>Tell us what you need and we can guide you toward the right TechZiouz service.</p><Link className="btn red" to="/contact">Enquire Now</Link></div></div></section></StandardPage>}
function PracticalLabs(){return <StandardPage eyebrow="PRACTICAL COMPUTER LABS" title="Practice. Understand. Perform with confidence." intro="Focused practical computer lab preparation for Plus One, Plus Two and degree students."><section className="section"><div className="container labGrid">{[
["Plus One Practical Lab","Build confidence with foundational computer practicals, program execution, output checking, debugging, records and viva preparation."],
["Plus Two Practical Lab","Strengthen programming problem solving, execution, debugging, output verification, lab records, previous questions and viva preparation."],
["Degree Practical Lab","Structured practical support across C, C++, Python, Java, SQL/DBMS, web fundamentals, debugging, lab exams and viva."]
].map(([t,p],i)=><div className="labBox" key={t}><span>0{i+1}</span><h2>{t}</h2><p>{p}</p><Link className="more" to="/contact">Request Lab Support →</Link></div>)}</div></section></StandardPage>}
function Generic({title,eyebrow,items,intro}){return <StandardPage eyebrow={eyebrow} title={title} intro={intro}><section className="section"><div className="container contentGrid">{items.map((x,i)=><div className="feature" key={x}><span>0{i+1}</span><h3>{x}</h3><p>Structured guidance, practical exercises and focused support designed around your current level and goals.</p></div>)}</div></section><CTA/></StandardPage>}
function About(){return <Generic eyebrow="ABOUT TECHZIOUZ" title="Technology that helps people move forward." intro="TechZiouz bridges academic learning, practical skills and real-world opportunities through technology, structured guidance and personalized support." items={["Practical learning","Personalized support","Student-centric guidance","Skill-focused development","Career readiness","Technology-driven solutions"]}/>}
function BlogPage(){
 const posts=[
  {category:"Student Support", title:"How to prepare for practical lab exams with confidence", date:"Aug 20, 2026", excerpt:"A simple way to approach labs, debug faster, and turn practice into confidence before your viva and exam."},
  {category:"Career Growth", title:"From classroom knowledge to job-ready skills", date:"Sep 02, 2026", excerpt:"Learn what employers look for beyond theory and how to build a stronger technical profile step by step."},
  {category:"AI & Tools", title:"Practical AI habits that help students and professionals work smarter", date:"Sep 08, 2026", excerpt:"Explore how AI tools can support learning, productivity and structured workflows without replacing real understanding."},
  {category:"Coding", title:"The best way to practice programming consistently", date:"Sep 11, 2026", excerpt:"Focus on short, outcome-driven coding practice that improves confidence, clarity and debugging speed."}
 ];
 return (
  <>
   <div className="pageHero blogHero">
    <div className="container">
     <div className="eyebrow">BLOG</div>
     <h1>Insights for learning, growth and real-world readiness.</h1>
     <p>Practical ideas, student guidance and technology-focused stories to help you move forward with clarity.</p>
    </div>
   </div>
   <section className="section">
    <div className="container blogLayout">
     <div className="blogFeature">
      <span className="blogBadge">Featured Article</span>
      <h2>Building a stronger tech foundation beyond classroom theory</h2>
      <p>Many learners complete courses with knowledge but still feel uncertain when it comes to real-world tasks. This article explains how structured practice, supported guidance and consistent steps can bridge the gap between learning and confidence.</p>
      <Link className="more" to="/contact">Ask for guidance →</Link>
     </div>
     <div className="blogGrid">
      {posts.map(post => (
       <article className="blogCard" key={post.title}>
        <div className="blogMeta">
         <span>{post.category}</span>
         <small>{post.date}</small>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to="/contact" className="more">Read more →</Link>
       </article>
      ))}
     </div>
    </div>
   </section>
  </>
 );
}
function Contact(){
 return <StandardPage eyebrow="GET SUPPORT" title="Let's build your next step." intro="Tell us what you need help with and connect with TechZiouz.">
  <section className="section"><div className="container contactGrid">
   <div><h2>Contact TechZiouz</h2><p>Email: <a href="mailto:techziouz@gmail.com">techziouz@gmail.com</a></p><p>Phone / WhatsApp: <a href={whatsappUrl("Hello TechZiouz, I found you through your website and would like to connect.")} target="_blank" rel="noreferrer">+91 9446328258</a></p><p>KV Shopping Centre, Arangottukara, Arangottukara (PO), Palakkad, Kerala, India - 679532</p><p><a href={whatsappUrl("Hello TechZiouz, I found you through your website and would like to enquire.")} target="_blank" rel="noreferrer">Chat on WhatsApp →</a></p></div>
   <form onSubmit={e=>{e.preventDefault();const formData=new FormData(e.currentTarget);const details={name:formData.get("name"),email:formData.get("email"),phone:formData.get("phone"),interest:formData.get("interest"),requirement:formData.get("requirement")};const message=["Hello TechZiouz, I found you through the TechZiouz website and would like to enquire.","",`Name: ${details.name}`,`Email: ${details.email}`,`Phone / WhatsApp: ${details.phone}`,`Interested in: ${details.interest}`,`Requirement: ${details.requirement||"Not provided"}`].join("\n");window.open(whatsappUrl(message),"_blank","noopener,noreferrer")}}>
    <input name="name" placeholder="Full Name" autoComplete="name" required/>
    <input name="email" type="email" placeholder="Email" autoComplete="email" required/>
    <input name="phone" type="tel" placeholder="Phone / WhatsApp" autoComplete="tel" required/>
    <select name="interest" required>
     <option value="" disabled>Select a program or service</option>
     <optgroup label="Programs">
      <option>General Programs Enquiry</option>
      <option>Junior Tech Explorers</option>
      <option>Teen Tech Skills Program</option>
      <option>Vacation Tech Camp</option>
      <option>College Tech Programs</option>
      <option>Career Skill Programs</option>
      <option>Kidziouz</option>
     </optgroup>
     <optgroup label="Services">
      <option>Student Support</option>
      <option>Training</option>
      <option>Practical Lab</option>
      <option>Project Support</option>
      <option>Career Support</option>
      <option>AI & Digital Solutions</option>
     </optgroup>
    </select>
    <textarea name="requirement" placeholder="Tell us about your requirement (max 100 characters)" maxLength={100} required></textarea>
    <button className="btn red" type="submit">Submit Enquiry</button>
   </form>
  </div></section>
 </StandardPage>;
}

function App(){
 return <Layout><Routes>
   <Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/>
  <Route path="/programs" element={<Programs/>}/><Route path="/programs/kidziouz" element={<Kidziouz/>}/>
   <Route path="/services/practical-labs" element={<PracticalLabs/>}/>
   {services.filter(s=>s.path!=="/services/practical-labs").map(s=><Route key={s.path} path={s.path} element={<Detail s={s}/>}/>)}
   <Route path="/student-support" element={<Generic eyebrow="STUDENT SUPPORT" title="Support for your academic technology journey." intro="Programming, lab, exam, supplementary and viva support designed around student needs." items={["Programming Support","Lab Preparation","Exam Preparation","Supplementary Exam Support","Viva Preparation","Doubt Clearing"]}/>}/>
   <Route path="/training" element={<Generic eyebrow="TRAINING & SKILL DEVELOPMENT" title="Build skills that go beyond the classroom." intro="Practical technology training for students, graduates and professionals." items={["C / C++","Python","Java","SQL","Python Full Stack","Django","Git & GitHub","AI Tools"]}/>}/>
   <Route path="/projects" element={<Generic eyebrow="PROJECT SUPPORT" title="Build with understanding. Present with confidence." intro="Guidance from idea selection through development, documentation, demo and viva." items={["Mini Projects","Major Projects","Final Year Projects","Documentation","PPT / Presentation","Demo & Viva"]}/>}/>
   <Route path="/career" element={<Generic eyebrow="CAREER SUPPORT" title="From skills to career readiness." intro="Build a stronger professional profile and prepare for your next opportunity." items={["ATS Resume","LinkedIn","GitHub","Portfolio","Technical Interview","Mock Interview","Placement Preparation","Skill Assessment"]}/>}/>
   <Route path="/about" element={<About/>}/><Route path="/blog" element={<BlogPage/>}/><Route path="/contact" element={<Contact/>}/>
 </Routes></Layout>
}
createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);

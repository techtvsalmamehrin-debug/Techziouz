import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "./programs.css";
import "./kidziouz.css";

const tracks = [
 {id:"junior-tech-explorers",title:"Junior Tech Explorers",audience:"8th - 10th Standard Students",description:"Technology learning for curious minds, with practical foundations and approachable projects.",icon:"fa-lightbulb",areas:["Computer basics","Scratch","Python basics","Arduino & electronics"],cta:"Explore Junior Tech Explorers"},
 {id:"teen-tech-skills",title:"Teen Tech Skills Program",audience:"Plus One & Plus Two Students",description:"Build useful digital and programming skills for a smarter tomorrow.",icon:"fa-laptop-code",areas:["Productivity tools","C / C++ / Python","Web development","AI tools & prompting"],cta:"Explore Teen Tech Skills"},
 {id:"vacation-tech-camp",title:"Vacation Tech Camp",audience:"8th - 12th Standard Students",description:"Learn, practice, build and have fun through guided technology activities.",icon:"fa-robot",areas:["Coding & app basics","Robotics & Arduino","AI tools","Team projects"],cta:"Join Vacation Tech Camp"},
 {id:"college-tech-programs",title:"College Tech Programs",audience:"B.Tech, Diploma & Degree Students",description:"Practical learning and project support for a professional tomorrow.",icon:"fa-code",areas:["Programming & databases","Web & full stack","Project guidance","Career preparation"],cta:"Explore College Tech Programs"},
 {id:"career-skill-programs",title:"Career Skill Programs",audience:"Graduates & Job Seekers",description:"Develop job-ready technology skills, portfolio work and interview confidence.",icon:"fa-briefcase",areas:["Python & Django","Full stack development","APIs & automation","Career support"],cta:"Explore Career Programs"},
 {id:"kidziouz",title:"Kidziouz",audience:"Young learners",description:"A friendly, creative technology learning identity for curious young minds.",icon:"fa-shapes",areas:["Coding for kids","Robotics & electronics","Creative projects","Vacation camps"],path:"/programs/kidziouz",cta:"Explore Kidziouz"}
];

function PageMetadata({title,description,path}){
 useEffect(()=>{
  const titleNode=document.title;
  const descriptionNode=document.querySelector('meta[name="description"]');
  const canonicalNode=document.querySelector('link[rel="canonical"]');
  const oldDescription=descriptionNode?.content;
  const oldCanonical=canonicalNode?.href;
  document.title=title;
  if(descriptionNode) descriptionNode.content=description;
  if(canonicalNode) canonicalNode.href=`https://techziouz.com${path}`;
  return ()=>{
   document.title=titleNode;
   if(descriptionNode&&oldDescription) descriptionNode.content=oldDescription;
   if(canonicalNode&&oldCanonical) canonicalNode.href=oldCanonical;
  };
 },[title,description,path]);
 return null;
}

function ProgramCard({track,index}){
 return <article className={`programCard${track.id==="kidziouz"?" kidziouzCard":""}`}>
  <div className="programCardTop"><span className="programIcon" aria-hidden="true"><i className={`fas ${track.icon}`}/></span><span className="programNumber">0{index+1}</span></div>
  <p className="programAudience">{track.audience}</p>
  <h3>{track.title}</h3>
  <p className="programDescription">{track.description}</p>
  <ul>{track.areas.map(area=><li key={area}>{area}</li>)}</ul>
    <Link className="programLink" to={track.path||`/programs#${track.id}`}>{track.cta}<span aria-hidden="true">→</span></Link>
 </article>;
}

function BulletGroups({groups}){
 return <div className="programGroups">{groups.map(([title,items])=><div className="programGroup" key={title}><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div>;
}

function ProgramDetail({id,title,audience,subtitle,groups,projects,highlights,cta}){
 return <section className="programDetail" id={id}>
  <div className="programDetailHead"><div><p className="programAudience">{audience}</p><h2>{title}</h2><p>{subtitle}</p></div><Link className="btn red" to="/contact">{cta}</Link></div>
  <BulletGroups groups={groups}/>
  {highlights?.length>0&&<div className="programHighlights"><h3>Program highlights</h3><div>{highlights.map(item=><span key={item}>{item}</span>)}</div></div>}
  {projects?.length>0&&<div className="projectExamples"><h3>Sample projects</h3><ul>{projects.map(item=><li key={item}>{item}</li>)}</ul></div>}
 </section>;
}

const juniorGroups=[["Learning areas",["Computer Basics","Digital Skills","Internet Safety","Introduction to Programming","Scratch","Python Basics","Arduino Basics","Electronics Basics","Logical Thinking","Problem Solving","Hands-on Mini Projects"]]];
const teenGroups=[["Learning areas",["Computer & Productivity Skills","MS Office","Google Workspace","C Programming","C++ Programming","Python Programming","Problem Solving","HTML","CSS","JavaScript Basics","Web Development","AI Tools for Students","Generative AI & Prompting","Project-Based Learning","Career & Future Readiness"]]];
const vacationGroups=[["Camp activities",["Computer & Digital Skills","Coding","App Development Basics","Web Development Basics","Robotics","Arduino Projects","AI Tools","Innovation","Team Activities","Creative Projects","Real-World Projects","Project Demonstration"]]];
const collegeGroups=[["Programming",["C","C++","Python","Java","Data Structures & Algorithms","Database Management Systems"]],["Web development",["HTML","CSS","JavaScript","React","Node.js","Python Django","API Development","Full Stack Development"]],["Databases & tools",["MySQL","MongoDB","SQLite","PL/SQL Basics","Git","GitHub"]],["Project support",["Project Idea Selection","Technology Selection","Development","Debugging","Testing","Deployment","Documentation","PPT Preparation","Viva Preparation","Presentation Support"]],["Academic & practical support",["Lab Support","Practical Sessions","Technical Concepts","Project Guidance"]],["Career preparation",["ATS Resume","LinkedIn Profile","GitHub Portfolio","Technical Interview Preparation","HR Interview Preparation","Aptitude Support","Placement Guidance"]]];
const careerGroups=[["Technical skills",["Python Development","Python Django","Full Stack Development","Web Development","Database & API Integration","Git & GitHub","AI & Emerging Technologies","AI Tools","Automation","Real-World Projects"]],["Career support",["ATS Resume Building","LinkedIn Profile Setup","GitHub Portfolio","Portfolio Development","Technical Interview Preparation","HR Interview Preparation","Mock Interviews","Career Guidance","Placement Preparation"]]];

export function Programs(){
 return <>
  <PageMetadata title="TechZiouz Programs | Technology Training for Students & Graduates" description="Explore TechZiouz technology programs for school students, B.Tech, Diploma, Degree students, graduates and job seekers. Learn programming, web development, robotics, AI, project development and career skills." path="/programs"/>
  <section className="programHero"><div className="container"><div className="eyebrow">TECHZIOUZ PROGRAMS</div><h1>Technology Programs for Every Learning Stage</h1><p>From young learners to college students and graduates - learn practical technology skills, build projects and prepare for the future.</p><strong className="programMotto">LEARN <i>•</i> PRACTICE <i>•</i> BUILD <i>•</i> GROW</strong><div className="programHeroActions"><a className="btn red" href="#program-cards">Explore Programs</a><Link className="btn programOutline" to="/contact">Get Started</Link></div></div></section>
  <section className="programOverview" id="program-cards"><div className="container"><div className="programSectionIntro"><div><div className="eyebrow">FIND YOUR STARTING POINT</div><h2>Programs for every next step.</h2></div><p>Explore practical learning paths shaped around different ages, study stages and career goals.</p></div><div className="programCards">{tracks.map((track,index)=><ProgramCard key={track.id} track={track} index={index}/>)}</div></div></section>
  <section className="programDetails"><div className="container">
  <ProgramDetail id="junior-tech-explorers" title="Junior Tech Explorers" audience="8th - 10th Standard Students" subtitle="Technology Learning for Curious Minds" groups={juniorGroups} cta="Explore Junior Tech Explorers" projects={["Traffic Light System","Automatic Night Lamp","Smart Door Alert","Temperature Monitor","Water Level Indicator","Smart Doorbell","Obstacle Detection Car","Basic Arduino Robot"]} highlights={["Practical Learning","Hands-on Activities","Project-Based Learning","Creativity","Problem Solving","Certificate Option"]}/>
  <ProgramDetail id="teen-tech-skills" title="Teen Tech Skills Program" audience="Plus One & Plus Two Students" subtitle="Build Skills for a Smarter Tomorrow" groups={teenGroups} cta="Explore Teen Tech Skills" projects={["Python Calculator","Quiz Application","Personal Portfolio Website","Student Record System","Arduino Smart Light","Mini Web Projects"]}/>
  <ProgramDetail id="vacation-tech-camp" title="Vacation Tech Camp" audience="8th - 12th Standard Students" subtitle="Learn • Practice • Build • Have Fun" groups={vacationGroups} cta="Join Vacation Tech Camp" highlights={["Hands-on Practical Sessions","Beginner Friendly","Step-by-Step Guidance","Small Batch Learning","Team Activities","Project Demo","Certificate"]} projects={["Obstacle Detection Car","Smart Home Model","Traffic Light System","Automatic Plant Watering","Smart Door Alert","Personal Portfolio Website"]}/>
  <ProgramDetail id="college-tech-programs" title="College Tech Programs" audience="B.Tech • Diploma • Degree Students" subtitle="Practical Learning for a Professional Tomorrow" groups={collegeGroups} cta="Explore College Tech Programs"/>
  <ProgramDetail id="career-skill-programs" title="Career Skill Programs" audience="Graduates & Job Seekers" subtitle="Job-Ready Skills for a Better Tomorrow" groups={careerGroups} cta="Explore Career Programs"/>
  </div></section>
  <KidziouzFeature/>
  <WhyTechZiouz/>
  <LearningJourney/>
  <ProgramsCTA/>
 </>;
}

function KidziouzFeature(){
 return <section className="kidziouzFeature"><div className="container kidziouzFeatureInner"><div className="kidziouzFeatureCopy"><div className="kidziouzLabel">KIDZIOUZ <span>BY TECHZIOUZ</span></div><h2>A Tech Learning Space for Young Minds</h2><p>A friendly, creative place to explore digital skills, coding, robotics and hands-on technology projects.</p><div className="kidziouzPills">{["Coding for Kids","Scratch & Python","Robotics","Creative Projects"].map(item=><span key={item}>{item}</span>)}</div><Link className="btn kidziouzButton" to="/programs/kidziouz">Explore Kidziouz <span aria-hidden="true">→</span></Link></div><div className="kidziouzFeatureArt" aria-hidden="true"><div className="kidziouzFeatureRobot"><i className="fas fa-robot"/></div><span className="kidziouzFeatureSpark kidziouzFeatureSparkOne"><i className="fas fa-lightbulb"/></span><span className="kidziouzFeatureSpark kidziouzFeatureSparkTwo"><i className="fas fa-puzzle-piece"/></span><span className="kidziouzFeatureCode">&lt; learn / build &gt;</span></div></div></section>;
}

function WhyTechZiouz(){
 return <section className="whyPrograms"><div className="container"><div className="eyebrow">THE TECHZIOUZ APPROACH</div><h2>Why Choose TechZiouz?</h2><div className="whyGrid">{["Practical & Hands-on Learning","Real-World Project Experience","Expert Technical Guidance","Latest Tools & Technologies","Project & Career Support","Flexible Learning Options","Student-Focused Approach","Portfolio & Skill Development"].map((item,index)=><div key={item}><b>0{index+1}</b><h3>{item}</h3></div>)}</div></div></section>;
}

function LearningJourney(){
 return <section className="learningJourney"><div className="container"><div className="eyebrow">A CLEAR PATH FORWARD</div><h2>Your learning journey.</h2><ol>{["Learn","Practice","Build","Present","Grow","Prepare for the Future"].map((step,index)=><li key={step}><b>0{index+1}</b><span>{step}</span></li>)}</ol></div></section>;
}

function ProgramsCTA(){
 return <section className="programFinalCta"><div className="container programFinalCtaInner"><div><div className="eyebrow">TAKE YOUR NEXT STEP</div><h2>Ready to Learn, Build & Grow?</h2><p>Explore our programs and start your technology journey with TechZiouz.</p></div><div className="programHeroActions"><a className="btn red" href="#program-cards">Explore Programs</a><Link className="btn programOutline" to="/contact">Get Started</Link><Link className="btn programOutline" to="/contact">Contact Us</Link></div></div></section>;
}

const kidziouzPaths=[
 {level:"LEVEL 1",title:"Junior Tech Explorers",audience:"8th - 10th Standard Students",focus:["Computer Basics","Digital Skills","Internet Safety","Scratch","Python Basics","Arduino","Electronics","Logical Thinking","Mini Projects"]},
 {level:"LEVEL 2",title:"Teen Tech Skills",audience:"Plus One & Plus Two Students",focus:["Computer Productivity","C / C++","Python","Web Development","AI Tools","Project-Based Learning","Career Readiness"]},
 {level:"VACATION PROGRAM",title:"Kidziouz Vacation Tech Camp",audience:"8th - 12th Standard Students",focus:["Coding","Robotics","Arduino","AI Tools","Digital Skills","Creative Projects","Team Activities","Project Demo"]}
];

export function Kidziouz(){
 return <>
  <PageMetadata title="Kidziouz by TechZiouz | A Tech Learning Space for Young Minds" description="Discover Kidziouz by TechZiouz, a technology learning space for young minds covering digital skills, coding, Scratch, Python, Arduino, robotics and creative projects." path="/programs/kidziouz"/>
  <section className="kidziouzHero"><div className="container kidziouzHeroInner"><div className="kidziouzHeroCopy"><div className="kidziouzLabel">KIDZIOUZ <span>BY TECHZIOUZ</span></div><h1>A Tech Learning Space for Young Minds</h1><p>Curiosity becomes confidence through creative, hands-on technology learning.</p><Link className="btn kidziouzButton" to="/contact">Explore Kidziouz <span aria-hidden="true">→</span></Link><div className="kidziouzHeroMarks"><span>CREATE</span><span>EXPERIMENT</span><span>DISCOVER</span></div></div><div className="kidziouzHeroArt" aria-hidden="true"><div className="kidziouzHeroArtGrid"/><div className="kidziouzHeroRobot"><i className="fas fa-robot"/></div><span className="kidziouzHeroSticker kidziouzStickerCode"><i className="fas fa-code"/> CODE</span><span className="kidziouzHeroSticker kidziouzStickerBuild"><i className="fas fa-cubes"/> BUILD</span><span className="kidziouzHeroSticker kidziouzStickerIdeas"><i className="fas fa-lightbulb"/> IDEAS</span></div></div></section>
  <section className="kidziouzAreas"><div className="container"><div className="programSectionIntro"><div><div className="eyebrow">EXPLORE TECHNOLOGY</div><h2>Learning made for curious minds.</h2></div><p>Build digital confidence through guided exploration, age-aware learning paths and creative projects.</p></div><div className="kidziouzAreaGrid">{["Computer Basics","Digital Literacy","Coding for Kids","Scratch","Python Basics","Arduino Basics","Electronics","Robotics","Logical Thinking","Problem Solving","AI Awareness","Digital Skills","Creative Technology Projects","Vacation Technology Camps"].map((item,index)=><div key={item}><span>0{index+1}</span><h3>{item}</h3></div>)}</div></div></section>
  <section className="kidziouzLevels"><div className="container"><div className="eyebrow">LEARNING PATHS</div><h2>Start at the right level.</h2><div className="kidziouzLevelGrid">{kidziouzPaths.map((path,index)=><article className="kidziouzLevel" key={path.level}><span>{path.level}</span><h3>{path.title}</h3><p>{path.audience}</p><ul>{path.focus.map(item=><li key={item}>{item}</li>)}</ul><Link to="/contact" className="programLink">Enquire about this path <span aria-hidden="true">→</span></Link></article>)}</div></div></section>
  <section className="kidziouzSafety"><div className="container"><div><div className="eyebrow">KIDZIOUZ BY TECHZIOUZ</div><h2>Creative technology learning, with guidance at every step.</h2></div><p>Kidziouz brings together digital literacy, coding, electronics and project-based activities in a supportive learning space for young people.</p></div></section>
  <ProgramsCTA/>
 </>;
}
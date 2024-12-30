import React, { ReactNode } from 'react';
import { Mail, ExternalLink, FileText, Code, BookOpen, GraduationCap } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 font-['Courier_New']">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto mb-5 text-center">
        <h1 className="text-4xl text-gray-500 mb-2">Amir Mohammad Asayesh</h1>
        <div className="text-lg text-gray-400 space-y-1">
          <p className="italic">Data Quality Automation Engineer at Snapp!</p>
          <p>undergraduate bachelor CE</p>
        </div>
        <div className="mt-4 flex justify-center items-center gap-4">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">amirnasiri1145@gmail.com</span>
          </div>
          <a href="https://www.linkedin.com/in/amirmohammad-asayesh" 
             className="flex items-center space-x-2 text-gray-400 hover:text-gray-500"
             target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {['Summary', 'Experience', 'Skills', 'Education'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-gray-500 transition">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8 px-4">
        {/* Summary */}
        <Card id="summary">
            <h2 className="text-lg font-normal mb-4 flex items-center gap-2 text-gray-400">
            <FileText className="w-5 h-5" />
            Summary
            </h2>
            <p className="text-gray-600">
            Tech enthusiast by day, data detective by night! Currently juggling Computer Engineering studies with a cool gig as a Data Quality Engineer at Snapp.
            <br />
            I&apos;m on a mission to turn messy data into meaningful insights while exploring the fascinating world of tech.
            <br />
            Always eager to dive into new technologies, solve puzzles, and find creative ways to make data work smarter, not harder.
            <br />
            Looking for opportunities to collaborate on innovative projects and learn from fellow tech adventurers!
            </p>
        </Card>

        {/* Experience */}
        <Card id="experience">
          <h2 className="text-lg font-normal mb-4 flex items-center gap-2 text-gray-400">
            <Code className="w-5 h-5" />
            Experience
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-gray-500">Data Quality Automation Engineer</h3>
              <p>Snapp! · December 2023 - Present</p>
              <p>Tehran, Tehran Province, Iran</p>
            </div>
            <div>
              <h3 className="text-gray-500">Data Engineer bootcamp</h3>
              <p>blu Bank · July 2023 - September 2023</p>
              <p>Tehran, Tehran Province, Iran</p>
            </div>
          </div>
        </Card>

        {/* Skills */}
        <Card id="skills">
          <h2 className="text-lg font-normal mb-4 flex items-center gap-2 text-gray-400">
            <BookOpen className="w-5 h-5" />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-gray-400">Technical Skills</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-500">
                <li>Python (Programming Language)</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-400">Languages</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-500">
                <li>English</li>
                <li>Persian</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card id="education">
          <h2 className="text-lg font-normal mb-4 flex items-center gap-2 text-gray-400">
            <GraduationCap className="w-5 h-5" />
            Education
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-gray-500">Bachelor&apos;s degree, Computer Engineering</h3>
              <p>Islamic Azad University · September 2020</p>
            </div>
            <div>
              <h3 className="text-gray-500">High School Diploma, Mathematics</h3>
              <p>Shahed School · September 2016 - June 2019</p>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-12 text-center text-sm text-gray-400">
        <p>created at 4:00 AM in the morning with LOVE :)</p>
      </footer>
    </div>
  );
};

export default Portfolio;
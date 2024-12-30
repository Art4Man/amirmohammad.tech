import React from 'react';
import { Mail, ExternalLink, FileText, Code, BookOpen, GraduationCap } from 'lucide-react';
import { Card } from './components/Card';
import { ThemeToggle } from './components/ThemeToggle';

export default function Page(): React.ReactNode {
  return (
    <div className="min-h-screen py-8 font-['Courier_New']" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header Section */}
      <header className="max-w-4xl mx-auto mb-5 font-['Source_Serif_Pro'] text-center">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <h1 className="text-4xl mb-2" style={{ color: 'var(--text-secondary)' }}>
          Amir Mohammad Asayesh
        </h1>
        <div className="text-lg space-y-1 mb-4" style={{ color: 'var(--text-tertiary)' }}>
          <p className="italic">Data Quality Automation Engineer at Snapp!</p>
          <p>undergraduate bachelor Computer Engineering</p>
        </div>
        <div className="mt-4 flex justify-center items-center gap-4">
          <div className="flex items-center space-x-2" style={{ color: 'var(--text-tertiary)' }}>
            <Mail className="w-4 h-4" />
            <span>amnasiriasayesh@gmail.com</span>
          </div>
          <a 
            href="https://www.linkedin.com/in/amir-mohammad-asayesh/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            style={{ color: 'var(--text-tertiary)' }}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {['Summary', 'Experience', 'Skills', 'Education'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-tertiary)' }}
            >
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
            <FileText className="w-5 h-5" /> Summary
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
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
            <Code className="w-5 h-5" /> Experience
          </h2>
          <div className="space-y-6" style={{ color: 'var(--text-secondary)' }}>
            <div>
              <h3 style={{ color: 'var(--text-secondary)' }}>Data Quality Automation Engineer</h3>
              <p>Snapp! · December 2023 - Present</p>
              <p>Tehran, Tehran Province, Iran</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--text-secondary)' }}>Data Engineer bootcamp</h3>
              <p>blu Bank · July 2023 - September 2023</p>
              <p>Tehran, Tehran Province, Iran</p>
            </div>
          </div>
        </Card>

        {/* Skills */}
        <Card id="skills">
          <h2 className="text-lg font-normal mb-4 flex items-center gap-2 text-gray-400">
            <BookOpen className="w-5 h-5" /> Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-tertiary)' }}>Technical Skills</h3>
              <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--text-secondary)' }}>
                <li>Python (Programming Language)</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-tertiary)' }}>Languages</h3>
              <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--text-secondary)' }}>
                <li>English</li>
                <li>Persian</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card id="education">
          <h2 className="text-lg font-normal mb-4 flex items-center gap-2 text-gray-400">
            <GraduationCap className="w-5 h-5" /> Education
          </h2>
          <div className="space-y-6" style={{ color: 'var(--text-secondary)' }}>
            <div>
              <h3 style={{ color: 'var(--text-secondary)' }}>Bachelor&apos;s degree, Computer Engineering</h3>
              <p>Islamic Azad University · September 2020</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--text-secondary)' }}>High School Diploma, Mathematics</h3>
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
}
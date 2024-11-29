import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { Button } from '../../components/ui/Button';
import { Brain, Download, ArrowLeft, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Brainrot dictionary and translation function
export const brainrotDictionary = {
  "yapping": "Speaking a lot without much substance, often just chatter.",
  "edging": "Suspenseful or teasing buildup to an outcome.",
  "peak": "The best or highest point of something.",
  "skibidi": "A nonsensical or humorous phrase.",
  "gyatt": "A compliment implying something is very good.",
  "sigma": "Independent or nonconformist person, often admired.",
  "ohio": "Humorous reference to something strange or bad.",
  "maxing": "Improving or optimizing something to its best level.",
  "rizz": "Charisma or charm, often related to attractiveness.",
  "rizzler": "A person with great charisma or charm.",
  "pulling": "Attracting romantic attention.",
  "baddies": "Attractive people, usually women.",
  "fanum_tax": "Mooching, especially food.",
  "blud": "Sarcastic or mocking term for 'bro.'",
  "tripping": "Acting irrationally or making silly mistakes.",
  "mewing": "Jawline-enhancing practice with dubious scientific backing.",
  "alpha": "Dominant or confident personality.",
  "beta": "Submissive or less assertive personality.",
  "baby_gronk": "A young, talented athlete.",
  "sussy_baka": "Playful term for 'suspicious fool,' inspired by Among Us.",
  "griddy": "A celebratory dance move.",
  "snack": "An attractive or desirable person.",
  "shook": "Being surprised or caught off guard.",
  "lowkey": "Subtly or secretly.",
  "highkey": "Definitely or openly.",
  "hits_different": "Feels unique or impactful.",
  "no_cap": "Truthful or honest, no lie.",
  "smol": "Extremely small or cute.",
  "ship": "Supporting a romantic pairing, real or fictional.",
  "sus": "Short for 'suspicious,' often used humorously.",
  "stan": "Devoted fan of someone or something.",
  "periodt": "Emphatic way to end a definitive statement.",
  "vibe_check": "Judging someone's vibe or energy.",
  "mood": "Relatable feeling or action.",
  "rent_free": "Something persistently in your thoughts.",
  "slaps": "Something excellent, often music.",
  "snatched": "Looking exceptionally good or fashionable.",
  "mid": "Mediocre or average.",
  "main_character": "Feeling like the protagonist of a situation.",
  "oof": "Expression of empathy or mild frustration.",
  "iykyk": "If you know, you know; implies insider knowledge.",
  "sending_me": "Making someone laugh hysterically.",
  "sheesh": "Expression of amazement or surprise.",
  "simp": "Someone overly attentive to someone they admire.",
  "situationship": "Undefined romantic relationship."
} as const;

export function translateToBrainrot(text: string): string {
  let translatedText = text.toLowerCase();

  // Translate terms using brainrot dictionary
  Object.entries(brainrotDictionary).forEach(([term, meaning]) => {
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    if (translatedText.match(regex)) {
      translatedText = translatedText.replace(regex, `${term.toUpperCase()} (${meaning})`);
    }
  });

  // Add professional terms translations
  const professionalTerms: Record<string, string> = {
    'manager': 'Chief Vibe Officer',
    'developer': 'Code Rizzler',
    'engineer': 'Tech Sigma',
    'analyst': 'Data Gyatt Specialist',
    'professional': 'Based Individual',
    'experienced': 'No Cap Veteran',
    'skilled': 'Built Different',
    'proficient': 'Absolutely Bussin at',
  };

  Object.entries(professionalTerms).forEach(([term, translation]) => {
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    translatedText = translatedText.replace(regex, translation);
  });

  return translatedText;
}

export function ResumePreview() {
  const { personalInfo, skills, workExperience } = useResumeStore();
  const navigate = useNavigate();

  // Function to download the resume as a PDF
  const downloadPDF = () => {
    const input = document.getElementById('resume');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`${personalInfo.fullName}_Resume.pdf`);
    });
  };

  // Function to clear local storage
  const clearStorage = () => {
    localStorage.clear();
    alert("All stored data has been cleared!");
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto" id="resume">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-500" />
              <h1 className="text-3xl font-bold text-white">Your Brainrotted Resume</h1>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/create')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Edit Resume</span>
              </Button>
              <Button onClick={downloadPDF} className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </Button>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="bg-white rounded-lg shadow-xl p-8 space-y-8">
            {/* Personal Info Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-4xl font-bold text-gray-900">{translateToBrainrot(personalInfo.fullName)}</h2>
              <div className="mt-2 text-gray-600 space-y-1">
                <p>{translateToBrainrot(personalInfo.email)}</p>
                <p>{translateToBrainrot(personalInfo.phone)}</p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="group relative">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {translateToBrainrot(skill.name)}
                    </span>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {skill.translatedName}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Experience</h3>
              {workExperience.map((exp) => (
                <div key={exp.id} className="group space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-medium text-gray-900">{translateToBrainrot(exp.title)}</h4>
                      <p className="text-gray-600">{exp.company} • {exp.duration}</p>
                    </div>
                    <span className="text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      {translateToBrainrot(exp.translatedTitle)}
                    </span>
                  </div>
                  <p className="text-gray-700">{translateToBrainrot(exp.description)}</p>
                  <p className="text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {translateToBrainrot(exp.translatedDescription)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Clear Data Button */}
      <div className="fixed bottom-8 right-8">
        <Button onClick={clearStorage} className="bg-red-500 hover:bg-red-600 text-white">
          <Trash className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

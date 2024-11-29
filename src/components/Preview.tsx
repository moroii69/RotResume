import React from 'react';

export function Preview() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Preview The Heat</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-3xl font-bold text-gray-900">Gigachad Developer</h3>
              <p className="text-purple-600">Certified Rizz Master | Professional W Holder</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Experience</h4>
                <div className="mt-2 text-gray-600">
                  <p>🔥 Chief Vibes Officer @ Tech Giants Inc</p>
                  <p className="text-sm">- Carried the entire dev team fr fr</p>
                  <p className="text-sm">- Deployed straight bussin features no cap</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Skills</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["React Wizard", "TypeScript Enjoyer", "CSS Demon", "Git Diff Genius"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
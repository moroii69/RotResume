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
  
  Object.entries(brainrotDictionary).forEach(([term, meaning]) => {
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    if (translatedText.match(regex)) {
      translatedText = translatedText.replace(regex, `${term.toUpperCase()} (${meaning})`);
    }
  });

  // Add some common professional terms translations
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
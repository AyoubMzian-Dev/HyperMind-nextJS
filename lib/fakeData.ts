export const defaultTabValue: string = "Mathematics"


import { SchoolSubject } from './interface';
export const schoolSubjects: SchoolSubject[] = [
  {
    id: 1,
    name: "Mathematics",
    teacher: "Mr. John Doe",
    lessonsCount: 3,
    averageExamScore: 85,
    completedLessons: 2,
    lessons: [
      {
        lessonId: "math1",
        lessonTitle: "Algebra Basics",
        lessonDescription: "Introduction to algebraic expressions and equations.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Introduction",
            id: "intro-1",
            exercise: "Learn basic algebra concepts",
            status: false
          },
          {
            title: "Solving Equations",
            id: "solve-1", 
            exercise: "Practice solving linear equations",
            status: false
          },
          {
            title: "Practice Problems",
            id: "practice-1",
            exercise: "Work through sample algebra problems",
            status: false
          }
        ],
        lessonTags: ["algebra", "math", "equations"],
        lessonsImgURL: "/",
        lessonSubject: "Mathematics",
        lessonQwastions: ["What is algebra?", "How do we solve basic equations?", "What are common algebra problems?"]
      },
      {
        lessonId: "math2",
        lessonTitle: "Geometry Fundamentals",
        lessonDescription: "Exploring basic concepts in geometry, including shapes and angles.",
        lessonLongTime: "60 minutes",
        lessonSections: [
          {
            title: "Shapes",
            id: "shapes-1",
            exercise: "Learn about geometric shapes",
            status: false
          },
          {
            title: "Angles",
            id: "angles-1",
            exercise: "Understanding angles",
            status: false
          },
          {
            title: "Pythagorean Theorem",
            id: "pythag-1",
            exercise: "Working with the Pythagorean theorem",
            status: false
          }
        ],
        lessonTags: ["geometry", "shapes", "angles"],
        lessonsImgURL: "/",
        lessonSubject: "Mathematics",
        lessonQwastions: ["What are the basic geometric shapes?", "How do we measure angles?", "How does the Pythagorean theorem work?"]
      },
      {
        lessonId: "math3",
        lessonTitle: "Trigonometry Introduction",
        lessonDescription: "Understanding basic trigonometric functions and their applications.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Sine",
            id: "sine-1",
            exercise: "Understanding sine function",
            status: false
          },
          {
            title: "Cosine",
            id: "cosine-1",
            exercise: "Understanding cosine function",
            status: false
          },
          {
            title: "Tangent",
            id: "tangent-1",
            exercise: "Understanding tangent function",
            status: false
          }
        ],
        lessonTags: ["trigonometry", "math", "functions"],
        lessonsImgURL: "/",
        lessonSubject: "Mathematics",
        lessonQwastions: ["What is the sine function?", "How do we use cosine?", "What are the applications of tangent?"]
      },
    ],
  },
  {
    id: 2,
    name: "History",
    teacher: "Ms. Sarah Johnson",
    lessonsCount: 3,
    averageExamScore: 90,
    completedLessons: 1,
    lessons: [
      {
        lessonId: "history1",
        lessonTitle: "Ancient Civilizations",
        lessonDescription: "A look into the ancient civilizations and their cultures.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Mesopotamia",
            id: "meso-1",
            exercise: "Study Mesopotamian civilization",
            status: false
          },
          {
            title: "Egypt",
            id: "egypt-1",
            exercise: "Learn about ancient Egypt",
            status: false
          },
          {
            title: "Greece",
            id: "greece-1",
            exercise: "Explore ancient Greece",
            status: false
          }
        ],
        lessonTags: ["history", "civilizations", "culture"],
        lessonsImgURL: "/",
        lessonSubject: "History",
        lessonQwastions: ["What was life like in Mesopotamia?", "How did ancient Egyptians build pyramids?", "What contributions did Greece make to modern society?"]
      },
      {
        lessonId: "history2",
        lessonTitle: "World War II",
        lessonDescription: "Study of the major events and impacts of World War II.",
        lessonLongTime: "60 minutes",
        lessonSections: [
          {
            title: "Causes",
            id: "causes-1",
            exercise: "Understanding the causes of WWII",
            status: false
          },
          {
            title: "Major Battles",
            id: "battles-1",
            exercise: "Study major WWII battles",
            status: false
          },
          {
            title: "Outcomes",
            id: "outcomes-1",
            exercise: "Analyze WWII outcomes",
            status: false
          }
        ],
        lessonTags: ["world war", "history", "war"],
        lessonsImgURL: "/",
        lessonSubject: "History",
        lessonQwastions: ["What led to World War II?", "What were the decisive battles?", "How did WWII change the world?"]
      },
      {
        lessonId: "history3",
        lessonTitle: "Renaissance",
        lessonDescription: "Exploring the key events and figures of the Renaissance period.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Humanism",
            id: "human-1",
            exercise: "Study Renaissance humanism",
            status: false
          },
          {
            title: "Art",
            id: "art-1",
            exercise: "Explore Renaissance art",
            status: false
          },
          {
            title: "Science",
            id: "science-1",
            exercise: "Learn about Renaissance science",
            status: false
          }
        ],
        lessonTags: ["history", "renaissance", "culture"],
        lessonsImgURL: "/",
        lessonSubject: "History",
        lessonQwastions: ["What is humanism?", "How did art evolve during the Renaissance?", "What scientific discoveries were made?"]
      },
    ],
  },
  {
    id: 3,
    name: "Science",
    teacher: "Dr. Michael Lee",
    lessonsCount: 3,
    averageExamScore: 92,
    completedLessons: 1,
    lessons: [
      {
        lessonId: "science1",
        lessonTitle: "Basic Physics",
        lessonDescription: "Introduction to basic physics concepts such as motion and force.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Motion",
            id: "motion-1",
            exercise: "Study motion concepts",
            status: false
          },
          {
            title: "Forces",
            id: "forces-1",
            exercise: "Learn about forces",
            status: false
          },
          {
            title: "Energy",
            id: "energy-1",
            exercise: "Understand energy concepts",
            status: false
          }
        ],
        lessonTags: ["physics", "science", "motion"],
        lessonsImgURL: "/",
        lessonSubject: "Science",
        lessonQwastions: ["How do objects move?", "What are Newton's laws of motion?", "How is energy transferred?"]
      },
      {
        lessonId: "science2",
        lessonTitle: "Chemistry Fundamentals",
        lessonDescription: "Exploring basic chemical reactions and the periodic table.",
        lessonLongTime: "60 minutes",
        lessonSections: [
          {
            title: "Chemical Reactions",
            id: "chem-1",
            exercise: "Study chemical reactions",
            status: false
          },
          {
            title: "Periodic Table",
            id: "periodic-1",
            exercise: "Learn the periodic table",
            status: false
          },
          {
            title: "Atoms",
            id: "atoms-1",
            exercise: "Understand atomic structure",
            status: false
          }
        ],
        lessonTags: ["chemistry", "science", "reactions"],
        lessonsImgURL: "/",
        lessonSubject: "Science",
        lessonQwastions: ["How do chemical reactions work?", "How is the periodic table organized?", "What is atomic structure?"]
      },
      {
        lessonId: "science3",
        lessonTitle: "Biology Basics",
        lessonDescription: "An introduction to basic biological concepts like cells and organisms.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Cells",
            id: "cells-1",
            exercise: "Study cell structure",
            status: false
          },
          {
            title: "Genetics",
            id: "genetics-1",
            exercise: "Learn about genetics",
            status: false
          },
          {
            title: "Human Anatomy",
            id: "anatomy-1",
            exercise: "Explore human anatomy",
            status: false
          }
        ],
        lessonTags: ["biology", "science", "cells"],
        lessonsImgURL: "/",
        lessonSubject: "Science",
        lessonQwastions: ["What are cells made of?", "How does DNA work?", "How do human body systems function?"]
      },
    ],
  },
  {
    id: 4,
    name: "English",
    teacher: "Ms. Emily White",
    lessonsCount: 3,
    averageExamScore: 88,
    completedLessons: 2,
    lessons: [
      {
        lessonId: "english1",
        lessonTitle: "Grammar Essentials",
        lessonDescription: "Learning the basic grammar rules and sentence structures.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Parts of Speech",
            id: "speech-1",
            exercise: "Learn parts of speech",
            status: false
          },
          {
            title: "Sentence Structure",
            id: "sentence-1",
            exercise: "Study sentence structure",
            status: false
          },
          {
            title: "Punctuation",
            id: "punct-1",
            exercise: "Master punctuation",
            status: false
          }
        ],
        lessonTags: ["grammar", "english", "language"],
        lessonsImgURL: "/",
        lessonSubject: "English",
        lessonQwastions: ["What are the parts of speech?", "How do we structure sentences?", "When do we use different punctuation marks?"]
      },
      {
        lessonId: "english2",
        lessonTitle: "Literature Analysis",
        lessonDescription: "Introduction to analyzing literary works and their themes.",
        lessonLongTime: "60 minutes",
        lessonSections: [
          {
            title: "Reading Comprehension",
            id: "reading-1",
            exercise: "Practice reading comprehension",
            status: false
          },
          {
            title: "Themes",
            id: "themes-1",
            exercise: "Analyze literary themes",
            status: false
          },
          {
            title: "Character Analysis",
            id: "character-1",
            exercise: "Study character development",
            status: false
          }
        ],
        lessonTags: ["literature", "analysis", "english"],
        lessonsImgURL: "/",
        lessonSubject: "English",
        lessonQwastions: ["How do we analyze text?", "What makes a strong theme?", "How do we analyze characters?"]
      },
      {
        lessonId: "english3",
        lessonTitle: "Creative Writing",
        lessonDescription: "Exploring the art of storytelling and creative expression through writing.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Narrative Techniques",
            id: "narrative-1",
            exercise: "Learn narrative techniques",
            status: false
          },
          {
            title: "Character Development",
            id: "chardev-1",
            exercise: "Develop characters",
            status: false
          },
          {
            title: "Plot Structure",
            id: "plot-1",
            exercise: "Create plot structure",
            status: false
          }
        ],
        lessonTags: ["writing", "creativity", "english"],
        lessonsImgURL: "/",
        lessonSubject: "English",
        lessonQwastions: ["What makes a good story?", "How do we develop compelling characters?", "How do we structure a plot?"]
      },
    ],
  },
  {
    id: 5,
    name: "Physical Education",
    teacher: "Mr. Mark Smith",
    lessonsCount: 3,
    averageExamScore: 82,
    completedLessons: 1,
    lessons: [
      {
        lessonId: "pe1",
        lessonTitle: "Physical Fitness and Exercise Techniques",
        lessonDescription: "An introduction to physical fitness and exercise techniques.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Warm-up",
            id: "warmup-1",
            exercise: "Learn warm-up exercises",
            status: false
          },
          {
            title: "Cardio",
            id: "cardio-1",
            exercise: "Practice cardio exercises",
            status: false
          },
          {
            title: "Strength Training",
            id: "strength-1",
            exercise: "Learn strength training",
            status: false
          },
          {
            title: "Cool-down",
            id: "cooldown-1",
            exercise: "Practice cool-down exercises",
            status: false
          }
        ],
        lessonTags: ["PE", "fitness", "exercise"],
        lessonsImgURL: "/",
        lessonSubject: "Physical Education",
        lessonQwastions: ["Why is warming up important?", "What are effective cardio exercises?", "How do we build strength safely?", "Why do we need to cool down?"]
      },
      {
        lessonId: "pe2",
        lessonTitle: "Team Sports",
        lessonDescription: "Learning the rules and techniques of popular team sports.",
        lessonLongTime: "60 minutes",
        lessonSections: [
          {
            title: "Football",
            id: "football-1",
            exercise: "Learn football basics",
            status: false
          },
          {
            title: "Basketball",
            id: "basketball-1",
            exercise: "Practice basketball",
            status: false
          },
          {
            title: "Volleyball",
            id: "volleyball-1",
            exercise: "Learn volleyball",
            status: false
          },
          {
            title: "Teamwork",
            id: "teamwork-1",
            exercise: "Develop teamwork skills",
            status: false
          }
        ],
        lessonTags: ["PE", "sports", "teamwork"],
        lessonsImgURL: "/",
        lessonSubject: "Physical Education",
        lessonQwastions: ["What are the basic rules of football?", "How do we play basketball?", "What makes volleyball unique?", "Why is teamwork important in sports?"]
      },
      {
        lessonId: "pe3",
        lessonTitle: "Health and Nutrition",
        lessonDescription: "Understanding the basics of maintaining a healthy lifestyle.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Nutrition",
            id: "nutrition-1",
            exercise: "Learn about nutrition",
            status: false
          },
          {
            title: "Exercise",
            id: "exercise-1",
            exercise: "Understand exercise basics",
            status: false
          },
          {
            title: "Healthy Habits",
            id: "habits-1",
            exercise: "Develop healthy habits",
            status: false
          }
        ],
        lessonTags: ["health", "nutrition", "PE"],
        lessonsImgURL: "/",
        lessonSubject: "Physical Education",
        lessonQwastions: ["What makes a balanced diet?", "How much exercise do we need?", "What are good health habits?"]
      },
    ],
  },
  {
    id: 6,
    name: "Art",
    teacher: "Ms. Laura Green",
    lessonsCount: 3,
    averageExamScore: 89,
    completedLessons: 2,
    lessons: [
      {
        lessonId: "art1",
        lessonTitle: "Introduction to Drawing",
        lessonDescription: "Learning the basics of drawing techniques and shading.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Line Drawing",
            id: "line-1",
            exercise: "Practice line drawing",
            status: false
          },
          {
            title: "Shading Techniques",
            id: "shade-1",
            exercise: "Learn shading techniques",
            status: false
          },
          {
            title: "Composition",
            id: "comp-1",
            exercise: "Study composition",
            status: false
          }
        ],
        lessonTags: ["art", "drawing", "creativity"],
        lessonsImgURL: "/",
        lessonSubject: "Art",
        lessonQwastions: ["How do we draw basic lines?", "What are different shading techniques?", "How do we compose an image?"]
      },
      {
        lessonId: "art2",
        lessonTitle: "Painting Techniques",
        lessonDescription: "Exploring various painting methods, from watercolor to acrylics.",
        lessonLongTime: "60 minutes",
        lessonSections: [
          {
            title: "Watercolor",
            id: "water-1",
            exercise: "Learn watercolor techniques",
            status: false
          },
          {
            title: "Acrylics",
            id: "acrylic-1",
            exercise: "Practice acrylic painting",
            status: false
          },
          {
            title: "Brush Techniques",
            id: "brush-1",
            exercise: "Master brush techniques",
            status: false
          }
        ],
        lessonTags: ["art", "painting", "techniques"],
        lessonsImgURL: "/",
        lessonSubject: "Art",
        lessonQwastions: ["How do we use watercolors?", "What are acrylic painting techniques?", "How do we use different brushes?"]
      },
      {
        lessonId: "art3",
        lessonTitle: "Sculpture Basics",
        lessonDescription: "Introduction to sculpting with various materials.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Clay Sculpting",
            id: "clay-1",
            exercise: "Learn clay sculpting",
            status: false
          },
          {
            title: "Forming Techniques",
            id: "form-1",
            exercise: "Practice forming techniques",
            status: false
          },
          {
            title: "Finishing Touches",
            id: "finish-1",
            exercise: "Add finishing touches",
            status: false
          }
        ],
        lessonTags: ["art", "sculpture", "creativity"],
        lessonsImgURL: "/",
        lessonSubject: "Art",
        lessonQwastions: ["How do we work with clay?", "What are basic sculpting techniques?", "How do we finish a sculpture?"]
      },
    ],
  },
  {
    id: 7,
    name: "Music",
    teacher: "Ms. Julie Brown",
    lessonsCount: 3,
    averageExamScore: 87,
    completedLessons: 2,
    lessons: [
      {
        lessonId: "music1",
        lessonTitle: "Introduction to Music Theory",
        lessonDescription: "Understanding the basics of music theory, notes, and scales.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Notes",
            id: "notes-1",
            exercise: "Learn musical notes",
            status: false
          },
          {
            title: "Scales",
            id: "scales-1",
            exercise: "Practice scales",
            status: false
          },
          {
            title: "Intervals",
            id: "intervals-1",
            exercise: "Study intervals",
            status: false
          }
        ],
        lessonTags: ["music", "theory", "learning"],
        lessonsImgURL: "/",
        lessonSubject: "Music",
        lessonQwastions: ["What are musical notes?", "How do scales work?", "What are musical intervals?"]
      },
      {
        lessonId: "music2",
        lessonTitle: "Basic Instrumental Skills",
        lessonDescription: "Learning the fundamental techniques for playing instruments.",
        lessonLongTime: "60 minutes",
        lessonSections: [
          {
            title: "Guitar",
            id: "guitar-1",
            exercise: "Learn guitar basics",
            status: false
          },
          {
            title: "Piano",
            id: "piano-1",
            exercise: "Practice piano",
            status: false
          },
          {
            title: "Drums",
            id: "drums-1",
            exercise: "Study drums",
            status: false
          }
        ],
        lessonTags: ["music", "instruments", "skills"],
        lessonsImgURL: "/",
        lessonSubject: "Music",
        lessonQwastions: ["How do we play basic guitar chords?", "What are piano fundamentals?", "How do we keep rhythm on drums?"]
      },
      {
        lessonId: "music3",
        lessonTitle: "Choir and Vocal Techniques",
        lessonDescription: "Learning choir techniques and proper vocal exercises.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Breathing Techniques",
            id: "breathing-1",
            exercise: "Learn breathing techniques",
            status: false
          },
          {
            title: "Pitch Control",
            id: "pitch-1",
            exercise: "Practice pitch control",
            status: false
          },
          {
            title: "Vocal Harmony",
            id: "harmony-1",
            exercise: "Study vocal harmony",
            status: false
          }
        ],
        lessonTags: ["music", "choir", "vocal"],
        lessonsImgURL: "/",
        lessonSubject: "Music",
        lessonQwastions: ["How do we breathe properly for singing?", "How do we control pitch?", "What makes good vocal harmony?"]
      },
    ],
  },
  {
    id: 8,
    name: "Languages",
    teacher: "Mr. James White",
    lessonsCount: 3,
    averageExamScore: 91,
    completedLessons: 1,
    lessons: [
      {
        lessonId: "language1",
        lessonTitle: "Spanish Basics",
        lessonDescription: "Introduction to the Spanish language, including vocabulary and grammar.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Vocabulary",
            id: "vocab-1",
            exercise: "Learn Spanish vocabulary",
            status: false
          },
          {
            title: "Grammar",
            id: "grammar-1",
            exercise: "Study Spanish grammar",
            status: false
          },
          {
            title: "Pronunciation",
            id: "pron-1",
            exercise: "Practice pronunciation",
            status: false
          }
        ],
        lessonTags: ["language", "spanish", "vocabulary"],
        lessonsImgURL: "/",
        lessonSubject: "Languages",
        lessonQwastions: ["What are common Spanish words?", "How does Spanish grammar work?", "How do we pronounce Spanish words?"]
      },
      {
        lessonId: "language2",
        lessonTitle: "French for Beginners",
        lessonDescription: "Learning basic French phrases and sentence structures.",
        lessonLongTime: "60 minutes",
        lessonSections: [
          {
            title: "Vocabulary",
            id: "vocab-2",
            exercise: "Learn French vocabulary",
            status: false
          },
          {
            title: "Sentence Structure",
            id: "sentence-2",
            exercise: "Study French sentences",
            status: false
          },
          {
            title: "Basic Conversation",
            id: "conv-2",
            exercise: "Practice conversations",
            status: false
          }
        ],
        lessonTags: ["language", "french", "conversation"],
        lessonsImgURL: "/",
        lessonSubject: "Languages",
        lessonQwastions: ["What are essential French phrases?", "How do we form French sentences?", "How do we have basic French conversations?"]
      },
      {
        lessonId: "language3",
        lessonTitle: "English for ESL Students",
        lessonDescription: "Helping non-native speakers learn English grammar and vocabulary.",
        lessonLongTime: "45 minutes",
        lessonSections: [
          {
            title: "Grammar",
            id: "grammar-3",
            exercise: "Learn English grammar",
            status: false
          },
          {
            title: "Vocabulary",
            id: "vocab-3",
            exercise: "Build vocabulary",
            status: false
          },
          {
            title: "Pronunciation",
            id: "pron-3",
            exercise: "Practice pronunciation",
            status: false
          }
        ],
        lessonTags: ["language", "english", "esl"],
        lessonsImgURL: "/",
        lessonSubject: "Languages",
        lessonQwastions: ["What are basic English grammar rules?", "How do we build English vocabulary?", "How do we improve English pronunciation?"]
      },
    ],
  },
];

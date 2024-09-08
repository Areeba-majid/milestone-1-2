let skillsSection = document.getElementById('skills');
let toggleButton = document.getElementById('toggle-skills');

toggleButton?.addEventListener('click', () => {
    skillsSection?.classList.toggle('hidden');
});

interface Section {
    id: string;
    title: string;
    content: string[];
}

let sections: Section[] = [
    {
        id: 'education',
        title: 'Education',
        content: [
            'Matriculation (Board of Secondary Education)',
            'Intermediate (Board of Intermediate Education)',
            'Bachelor\'s Degree in Computer Science'
        ]
    },
    {
        id: 'skills',
        title: 'Skills',
        content: [
            'HTML/CSS',
            'TypeScript',
            'JavaScript',
            'React'
        ]
    },
    {
        id: 'work-experience',
        title: 'Work Experience',
        content: [
            'Software Engineer, Google (2020-2023)',
            'Lead Teacher GIAIC Program (2023-present)'
        ]
    }
];

sections.forEach((section) => {
    let sectionElement = document.getElementById(section.id);
    if (sectionElement) {  // Check for null
        sectionElement.innerHTML = `
            <h2>${section.title}</h2>
            <ul>
                ${section.content.map((item) => `<li>${item}</li>`).join('')}
            </ul>
        `;
    }
});

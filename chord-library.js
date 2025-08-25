import { chordDefinitions } from './chord-data.js';

class ChordLibrary {
    constructor() {
        this.qualitySelect = document.getElementById('qualitySelect');
        this.libraryContainer = document.getElementById('libraryContainer');
        
        this.notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        this.enharmonicEquivalents = {
            'C#': 'Db', 'Db': 'C#',
            'D#': 'Eb', 'Eb': 'D#',
            'F#': 'Gb', 'Gb': 'F#',
            'G#': 'Ab', 'Ab': 'G#',
            'A#': 'Bb', 'Bb': 'A#'
        };

        this.populateQualities();
        this.setupEventListeners();
        this.qualitySelect.value = 'ALL'; // Set default
        this.renderDiagrams(); // Initial render
    }

    getUniqueQualities() {
        const qualities = new Set();
        Object.keys(chordDefinitions).forEach(fullName => {
            const rootMatch = fullName.match(/^([A-G][#b]?)(.*)$/);
            if (!rootMatch) return;
            qualities.add(rootMatch[2]);
        });
        
        return Array.from(qualities).sort((a, b) => {
            if (a === '') return -1;
            if (b === '') return 1;
            if (a.length < b.length) return -1;
            if (a.length > b.length) return 1;
            return a.localeCompare(b);
        });
    }

    populateQualities() {
        const uniqueQualities = this.getUniqueQualities();
        
        // Add "All Qualities" option
        const allOption = document.createElement('option');
        allOption.value = 'ALL';
        allOption.textContent = 'All Qualities';
        this.qualitySelect.appendChild(allOption);
        
        uniqueQualities.forEach(quality => {
            const option = document.createElement('option');
            option.value = quality;
            option.textContent = quality === '' ? 'Major' : quality;
            this.qualitySelect.appendChild(option);
        });
    }

    setupEventListeners() {
        this.qualitySelect.addEventListener('change', () => this.renderDiagrams());
    }

    renderDiagrams() {
        const selectedQuality = this.qualitySelect.value;
        this.libraryContainer.innerHTML = '';
        const uniqueQualities = this.getUniqueQualities();

        this.notes.forEach(root => {
            const rootNoteGroup = document.createElement('div');
            rootNoteGroup.className = 'root-note-group';

            const flatEquivalent = this.enharmonicEquivalents[root];
            const rootTitleText = flatEquivalent ? `${this.formatChordName(root)} / ${this.formatChordName(flatEquivalent)}` : this.formatChordName(root);

            const rootTitle = document.createElement('h2');
            rootTitle.innerHTML = rootTitleText;
            
            const diagramsWrapper = document.createElement('div');
            diagramsWrapper.className = 'diagrams-wrapper';
            
            let hasDiagram = false;
            
            const qualitiesToRender = (selectedQuality === 'ALL') ? uniqueQualities : [selectedQuality];
            
            qualitiesToRender.forEach(quality => {
                const sharpChordName = `${root}${quality}`;
                if (chordDefinitions[sharpChordName]) {
                    const diagram = this.createChordDiagram(sharpChordName);
                    diagramsWrapper.appendChild(diagram);
                    hasDiagram = true;
                }

                if (flatEquivalent) {
                    const flatChordName = `${flatEquivalent}${quality}`;
                    if (chordDefinitions[flatChordName] && chordDefinitions[flatChordName] !== chordDefinitions[sharpChordName]) {
                        const diagram = this.createChordDiagram(flatChordName);
                        diagramsWrapper.appendChild(diagram);
                        hasDiagram = true;
                    }
                }
            });
            
            if(hasDiagram) {
                 rootNoteGroup.appendChild(rootTitle);
                 rootNoteGroup.appendChild(diagramsWrapper);
                 this.libraryContainer.appendChild(rootNoteGroup);
            }
        });
    }
    
    createChordDiagram(chordName) {
        const container = document.createElement('div');
        container.className = 'chord-diagram';
        
        const title = document.createElement('div');
        title.className = 'chord-diagram-title';
        title.textContent = this.formatChordName(chordName);
        
        const chordDef = chordDefinitions[chordName];
        if (!chordDef) {
            container.innerHTML = `<div class="chord-diagram-title">${this.formatChordName(chordName)}</div><div class="fretboard" style="padding: 10px; font-size: 12px; color: #666;">Definition not found</div>`;
            return container;
        }
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100');
        svg.setAttribute('height', '120');
        svg.setAttribute('viewBox', '0 0 100 120');
        svg.setAttribute('class', 'fretboard');
        
        for (let i = 0; i <= 4; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', '15');
            line.setAttribute('y1', 20 + i * 20);
            line.setAttribute('x2', '85');
            line.setAttribute('y2', 20 + i * 20);
            line.setAttribute('class', 'fret-line');
            svg.appendChild(line);
        }
        
        for (let i = 0; i < 6; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', 15 + i * 14);
            line.setAttribute('y1', '15');
            line.setAttribute('x2', 15 + i * 14);
            line.setAttribute('y2', '100');
            line.setAttribute('class', 'string-line');
            svg.appendChild(line);
        }
        
        chordDef.frets.forEach((fret, string) => {
            const x = 15 + string * 14;
            
            if (fret === 0) {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', x);
                circle.setAttribute('cy', '10');
                circle.setAttribute('r', '4');
                circle.setAttribute('class', 'open-string');
                svg.appendChild(circle);
            } else if (fret === -1) {
                const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line1.setAttribute('x1', x - 3);
                line1.setAttribute('y1', '7');
                line1.setAttribute('x2', x + 3);
                line1.setAttribute('y2', '13');
                line1.setAttribute('class', 'muted-string');
                svg.appendChild(line1);
                
                const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line2.setAttribute('x1', x - 3);
                line2.setAttribute('y1', '13');
                line2.setAttribute('x2', x + 3);
                line2.setAttribute('y2', '7');
                line2.setAttribute('class', 'muted-string');
                svg.appendChild(line2);
            } else {
                const y = 10 + fret * 20;
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', x);
                circle.setAttribute('cy', y);
                circle.setAttribute('r', '6');
                circle.setAttribute('class', 'finger-dot');
                svg.appendChild(circle);
                
                const finger = chordDef.fingers[string];
                if (finger > 0) {
                    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute('x', x);
                    text.setAttribute('y', y);
                    text.textContent = finger;
                    text.setAttribute('class', 'finger-number');
                    svg.appendChild(text);
                }
            }
        });
        
        container.appendChild(title);
        container.appendChild(svg);
        
        return container;
    }
    
    formatChordName(chordName) {
        return chordName.replace(/b/g, '♭').replace(/#/g, '♯');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChordLibrary();
});
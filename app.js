import { chordDefinitions, transposeChord, getRomanNumeral, getIntervals, strummingPatterns, pickingPatterns, chordIntervals } from './chord-data.js';
import { allProgressions } from './progressions.js';
import { scales } from './scales.js';

class ChordProgressionApp {
    constructor() {
        this.currentKey = 'C';
        this.currentProgression = null;
        this.viewModes = ['chords']; // Default view mode
        this.filteredProgressions = allProgressions;
        this.currentStrummingPattern = 'Down-Up';
        this.currentPickingPattern = 'PIMA';
        this.customChords = []; // Array to hold custom added chords
        this.currentView = 'grouped'; // 'grouped' or 'list'
        this.currentSort = 'name';

        // Audio recorder properties
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.audioBlob = null;
        this.audioUrl = null;
        
        // Video recorder properties
        this.videoMediaRecorder = null;
        this.videoChunks = [];
        this.videoBlob = null;
        this.videoUrl = null;
        this.videoStream = null;
        
        // Chord cycling properties
        this.chordCycleTimer = null;
        this.currentChordIndex = 0;
        this.cyclingChords = [];
        
        // Audio playback properties
        this.audioContext = null;
        this.progressionTimer = null;
        this.isPlayingProgression = false;
        this.currentPlaybackChordIndex = 0;
        
        this.initializeElements();
        this.setupEventListeners();
        this.populateCategories();
        this.populateStrummingPatterns();
        this.populatePickingPatterns();
        this.renderProgressions();
        this.initializeFretboardExplorer();
        this.setupCollapsibleSections();
    }
    
    initializeElements() {
        this.keySelect = document.getElementById('keySelect');
        this.transposeKeySelect = document.getElementById('transposeKeySelect');
        this.categorySelect = document.getElementById('categorySelect');
        this.searchInput = document.getElementById('searchInput');
        this.progressionContainer = document.getElementById('progressionContainer');
        this.currentProgressionName = document.getElementById('currentProgressionName');
        this.progressionDisplay = document.getElementById('progressionDisplay');
        this.diagramsContainer = document.getElementById('diagramsContainer');
        this.chordsToggle = document.getElementById('chordsToggle');
        this.romanToggle = document.getElementById('romanToggle');
        this.intervalsToggle = document.getElementById('intervalsToggle');
        this.strummingSelect = document.getElementById('strummingSelect');
        this.pickingSelect = document.getElementById('pickingSelect');
        this.strummingSectionSelect = document.getElementById('strummingSectionSelect');
        this.pickingSectionSelect = document.getElementById('pickingSectionSelect');
        this.chordInput = document.getElementById('chordInput');
        this.customChordsList = document.getElementById('customChordsList');

        // View controls
        this.groupedViewBtn = document.getElementById('groupedViewBtn');
        this.listViewBtn = document.getElementById('listViewBtn');
        this.sortSelect = document.getElementById('sortSelect');

        // Audio recorder elements
        this.recordBtn = document.getElementById('recordBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.playBtn = document.getElementById('playBtn');
        this.saveBtn = document.getElementById('saveBtn');
        this.recordingStatus = document.getElementById('recordingStatus');
        this.audioPlayback = document.getElementById('audioPlayback');

        // Video recorder elements
        this.recordVideoBtn = document.getElementById('recordVideoBtn');
        this.stopVideoBtn = document.getElementById('stopVideoBtn');
        this.playVideoBtn = document.getElementById('playVideoBtn');
        this.saveVideoBtn = document.getElementById('saveVideoBtn');
        this.videoRecordingStatus = document.getElementById('videoRecordingStatus');
        this.videoPreview = document.getElementById('videoPreview');
        this.videoPlayback = document.getElementById('videoPlayback');

        // Tab elements
        this.audioTabBtn = document.getElementById('audioTabBtn');
        this.videoTabBtn = document.getElementById('videoTabBtn');
        this.audioRecording = document.getElementById('audioRecording');
        this.videoRecording = document.getElementById('videoRecording');
        this.cycleSecondsInput = document.getElementById('cycleSeconds');
        
        // Chord cycle control elements
        this.playCycleBtn = document.getElementById('playCycleBtn');
        this.stopCycleBtn = document.getElementById('stopCycleBtn');
        
        // Delete button elements
        this.deleteEditBtn = document.getElementById('deleteEditBtn');
        this.deleteStrummingBtn = document.getElementById('deleteStrummingBtn');
        this.deletePickingBtn = document.getElementById('deletePickingBtn');
        
        // Close button elements
        this.closeProgressionsBtn = document.getElementById('closeProgressionsBtn');
        this.closeChordDiagramsBtn = document.getElementById('closeChordDiagramsBtn');
        this.closeScaleExplorerBtn = document.getElementById('closeScaleExplorerBtn');
        this.closeRecordingBtn = document.getElementById('closeRecordingBtn');
        this.resetSectionsBtn = document.getElementById('resetSectionsBtn');
        
        // Playback elements
        this.playProgressionBtn = document.getElementById('playProgressionBtn');
        this.stopProgressionBtn = document.getElementById('stopProgressionBtn');
        this.playbackTempo = document.getElementById('playbackTempo');
        this.chordDuration = document.getElementById('chordDuration');
        this.playbackStatus = document.getElementById('playbackStatus');
    }
    
    setupCollapsibleSections() {
        document.querySelectorAll('.collapsible').forEach(collapsible => {
            const header = collapsible.querySelector('h2, h3');
            const content = collapsible.querySelector('.collapsible-content');
            if (header && content) {
                header.addEventListener('click', () => {
                    collapsible.classList.toggle('collapsed');
                });
            }
        });
        
        // Initialize drag and drop for sections
        this.initializeDragAndDrop();
    }
    
    initializeDragAndDrop() {
        // Add drag handles and make sections draggable
        const draggableSections = document.querySelectorAll('.progression-details > .collapsible, .fretboard-explorer, .recording-section');
        
        draggableSections.forEach((section, index) => {
            section.draggable = true;
            section.dataset.originalIndex = index;
            
            // Add drag handle
            const header = section.querySelector('h2, h3');
            if (header) {
                header.classList.add('drag-handle');
                header.style.cursor = 'grab';
            }
            
            // Add drag event listeners
            section.addEventListener('dragstart', this.handleDragStart.bind(this));
            section.addEventListener('dragover', this.handleDragOver.bind(this));
            section.addEventListener('drop', this.handleDrop.bind(this));
            section.addEventListener('dragend', this.handleDragEnd.bind(this));
        });
        
        // Also make the main content grid sections draggable
        const mainSections = document.querySelectorAll('.progression-list, .fretboard-explorer, .recording-section');
        mainSections.forEach((section, index) => {
            section.draggable = true;
            section.dataset.originalIndex = index + 100; // Different range to avoid conflicts
            
            const header = section.querySelector('h2');
            if (header) {
                header.classList.add('drag-handle');
                header.style.cursor = 'grab';
            }
            
            section.addEventListener('dragstart', this.handleDragStart.bind(this));
            section.addEventListener('dragover', this.handleDragOver.bind(this));
            section.addEventListener('drop', this.handleDrop.bind(this));
            section.addEventListener('dragend', this.handleDragEnd.bind(this));
        });
    }
    
    handleDragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.outerHTML);
        e.target.classList.add('dragging');
        e.target.style.opacity = '0.5';
    }
    
    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    }
    
    handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        
        const draggedElement = document.querySelector('.dragging');
        if (draggedElement && draggedElement !== e.target) {
            const parent = draggedElement.parentNode;
            
            // Find the actual target element that can accept drops
            let targetElement = e.target;
            while (targetElement && !targetElement.draggable && targetElement.parentNode) {
                targetElement = targetElement.parentNode;
            }
            
            // If we couldn't find a draggable target, use the closest valid container
            if (!targetElement || !targetElement.draggable) {
                targetElement = e.target.closest('.draggable-container, .content-grid, main, .progression-details');
            }
            
            if (targetElement && targetElement !== draggedElement) {
                const targetParent = targetElement.parentNode;
                
                // Only allow dropping in the same container or compatible containers
                if (parent === targetParent || this.isCompatibleContainer(parent, targetParent)) {
                    try {
                        // Check if targetElement is actually a child of targetParent
                        if (targetParent.contains(targetElement)) {
                            const rect = targetElement.getBoundingClientRect();
                            const midpoint = rect.top + rect.height / 2;
                            
                            if (e.clientY < midpoint) {
                                // Insert before the target element
                                targetParent.insertBefore(draggedElement, targetElement);
                            } else {
                                // Insert after the target element
                                if (targetElement.nextSibling) {
                                    targetParent.insertBefore(draggedElement, targetElement.nextSibling);
                                } else {
                                    targetParent.appendChild(draggedElement);
                                }
                            }
                        }
                    } catch (error) {
                        console.warn('Drop operation failed:', error);
                        // Fallback: just append to the parent
                        if (parent === targetParent) {
                            parent.appendChild(draggedElement);
                        }
                    }
                }
            }
        }
        
        return false;
    }
    
    handleDragEnd(e) {
        e.target.classList.remove('dragging');
        e.target.style.opacity = '';
        
        // Reset cursor on headers
        const header = e.target.querySelector('h2, h3');
        if (header) {
            header.style.cursor = 'grab';
        }
    }
    
    isCompatibleContainer(source, target) {
        // Define which containers are compatible for dropping
        const compatibleContainers = [
            ['.progression-details', '.content-grid', 'main'],
            ['.content-grid', 'main'],
            ['main']
        ];
        
        const sourceClass = source.className;
        const targetClass = target.className;
        
        return compatibleContainers.some(group => 
            group.some(cls => sourceClass.includes(cls.replace('.', ''))) &&
            group.some(cls => targetClass.includes(cls.replace('.', '')))
        );
    }

    populateCategories() {
        const categories = [...new Set(allProgressions.map(p => p.category))].sort();
        
        this.categorySelect.innerHTML = '<option value="">All Categories</option>';
        
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            this.categorySelect.appendChild(option);
        });
    }

    populateStrummingPatterns() {
        const selects = [this.strummingSelect, this.strummingSectionSelect];
        selects.forEach(select => {
            if (select) {
                Object.keys(strummingPatterns).forEach(patternKey => {
                    const option = document.createElement('option');
                    option.value = patternKey;
                    option.textContent = strummingPatterns[patternKey].name;
                    select.appendChild(option);
                });
            }
        });
    }

    populatePickingPatterns() {
        const selects = [this.pickingSelect, this.pickingSectionSelect];
        selects.forEach(select => {
            if (select) {
                Object.keys(pickingPatterns).forEach(patternKey => {
                    const option = document.createElement('option');
                    option.value = patternKey;
                    option.textContent = pickingPatterns[patternKey].name;
                    select.appendChild(option);
                });
            }
        });
    }

    initializeFretboardExplorer() {
        this.fretboardKeySelect = document.getElementById('fretboardKeySelect');
        this.fretboardScaleSelect = document.getElementById('fretboardScaleSelect');
        this.fretboardContainer = document.getElementById('fretboardContainer');
        this.startFretInput = document.getElementById('startFret');
        this.endFretInput = document.getElementById('endFret');
        this.populateFretboardControls();
        this.setupFretboardEventListeners();
        this.createScaleInfoSection();
        this.drawFretboard();
    }
    
    createScaleInfoSection() {
        const scaleInfoSection = document.createElement('div');
        scaleInfoSection.className = 'scale-info-section collapsible collapsed';
        scaleInfoSection.innerHTML = `
            <h3>Scale/Chord Information</h3>
            <div class="collapsible-content">
                <div id="scaleInfoContent">
                    <p>Select a scale or chord to see detailed information</p>
                </div>
            </div>
        `;
        
        const fretboardContainer = this.fretboardContainer;
        fretboardContainer.parentNode.insertBefore(scaleInfoSection, fretboardContainer);
        
        // Add click listener for collapsible functionality
        const header = scaleInfoSection.querySelector('h3');
        header.addEventListener('click', () => {
            scaleInfoSection.classList.toggle('collapsed');
        });
    }
    
    populateFretboardControls() {
        this.fretboardScaleSelect.innerHTML = ''; // Clear existing

        const allItems = {
            ...scales,
            ...chordIntervals
        };

        const sortedKeys = Object.keys(allItems).sort((a, b) => allItems[a].name.localeCompare(allItems[b].name));
        
        sortedKeys.forEach(key => {
            const item = allItems[key];
            const option = document.createElement('option');
            option.value = key;
            option.textContent = item.name;
            this.fretboardScaleSelect.appendChild(option);
        });

        this.fretboardScaleSelect.value = 'major';
    }

    setupFretboardEventListeners() {
        this.fretboardKeySelect.addEventListener('change', () => this.drawFretboard());
        this.fretboardScaleSelect.addEventListener('change', () => this.drawFretboard());
        this.startFretInput.addEventListener('change', () => this.drawFretboard());
        this.endFretInput.addEventListener('change', () => this.drawFretboard());
        window.addEventListener('resize', () => this.drawFretboard());
        
        this.cycleSecondsInput.addEventListener('change', () => {
            if (this.chordCycleTimer) {
                // A cycle is active, restart it with the new duration
                this.stopChordCycling();
                this.restartChordCycling();
            }
        });

        // Chord cycle control listeners
        this.playCycleBtn.addEventListener('click', () => {
            if (this.currentProgression) {
                this.startChordCycling(this.currentProgression);
            }
        });
        
        this.stopCycleBtn.addEventListener('click', () => {
            this.stopChordCycling();
        });

        document.getElementById('backToListBtn').addEventListener('click', () => {
            document.body.classList.remove('mobile-details-visible');
        });

        document.getElementById('exportScalesBtn').addEventListener('click', () => this.exportScalesToCSV());
        document.getElementById('importScalesBtn').addEventListener('click', () => {
            document.getElementById('importScalesFile').click();
        });
        document.getElementById('importScalesFile').addEventListener('change', (e) => this.importScalesFromCSV(e));
        
        // Pattern import/export listeners
        document.getElementById('exportStrummingBtn').addEventListener('click', () => this.exportStrummingPatternsToCSV());
        document.getElementById('importStrummingBtn').addEventListener('click', () => {
            document.getElementById('importStrummingFile').click();
        });
        document.getElementById('importStrummingFile').addEventListener('change', (e) => this.importStrummingPatternsFromCSV(e));
        
        document.getElementById('exportPickingBtn').addEventListener('click', () => this.exportPickingPatternsToCSV());
        document.getElementById('importPickingBtn').addEventListener('click', () => {
            document.getElementById('importPickingFile').click();
        });
        document.getElementById('importPickingFile').addEventListener('change', (e) => this.importPickingPatternsFromCSV(e));
        
        // Add missing import chords CSV event listener
        document.getElementById('importChordsBtn').addEventListener('click', () => {
            document.getElementById('importChordsFile').click();
        });
        document.getElementById('importChordsFile').addEventListener('change', (e) => this.importChordsFromCSV(e));
        
        // Delete section event listeners
        this.deleteEditBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent collapsible toggle
            this.deleteSection('chord-editor');
        });
        
        this.deleteStrummingBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent collapsible toggle
            this.deleteSection('strumming-section');
        });
        
        this.deletePickingBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent collapsible toggle
            this.deleteSection('picking-section');
        });
        
        // Close section event listeners
        this.closeProgressionsBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent collapsible toggle
            this.closeSection('progression-list');
        });
        
        this.closeChordDiagramsBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent collapsible toggle
            this.closeSection('chord-diagrams');
        });
        
        this.closeScaleExplorerBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent collapsible toggle
            this.closeSection('fretboard-explorer');
        });
        
        this.closeRecordingBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent collapsible toggle
            this.closeSection('recording-section');
        });
        
        // Reset sections event listener
        this.resetSectionsBtn.addEventListener('click', () => {
            this.resetAllSections();
        });
        
        // Playback event listeners
        this.playProgressionBtn.addEventListener('click', () => {
            this.startProgressionPlayback();
        });
        
        this.stopProgressionBtn.addEventListener('click', () => {
            this.stopProgressionPlayback();
        });
    }

    deleteSection(sectionClass) {
        const section = document.querySelector(`.${sectionClass}`);
        if (section && confirm(`Are you sure you want to delete this section? This action cannot be undone.`)) {
            section.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                section.remove();
            }, 300);
        }
    }
    
    closeSection(sectionClass) {
        const section = document.querySelector(`.${sectionClass}`);
        if (section && confirm(`Are you sure you want to close this section?`)) {
            section.classList.add('section-closed');
            this.showResetButton();
        }
    }
    
    showResetButton() {
        const resetControls = document.querySelector('.reset-controls');
        if (resetControls) {
            resetControls.style.display = 'block';
        }
    }
    
    resetAllSections() {
        // Show all sections by removing the 'section-closed' class
        document.querySelectorAll('.section-closed').forEach(section => {
            section.classList.remove('section-closed');
        });
        
        // Hide the reset button
        const resetControls = document.querySelector('.reset-controls');
        if (resetControls) {
            resetControls.style.display = 'none';
        }
    }

    updateScaleInfoSection() {
        const scaleInfoContent = document.getElementById('scaleInfoContent');
        if (!scaleInfoContent) return;
    
        const key = this.fretboardKeySelect.value;
        const scaleKey = this.fretboardScaleSelect.value;
    
        const allItems = { ...scales, ...chordIntervals };
        const item = allItems[scaleKey];
    
        if (!item) {
            scaleInfoContent.innerHTML = '<p>Information not available for this selection.</p>';
            return;
        }
    
        const notesSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const keyIndex = notesSharp.indexOf(key);
        const noteNames = item.intervals.map(interval => notesSharp[(keyIndex + interval) % 12]);
        
        const intervalDescriptions = {
            0: { name: 'Root', description: 'The fundamental note of the scale/chord.' },
            1: { name: 'Minor Second (b2)', description: 'Adds tension, common in Phrygian mode.' },
            2: { name: 'Major Second (2)', description: 'A whole step above the root.' },
            3: { name: 'Minor Third (b3)', description: 'Defines minor tonality.' },
            4: { name: 'Major Third (3)', description: 'Defines major tonality.' },
            5: { name: 'Perfect Fourth (4)', description: 'A stable interval, can replace the 3rd in sus4 chords.' },
            6: { name: 'Augmented Fourth (#4) / Diminished Fifth (b5)', description: 'The "tritone", a very dissonant and tense interval.' },
            7: { name: 'Perfect Fifth (5)', description: 'Provides stability and power to a chord.' },
            8: { name: 'Minor Sixth (b6)', description: 'Common in minor scales, adds a melancholic color.' },
            9: { name: 'Major Sixth (6)', description: 'Adds a sweet, jazzy color.' },
            10: { name: 'Minor Seventh (b7)', description: 'Creates a dominant or bluesy sound.' },
            11: { name: 'Major Seventh (7)', description: 'A bright, sometimes dissonant, color tone.' },
            13: { name: 'Minor Ninth (b9)', description: 'Adds significant tension, common in altered dominants.' },
            14: { name: 'Major Ninth (9)', description: 'Adds richness and complexity.' },
            15: { name: 'Augmented Ninth (#9)', description: 'A bluesy, dissonant "Hendrix" sound.' },
            17: { name: 'Eleventh (11)', description: 'Often omitted or sharpened, can clash with the 3rd.' },
            18: { name: 'Augmented Eleventh (#11)', description: 'A bright, Lydian sound.' },
            20: { name: 'Minor Thirteenth (b13)', description: 'Adds tension, common in altered dominants.' },
            21: { name: 'Major Thirteenth (13)', description: 'A rich, complex extension, common in jazz.' }
        };
    
        const intervalBreakdownHTML = item.intervals.map((interval, index) => {
            const extendedInterval = interval >= 12 ? interval : -1;
            const simpleInterval = interval % 12;

            const intervalInfo = intervalDescriptions[extendedInterval] || intervalDescriptions[simpleInterval] || { name: `Interval ${interval}`, description: 'Extended or altered tone.' };

            return `
                <div class="scale-property">
                    <h4>${intervalInfo.name} (Note: ${noteNames[index]})</h4>
                    <div class="description">${intervalInfo.description}</div>
                </div>
            `;
        }).join('');
    
        scaleInfoContent.innerHTML = `
            <div class="scale-details">
                <div class="scale-property">
                    <h4>Name</h4>
                    <div class="value">${item.name}</div>
                    <div class="description">The official name of the scale or chord.</div>
                </div>
                <div class="scale-property">
                    <h4>Intervals (semitones)</h4>
                    <div class="value">${item.intervals.join(', ')}</div>
                    <div class="description">The distance in semitones from the root note.</div>
                </div>
            </div>
            <div class="scale-property">
                <h4>Notes in Key of ${key}</h4>
                <div class="note-sequence">
                    ${noteNames.map(note => `<div class="note-item">${note}</div>`).join('')}
                </div>
                <div class="description">The notes of the scale/chord starting from the selected key.</div>
            </div>
            <h4>Interval Breakdown</h4>
            <div class="scale-details">
                ${intervalBreakdownHTML}
            </div>
        `;
    }
    
    drawFretboard() {
        const key = this.fretboardKeySelect.value;
        const scaleKey = this.fretboardScaleSelect.value;
        
        const allItems = { ...scales, ...chordIntervals };
        const item = allItems[scaleKey];

        const notesSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const notesFlat = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
        // EADGBE
        const openStrings = [4, 9, 2, 7, 11, 4]; 
        
        const startFret = parseInt(this.startFretInput.value, 10) || 0;
        const endFret = parseInt(this.endFretInput.value, 10) || 15;
        if (startFret >= endFret) {
            this.fretboardContainer.innerHTML = '<p style="color: red;">Start fret must be less than end fret.</p>';
            return;
        }

        const numFretsToDisplay = endFret - startFret;
        const numStrings = 6;

        const fretboardWidth = this.fretboardContainer.clientWidth;
        const fretboardHeight = 150;
        const fretWidth = fretboardWidth / (numFretsToDisplay + (startFret === 0 ? 1 : 1.5));
        const stringSpacing = fretboardHeight / (numStrings + 1);

        this.fretboardContainer.innerHTML = '';
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', fretboardHeight);
        svg.setAttribute('viewBox', `0 0 ${fretboardWidth} ${fretboardHeight}`);
        svg.classList.add('horizontal-fretboard');
        
        const fretboardStartX = startFret === 0 ? fretWidth : fretWidth / 2;

        // Draw strings
        for (let i = 0; i < numStrings; i++) {
            const y = stringSpacing * (i + 1);
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', fretboardStartX);
            line.setAttribute('y1', y);
            line.setAttribute('x2', fretboardWidth - fretWidth / 2);
            line.setAttribute('y2', y);
            line.setAttribute('class', 'string');
            svg.appendChild(line);
        }

        // Draw frets and fret numbers
        for (let i = 0; i <= numFretsToDisplay; i++) {
            const fretNumber = startFret + i;
            const x = fretboardStartX + fretWidth * i;
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x);
            line.setAttribute('y1', stringSpacing);
            line.setAttribute('x2', x);
            line.setAttribute('y2', fretboardHeight - stringSpacing);
            line.setAttribute('class', fretNumber === 0 && startFret === 0 ? 'nut' : 'fret');
            svg.appendChild(line);

            if (fretNumber > 0) {
                 const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', x - fretWidth / 2);
                text.setAttribute('y', fretboardHeight - 5);
                text.textContent = fretNumber;
                text.setAttribute('class', 'fret-number');
                svg.appendChild(text);
            }
        }
        
         // Draw fret markers (dots)
        for (let i = 0; i <= numFretsToDisplay; i++) {
            const fretNumber = startFret + i;
            if ([3, 5, 7, 9, 15, 17, 19, 21].includes(fretNumber)) {
                const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                marker.setAttribute('cx', fretboardStartX + fretWidth * i - fretWidth / 2);
                marker.setAttribute('cy', fretboardHeight / 2);
                marker.setAttribute('r', '4');
                marker.setAttribute('class', 'fret-marker');
                svg.appendChild(marker);
            }
            if ([12, 24].includes(fretNumber)) {
                 const marker1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                 marker1.setAttribute('cx', fretboardStartX + fretWidth * i - fretWidth / 2);
                 marker1.setAttribute('cy', fretboardHeight / 2 - stringSpacing);
                 marker1.setAttribute('r', '4');
                 marker1.setAttribute('class', 'fret-marker');
                 svg.appendChild(marker1);
                 const marker2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                 marker2.setAttribute('cx', fretboardStartX + fretWidth * i - fretWidth / 2);
                 marker2.setAttribute('cy', fretboardHeight / 2 + stringSpacing);
                 marker2.setAttribute('r', '4');
                 marker2.setAttribute('class', 'fret-marker');
                 svg.appendChild(marker2);
            }
        }


        // Calculate scale notes
        const keyIndex = notesSharp.indexOf(key);
        const scaleNoteIndices = item.intervals.map(interval => (keyIndex + interval) % 12);
        
        const intervalNames = ['R', 'b2', '2', 'b3', '3', '4', '#4/b5', '5', 'b6', '6', 'b7', '7', 'R', 'b9', '9', 'b10', '#9', '11', '#11', '12', 'b13', '13'];
        const intervalColors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6', '#1abc9c'];
        const scaleIntervalNames = item.intervals.map(i => intervalNames[i]);
        const noteColorMap = {};
        scaleIntervalNames.forEach((name, i) => {
             const baseIntervalName = name.replace(/[b#]/, '').replace(/\d+/g, (match) => {
                const num = parseInt(match);
                return (num > 7 ? num - 7 : num).toString();
            });
            const rootRelativeInterval = ['R','2','3','4','5','6','7'].indexOf(baseIntervalName);
            noteColorMap[name] = intervalColors[rootRelativeInterval] || '#7f8c8d';
        });

        // Draw notes
        for (let string = 0; string < numStrings; string++) {
            for (let fret = startFret; fret <= endFret; fret++) {
                const noteIndex = (openStrings[string] + fret) % 12;
                const scaleNoteIndex = scaleNoteIndices.indexOf(noteIndex);

                if (scaleNoteIndex !== -1) {
                    const intervalName = scaleIntervalNames[scaleNoteIndex];
                    const displayedFret = fret - startFret;
                    
                    let cx;
                    if (fret === 0) {
                        cx = fretboardStartX - (fretWidth / 2);
                    } else {
                        cx = fretboardStartX + fretWidth * (displayedFret - 1) + fretWidth / 2;
                    }
                    
                    const cy = stringSpacing * (numStrings - string);
                    
                    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    dot.setAttribute('cx', cx);
                    dot.setAttribute('cy', cy);
                    dot.setAttribute('r', stringSpacing / 2.5);
                    dot.setAttribute('fill', noteColorMap[intervalName]);
                    dot.setAttribute('class', 'note-dot');
                    
                    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute('x', cx);
                    text.setAttribute('y', cy + 1); // slight offset for centering
                    text.textContent = intervalName;
                    text.setAttribute('class', 'note-text');

                    svg.appendChild(dot);
                    svg.appendChild(text);
                }
            }
        }

        this.fretboardContainer.appendChild(svg);
        
        // Update scale info section after drawing fretboard
        this.updateScaleInfoSection();
    }
    
    setupEventListeners() {
        this.keySelect.addEventListener('change', (e) => {
            this.currentKey = e.target.value;
            this.transposeKeySelect.value = this.currentKey; // Sync transpose selector
            this.updateCurrentProgression();
        });
        
        // Add transpose key change listener
        this.transposeKeySelect.addEventListener('change', (e) => {
            this.currentKey = e.target.value;
            this.keySelect.value = this.currentKey; // Sync main key selector
            this.updateCurrentProgression();
            
            // If chord cycling is active, restart it with the new key
            if (this.chordCycleTimer && this.currentProgression) {
                this.stopChordCycling();
                this.startChordCycling(this.currentProgression);
            }
        });
        
        this.categorySelect.addEventListener('change', (e) => {
            this.filterProgressions();
        });
        
        this.searchInput.addEventListener('input', (e) => {
            this.filterProgressions();
        });
        
        this.chordsToggle.addEventListener('click', (e) => this.setViewMode(e, 'chords'));
        this.romanToggle.addEventListener('click', (e) => this.setViewMode(e, 'roman'));
        this.intervalsToggle.addEventListener('click', (e) => this.setViewMode(e, 'intervals'));
        
        this.strummingSelect.addEventListener('change', (e) => {
            this.currentStrummingPattern = e.target.value;
            if (this.strummingSectionSelect) {
                this.strummingSectionSelect.value = e.target.value;
            }
            this.updateStrummingDisplay();
        });

        this.pickingSelect.addEventListener('change', (e) => {
            this.currentPickingPattern = e.target.value;
            if (this.pickingSectionSelect) {
                this.pickingSectionSelect.value = e.target.value;
            }
            this.updatePickingDisplay();
        });
        
        // Section dropdown listeners
        if (this.strummingSectionSelect) {
            this.strummingSectionSelect.addEventListener('change', (e) => {
                this.currentStrummingPattern = e.target.value;
                this.strummingSelect.value = e.target.value;
                this.updateStrummingDisplay();
            });
        }
        
        if (this.pickingSectionSelect) {
            this.pickingSectionSelect.addEventListener('change', (e) => {
                this.currentPickingPattern = e.target.value;
                this.pickingSelect.value = e.target.value;
                this.updatePickingDisplay();
            });
        }

        // View control listeners
        this.groupedViewBtn.addEventListener('click', () => this.setView('grouped'));
        this.listViewBtn.addEventListener('click', () => this.setView('list'));
        this.sortSelect.addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.renderProgressions();
        });
        
        // Chord editing event listeners
        document.getElementById('addChordBtn').addEventListener('click', () => this.addChord());
        document.getElementById('clearProgressionBtn').addEventListener('click', () => this.clearCustomChords());
        document.getElementById('exportProgressionBtn').addEventListener('click', () => this.exportCurrentProgression());
        document.getElementById('exportAllChordsBtn').addEventListener('click', () => this.exportAllChordsToCSV());
        
        document.getElementById('importProgressionBtn').addEventListener('click', () => {
            document.getElementById('importProgressionFile').click();
        });
        document.getElementById('importProgressionFile').addEventListener('change', (e) => this.importProgressionFromCSV(e));

        this.chordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addChord();
            }
        });
        
        // CSV export/import functionality
        document.getElementById('exportBtn').addEventListener('click', () => this.exportToCSV());
        document.getElementById('importBtn').addEventListener('click', () => {
            document.getElementById('importFile').click();
        });
        document.getElementById('importFile').addEventListener('change', (e) => this.importFromCSV(e));
    
        // Recording tab listeners
        this.audioTabBtn.addEventListener('click', () => this.switchRecordingTab('audio'));
        this.videoTabBtn.addEventListener('click', () => this.switchRecordingTab('video'));

        // Audio recorder event listeners
        this.recordBtn.addEventListener('click', () => this.startRecording());
        this.stopBtn.addEventListener('click', () => this.stopRecording());
        this.playBtn.addEventListener('click', () => this.playRecording());
        this.saveBtn.addEventListener('click', () => this.saveRecording());

        // Video recorder event listeners
        this.recordVideoBtn.addEventListener('click', () => this.startVideoRecording());
        this.stopVideoBtn.addEventListener('click', () => this.stopVideoRecording());
        this.playVideoBtn.addEventListener('click', () => this.playVideoRecording());
        this.saveVideoBtn.addEventListener('click', () => this.saveVideoRecording());
    }
    
    addChord() {
        const chordName = this.chordInput.value.trim();
        if (!chordName) return;
        
        // Validate chord name (more permissive validation)
        const chordRegex = /^[A-G][#b]?([a-zA-Z0-9#b()]+)?(\/[A-G][#b]?)?$/;
        if (!chordRegex.test(chordName)) {
            alert('Please enter a valid chord name (e.g., Am, F7, Gsus4, C/G, G7(b9))');
            return;
        }
        
        this.customChords.push(chordName);
        this.chordInput.value = '';
        this.renderCustomChords();
        this.updateCurrentProgression();
    }
    
    removeChord(index) {
        this.customChords.splice(index, 1);
        this.renderCustomChords();
        this.updateCurrentProgression();
    }
    
    clearCustomChords() {
        this.customChords = [];
        this.renderCustomChords();
        this.updateCurrentProgression();
    }
    
    renderCustomChords() {
        this.customChordsList.innerHTML = '';
        
        this.customChords.forEach((chord, index) => {
            const chordElement = document.createElement('div');
            chordElement.className = 'custom-chord';
            chordElement.innerHTML = `
                <span class="chord-text">${chord}</span>
                <button class="remove-chord" onclick="app.removeChord(${index})">×</button>
            `;
            this.customChordsList.appendChild(chordElement);
        });
    }
    
    exportCurrentProgression() {
        if (!this.currentProgression && this.customChords.length === 0) {
            alert('No progression selected or created');
            return;
        }
        
        let chords, name, category, description;
        
        if (this.customChords.length > 0) {
            // Export custom progression
            chords = this.customChords;
            name = 'Custom Progression';
            category = 'Custom';
            description = 'User created progression';
        } else {
            // Export current progression
            chords = this.currentProgression.chords.map(chord => 
                transposeChord(chord, 'C', this.currentKey)
            );
            name = this.currentProgression.name + ` (${this.currentKey})`;
            category = this.currentProgression.category;
            description = this.currentProgression.description;
        }
        
        const csvContent = [
            ['Name', 'Chords', 'Category', 'Description'],
            [name, chords.join('|'), category, description]
        ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    importProgressionFromCSV(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const csv = e.target.result;
                const lines = csv.split('\n');
                if (lines.length < 2) {
                    throw new Error('CSV file must have at least a header and one data row.');
                }
                const [name, chordsStr] = lines[1].split(',').map(field => 
                    field.replace(/^"|"$/g, '')
                );

                if (!chordsStr) {
                    throw new Error('Could not find a "Chords" column in the CSV.');
                }

                this.customChords = chordsStr.split('|');
                this.renderCustomChords();
                this.updateCurrentProgression();

                this.currentProgression = { // Set a temporary progression object
                    name: name || 'Imported Progression',
                    chords: this.customChords,
                    category: 'Imported',
                    description: 'Progression from CSV'
                };
                this.currentProgressionName.textContent = this.currentProgression.name;

                alert('Progression imported successfully!');

            } catch (error) {
                alert('Error importing progression CSV: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset file input
    }
    
    exportAllChordsToCSV() {
        const csvContent = [
            ['Chord Name', 'Frets', 'Fingers'],
            ...Object.entries(chordDefinitions).map(([chordName, def]) => [
                chordName,
                def.frets.join('|'),
                def.fingers.join('|')
            ])
        ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'all_chords.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    exportToCSV() {
        const csvContent = [
            ['Name', 'Chords', 'Category', 'Description'],
            ...allProgressions.map(prog => [
                prog.name,
                prog.chords.join('|'),
                prog.category,
                prog.description
            ])
        ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chord_progressions.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    importFromCSV(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const csv = e.target.result;
                const lines = csv.split('\n').slice(1); // Skip header
                const importedProgressions = [];
                
                lines.forEach(line => {
                    if (line.trim()) {
                        const [name, chords, category, description] = line.split(',').map(field => 
                            field.replace(/^"|"$/g, '').trim()
                        );
                        
                        if (name && chords && category) {
                            importedProgressions.push({
                                name,
                                chords: chords.split('|'),
                                category,
                                description: description || ''
                            });
                        }
                    }
                });
                
                // Merge with existing progressions
                allProgressions.push(...importedProgressions);
                this.filteredProgressions = allProgressions;
                this.populateCategories();
                this.renderProgressions();
                
                alert(`Imported ${importedProgressions.length} progressions successfully!`);
            } catch (error) {
                alert('Error importing CSV: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset file input
    }
    
    exportScalesToCSV() {
        const csvContent = [
            ['Name', 'Intervals'],
            ...Object.entries(scales).map(([key, scale]) => [
                scale.name,
                scale.intervals.join('|')
            ])
        ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'scales.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    importScalesFromCSV(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const csv = e.target.result;
                const lines = csv.split('\n').slice(1); // Skip header
                let importedCount = 0;

                lines.forEach(line => {
                    if (line.trim()) {
                        const [name, intervalsStr] = line.split(',').map(field =>
                            field.replace(/^"|"$/g, '').trim()
                        );

                        if (name && intervalsStr) {
                            const scaleKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');
                            if (!scales[scaleKey]) {
                                scales[scaleKey] = {
                                    name: name,
                                    intervals: intervalsStr.split('|').map(Number)
                                };
                                importedCount++;
                            }
                        }
                    }
                });

                this.populateFretboardControls();
                alert(`Imported ${importedCount} new scales successfully!`);
            } catch (error) {
                alert('Error importing scales CSV: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset file input
    }
    
    importChordsFromCSV(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const csv = e.target.result;
                const lines = csv.split('\n');
                if (lines.length < 2) {
                    throw new Error('CSV file must have at least a header and one data row.');
                }

                let importedCount = 0;
                // Skip header row
                for (let i = 1; i < lines.length; i++) {
                    const line = lines[i].trim();
                    if (!line) continue;

                    const [chordName, fretsStr, fingersStr] = line.split(',').map(field => 
                        field.replace(/^\"|\"$/g, '').trim()
                    );

                    if (!chordName || !fretsStr || !fingersStr) {
                        console.warn(`Skipping invalid line ${i + 1}: missing required fields`);
                        continue;
                    }

                    try {
                        // Parse frets and fingers arrays
                        const frets = fretsStr.split('|').map(f => {
                            const num = parseInt(f.trim(), 10);
                            return isNaN(num) ? -1 : num; // Default to -1 for invalid numbers
                        });

                        const fingers = fingersStr.split('|').map(f => {
                            const num = parseInt(f.trim(), 10);
                            return isNaN(num) ? 0 : num; // Default to 0 for invalid numbers
                        });

                        // Validate arrays have 6 elements (for 6 strings)
                        if (frets.length !== 6 || fingers.length !== 6) {
                            console.warn(`Skipping chord ${chordName}: frets and fingers must have 6 values each`);
                            continue;
                        }

                        // Add or update chord definition
                        chordDefinitions[chordName] = { frets, fingers };
                        importedCount++;

                    } catch (parseError) {
                        console.warn(`Skipping chord ${chordName}: parsing error - ${parseError.message}`);
                    }
                }

                alert(`Imported ${importedCount} chords successfully!`);
                
                // Re-render diagrams if we have a current progression to refresh the display
                if (this.currentProgression || this.customChords.length > 0) {
                    this.renderChordDiagrams();
                }

            } catch (error) {
                alert('Error importing chords CSV: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset file input
    }
    
    exportStrummingPatternsToCSV() {
        const csvContent = [
            ['Pattern Key', 'Name', 'Pattern', 'Description', 'Tempo'],
            ...Object.entries(strummingPatterns).map(([key, pattern]) => [
                key,
                pattern.name,
                pattern.pattern,
                pattern.description,
                pattern.tempo
            ])
        ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'strumming_patterns.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    importStrummingPatternsFromCSV(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const csv = e.target.result;
                const lines = csv.split('\n').slice(1); // Skip header
                let importedCount = 0;

                lines.forEach(line => {
                    if (line.trim()) {
                        const [key, name, pattern, description, tempo] = line.split(',').map(field =>
                            field.replace(/^"|"$/g, '').trim()
                        );

                        if (key && name && pattern && description && tempo) {
                            strummingPatterns[key] = {
                                name: name,
                                pattern: pattern,
                                description: description,
                                tempo: tempo
                            };
                            importedCount++;
                        }
                    }
                });

                // Repopulate the strumming patterns dropdown
                this.strummingSelect.innerHTML = '<option value="">Select Strumming Pattern</option>';
                this.populateStrummingPatterns();
                
                alert(`Imported ${importedCount} strumming patterns successfully!`);
            } catch (error) {
                alert('Error importing strumming patterns CSV: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset file input
    }

    exportPickingPatternsToCSV() {
        const csvContent = [
            ['Pattern Key', 'Name', 'Description'],
            ...Object.entries(pickingPatterns).map(([key, pattern]) => [
                key,
                pattern.name,
                pattern.description
            ])
        ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'picking_patterns.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    importPickingPatternsFromCSV(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const csv = e.target.result;
                const lines = csv.split('\n').slice(1); // Skip header
                let importedCount = 0;

                lines.forEach(line => {
                    if (line.trim()) {
                        const [key, name, description] = line.split(',').map(field =>
                            field.replace(/^"|"$/g, '').trim()
                        );

                        if (key && name && description) {
                            pickingPatterns[key] = {
                                name: name,
                                description: description
                            };
                            importedCount++;
                        }
                    }
                });

                // Repopulate the picking patterns dropdown
                this.pickingSelect.innerHTML = '<option value="">Select Picking Pattern</option>';
                this.populatePickingPatterns();
                
                alert(`Imported ${importedCount} picking patterns successfully!`);
            } catch (error) {
                alert('Error importing picking patterns CSV: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset file input
    }
    
    filterProgressions() {
        const selectedCategory = this.categorySelect.value;
        const searchTerm = this.searchInput.value.toLowerCase();
        
        this.filteredProgressions = allProgressions.filter(progression => {
            const matchesCategory = !selectedCategory || progression.category === selectedCategory;
            const matchesSearch = !searchTerm || 
                progression.name.toLowerCase().includes(searchTerm) ||
                progression.chords.some(chord => chord.toLowerCase().includes(searchTerm)) ||
                progression.description.toLowerCase().includes(searchTerm);
            
            return matchesCategory && matchesSearch;
        });
        
        this.renderProgressions();
    }
    
    setViewMode(event, mode) {
        if (event.ctrlKey || event.metaKey) {
            // Toggle mode
            const index = this.viewModes.indexOf(mode);
            if (index > -1) {
                if(this.viewModes.length > 1) this.viewModes.splice(index, 1); // Prevent removing the last one
            } else {
                this.viewModes.push(mode);
            }
        } else {
            // Single select mode
            this.viewModes = [mode];
        }
        
        // Update toggle buttons
        document.querySelectorAll('.view-toggles button').forEach(btn => btn.classList.remove('active'));
        this.viewModes.forEach(vm => {
            document.getElementById(vm + 'Toggle').classList.add('active');
        });
        
        this.renderProgressionDisplay();
    }

    setView(viewType) {
        this.currentView = viewType;
        
        // Update button states
        this.groupedViewBtn.classList.toggle('active', viewType === 'grouped');
        this.listViewBtn.classList.toggle('active', viewType === 'list');
        
        this.renderProgressions();
    }
    
    renderProgressions() {
        this.progressionContainer.innerHTML = '';
        
        if (this.currentView === 'grouped') {
            this.renderGroupedProgressions();
        } else {
            this.renderListProgressions();
        }
    }
    
    renderGroupedProgressions() {
        // Group progressions by category
        const grouped = {};
        this.filteredProgressions.forEach(progression => {
            if (!grouped[progression.category]) {
                grouped[progression.category] = [];
            }
            grouped[progression.category].push(progression);
        });
        
        // Sort categories and progressions within categories
        const sortedCategories = Object.keys(grouped).sort();
        
        sortedCategories.forEach(category => {
            const progressions = grouped[category];
            progressions.sort((a, b) => {
                if (this.currentSort === 'name') {
                    return a.name.localeCompare(b.name);
                } else {
                    return a.category.localeCompare(b.category);
                }
            });
            
            const categoryGroup = document.createElement('div');
            categoryGroup.className = 'progression-category-group';
            
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.innerHTML = `
                <h3>${category}</h3>
                <div>
                    <span class="category-count">${progressions.length}</span>
                    <span class="category-toggle">▶</span>
                </div>
            `;
            
            const categoryItems = document.createElement('div');
            categoryItems.className = 'category-items'; // Start collapsed by default
            
            progressions.forEach(progression => {
                const item = this.createProgressionItem(progression);
                categoryItems.appendChild(item);
            });
            
            categoryHeader.addEventListener('click', () => {
                const isExpanded = categoryItems.classList.contains('expanded');
                if (isExpanded) {
                    categoryItems.classList.remove('expanded');
                    categoryItems.classList.add('collapsed');
                    const toggle = categoryHeader.querySelector('.category-toggle');
                    toggle.textContent = '▶';
                } else {
                    categoryItems.classList.remove('collapsed');
                    categoryItems.classList.add('expanded');
                    const toggle = categoryHeader.querySelector('.category-toggle');
                    toggle.textContent = '▼';
                }
            });
            
            categoryGroup.appendChild(categoryHeader);
            categoryGroup.appendChild(categoryItems);
            this.progressionContainer.appendChild(categoryGroup);
        });
    }
    
    renderListProgressions() {
        // Sort progressions
        const sortedProgressions = [...this.filteredProgressions].sort((a, b) => {
            if (this.currentSort === 'name') {
                return a.name.localeCompare(b.name);
            } else {
                return a.category.localeCompare(b.category);
            }
        });
        
        sortedProgressions.forEach(progression => {
            const item = this.createProgressionItem(progression);
            this.progressionContainer.appendChild(item);
        });
    }
    
    createProgressionItem(progression) {
        const item = document.createElement('div');
        item.className = 'progression-item';
        item.innerHTML = `
            <div class="name">${progression.name}</div>
            <div class="category">${progression.category}</div>
        `;
        
        item.addEventListener('click', () => {
            document.querySelectorAll('.progression-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            this.selectProgression(progression);
        });
        
        return item;
    }

    switchRecordingTab(tab) {
        // Update tab buttons
        this.audioTabBtn.classList.toggle('active', tab === 'audio');
        this.videoTabBtn.classList.toggle('active', tab === 'video');
        
        // Update tab content
        this.audioRecording.classList.toggle('active', tab === 'audio');
        this.videoRecording.classList.toggle('active', tab === 'video');
        
        // Stop any ongoing recordings when switching tabs
        if (tab === 'video' && this.mediaRecorder && this.mediaRecorder.state === 'recording') {
            this.stopRecording();
        } else if (tab === 'audio' && this.videoMediaRecorder && this.videoMediaRecorder.state === 'recording') {
            this.stopVideoRecording();
        }
    }

    async startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);

            this.mediaRecorder.ondataavailable = event => {
                this.audioChunks.push(event.data);
            };

            this.mediaRecorder.onstop = () => {
                this.audioBlob = new Blob(this.audioChunks, { type: 'audio/mp3' }); // Saving as mp3, browser may use another codec
                this.audioUrl = URL.createObjectURL(this.audioBlob);
                this.audioPlayback.src = this.audioUrl;
                this.audioChunks = [];
                
                // Update UI
                this.recordBtn.disabled = false;
                this.stopBtn.disabled = true;
                this.playBtn.disabled = false;
                this.saveBtn.disabled = false;
                this.recordingStatus.textContent = 'Recording finished. Ready to play or save.';
                this.audioPlayback.style.display = 'block';
            };
            
            this.audioChunks = [];
            this.mediaRecorder.start();

            // Update UI
            this.recordBtn.disabled = true;
            this.stopBtn.disabled = false;
            this.playBtn.disabled = true;
            this.saveBtn.disabled = true;
            this.recordingStatus.textContent = 'Recording...';
            this.audioPlayback.style.display = 'none';

        } catch (error) {
            console.error('Error accessing microphone:', error);
            this.recordingStatus.textContent = 'Error: Could not access microphone. Please grant permission.';
        }
    }

    stopRecording() {
        if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
            this.mediaRecorder.stop();
        }
    }

    playRecording() {
        if (this.audioPlayback) {
            this.audioPlayback.play();
        }
    }

    saveRecording() {
        if (this.audioUrl) {
            let filename = 'recording.mp3';
            let progName = 'Custom Progression';
            let progCategory = 'Custom';
            let chordsForFile = this.customChords;

            if (this.currentProgression) {
                 progName = this.currentProgression.name;
                 progCategory = this.currentProgression.category;
            }

            if (chordsForFile.length > 0) {
                const key = this.currentKey;
                
                // The chords in customChords are always treated as being in the key of C,
                // so they need to be transposed to the currently selected key.
                const transposedChords = chordsForFile.map(chord => transposeChord(chord, 'C', this.currentKey));
                const romanNumerals = transposedChords.map(c => getRomanNumeral(c, key));

                const filenameParts = [
                    progName,
                    progCategory,
                    romanNumerals.join('_'),
                    key,
                    transposedChords.join('_')
                ];

                filename = filenameParts
                    .map(part => part.toString().replace(/[^a-zA-Z0-9_]+/g, ' ').trim()) // Sanitize and clean up
                    .join(' - ') + '.mp3';
            }

            const a = document.createElement('a');
            a.href = this.audioUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }

    async startVideoRecording() {
        try {
            this.videoStream = await navigator.mediaDevices.getUserMedia({ 
                video: true, 
                audio: true 
            });
            
            this.videoPreview.srcObject = this.videoStream;
            this.videoPreview.style.display = 'block';
            
            this.videoMediaRecorder = new MediaRecorder(this.videoStream, {
                mimeType: 'video/webm' // Browser will handle conversion
            });

            this.videoMediaRecorder.ondataavailable = event => {
                this.videoChunks.push(event.data);
            };

            this.videoMediaRecorder.onstop = () => {
                this.videoBlob = new Blob(this.videoChunks, { type: 'video/mp4' });
                this.videoUrl = URL.createObjectURL(this.videoBlob);
                this.videoPlayback.src = this.videoUrl;
                this.videoChunks = [];
                
                // Stop the video stream
                this.videoStream.getTracks().forEach(track => track.stop());
                this.videoPreview.style.display = 'none';
                
                // Update UI
                this.recordVideoBtn.disabled = false;
                this.stopVideoBtn.disabled = true;
                this.playVideoBtn.disabled = false;
                this.saveVideoBtn.disabled = false;
                this.videoRecordingStatus.textContent = 'Video recording finished. Ready to play or save.';
                this.videoPlayback.style.display = 'block';
            };
            
            this.videoChunks = [];
            this.videoMediaRecorder.start();

            // Update UI
            this.recordVideoBtn.disabled = true;
            this.stopVideoBtn.disabled = false;
            this.playVideoBtn.disabled = true;
            this.saveVideoBtn.disabled = true;
            this.videoRecordingStatus.textContent = 'Recording video...';
            this.videoPlayback.style.display = 'none';

        } catch (error) {
            console.error('Error accessing camera and microphone:', error);
            this.videoRecordingStatus.textContent = 'Error: Could not access camera/microphone. Please grant permission.';
        }
    }

    stopVideoRecording() {
        if (this.videoMediaRecorder && this.videoMediaRecorder.state === 'recording') {
            this.videoMediaRecorder.stop();
        }
    }

    playVideoRecording() {
        if (this.videoPlayback) {
            this.videoPlayback.play();
        }
    }

    saveVideoRecording() {
        if (this.videoUrl) {
            let filename = 'video_recording.mp4';
            let progName = 'Custom Progression';
            let progCategory = 'Custom';
            let chordsForFile = this.customChords;

            if (this.currentProgression) {
                progName = this.currentProgression.name;
                progCategory = this.currentProgression.category;
                if (this.customChords.length === 0) {
                    chordsForFile = this.currentProgression.chords;
                }
            }

            if (chordsForFile.length > 0) {
                const key = this.currentKey;
                const transposedChords = this.customChords.length > 0 ? 
                    chordsForFile.map(chord => transposeChord(chord, 'C', this.currentKey)) :
                    chordsForFile.map(chord => transposeChord(chord, 'C', this.currentKey));
                const romanNumerals = transposedChords.map(c => getRomanNumeral(c, key));

                const filenameParts = [
                    progName,
                    progCategory,
                    romanNumerals.join('_'),
                    key,
                    transposedChords.join('_')
                ];

                filename = filenameParts
                    .map(part => part.toString().replace(/[^a-zA-Z0-9_\-\.]+/g, ' ').trim()) // Sanitize and clean up
                    .join(' - ') + '.mp4';
            } else {
                // If no chords available, use basic info
                filename = `${progName} - ${progCategory}.mp4`
                    .replace(/[^a-zA-Z0-9_\-\.]+/g, ' ')
                    .trim();
            }

            const a = document.createElement('a');
            a.href = this.videoUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    
    selectProgression(progression) {
        // Stop any existing chord cycling
        this.stopChordCycling();
        
        this.currentProgression = progression;
        this.currentProgressionName.textContent = progression.name;
        this.customChords = [...progression.chords]; // Copy chords to custom list
        
        // Sync transpose selector with current key
        this.transposeKeySelect.value = this.currentKey;
        
        this.renderCustomChords();
        this.updateCurrentProgression();
        
        // Switch to details view on mobile
        document.body.classList.add('mobile-details-visible');
        
        // Show play button for chord cycling
        this.playCycleBtn.style.display = 'inline-block';
    }
    
    startChordCycling(progression) {
        // Get transposed chords for current key
        const transposedChords = progression.chords.map(chord => 
            transposeChord(chord, 'C', this.currentKey)
        );
        
        this.cyclingChords = transposedChords;
        this.currentChordIndex = 0;
        
        // Show cycling indicator
        this.showChordCyclingIndicator();
        
        // Show first chord immediately
        this.displayCurrentCyclingChord();
        
        const cycleDurationSeconds = parseInt(this.cycleSecondsInput.value, 10) || 30;
        const cycleDurationMs = Math.max(1000, cycleDurationSeconds * 1000);

        // Start timer for cycling
        this.chordCycleTimer = setInterval(() => {
            this.currentChordIndex = (this.currentChordIndex + 1) % this.cyclingChords.length;
            this.displayCurrentCyclingChord();
        }, cycleDurationMs);
        
        // Update button visibility
        this.playCycleBtn.style.display = 'none';
        this.stopCycleBtn.style.display = 'inline-block';
    }
    
    stopChordCycling() {
        if (this.chordCycleTimer) {
            clearInterval(this.chordCycleTimer);
            this.chordCycleTimer = null;
        }
        this.hideChordCyclingIndicator();
        
        // Update button visibility
        this.playCycleBtn.style.display = 'inline-block';
        this.stopCycleBtn.style.display = 'none';
    }
    
    restartChordCycling() {
        if (this.cyclingChords.length === 0) return;

        // Stop existing timer
        if (this.chordCycleTimer) {
            clearInterval(this.chordCycleTimer);
        }
        
        const cycleDurationSeconds = parseInt(this.cycleSecondsInput.value, 10) || 30;
        const cycleDurationMs = Math.max(1000, cycleDurationSeconds * 1000);

        // Show indicator and update text for the current chord
        this.showChordCyclingIndicator();
        this.displayCurrentCyclingChord(); 

        this.chordCycleTimer = setInterval(() => {
            this.currentChordIndex = (this.currentChordIndex + 1) % this.cyclingChords.length;
            this.displayCurrentCyclingChord();
        }, cycleDurationMs);
    }

    displayCurrentCyclingChord() {
        if (this.cyclingChords.length === 0) return;
        
        const currentChord = this.cyclingChords[this.currentChordIndex];
        
        // Update scale explorer to show current chord
        const chordIntervalData = this.getChordIntervals(currentChord);
        if (chordIntervalData) {
            // Add chord to scale explorer dropdown if not present
            this.addChordToScaleExplorer(currentChord, chordIntervalData);
            
            // Set scale explorer to show this chord
            this.fretboardScaleSelect.value = currentChord.toLowerCase().replace(/[^a-z0-9]/g, '');
            this.drawFretboard();
            
            // Update cycling indicator
            this.updateChordCyclingIndicator(currentChord, this.currentChordIndex + 1, this.cyclingChords.length);
        }
    }
    
    getChordIntervals(chordName) {
        const rootMatch = chordName.match(/^([A-G][#b]?)(.*)$/);
        if (!rootMatch) return null;
        
        const quality = rootMatch[2];
        return chordIntervals[quality] || chordIntervals[''];
    }
    
    addChordToScaleExplorer(chordName, intervalData) {
        const chordKey = chordName.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        // Check if chord already exists in scales or chordIntervals
        const allItems = { ...scales, ...chordIntervals };
        if (!allItems[chordKey]) {
            // Add to chordIntervals
            chordIntervals[chordKey] = {
                name: chordName,
                intervals: intervalData.intervals
            };
            
            // Update scale explorer dropdown
            this.populateFretboardControls();
        }
    }
    
    showChordCyclingIndicator() {
        let indicator = document.querySelector('.chord-cycling-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'chord-cycling-indicator';
            const fretboardContainer = document.getElementById('fretboardContainer');
            fretboardContainer.parentNode.insertBefore(indicator, fretboardContainer);
        }
        indicator.classList.add('active');
    }
    
    hideChordCyclingIndicator() {
        const indicator = document.querySelector('.chord-cycling-indicator');
        if (indicator) {
            indicator.classList.remove('active');
        }
    }
    
    updateChordCyclingIndicator(currentChord, currentIndex, totalChords) {
        const indicator = document.querySelector('.chord-cycling-indicator');
        if (indicator) {
            const cycleDurationSeconds = parseInt(this.cycleSecondsInput.value, 10) || 30;
            indicator.textContent = `Cycling chord ${currentIndex}/${totalChords}: ${currentChord} (changes every ${cycleDurationSeconds} seconds)`;
        }
    }
    
    // Audio playback methods
    async startProgressionPlayback() {
        // Use custom chords if available, otherwise use current progression
        const chordsToPlay = this.customChords.length > 0 ? this.customChords : 
            (this.currentProgression ? this.currentProgression.chords : []);
        
        if (chordsToPlay.length === 0) {
            this.playbackStatus.textContent = 'No progression selected';
            return;
        }
        
        // Initialize audio context if needed
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        if (this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
        }
        
        // Always transpose chords to the current key
        const transposedChords = chordsToPlay.map(chord => 
            transposeChord(chord, 'C', this.currentKey)
        );
        
        this.isPlayingProgression = true;
        this.currentPlaybackChordIndex = 0;
        
        // Update UI
        this.playProgressionBtn.style.display = 'none';
        this.stopProgressionBtn.style.display = 'inline-block';
        
        // Play first chord immediately
        this.playCurrentChord(transposedChords);
        
        // Calculate timing
        const tempo = parseInt(this.playbackTempo.value, 10) || 120;
        const duration = parseInt(this.chordDuration.value, 10) || 4;
        const beatDuration = (60 / tempo) * 1000; // ms per beat
        const chordDuration = beatDuration * duration;
        
        // Start progression timer
        this.progressionTimer = setInterval(() => {
            if (!this.isPlayingProgression) return;
            
            this.currentPlaybackChordIndex = (this.currentPlaybackChordIndex + 1) % transposedChords.length;
            this.playCurrentChord(transposedChords);
        }, chordDuration);
    }
    
    stopProgressionPlayback() {
        this.isPlayingProgression = false;
        
        if (this.progressionTimer) {
            clearInterval(this.progressionTimer);
            this.progressionTimer = null;
        }
        
        // Update UI
        this.playProgressionBtn.style.display = 'inline-block';
        this.stopProgressionBtn.style.display = 'none';
        this.playbackStatus.textContent = 'Playback stopped';
    }
    
    playCurrentChord(chords) {
        if (!this.audioContext || !this.isPlayingProgression) return;
        
        const currentChord = chords[this.currentPlaybackChordIndex];
        this.playbackStatus.textContent = `Playing: ${currentChord} (${this.currentPlaybackChordIndex + 1}/${chords.length})`;
        
        // Get chord notes
        const chordNotes = this.getChordNotes(currentChord);
        if (chordNotes.length === 0) return;
        
        // Play chord
        this.synthesizeChord(chordNotes);
    }
    
    getChordNotes(chordName) {
        const noteFrequencies = {
            'C': 261.63, 'C#': 277.18, 'Db': 277.18,
            'D': 293.66, 'D#': 311.13, 'Eb': 311.13,
            'E': 329.63,
            'F': 349.23, 'F#': 369.99, 'Gb': 369.99,
            'G': 392.00, 'G#': 415.30, 'Ab': 415.30,
            'A': 440.00, 'A#': 466.16, 'Bb': 466.16,
            'B': 493.88
        };
        
        // Parse chord to extract root and quality
        const rootMatch = chordName.match(/^([A-G][#b]?)(.*?)(?:\/.*)?$/);
        if (!rootMatch) return [];
        
        const root = rootMatch[1];
        const quality = rootMatch[2] || '';
        
        const rootFreq = noteFrequencies[root];
        if (!rootFreq) return [];
        
        // Basic chord intervals (simplified)
        const chordIntervals = {
            '': [0, 4, 7], // Major
            'm': [0, 3, 7], // Minor
            '7': [0, 4, 7, 10], // Dominant 7
            'M7': [0, 4, 7, 11], // Major 7
            'm7': [0, 3, 7, 10], // Minor 7
            'dim': [0, 3, 6], // Diminished
            'aug': [0, 4, 8], // Augmented
            'sus4': [0, 5, 7], // Sus4
            'sus2': [0, 2, 7], // Sus2
            'add9': [0, 4, 7, 14], // Add9
            '6': [0, 4, 7, 9], // Major 6
            'm6': [0, 3, 7, 9] // Minor 6
        };
        
        const intervals = chordIntervals[quality] || chordIntervals[''];
        
        return intervals.map(interval => {
            const semitones = interval;
            return rootFreq * Math.pow(2, semitones / 12);
        });
    }
    
    synthesizeChord(frequencies) {
        if (!this.audioContext) return;
        
        const now = this.audioContext.currentTime;
        const attackTime = 0.3;
        const decayTime = 0.2;
        const releaseTime = 1.2;
        const sustainTime = 1.0;
        const sustainLevel = 0.4;
        
        frequencies.forEach((freq, index) => {
            // Create multiple oscillators per note for richness
            const oscillators = [];
            const gains = [];
            
            // Main oscillator (saw wave for richness)
            const osc1 = this.audioContext.createOscillator();
            const gain1 = this.audioContext.createGain();
            osc1.type = 'sawtooth';
            osc1.frequency.setValueAtTime(freq, now);
            
            // Sub oscillator (sine wave one octave down)
            const osc2 = this.audioContext.createOscillator();
            const gain2 = this.audioContext.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(freq * 0.5, now);
            
            // Detuned oscillator (triangle wave slightly detuned)
            const osc3 = this.audioContext.createOscillator();
            const gain3 = this.audioContext.createGain();
            osc3.type = 'triangle';
            osc3.frequency.setValueAtTime(freq * 1.007, now); // Slightly detuned
            
            oscillators.push(osc1, osc2, osc3);
            gains.push(gain1, gain2, gain3);
            
            // Create filter for warmth
            const filter = this.audioContext.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(1200, now);
            filter.Q.setValueAtTime(1.5, now);
            
            // Add subtle filter envelope
            filter.frequency.setValueAtTime(800, now);
            filter.frequency.linearRampToValueAtTime(1200, now + attackTime);
            filter.frequency.linearRampToValueAtTime(1000, now + attackTime + decayTime);
            filter.frequency.setValueAtTime(1000, now + attackTime + decayTime + sustainTime);
            filter.frequency.linearRampToValueAtTime(800, now + attackTime + decayTime + sustainTime + releaseTime);
            
            // Create reverb/delay effect
            const delayNode = this.audioContext.createDelay(0.3);
            delayNode.delayTime.setValueAtTime(0.15, now);
            
            const delayGain = this.audioContext.createGain();
            delayGain.gain.setValueAtTime(0.2, now);
            
            const masterGain = this.audioContext.createGain();
            
            // Connect oscillators with different gain levels
            osc1.connect(gain1);
            gain1.connect(filter);
            gain1.gain.setValueAtTime(0.4, now); // Main oscillator
            
            osc2.connect(gain2);
            gain2.connect(filter);
            gain2.gain.setValueAtTime(0.3, now); // Sub oscillator
            
            osc3.connect(gain3);
            gain3.connect(filter);
            gain3.gain.setValueAtTime(0.2, now); // Detuned oscillator
            
            // Set up reverb/delay feedback
            filter.connect(masterGain);
            filter.connect(delayNode);
            delayNode.connect(delayGain);
            delayGain.connect(delayNode); // Feedback
            delayGain.connect(masterGain);
            
            masterGain.connect(this.audioContext.destination);
            
            // ADSR envelope
            masterGain.gain.setValueAtTime(0, now);
            masterGain.gain.linearRampToValueAtTime(0.15, now + attackTime); // Attack
            masterGain.gain.linearRampToValueAtTime(sustainLevel * 0.15, now + attackTime + decayTime); // Decay
            masterGain.gain.setValueAtTime(sustainLevel * 0.15, now + attackTime + decayTime + sustainTime); // Sustain
            masterGain.gain.linearRampToValueAtTime(0, now + attackTime + decayTime + sustainTime + releaseTime); // Release
            
            // Start all oscillators
            oscillators.forEach(osc => {
                osc.start(now);
                osc.stop(now + attackTime + decayTime + sustainTime + releaseTime);
            });
        });
        
        // Add some stereo imaging with a slight delay between left and right
        this.addStereoImaging(frequencies, now, attackTime, decayTime, sustainTime, releaseTime, sustainLevel);
    }
    
    addStereoImaging(frequencies, startTime, attackTime, decayTime, sustainTime, releaseTime, sustainLevel) {
        if (!this.audioContext) return;
        
        // Create stereo spread effect
        const splitter = this.audioContext.createChannelSplitter(2);
        const merger = this.audioContext.createChannelMerger(2);
        const leftDelay = this.audioContext.createDelay(0.05);
        const rightDelay = this.audioContext.createDelay(0.05);
        
        leftDelay.delayTime.setValueAtTime(0.003, startTime); // 3ms delay
        rightDelay.delayTime.setValueAtTime(0.007, startTime); // 7ms delay
        
        frequencies.forEach((freq, index) => {
            if (index % 2 === 0) return; // Only process some frequencies for stereo width
            
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            const filter = this.audioContext.createBiquadFilter();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq * 2, startTime); // One octave up
            
            filter.type = 'highpass';
            filter.frequency.setValueAtTime(400, startTime);
            
            osc.connect(gain);
            gain.connect(filter);
            filter.connect(splitter);
            
            splitter.connect(leftDelay, 0);
            splitter.connect(rightDelay, 1);
            
            leftDelay.connect(merger, 0, 0);
            rightDelay.connect(merger, 0, 1);
            
            merger.connect(this.audioContext.destination);
            
            // Softer envelope for stereo layer
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.05, startTime + attackTime);
            gain.gain.linearRampToValueAtTime(sustainLevel * 0.05, startTime + attackTime + decayTime);
            gain.gain.setValueAtTime(sustainLevel * 0.05, startTime + attackTime + decayTime + sustainTime);
            gain.gain.linearRampToValueAtTime(0, startTime + attackTime + decayTime + sustainTime + releaseTime);
            
            osc.start(startTime);
            osc.stop(startTime + attackTime + decayTime + sustainTime + releaseTime);
        });
    }
    
    updateCurrentProgression() {
        if (!this.currentProgression && this.customChords.length === 0) return;
        
        this.renderProgressionDisplay();
        this.renderChordDiagrams();
        this.updateStrummingDisplay();
        this.updatePickingDisplay();
    }
    
    updateStrummingDisplay() {
        if (!this.currentProgression) return;
        
        const pattern = strummingPatterns[this.currentStrummingPattern];
        const strummingDisplay = document.getElementById('strummingDisplay');
        
        if (strummingDisplay && pattern) {
            strummingDisplay.innerHTML = `
                <div class="strumming-info">
                    <h4>${pattern.name}</h4>
                    <div class="pattern">${pattern.pattern}</div>
                    <div class="pattern-description">${pattern.description}</div>
                    <div class="tempo">Tempo: ${pattern.tempo}</div>
                </div>
            `;
        }
    }

    updatePickingDisplay() {
        const pattern = pickingPatterns[this.currentPickingPattern];
        const pickingDisplay = document.getElementById('pickingDisplay');
        
        if (pickingDisplay && pattern) {
            pickingDisplay.innerHTML = `
                <div class="picking-info">
                    <h4>${pattern.name}</h4>
                    <div class="pattern">${pattern.name}</div>
                    <div class="pattern-description">${pattern.description}</div>
                </div>
            `;
        } else if (pickingDisplay) {
            pickingDisplay.innerHTML = '<p>Select a picking pattern</p>';
        }
    }
    
    renderProgressionDisplay() {
        // Use custom chords if available, otherwise use current progression
        const chordsToDisplay = this.customChords.length > 0 ? this.customChords : 
            (this.currentProgression ? this.currentProgression.chords : []);
        
        if (chordsToDisplay.length === 0) return;
        
        // Always transpose chords to the current key
        const transposedChords = chordsToDisplay.map(chord => 
            transposeChord(chord, 'C', this.currentKey)
        );
        
        const chordSequence = document.createElement('div');
        chordSequence.className = 'chord-sequence';
        
        transposedChords.forEach(chord => {
            const chordItem = document.createElement('div');
            chordItem.className = 'chord-item';
            
            let content = '';
            
            if (this.viewModes.includes('chords')) {
                content += `<div class="chord-item-view chord-name">${chord}</div>`;
            }
            if (this.viewModes.includes('roman')) {
                content += `<div class="chord-item-view chord-roman">${getRomanNumeral(chord, this.currentKey)}</div>`;
            }
            if (this.viewModes.includes('intervals')) {
                content += `<div class="chord-item-view chord-interval">${getIntervals(chord).join('-')}</div>`;
            }
            
            if (!content) { // Fallback if no view is selected for some reason
                 content += `<div class="chord-item-view chord-name">${chord}</div>`;
            }

            chordItem.innerHTML = content;
            chordSequence.appendChild(chordItem);
        });
        
        this.progressionDisplay.innerHTML = '';
        this.progressionDisplay.appendChild(chordSequence);
    }
    
    renderChordDiagrams() {
        // Use custom chords if available, otherwise use current progression
        const chordsToDisplay = this.customChords.length > 0 ? this.customChords : 
            (this.currentProgression ? this.currentProgression.chords : []);
        
        if (chordsToDisplay.length === 0) return;
        
        // Always transpose chords to the current key
        const transposedChords = chordsToDisplay.map(chord => 
            transposeChord(chord, 'C', this.currentKey)
        );
        
        this.diagramsContainer.innerHTML = '';
        
        // Get unique chords to avoid duplicates
        const uniqueChords = [...new Set(transposedChords)];
        
        uniqueChords.forEach(chord => {
            const diagram = this.createChordDiagram(chord);
            this.diagramsContainer.appendChild(diagram);
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
            // Log missing chords for debugging
            console.warn(`Chord definition missing for: ${chordName}`);
            container.innerHTML = `
                <div class="chord-diagram-title">${chordName}</div>
                <div class="fretboard">Chord pattern needed</div>
            `;
            return container;
        }
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100');
        svg.setAttribute('height', '120');
        svg.setAttribute('viewBox', '0 0 100 120');
        svg.setAttribute('class', 'fretboard');
        
        // Draw fret lines
        for (let i = 0; i <= 4; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', '15');
            line.setAttribute('y1', 20 + i * 20);
            line.setAttribute('x2', '85');
            line.setAttribute('y2', 20 + i * 20);
            line.setAttribute('class', 'fret-line');
            svg.appendChild(line);
        }
        
        // Draw string lines
        for (let i = 0; i < 6; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', 15 + i * 14);
            line.setAttribute('y1', '15');
            line.setAttribute('x2', 15 + i * 14);
            line.setAttribute('y2', '100');
            line.setAttribute('class', 'string-line');
            svg.appendChild(line);
        }
        
        // Draw finger positions
        chordDef.frets.forEach((fret, string) => {
            const x = 15 + string * 14;
            
            if (fret === 0) {
                // Open string
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', x);
                circle.setAttribute('cy', '10');
                circle.setAttribute('r', '4');
                circle.setAttribute('class', 'open-string');
                svg.appendChild(circle);
            } else if (fret === -1) {
                // Muted string
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
                // Finger position
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

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ChordProgressionApp(); // Make globally accessible for remove chord function
});
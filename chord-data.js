export const chordDefinitions = {
    // Basic triads
    'C': { frets: [-1, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0] },
    'Cm': { frets: [-1, 3, 5, 5, 4, 3], fingers: [0, 1, 3, 4, 2, 1] },
    'Cdim': { frets: [-1, 3, 4, 2, 4, 2], fingers: [0, 2, 4, 1, 3, 1] },
    'Caug': { frets: [-1, 3, 2, 1, 1, 0], fingers: [0, 4, 3, 1, 2, 0] },
    'Csus2': { frets: [-1, 3, 0, 0, 1, 3], fingers: [0, 2, 0, 0, 1, 4] },
    'Csus4': { frets: [-1, 3, 3, 0, 1, 1], fingers: [0, 2, 3, 0, 1, 1] },
    
    // Seventh chords
    'C7': { frets: [-1, 3, 2, 3, 1, 0], fingers: [0, 3, 2, 4, 1, 0] },
    'Cmaj7': { frets: [-1, 3, 2, 0, 0, 0], fingers: [0, 3, 2, 0, 0, 0] },
    'Cm7': { frets: [-1, 3, 1, 3, 1, 1], fingers: [0, 3, 1, 4, 1, 1] },
    'Cm7b5': { frets: [-1, 3, 4, 3, 4, 2], fingers: [0, 2, 3, 2, 4, 1] },
    'Cdim7': { frets: [-1, 3, 4, 2, 4, 2], fingers: [0, 2, 4, 1, 3, 1] },
    'CmMaj7': { frets: [-1, 3, 5, 4, 4, 3], fingers: [0, 1, 4, 2, 3, 1] },
    'Cmaj7#5': { frets: [-1, 3, 2, 1, 0, 0], fingers: [0, 4, 3, 1, 0, 0] },
    'C7#5': { frets: [-1, 3, 2, 1, 1, 0], fingers: [0, 3, 2, 1, 4, 0] },
    'C7b5': { frets: [-1, 3, 2, 3, 0, 0], fingers: [0, 3, 2, 4, 0, 0] },
    'C6': { frets: [-1, 3, 2, 2, 1, 0], fingers: [0, 3, 2, 2, 1, 0] },
    'Cm6': { frets: [-1, 3, 1, 2, 1, 3], fingers: [0, 3, 1, 2, 1, 4] },
    'C7sus4': { frets: [-1, 3, 3, 3, 1, 1], fingers: [0, 2, 3, 4, 1, 1] },
    
    // Extended chords
    'C9': { frets: [-1, 3, 2, 3, 3, 3], fingers: [0, 1, 2, 1, 3, 4] },
    'Cmaj9': { frets: [-1, 3, 2, 4, 3, 0], fingers: [0, 2, 1, 4, 3, 0] },
    'Cm9': { frets: [-1, 3, 1, 3, 3, 3], fingers: [0, 2, 1, 2, 3, 4] },
    'C11': { frets: [-1, 3, 3, 3, 4, 1], fingers: [0, 2, 2, 2, 4, 1] },
    'Cm11': { frets: [-1, 3, 1, 3, 4, 1], fingers: [0, 2, 1, 3, 4, 1] },
    'Cmaj11': { frets: [-1, 3, 2, 0, 0, 1], fingers: [0, 4, 3, 0, 0, 1] },
    'C13': { frets: [-1, 3, 2, 2, 4, 5], fingers: [0, 2, 1, 1, 3, 4] },
    'Cm13': { frets: [-1, 3, 1, 2, 4, 5], fingers: [0, 2, 1, 1, 3, 4] },
    'Cmaj13': { frets: [-1, 3, 2, 2, 0, 0], fingers: [0, 4, 2, 3, 0, 0] },
    
    // Altered dominants
    'C7#9': { frets: [-1, 3, 2, 3, 4, 4], fingers: [0, 2, 1, 3, 4, 4] },
    'C7b9': { frets: [-1, 3, 2, 3, 2, 3], fingers: [0, 3, 1, 4, 2, 2] },
    'C13b9': { frets: [-1, 3, 2, 2, 2, 3], fingers: [0, 4, 2, 2, 1, 3] },
    'C9sus4': { frets: [-1, 3, 3, 3, 3, 3], fingers: [0, 1, 1, 1, 1, 1] },
    'C7#9#5': { frets: [-1, 3, 2, 1, 4, 4], fingers: [0, 3, 2, 1, 4, 4] },
    'C7b9b13': { frets: [-1, 3, 2, 3, 2, 0], fingers: [0, 3, 1, 4, 2, 0] },
    'C7b13': { frets: [-1, 3, 2, 3, 1, 0], fingers: [0, 3, 2, 4, 1, 0] },
    'Cmaj7b5': { frets: [-1, 3, 2, 0, 0, 2], fingers: [0, 3, 2, 0, 0, 4] },
    
    // Add chords
    'Cadd9': { frets: [-1, 3, 2, 0, 3, 0], fingers: [0, 2, 1, 0, 3, 0] },
    'Cmadd9': { frets: [-1, 3, 1, 0, 3, 3], fingers: [0, 2, 1, 0, 3, 4] },
    'Cmaj7#11': { frets: [-1, 3, 2, 4, 4, 2], fingers: [0, 2, 1, 3, 4, 1] },
    'C6/9': { frets: [-1, 3, 2, 2, 3, 3], fingers: [0, 2, 1, 1, 3, 4] },
    'Cm6/9': { frets: [-1, 3, 1, 2, 3, 3], fingers: [0, 2, 1, 1, 3, 4] },
    'CmMaj9': { frets: [-1, 3, 1, 4, 3, 3], fingers: [0, 2, 1, 4, 3, 3] },
    'Cm7b9': { frets: [-1, 3, 1, 3, 2, 3], fingers: [0, 3, 1, 4, 2, 2] },
    
    // More advanced chord types for substitutions
    'It+6': { frets: [-1, 0, 1, 2, 2, 3], fingers: [0, 0, 1, 2, 3, 4] },
    'Fr+6': { frets: [-1, 0, 1, 2, 3, 2], fingers: [0, 0, 1, 2, 4, 3] },
    'Ger+6': { frets: [-1, 0, 1, 1, 3, 2], fingers: [0, 0, 1, 1, 4, 3] },
    'G7alt': { frets: [3, 2, 3, 4, 4, 3], fingers: [1, 2, 3, 4, 4, 3] },
    'G7#11': { frets: [3, 2, 3, 4, 0, 1], fingers: [3, 2, 4, 4, 0, 1] },
    'G7b13': { frets: [3, 2, 3, 1, 3, 1], fingers: [3, 2, 4, 1, 3, 1] },
    'G13': { frets: [3, 2, 3, 4, 5, 3], fingers: [1, 2, 3, 4, 4, 1] },
    'G7sus2': { frets: [3, 0, 0, 2, 1, 1], fingers: [3, 0, 0, 2, 1, 1] },
    'Gaug': { frets: [3, 2, 1, 0, 0, 3], fingers: [4, 3, 2, 0, 0, 4] },
    'AmMaj7': { frets: [-1, 0, 2, 1, 1, 0], fingers: [0, 0, 2, 1, 1, 0] },
    
    'D': { frets: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 1, 3, 2] },
    'Dm': { frets: [-1, -1, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1] },
    'D7': { frets: [-1, -1, 0, 2, 1, 2], fingers: [0, 0, 0, 2, 1, 3] },
    'Dmaj7': { frets: [-1, -1, 0, 2, 2, 2], fingers: [0, 0, 0, 1, 2, 3] },
    'Dm7': { frets: [-1, -1, 0, 2, 1, 1], fingers: [0, 0, 0, 2, 1, 1] },
    'D9': { frets: [-1, -1, 0, 2, 1, 0], fingers: [0, 0, 0, 2, 1, 0] },
    'Dsus2': { frets: [-1, -1, 0, 2, 3, 0], fingers: [0, 0, 0, 1, 2, 0] },
    'Dsus4': { frets: [-1, -1, 0, 2, 3, 3], fingers: [0, 0, 0, 1, 2, 3] },
    'Ddim': { frets: [-1, -1, 0, 1, 0, 1], fingers: [0, 0, 0, 1, 0, 2] },
    'Ddim7': { frets: [-1, -1, 0, 1, 0, 1], fingers: [0, 0, 0, 1, 0, 2] },
    'Dm7b5': { frets: [-1, -1, 0, 1, 1, 1], fingers: [0, 0, 0, 1, 1, 1] },
    
    'E': { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] },
    'Em': { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] },
    'E7': { frets: [0, 2, 0, 1, 0, 0], fingers: [0, 2, 0, 1, 0, 0] },
    'Emaj7': { frets: [0, 2, 1, 1, 0, 0], fingers: [0, 2, 1, 1, 0, 0] },
    'Em7': { frets: [0, 2, 0, 0, 0, 0], fingers: [0, 2, 0, 0, 0, 0] },
    'E9': { frets: [0, 2, 0, 1, 0, 2], fingers: [0, 2, 0, 1, 0, 3] },
    'Esus2': { frets: [0, 2, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0] },
    'Esus4': { frets: [0, 2, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0] },
    'Edim': { frets: [0, 1, 2, 0, 2, 0], fingers: [0, 1, 3, 0, 2, 0] },
    'Eaug': { frets: [0, 3, 2, 1, 1, 0], fingers: [0, 4, 3, 1, 2, 0] },
    
    'F': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1] },
    'Fm': { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1] },
    'F7': { frets: [1, 3, 1, 2, 1, 1], fingers: [1, 3, 1, 2, 1, 1] },
    'Fmaj7': { frets: [1, 3, 2, 2, 1, 1], fingers: [1, 3, 2, 2, 1, 1] },
    'Fm7': { frets: [1, 3, 1, 1, 1, 1], fingers: [1, 3, 1, 1, 1, 1] },
    'F9': { frets: [1, 3, 1, 2, 1, 3], fingers: [1, 3, 1, 2, 1, 4] },
    'Fsus2': { frets: [1, 3, 3, 0, 1, 1], fingers: [1, 3, 4, 0, 1, 1] },
    'Fsus4': { frets: [1, 3, 3, 3, 1, 1], fingers: [1, 2, 3, 4, 1, 1] },
    'Faug': { frets: [1, 0, 3, 2, 2, 1], fingers: [1, 0, 4, 2, 3, 1] },
    
    'G': { frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, 0, 0, 0, 3] },
    'Gm': { frets: [3, 5, 5, 3, 3, 3], fingers: [1, 3, 4, 1, 1, 1] },
    'G7': { frets: [3, 2, 0, 0, 0, 1], fingers: [3, 2, 0, 0, 0, 1] },
    'Gmaj7': { frets: [3, 2, 0, 0, 0, 2], fingers: [3, 1, 0, 0, 0, 2] },
    'Gm7': { frets: [3, 5, 3, 3, 3, 3], fingers: [1, 3, 1, 1, 1, 1] },
    'G9': { frets: [3, 2, 0, 2, 0, 1], fingers: [3, 2, 0, 2, 0, 1] },
    'Gsus2': { frets: [3, 0, 0, 2, 3, 3], fingers: [2, 0, 0, 1, 3, 4] },
    'Gsus4': { frets: [3, 5, 5, 5, 3, 3], fingers: [1, 2, 3, 4, 1, 1] },
    'Gdim': { frets: [3, 4, 5, 3, 5, 3], fingers: [1, 2, 4, 1, 3, 1] },
    
    'A': { frets: [-1, 0, 2, 2, 2, 0], fingers: [0, 0, 1, 2, 3, 0] },
    'Am': { frets: [-1, 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0] },
    'A7': { frets: [-1, 0, 2, 0, 2, 0], fingers: [0, 0, 2, 0, 3, 0] },
    'Amaj7': { frets: [-1, 0, 2, 1, 2, 0], fingers: [0, 0, 2, 1, 3, 0] },
    'Am7': { frets: [-1, 0, 2, 0, 1, 0], fingers: [0, 0, 2, 0, 1, 0] },
    'A9': { frets: [-1, 0, 2, 4, 2, 3], fingers: [0, 0, 1, 4, 2, 3] },
    'Asus2': { frets: [-1, 0, 2, 2, 0, 0], fingers: [0, 0, 1, 2, 0, 0] },
    'Asus4': { frets: [-1, 0, 2, 2, 3, 0], fingers: [0, 0, 1, 2, 3, 0] },
    'Adim': { frets: [-1, 0, 1, 2, 1, 2], fingers: [0, 0, 1, 3, 2, 4] },
    
    'B': { frets: [-1, 2, 4, 4, 4, 2], fingers: [0, 1, 2, 3, 4, 1] },
    'Bm': { frets: [-1, 2, 4, 4, 3, 2], fingers: [0, 1, 3, 4, 2, 1] },
    'B7': { frets: [-1, 2, 1, 2, 0, 2], fingers: [0, 2, 1, 3, 0, 4] },
    'Bmaj7': { frets: [-1, 2, 4, 3, 4, 2], fingers: [0, 1, 3, 2, 4, 1] },
    'Bm7': { frets: [-1, 2, 0, 2, 0, 2], fingers: [0, 1, 0, 2, 0, 3] },
    'Bm7b5': { frets: [-1, 2, 3, 2, 3, 2], fingers: [0, 1, 3, 2, 4, 1] },
    'Bsus2': { frets: [-1, 2, 4, 4, 2, 2], fingers: [0, 1, 3, 4, 1, 2] },
    'Bsus4': { frets: [-1, 2, 4, 4, 5, 2], fingers: [0, 1, 2, 3, 4, 1] },
    
    // Sharp chords
    'C#': { frets: [-1, 4, 3, 1, 2, 1], fingers: [0, 4, 3, 1, 2, 1] },
    'C#m': { frets: [-1, 4, 6, 6, 5, 4], fingers: [0, 1, 3, 4, 2, 1] },
    'C#7': { frets: [-1, 4, 3, 4, 2, 1], fingers: [0, 3, 2, 4, 1, 1] },
    'C#maj7': { frets: [-1, 4, 3, 1, 1, 1], fingers: [0, 3, 2, 1, 1, 1] },
    'C#m7': { frets: [-1, 4, 2, 4, 2, 2], fingers: [0, 3, 1, 4, 1, 2] },
    
    'D#': { frets: [-1, -1, 1, 3, 4, 3], fingers: [0, 0, 1, 2, 4, 3] },
    'D#m': { frets: [-1, -1, 1, 3, 4, 2], fingers: [0, 0, 1, 3, 4, 2] },
    'D#7': { frets: [-1, -1, 1, 3, 2, 3], fingers: [0, 0, 1, 3, 2, 4] },
    'D#maj7': { frets: [-1, -1, 1, 3, 3, 3], fingers: [0, 0, 1, 2, 3, 4] },
    'D#m7': { frets: [-1, -1, 1, 3, 2, 2], fingers: [0, 0, 1, 3, 2, 2] },
    
    'F#': { frets: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1] },
    'F#m': { frets: [2, 4, 4, 2, 2, 2], fingers: [1, 3, 4, 1, 1, 1] },
    'F#7': { frets: [2, 4, 2, 3, 2, 2], fingers: [1, 3, 1, 2, 1, 1] },
    'F#maj7': { frets: [2, 4, 3, 3, 2, 2], fingers: [1, 3, 2, 2, 1, 1] },
    'F#m7': { frets: [2, 4, 2, 2, 2, 2], fingers: [1, 3, 1, 1, 1, 1] },
    
    'G#': { frets: [4, 3, 1, 1, 1, 4], fingers: [3, 2, 1, 1, 1, 4] },
    'G#m': { frets: [4, 6, 6, 4, 4, 4], fingers: [1, 3, 4, 1, 1, 1] },
    'G#7': { frets: [4, 3, 1, 1, 1, 2], fingers: [4, 3, 1, 1, 1, 2] },
    'G#maj7': { frets: [4, 3, 1, 1, 1, 3], fingers: [3, 2, 1, 1, 1, 4] },
    'G#m7': { frets: [4, 6, 4, 4, 4, 4], fingers: [1, 3, 1, 1, 1, 1] },
    
    'A#': { frets: [-1, 1, 3, 3, 3, 1], fingers: [0, 1, 2, 3, 4, 1] },
    'A#m': { frets: [-1, 1, 3, 3, 2, 1], fingers: [0, 1, 3, 4, 2, 1] },
    'A#7': { frets: [-1, 1, 3, 1, 3, 1], fingers: [0, 1, 3, 1, 4, 1] },
    'A#maj7': { frets: [-1, 1, 3, 2, 3, 1], fingers: [0, 1, 3, 2, 4, 1] },
    'A#m7': { frets: [-1, 1, 3, 1, 2, 1], fingers: [0, 1, 3, 1, 2, 1] },
    
    // Flat chords (enharmonic equivalents)
    'Cdim7':   { frets: [-1, 3, 4, 2, 4, 2], fingers: [0, 2, 3, 1, 4, 1] },
'C#dim7':  { frets: [-1, 4, 5, 3, 5, 3], fingers: [0, 2, 3, 1, 4, 1] },
'Dbdim7':  { frets: [-1, 4, 5, 3, 5, 3], fingers: [0, 2, 3, 1, 4, 1] },
'Ddim7':   { frets: [-1, 5, 6, 4, 6, 4], fingers: [0, 2, 3, 1, 4, 1] },
'D#dim7':  { frets: [-1, 6, 7, 5, 7, 5], fingers: [0, 2, 3, 1, 4, 1] },
'Ebdim7':  { frets: [-1, 6, 7, 5, 7, 5], fingers: [0, 2, 3, 1, 4, 1] },
'Edim7':   { frets: [-1, 7, 8, 6, 8, 6], fingers: [0, 2, 3, 1, 4, 1] },
'Fdim7':   { frets: [-1, 8, 9, 7, 9, 7], fingers: [0, 2, 3, 1, 4, 1] },
'F#dim7':  { frets: [-1, 9, 10, 8, 10, 8], fingers: [0, 2, 3, 1, 4, 1] },
'Gbdim7':  { frets: [-1, 9, 10, 8, 10, 8], fingers: [0, 2, 3, 1, 4, 1] },
'Gdim7':   { frets: [-1, 10, 11, 9, 11, 9], fingers: [0, 2, 3, 1, 4, 1] },
'G#dim7':  { frets: [-1, 11, 12, 10, 12, 10], fingers: [0, 2, 3, 1, 4, 1] },
'Abdim7':  { frets: [-1, 11, 12, 10, 12, 10], fingers: [0, 2, 3, 1, 4, 1] },
'Adim7':   { frets: [-1, 12, 13, 11, 13, 11], fingers: [0, 2, 3, 1, 4, 1] },
'A#dim7':  { frets: [-1, 1, 2, 0, 2, 0], fingers: [0, 2, 3, 0, 4, 0] },
'Bbdim7':  { frets: [-1, 1, 2, 0, 2, 0], fingers: [0, 2, 3, 0, 4, 0] },
'Bdim7':   { frets: [-1, 2, 3, 1, 3, 1], fingers: [0, 2, 3, 1, 4, 1] },

    'Db': { frets: [-1, 4, 3, 1, 2, 1], fingers: [0, 4, 3, 1, 2, 1] },
    'Dbm': { frets: [-1, 4, 6, 6, 5, 4], fingers: [0, 1, 3, 4, 2, 1] },
    'Db7': { frets: [-1, 4, 3, 4, 2, 1], fingers: [0, 3, 2, 4, 1, 1] },
    'Dbmaj7': { frets: [-1, 4, 3, 1, 1, 1], fingers: [0, 3, 2, 1, 1, 1] },
    
    'Eb': { frets: [-1, -1, 1, 3, 4, 3], fingers: [0, 0, 1, 2, 4, 3] },
    'Ebm': { frets: [-1, -1, 1, 3, 4, 2], fingers: [0, 0, 1, 3, 4, 2] },
    'Eb7': { frets: [-1, -1, 1, 3, 2, 3], fingers: [0, 0, 1, 3, 2, 4] },
    'Ebmaj7': { frets: [-1, -1, 1, 3, 3, 3], fingers: [0, 0, 1, 2, 3, 4] },
    
    'Gb': { frets: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1] },
    'Gbm': { frets: [2, 4, 4, 2, 2, 2], fingers: [1, 3, 4, 1, 1, 1] },
    'Gb7': { frets: [2, 4, 2, 3, 2, 2], fingers: [1, 3, 1, 2, 1, 1] },
    'Gbmaj7': { frets: [2, 4, 3, 3, 2, 2], fingers: [1, 3, 2, 2, 1, 1] },
    
    'Ab': { frets: [4, 3, 1, 1, 1, 4], fingers: [3, 2, 1, 1, 1, 4] },
    'Abm': { frets: [4, 6, 6, 4, 4, 4], fingers: [1, 3, 4, 1, 1, 1] },
    'Ab7': { frets: [4, 3, 1, 1, 1, 2], fingers: [4, 3, 1, 1, 1, 2] },
    'Abmaj7': { frets: [4, 3, 1, 1, 1, 3], fingers: [3, 2, 1, 1, 1, 4] },
    
    'Bb': { frets: [-1, 1, 3, 3, 3, 1], fingers: [0, 1, 2, 3, 4, 1] },
    'Bbm': { frets: [-1, 1, 3, 3, 2, 1], fingers: [0, 1, 3, 4, 2, 1] },
    'Bb7': { frets: [-1, 1, 3, 1, 3, 1], fingers: [0, 1, 3, 1, 4, 1] },
    'Bbmaj7': { frets: [-1, 1, 3, 2, 3, 1], fingers: [0, 1, 3, 2, 4, 1] },
    
    // Additional chord extensions and variations to double the chord count
    'C5': { frets: [-1, 3, 5, 5, -1, -1], fingers: [0, 1, 3, 4, 0, 0] }, 
    'Cm6add9': { frets: [-1, 3, 1, 2, 3, 3], fingers: [0, 2, 1, 1, 3, 4] },
    'C7add13': { frets: [-1, 3, 2, 3, 5, 5], fingers: [0, 2, 1, 3, 4, 4] },
    'Cadd11': { frets: [-1, 3, 2, 0, 1, 3], fingers: [0, 3, 2, 0, 1, 4] },
    'Cm/Bb': { frets: [-1, 1, 3, 5, 4, 3], fingers: [0, 1, 2, 4, 3, 2] },
    'C/E': { frets: [0, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0] },
    'C/G': { frets: [3, 3, 2, 0, 1, 0], fingers: [3, 4, 2, 0, 1, 0] },
    'Cm(add9)': { frets: [-1, 3, 1, 0, 3, 3], fingers: [0, 2, 1, 0, 3, 4] },
    'C13sus4': { frets: [-1, 3, 3, 3, 5, 5], fingers: [0, 1, 1, 1, 3, 4] },
    'C7#11': { frets: [-1, 3, 2, 4, 4, 4], fingers: [0, 2, 1, 3, 3, 4] },
    'Cm7#5': { frets: [-1, 3, 2, 4, 4, 4], fingers: [0, 2, 1, 3, 3, 4] },
    'C9#5': { frets: [-1, 3, 2, 1, 3, 4], fingers: [0, 3, 2, 1, 3, 4] },
    'C7b9#11': { frets: [-1, 3, 2, 3, 4, 2], fingers: [0, 3, 1, 4, 4, 2] },
    'Cmaj9#11': { frets: [-1, 3, 2, 4, 4, 2], fingers: [0, 2, 1, 3, 4, 1] },
    
    'D5': { frets: [-1, -1, 0, 2, 3, -1], fingers: [0, 0, 0, 1, 2, 0] },
    'Dadd9': { frets: [-1, -1, 0, 2, 3, 0], fingers: [0, 0, 0, 1, 2, 0] },
    'Dm6': { frets: [-1, -1, 0, 2, 0, 1], fingers: [0, 0, 0, 2, 0, 1] },
    'D7sus2': { frets: [-1, -1, 0, 2, 1, 0], fingers: [0, 0, 0, 2, 1, 0] },
    'Dmaj13': { frets: [-1, -1, 0, 2, 2, 4], fingers: [0, 0, 0, 1, 2, 4] },
    'Dm/A': { frets: [-1, 0, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1] },
    'Dm/C': { frets: [-1, -1, 0, 5, 6, 5], fingers: [0, 0, 0, 1, 3, 2] },
    'D/F#': { frets: [2, -1, 0, 2, 3, 2], fingers: [1, 0, 0, 2, 4, 3] },
    'Dm7add11': { frets: [-1, -1, 0, 2, 1, 3], fingers: [0, 0, 0, 2, 1, 3] },
    'D9sus4': { frets: [-1, -1, 0, 2, 3, 0], fingers: [0, 0, 0, 1, 2, 0] },
    'D7#9': { frets: [-1, -1, 0, 2, 1, 4], fingers: [0, 0, 0, 2, 1, 4] },
    'Dmaj7#11': { frets: [-1, -1, 0, 2, 2, 4], fingers: [0, 0, 0, 1, 2, 4] },
    
    'E5': { frets: [0, 2, 2, -1, -1, -1], fingers: [0, 1, 2, 0, 0, 0] },
    'Eadd9': { frets: [0, 2, 2, 1, 0, 2], fingers: [0, 2, 3, 1, 0, 4] },
    'Em6': { frets: [0, 2, 2, 0, 2, 0], fingers: [0, 1, 2, 0, 3, 0] },
    'E7sus2': { frets: [0, 2, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0] },
    'Emaj13': { frets: [0, 2, 1, 1, 0, 4], fingers: [0, 2, 1, 1, 0, 4] },
    'Em/B': { frets: [-1, 2, 2, 0, 0, 0], fingers: [0, 1, 2, 0, 0, 0] },
    'Em/D': { frets: [-1, -1, 0, 0, 0, 0], fingers: [0, 0, 0, 0, 0, 0] },
    'E/G#': { frets: [4, 2, 2, 1, 0, 0], fingers: [4, 2, 3, 1, 0, 0] },
    'Em7add11': { frets: [0, 2, 0, 0, 3, 0], fingers: [0, 2, 0, 0, 3, 0] },
    'E9sus4': { frets: [0, 2, 2, 2, 0, 2], fingers: [0, 1, 2, 3, 0, 4] },
    'E7#9': { frets: [0, 2, 0, 1, 3, 2], fingers: [0, 2, 0, 1, 4, 3] },
    'Emaj7#11': { frets: [0, 2, 1, 1, 4, 4], fingers: [0, 2, 1, 1, 3, 4] },
    
    'F5': { frets: [1, 3, 3, -1, -1, -1], fingers: [1, 2, 3, 0, 0, 0] },
    'Fadd9': { frets: [1, 3, 3, 0, 1, 1], fingers: [1, 3, 4, 0, 1, 2] },
    'Fm6': { frets: [1, 3, 1, 1, 1, 1], fingers: [1, 4, 2, 2, 2, 3] },
    'F7sus2': { frets: [1, 3, 3, 0, 1, 1], fingers: [1, 3, 4, 0, 1, 2] },
    'Fmaj13': { frets: [1, 3, 2, 2, 3, 5], fingers: [1, 3, 2, 2, 3, 4] },
    'Fm/C': { frets: [-1, 3, 3, 1, 1, 1], fingers: [0, 3, 4, 1, 1, 2] },
    'Fm/Db': { frets: [-1, 4, 3, 1, 1, 1], fingers: [0, 4, 3, 1, 1, 2] },
    'F/A': { frets: [-1, 0, 3, 2, 1, 1], fingers: [0, 0, 4, 3, 1, 2] },
    'Fm7add11': { frets: [1, 3, 1, 1, 4, 1], fingers: [1, 3, 1, 1, 4, 1] },
    'F9sus4': { frets: [1, 3, 3, 3, 1, 3], fingers: [1, 2, 3, 4, 1, 4] },
    'F7#9': { frets: [1, 3, 1, 2, 4, 4], fingers: [1, 3, 1, 2, 4, 4] },
    'Fmaj7#11': { frets: [1, 3, 2, 2, 5, 5], fingers: [1, 2, 3, 3, 4, 4] },
    
    'G5': { frets: [3, 5, 5, -1, -1, -1], fingers: [1, 2, 3, 0, 0, 0] },
    'Gadd9': { frets: [3, 2, 0, 2, 0, 3], fingers: [2, 1, 0, 3, 0, 4] },
    'Gm6': { frets: [3, 5, 3, 3, 3, 3], fingers: [1, 4, 2, 2, 2, 3] },
    'G7sus2': { frets: [3, 0, 0, 2, 1, 1], fingers: [3, 0, 0, 2, 1, 1] },
    'Gmaj13': { frets: [3, 2, 0, 0, 0, 5], fingers: [2, 1, 0, 0, 0, 4] },
    'Gm/D': { frets: [-1, -1, 0, 3, 3, 3], fingers: [0, 0, 0, 1, 2, 3] },
    'Gm/Bb': { frets: [-1, 1, 0, 3, 3, 3], fingers: [0, 1, 0, 2, 3, 4] },
    'G/B': { frets: [-1, 2, 0, 0, 0, 3], fingers: [0, 2, 0, 0, 0, 3] },
    'Gm7add11': { frets: [3, 5, 3, 3, 6, 3], fingers: [1, 3, 1, 1, 4, 1] },
    'G9sus4': { frets: [3, 0, 0, 2, 1, 3], fingers: [2, 0, 0, 2, 1, 4] },
    'G7#9': { frets: [3, 2, 0, 0, 4, 4], fingers: [2, 1, 0, 0, 3, 4] },
    'Gmaj7#11': { frets: [3, 2, 0, 0, 5, 5], fingers: [2, 1, 0, 0, 3, 4] },
    
    'A5': { frets: [-1, 0, 2, 2, -1, -1], fingers: [0, 0, 1, 2, 0, 0] },
    'Aadd9': { frets: [-1, 0, 2, 2, 0, 0], fingers: [0, 0, 1, 2, 0, 0] },
    'Am6': { frets: [-1, 0, 2, 2, 1, 2], fingers: [0, 0, 2, 3, 1, 4] },
    'A7sus2': { frets: [-1, 0, 2, 0, 0, 0], fingers: [0, 0, 1, 0, 0, 0] },
    'Amaj13': { frets: [-1, 0, 2, 1, 2, 4], fingers: [0, 0, 2, 1, 3, 4] },
    'Am/E': { frets: [0, 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0] },
    'Am/F': { frets: [-1, -1, 3, 2, 1, 0], fingers: [0, 0, 4, 3, 2, 1] },
    'A/C#': { frets: [-1, 4, 2, 2, 2, 0], fingers: [0, 4, 1, 2, 3, 0] },
    'Am7add11': { frets: [-1, 0, 2, 0, 1, 3], fingers: [0, 0, 2, 0, 1, 3] },
    'A9sus4': { frets: [-1, 0, 2, 2, 3, 0], fingers: [0, 0, 1, 2, 3, 0] },
    'A7#9': { frets: [-1, 0, 2, 0, 2, 4], fingers: [0, 0, 2, 0, 3, 4] },
    'Amaj7#11': { frets: [-1, 0, 2, 1, 2, 4], fingers: [0, 0, 2, 1, 3, 4] },
    
    'B5': { frets: [-1, 2, 4, 4, -1, -1], fingers: [0, 1, 2, 3, 0, 0] },
    'Badd9': { frets: [-1, 2, 4, 4, 2, 2], fingers: [0, 1, 3, 4, 1, 2] },
    'Bm6': { frets: [-1, 2, 4, 4, 3, 2], fingers: [0, 1, 3, 4, 2, 1] },
    'B7sus2': { frets: [-1, 2, 4, 2, 2, 2], fingers: [0, 1, 4, 2, 2, 3] },
    'Bmaj13': { frets: [-1, 2, 4, 3, 4, 6], fingers: [0, 1, 2, 1, 3, 4] },
    'Bm/F#': { frets: [2, 2, 4, 4, 3, 2], fingers: [1, 1, 3, 4, 2, 1] },
    'Bm/G': { frets: [3, 2, 4, 4, 3, 2], fingers: [2, 1, 3, 4, 2, 1] },
    'B/D#': { frets: [-1, 6, 4, 4, 4, 2], fingers: [0, 4, 1, 2, 3, 1] },
    'Bm7add11': { frets: [-1, 2, 0, 2, 0, 5], fingers: [0, 1, 0, 2, 0, 3] },
    'B9sus4': { frets: [-1, 2, 4, 4, 5, 2], fingers: [0, 1, 2, 3, 4, 1] },
    'B7#9': { frets: [-1, 2, 1, 2, 4, 4], fingers: [0, 2, 1, 3, 4, 4] },
    'Bmaj7#11': { frets: [-1, 2, 4, 3, 6, 6], fingers: [0, 1, 2, 1, 3, 4] },
    
    // More complex jazz chords and variations
    'C6sus2': { frets: [-1, 3, 0, 2, 1, 0], fingers: [0, 3, 0, 2, 1, 0] },
    'C7sus2': { frets: [-1, 3, 0, 3, 1, 0], fingers: [0, 3, 0, 4, 1, 0] },
    'Cm9#11': { frets: [-1, 3, 1, 4, 4, 4], fingers: [0, 2, 1, 3, 3, 4] },
    'C13#11': { frets: [-1, 3, 2, 2, 5, 5], fingers: [0, 2, 1, 1, 3, 4] },
    'Cmaj9#5': { frets: [-1, 3, 2, 1, 3, 4], fingers: [0, 3, 2, 1, 3, 4] },
    'C7alt': { frets: [-1, 3, 2, 3, 4, 2], fingers: [0, 3, 1, 4, 4, 2] },
    'C9#11': { frets: [-1, 3, 2, 4, 4, 4], fingers: [0, 2, 1, 3, 3, 4] },
    'Cm13b5': { frets: [-1, 3, 4, 2, 5, 5], fingers: [0, 2, 3, 1, 4, 4] },
    
    'D6sus2': { frets: [-1, -1, 0, 2, 0, 0], fingers: [0, 0, 0, 1, 0, 0] },
    'D7sus2': { frets: [-1, -1, 0, 2, 1, 0], fingers: [0, 0, 0, 2, 1, 0] },
    'Dm9#11': { frets: [-1, -1, 0, 2, 1, 4], fingers: [0, 0, 0, 2, 1, 4] },
    'D13#11': { frets: [-1, -1, 0, 2, 2, 5], fingers: [0, 0, 0, 1, 2, 4] },
    'Dmaj9#5': { frets: [-1, -1, 0, 3, 3, 0], fingers: [0, 0, 0, 1, 2, 0] },
    'D7alt': { frets: [-1, -1, 0, 1, 2, 1], fingers: [0, 0, 0, 1, 3, 2] },
    'D9#11': { frets: [-1, -1, 0,2, 3, 4], fingers: [0, 0, 0, 1, 2, 4] },
    'Dm13b5': { frets: [-1, -1, 0, 1, 1, 4], fingers: [0, 0, 0, 1, 1, 4] },
    
    'E6sus2': { frets: [0, 2, 4, 1, 0, 0], fingers: [0, 1, 4, 2, 0, 0] },
    'E7sus2': { frets: [0, 2, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0] },
    'Em9#11': { frets: [0, 2, 0, 0, 3, 4], fingers: [0, 1, 0, 0, 2, 4] },
    'E13#11': { frets: [0, 2, 1, 1, 2, 5], fingers: [0, 2, 1, 1, 3, 4] },
    'Emaj9#5': { frets: [0, 3, 1, 1, 0, 4], fingers: [0, 3, 1, 1, 0, 4] },
    'E7alt': { frets: [0, 2, 0, 1, 3, 1], fingers: [0, 2, 0, 1, 4, 1] },
    'E9#11': { frets: [0, 2, 2, 1, 3, 4], fingers: [0, 2, 3, 1, 3, 4] },
    'Em13b5': { frets: [0, 1, 0, 0, 2, 4], fingers: [0, 1, 0, 0, 2, 4] },
    
    'F6sus2': { frets: [1, 3, 3, 0, 1, 1], fingers: [1, 3, 4, 0, 1, 2] },
    'F7sus2': { frets: [1, 3, 3, 0, 1, 1], fingers: [1, 3, 4, 0, 1, 2] },
    'Fm9#11': { frets: [1, 3, 1, 1, 4, 4], fingers: [1, 3, 1, 1, 4, 4] },
    'F13#11': { frets: [1, 3, 2, 2, 5, 6], fingers: [1, 2, 1, 1, 3, 4] },
    'Fmaj9#5': { frets: [1, 4, 2, 2, 1, 5], fingers: [1, 4, 2, 3, 1, 4] },
    'F7alt': { frets: [1, 3, 1, 2, 4, 2], fingers: [1, 3, 1, 2, 4, 2] },
    'F9#11': { frets: [1, 3, 3, 2, 4, 5], fingers: [1, 3, 4, 2, 4, 4] },
    'Fm13b5': { frets: [1, 2, 1, 1, 4, 5], fingers: [1, 2, 1, 1, 3, 4] },
    
    'G6sus2': { frets: [3, 0, 0, 2, 3, 3], fingers: [2, 0, 0, 1, 3, 4] },
    'G7sus2': { frets: [3, 0, 0, 2, 1, 1], fingers: [3, 0, 0, 2, 1, 1] },
    'Gm9#11': { frets: [3, 5, 3, 3, 6, 6], fingers: [1, 3, 1, 1, 4, 4] },
    'G13#11': { frets: [3, 2, 0, 0, 5, 7], fingers: [2, 1, 0, 0, 3, 4] },
    'Gmaj9#5': { frets: [3, 3, 0, 0, 0, 7], fingers: [2, 3, 0, 0, 0, 4] },
    'G7alt': { frets: [3, 2, 0, 0, 4, 2], fingers: [3, 2, 0, 0, 4, 1] },
    'G9#11': { frets: [3, 2, 0, 2, 4, 5], fingers: [2, 1, 0, 2, 3, 4] },
    'Gm13b5': { frets: [3, 4, 3, 3, 6, 7], fingers: [1, 2, 1, 1, 3, 4] },
    
    'A6sus2': { frets: [-1, 0, 2, 2, 0, 0], fingers: [0, 0, 1, 2, 0, 0] },
    'A7sus2': { frets: [-1, 0, 2, 0, 0, 0], fingers: [0, 0, 1, 0, 0, 0] },
    'Am9#11': { frets: [-1, 0, 2, 0, 1, 4], fingers: [0, 0, 2, 0, 1, 4] },
    'A13#11': { frets: [-1, 0, 2, 1, 2, 5], fingers: [0, 0, 2, 1, 3, 4] },
    'Amaj9#5': { frets: [-1, 0, 3, 1, 2, 4], fingers: [0, 0, 3, 1, 2, 4] },
    'A7alt': { frets: [-1, 0, 1, 0, 2, 1], fingers: [0, 0, 1, 0, 3, 2] },
    'A9#11': { frets: [-1, 0, 2, 4, 2, 5], fingers: [0, 0, 1, 3, 2, 4] },
    'Am13b5': { frets: [-1, 0, 1, 0, 1, 4], fingers: [0, 0, 1, 0, 1, 4] },
    
    'B6sus2': { frets: [-1, 2, 4, 4, 2, 2], fingers: [0, 1, 3, 4, 1, 2] },
    'B7sus2': { frets: [-1, 2, 4, 2, 2, 2], fingers: [0, 1, 4, 2, 2, 3] },
    'Bm9#11': { frets: [-1, 2, 0, 2, 0, 5], fingers: [0, 1, 0, 2, 0, 4] },
    'B13#11': { frets: [-1, 2, 4, 3, 4, 7], fingers: [0, 1, 2, 1, 3, 4] },
    'Bmaj9#5': { frets: [-1, 2, 5, 3, 4, 6], fingers: [0, 1, 4, 2, 3, 4] },
    'B7alt': { frets: [-1, 2, 1, 2, 4, 2], fingers: [0, 2, 1, 3, 4, 2] },
    'B9#11': { frets: [-1, 2, 4, 2, 5, 7], fingers: [0, 1, 3, 2, 4, 4] },
    'Bm13b5': { frets: [-1, 2, 3, 2, 3, 6], fingers: [0, 1, 3, 2, 4, 4] }
};

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const romanNumerals = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'];
export const intervals = {
    // Basic Triads
    '': [0, 4, 7], 
    'm': [0, 3, 7], 
    'dim': [0, 3, 6], 
    'aug': [0, 4, 8], 
    'sus2': [0, 2, 7], 
    'sus4': [0, 5, 7], 
    
    // Seventh Chords
    '7': [0, 4, 7, 10], 
    'maj7': [0, 4, 7, 11], 
    'm7': [0, 3, 7, 10], 
    'm7b5': [0, 3, 6, 10], 
    'dim7': [0, 3, 6, 9], 
    'mMaj7': [0, 3, 7, 11], 
    'maj7#5': [0, 4, 8, 11], 
    '7#5': [0, 4, 8, 10], 
    '7b5': [0, 4, 6, 10], 
    '6': [0, 4, 7, 9], 
    'm6': [0, 3, 7, 9], 
    
    // Extended chords
    '9': [0, 4, 7, 10, 14], 
    'maj9': [0, 4, 7, 11, 14], 
    'm9': [0, 3, 7, 10, 14], 
    '11': [0, 4, 7, 10, 14, 17], 
    'm11': [0, 3, 7, 10, 14, 17], 
    'maj11': [0, 4, 7, 11, 14, 17], 
    '13': [0, 4, 7, 10, 14, 21], 
    'm13': [0, 3, 7, 10, 14, 21], 
    'maj13': [0, 4, 7, 11, 14, 21], 
    
    // Altered Dominants
    '7#9': [0, 4, 7, 10, 15],
    '7b9': [0, 4, 7, 10, 13],
    '13b9': [0, 4, 7, 10, 13, 21],
    '7sus4': [0, 5, 7, 10],
    '9sus4': [0, 5, 7, 10, 14],
    
    // Add Chords
    'add9': [0, 4, 7, 14],
    'madd9': [0, 3, 7, 14],
    'maj7#11': [0, 4, 7, 11, 18],
    '6/9': [0, 4, 7, 9, 14],
    'm6/9': [0, 3, 7, 9, 14],
    
    // More Altered/Complex
    '7#9#5': [0, 4, 8, 10, 15],
    '7b9b13': [0, 4, 7, 10, 13, 20],
    '7b13': [0, 4, 7, 10, 20],
    'maj7b5': [0, 4, 6, 11],
    'mMaj9': [0, 3, 7, 11, 14],
    'm7b9': [0, 3, 7, 10, 13],
    '7alt': [0, 4, 10, 13, 15], 
    '7#11': [0, 4, 7, 10, 18],
    
    // Misc
    'It+6': [0, 6, 8], 
    'Fr+6': [0, 2, 6, 8],
    'Ger+6': [0, 3, 6, 8],
};

const chordIntervals = {};

function generateChordIntervals() {
    Object.keys(chordDefinitions).forEach(fullName => {
        const rootMatch = fullName.match(/^([A-G][#b]?)(.*)$/);
        if (!rootMatch) return;
        const quality = rootMatch[2];
        if (intervals[quality] && !chordIntervals[quality]) {
            chordIntervals[quality] = { name: quality, intervals: intervals[quality] };
        }
    });
    chordIntervals['Major'] = { name: 'Major', intervals: intervals['']};
}

generateChordIntervals();

export { chordIntervals };

export function transposeChord(chord, fromKey, toKey) {
    const fromIndex = notes.indexOf(fromKey);
    const toIndex = notes.indexOf(toKey);
    const interval = (toIndex - fromIndex + 12) % 12;
    
    const match = chord.match(/^([A-G][#b]?)(.*)$/);
    if (!match) return chord;
    
    const [, root, quality] = match;
    const rootIndex = notes.indexOf(root);
    const newRootIndex = (rootIndex + interval) % 12;
    const newRoot = notes[newRootIndex];
    
    return newRoot + quality;
}

export function getRomanNumeral(chord, key) {
    const keyIndex = notes.indexOf(key);
    const match = chord.match(/^([A-G][#b]?)/);
    if (!match) return '?';
    
    const chordRoot = match[1];
    const chordIndex = notes.indexOf(chordRoot);
    const degree = (chordIndex - keyIndex + 12) % 12;
    
    const romanMap = {
        0: 'I', 1: 'bII', 2: 'II', 3: 'bIII', 4: 'III',
        5: 'IV', 6: 'bV', 7: 'V', 8: 'bVI', 9: 'VI',
        10: 'bVII', 11: 'VII'
    };
    
    let roman = romanMap[degree];
    
    if (chord.includes('m') && !chord.includes('maj')) {
        roman = roman.toLowerCase();
    }
    
    if (chord.includes('dim')) roman += '°';
    if (chord.includes('aug')) roman += '+';
    if (chord.includes('7')) roman += '7';
    if (chord.includes('sus')) roman += 'sus';
    
    return roman;
}

export function getIntervals(chord) {
    const baseChord = chord.replace(/[#b]/g, '').replace(/\d+/g, '');
    const chordType = baseChord.substring(1);
    
    if (intervals[chord]) {
        return intervals[chord];
    }
    
    if (chordType.includes('m') && !chordType.includes('maj')) {
        return [0, 3, 7];
    } else if (chordType.includes('dim')) {
        return [0, 3, 6];
    } else if (chordType.includes('aug')) {
        return [0, 4, 8];
    } else if (chordType.includes('7')) {
        return [0, 4, 7, 10];
    } else if (chordType.includes('maj7')) {
        return [0, 4, 7, 11];
    } else if (chordType.includes('sus2')) {
        return [0, 2, 7];
    } else if (chordType.includes('sus4')) {
        return [0, 5, 7];
    }
    
    return [0, 4, 7]; 
}

export const strummingPatterns = {
    'Down-Up': {
        name: 'Basic Down-Up',
        pattern: 'D - U - D - U -',
        description: 'Simple down-up strumming pattern',
        tempo: 'Moderate (80-120 BPM)'
    },
    'Island': {
        name: 'Island Strum',
        pattern: 'D - D U - U D U',
        description: 'Relaxed island/reggae feel',
        tempo: 'Slow to Moderate (70-100 BPM)'
    },
    'Folk': {
        name: 'Folk Strum',
        pattern: 'D - D U D U D U',
        description: 'Classic folk strumming pattern',
        tempo: 'Moderate (90-130 BPM)'
    },
    'Ballad': {
        name: 'Ballad Strum',
        pattern: 'D - - - D - U -',
        description: 'Slow, emotional ballad pattern',
        tempo: 'Slow (60-80 BPM)'
    },
    'Country': {
        name: 'Country Strum',
        pattern: 'D - D - D U - U',
        description: 'Country shuffle pattern',
        tempo: 'Moderate to Fast (100-140 BPM)'
    },
    'Waltz': {
        name: 'Waltz (3/4)',
        pattern: 'D - - U - -',
        description: 'Triple meter waltz pattern',
        tempo: 'Moderate (90-150 BPM)'
    },
    'Punk': {
        name: 'Punk Rock',
        pattern: 'D D D D D D D D',
        description: 'Fast downstroke pattern',
        tempo: 'Fast (140-180 BPM)'
    },
    'Swing': {
        name: 'Swing Feel',
        pattern: 'D - U D - U - -',
        description: 'Jazz swing strumming',
        tempo: 'Moderate (100-140 BPM)'
    },
    'Quarter-Notes': {
        name: 'Quarter Notes',
        pattern: 'D D D D',
        description: '↓ ↓ ↓ ↓ (on beats 1,2,3,4)',
        tempo: 'Any tempo'
    },
    'Eighth-Notes': {
        name: 'Full Eighths',
        pattern: 'D U D U D U D U',
        description: '↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ (eighth notes)',
        tempo: 'Moderate (80-140 BPM)'
    },
    'Syncopated': {
        name: 'Syncopated',
        pattern: 'D D U U D U',
        description: '↓ ↓ ↑ ↑ ↓ ↑ (eighth-note syncopation)',
        tempo: 'Moderate (90-120 BPM)'
    },
    'Mixed-Beats': {
        name: 'Mixed Beats',
        pattern: 'D DU UD',
        description: '↓ ↓↑ ↑↓ (one measure of mixed beats)',
        tempo: 'Moderate (100-130 BPM)'
    },
    'Eight-Downs': {
        name: 'Eight Downstrokes',
        pattern: 'D D D D D D D D',
        description: '↓ repeated eight eighth-note down-strums',
        tempo: 'Fast (120-160 BPM)'
    },
    'Muted-Offbeats': {
        name: 'Muted Off-beats',
        pattern: 'D U X U D U X U',
        description: '↓ ↑ X ↑ ↓ ↑ X ↑ (muted off-beats)',
        tempo: 'Moderate (90-130 BPM)'
    },
    'Riptide-Style': {
        name: 'Riptide Style',
        pattern: 'D D U U D U D U',
        description: 'Same as syncopated ("Riptide" style)',
        tempo: 'Moderate (100-120 BPM)'
    },
    'Sixteenth-Notes': {
        name: 'Sixteenth Notes',
        pattern: 'D e & a D e & a D e & a D e & a',
        description: '↓ e & a ↓ e & a ↓ e & a ↓ e & a',
        tempo: 'Fast (120-180 BPM)'
    },
    'Upstroke-Only': {
        name: 'Upstroke Only',
        pattern: 'U U U U',
        description: '↑ ↑ ↑ ↑ (eighth-note up-beats only)',
        tempo: 'Moderate (80-120 BPM)'
    },
    'Triplets': {
        name: 'Triplets',
        pattern: 'D U D D U D D U D D U D',
        description: '↓ ↑ ↓ (per beat—for beat triplets)',
        tempo: 'Moderate (90-140 BPM)'
    },
    'Calypso': {
        name: 'Calypso',
        pattern: 'D DU U-D-U',
        description: '↓ ↓↑ ↑-↓-↑ (lively calypso feel)',
        tempo: 'Moderate (100-140 BPM)'
    },
    'Folk-Bass': {
        name: 'Folk Bass Strum',
        pattern: 'B D U D U',
        description: 'Bass pick (low), then ↓ ↑ on "&"s',
        tempo: 'Moderate (80-120 BPM)'
    },
    'Percussive': {
        name: 'Percussive',
        pattern: 'D X D X',
        description: '↓ X ↓ X (accented muted beats 2 & 4)',
        tempo: 'Moderate (90-130 BPM)'
    },
    'Bass-Variation': {
        name: 'Bass + Strum',
        pattern: 'B D U B D U',
        description: 'Alternating bass (low) and pattern strums',
        tempo: 'Moderate (80-120 BPM)'
    },
    'Classic-Rock': {
        name: 'Classic Rock',
        pattern: 'D - D -',
        description: '↓ (miss) ↓ (miss) with accented 2 & 4',
        tempo: 'Fast (120-160 BPM)'
    },
    'Funk-RnB': {
        name: 'Funk/R&B Groove',
        pattern: 'D U X D U X U D',
        description: 'Muted syncopation over eighths',
        tempo: 'Moderate (90-130 BPM)'
    },
    'Gypsy-Rock': {
        name: 'Gypsy Rock',
        pattern: 'B X P X P X',
        description: 'Thumb hit + arpeggio (percussive folk)',
        tempo: 'Fast (130-170 BPM)'
    },
    'Pop-Punk': {
        name: 'Pop-Punk Fast',
        pattern: 'D D D D D D D D',
        description: 'Fast ↓ ↓ ↓ ↓ (eighth- or sixteenth-note pace)',
        tempo: 'Very Fast (160-200 BPM)'
    },
    'Bossa-Nova': {
        name: 'Bossa Nova',
        pattern: 'D - U D U - D U',
        description: 'Syncopated alternating strum often with bass',
        tempo: 'Moderate (100-130 BPM)'
    },
    'New-Orleans': {
        name: 'New Orleans Groove',
        pattern: 'DDU UD UDD',
        description: '↓↓↑ ↑↓ ↑↓↓ (rhythmic flow in one bar)',
        tempo: 'Moderate (90-120 BPM)'
    },
    'Swing-Rhythm': {
        name: 'Swing Rhythm',
        pattern: 'D~ U D~ U',
        description: 'Dashed rhythm: long ↓, short ↑ (triplet swing feel)',
        tempo: 'Moderate (100-140 BPM)'
    },
    'Punk-Eighths': {
        name: 'Punk All Downstrokes',
        pattern: 'D D D D D D D D',
        description: '↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ (aggressive and constant)',
        tempo: 'Very Fast (150-200 BPM)'
    }
};

export const pickingPatterns = {
    'PIMA': { name: 'P I M A', description: 'Basic ascending pattern (classical, folk)' },
    'PAMI': { name: 'P A M I', description: 'Reverse pattern (descending)' },
    'PIMI': { name: 'P I M I', description: 'Travis-picking variation' },
    'PMIM': { name: 'P M I M', description: 'Smooth cyclic feel' },
    'PIAM': { name: 'P I A M', description: 'Broken chord pattern' },
    'PIMAMI': { name: 'P I M A M I', description: '6-note arpeggio, classical or romantic' },
    'PIMPIM': { name: 'P I M P I M', description: 'Repeating thumb-integrated arpeggio' },
    'PMAMIM': { name: 'P M A M I M', description: 'Used in classical tremolo simulations' },
    'P(IM)(AM)': { name: 'P (I M) (A M)', description: 'Syncopated roll (folk, pop)' },
    'PMIPMI': { name: 'P M I P M I', description: 'Common 6/8 arpeggio feel' },
    'PAIM': { name: 'P A I M', description: 'Elegant roll, often used in nylon/classical' },
    'PMIMAMI': { name: 'P M I M A M I', description: 'Flamenco or Spanish style feel' },
    'PXPIMA': { name: 'P X P I M A', description: 'Thumb hit + arpeggio (percussive folk)' },
    'TIMA': { name: 'T I M A', description: 'Hybrid-picking base pattern' },
    'TAMI': { name: 'T A M I', description: 'Reverse hybrid-picking roll' },
    'T(IM)T(IM)': { name: 'T (I M) T (I M)', description: 'Hybrid alternate pattern' },
    'TITMTA': { name: 'T I T M T A', description: "Chicken-pickin' style (country/telecaster)" },
    'PAMAI': { name: 'P A M A I', description: 'Romantic cyclic pattern' },
    'PMAPMA': { name: 'P M A P M A', description: 'Alternating thumb & roll (folk/pop)' },
    'P(IMA)(AMI)': { name: 'P (I M A) (A M I)', description: '3-finger rolls with reversals' },
    'PIMAIM': { name: 'P I M A I M', description: 'Spanish guitar rhythm cycle' },
    'PAMXPAM': { name: 'P A M X P A M', description: 'Flamenco rasgueado imitation' },
    'TIAITI': { name: 'T I A I T I A', description: 'Hybrid reverse roll with anchor' },
    'TIMTIM': { name: 'T I M T I M', description: 'Fast hybrid-picking flat rolls' },
    'P(IA)P(IA)': { name: 'P (I A) P (I A)', description: 'Alternating bass with double pluck' },
    'PIMPMI': { name: 'P I M P M I', description: 'Inverted Travis pattern' },
    'PMAPAM': { name: 'P M A P A M', description: 'Symmetrical roll (used in waltz feels)' },
    'TIMAMI': { name: 'T I M A M I', description: 'Hybrid cascade roll' },
    'PIXMI': { name: 'P I X M I', description: 'Percussive thumb & finger integration' },
    'PMIAX': { name: 'P M I A X', description: 'Classical arpeggio with slap' },
    'PIMAI': { name: 'P I M A I', description: '5-note classical pattern' },
    'PMIAMP': { name: 'P M I A M P', description: 'Ending on thumb creates looping motion' },
    'PI(MA)': { name: 'P I (M A)', description: 'Delay pluck effect, often used in folk/pop' },
    'TITATM': { name: 'T I T A T M', description: 'Country gallop hybrid pattern' },
    'PXPXPX': { name: 'P X P X P X', description: 'Percussive fingerstyle, "slap" grooves' },
    'PAMIMA': { name: 'P A M I M A', description: 'Arpeggio roll with inside repetition' },
    'TIATIA': { name: 'T I A T I A', description: 'Fast hybrid rolls (bluegrass)' },
    'PIMXMI': { name: 'P I M X M I', description: 'Percussive syncopated arpeggio' },
    'T(IMA)': { name: 'T (I M A)', description: 'Strum and pluck hybrid pattern' },
    'PMA(tremolo)': { name: 'P M A (tremolo)', description: 'Classical tremolo (alternating treble)' },
    'PAMIPAMI': { name: 'P A M I P A M I', description: 'Full cycle pattern' },
    'TMITMI': { name: 'T M I T M I', description: 'Smooth hybrid loop' },
    'PIAXPIA': { name: 'P I A X P I A', description: 'Percussive touch with repeat' },
    'PIMA(hold)': { name: 'P I M A (hold)', description: 'Chord pluck and sustain' },
    'TITMTI': { name: 'T I T M T I', description: 'Hybrid triplet licks' },
    'PXPXIMA': { name: 'P X P X I M A', description: 'Percussion + arpeggio for dynamic feel' },
    'P(IMA)P(AMI)': { name: 'P (I M A) P (A M I)', description: 'Forward & backward rolls' },
    'TXTXIM': { name: 'T X T X I M', description: 'Percussive hybrid rhythm' },
    'PAIMIA': { name: 'P A I M I A', description: 'Sweet ascending-descent' },
    'TIXAIM': { name: 'T I X A I M', description: 'Hybrid-pick with slap/percussive treble' }
};

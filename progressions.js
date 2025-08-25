export const chordProgressions = [
    // Pop Progressions
    { name: 'I-V-vi-IV (Pop Progression)', chords: ['C', 'G', 'Am', 'F'], category: 'Pop', description: 'The most popular progression in modern music' },
    { name: 'vi-IV-I-V (Pop Alternative)', chords: ['Am', 'F', 'C', 'G'], category: 'Pop', description: 'Alternative order of the pop progression' },
    { name: 'I-vi-IV-V (50s Progression)', chords: ['C', 'Am', 'F', 'G'], category: 'Pop', description: 'Classic 1950s doo-wop progression' },
    { name: 'vi-V-IV-V', chords: ['Am', 'G', 'F', 'G'], category: 'Pop', description: 'Emotional pop ballad progression' },
    { name: 'I-iii-vi-IV', chords: ['C', 'Em', 'Am', 'F'], category: 'Pop', description: 'Gentle pop progression' },
    { name: 'I-IV-vi-V', chords: ['C', 'F', 'Am', 'G'], category: 'Pop', description: 'Uplifting pop progression' },
    
    // Rock Progressions
    { name: 'I-VII-IV (Rock Power)', chords: ['C', 'Bb', 'F'], category: 'Rock', description: 'Powerful three-chord rock progression' },
    { name: 'i-VI-VII (Minor Rock)', chords: ['Am', 'F', 'G'], category: 'Rock', description: 'Dark minor rock progression' },
    { name: 'I-V-IV-I (Rock Turnaround)', chords: ['C', 'G', 'F', 'C'], category: 'Rock', description: 'Classic rock turnaround' },
    { name: 'vi-III-VII-IV', chords: ['Am', 'C', 'G', 'F'], category: 'Rock', description: 'Alternative rock progression' },
    { name: 'I-bVII-IV-I', chords: ['C', 'Bb', 'F', 'C'], category: 'Rock', description: 'Anthemic rock progression' },
    { name: 'i-v-VI-VII', chords: ['Am', 'Em', 'F', 'G'], category: 'Rock', description: 'Minor key rock progression' },
    
    // Blues Progressions
    { name: '12-Bar Blues (Basic)', chords: ['C', 'C', 'C', 'C', 'F', 'F', 'C', 'C', 'G', 'F', 'C', 'G'], category: 'Blues', description: 'Standard 12-bar blues progression' },
    { name: '12-Bar Blues (7ths)', chords: ['C7', 'C7', 'C7', 'C7', 'F7', 'F7', 'C7', 'C7', 'G7', 'F7', 'C7', 'G7'], category: 'Blues', description: '12-bar blues with dominant 7ths' },
    { name: 'Quick Change Blues', chords: ['C7', 'F7', 'C7', 'C7', 'F7', 'F7', 'C7', 'C7', 'G7', 'F7', 'C7', 'G7'], category: 'Blues', description: '12-bar with quick IV chord change' },
    { name: 'Minor Blues', chords: ['Cm', 'Cm', 'Cm', 'Cm', 'Fm', 'Fm', 'Cm', 'Cm', 'G7', 'Fm', 'Cm', 'G7'], category: 'Blues', description: 'Minor key blues progression' },
    
    // Jazz Progressions
    { name: 'ii-V-I (Major)', chords: ['Dm7', 'G7', 'Cmaj7'], category: 'Jazz', description: 'Most important jazz progression' },
    { name: 'ii-V-i (Minor)', chords: ['Dm7b5', 'G7', 'Cm'], category: 'Jazz', description: 'Minor ii-V-I progression' },
    { name: 'I-vi-ii-V (Rhythm Changes)', chords: ['Cmaj7', 'Am7', 'Dm7', 'G7'], category: 'Jazz', description: 'Jazz standard rhythm changes' },
    { name: 'iii-vi-ii-V', chords: ['Em7', 'A7', 'Dm7', 'G7'], category: 'Jazz', description: 'Extended jazz progression' },
    { name: 'I-IV-vii°-iii-vi-ii-V-I', chords: ['Cmaj7', 'Fmaj7', 'Bm7b5', 'Em7', 'Am7', 'Dm7', 'G7', 'Cmaj7'], category: 'Jazz', description: 'Complex jazz progression' },
    
    // Folk Progressions
    { name: 'I-V-vi-iii-IV-I-IV-V', chords: ['C', 'G', 'Am', 'Em', 'F', 'C', 'F', 'G'], category: 'Folk', description: 'Classic folk progression' },
    { name: 'vi-V-IV-V (Folk)', chords: ['Am', 'G', 'F', 'G'], category: 'Folk', description: 'Simple folk progression' },
    { name: 'I-iii-IV-V', chords: ['C', 'Em', 'F', 'G'], category: 'Folk', description: 'Traditional folk progression' },
    { name: 'vi-IV-I-V (Ballad)', chords: ['Am', 'F', 'C', 'G'], category: 'Folk', description: 'Folk ballad progression' },
    
    // Country Progressions
    { name: 'I-I-I-I-IV-IV-I-I-V-V-I-I', chords: ['C', 'C', 'C', 'C', 'F', 'F', 'C', 'C', 'G', 'G', 'C', 'C'], category: 'Country', description: 'Traditional country progression' },
    { name: 'I-V-I-I-IV-I-V-V', chords: ['C', 'G', 'C', 'C', 'F', 'C', 'G', 'G'], category: 'Country', description: 'Country shuffle progression' },
    { name: 'vi-V-IV-I (Country Pop)', chords: ['Am', 'G', 'F', 'C'], category: 'Country', description: 'Modern country pop progression' },
    
    // Gospel Progressions
    { name: 'I-V-vi-iii-IV-I-ii-V', chords: ['C', 'G', 'Am', 'Em', 'F', 'C', 'Dm', 'G'], category: 'Gospel', description: 'Classic gospel progression' },
    { name: 'vi-IV-I-V-iii-vi-ii-V', chords: ['Am', 'F', 'C', 'G', 'Em', 'Am', 'Dm', 'G'], category: 'Gospel', description: 'Extended gospel progression' },
    
    // Funk Progressions
    { name: 'i-i-i-i (Funk Vamp)', chords: ['Am', 'Am', 'Am', 'Am'], category: 'Funk', description: 'Single chord funk vamp' },
    { name: 'i-IV-V-i (Funk)', chords: ['Am', 'Dm', 'Em', 'Am'], category: 'Funk', description: 'Minor funk progression' },
    { name: 'I7-IV7-I7-I7', chords: ['C7', 'F7', 'C7', 'C7'], category: 'Funk', description: 'Funk with dominant 7ths' },
    
    // R&B Progressions
    { name: 'vi-IV-I-V (R&B)', chords: ['Am', 'F', 'C', 'G'], category: 'R&B', description: 'Classic R&B progression' },
    { name: 'I-V-vi-IV-iii-vi-ii-V', chords: ['C', 'G', 'Am', 'F', 'Em', 'Am', 'Dm', 'G'], category: 'R&B', description: 'Extended R&B progression' },
    
    // Electronic/EDM Progressions
    { name: 'i-VI-III-VII (EDM)', chords: ['Am', 'F', 'C', 'G'], category: 'Electronic', description: 'Popular EDM progression' },
    { name: 'vi-IV-I-V (Dance)', chords: ['Am', 'F', 'C', 'G'], category: 'Electronic', description: 'Dance music progression' },
    
    // Alternative Progressions
    { name: 'I-bVII-IV-I (Alt Rock)', chords: ['C', 'Bb', 'F', 'C'], category: 'Alternative', description: 'Alternative rock progression' },
    { name: 'vi-V-IV-III', chords: ['Am', 'G', 'F', 'Em'], category: 'Alternative', description: 'Descending alternative progression' },
    
    // Metal Progressions
    { name: 'i-VI-VII (Metal)', chords: ['Am', 'F', 'G'], category: 'Metal', description: 'Basic metal progression' },
    { name: 'i-bVII-bVI-bVII', chords: ['Am', 'G', 'F', 'G'], category: 'Metal', description: 'Metal progression with flats' },
    
    // Bossa Nova Progressions
    { name: 'Imaj7-IVmaj7-vii°-iii-vi', chords: ['Cmaj7', 'Fmaj7', 'Bm7b5', 'Em7', 'Am7'], category: 'Bossa Nova', description: 'Smooth bossa nova progression' },
    { name: 'ii-V-I-vi (Bossa)', chords: ['Dm7', 'G7', 'Cmaj7', 'Am7'], category: 'Bossa Nova', description: 'Bossa nova jazz progression' },
    
    // Reggae Progressions
    { name: 'vi-IV-I-V (Reggae)', chords: ['Am', 'F', 'C', 'G'], category: 'Reggae', description: 'Classic reggae progression' },
    { name: 'i-VII-VI-VII', chords: ['Am', 'G', 'F', 'G'], category: 'Reggae', description: 'Minor reggae progression' },
    
    // More Pop Variations
    { name: 'I-iii-vi-V', chords: ['C', 'Em', 'Am', 'G'], category: 'Pop', description: 'Pop ballad variation' },
    { name: 'vi-iii-IV-I', chords: ['Am', 'Em', 'F', 'C'], category: 'Pop', description: 'Emotional pop progression' },
    { name: 'I-vi-iii-V', chords: ['C', 'Am', 'Em', 'G'], category: 'Pop', description: 'Gentle pop progression' },
    
    // Jazz Extensions
    { name: 'Imaj7-vi7-ii7-V7', chords: ['Cmaj7', 'Am7', 'Dm7', 'G7'], category: 'Jazz', description: 'Jazz with all 7th chords' },
    { name: 'iii-VI-ii-V', chords: ['Em7', 'A7', 'Dm7', 'G7'], category: 'Jazz', description: 'Circle of fifths progression' },
    
    // Additional Rock
    { name: 'I-IV-V-IV (Rock)', chords: ['C', 'F', 'G', 'F'], category: 'Rock', description: 'Classic rock progression' },
    { name: 'vi-IV-V-vi', chords: ['Am', 'F', 'G', 'Am'], category: 'Rock', description: 'Minor rock progression' },
    
    // More Blues
    { name: 'Stormy Monday', chords: ['C7', 'F7', 'C7', 'Gm7', 'F7', 'F7', 'Em7', 'A7', 'Dm7', 'G7', 'Em7', 'A7'], category: 'Blues', description: 'Jazz blues progression' },
    { name: 'Bird Blues', chords: ['Cmaj7', 'Fm7', 'C7', 'C7', 'F7', 'F7', 'C7', 'Em7', 'A7', 'Dm7', 'G7', 'Em7'], category: 'Blues', description: 'Charlie Parker blues' },
    
    // World Music
    { name: 'i-VII-i-VII (Flamenco)', chords: ['Am', 'G', 'Am', 'G'], category: 'World', description: 'Flamenco progression' },
    { name: 'i-bII-bIII-IV', chords: ['Am', 'Bb', 'C', 'Dm'], category: 'World', description: 'Eastern European progression' },
    
    // Indie/Alternative
    { name: 'vi-V-IV-V (Indie)', chords: ['Am', 'G', 'F', 'G'], category: 'Indie', description: 'Indie rock staple' },
    { name: 'I-bVII-bVI-bVII (Indie)', chords: ['C', 'Bb', 'Ab', 'Bb'], category: 'Indie', description: 'Alternative indie progression' },

    // Neo-Soul
    { name: 'i-v-iv (Neo-Soul Minor)', chords: ['Am7', 'Em7', 'Dm7'], category: 'Neo-Soul', description: 'Smooth minor Neo-Soul groove' },
    { name: 'Imaj7-iii7-vi7 (Neo-Soul Major)', chords: ['Cmaj7', 'Em7', 'Am7'], category: 'Neo-Soul', description: 'Lush major Neo-Soul progression' },
    { name: 'ii7-V7-Imaj7-IVmaj7', chords: ['Dm7', 'G7', 'Cmaj7', 'Fmaj7'], category: 'Neo-Soul', description: 'Classic Neo-Soul turnaround' },
    { name: 'vi-bVI-V-i', chords: ['Am7', 'Abmaj7', 'G7', 'Am7'], category: 'Neo-Soul', description: 'Chromatic Neo-Soul movement' },
    { name: 'I-V/ii-ii-V', chords: ['Cmaj7', 'A7', 'Dm7', 'G7'], category: 'Neo-Soul', description: 'Secondary dominant in Neo-Soul' },

    // Ambient/Cinematic
    { name: 'i-VI-iv-v (Ambient Minor)', chords: ['Am', 'F', 'Dm', 'Em'], category: 'Ambient', description: 'Spacious and atmospheric minor progression' },
    { name: 'I-IV-vi-V (Ambient Major)', chords: ['C', 'F', 'Am', 'G'], category: 'Ambient', description: 'Dreamy and open major progression' },
    { name: 'I-bVII-IV-I (Cinematic)', chords: ['C', 'Bb', 'F', 'C'], category: 'Film Score', description: 'Epic and heroic film score sound' },
    { name: 'i-iv-v-VI (Cinematic Minor)', chords: ['Am', 'Dm', 'Em', 'F'], category: 'Film Score', description: 'Tense and dramatic minor film progression' },
    { name: 'Lydian I-II-V-I', chords: ['C', 'D', 'G', 'C'], category: 'Film Score', description: 'Bright and magical Lydian mode progression' },

    // Classical Inspired
    { name: 'Canon in D', chords: ['C', 'G', 'Am', 'Em', 'F', 'C', 'F', 'G'], category: 'Classical', description: 'Based on Pachelbel\'s Canon' },
    { name: 'Circle of Fifths', chords: ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'B', 'E', 'A', 'D', 'G'], category: 'Classical', description: 'Full circle of fifths progression' },
    { name: 'i-V-i-iv-V-i (Minor Cadence)', chords: ['Am', 'E', 'Am', 'Dm', 'E', 'Am'], category: 'Classical', description: 'Classic minor key cadence' },
    { name: 'I-IV-V-I (Major Cadence)', chords: ['C', 'F', 'G', 'C'], category: 'Classical', description: 'Perfect cadence in a major key' },
    { name: 'Neapolitan Progression', chords: ['Am', 'Bb', 'E7', 'Am'], category: 'Classical', description: 'Dramatic Neapolitan (bII) chord' },
    
    // More Jazz Progressions
    { name: 'Take Five', chords: ['Ebm7', 'Bbm7', 'Ebm7', 'Ab7', 'Dbmaj7'], category: 'Jazz', description: 'Progression from the Dave Brubeck classic' },
    { name: 'So What', chords: ['Dm7', 'Dm7', 'Dm7', 'Dm7', 'Ebm7', 'Ebm7', 'Dm7', 'Dm7'], category: 'Jazz', description: 'Based on Miles Davis\' modal jazz tune' },
    { name: 'Autumn Leaves', chords: ['Am7', 'D7', 'Gmaj7', 'Cmaj7', 'F#m7b5', 'B7', 'Em'], category: 'Jazz', description: 'Standard jazz progression' },
    { name: 'Fly Me to the Moon', chords: ['Am7', 'Dm7', 'G7', 'Cmaj7', 'Fmaj7', 'Bm7b5', 'E7', 'Am7'], category: 'Jazz', description: 'Classic jazz standard changes' },
    { name: 'Coltrane Changes (Giant Steps)', chords: ['Cmaj7', 'Eb7', 'Abmaj7', 'B7', 'Emaj7', 'G7', 'Cmaj7'], category: 'Jazz', description: 'John Coltrane\'s challenging progression' },
    
    // Additional Pop/Rock
    { name: 'I-V-ii-IV', chords: ['C', 'G', 'Dm', 'F'], category: 'Pop', description: 'Modern pop progression' },
    { name: 'IV-I-V-vi', chords: ['F', 'C', 'G', 'Am'], category: 'Pop', description: 'Common alternative to I-V-vi-IV' },
    { name: 'I-ii-iii-IV', chords: ['C', 'Dm', 'Em', 'F'], category: 'Pop', description: 'Ascending bassline pop progression' },
    { name: 'I-IV-I-V', chords: ['C', 'F', 'C', 'G'], category: 'Rock', description: 'Classic rock and roll progression' },
    { name: 'i-VII-VI-VII', chords: ['Am', 'G', 'F', 'G'], category: 'Rock', description: 'Also used in flamenco and rock' }
];

// Generate more variations programmatically
const generateVariations = () => {
    const additionalProgressions = [];
    
    // Generate inversions and extensions of popular progressions
    const popularProgressions = [
        { base: ['C', 'G', 'Am', 'F'], name: 'I-V-vi-IV' },
        { base: ['Am', 'F', 'C', 'G'], name: 'vi-IV-I-V' },
        { base: ['C', 'Am', 'F', 'G'], name: 'I-vi-IV-V' }
    ];
    
    popularProgressions.forEach(prog => {
        // Add 7th variations
        const with7ths = prog.base.map(chord => {
            if (chord === 'C') return 'Cmaj7';
            if (chord === 'G') return 'G7';
            if (chord === 'Am') return 'Am7';
            if (chord === 'F') return 'Fmaj7';
            return chord;
        });
        
        additionalProgressions.push({
            name: prog.name + ' (7ths)',
            chords: with7ths,
            category: 'Jazz',
            description: prog.name + ' with 7th chords'
        });
        
        // Add suspended variations
        const withSus = prog.base.map(chord => {
            if (Math.random() > 0.7) {
                return chord + 'sus2';
            }
            return chord;
        });
        
        additionalProgressions.push({
            name: prog.name + ' (Sus)',
            chords: withSus,
            category: 'Alternative',
            description: prog.name + ' with suspended chords'
        });
        
        // Add add9 variations
        const withAdd9 = prog.base.map(chord => {
            if (Math.random() > 0.6) {
                if (chord.includes('m')) return chord.replace('m', 'm(add9)');
                return chord + '(add9)';
            }
            return chord;
        });

        additionalProgressions.push({
            name: prog.name + ' (add9)',
            chords: withAdd9,
            category: 'Pop',
            description: prog.name + ' with added 9th chords'
        });
    });
    
    return additionalProgressions;
};

// Advanced substitution progressions
const advancedProgressions = [
    { name: 'iv (Minor Subdominant)', chords: ['C', 'Fm', 'C'], category: 'Advanced', description: 'Borrowed from parallel minor; adds poignancy. C Aeolian/C Dorian over Fm' },
    { name: 'bVI Modal Mixture', chords: ['C', 'Ab', 'G', 'C'], category: 'Advanced', description: 'Modal mixture from Aeolian; pre-dominant. C Aeolian/C Minor Pentatonic over bVI' },
    { name: 'bVII Mixolydian', chords: ['C', 'Bb', 'F', 'C'], category: 'Advanced', description: 'Mixolydian/Aeolian borrowing; tonic prolongation. C Mixolydian/C Major Pentatonic over bVII' },
    { name: 'bIII Borrowed', chords: ['C', 'Eb', 'F', 'C'], category: 'Advanced', description: 'Borrowed from minor; tonic substitute. C Aeolian/C Minor Scale over bIII' },
    { name: 'ii° Pre-dominant', chords: ['C', 'Ddim', 'G', 'C'], category: 'Advanced', description: 'Borrowed from Aeolian; pre-dominant tension. C Harmonic Minor over ii°' },
    { name: 'Neapolitan bII', chords: ['C', 'Db', 'G', 'C'], category: 'Advanced', description: 'Pre-dominant, dramatic, resolves to V. C Phrygian/C Neapolitan scale over bII' },
    { name: 'iv+ Augmented Subdominant', chords: ['C', 'F+', 'G', 'C'], category: 'Advanced', description: 'Chromatic subdominant leading to V. C Major/C Lydian over iv+' },
    { name: 'Borrowed Tonic Minor', chords: ['Cm', 'Fm', 'G', 'Cm'], category: 'Advanced', description: 'Parallel minor coloration. C Aeolian/C Minor Pentatonic' },
    { name: 'V7b9 Strong Dominant', chords: ['C', 'G7b9', 'C'], category: 'Advanced', description: 'Borrowed from minor; stronger dominant. C Harmonic Minor/C Phrygian Dominant' },
    { name: 'V7#9 Blues Color', chords: ['C', 'G7#9', 'C'], category: 'Advanced', description: 'Blues/jazz color; altered dominant. C Mixolydian b9 #9/C Blues Scale' },
    { name: 'V7b5 Altered', chords: ['C', 'G7b5', 'C'], category: 'Advanced', description: 'Altered dominant, chromatic tension. C Altered Scale/C Super Locrian' },
    { name: 'bVII7 Dominant Sub', chords: ['C', 'Bb7', 'F', 'C'], category: 'Advanced', description: 'Dominant substitute; blues/gospel. C Mixolydian/C Major Pentatonic over bVII7' },
    { name: 'Tritone Substitution', chords: ['C', 'Db7', 'C'], category: 'Advanced', description: 'Jazz device: replace V with bII7. C Lydian Dominant/C Altered' },
    { name: 'ii-V Tritone Sub', chords: ['C', 'Db7', 'Gb7', 'C'], category: 'Advanced', description: 'Replace ii–V with bii–bV. C Altered/C Harmonic Minor' },
    { name: 'Secondary Dominant V/V', chords: ['C', 'D7', 'G', 'C'], category: 'Advanced', description: 'Dominant of dominant. C Mixolydian/C Lydian over D7' },
    { name: 'Secondary Dominant V/ii', chords: ['C', 'A7', 'Dm', 'G', 'C'], category: 'Advanced', description: 'Tonicizes ii. C Mixolydian/C Lydian over A7' },
    { name: 'Secondary Dominant V/vi', chords: ['C', 'E7', 'Am', 'F', 'G', 'C'], category: 'Advanced', description: 'Prepares vi tonicization. C Mixolydian/C Lydian over E7' },
    { name: 'Secondary Dominant V/IV', chords: ['C', 'C7', 'F', 'C'], category: 'Advanced', description: 'Strengthens IV arrival. C Mixolydian/C Lydian over C7' },
    { name: 'vii°/V Leading-tone', chords: ['C', 'F#dim', 'G', 'C'], category: 'Advanced', description: 'Diminished resolves to V. C Harmonic Minor over F#°' },
    { name: 'vii°/ii Chromatic', chords: ['C', 'C#dim', 'Dm', 'G', 'C'], category: 'Advanced', description: 'Chromatic pre-dominant. C Harmonic Minor/C Dorian over ii' },
    { name: '#i°7 Passing Chord', chords: ['C', 'C#dim7', 'Dm', 'G', 'C'], category: 'Advanced', description: 'Chromatic passing I–ii. C Harmonic Minor/C Diminished' },
    { name: '#ivo7 to V', chords: ['C', 'F#dim7', 'G', 'C'], category: 'Advanced', description: 'Passing diminished leading to V. C Harmonic Minor/C Diminished' },
    { name: 'bVImaj7 Substitute', chords: ['C', 'Abmaj7', 'G', 'C'], category: 'Advanced', description: 'Borrowed major VI as vi substitute. C Aeolian/C Dorian over bVI' },
    { name: 'bIImaj7 Chromatic', chords: ['C', 'Dbmaj7', 'G', 'C'], category: 'Advanced', description: 'Tritone or chromatic predominant. C Phrygian/C Neapolitan' },
    { name: 'bIII7 Blues Sub', chords: ['C', 'Eb7', 'F', 'C'], category: 'Advanced', description: 'Blues substitution. C Mixolydian/C Major' },
    { name: 'V7(b5) Flat Five', chords: ['C', 'G7b5', 'C'], category: 'Advanced', description: 'Altered dominant with flat 5. C Altered Scale/C Super Locrian' },
    { name: 'I7sus4 Jazz Tonic', chords: ['C7sus4', 'F', 'G', 'C'], category: 'Advanced', description: 'Jazz tonic prolongation. C Mixolydian/C Major' },
    { name: 'V7(#9,b13) Full Alt', chords: ['C', 'G7#9b13', 'C'], category: 'Advanced', description: 'Fully altered dominant. C Altered Scale/C Super Locrian' },
    { name: 'Augmented Sixth (Italian)', chords: ['C', 'Ab', 'F#'], category: 'Advanced', description: 'Predominant → V. C Italian Augmented Sixth Scale' },
    { name: 'Augmented Sixth (French)', chords: ['C', 'Ab', 'D', 'F#'], category: 'Advanced', description: 'Adds 2nd scale degree. C French Augmented Sixth Scale' },
    { name: 'Augmented Sixth (German)', chords: ['C', 'Ab', 'Eb', 'F#'], category: 'Advanced', description: 'Adds 3rd scale degree. C German Augmented Sixth Scale' },
    { name: 'Chromatic Mediant (Ab)', chords: ['C', 'Ab', 'F', 'G', 'C'], category: 'Advanced', description: 'bIII as mediant substitute. C Aeolian / C Lydian b3 over Ab' },
    { name: 'Chromatic Mediant (E)', chords: ['C', 'E', 'Am', 'F', 'C'], category: 'Advanced', description: 'Unexpected color. C Major / C Lydian over E' },
    { name: 'Flat Submediant (bVI → V)', chords: ['C', 'Ab', 'G', 'C'], category: 'Advanced', description: 'Dramatic descent. C Aeolian / C Major Pentatonic' },
    { name: 'Plagal iv-I', chords: ['C', 'Fm', 'C'], category: 'Advanced', description: 'Borrowed cadence. C Aeolian / C Dorian over Fm' },
    { name: 'I - bVII - IV', chords: ['C', 'Bb', 'F', 'C'], category: 'Advanced', description: 'Rock "backdoor" cadence. C Mixolydian / C Major Pentatonic' },
    { name: 'Backdoor Dominant (bVII7 → I)', chords: ['C', 'Bb7', 'C'], category: 'Advanced', description: 'Jazz/blues for V7-I. C Mixolydian / C Blues' },
    { name: 'iiø7', chords: ['C', 'Dm7b5', 'G7', 'C'], category: 'Advanced', description: 'Borrowed from minor key. C Locrian / C Dorian b2' },
    { name: 'Borrowed iv-V-I', chords: ['C', 'Fm', 'G', 'C'], category: 'Advanced', description: 'Enhances cadence. C Aeolian / C Dorian' },
    { name: 'iii Sub for I', chords: ['C', 'Em', 'F', 'G', 'C'], category: 'Advanced', description: 'Mediant tonic substitute. C Major / C Lydian over Em' },
    { name: 'vi Sub for I', chords: ['C', 'Am', 'F', 'G', 'C'], category: 'Advanced', description: 'Relative minor substitution. C Aeolian / C Dorian over Am' },
    { name: 'Imaj7 as IV of V', chords: ['Cmaj7', 'G7', 'C'], category: 'Advanced', description: 'Jazz tonic reinterpretation. C Major / C Lydian' },
    { name: 'Sus4 Chords', chords: ['C', 'Csus4', 'C'], category: 'Advanced', description: 'Suspension over tonic. C Major / C Mixolydian' },
    { name: 'Add6 Tonic (I6)', chords: ['C6', 'F', 'G', 'C'], category: 'Advanced', description: 'Tonic enrichment. C Major / C Lydian' },
    { name: 'Modal Interchange ii-V', chords: ['C', 'Dm7b5', 'G7alt', 'C'], category: 'Advanced', description: 'Minor ii-V from parallel key. C Harmonic Minor / C Dorian' },
    { name: 'I7 (dominant tonic)', chords: ['C7', 'F', 'G', 'C'], category: 'Advanced', description: 'Turns I into dominant-like pivot. C Mixolydian / C Blues' },
    { name: 'IVm7', chords: ['C', 'Fm7', 'C'], category: 'Advanced', description: 'Borrowed minor iv adds color. C Aeolian / C Dorian' },
    { name: 'V -> V+ (Augmented Dominant)', chords: ['C', 'Gaug', 'C'], category: 'Advanced', description: 'Augmented dominant intensifier. C Augmented / C Lydian Dominant' },
    { name: 'IV -> iv (Subdominant Minor)', chords: ['C', 'F', 'Fm', 'C'], category: 'Advanced', description: 'Minor subdominant softens cadence. C Aeolian / C Dorian' },
    { name: 'V7 -> V7(b9)', chords: ['Dm', 'G7b9', 'C'], category: 'Advanced', description: 'Intensifies dominant pull. C Harmonic Minor / C Phrygian Dominant' },
    { name: 'I -> I6/9', chords: ['C6/9', 'Fmaj7', 'G13', 'C'], category: 'Advanced', description: 'Jazz tonic enrichment. C Major / C Lydian' },
    { name: 'V -> V7(#11)', chords: ['Dm7', 'G7#11', 'Cmaj7'], category: 'Advanced', description: 'Lydian dominant substitution. C Lydian Dominant / C Altered' },
    { name: 'V -> V7alt', chords: ['Dm7', 'G7alt', 'Cmaj7'], category: 'Advanced', description: 'Altered dominant scale. ii-V-I. C Altered / C Super Locrian' },
    { name: 'V7 -> V13', chords: ['Dm7', 'G13', 'Cmaj7'], category: 'Advanced', description: 'Extended dominant chord. ii-V-I. C Mixolydian / C Lydian Dominant' }
];

// Additional comprehensive progressions to double the count
const additionalProgressions = [
    // Modal Progressions
    { name: 'Dorian i-IV-i', chords: ['Am', 'D', 'Am'], category: 'Modal', description: 'Classic Dorian progression with major IV' },
    { name: 'Phrygian i-bII-i', chords: ['Em', 'F', 'Em'], category: 'Modal', description: 'Dark Phrygian progression' },
    { name: 'Lydian I-II-I', chords: ['C', 'D', 'C'], category: 'Modal', description: 'Bright Lydian with major II' },
    { name: 'Mixolydian I-bVII-IV', chords: ['G', 'F', 'C'], category: 'Modal', description: 'Classic Mixolydian rock progression' },
    { name: 'Aeolian i-bVI-bVII', chords: ['Am', 'F', 'G'], category: 'Modal', description: 'Natural minor progression' },
    { name: 'Locrian i°-bII-biii', chords: ['Bm7b5', 'C', 'Dm'], category: 'Modal', description: 'Unstable Locrian progression' },
    { name: 'Dorian Vamp', chords: ['Dm', 'G', 'Dm', 'G'], category: 'Modal', description: 'i-V Dorian vamp' },
    { name: 'Lydian Dominant', chords: ['G7#11', 'C'], category: 'Modal', description: 'Lydian dominant resolution' },
    { name: 'Phrygian Dominant', chords: ['E', 'F', 'G', 'Am'], category: 'Modal', description: 'Spanish/Middle Eastern progression' },
    { name: 'Mixolydian Blues', chords: ['A7', 'D7', 'G7', 'A7'], category: 'Modal', description: 'Mixolydian-based blues' },

    // Extended Jazz Progressions
    { name: 'Giant Steps (simplified)', chords: ['Gmaj7', 'Bb7', 'Ebmaj7', 'F#7', 'Bmaj7', 'D7', 'Gmaj7'], category: 'Jazz', description: 'Simplified Coltrane changes' },
    { name: 'Rhythm Changes A', chords: ['Cmaj7', 'Am7', 'Dm7', 'G7', 'Em7', 'Am7', 'Dm7', 'G7'], category: 'Jazz', description: 'A section of rhythm changes' },
    { name: 'Rhythm Changes B', chords: ['E7', 'Am7', 'D7', 'Dm7', 'G7'], category: 'Jazz', description: 'Bridge of rhythm changes' },
    { name: 'Turnaround i', chords: ['Cmaj7', 'E7', 'Am7', 'C7'], category: 'Jazz', description: 'Jazz turnaround progression' },
    { name: 'Turnaround ii', chords: ['Am7', 'D7', 'Dm7', 'G7'], category: 'Jazz', description: 'Minor turnaround' },
    { name: 'Modal Interchange', chords: ['Cmaj7', 'Fm7', 'Bb7', 'Cmaj7'], category: 'Jazz', description: 'Borrowed chords from parallel minor' },
    { name: 'Chromatic ii-V', chords: ['Dm7', 'Db7', 'Cmaj7'], category: 'Jazz', description: 'Tritone substitution' },
    { name: 'Extended Dominant', chords: ['Dm7', 'G13b9', 'Cmaj7'], category: 'Jazz', description: 'Extended altered dominant' },
    { name: 'Minor ii-V-i', chords: ['Dm7b5', 'G7alt', 'Cm6'], category: 'Jazz', description: 'Minor key ii-V-i' },
    { name: 'Jazz Ballad', chords: ['Cmaj7', 'A7', 'Dm7', 'G7sus4', 'G7', 'Em7', 'Am7', 'Dm7', 'G7'], category: 'Jazz', description: 'Sophisticated ballad progression' },

    // Electronic/EDM Extended
    { name: 'Trance Buildup', chords: ['Am', 'F', 'C', 'G', 'Am', 'F', 'G', 'Am'], category: 'Electronic', description: 'Classic trance progression' },
    { name: 'Deep House', chords: ['Dm', 'Bb', 'F', 'C'], category: 'Electronic', description: 'Deep house chord progression' },
    { name: 'Progressive House', chords: ['Am', 'Em', 'F', 'G'], category: 'Electronic', description: 'Progressive house buildup' },
    { name: 'Ambient Pad', chords: ['Cmaj7', 'Fmaj7', 'Am7', 'Gmaj7'], category: 'Electronic', description: 'Ambient pad progression' },
    { name: 'Dubstep Drop', chords: ['Dm', 'Bb', 'Gm', 'A7'], category: 'Electronic', description: 'Dubstep drop progression' },
    { name: 'Synthwave', chords: ['Am', 'F', 'G', 'Em'], category: 'Electronic', description: '80s synthwave progression' },
    { name: 'Chillout', chords: ['Fmaj7', 'G7', 'Em7', 'Am7'], category: 'Electronic', description: 'Chillout/downtempo' },
    { name: 'Techno Loop', chords: ['Cm', 'Gm', 'Cm', 'Gm'], category: 'Electronic', description: 'Minimal techno loop' },
    { name: 'UK Garage', chords: ['Bm', 'F#m', 'G', 'A'], category: 'Electronic', description: 'UK garage progression' },
    { name: 'Future Bass', chords: ['F', 'Am', 'Bb', 'C'], category: 'Electronic', description: 'Future bass chord progression' },

    // World Music Progressions
    { name: 'Celtic Modal', chords: ['Em', 'D', 'C', 'D'], category: 'World', description: 'Celtic Dorian progression' },
    { name: 'Klezmer', chords: ['Dm', 'A7', 'Dm', 'Gm'], category: 'World', description: 'Eastern European Klezmer' },
    { name: 'Arabic Maqam', chords: ['Dm', 'Eb', 'F', 'Gm'], category: 'World', description: 'Arabic maqam progression' },
    { name: 'Indian Raga', chords: ['Am', 'Bb', 'C', 'Dm'], category: 'World', description: 'Indian raga-inspired' },
    { name: 'Gypsy Swing', chords: ['Dm', 'A7', 'Dm', 'Bb7'], category: 'World', description: 'Gypsy jazz progression' },
    { name: 'African Highlife', chords: ['C', 'Am', 'F', 'G'], category: 'World', description: 'West African highlife' },
    { name: 'Balkan Dance', chords: ['Am', 'Dm', 'E', 'Am'], category: 'World', description: 'Balkan folk dance' },
    { name: 'Tango Argentino', chords: ['Am', 'E7', 'Am', 'Dm'], category: 'World', description: 'Argentine tango progression' },
    { name: 'Bossa Nova Extended', chords: ['Cmaj7', 'C6', 'Dm7', 'G7', 'Em7', 'A7', 'Dm7', 'G7'], category: 'World', description: 'Extended bossa nova' },
    { name: 'Samba', chords: ['C6', 'A7', 'Dm7', 'G7'], category: 'World', description: 'Brazilian samba progression' },

    // Hip-Hop/R&B Extended
    { name: 'Trap Progression', chords: ['F#m', 'A', 'E', 'D'], category: 'Hip-Hop', description: 'Modern trap progression' },
    { name: 'Boom Bap', chords: ['Am7', 'Dm7', 'G7', 'Cmaj7'], category: 'Hip-Hop', description: 'Classic boom bap hip-hop' },
    { name: 'Neo-Soul Extended', chords: ['Am9', 'D13', 'Gmaj7#11', 'Cmaj7'], category: 'Neo-Soul', description: 'Extended neo-soul harmony' },
    { name: 'Contemporary R&B', chords: ['Em7', 'Am7', 'Dmaj7', 'Gmaj7'], category: 'R&B', description: 'Modern R&B progression' },
    { name: 'Trap Soul', chords: ['Dm7', 'G7', 'Cmaj7', 'Am7'], category: 'R&B', description: 'Trap-influenced R&B' },
    { name: 'Old School R&B', chords: ['C7', 'F7', 'G7', 'C7'], category: 'R&B', description: 'Classic R&B progression' },
    { name: 'Motown', chords: ['C', 'Am', 'Dm', 'G'], category: 'R&B', description: 'Classic Motown progression' },
    { name: 'Funk Soul', chords: ['Dm7', 'G7', 'Cmaj7', 'A7'], category: 'Funk', description: 'Funk-soul hybrid' },
    { name: 'P-Funk', chords: ['Em7', 'A7', 'Dm7', 'G7'], category: 'Funk', description: 'Parliament-Funkadelic style' },
    { name: 'Afrobeat', chords: ['Am7', 'Dm7', 'G7', 'Cmaj7'], category: 'World', description: 'Afrobeat progression' },

    // Metal/Rock Extended
    { name: 'Death Metal', chords: ['Em', 'C', 'G', 'D'], category: 'Metal', description: 'Death metal progression' },
    { name: 'Black Metal', chords: ['Am', 'F', 'C', 'G'], category: 'Metal', description: 'Black metal tremolo progression' },
    { name: 'Progressive Metal', chords: ['Em', 'F#dim', 'G', 'Am'], category: 'Metal', description: 'Progressive metal complexity' },
    { name: 'Doom Metal', chords: ['Em', 'G', 'C', 'Am'], category: 'Metal', description: 'Slow doom progression' },
    { name: 'Power Metal', chords: ['C', 'G', 'Am', 'F', 'G'], category: 'Metal', description: 'Heroic power metal' },
    { name: 'Thrash Metal', chords: ['E5', 'G5', 'A5', 'F#5'], category: 'Metal', description: 'Fast thrash progression' },
    { name: 'Nu-Metal', chords: ['C5', 'Bb5', 'F5', 'G5'], category: 'Metal', description: 'Nu-metal power chords' },
    { name: 'Post-Rock', chords: ['Em', 'C', 'G', 'D', 'Am', 'C', 'G', 'B'], category: 'Alternative', description: 'Cinematic post-rock' },
    { name: 'Shoegaze', chords: ['Fmaj7', 'Cmaj7', 'Gmaj7', 'Am7'], category: 'Alternative', description: 'Dreamy shoegaze progression' },
    { name: 'Grunge', chords: ['G5', 'Bb5', 'C5', 'F5'], category: 'Alternative', description: 'Grunge power chord progression' },

    // Country Extended
    { name: 'Bluegrass', chords: ['G', 'C', 'G', 'D', 'G'], category: 'Country', description: 'Traditional bluegrass' },
    { name: 'Country Waltz', chords: ['C', 'F', 'G', 'C'], category: 'Country', description: '3/4 time country waltz' },
    { name: 'Outlaw Country', chords: ['E', 'A', 'B', 'E'], category: 'Country', description: 'Outlaw country progression' },
    { name: 'Country Rock', chords: ['A', 'D', 'E', 'A'], category: 'Country', description: 'Country rock hybrid' },
    { name: 'Nashville Number', chords: ['C', 'Am', 'F', 'G', 'C'], category: 'Country', description: 'Nashville session style' },
    { name: 'Honky Tonk', chords: ['C', 'C7', 'F', 'G7'], category: 'Country', description: 'Honky tonk piano style' },
    { name: 'Country Ballad', chords: ['G', 'Em', 'C', 'D', 'G'], category: 'Country', description: 'Emotional country ballad' },
    { name: 'Western Swing', chords: ['C', 'E7', 'F', 'G7'], category: 'Country', description: 'Western swing progression' },
    { name: 'Folk Country', chords: ['D', 'G', 'A', 'D'], category: 'Country', description: 'Folk-influenced country' },
    { name: 'Country Gospel', chords: ['G', 'C', 'D', 'G', 'Em', 'C', 'D', 'G'], category: 'Gospel', description: 'Country gospel progression' },

    // Punk/Hardcore Extended
    { name: 'Hardcore Punk', chords: ['A5', 'D5', 'G5', 'A5'], category: 'Punk', description: 'Aggressive hardcore progression' },
    { name: 'Pop Punk', chords: ['C', 'G', 'Am', 'F'], category: 'Punk', description: 'Melodic pop punk' },
    { name: 'Street Punk', chords: ['G5', 'C5', 'D5', 'G5'], category: 'Punk', description: 'Street punk progression' },
    { name: 'Ska Punk', chords: ['F', 'C', 'G', 'Am'], category: 'Punk', description: 'Ska-influenced punk' },
    { name: 'Emo', chords: ['Em', 'C', 'G', 'D'], category: 'Alternative', description: 'Emotional hardcore progression' },
    { name: 'Post-Hardcore', chords: ['Am', 'F', 'C', 'G'], category: 'Alternative', description: 'Post-hardcore complexity' },
    { name: 'Screamo', chords: ['Dm', 'Bb', 'F', 'C'], category: 'Alternative', description: 'Screamo progression' },
    { name: 'Crust Punk', chords: ['A5', 'F5', 'C5', 'G5'], category: 'Punk', description: 'Crust punk progression' },
    { name: 'Anarcho Punk', chords: ['E5', 'A5', 'B5', 'E5'], category: 'Punk', description: 'Anarcho punk style' },
    { name: 'Riot Grrrl', chords: ['C5', 'F5', 'G5', 'Am5'], category: 'Punk', description: 'Riot grrrl movement' },

    // Indie/Alternative Extended
    { name: 'Indie Folk', chords: ['C', 'Am', 'F', 'G'], category: 'Indie', description: 'Indie folk progression' },
    { name: 'Indie Pop', chords: ['F', 'Am', 'Bb', 'C'], category: 'Indie', description: 'Indie pop melody' },
    { name: 'Lo-Fi', chords: ['Dm7', 'G7', 'Cmaj7', 'Am7'], category: 'Indie', description: 'Lo-fi bedroom pop' },
    { name: 'Math Rock', chords: ['Em', 'F#dim', 'G', 'Am', 'B'], category: 'Alternative', description: 'Complex math rock' },
    { name: 'Post-Punk', chords: ['Am', 'F', 'G', 'C'], category: 'Alternative', description: 'Post-punk revival' },
    { name: 'Dream Pop', chords: ['Fmaj7', 'Cmaj7', 'Am7', 'Gmaj7'], category: 'Alternative', description: 'Ethereal dream pop' },
    { name: 'Chillwave', chords: ['Dm7', 'Gmaj7', 'Cmaj7', 'Fmaj7'], category: 'Electronic', description: 'Chillwave nostalgia' },
    { name: 'Vaporwave', chords: ['Dmaj7', 'Gmaj7', 'Cmaj7', 'Fmaj7'], category: 'Electronic', description: 'Vaporwave aesthetic' },
    { name: 'Bedroom Pop', chords: ['Cmaj7', 'Em7', 'Am7', 'Fmaj7'], category: 'Indie', description: 'Dreamy bedroom pop' },
    { name: 'Twee Pop', chords: ['C', 'F', 'Am', 'G'], category: 'Indie', description: 'Cute twee pop' },

    // Classical/Orchestral Extended
    { name: 'Pachelbel Variation', chords: ['D', 'A', 'Bm', 'F#m', 'G', 'D', 'G', 'A'], category: 'Classical', description: 'Variation on Canon in D' },
    { name: 'Bach Chorale', chords: ['C', 'F', 'G', 'C', 'Am', 'Dm', 'G', 'C'], category: 'Classical', description: 'Bach chorale style' },
    { name: 'Beethoven Style', chords: ['C', 'G7', 'C', 'F', 'C', 'G', 'C'], category: 'Classical', description: 'Classical period style' },
    { name: 'Mozart Sonata', chords: ['C', 'G', 'Am', 'F', 'C', 'G', 'C'], category: 'Classical', description: 'Mozart sonata progression' },
    { name: 'Romantic Period', chords: ['Am', 'F', 'C', 'G', 'Em', 'Am'], category: 'Classical', description: 'Romantic era progression' },
    { name: 'Impressionist', chords: ['Cmaj7', 'Dm7', 'Em7', 'Fmaj7'], category: 'Classical', description: 'Impressionist harmony' },
    { name: 'Modern Classical', chords: ['Cmaj7#11', 'Fmaj7', 'Bb7#11', 'Ebmaj7'], category: 'Classical', description: 'Modern classical harmony' },
    { name: 'Minimalist', chords: ['C', 'F', 'C', 'F'], category: 'Classical', description: 'Minimalist repetition' },
    { name: 'Film Score Epic', chords: ['Am', 'F', 'C', 'G', 'Am', 'F', 'G', 'Am'], category: 'Film Score', description: 'Epic film score' },
    { name: 'Cinematic Tension', chords: ['Dm', 'Bb', 'F', 'A7'], category: 'Film Score', description: 'Building tension' }
];

// Substitution progressions
const substitutionProgressions = [
    { name: 'iv (minor subdominant)', chords: ['C', 'Fm', 'C'], category: 'Substitutions', description: 'Borrowed from parallel minor; adds poignancy. C Aeolian/C Dorian over Fm' },
    { name: 'bVI Modal Mixture', chords: ['C', 'Ab', 'G', 'C'], category: 'Substitutions', description: 'Modal mixture from Aeolian; pre-dominant. C Aeolian/C Minor Pentatonic over bVI' },
    { name: 'bVII Mixolydian', chords: ['C', 'Bb', 'F', 'C'], category: 'Substitutions', description: 'Mixolydian/Aeolian borrowing; tonic prolongation. C Mixolydian/C Major Pentatonic over bVII' },
    { name: 'bIII Borrowed', chords: ['C', 'Eb', 'F', 'C'], category: 'Substitutions', description: 'Borrowed from minor; tonic substitute. C Aeolian/C Minor Scale over bIII' },
    { name: 'ii° Pre-dominant', chords: ['C', 'Ddim', 'G', 'C'], category: 'Substitutions', description: 'Borrowed from Aeolian; pre-dominant tension. C Harmonic Minor over ii°' },
    { name: 'Neapolitan (bII)', chords: ['C', 'Db', 'G', 'C'], category: 'Substitutions', description: 'Pre-dominant, dramatic, resolves to V. C Phrygian/C Neapolitan scale over bII' },
    { name: 'iv+ (augmented subdominant)', chords: ['C', 'F+', 'G', 'C'], category: 'Substitutions', description: 'Chromatic subdominant leading to V. C Major/C Lydian over iv+' },
    { name: 'i (borrowed tonic minor)', chords: ['Am', 'Dm', 'E', 'Am'], category: 'Substitutions', description: 'Parallel minor coloration. C Aeolian/C Minor Pentatonic' },
    { name: 'V7b9 Strong Dominant', chords: ['C', 'G7b9', 'C'], category: 'Substitutions', description: 'Borrowed from minor; stronger dominant. C Harmonic Minor/C Phrygian Dominant' },
    { name: 'V7#9 Blues Color', chords: ['C', 'G7#9', 'C'], category: 'Substitutions', description: 'Blues/jazz color; altered dominant. C Mixolydian b9 #9/C Blues Scale' },
    { name: 'V7b5 Altered', chords: ['C', 'G7b5', 'C'], category: 'Substitutions', description: 'Altered dominant, chromatic tension. C Altered Scale/C Super Locrian' },
    { name: 'bVII7 Dominant Sub', chords: ['C', 'Bb7', 'F', 'C'], category: 'Substitutions', description: 'Dominant substitute; blues/gospel. C Mixolydian/C Major Pentatonic over bVII7' },
    { name: 'Tritone Sub (bII7 for V7)', chords: ['C', 'Db7', 'C'], category: 'Substitutions', description: 'Jazz device: replace V with bII7. C Lydian Dominant/C Altered' },
    { name: 'ii-V Substitution (tritone)', chords: ['C', 'Db', 'Gb', 'C'], category: 'Substitutions', description: 'Replace ii–V with bii–bV. C Altered/C Harmonic Minor' },
    { name: 'Secondary Dominant (V/V)', chords: ['C', 'D7', 'G', 'C'], category: 'Substitutions', description: 'Dominant of dominant. C Mixolydian/C Lydian over D7' },
    { name: 'Secondary Dominant (V/ii)', chords: ['C', 'A7', 'Dm', 'G', 'C'], category: 'Substitutions', description: 'Tonicizes ii. C Mixolydian/C Lydian over A7' },
    { name: 'Secondary Dominant (V/vi)', chords: ['C', 'E7', 'Am', 'F', 'G', 'C'], category: 'Substitutions', description: 'Prepares vi tonicization. C Mixolydian/C Lydian over E7' },
    { name: 'Secondary Dominant (V/IV)', chords: ['C', 'C7', 'F', 'C'], category: 'Substitutions', description: 'Strengthens IV arrival. C Mixolydian/C Lydian over C7' },
    { name: 'Secondary Leading-tone (vii°/V)', chords: ['C', 'F#dim', 'G', 'C'], category: 'Substitutions', description: 'Diminished resolves to V. C Harmonic Minor over F#°' },
    { name: 'Secondary Leading-tone (vii°/ii)', chords: ['C', 'C#dim', 'Dm', 'G', 'C'], category: 'Substitutions', description: 'Chromatic pre-dominant. C Harmonic Minor/C Dorian over ii' },
    { name: 'Diminished Passing Chord (#i°7)', chords: ['C', 'C#dim7', 'Dm', 'G', 'C'], category: 'Substitutions', description: 'Chromatic passing I–ii. C Harmonic Minor/C Diminished' },
    { name: 'Diminished Passing (#iv°7)', chords: ['C', 'F', 'F#dim7', 'G', 'C'], category: 'Substitutions', description: 'Between IV and V. C Diminished/C Lydian Dominant' },
    { name: 'Augmented Sixth (Italian)', chords: ['C', 'Ab', 'F#'], category: 'Substitutions', description: 'Predominant → V. C Italian Augmented Sixth Scale' },
    { name: 'Augmented Sixth (French)', chords: ['C', 'Ab', 'D', 'F#'], category: 'Substitutions', description: 'Adds 2nd scale degree. C French Augmented Sixth Scale' },
    { name: 'Augmented Sixth (German)', chords: ['C', 'Ab', 'Eb', 'F#'], category: 'Substitutions', description: 'Adds 3rd scale degree. C German Augmented Sixth Scale' },
    { name: 'Chromatic Mediant (Ab)', chords: ['C', 'Ab', 'F', 'G', 'C'], category: 'Substitutions', description: 'bIII as mediant substitute. C Aeolian/C Lydian b3 over Ab' },
    { name: 'Chromatic Mediant (E)', chords: ['C', 'E', 'Am', 'F', 'C'], category: 'Substitutions', description: 'Unexpected color. C Major/C Lydian over E' },
    { name: 'Flat Submediant (bVI → V)', chords: ['C', 'Ab', 'G', 'C'], category: 'Substitutions', description: 'Dramatic descent. C Aeolian/C Major Pentatonic' },
    { name: 'Plagal iv–I', chords: ['C', 'Fm', 'C'], category: 'Substitutions', description: 'Borrowed cadence. C Aeolian/C Dorian over Fm' },
    { name: 'I – bVII – IV', chords: ['C', 'Bb', 'F', 'C'], category: 'Substitutions', description: 'Rock "backdoor" cadence. C Mixolydian/C Major Pentatonic' },
    { name: 'Backdoor Dominant (bVII7 → I)', chords: ['C', 'Bb7', 'C'], category: 'Substitutions', description: 'Jazz/blues for V7–I. C Mixolydian/C Blues' },
    { name: 'iiø7', chords: ['C', 'Dm7b5', 'G7', 'C'], category: 'Substitutions', description: 'Borrowed from minor key. C Locrian/C Dorian b2' },
    { name: 'V/bVI', chords: ['C', 'Eb7', 'Ab', 'G', 'C'], category: 'Substitutions', description: 'Secondary dominant to mixture chord. C Lydian Dominant/C Aeolian' },
    { name: 'V/bVII', chords: ['C', 'F7', 'Bb', 'F', 'C'], category: 'Substitutions', description: 'Prepares borrowed bVII. C Mixolydian/C Lydian Dominant' },
    { name: 'V/bIII', chords: ['C', 'Bb7', 'Eb', 'F', 'C'], category: 'Substitutions', description: 'Chromatic dominant to mediant. C Mixolydian/C Aeolian over Eb' },
    { name: 'Borrowed iv–V–I', chords: ['C', 'Fm', 'G', 'C'], category: 'Substitutions', description: 'Enhances cadence. C Aeolian/C Dorian' },
    { name: 'iii Sub for I', chords: ['C', 'Em', 'F', 'G', 'C'], category: 'Substitutions', description: 'Mediant tonic substitute. C Major/C Lydian over Em' },
    { name: 'vi Sub for I', chords: ['C', 'Am', 'F', 'G', 'C'], category: 'Substitutions', description: 'Relative minor substitution. C Aeolian/C Dorian over Am' },
    { name: 'Imaj7 as IV of V', chords: ['Cmaj7', 'G7', 'C'], category: 'Substitutions', description: 'Jazz tonic reinterpretation. C Major/C Lydian' },
    { name: 'Sus4 Chords', chords: ['C', 'Csus4', 'C'], category: 'Substitutions', description: 'Suspension over tonic. C Major/C Mixolydian' },
    { name: 'Add6 Tonic (I6)', chords: ['C6', 'F', 'G', 'C'], category: 'Substitutions', description: 'Tonic enrichment. C Major/C Lydian' },
    { name: 'Modal Interchange ii–V', chords: ['C', 'Dm7b5', 'G7alt', 'C'], category: 'Substitutions', description: 'Minor ii–V from parallel key. C Harmonic Minor/C Dorian' },
    { name: 'ii♭5', chords: ['C', 'Dm7b5', 'G7', 'C'], category: 'Substitutions', description: 'Borrowed from minor iiø7. C Harmonic Minor/C Dorian' },
    { name: '#IV°7', chords: ['C', 'F#dim7', 'G', 'C'], category: 'Substitutions', description: 'Leading-tone to V. C Harmonic Minor/C Diminished' },
    { name: 'bII7 (Tritone Sub)', chords: ['C', 'Db7', 'C'], category: 'Substitutions', description: 'Dominant tritone replacement. C Lydian Dominant/C Altered' },
    { name: 'Borrowed bVIImaj7', chords: ['C', 'Bbmaj7', 'F', 'C'], category: 'Substitutions', description: 'Modal interchange in pop/jazz. C Mixolydian/C Major' },
    { name: 'I7 (dominant tonic)', chords: ['C7', 'F', 'G', 'C'], category: 'Substitutions', description: 'Turns I into dominant-like pivot. C Mixolydian/C Blues' },
    { name: 'IVm7', chords: ['C', 'Fm7', 'C'], category: 'Substitutions', description: 'Borrowed minor iv adds color. C Aeolian/C Dorian' },
    { name: 'iii7♭5', chords: ['C', 'Em7b5', 'Am', 'Dm', 'G', 'C'], category: 'Substitutions', description: 'Diminished mediant for tension. C Harmonic Minor/C Dorian' },
    { name: 'bV°7', chords: ['C', 'F', 'Gbdim7', 'G', 'C'], category: 'Substitutions', description: 'Chromatic passing dim. C Harmonic Minor/C Diminished' },
    { name: 'bIImaj7 ("Neapolitan")', chords: ['C', 'Dbmaj7', 'G', 'C'], category: 'Substitutions', description: 'Predominant; resolves to V. C Phrygian/C Neapolitan' },
    { name: 'V/V → bII7', chords: ['C', 'Db7', 'G', 'C'], category: 'Substitutions', description: 'Tritone substitute of secondary dominant. C Lydian Dominant/C Altered' },
    { name: 'iii7 → V7/vi', chords: ['C', 'E7', 'Am', 'F'], category: 'Substitutions', description: 'iii leads to vi; secondary dominant. C Mixolydian/C Lydian over E7' },
    { name: 'I → V7/IV', chords: ['C7', 'F', 'Dm', 'G', 'C'], category: 'Substitutions', description: 'Tonic can become secondary dominant. C Lydian Dominant/C Mixolydian' },
    { name: 'IVmaj7 → ii7', chords: ['C', 'Dm7', 'G', 'C'], category: 'Substitutions', description: 'Smooth subdominant resolution. C Dorian/C Major' },
    { name: 'IV → iiø7', chords: ['C', 'Dm7b5', 'G', 'C'], category: 'Substitutions', description: 'Minor half-diminished as soft IV. C Locrian/C Dorian b2' },
    { name: 'V → #ivo7', chords: ['C', 'F#dim7', 'G', 'C'], category: 'Substitutions', description: 'Passing diminished leading to V. C Harmonic Minor/C Diminished' },
    { name: 'vi → bVImaj7', chords: ['C', 'Abmaj7', 'G', 'C'], category: 'Substitutions', description: 'Borrowed major VI as vi substitute. C Aeolian/C Dorian over bVI' },
    { name: 'ii → bIImaj7', chords: ['C', 'Dbmaj7', 'G', 'C'], category: 'Substitutions', description: 'Tritone or chromatic predominant. C Phrygian/C Neapolitan' },
    { name: 'V → bIII7', chords: ['C', 'Eb7', 'F', 'C'], category: 'Substitutions', description: 'Bluesy dominant substitute. C Mixolydian/C Major' },
    { name: 'IV → IIm7b5', chords: ['C', 'Dm7b5', 'G', 'C'], category: 'Substitutions', description: 'Minor predominant color. C Locrian/C Dorian b2' },
    { name: 'iii7 → bIIImaj7', chords: ['C', 'Ebmaj7', 'F', 'C'], category: 'Substitutions', description: 'Modal mixture mediant substitution. C Aeolian/C Lydian b3' },
    { name: 'V → #Vdim7', chords: ['C', 'G#dim7', 'C'], category: 'Substitutions', description: 'Augmented/diminished tension. C Diminished/C Harmonic Minor' },
    { name: 'ii → IVm7', chords: ['C', 'Fm7', 'G', 'C'], category: 'Substitutions', description: 'Minor iv as predominant. C Aeolian/C Dorian' },
    { name: 'V → bVII7', chords: ['C', 'Bb7', 'F', 'C'], category: 'Substitutions', description: 'Mixolydian substitute dominant. C Mixolydian/C Major' },
    { name: 'I → VIm7b5', chords: ['Am7b5', 'Dm', 'G', 'C'], category: 'Substitutions', description: 'Weak tonic substitute in jazz. C Locrian/C Harmonic Minor' },
    { name: 'V → V7alt', chords: ['Dm', 'G7alt', 'C'], category: 'Substitutions', description: 'Altered dominant scale. C Altered/C Super Locrian' },
    { name: 'iii7 → V7', chords: ['C', 'Em7', 'G', 'C'], category: 'Substitutions', description: 'Tonic prolongation via voice-leading. C Major/C Lydian over iii7' },
    { name: 'V7 → V13', chords: ['Dm', 'G13', 'Cmaj7'], category: 'Substitutions', description: 'Extended dominant chord. C Mixolydian/C Lydian Dominant' },
    { name: 'IV → IIsus2', chords: ['C', 'Dsus2', 'G', 'C'], category: 'Substitutions', description: 'Modern suspended substitution. C Major/C Dorian' },
    { name: 'I → IVmaj7', chords: ['Fmaj7', 'C'], category: 'Substitutions', description: 'Tonic prolonged via plagal motion. C Major/C Lydian' },
    { name: 'vi → IVmaj7', chords: ['C', 'Fmaj7', 'C'], category: 'Substitutions', description: 'Deceptive plagal movement. C Major/C Lydian' },
    { name: 'ii → vi7', chords: ['C', 'Am7', 'G', 'C'], category: 'Substitutions', description: 'Both lead into V; interchangeable. C Dorian/C Aeolian' },
    { name: 'I → vii°7/ii', chords: ['C#dim7', 'Dm', 'G', 'C'], category: 'Substitutions', description: 'Leading-tone dominant substitute. C Harmonic Minor/C Diminished' },
    { name: 'V → V7(b13)', chords: ['Dm', 'G7b13', 'C'], category: 'Substitutions', description: 'Altered dominant color. C Altered/C Super Locrian' },
    { name: 'I → bIIImaj7', chords: ['C', 'Ebmaj7', 'F', 'C'], category: 'Substitutions', description: 'Borrowed mediant prolonging tonic. C Aeolian/C Lydian b3' },
    { name: 'V → V+', chords: ['Dm', 'G+', 'C'], category: 'Substitutions', description: 'Augmented dominant intensifier. C Augmented/C Lydian Dominant' },
    { name: 'vi → ii7', chords: ['C', 'Dm7', 'G', 'C'], category: 'Substitutions', description: 'Prolongs subdominant function. C Dorian/C Aeolian' },
    { name: 'IV → bVImaj7', chords: ['C', 'Abmaj7', 'C'], category: 'Substitutions', description: 'Chromatic plagal coloration. C Aeolian/C Lydian b3' },
    { name: 'I → Imaj9', chords: ['Cmaj9', 'Fmaj7', 'G13', 'Cmaj9'], category: 'Substitutions', description: 'Jazz tonic enrichment. C Major/C Lydian' },
    { name: 'V7 → V7sus2', chords: ['Dm', 'G7sus2', 'C'], category: 'Substitutions', description: 'Softer dominant substitution. C Mixolydian/C Lydian Dominant' },
    { name: 'I → bVIImaj7', chords: ['Bbmaj7', 'F', 'C'], category: 'Substitutions', description: 'Modal tonic substitution. C Mixolydian/C Major' },
    { name: 'V7 → bV7', chords: ['Dm', 'Gb7', 'C'], category: 'Substitutions', description: 'Tritone-substitute to tonic. C Altered/C Lydian Dominant' },
    { name: 'IV → #iv°7', chords: ['C', 'F#dim7', 'C'], category: 'Substitutions', description: 'Passing diminished color. C Harmonic Minor/C Diminished' },
    { name: 'vi → IVm', chords: ['C', 'Am', 'Fm', 'C'], category: 'Substitutions', description: 'Borrowed plagal deceptive. C Aeolian/C Dorian' },
    { name: 'V7 → V7(b5)', chords: ['Dm', 'G7b5', 'C'], category: 'Substitutions', description: 'Altered dominant with flat 5. C Altered/C Super Locrian' },
    { name: 'I → I7sus4', chords: ['C7sus4', 'F', 'G', 'C'], category: 'Substitutions', description: 'Jazz tonic prolongation. C Mixolydian/C Major' },
    { name: 'iii → bIII7', chords: ['C', 'Eb7', 'F', 'C'], category: 'Substitutions', description: 'Blues substitution. C Mixolydian/C Major' },
    { name: 'V7 → V7(#5)', chords: ['Dm', 'G7#5', 'C'], category: 'Substitutions', description: 'Augmented dominant extension. C Altered/C Lydian Dominant' },
    { name: 'ii → bIVmaj7', chords: ['C', 'Gbmaj7', 'G', 'C'], category: 'Substitutions', description: 'Borrowed Lydian color. C Lydian/C Lydian b7' },
    { name: 'V → bII7(#11)', chords: ['Dm', 'Db7#11', 'C'], category: 'Substitutions', description: 'Altered tritone substitution. C Lydian Dominant/C Altered' },
    { name: 'I → VImMaj7', chords: ['C', 'AmMaj7', 'F', 'G'], category: 'Substitutions', description: 'Minor-major tonic color. C Harmonic Minor/C Melodic Minor' },
    { name: 'V7 → V7(#9,b13)', chords: ['Dm', 'G7#9b13', 'C'], category: 'Substitutions', description: 'Fully altered dominant. C Altered/C Super Locrian' }
];

// Andalusian progressions
const andalusianProgressions = [
    { name: 'Basic Andalusian', chords: ['Am', 'G', 'F', 'E'], category: 'Andalusian', description: 'Classic descending minor cadence in A minor.' },
    { name: 'Andalusian with i7', chords: ['Am7', 'G', 'F', 'E7'], category: 'Andalusian', description: 'Adds jazz color on tonic with minor 7.' },
    { name: 'Andalusian with VImaj7', chords: ['Am', 'G', 'Fmaj7', 'E'], category: 'Andalusian', description: 'Major 7th on VI creates softer modal color.' },
    { name: 'Andalusian with iv', chords: ['Am', 'G', 'Fm', 'E'], category: 'Andalusian', description: 'Borrowed minor iv adds dark tension.' },
    { name: 'Andalusian stepwise bass', chords: ['Am', 'G', 'F', 'E7'], category: 'Andalusian', description: 'V7 chord intensifies resolution.' },
    { name: 'Andalusian modal interchange', chords: ['Am', 'G', 'F', 'D7'], category: 'Andalusian', description: 'Secondary dominant on V adds motion.' },
    { name: 'Andalusian with V7sus4', chords: ['Am', 'G', 'F', 'E7sus4'], category: 'Andalusian', description: 'Suspended dominant delays cadence.' },
    { name: 'Andalusian with chromatic iv', chords: ['Am', 'G', 'F#dim', 'E'], category: 'Andalusian', description: 'Passing diminished creates tension before V.' },
    { name: 'Andalusian descending 7ths', chords: ['Am7', 'G7', 'Fmaj7', 'E7'], category: 'Andalusian', description: 'Enriched 7th chords for jazz flavor.' },
    { name: 'Andalusian with passing VI', chords: ['Am', 'G', 'F', 'F#dim', 'E'], category: 'Andalusian', description: 'Chromatic passing diminished between VI and V.' },
    { name: 'Andalusian minor iv prolong', chords: ['Am', 'G', 'Fm', 'E7'], category: 'Andalusian', description: 'Borrowed iv prolongs subdominant color.' },
    { name: 'Andalusian double V7', chords: ['Am', 'G', 'F', 'B7', 'E7'], category: 'Andalusian', description: 'Secondary dominant chain leading to tonic.' },
    { name: 'Andalusian with bII tritone', chords: ['Am', 'G', 'F', 'Db7', 'E'], category: 'Andalusian', description: 'Tritone sub adds tension to V.' },
    { name: 'Andalusian with passing iii', chords: ['Am', 'G', 'Em', 'F', 'E'], category: 'Andalusian', description: 'Stepwise mediant passing chord.' },
    { name: 'Andalusian with augmented V', chords: ['Am', 'G', 'F', 'E+'], category: 'Andalusian', description: 'Augmented dominant before resolving to tonic.' },
    { name: 'Andalusian with iv6', chords: ['Am', 'G', 'F6', 'E'], category: 'Andalusian', description: 'Sixth on iv adds harmonic color.' },
    { name: 'Andalusian with VI7', chords: ['Am', 'G', 'F7', 'E'], category: 'Andalusian', description: 'Dominant seventh on VI adds motion.' },
    { name: 'Andalusian with stepwise bass', chords: ['Am', 'G', 'F', 'E', 'D'], category: 'Andalusian', description: 'Descending bass step adds a melodic line.' },
    { name: 'Andalusian with i6/9', chords: ['Am6/9', 'G', 'F', 'E7'], category: 'Andalusian', description: 'Jazz tonic color before resolution.' },
    { name: 'Andalusian with minor V7', chords: ['Am', 'G', 'F', 'E7b9'], category: 'Andalusian', description: 'Altered dominant increases tension.' },
    { name: 'Andalusian with ivmaj7', chords: ['Am', 'G', 'Fm7', 'E7'], category: 'Andalusian', description: 'Modal color on subdominant minor 7.' },
    { name: 'Andalusian with V7#9', chords: ['Am', 'G', 'F', 'E7#9'], category: 'Andalusian', description: 'Altered dominant with bluesy tension.' },
    { name: 'Andalusian with V7b13', chords: ['Am', 'G', 'F', 'E7b13'], category: 'Andalusian', description: 'Altered dominant with chromatic color.' },
    { name: 'Andalusian with passing ii', chords: ['Am', 'G', 'Dm', 'F', 'E'], category: 'Andalusian', description: 'Minor ii adds stepwise color before IV.' },
    { name: 'Andalusian with IVmaj9', chords: ['Am', 'G', 'Fmaj9', 'E'], category: 'Andalusian', description: 'Extended IV chord enriches progression.' },
    { name: 'Andalusian with #iv°7', chords: ['Am', 'G', 'F#dim7', 'E'], category: 'Andalusian', description: 'Diminished passing chord creates tension.' },
    { name: 'Andalusian with bVII7', chords: ['Am', 'G', 'F', 'Bb7', 'E'], category: 'Andalusian', description: 'Mixolydian dominant borrowed chord.' },
    { name: 'Andalusian with VImaj9', chords: ['Am', 'G', 'Fmaj9', 'E7'], category: 'Andalusian', description: 'Adds jazz extension to VI chord.' },
    { name: 'Andalusian with ivm6', chords: ['Am', 'G', 'Fm6', 'E'], category: 'Andalusian', description: 'Minor iv with added 6th for modal color.' },
    { name: 'Andalusian with ii7b5', chords: ['Am', 'G', 'Dm7b5', 'E7'], category: 'Andalusian', description: 'Half-diminished ii before dominant.' },
    { name: 'Andalusian with chromatic passing', chords: ['Am', 'G', 'F', 'F#dim7', 'E'], category: 'Andalusian', description: 'Stepwise chromatic motion between IV and V.' },
    { name: 'Andalusian jazz reharmonization', chords: ['Am7', 'G7', 'Fmaj7', 'E7'], category: 'Andalusian', description: 'Standard jazz reharm with 7ths.' },
    { name: 'Andalusian with secondary dominant', chords: ['Am', 'G', 'F', 'B7', 'E'], category: 'Andalusian', description: 'Secondary dominant resolves to V.' },
    { name: 'Andalusian with ivadd9', chords: ['Am', 'G', 'Fm(add9)', 'E7'], category: 'Andalusian', description: 'Added 9th for harmonic color.' },
    { name: 'Andalusian with passing #iv', chords: ['Am', 'G', 'F#dim', 'F', 'E'], category: 'Andalusian', description: 'Chromatic passing diminished adds tension.' },
    { name: 'Andalusian with VI7b9', chords: ['Am', 'G', 'F7b9', 'E'], category: 'Andalusian', description: 'Chromatic altered dominant on VI.' },
    { name: 'Andalusian with bIImaj7', chords: ['Am', 'G', 'Dbmaj7', 'E'], category: 'Andalusian', description: 'Modal borrowed subdominant color.' },
    { name: 'Andalusian with bVIImaj7', chords: ['Am', 'G', 'Bbmaj7', 'E'], category: 'Andalusian', description: 'Colorful modal substitution.' },
    { name: 'Andalusian with imaj9', chords: ['Am9', 'G', 'F', 'E7'], category: 'Andalusian', description: 'Tonic extension adds richness.' },
    { name: 'Andalusian with V13', chords: ['Am', 'G', 'F', 'E13'], category: 'Andalusian', description: 'Extended dominant chord for jazz color.' },
    { name: 'Andalusian with iv7b5', chords: ['Am', 'G', 'Fm7b5', 'E7'], category: 'Andalusian', description: 'Half-diminished iv adds tension.' },
    { name: 'Andalusian with secondary ii', chords: ['Am', 'G', 'Dm7', 'F', 'E7'], category: 'Andalusian', description: 'Stepwise ii7 before IV chord.' },
    { name: 'Andalusian with passing VI', chords: ['Am', 'G', 'F', 'F#dim7', 'E7'], category: 'Andalusian', description: 'Chromatic passing diminished between VI and V7.' },
    { name: 'Andalusian with VImaj7b5', chords: ['Am', 'G', 'Fmaj7b5', 'E'], category: 'Andalusian', description: 'Altered VI chord for color.' },
    { name: 'Andalusian with iii°7', chords: ['Am', 'G', 'Em°7', 'F', 'E'], category: 'Andalusian', description: 'Passing diminished mediant adds tension.' },
    { name: 'Andalusian with ivmaj7', chords: ['Am', 'G', 'Fmmaj7', 'E7'], category: 'Andalusian', description: 'Modal borrowed minor iv maj7.' },
    { name: 'Andalusian with bII7', chords: ['Am', 'G', 'Db7', 'E7'], category: 'Andalusian', description: 'Tritone sub for dominant V7.' },
    { name: 'Andalusian with bIIImaj7', chords: ['Am', 'G', 'Cmaj7', 'E7'], category: 'Andalusian', description: 'Chromatic mediant for modal flavor.' },
    { name: 'Andalusian with #iv7', chords: ['Am', 'G', 'F#7', 'E7'], category: 'Andalusian', description: 'Diminished leading chord before V7.' },
    { name: 'Andalusian with IV7', chords: ['Am', 'G', 'F7', 'E7'], category: 'Andalusian', description: 'Extended dominant on IV adds tension.' }
];

// Export the complete progressions list
export const allProgressions = [...chordProgressions, ...generateVariations(), ...advancedProgressions, ...additionalProgressions, ...substitutionProgressions, ...andalusianProgressions];
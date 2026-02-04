#!/usr/bin/env python3
"""
Parse TSK cross-references and create openbible.json.
References use same format as verses-1769.json: "Book Chapter:Verse"
"""

import re
import json

# Standard 66 book order for metadata
BOOK_ORDER = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
    "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah",
    "Esther", "Job", "Psalm", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah",
    "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah",
    "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
    "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians",
    "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy",
    "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John",
    "3 John", "Jude", "Revelation"
]

# TSK abbreviation to full book name mapping
TSK_TO_FULL = {
    "Gen": "Genesis",
    "Exod": "Exodus",
    "Lev": "Leviticus",
    "Num": "Numbers",
    "Deut": "Deuteronomy",
    "Josh": "Joshua",
    "Judg": "Judges",
    "Ruth": "Ruth",
    "1Sam": "1 Samuel",
    "2Sam": "2 Samuel",
    "1Kgs": "1 Kings",
    "2Kgs": "2 Kings",
    "1Chr": "1 Chronicles",
    "2Chr": "2 Chronicles",
    "Ezra": "Ezra",
    "Neh": "Nehemiah",
    "Esth": "Esther",
    "Job": "Job",
    "Ps": "Psalm",
    "Prov": "Proverbs",
    "Eccl": "Ecclesiastes",
    "Song": "Song of Solomon",
    "Isa": "Isaiah",
    "Jer": "Jeremiah",
    "Lam": "Lamentations",
    "Ezek": "Ezekiel",
    "Dan": "Daniel",
    "Hos": "Hosea",
    "Joel": "Joel",
    "Amos": "Amos",
    "Obad": "Obadiah",
    "Jonah": "Jonah",
    "Mic": "Micah",
    "Nah": "Nahum",
    "Hab": "Habakkuk",
    "Zeph": "Zephaniah",
    "Hag": "Haggai",
    "Zech": "Zechariah",
    "Mal": "Malachi",
    "Matt": "Matthew",
    "Mark": "Mark",
    "Luke": "Luke",
    "John": "John",
    "Acts": "Acts",
    "Rom": "Romans",
    "1Cor": "1 Corinthians",
    "2Cor": "2 Corinthians",
    "Gal": "Galatians",
    "Eph": "Ephesians",
    "Phil": "Philippians",
    "Col": "Colossians",
    "1Thess": "1 Thessalonians",
    "2Thess": "2 Thessalonians",
    "1Tim": "1 Timothy",
    "2Tim": "2 Timothy",
    "Titus": "Titus",
    "Phlm": "Philemon",
    "Heb": "Hebrews",
    "Jas": "James",
    "1Pet": "1 Peter",
    "2Pet": "2 Peter",
    "1John": "1 John",
    "2John": "2 John",
    "3John": "3 John",
    "Jude": "Jude",
    "Rev": "Revelation"
}

def tsk_ref_to_verses_format(tsk_ref):
    """Convert TSK format like 'Gen.1.1' to verses-1769 format 'Genesis 1:1'."""
    # Parse TSK ref: Book.Chapter.Verse (e.g., "Gen.1.1")
    match = re.match(r'^(\w+)\.(\d+)\.(\d+)$', tsk_ref)
    if not match:
        return None
    
    tsk_book, chapter, verse = match.groups()
    
    # Convert to full book name
    full_book = TSK_TO_FULL.get(tsk_book, tsk_book)
    
    return f"{full_book} {chapter}:{verse}"

def parse_cross_references(filename):
    """Parse TSK cross-references file."""
    references = []
    
    with open(filename, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f):
            line = line.rstrip('\n')
            if not line or line.startswith("From Verse") or line.startswith("#"):
                continue
            
            # Split by tabs
            parts = line.split('\t')
            if len(parts) < 3:
                continue
            
            from_tsk = parts[0].strip()
            to_tsk = parts[1].strip()
            votes = parts[2].strip()
            
            # Handle single verse reference
            if '-' not in to_tsk:
                from_ref = tsk_ref_to_verses_format(from_tsk)
                to_ref = tsk_ref_to_verses_format(to_tsk)
                
                if from_ref and to_ref and votes:
                    try:
                        references.append({
                            "from": from_ref,
                            "to": to_ref,
                            "votes": int(votes)
                        })
                    except ValueError:
                        continue
            else:
                # Handle range like "Ps.148.4-Ps.148.5" or "Prov.8.22-Prov.8.30"
                from_ref = tsk_ref_to_verses_format(from_tsk)
                to_parts = to_tsk.split('-')
                to_start = tsk_ref_to_verses_format(to_parts[0])
                
                if to_start and to_start.count(" ") > 0:  # Valid verse ref
                    # Check if it's a range within same book/chapter
                    to_end_tsk = to_parts[1] if len(to_parts) > 1 else None
                    
                    if to_end_tsk:
                        to_end = tsk_ref_to_verses_format(to_end_tsk)
                        if to_end and to_start.split()[0] == to_end.split()[0]:  # Same book
                            # Extract verse numbers
                            start_verse = int(to_start.split(':')[-1].split('-')[0])
                            end_verse = int(to_end.split(':')[-1].split('-')[0])
                            
                            # Get book and chapter from start
                            book_chapter = to_start.rsplit(':', 1)[0]
                            
                            for v in range(start_verse, end_verse + 1):
                                if from_ref and votes:
                                    try:
                                        references.append({
                                            "from": from_ref,
                                            "to": f"{book_chapter}:{v}",
                                            "votes": int(votes)
                                        })
                                    except ValueError:
                                        continue
    
    return references

def main():
    print("Parsing cross-references from cross_references.txt...")
    cross_refs = parse_cross_references("cross_references.txt")
    print(f"Parsed {len(cross_refs)} cross-reference pairs")
    
    print("Creating openbible.json structure...")
    
    # Group references by source verse
    refs_by_verse = {}
    for ref in cross_refs:
        from_ref = ref["from"]
        if from_ref not in refs_by_verse:
            refs_by_verse[from_ref] = []
        refs_by_verse[from_ref].append({
            "to": ref["to"],
            "votes": ref["votes"]
        })
    
    # Create output structure
    output = {
        "metadata": {
            "total_verses_with_refs": len(refs_by_verse),
            "total_cross_refs": len(cross_refs),
            "book_order": BOOK_ORDER
        },
        "cross_references": refs_by_verse
    }
    
    print("Writing to openbible.json...")
    with open("openbible.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print("Done! Saved to openbible.json")
    
    # Print stats
    print(f"\nStatistics:")
    print(f"  Total verses with cross-references: {len(refs_by_verse)}")
    print(f"  Total cross-reference pairs: {len(cross_refs)}")
    
    # Sample data
    print(f"\nSample references:")
    for i, (from_ref, refs) in enumerate(list(refs_by_verse.items())[:5]):
        print(f"\n  {from_ref}:")
        for r in refs[:3]:
            print(f"    -> {r['to']} (votes: {r['votes']})")

if __name__ == "__main__":
    main()
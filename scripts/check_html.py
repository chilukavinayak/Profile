from html.parser import HTMLParser
from collections import Counter
import sys

class TagCounter(HTMLParser):
    def __init__(self):
        super().__init__()
        self.opens = Counter()
        self.closes = Counter()

    def handle_starttag(self, tag, attrs):
        self.opens[tag] += 1

    def handle_endtag(self, tag):
        self.closes[tag] += 1

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            data = f.read()
    except Exception as e:
        print('Error reading index.html:', e)
        sys.exit(2)

    p = TagCounter()
    p.feed(data)

    interesting = ['html','head','body','div','section','header','footer','script','link','nav']
    issues = []
    for t in interesting:
        if (p.opens[t] - p.closes[t]) != 0:
            issues.append((t, p.opens[t], p.closes[t]))

    if issues:
        print('HTML tag mismatches (naive):')
        for tag, op, cl in issues:
            print(f' - {tag}: opens={op} closes={cl}')
        sys.exit(2)
    else:
        print('No obvious tag count mismatches for common tags.')
        sys.exit(0)

if __name__ == '__main__':
    main()

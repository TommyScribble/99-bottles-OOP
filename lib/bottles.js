import { downTo } from './helpers';

export class Bottles {
	pluraliseBottles(verseNumber) {
		return verseNumber > 1 ? "s" : "";
	}

	noMoreBottlesLeft(verseNumber) {
		if (verseNumber === 0) return true;
		return false;
	}

	line1(verseNumber) {
		if (this.noMoreBottlesLeft(verseNumber)) {
			verseNumber = "No more";
		}
		return `${verseNumber} bottle${this.pluraliseBottles(
			verseNumber
		)} of beer on the wall, ${verseNumber} bottle${this.pluraliseBottles(
			verseNumber
		)} of beer.\n`;
	}

	line2(verseNumberMinusOne) {
		if (verseNumberMinusOne > 0) {
			return `Take one down and pass it around, ${verseNumberMinusOne} bottle${this.pluraliseBottles(
				verseNumberMinusOne
			)} of beer on the wall.\n`;
		}

		if (verseNumberMinusOne === 0) {
			return "Take it down and pass it around, no more bottles of beer on the wall.\n";
		}
	}

	song() {
		return this.verses(99, 0);
	}

	verses(verseNumberFrom, verseNumberTo) {
		const numbersArray = downTo(verseNumberFrom, verseNumberTo);

		return numbersArray.map((currentVerse) => this.verse(currentVerse)).join(`\n`);
	}

	verse(verseNumber) {
		if (verseNumber === 0) {
			return (
				"No more bottles of beer on the wall, " +
				"no more bottles of beer.\n" +
				"Go to the store and buy some more, " +
				"99 bottles of beer on the wall.\n"
			);
		}
		return this.line1(verseNumber) + this.line2(verseNumber - 1);
	}
}

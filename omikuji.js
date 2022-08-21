function displayNone(ele) {
	ele.classList.remove("d-block");
	ele.classList.add("d-none");
}

function displayBlock(ele) {
	ele.classList.remove("d-none");
	ele.classList.add("d-block");
}

function toggleDisplay(ele1, ele2) {
	Worshiper.drawOmikuji();
	if (ele1.classList.contains("d-block")) {
		displayNone(ele1);
		displayBlock(ele2);
	} else {
		displayNone(ele2);
		displayBlock(ele1);
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

class omikujiObject {
	constructor(img, unsei, comment, luckyLanguage, luckyDatabase, luckyEditor) {
		this.img = img;
		this.unsei = unsei;
		this.comment = comment;
		this.luckyLanguage = luckyLanguage;
		this.luckyDatabase = luckyDatabase;
		this.luckyEditor = luckyEditor;
	}
}

class God {
	static imgDictionary = {
		"大吉": "img/daikiti.png",
		"凶": "img/kyou.png"
	}

	static unseiList = [
		"大吉",
		"凶",
	]

	static commentDictionary = {
		"大吉": ["comment1", "comment2"],
		"凶": ["comment3", "comment4"]
	}

	static luckyLanguageList = [
		"C",
		"Jave",
		"Python",
		"Ruby"
	]
	
	static luckyDatabaseList = [
		"MySQL",
		"PostgreSQL"
	]
	
	static luckyEditorList = [
		"Atom",
		"VSCode"
	]
	

	static generateOmikuji(num) {
		let omikujiList = [];

		for (let i = 0; i < num; i++) {
			let unsei = this.unseiList[getRandomInt(this.unseiList.length)];
			let img = this.imgDictionary[unsei];
			let comment = this.commentDictionary[unsei][getRandomInt(this.commentDictionary[unsei].length)];
			let luckyLanguage = this.luckyLanguageList[getRandomInt(this.luckyLanguageList.length)];
			let luckyDatabase = this.luckyDatabaseList[getRandomInt(this.luckyDatabaseList.length)];
			let luckyEditor = this.luckyEditorList[getRandomInt(this.luckyEditorList.length)];

			let omikuji = new omikujiObject(img, unsei, comment, luckyLanguage, luckyDatabase, luckyEditor);
			omikujiList.push(omikuji);
		}

		return omikujiList
	}
}

const omikujiList = God.generateOmikuji(10);

class Worshiper {
	static drawOmikuji() {
		let omikuji = omikujiList[getRandomInt(omikujiList.length)];

		let img = document.getElementById("img");
		img.src = omikuji.img;

		let unnsei = document.getElementById("unsei");
		unnsei.innerHTML = omikuji.unsei;

		let comment = document.getElementById("comment");
		comment.innerHTML = omikuji.comment;

		let luckyLanguage = document.getElementById("lucky-language");
		luckyLanguage.innerHTML = omikuji.luckyLanguage;

		let luckyDatabase = document.getElementById("lucky-database");
		luckyDatabase.innerHTML = omikuji.luckyDatabase;

		let luckyEditor = document.getElementById("lucky-editor");
		luckyEditor.innerHTML = omikuji.luckyEditor;
	}
}

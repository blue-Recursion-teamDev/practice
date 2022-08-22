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

// 乱数生成
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// おみくじ
class omikujiObject {
	constructor(unseiImg, unsei, explanation, luckyLanguage, luckyDatabase, luckyEditor) {
		this.unseiImg = unseiImg;
		this.unsei = unsei;
		this.explanation = explanation;
		this.luckyLanguage = luckyLanguage;
		this.luckyDatabase = luckyDatabase;
		this.luckyEditor = luckyEditor;
	}
}

// おみくじの生成担当
class God {
	static unseiImgDictionary = {
		"大吉": "img/daikiti.png",
		"凶": "img/kyou.png"
	}

	static unseiList = [
		"大吉",
		"凶",
	]

	static explanationDictionary = {
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
	
	// おみくじの生成
	static generateOmikuji(num) {
		let omikujiList = [];

		for (let i = 0; i < num; i++) {
			let unsei = this.unseiList[getRandomInt(this.unseiList.length)];
			let unseiImg = this.unseiImgDictionary[unsei];
			let explanation = this.explanationDictionary[unsei][getRandomInt(this.explanationDictionary[unsei].length)];
			let luckyLanguage = this.luckyLanguageList[getRandomInt(this.luckyLanguageList.length)];
			let luckyDatabase = this.luckyDatabaseList[getRandomInt(this.luckyDatabaseList.length)];
			let luckyEditor = this.luckyEditorList[getRandomInt(this.luckyEditorList.length)];

			let omikuji = new omikujiObject(unseiImg, unsei, explanation, luckyLanguage, luckyDatabase, luckyEditor);
			omikujiList.push(omikuji);
		}

		return omikujiList
	}
}

// おみくじのリスト生成
const omikujiList = God.generateOmikuji(10);


// おみくじ引く担当
class Worshiper {
	static drawOmikuji() {
		let omikuji = omikujiList[getRandomInt(omikujiList.length)];

		let unseiImg = document.getElementById("unsei_img");
		unseiImg.src = omikuji.unseiImg;

		let unnsei = document.getElementById("unsei");
		unnsei.innerHTML = omikuji.unsei;

		let explanation = document.getElementById("explanation");
		explanation.innerHTML = omikuji.explanation;

		let luckyLanguage = document.getElementById("lucky_language");
		luckyLanguage.innerHTML = omikuji.luckyLanguage;

		let luckyDatabase = document.getElementById("lucky_dataBase");
		luckyDatabase.innerHTML = omikuji.luckyDatabase;

		let luckyEditor = document.getElementById("lucky_editor");
		luckyEditor.innerHTML = omikuji.luckyEditor;
	}
}
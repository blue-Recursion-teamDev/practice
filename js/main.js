class Item{
    constructor(unsei_img, unsei, explanation, lucky_language, lucky_dataBase, lucky_editor){
        this.unsei_img = unsei_img;
        this.unsei = unsei;
        this.explanation = explanation;
        this.lucky_language = lucky_language;
        this.lucky_dataBase = lucky_dataBase;
        this.lucky_editor = lucky_editor;
    }
}

let ItemList = [
    new Item("img/ホッとする女性.png", "大吉", "説明1です", "ラッキー言語1です", "ラッキーDB1です", "ラッキーエディタ1です"),
    new Item("img/落ち込む女性.png", "凶", "説明2です", "ラッキー言語2です", "ラッキーDB2です", "ラッキーエディタ2です")
]

class Screen{
    static activate_Results_Screen(){
        let results_screen = document.getElementById("result");
        results_screen.classList.add("d-block");
        results_screen.classList.remove("d-none");
    }   
    static inactivate_Results_Screen(){
        let results_screen = document.getElementById("result");
        results_screen.classList.remove("d-block");
        results_screen.classList.add("d-none");
    }
    static activate_Start_Screen(){
        let start_screen = document.getElementById("start");
        start_screen.classList.add("d-block");
        start_screen.classList.remove("d-none");
    }
    static inactivate_Start_Screen(){
        let start_screen = document.getElementById("start");
        start_screen.classList.remove("d-block");
        start_screen.classList.add("d-none");
    }
}

class Omikuji{
    static execute_Omikuji(){
        let random_number =  Math.floor(Math.random() * ItemList.length);
        console.log(random_number)

        let unsei_img = document.getElementById("unsei_img");
        unsei_img.src = ItemList[random_number].unsei_img;

        let unsei = document.getElementById("unsei");
        unsei.innerHTML = ItemList[random_number].unsei;

        let explanation = document.getElementById("explanation");
        explanation.innerHTML = ItemList[random_number].explanation;

        let lucky_language = document.getElementById("lucky_language");
        lucky_language.innerHTML = ItemList[random_number].lucky_language;

        let lucky_dataBase = document.getElementById("lucky_dataBase");
        lucky_dataBase.innerHTML = ItemList[random_number].lucky_dataBase;

        let lucky_editor = document.getElementById("lucky_editor");
        lucky_editor.innerHTML = ItemList[random_number].lucky_editor;
    }
}

class Button{
    static detect_Start_Button(){
        let start_button = document.getElementById("start_button");

        start_button.addEventListener("click", function(){
            console.log("detect_Start_Button");
            Screen.inactivate_Start_Screen();
            Screen.activate_Results_Screen();
            Omikuji.execute_Omikuji();
        })
    }

    static detect_Retry_Button(){
        let retry_button = document.getElementById("retry_button");

        retry_button.addEventListener("click", function(){
            console.log("detect_Retry_Button");
            Screen.inactivate_Results_Screen();
            Screen.activate_Start_Screen();
        })
    }
}
Button.detect_Start_Button();
Button.detect_Retry_Button();

let {stripMargin} = require('stripmargin');
let commandZipcodeToBarcode=require('./goto-zipcode-to-barcode-page');
let commandInvalidInput=require('./invalid-input-page');

function mainPage(input) {
    return{
        text:stripMargin(`
        |1.translate zip code to bar code
        |2.translate bar code to zip code
        |3.Quit
        |please input your choices(1~3)`),

        newMapping:{
            "1":commandZipcodeToBarcode,
            "*":commandInvalidInput
        }
    }
}

module.exports=mainPage;
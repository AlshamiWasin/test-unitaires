import should from "should"

import {calculerTVA} from "../app.js"
import {calculerPrixTotal} from "../app.js"



describe("Checking if the panier is created correctly", function(){  
    it("should calculate tva and total price", function(){
        debugger
        console.log(calculerTVA());
        console.log(calculerPrixTotal());
    });
});

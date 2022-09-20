window.onload = function(){
    tester();
}

function tester(){
    describe("filter banned words", function(){
        it("return the statement without the filtered word", function(){
            assert.equal(("This house is not nice!".filter(['not'])), "This house is  nice!");
        })
    
   it("return the sorted array done with bubbleSort", function(){
            assert.equal(arrToString([6, 4, 0, 3, -2, 1].bubbleSort()), '-2, 0, 1, 3, 4, 6');
        })
    
        it("return teacher's name with the subject he is teaching", function(){
           assert.equal(tc.teach('WAP'), "Mohammed is now teaching WAP");
        });
    });




    mocha.run();
}

function arrToString(arr, arrType = "string"){
    let end = arrType.localeCompare("string") == 0 ?  ", " : " ";
    let res  = "";
    let i = 0
    for(; i < arr.length -1; i++){
        res += arr[i]+end;
    }
    res += arr[i];
    return res.trim();
}
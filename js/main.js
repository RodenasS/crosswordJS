
var inputText;
var puzzleData;

function Numeriai(){
	document.getElementById("pzl_3_1").placeholder = "1";
	document.getElementById("pzl_1_6").placeholder = "2";
	document.getElementById("pzl_6_1").placeholder = "3";
	document.getElementById("pzl_3_8").placeholder = "4";
	document.getElementById("pzl_8_1").placeholder = "5";
	document.getElementById("pzl_3_10").placeholder = "6";
	document.getElementById("pzl_10_1").placeholder = "7";
	document.getElementById("pzl_5_4").placeholder = "8";
	document.getElementById("pzl_9_9").placeholder = "9";
	document.getElementById("pzl_3_2").placeholder = "10";
}

function KrovimoFunkcija(){
	var puzzleTable = document.getElementById("puzzletable");
	puzzleData = PuzlesFunkcija();
	for ( var i = 0; i < puzzleData.length ; i++ ) {
		var row = puzzleTable.insertRow(-1);
		var rowData = puzzleData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var pzlID = String('pzl' + '_' + i + '_' + j);
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: uppercase" ' + 'id="' + pzlID + '">';
			}else{
				cell.style.backgroundColor  = "#454545";
			}
		}
	}
	Numeriai();
}


function PuzlesFunkcija(){
	var objects = [	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 'e', 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 's', 0, 0, 0, 0, 0],
					[0, 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', 0],
					[0, 0, 'u', 0, 0, 0, 'o', 0, 'm', 0, 'u', 0],
					[0, 0, 's', 0, 'o', 0, 'r', 0, 'o', 0, 'r', 0],
					[0, 'f', 'i', 'a', 't', 0, 't', 0, 'l', 0, 'b', 0],
					[0, 0, 'n', 0, 't', 0, 0, 0, 'a', 0, 'i', 0],
					[0, 'm', 'i', 'n', 'o', 'l', 't', 'a', 0, 0, 'n', 0],
					[0, 0, 'm', 0, 0, 0, 0, 0, 0, 'k', 'a', 0],
					[0, 'm', 'o', 'n', 'o', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				];
return objects;
}

function RestartavimoFunkcija(){
	var puzzleTable = document.getElementById("puzzletable");
	puzzleTable.innerHTML = '';
    KrovimoFunkcija();
}

function TikrinimoFunkcija(){
	for ( var i = 0; i < puzzleData.length ; i++ ) {
		var rowData = puzzleData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('pzl' + '_' + i + '_' + j);
				if(selectedInputTextElement.value != puzzleData[i][j]){
					selectedInputTextElement.style.backgroundColor = '#a83232';
					
				}else{
					selectedInputTextElement.style.backgroundColor = '#4ca832';
				}
			}
		}
	}
}

function PagalbosFunkcija(){
	for ( var i = 0; i < puzzleData.length ; i++ ) {
		var rowData = puzzleData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('pzl' + '_' + i + '_' + j);
					selectedInputTextElement.value = puzzleData[i][j];
					selectedInputTextElement.style.backgroundColor = '#4ca832';
			}
		}
	}
}
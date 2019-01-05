	/* ===== Executable Test ==================================
	|  Use this file to test your project.
	|  =========================================================*/

	const BlockChain = require('./BlockChain.js');
	const Block = require('./Block.js');

	let myBlockChain = new BlockChain.Blockchain();

	//RETURNS A SPECIFIC BLOCK
	/*myBlockChain.getBlock(10).then((bloco) => {
		console.log("**** Bloco *****");
		console.log(bloco);
	}).catch((err) => { console.log(err);});*/

	//ADD SEVERAL BLOCKS
	/*(function theLoop (i) {
		setTimeout(function () {
			let blockTest = new Block.Block("Test Block - " + (i + 1));
			myBlockChain.addBlock(blockTest).then((result) => {
				console.log(result);
				i++;
				if (i < 10) theLoop(i);
			});
		}, 1000);
	  })(0);*/

	//VALIDATE A SPECIFIC BLOCK
	/*myBlockChain.validateBlock(10).then((valid) => {
		console.log(valid);
	})
	.catch((error) => {
		console.log(error);
	})*/

	//MODIFY THE BLOCK
	/*myBlockChain.getBlock(9).then((block) => {
		let blockAux = block;
		console.log(block);
		blockAux.previousBlockHash = "jndininuud94j9i3j49dij9ijij39idj9oi";
		myBlockChain._modifyBlock(blockAux.height, blockAux).then((blockModified) => {
			if(blockModified){
				console.log("The Block was modified");
			} else {
				console.log("The Block wasn't modified");
			}
		}).catch((err) => { console.log(err);});
	}).catch((err) => { console.log(err);});*/

	//VALIDATE THE ENTIRE BLOCKCHAIN
	/*myBlockChain.validateChain().then((errorLog) => {
		if(errorLog.length > 0){
			console.log("The chain is not valid:");
			errorLog.forEach(error => {
				console.log(error);
			});
		} else {
			console.log("No errors found, The chain is Valid!");
		}
	})
	.catch((error) => {
		console.log(error);
	});*/


	//RETURN THE HEIGHT OF THE CHAIN
	 /*myBlockChain.getBlockHeight().then((height) => {
	 	console.log("height: ",height);
	 }).catch((err) => { console.log(err);});*/


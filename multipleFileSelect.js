
/**
 * Classe Image 
 * @param {File} file le fichier image
 * */
function VdmImage(pfile){
	this.file = pfile;
	this.fileName = "";
	this.fileType = "";
	this.fileBase64 = "";
		
	if(arguments.length == 0){
		throw new Error("Parametre manquant au constructeur de "+this.constructor.name);
	}
	
	if(this.file || !this.file instanceof File ){
		throw new TypeError("Un objet de type File est requis au constructeur de "+this.constructor.name);
	}
	
	this.getFileName = function(){
		return file.name;
	};
	
	this.fileName = this.file.name;
	this.fileType = this.file.type;
	//this.fileBase64 = this.file.
}

VdmImage.prototype = {
	prototype : VdmImage,
	
	getFileName : function(){
		return this.fileName;
	},
		
};


var TestObj={
		
	/**
	 * Retourne un tableau d'objet VdmImage
	 * @param {Array.<File>} array des fichier selectionne dans le file Input 
	 * @returns {Array.<VdmImage>}
	 * */
	getImageFiles : function getImageFiles(files){
		var imageFiles = [];
		if(files && files[0]){
			 for(var idx = 0; idx < files.length; idx++){
				    readImage( files[idx], idx );		
			 }
		}
	}
		
};



function readImage(file, idx) {
        var ul = document.getElementById('fileList');
        var li = document.createElement('li');
        var div = document.createElement('div');
        var img = document.createElement('img');
        var str;
        var fileReader;
        var imgObj;
        var canvas;
        var context;
        
        fileReader = new FileReader();
        
        fileReader.onloadend= function(){
            str = 'File ' + (idx+1)  +  '  : ' + file.name ;
            div.innerHTML = str;

            img.src = fileReader.result;

            li.appendChild(div);
    	    li.appendChild(img);

            

    	    canvas = document.createElement('canvas');
    	    canvas.width=1024;
    	    canvas.height = 768;
    	    context = canvas.getContext('2d');
    	    context.drawImage(img.src, 0, 0, canvas.width, canvas.height);

    	    div = document.createElement('div');
    	    div.innerHTML = '     resize image content base64 : ';
    	    img.src = canvas.toDataURL(file.type);
    	    li.appendChild(div);
    	    li.appendChild(img);
    	    
    	    ul.appendChild(li);
        	
        };
        fileReader.readAsDataURL(file);
         
}

$(document).ready(function(){
	$("#asd").change(function(){

		var imageFiles = this.files;
		if(files && files[0]){
			 for(var idx = 0; idx < files.length; idx++){
				    readImage( files[idx], idx );		
			 }
		}
		
	});
	
});

app = {

	body:document.getElementsByTagName("body"),
	mainContainer:document.getElementsByClassName('main-container'),
	dom:{
		componentsWrap:null,
		coverPage:null,
		addForm:null,
		updateForm:null,
		delModal:null,
		delForm:null,
		showResultsWrap:null
	},
	msg:{success:function(msg = ""){

						return "<div class='alert alert-success'>"+msg+"</div>";

					},
		info:function(msg = ""){

						return "<div class='alert alert-info'>"+msg+"</div>";

					},
		warning:function(msg = ""){

						return "<div class='alert alert-warning'>"+msg+"</div>";

					},
		danger:function(msg = ""){

						return "<div class='alert alert-error'>"+msg+"</div>";

					},
		msg_type(status = "", $msg = ""){

			switch(status){

				case'done':

					return app.msg.done($msg);

				break;
				case'no-data':

					return app.msg.info($msg);
				
				break;
				case'warning':
				
					return app.msg.warning($msg);

				break;
				case'error':
				
					return app.msg.danger($msg);

				break;
				default:

					return app.msg.danger("Tipo de mensage desconocido");
				
				break;

			}
		}
	},	
	getById:function(objectName = ""){

		return document.getElementById(objectName);

	},
	getByClass:function(className = ""){

		return document.getElementsByClassName(className);

	},
	getByTag:function(objectName = ""){

		return document.getElementsByTagName(objectName);

	},
	get_dataForm:function(noData = '', control = null){

		if(noData == '' || control == null){

			return false;

		}else{

			if(noData == 'one'){

				return control.value;

			}else if(noData == 'more'){

				let data = [];
				let c=0;

				app.loop({target:control, fn:function(d){
					
					data.push(d.value);

				}});

				return data;
			
			}else{

				return false;
			}

		}

	},
	clean_form_controls:function(ctrl = ''){

		if(ctrl != ''){

			if(typeof ctrl === 'object'){

				ctrl.value = '';

				return true;

			}else if(typeof ctrl === 'array'){

				app.loop({target:ctrl, fn:function(d){

					d.value = '';

				}});

				return true;

			}else{

				return false;

			}

		}else{

			return false;

		}

	},
	load_data_onForm(dataForm = null, data = ''){

		let c = 0 ;

		app.loop({target:dataForm, fn:function(d){

			d.value = data[c];
			c++;

		}});

	},
	innerHTML(ctrl = null, content = ''){
		try{

			ctrl.innerHTML = content;
		
		}catch(error){

			console.log(error+'-Error al colocar el contenido en el lugar solicitado');
		}

	},
	addEvent:function(objectName = null, eventName = "", fn = null){

		try{

			objectName.addEventListener(eventName, fn, false);

		}catch(error){

			console.log(error);
		}	

	},
	add_events(params = {target:null, eventName:null, functionName:null}){

		if(params.target.length != null && params.target.length != undefined){

			for(let i=0; i < params.target.length; i++ ){

				params.target[i].addEventListener(params.eventName, params.functionName, false);

			}

			return true;
		
		}else{

			console.log("add events false");

			return false;
		
		}

	},
	openModal:function(modal = null){
						
		app.show(modal);

		app.body[0].style.position = 'fixed';

	},
	closeModal(modal = ''){

		app.hide(modal);

		app.body[0].style.position = 'static';
		            		
	},
	empty:function(data = '', fn = ''){
	
		if(data == '' ||
			data == null ||
			data == undefined){

			return false;

		}else{

			if(fn != ""){

				fn();
			
			}

			return true;
		}

	},
	loop(params = {target:null, fn:null}){
		
		if(this.empty(params.target) && this.empty(params.fn)){
			
			if(params.target.length > 0){
				
				for(var i=0; i < params.target.length; i++ ){

					params.fn(params.target[i]);

				}
		
				return true;

			}else{

				console.log("Numero de objectos menor al requerido");

				return false;	
			
			} 

		}else{

			console.log("iterar false");

			return false;
		
		}

	},
	show:function(objectName = ""){

		this.empty(objectName, function(){

			objectName.style.display = "block";
		
		});	
		
	},
	hide:function(objectName = ""){

		this.empty(objectName, function(){

			objectName.style.display = "none";

		});

	},
	preventDefault(e){

		let target = null;
		
		if(e){
		
			e.preventDefault();
			target = e.target;
		
		}else{
		
			if(window.event){

				window.event.returnValue = false;
				target = window.event.srcElement;
			
			}
		
		}

		return target;

	},
	change_class(params = {target: null, 
		                   forChangeClass: null, 
		                   newClass: null}){

		try{

			if(!app.empty(params.target) ||
			   !app.empty(params.forChangeClass) ||
			   !app.empty(params.newClass)){

				console.log('Faltan parametros para modificar clases');

			}else{
			
				let classList = params.target.classList;
							
				let count = 0;
				let count2 = 0;
				let arrayClass = [];
				
				app.loop({target:classList, fn:function(classLi){
						
					arrayClass[count] = classLi; 
								
					app.loop({target:params.forChangeClass, fn:function(oldClass){
						
						if(classLi == oldClass){
				
							arrayClass[count] = params.newClass[count2];
							count2 += 1;
					
						}
							
					}});

					count++;	
					
				}});

				let stringClass = '';

				for (var i = 0; i < arrayClass.length; i++) {
					
					stringClass += arrayClass[i]+' ';
				
				}
				
				params.target.className = stringClass;

			}
				
		}catch(error){

			console.log(error);
		
		}
		
	},
	scroll_hide(target = null, hide = false){

		if(hide == false){

			target.style.overflow = 'scroll';

		}else if(hide == true){

			target.style.overflow = 'hidden';

		}else{

			console.log('Error scroll hide');

		}
	},
	objects:{

		//contiene algunaos componentes que se necesitan manipular desde otros componetes

		searchResults:null,
		addForm:null,
		updateForm:null,
		delForm:null
	},
	switch_view(views = null, showView = null){

		app.loop({target:views, fn: view => {
			
			/*si el parametro showView es igual a la propiedad name del objeto devuelto por swicthViews
			se muestra el contenidor del componente solicitado, cuando es diferente la propiedad name oculta todo*/	
			
			if( view.name == showView ){

					app.show(view.ref);

			}else{

				app.hide(view.ref);	
			
			}		

		}});
		
	}, 
	switchViews: function() {

		/*contiene una referencia de los contenedores principales de componentes 
		que son mostrados en pantalla*/
		
		return [{name:'coverPage', ref:app.dom.coverPage},
				{name:'addForm', ref:app.dom.addForm},
				{name:'showResultsWrap', ref:app.dom.showResultsWrap},
				{name:'updateFunctionForm', ref:app.dom.updateForm},
				{name:'delModal', ref:app.dom.delModal}];

	}

};
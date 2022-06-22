React GUID TO RUN

=========================================================================================	
https://www.youtube.com/watch?v=7va799ctfWQ&list=PLvvtf05eMZ2DpDyWwmAjEuicvVxx4vIYB

1) setup
		Node-JS | visualStudio CODE
		ES7 install--> react/redux/react-native/ js Snippets
		Meteriakl icon Theam - make buaty
		Prettier - code syndex
2) folder structure
		node-modules/*   ( npm install) load this dependency
		public/*
		src/*
		package.json     (node-modules version details avaliable hear)
		
		src/1) index.js   --> document.getElementById('root') ==> public/index.html (single page application - all rendering hear) [Render- valankuthal]
			2) App.js
				
3) react component
     index.js-> app.js -> HitachiModuleK.jsx -> HitachiModuleKItems.jsx (can reuse this module)
	 
4) PROPS -> reuse component with dynamic change value (element pass)
		Add chrome extenction: React Developer Tools  [ DeveloperTool-> component]
		
5) List showing  
		5.1) (https://randomuser.me/) - random user detail from web
		5.2) npm install moment - date format libeary
		5.3) looping responce array (show user list) , with unic KEY (view user)
		
6) Styling component (css)
		6.1) import css file style (use xxx.css) <p className='redText'>
		6.2) inline style  <p style={{color: 'green'}} >
		6.3) bootstrap     ==> add bootstrape lib to [index.html] (root file)  [https://getbootstrap.com/docs/5.2/components/dropdowns/]
				- headder + moduleK + module items design
		6.4) bootstrap react (meterial-ui) component
		
7) React Hooks 
		import React,{useState} from 'react' 
		react hook= without component refresh(browser refresh=rerunder brouser) , only state updated (when add button)
		setNameList(nameList => nameList.concat(newUser));  -----> add newUser to nameList
		
8) react Hooks
		import React,{useState, useEffect} from 'react';
		https://randomuser.me/api   ==> user view from url ,when button click
		useEffect --> loading when refresh page 
		
9) Routing
		- single page routing ( can not refresh page -> need to replace data and show)  Good: https://reactrouter.com/docs/en/v6/getting-started/tutorial
		Header Bar =>>> [Home | Abour | ShowUserLiust] [routing Add]
		
		npm install react-router-dom@6
		import { BrowserRouter,Routes, Route } from "react-router-dom";
		import { Link } from "react-router-dom";
		
		
==============================================================================================
git 
Git-2.36.1-64-bit
Creact repository get url{https://github.com/kreshan882/ReactJS_2022.git}
1) git Gui
	>[git config --global user.email "kreshan882@gmail.com"]
	clone exesit repository [ URL  +  LocalPath/newFolder + clone]
	git clone url
	
	================================
	upload Git BAST commant font
	================================
	git config --global user.email "kreshan882@gmail.com"
	cd ReactJS_2022/
	git init
	git add src/* (git add --all)
	git status  ==> check status 
	git commit -m "commit fst"
	git log
	git push https://github.com/kreshan882/ReactJS_202206.git


https://www.youtube.com/watch?v=RoQskA11yaM&list=PLvvtf05eMZ2DB55uevFM4rt6oiDljTc5o

1) What is a Class Component / functional component
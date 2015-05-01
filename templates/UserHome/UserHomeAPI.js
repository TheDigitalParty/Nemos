var contentContainer;
var temp1;
var temp2;
var temp3;
var temp4;

window.onload = init;


function init() {
	
	contentContainer = document.getElementById("contentContainer");

}



function showDefaultContent() {
	contentContainer.innerHTML = '<div class="header">			<div class="stats">				<p class="stat">					<span class="label label-info">5</span> Invitations				</p>				<p class="stat">					<span class="label label-success">27</span> On-going Polls				</p>				<p class="stat">					<span class="label label-danger">15</span> Overdue/Expired Polls				</p>			</div>			<h1 class="page-title">Dashboard</h1>			<ul class="breadcrumb">				<li><a href="index.html">Home</a></li>				<li class="active">Dashboard</li>			</ul>		</div>		<div class="main-content" id = "mainContentContainer">			<div class="panel panel-default">				<a href="#page-stats" class="panel-heading" data-toggle="collapse">Latest					Stats</a>				<div id="page-stats" class="panel-collapse panel-body collapse in">					<div class="row">						<div class="col-md-3 col-sm-6">							<div class="knob-container">								<input class="knob" data-width="200" data-min="0"									data-max="3000" data-displayPrevious="true" value="2500"									data-fgColor="#92A3C2" data-readOnly=true;>								<h3 class="text-muted text-center">Related Poll lists</h3>							</div>						</div>						<div class="col-md-3 col-sm-6">							<div class="knob-container">								<input class="knob" data-width="200" data-min="0"									data-max="4500" data-displayPrevious="true" value="3299"									data-fgColor="#92A3C2" data-readOnly=true;>								<h3 class="text-muted text-center">Polls You can									Participate in</h3>							</div>						</div>						<div class="col-md-3 col-sm-6">							<div class="knob-container">								<input class="knob" data-width="200" data-min="0"									data-max="2700" data-displayPrevious="true" value="1840"									data-fgColor="#92A3C2" data-readOnly=true;>								<h3 class="text-muted text-center">Pending Polls</h3>							</div>						</div>						<div class="col-md-3 col-sm-6">							<div class="knob-container">								<input class="knob" data-width="200" data-min="0"									data-max="15000" data-displayPrevious="true" value="10067"									data-fgColor="#92A3C2" data-readOnly=true;>								<h3 class="text-muted text-center">Completed Polls</h3>							</div>						</div>					</div>				</div>			</div>			<div class="row">				<div class="col-sm-6 col-md-6">					<div class="panel panel-default">						<div class="panel-heading no-collapse">							Not Collapsible<span class="label label-warning">+10</span>						</div>						<table class="table table-bordered table-striped">							<thead>								<tr>									<th>First Name</th>									<th>Last Name</th>									<th>Username</th>								</tr>							</thead>							<tbody>								<tr>									<td>Mark</td>									<td>Tompson</td>									<td>the_mark7</td>								</tr>								<tr>									<td>Ashley</td>									<td>Jacobs</td>									<td>ash11927</td>								</tr>								<tr>									<td>Audrey</td>									<td>Ann</td>									<td>audann84</td>								</tr>								<tr>									<td>John</td>									<td>Robinson</td>									<td>jr5527</td>								</tr>								<tr>									<td>Aaron</td>									<td>Butler</td>									<td>aaron_butler</td>								</tr>								<tr>									<td>Chris</td>									<td>Albert</td>									<td>cab79</td>								</tr>							</tbody>						</table>					</div>				</div>				<div class="col-sm-6 col-md-6">					<div class="panel panel-default">						<a href="#widget1container" class="panel-heading"							data-toggle="collapse">Collapsible </a>						<div id="widget1container" class="panel-body collapse in">							<h2>Heres a Tip</h2>							<p>								This template was developed with <a									href="http://middlemanapp.com/" target="_blank">Middleman</a>								and includes .erb layouts and views.							</p>							<p>All of the views you see here (sign in, sign up, users,								etc) are already split up so you dont have to waste your time								doing it yourself!</p>							<p>The layout.erb file includes the header, footer, and side								navigation and all of the views are broken out into their own								files.</p>							<p>If you arent using Ruby, there is also a set of plain								HTML files for each page, just like you would expect.</p>						</div>					</div>				</div>			</div>			<div class="row">				<div class="col-sm-6 col-md-6">					<div class="panel panel-default">						<div class="panel-heading no-collapse">							<span class="panel-icon pull-right"> <a href="#"								class="demo-cancel-click" rel="tooltip" title="Click to refresh"><i									class="fa fa-refresh"></i></a>							</span> Needed to Close						</div>						<table class="table list">							<tbody>								<tr>									<td><a href="#"><p class="title">Care Hospital</p></a>										<p class="info">Sales Rating: 86%</p></td>									<td>										<p>Date: 7/19/2012</p> <a href="#">View Transaction</a>									</td>									<td>										<p class="text-danger h3 pull-right" style="margin-top: 12px;">$20,500</p>									</td>								</tr>								<tr>									<td><a href="#"><p class="title">Custom Eyesight</p></a>										<p class="info">Sales Rating: 58%</p></td>									<td>										<p>Date: 7/19/2012</p> <a href="#">View Transaction</a>									</td>									<td>										<p class="text-danger h3 pull-right" style="margin-top: 12px;">$12,600</p>									</td>								</tr>								<tr>									<td><a href="#"><p class="title">Clear Dental</p></a>										<p class="info">Sales Rating: 76%</p></td>									<td>										<p>Date: 7/19/2012</p> <a href="#">View Transaction</a>									</td>									<td>										<p class="text-danger h3 pull-right" style="margin-top: 12px;">$2,500</p>									</td>								</tr>								<tr>									<td><a href="#"><p class="title">Safe Insurance</p></a>										<p class="info">Sales Rating: 82%</p></td>									<td>										<p>Date: 7/19/2012</p> <a href="#">View Transaction</a>									</td>									<td>										<p class="text-danger h3 pull-right" style="margin-top: 12px;">$22,400</p>									</td>								</tr>							</tbody>						</table>					</div>				</div>				<div class="col-sm-6 col-md-6">					<div class="panel panel-default">						<a href="#widget2container" class="panel-heading"							data-toggle="collapse">Collapsible </a>						<div id="widget2container" class="panel-body collapse in">							<h2>Built with Less</h2>							<p>The CSS is built with Less. There is a compiled version								included if you prefer plain CSS.</p>							<p>Fava bean jícama seakale beetroot courgette shallot								amaranth pea garbanzo carrot radicchio peanut leek pea sprouts								arugula brussels sprout green bean. Spring onion broccoli								chicory shallot winter purslane pumpkin gumbo cabbage squash								beet greens lettuce celery. Gram zucchini swiss chard mustard								burdock radish brussels sprout groundnut. Asparagus horseradish								beet greens broccoli brussels.</p>							<p>								<a class="btn btn-primary">Learn more »</a>							</p>						</div>					</div>				</div>			</div>		</div>';
	
}


function isSessionStorageEmpty() {
	
	if(sessionStorage.userName !== "" && sessionStorage.userName != null){
	 return false;
	}else{
		return true;
	}
	
}

function loadBasicPollInformation(viewOrCreate) {
	
	if(viewOrCreate === "create"){
	
	var biContainer = document.createElement("div");
	
	var basicInfo = document.createElement("form");
	basicInfo.id = "basicInfo";
	
	var pollName = document.createElement("input");
	pollName.id = "pollName";
	pollName.setAttribute("type", "text");
	pollName.required = true;
	var labelPN = document.createElement("label");
	labelPN.innerHTML = "Poll Name:  ";
	labelPN.setAttribute("for", "pollName");
	
	
	var organizerName = document.createElement("output");
	organizerName.id = "organizerName";
	organizerName.value = sessionStorage.userName;
	var labelON = document.createElement("label");
	labelON.innerHTML = "Oraniser Name(creator):  ";
	labelON.setAttribute("for", "organizerName");
	
	var openTime = document.createElement("input");
	openTime.id = "openTime";
	openTime.setAttribute("type", "datetime-local");
	openTime.required = true;
	var labelOT = document.createElement("label");
	labelOT.innerHTML = "Open Time:  ";
	labelOT.setAttribute("for", "openTime");

	
	var closeTime = document.createElement("input");
	closeTime.id = "closeTime";
	closeTime.setAttribute("type", "datetime-local");
	closeTime.required = true;
	var labelCT = document.createElement("label");
	labelCT.innerHTML = "Close Time:  ";
	labelCT.setAttribute("for", "closeTime");

	
	var pollDes = document.createElement("textarea");
	pollDes.id = "pollDes";
	pollDes.setAttribute("rows", "10");
	pollDes.setAttribute("cols", "70");
	pollDes.required = true;
	var labelDes = document.createElement("label");
	labelDes.innerHTML = "Poll Description:  ";
	labelDes.setAttribute("for", "pollDes");
	
	
	var checkBtn = document.createElement("input");
	checkBtn.setAttribute("type","submit");
	checkBtn.value = "Next";
	
	basicInfo.setAttribute("onsubmit","return false;");
	
	basicInfo.addEventListener("submit",function(){
	
		var currentDate = new Date();
		
		var OTDate = new Date(openTime.value);
		var CTDate = new Date(closeTime.value);
		
		//window.alert("type of input datetime: "+typeof(openTime)+"\ntype of current date: "+typeof(currentDate));
		//window.alert("OT: " + openTime + "\nCT: " + closeTime + "\nCuT: "+ currentDate);

		if(currentDate > OTDate){
			window.alert("illegal open time (open time should be after current time)");

		}else if (currentDate > CTDate){
			window.alert("illegal close time (close time should be after current time)");

		}else if (OTDate >= CTDate){
			window.alert("open time should be before close time");

		}else {
			loadPollModuleSelection();
		}
	
});
	
	
	contentContainer.appendChild(biContainer);
	contentContainer.appendChild(basicInfo);
	
	
	//labelPN.insertBefore(document.createTextNode("Poll Name: "), pollName);
	
	
	basicInfo.appendChild(labelON);
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(organizerName);
	
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(document.createElement("br"));
	
	
	basicInfo.appendChild(labelPN);
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(pollName);
	
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(document.createElement("br"));
	

	basicInfo.appendChild(labelOT);
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(openTime);
	
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(document.createElement("br"));
	
	basicInfo.appendChild(labelCT);
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(closeTime);
	
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(document.createElement("br"));
	
	basicInfo.appendChild(labelDes);
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(pollDes);
	
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(document.createElement("br"));
	
	basicInfo.appendChild(checkBtn);
	
	basicInfo.appendChild(document.createElement("br"));
	basicInfo.appendChild(document.createElement("br"));
	
	} else if (viewOrCreate === "view"){
		
		
		
		var biContainer = document.createElement("div");
		
		var basicInfo = document.createElement("form");
		
		
		var pollName = document.createElement("output");
		pollName.id = "pollName";
		var labelPN = document.createElement("label");
		labelPN.innerHTML = "Poll Name:  ";
		labelPN.setAttribute("for", "pollName");
		
		
		var organizerName = document.createElement("output");
		organizerName.id = "organizerName";
		organizerName.value = sessionStorage.userName;
		var labelON = document.createElement("label");
		labelON.innerHTML = "Oraniser Name(creator):  ";
		labelON.setAttribute("for", "organizerName");
		
		
		var openTime = document.createElement("output");
		openTime.id = "openTime";
		var labelOT = document.createElement("label");
		labelOT.innerHTML = "Open Time:  ";
		labelOT.setAttribute("for", "openTime");

		
		var closeTime = document.createElement("output");
		closeTime.id = "closeTime";
		var labelCT = document.createElement("label");
		labelCT.innerHTML = "Close Time:  ";
		labelCT.setAttribute("for", "closeTime");

		
		var pollDes = document.createElement("output");
		pollDes.id = "pollDes";
		pollDes.style.wordWrap = "break-word";
		var labelDes = document.createElement("label");
		labelDes.innerHTML = "Poll Description:  ";
		labelDes.setAttribute("for", "pollDes");
		
		
		pollName.value = "aaaa";
		openTime.value = new Date().toString();
		closeTime.value = new Date().toString();
		pollDes.innerHTML = "My Headingsadddddddddddddddddddddddddddddddddd\
ddddddddddddddddddddddddddddddddddddddddddddd\
ddddddddddddddddddddddddddddddddddddddddddddd\
ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd 1";
		
		contentContainer.appendChild(biContainer);
		biContainer.appendChild(basicInfo);
		
		
		//labelPN.insertBefore(document.createTextNode("Poll Name: "), pollName);
		
		basicInfo.appendChild(labelON);
		basicInfo.appendChild(document.createElement("br"));
		basicInfo.appendChild(organizerName);
		
		basicInfo.appendChild(document.createElement("br"));
		basicInfo.appendChild(document.createElement("br"));
		
		basicInfo.appendChild(labelPN);
		basicInfo.appendChild(document.createElement("br"));
		basicInfo.appendChild(pollName);
		
		basicInfo.appendChild(document.createElement("br"));
		basicInfo.appendChild(document.createElement("br"));
		
		
		
		basicInfo.appendChild(labelOT);
		basicInfo.appendChild(document.createElement("br"));
		basicInfo.appendChild(openTime);
		
		basicInfo.appendChild(document.createElement("br"));
		basicInfo.appendChild(document.createElement("br"));
		
		basicInfo.appendChild(labelCT);
		basicInfo.appendChild(document.createElement("br"));
		basicInfo.appendChild(closeTime);
		
		basicInfo.appendChild(document.createElement("br"));
		basicInfo.appendChild(document.createElement("br"));
		
		basicInfo.appendChild(labelDes);
		basicInfo.appendChild(document.createElement("br"));
		basicInfo.appendChild(pollDes);
		
		basicInfo.appendChild(document.createElement("br"));
		basicInfo.appendChild(document.createElement("br"));
		
	}
	
	
}


function loadPollModuleSelection() {
	
	var moduleSelectionContainer = document.createElement("form");
	moduleSelectionContainer.id = "moduleSelectionContainer";
	
	var moduleSelectionContainerLabel = document.createElement("label");
	moduleSelectionContainerLabel.setAttribute("for", "moduleSelectionContainer");
	moduleSelectionContainerLabel.innerHTML = "Please select a poll module: ";
	
	var selectPollModules = document.createElement("select");
	selectPollModules.id = "selectPollModules";
	selectPollModules.name = "selectPollModules";
	
	var module1 = document.createElement("option");
	module1.id = "module 1";
	module1.value = "module1";
	module1.innerHTML = "module 1";
	
	var module2 = document.createElement("option");
	module2.id = "module 2";
	module2.value = "module2";
	module2.innerHTML = "module 2";
	
	
	contentContainer.appendChild(moduleSelectionContainerLabel);
	contentContainer.appendChild(document.createElement("br"));
	contentContainer.appendChild(moduleSelectionContainer);
	
	moduleSelectionContainer.appendChild(selectPollModules);
	
	contentContainer.appendChild(document.createElement("br"));
	var moduleLoader = document.createElement("div");
	moduleLoader.id = "moduleLoader";
	contentContainer.appendChild(moduleLoader);
	
	
	selectPollModules.appendChild(module1);
	selectPollModules.appendChild(module2);
	
	
	module1.selected = true;
	module1Creation(moduleLoader);
	
	selectPollModules.addEventListener("change",function(){
		if(module1.selected){
			module1Creation(moduleLoader);
		}else if (module2.selected){
			module2Creation(moduleLoader);
		}
		
	});
	
}


//---------------------------------------poll-creation modules----------------------------------------------
function module1Creation(moduleLoader) {
	moduleLoader.innerHTML = "";
	//window.alert("module 1 selected");
	//moduleLoader.innerHTML = "module 1 load test";
	
	var parasContainer = document.createElement("form");
	parasContainer.id = "parasContainer";
	
	var parasContainerLabel = document.createElement("label");
	parasContainerLabel.innerHTML = "Set parameters for module-1 poll:  ";
	parasContainerLabel.setAttribute("for", "parasContainer");
	
	var canoptNum = document.createElement("input");
	canoptNum.setAttribute("type","number");
	canoptNum.id = "canoptNum";
	canoptNum.name = "canoptNum";
	canoptNum.required = true;
	canoptNum.setAttribute("min",1);
	canoptNum.setAttribute("max",50);
	
	var canoptNumLabel = document.createElement("label");
	canoptNumLabel.id = "canoptNumLabel";
	canoptNumLabel.innerHTML = "Decided how many candidates/opions in this poll <strong>(1~50)</strong>:  ";
	canoptNumLabel.setAttribute("for", "canoptNum");
	
	
	var rulesNum = document.createElement("input");
	rulesNum.setAttribute("type","number");
	rulesNum.id = "rulesNum";
	rulesNum.name = "rulesNum";
	rulesNum.required = true;
	rulesNum.setAttribute("min",1);
	rulesNum.setAttribute("max",50);
	
	canoptNum.addEventListener("change",function(){
		rulesNum.setAttribute("max",canoptNum.value);	
	});
	
	
	var rulesNumLabel = document.createElement("label");
	rulesNumLabel.id = "rulesNumLabel";
	rulesNumLabel.innerHTML = "Decided a voter can vote for how many candidates/options <strong>(must less than or equal with the number of candidates/options)</strong>:  ";
	rulesNumLabel.setAttribute("for", "rulesNum");
	
	var setParaBtn = document.createElement("input");
	setParaBtn.setAttribute("type","submit");
	setParaBtn.innerHTML = "Next";
	setParaBtn.id = "setParaBtn";
	
	var canOptContainer = document.createElement("form");
	canOptContainer.id = "canOptContainer";
	canOptContainer.setAttribute("onsubmit","return false;");
	
	var canOptContainerLabel = document.createElement("label");
	canOptContainerLabel.id = "canOptContainerLabel";
	canOptContainerLabel.setAttribute("for", "canOptContainerLabel");
	
	
	
	canoptNum.addEventListener("change",function(){
		rulesNum.setAttribute("max",canoptNum.value);	
	});
	
	
	parasContainer.setAttribute("onsubmit","return false;");
	
	parasContainer.addEventListener("submit",function(){
		
		canOptContainer.innerHTML = "";
		canOptContainerLabel.innerHTML = "Set information for " + canoptNum.value + " candidates/options, and each voter can vote for " + rulesNum.value + " candidates/options: ";
		
		 for (var i = 0; i < canoptNum.value; i++) {
			 temp1 = document.createElement("input");
			 temp1.setAttribute("type","text");
			 temp1.id = "canOpt"+i;
			 temp1.required = true;
			 
			 temp2 = document.createElement("textarea");
			 temp2.id = "canDes"+i;
			 temp2.setAttribute("rows", "10");
			 temp2.setAttribute("cols", "50");
			 temp2.required = true;
			 
			 temp3 = document.createElement("label");
			 temp3.id = "canOptLabel"+i;
			 temp3.setAttribute("for", temp1.id);
			 temp3.innerHTML = "Candidate/Option " +(i+1)+" name: ";
	//		 temp3.innerHTML = temp1.id;
			 
			 temp4 = document.createElement("label");
			 temp4.id = "canDesLabel"+i;
			 temp4.setAttribute("for", temp2.id);
			 temp4.innerHTML = "Candidate/Option " +(i+1)+" description: ";
	//		 temp4.innerHTML = temp2.id;
			 
			 
			 canOptContainer.appendChild(document.createElement("br"));
			 canOptContainer.appendChild(temp3);
			 canOptContainer.appendChild(document.createElement("br"));
			 canOptContainer.appendChild(temp1);
			 canOptContainer.appendChild(document.createElement("br"));
			 canOptContainer.appendChild(temp4);
			 canOptContainer.appendChild(document.createElement("br"));
			 canOptContainer.appendChild(temp2);
			 canOptContainer.appendChild(document.createElement("br"));
			 canOptContainer.appendChild(document.createElement("hr"));	
			 
			 temp1 = null;
			 temp2 = null;
			 temp3 = null;
			 temp4 = null;
		}
		 
		 var subPollBtn = document.createElement("input");
		 subPollBtn.setAttribute("type","submit");
		 subPollBtn.value = "Create Poll";
		 
		 canOptContainer.addEventListener("submit",function(){
			 window.alert("all good ready for sending request to decerver");
			 
			 
			 
			 
		 });
		 
		 
		 canOptContainer.appendChild(subPollBtn);
		 
		 
	});

	
	
	moduleLoader.appendChild(parasContainerLabel);
	moduleLoader.appendChild(document.createElement("br"));
	moduleLoader.appendChild(parasContainer);
	
	
	parasContainer.appendChild(document.createElement("br"));
	parasContainer.appendChild(canoptNumLabel);
	parasContainer.appendChild(document.createElement("br"));
	parasContainer.appendChild(canoptNum);
	parasContainer.appendChild(document.createElement("br"));
	
	parasContainer.appendChild(rulesNumLabel);
	parasContainer.appendChild(document.createElement("br"));
	parasContainer.appendChild(rulesNum);
	parasContainer.appendChild(document.createElement("br"));
	parasContainer.appendChild(setParaBtn);
	
	
	moduleLoader.appendChild(document.createElement("br"));
	moduleLoader.appendChild(document.createElement("br"));
	moduleLoader.appendChild(canOptContainerLabel);
	moduleLoader.appendChild(document.createElement("br"));
	moduleLoader.appendChild(canOptContainer);
	

}




function module2Creation(moduleLoader) {
	moduleLoader.innerHTML = "";
	//window.alert("module 2 selected");
	moduleLoader.innerHTML = "module 2 load test";
}

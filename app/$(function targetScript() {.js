$(function targetRemovalScript(target, innerTarget, inmostTarget) {
	$('#targetGrid').append('<div class="target"> <div class="innerTarget"> <div class="inmostTarget"> </div> </div> </div>');
	setTimeout(250);
	target.width = target.height = target.borderRadius = "12.5px";
	innerTarget.width = innerTarget.height = innerTarget.borderRadius = "7.5px";
	inmostTarget.width = inmostTarget.height = inmostTarget.borderRadius = "2.5px";
	
	setTimeout(250);
	target.width = target.height = target.borderRadius = "25px";
	innerTarget.width = innerTarget.height = innerTarget.borderRadius = "15px";
	inmostTarget.width = inmostTarget.height = inmostTarget.borderRadius = "5px";
	
	setTimeout(250);
	target.width = target.height = target.borderRadius = "37.5px";
	innerTarget.width = innerTarget.height = innerTarget.borderRadius = "22.5px";
	inmostTarget.width = inmostTarget.height = inmostTarget.borderRadius = "7.5px";	

	setTimeout(250);
	target.width = target.height = target.borderRadius = "50px";
	innerTarget.width = innerTarget.height = innerTarget.borderRadius = "30px";
	inmostTarget.width = inmostTarget.height = inmostTarget.borderRadius = "10px";
	
	setTimeout(250);
	target.width = target.height = target.borderRadius = "37.5px";
	innerTarget.width = innerTarget.height = innerTarget.borderRadius = "22.5px";
	inmostTarget.width = inmostTarget.height = inmostTarget.borderRadius = "7.5px";
	
	setTimeout(250);	
	target.width = target.height = target.borderRadius = "25px";
	innerTarget.width = innerTarget.height = innerTarget.borderRadius = "15px";
	inmostTarget.width = inmostTarget.height = inmostTarget.borderRadius = "5px";
	
	setTimeout(250);
	target.width = target.height = target.borderRadius = "12.5px";
	innerTarget.width = innerTarget.height = innerTarget.borderRadius = "7.5px";
	inmostTarget.width = inmostTarget.height = inmostTarget.borderRadius = "2.5px";
	
	setTimeout(250);	
	target.remove();
	missedTargets++;
});
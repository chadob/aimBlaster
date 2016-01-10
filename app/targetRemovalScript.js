$function targetRemovalScript(target, innerTarget, inmostTarget) {
		setTimeout(wait, 1000);
		target.style.width = target.style.height = target.style.borderRadius = "12.5px";
		innerTarget.style.width = innerTarget.style.height = innerTarget.style.borderRadius = "7.5px";
		inmostTarget.style.width = inmostTarget.style.height = inmostTarget.style.borderRadius = "2.5px";

		setTimeout(wait, 1000);
		target.style.width = target.style.height = target.style.borderRadius = "25px";
		innerTarget.style.width = innerTarget.style.height = innerTarget.style.borderRadius = "15px";
		inmostTarget.style.width = inmostTarget.style.height = inmostTarget.style.borderRadius = "5px";
		
		setTimeout(wait, 1000);
		target.style.width = target.style.height = target.style.borderRadius = "37.5px";
		innerTarget.style.width = innerTarget.style.height = innerTarget.style.borderRadius = "22.5px";
		inmostTarget.style.width = inmostTarget.style.height = inmostTarget.style.borderRadius = "7.5px";		

		setTimeout(wait, 1000);
		target.style.width = target.style.height = target.style.borderRadius = "50px";
		innerTarget.style.width = innerTarget.style.height = innerTarget.style.borderRadius = "30px";
		inmostTarget.style.width = inmostTarget.style.height = inmostTarget.style.borderRadius = "10px";
		
		setTimeout(wait, 1000);
		target.style.width = target.style.height = target.style.borderRadius = "37.5px";
		innerTarget.style.width = innerTarget.style.height = innerTarget.style.borderRadius = "22.5px";
		inmostTarget.style.width = inmostTarget.style.height = inmostTarget.style.borderRadius = "7.5px";
		
		setTimeout(wait, 1000);		
		target.style.width = target.style.height = target.style.borderRadius = "25px";
		innerTarget.style.width = innerTarget.style.height = innerTarget.style.borderRadius = "15px";
		inmostTarget.style.width = inmostTarget.style.height = inmostTarget.style.borderRadius = "5px";
		
		setTimeout(wait, 1000);
		target.style.width = target.style.height = target.style.borderRadius = "12.5px";
		innerTarget.style.width = innerTarget.style.height = innerTarget.style.borderRadius = "7.5px";
		inmostTarget.style.width = inmostTarget.style.height = inmostTarget.style.borderRadius = "2.5px";
		
		setTimeout(wait, 1000);		
		target.parentNode.removeChild(target);
		missedTargets++;
	}
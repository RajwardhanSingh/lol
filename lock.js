class lock{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.lock=Constraint.create(options)
		World.add(world,this.lock)
	}

	attach(body){
		this.lock.bodyA=body;
	}

	fly()
	{
		this.lock.bodyA=null;
	}

	display()
	{
		if(this.lock.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}
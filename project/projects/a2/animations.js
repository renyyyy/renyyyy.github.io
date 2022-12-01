
function getLoopingNoise({
	p,
	loopPct,
	radius,
	offset = 0
}) {

  let theta = 2 * Math.PI * loopPct

  let x = radius * Math.cos(theta)
  let y = radius * Math.sin(theta)

  let noiseVal = p.noise(x + 100, y + 30, offset)

  return noiseVal
}


let animations = [
	 {
		//skip:true,
		title: "Dynamic Wallpaper",
		setup: function(p) {
			p.background(80)
		},
		draw: function(p) {
			let t = p.millis() * .01
			let speed = 60 * p.noise(t)
			p.background(t % 100, speed % 100, t % 100);

			for (var k = 1; k <= 8; k++) {
				for (var j = 0; j < 2 * k; j++) {
					p.fill(j*10, k*10, t*10);
					p.noStroke();
					p.strokeWeight(5)
					p.stroke(j, 100, 20)
					let col = (t * 50 + j) % 800
					p.fill(col, 50, 50)
					p.circle(60 * k - 170, 60 * j + 10, 50 - t , 50 - t );
				}
			}
				}
	},

	{
		//skip:true,
		title: "Looping Star",
		setup: function (p) {
			p.background(80)
		},
		draw: function(p) {
			let t = p.millis() * .01
			let speed = 60 * p.noise(t)
			p.background(180)
			p.translate(150, 150);

			for (var i = 0; i < 10; i++) {
				p.ellipse(-30, 30, 100, 40);
				p.rotate(Math.PI * 0.25);
				
				let x = (t * 50 + i * 10)
				let y = (t * 50 + i * 5) + 10 * p.noise(t + i * 101)

				x %= p.width
				y %= p.height

				let col = (t * 50 + i) % 360
				let r = 10

				p.noStroke()
				p.fill(col, 80, 0, .1)
				p.circle(x, y + 10, r * 1)

				p.fill(col, 200, 50)
				p.circle(x, y, r)
			}
		}
	},

	{
		//skip: true,
		title: "Water Wave",
		setup: function (p) {
			p.background(80)
		},
		draw: function(p) {
			let circleRadius = 20;
			let radius;
			let t = p.millis() * .001
			p.background(176, 224, 230)
			
			p.translate(-30,200)
			for (var i = 80; i > 0; i--) {
				if (i % 2 == 0) {
				p.fill(176, 224, 230);
					k = Math.sin((t - (Math.PI / 30) * i) * 3);
					if (k > 0)
						radius = circleRadius * k;
					else
						radius = 0;
					p.ellipse(200, 200, circleRadius * i + radius);
				}
				else {
					p.fill(10);
					p.ellipse(200, 200, circleRadius * i);
				}
			}
		}

	}
]

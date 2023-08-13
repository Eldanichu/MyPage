export class Framerator {
    constructor(options = {
        fps: 12,
        tolerance: 0.1,
        from:0,
        to: 15
    }) {
        this.fps = options.fps;
        this.t = options.tolerance
        this.to = options.to;
        this.index = options.from || 0;

        this.last = performance.now();
        if (!Number.isNaN(Number(this.fps) && this.fps > 0))
            this.fps = 1000 / this.fps;
        else
            this.fps = 1000 / 60;

        this.onUpdate = null
    }

    loop(now) {
        const delta = now - this.last;

        if (delta >= this.fps - this.t) {
            this.last = now - (delta % this.fps);
            if(this.onUpdate && typeof this.onUpdate === "function"){
                this.onUpdate(this.index);
            }
            this.index++;
        }

        if (this.index < this.to) {
            this.fid = requestAnimationFrame((now) => {
                this.loop(now)
            });
        }
    }

    start() {
        this.fid = requestAnimationFrame((now) => {
            this.loop(now)
        });
    }

    stop() {
        cancelAnimationFrame(this.fid);
    }
}
import {AnimationTimer} from "@/Utils/AnimationTimer";

/**
 *
 */
export class Timer {
    constructor(options = {
        duration: -1,
        autostart: false
    }) {
        let {duration, autostart} = options;
        this._ptime = 0;
        this._elapsed = 0;
        this.duration = duration;
        this.running = false;
        this.animation = new AnimationTimer(() => {
            this.update()
        });
        this.onUpdate = null;
        this.onTimeout = null;

        if (duration > 0 && autostart) {
            this.start()
        }
    }

    update() {
        if (this.duration === -1 && this.isFunc(this.onUpdate)) {
            this.onUpdate();
            return;
        }
        this._elapsed = this._ptime * 60 / 10000
        if (this.duration >= 0 && this.duration >= this._elapsed) {
            if (!this.isFunc(this.onUpdate)) {
                return;
            }
            this.onUpdate(this._elapsed)
        } else {
            if (!this.isFunc(this.onTimeout)) {
                this.stop()
                return;
            }
            this.onTimeout()
            this.stop();
        }
        this._ptime++;
    }

    start() {
        if (this.running) {
            console.log('start timer duplicated.')
            return;
        }
        this.animation.start();
        this.running = true;
    }

    stop() {
        this._ptime = 0;
        this._elapsed = 0;
        this.animation.stop();
        this.resetUpdate()
        this.running = false;
    }

    resetUpdate() {
        if (!this.isFunc(this.onUpdate)) {
            return;
        }
        this.onUpdate(0);
    }

    pause() {
        this.animation.stop()
        this.running = false;
    }

    isRunning() {
        return this.running;
    }

    asTime(duration = 0) {
        return duration;
    }

    isFunc(func) {
        return func && typeof func === "function";
    }
}
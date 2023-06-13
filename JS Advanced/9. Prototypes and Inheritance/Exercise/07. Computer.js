function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (this.constructor === Computer) throw new Error("error");
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }
        set battery(battery) {
            if (battery instanceof Battery) {
                this._battery = battery;
            } else throw new TypeError("error");
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }
        set keyboard(kb) {
            if (kb instanceof Keyboard) {
                this._keyboard = kb;
            } else throw new TypeError("error");
        }

        get monitor() {
            return this._monitor;
        }
        set monitor(mt) {
            if (mt instanceof Monitor) {
                this._monitor = mt;
            } else throw new TypeError("error");
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };
}

const classes = createComputerHierarchy();
const Computer = classes.Computer;
const Laptop = classes.Laptop;
const Desktop = classes.Desktop;
const Monitor = classes.Monitor;
const Battery = classes.Battery;
const Keyboard = classes.Keyboard;
const c = new Computer("a", 1, 1, 1);
const battery = new Battery('Energy', 3);
const keyboard = new Keyboard("k", 1);
const monitor = new Monitor("k", 1, 2);
const desktop = new Desktop("az", 1000, 128, 2048, battery, battery);
console.log(battery);
const laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", keyboard);
console.log(laptop);
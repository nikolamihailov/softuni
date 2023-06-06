function areaVolumeCalculator(area, vol, str) {
    const data = JSON.parse(str);
    const result = [];
    for (const figCord of data) {
        result.push({ area: area.call(figCord), volume: vol.call(figCord) });
    }
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

const res = areaVolumeCalculator(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');
console.log(res);
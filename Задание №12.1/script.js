class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv() {
		let block = document.createElement('div');
		block.textContent = 'Абсолютно любой текст';
		let cssStyle = `height: ${this.height}px; 
			width: ${this.width}px;
			background: ${this.bg};
			font-size: ${this.fontSize}px;
			text-align: ${this.textAlign};
		`;
		block.style.cssText = cssStyle;
		return block;
	}
}

let obj = new Options(200, 200, '#999', 24, 'center');
document.body.appendChild(obj.createDiv());

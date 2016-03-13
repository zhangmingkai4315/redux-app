import jsdom from 'jsdom';

const doc=jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document=doc;
global.window=win;

// 将浏览器的对象属性加到node的global对象属性上

Object.keys(window).forEach((key)=>{
	if(!(key in global)){
		global[key]=window[key];
	}
})



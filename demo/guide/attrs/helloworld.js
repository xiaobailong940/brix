KISSY.add('helloworld', function(S, Brick) {
	function HelloWorld() {
		HelloWorld.superclass.constructor.apply(this, arguments);
	}
	HelloWorld.ATTRS = {
		name:{
			value:'World'
		}
	};
	S.extend(HelloWorld, Brick, {

	});

	return HelloWorld;
}, {
	requires: ["brix/core/brick"]
});
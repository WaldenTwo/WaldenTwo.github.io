const _0xeaa8 = ['ARRAY_BUFFER', 'clearColor', 'uTexture', '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20varying\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20vec2\x20vR;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20sum\x20=\x20texture2D(uTexture,\x20vUv)\x20*\x200.29411764;\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20+=\x20texture2D(uTexture,\x20vL)\x20*\x200.35294117;\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20+=\x20texture2D(uTexture,\x20vR)\x20*\x200.35294117;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20sum;\x0a\x20\x20\x20\x20}\x0a', 'addEventListener', 'RGBA16F', 'TEXTURE_WRAP_T', 'SUNRAYS_WEIGHT', 'intensity', 'moved', 'ACTIVE_UNIFORMS', 'code', 'ditherScale', 'color', 'HALF_FLOAT', 'uniform2f', 'STATIC_DRAW', 'activeTexture', 'createFramebuffer', 'format', 'deltaY', 'viewport', 'uTarget', 'CLAMP_TO_EDGE', 'length', 'BLOOM_INTENSITY', 'dissipation', 'uVelocity', 'RED', 'targetTouches', 'program', 'mouseup', '\x0a\x20\x20\x20\x20precision\x20highp\x20float;\x0a\x0a\x20\x20\x20\x20attribute\x20vec2\x20aPosition;\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20varying\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20vec2\x20vR;\x0a\x20\x20\x20\x20uniform\x20vec2\x20texelSize;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20aPosition\x20*\x200.5\x20+\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x201.33333333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vL\x20=\x20vUv\x20-\x20texelSize\x20*\x20offset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vR\x20=\x20vUv\x20+\x20texelSize\x20*\x20offset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20vec4(aPosition,\x200.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a', 'useProgram', 'clientHeight', 'PAUSED', 'swap', 'background', 'texelSizeY', 'BLEND', 'supportLinearFiltering', 'RG16F', '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vUv;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x20\x20\x20\x20uniform\x20float\x20value;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20value\x20*\x20texture2D(uTexture,\x20vUv);\x0a\x20\x20\x20\x20}\x0a', 'enable', 'getExtension', 'texelSize', 'SPLAT_FORCE', 'RGBA', 'attachShader', 'webgl2', 'createTexture', '\x0a\x20\x20\x20\x20precision\x20highp\x20float;\x0a\x0a\x20\x20\x20\x20attribute\x20vec2\x20aPosition;\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20varying\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20vec2\x20vR;\x0a\x20\x20\x20\x20varying\x20vec2\x20vT;\x0a\x20\x20\x20\x20varying\x20vec2\x20vB;\x0a\x20\x20\x20\x20uniform\x20vec2\x20texelSize;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20aPosition\x20*\x200.5\x20+\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vL\x20=\x20vUv\x20-\x20vec2(texelSize.x,\x200.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vR\x20=\x20vUv\x20+\x20vec2(texelSize.x,\x200.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vT\x20=\x20vUv\x20+\x20vec2(0.0,\x20texelSize.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vB\x20=\x20vUv\x20-\x20vec2(0.0,\x20texelSize.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20vec4(aPosition,\x200.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a', 'touchend', 'OES_texture_float_linear', 'name', '\x0a\x20\x20\x20\x20precision\x20highp\x20float;\x0a\x20\x20\x20\x20precision\x20highp\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x20\x20\x20\x20uniform\x20float\x20weight;\x0a\x0a\x20\x20\x20\x20#define\x20ITERATIONS\x2016\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20Density\x20=\x200.3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20Decay\x20=\x200.95;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20Exposure\x20=\x200.7;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20coord\x20=\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dir\x20=\x20vUv\x20-\x200.5;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20dir\x20*=\x201.0\x20/\x20float(ITERATIONS)\x20*\x20Density;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20illuminationDecay\x20=\x201.0;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20color\x20=\x20texture2D(uTexture,\x20vUv).a;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20for\x20(int\x20i\x20=\x200;\x20i\x20<\x20ITERATIONS;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20coord\x20-=\x20dir;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20col\x20=\x20texture2D(uTexture,\x20coord).a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20+=\x20col\x20*\x20illuminationDecay\x20*\x20weight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20illuminationDecay\x20*=\x20Decay;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(color\x20*\x20Exposure,\x200.0,\x200.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a', 'unset', '.shape', 'disable', 'HALF_FLOAT_OES', 'texcoordX', 'down', 'abs', 'formatRG', 'enableVertexAttribArray', 'TRANSPARENT', 'checkFramebufferStatus', '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vUv;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20texture2D(uTexture,\x20vUv);\x0a\x20\x20\x20\x20}\x0a', '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vUv;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vR;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vT;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vB;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uPressure;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uVelocity;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20L\x20=\x20texture2D(uPressure,\x20vL).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20R\x20=\x20texture2D(uPressure,\x20vR).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20T\x20=\x20texture2D(uPressure,\x20vT).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20B\x20=\x20texture2D(uPressure,\x20vB).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20velocity\x20=\x20texture2D(uVelocity,\x20vUv).xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20velocity.xy\x20-=\x20vec2(R\x20-\x20L,\x20T\x20-\x20B);\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(velocity,\x200.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a', 'threshold', 'switched', 'bind', 'TEXTURE_MAG_FILTER', 'COLOR_ATTACHMENT0', 'SUNRAYS', 'uniform3f', '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x0a\x20\x20\x20\x20uniform\x20vec4\x20color;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20color;\x0a\x20\x20\x20\x20}\x0a', 'TEXTURE_MIN_FILTER', 'BLOOM_ITERATIONS', 'OES_texture_half_float', 'uSource', 'aspectRatio', 'SHADING', 'VERTEX_SHADER', 'point', 'NEAREST', 'SIM_RESOLUTION', 'curl', 'attach', 'bindBuffer', 'RGB', '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x20\x20\x20\x20uniform\x20vec3\x20curve;\x0a\x20\x20\x20\x20uniform\x20float\x20threshold;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20c\x20=\x20texture2D(uTexture,\x20vUv).rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20br\x20=\x20max(c.r,\x20max(c.g,\x20c.b));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20rq\x20=\x20clamp(br\x20-\x20curve.x,\x200.0,\x20curve.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20rq\x20=\x20curve.z\x20*\x20rq\x20*\x20rq;\x0a\x20\x20\x20\x20\x20\x20\x20\x20c\x20*=\x20max(rq,\x20br\x20-\x20threshold)\x20/\x20max(br,\x200.0001);\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(c,\x200.0);\x0a\x20\x20\x20\x20}\x0a', 'webgl', 'DOMContentLoaded', 'weight', 'pageX', 'activeProgram', 'halfFloatTexType', 'width', 'PRESSURE', 'devicePixelRatio', 'uniform1f', 'BLOOM', 'TEXTURE_2D', 'texelSizeX', '\x0a\x20\x20\x20\x20precision\x20highp\x20float;\x0a\x20\x20\x20\x20precision\x20highp\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20c\x20=\x20texture2D(uTexture,\x20vUv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20br\x20=\x20max(c.r,\x20max(c.g,\x20c.b));\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.a\x20=\x201.0\x20-\x20min(max(br\x20*\x2020.0,\x200.0),\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20c;\x0a\x20\x20\x20\x20}\x0a', 'COLORFUL', 'prevTexcoordX', 'random', 'blendFunc', 'texcoordY', 'style', 'find', 'BLOOM_SOFT_KNEE', 'push', 'drawingBufferHeight', 'UNSIGNED_BYTE', 'uniforms', 'formatR', 'COLOR_BUFFER_BIT', 'now', 'internalFormat', 'texImage2D', 'createProgram', 'REPEAT', 'read', 'mousemove', 'floor', 'clear', 'VELOCITY_DISSIPATION', 'pageY', 'getProgramInfoLog', 'CURL', 'curve', 'deltaX', 'preventDefault', 'FRAGMENT_SHADER', 'programs', 'bindTexture', 'TEXTURE0', 'height', '\x0a\x20\x20\x20\x20precision\x20highp\x20float;\x0a\x20\x20\x20\x20precision\x20highp\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uVelocity;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uSource;\x0a\x20\x20\x20\x20uniform\x20vec2\x20texelSize;\x0a\x20\x20\x20\x20uniform\x20vec2\x20dyeTexelSize;\x0a\x20\x20\x20\x20uniform\x20float\x20dt;\x0a\x20\x20\x20\x20uniform\x20float\x20dissipation;\x0a\x0a\x20\x20\x20\x20vec4\x20bilerp\x20(sampler2D\x20sam,\x20vec2\x20uv,\x20vec2\x20tsize)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20st\x20=\x20uv\x20/\x20tsize\x20-\x200.5;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20iuv\x20=\x20floor(st);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20fuv\x20=\x20fract(st);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20a\x20=\x20texture2D(sam,\x20(iuv\x20+\x20vec2(0.5,\x200.5))\x20*\x20tsize);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20b\x20=\x20texture2D(sam,\x20(iuv\x20+\x20vec2(1.5,\x200.5))\x20*\x20tsize);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20c\x20=\x20texture2D(sam,\x20(iuv\x20+\x20vec2(0.5,\x201.5))\x20*\x20tsize);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20d\x20=\x20texture2D(sam,\x20(iuv\x20+\x20vec2(1.5,\x201.5))\x20*\x20tsize);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20mix(mix(a,\x20b,\x20fuv.x),\x20mix(c,\x20d,\x20fuv.x),\x20fuv.y);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20#ifdef\x20MANUAL_FILTERING\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20coord\x20=\x20vUv\x20-\x20dt\x20*\x20bilerp(uVelocity,\x20vUv,\x20texelSize).xy\x20*\x20texelSize;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20result\x20=\x20bilerp(uSource,\x20coord,\x20dyeTexelSize);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20coord\x20=\x20vUv\x20-\x20dt\x20*\x20texture2D(uVelocity,\x20vUv).xy\x20*\x20texelSize;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20result\x20=\x20texture2D(uSource,\x20coord);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20decay\x20=\x201.0\x20+\x20dissipation\x20*\x20dt;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20result\x20/\x20decay;\x0a\x20\x20\x20\x20}', 'compileShader', 'formatRGBA', 'bindFramebuffer', 'texParameteri', 'src', '#define\x20', 'fbo', 'forEach', 'FRAMEBUFFER', 'uDithering', 'LINEAR', 'framebufferTexture2D', '\x0a\x20\x20\x20\x20precision\x20highp\x20float;\x0a\x20\x20\x20\x20precision\x20highp\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x20\x20\x20\x20uniform\x20float\x20aspectRatio;\x0a\x0a\x20\x20\x20\x20#define\x20SCALE\x2025.0\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20floor(vUv\x20*\x20SCALE\x20*\x20vec2(aspectRatio,\x201.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20v\x20=\x20mod(uv.x\x20+\x20uv.y,\x202.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20v\x20=\x20v\x20*\x200.1\x20+\x200.8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(vec3(v),\x201.0);\x0a\x20\x20\x20\x20}\x0a', 'uniform1i', 'drawingBufferWidth', 'getContext', 'ELEMENT_ARRAY_BUFFER', 'uPressure', 'prevTexcoordY', 'write', 'shaderSource', 'COMPILE_STATUS', 'BLOOM_THRESHOLD', 'bufferData', 'OES_texture_half_float_linear'];
const _0x409e = function(_0xeaa89, _0x409ec7) {
    _0xeaa89 = _0xeaa89 - 0x0;
    let _0x4ae7da = _0xeaa8[_0xeaa89];
    return _0x4ae7da;
};
'use strict';
const canvas = document['getElementById']('background');
resizeCanvas();

function pointerPrototype() {
    this['id'] = -0x1;
    this[_0x409e('0x3c')] = 0x0;
    this[_0x409e('0x6e')] = 0x0;
    this['prevTexcoordX'] = 0x0;
    this['prevTexcoordY'] = 0x0;
    this['deltaX'] = 0x0;
    this[_0x409e('0x14')] = 0x0;
    this[_0x409e('0x3d')] = ![];
    this[_0x409e('0x9')] = ![];
    this['color'] = [0x1e, 0x0, 0x12c];
}
let pointers = [];
let splatStack = [];
pointers['push'](new pointerPrototype());
const {
    gl,
    ext
} = getWebGLContext(canvas);
if (isMobile()) {
    config['DYE_RESOLUTION'] = 0x200;
}
if (!ext[_0x409e('0x28')]) {
    config['DYE_RESOLUTION'] = 0x200;
    config['SHADING'] = ![];
    config['BLOOM'] = ![];
    config['SUNRAYS'] = ![];
}

function getWebGLContext(_0x3a73) {
    const _0x4e44ba = {
        'alpha': !![],
        'depth': ![],
        'stencil': ![],
        'antialias': ![],
        'preserveDrawingBuffer': ![]
    };
    let _0x4c9df8 = _0x3a73['getContext'](_0x409e('0x31'), _0x4e44ba);
    const _0x1a06ee = !!_0x4c9df8;
    if (!_0x1a06ee) _0x4c9df8 = _0x3a73[_0x409e('0x9d')](_0x409e('0x5c'), _0x4e44ba) || _0x3a73['getContext']('experimental-webgl', _0x4e44ba);
    let _0x485750;
    let _0x573f26;
    if (_0x1a06ee) {
        _0x4c9df8[_0x409e('0x2c')]('EXT_color_buffer_float');
        _0x573f26 = _0x4c9df8[_0x409e('0x2c')](_0x409e('0x35'));
    } else {
        _0x485750 = _0x4c9df8['getExtension'](_0x409e('0x4f'));
        _0x573f26 = _0x4c9df8['getExtension'](_0x409e('0xa6'));
    }
    _0x4c9df8[_0x409e('0x1')](0x0, 0x0, 0x0, 0x1);
    const _0x3f804a = _0x1a06ee ? _0x4c9df8[_0x409e('0xe')] : _0x485750[_0x409e('0x3b')];
    let _0x3f22c0;
    let _0x4d3059;
    let _0x2add75;
    if (_0x1a06ee) {
        _0x3f22c0 = getSupportedFormat(_0x4c9df8, _0x4c9df8[_0x409e('0x5')], _0x4c9df8['RGBA'], _0x3f804a);
        _0x4d3059 = getSupportedFormat(_0x4c9df8, _0x4c9df8[_0x409e('0x29')], _0x4c9df8['RG'], _0x3f804a);
        _0x2add75 = getSupportedFormat(_0x4c9df8, _0x4c9df8['R16F'], _0x4c9df8[_0x409e('0x1c')], _0x3f804a);
    } else {
        _0x3f22c0 = getSupportedFormat(_0x4c9df8, _0x4c9df8['RGBA'], _0x4c9df8['RGBA'], _0x3f804a);
        _0x4d3059 = getSupportedFormat(_0x4c9df8, _0x4c9df8[_0x409e('0x2f')], _0x4c9df8['RGBA'], _0x3f804a);
        _0x2add75 = getSupportedFormat(_0x4c9df8, _0x4c9df8[_0x409e('0x2f')], _0x4c9df8['RGBA'], _0x3f804a);
    }
    return {
        'gl': _0x4c9df8,
        'ext': {
            'formatRGBA': _0x3f22c0,
            'formatRG': _0x4d3059,
            'formatR': _0x2add75,
            'halfFloatTexType': _0x3f804a,
            'supportLinearFiltering': _0x573f26
        }
    };
}

function getSupportedFormat(_0x3c8dc6, _0x54c8ff, _0x1c9f21, _0x23919e) {
    if (!supportRenderTextureFormat(_0x3c8dc6, _0x54c8ff, _0x1c9f21, _0x23919e)) {
        switch (_0x54c8ff) {
            case _0x3c8dc6['R16F']:
                return getSupportedFormat(_0x3c8dc6, _0x3c8dc6[_0x409e('0x29')], _0x3c8dc6['RG'], _0x23919e);
            case _0x3c8dc6[_0x409e('0x29')]:
                return getSupportedFormat(_0x3c8dc6, _0x3c8dc6['RGBA16F'], _0x3c8dc6[_0x409e('0x2f')], _0x23919e);
            default:
                return null;
        }
    }
    return {
        'internalFormat': _0x54c8ff,
        'format': _0x1c9f21
    };
}

function supportRenderTextureFormat(_0x363af1, _0x3d344a, _0x33e175, _0x175a89) {
    let _0xd9dc0f = _0x363af1[_0x409e('0x32')]();
    _0x363af1[_0x409e('0x8a')](_0x363af1['TEXTURE_2D'], _0xd9dc0f);
    _0x363af1['texParameteri'](_0x363af1['TEXTURE_2D'], _0x363af1[_0x409e('0x4d')], _0x363af1[_0x409e('0x55')]);
    _0x363af1[_0x409e('0x91')](_0x363af1['TEXTURE_2D'], _0x363af1[_0x409e('0x48')], _0x363af1['NEAREST']);
    _0x363af1['texParameteri'](_0x363af1[_0x409e('0x67')], _0x363af1['TEXTURE_WRAP_S'], _0x363af1['CLAMP_TO_EDGE']);
    _0x363af1[_0x409e('0x91')](_0x363af1['TEXTURE_2D'], _0x363af1['TEXTURE_WRAP_T'], _0x363af1[_0x409e('0x17')]);
    _0x363af1['texImage2D'](_0x363af1[_0x409e('0x67')], 0x0, _0x3d344a, 0x4, 0x4, 0x0, _0x33e175, _0x175a89, null);
    let _0x37fb7f = _0x363af1['createFramebuffer']();
    _0x363af1['bindFramebuffer'](_0x363af1[_0x409e('0x96')], _0x37fb7f);
    _0x363af1[_0x409e('0x99')](_0x363af1['FRAMEBUFFER'], _0x363af1[_0x409e('0x49')], _0x363af1[_0x409e('0x67')], _0xd9dc0f, 0x0);
    const _0x407060 = _0x363af1[_0x409e('0x42')](_0x363af1[_0x409e('0x96')]);
    return _0x407060 == _0x363af1['FRAMEBUFFER_COMPLETE'];
}

function isMobile() {
    return /Mobi|Android/i ['test'](navigator['userAgent']);
}
class Material {
    constructor(_0x364ef8, _0x163837) {
        this['vertexShader'] = _0x364ef8;
        this['fragmentShaderSource'] = _0x163837;
        this['programs'] = [];
        this[_0x409e('0x60')] = null;
        this[_0x409e('0x75')] = [];
    } ['setKeywords'](_0x1b8f25) {
        let _0x99b88f = 0x0;
        for (let _0x60b174 = 0x0; _0x60b174 < _0x1b8f25[_0x409e('0x18')]; _0x60b174++) _0x99b88f += hashCode(_0x1b8f25[_0x60b174]);
        let _0x3b4137 = this['programs'][_0x99b88f];
        if (_0x3b4137 == null) {
            let _0x23bf3c = compileShader(gl['FRAGMENT_SHADER'], this['fragmentShaderSource'], _0x1b8f25);
            _0x3b4137 = createProgram(this['vertexShader'], _0x23bf3c);
            this[_0x409e('0x89')][_0x99b88f] = _0x3b4137;
        }
        if (_0x3b4137 == this[_0x409e('0x60')]) return;
        this[_0x409e('0x75')] = getUniforms(_0x3b4137);
        this['activeProgram'] = _0x3b4137;
    } [_0x409e('0x47')]() {
        gl[_0x409e('0x21')](this['activeProgram']);
    }
}
class Program {
    constructor(_0x200cd7, _0x2e79f5) {
        this['uniforms'] = {};
        this['program'] = createProgram(_0x200cd7, _0x2e79f5);
        this[_0x409e('0x75')] = getUniforms(this[_0x409e('0x1e')]);
    } ['bind']() {
        gl[_0x409e('0x21')](this[_0x409e('0x1e')]);
    }
}

function createProgram(_0x21bb35, _0x338604) {
    let _0x19b638 = gl[_0x409e('0x7b')]();
    gl[_0x409e('0x30')](_0x19b638, _0x21bb35);
    gl['attachShader'](_0x19b638, _0x338604);
    gl['linkProgram'](_0x19b638);
    if (!gl['getProgramParameter'](_0x19b638, gl['LINK_STATUS'])) throw gl[_0x409e('0x83')](_0x19b638);
    return _0x19b638;
}

function getUniforms(_0x5bd9e3) {
    let _0x4483f2 = [];
    let _0xef07ce = gl['getProgramParameter'](_0x5bd9e3, gl[_0x409e('0xa')]);
    for (let _0x1d9b46 = 0x0; _0x1d9b46 < _0xef07ce; _0x1d9b46++) {
        let _0x12cfd1 = gl['getActiveUniform'](_0x5bd9e3, _0x1d9b46)[_0x409e('0x36')];
        _0x4483f2[_0x12cfd1] = gl['getUniformLocation'](_0x5bd9e3, _0x12cfd1);
    }
    return _0x4483f2;
}

function compileShader(_0x5f2051, _0x424d29, _0x4912a5) {
    _0x424d29 = addKeywords(_0x424d29, _0x4912a5);
    const _0x42622a = gl['createShader'](_0x5f2051);
    gl[_0x409e('0xa2')](_0x42622a, _0x424d29);
    gl[_0x409e('0x8e')](_0x42622a);
    if (!gl['getShaderParameter'](_0x42622a, gl[_0x409e('0xa3')])) throw gl['getShaderInfoLog'](_0x42622a);
    return _0x42622a;
};

function addKeywords(_0x20976c, _0x23a4a6) {
    if (_0x23a4a6 == null) return _0x20976c;
    let _0x2d09c8 = '';
    _0x23a4a6['forEach'](_0x48dfd3 => {
        _0x2d09c8 += _0x409e('0x93') + _0x48dfd3 + '\x0a';
    });
    return _0x2d09c8 + _0x20976c;
}
const baseVertexShader = compileShader(gl[_0x409e('0x53')], _0x409e('0x33'));
const blurVertexShader = compileShader(gl[_0x409e('0x53')], _0x409e('0x20'));
const blurShader = compileShader(gl['FRAGMENT_SHADER'], _0x409e('0x3'));
const copyShader = compileShader(gl[_0x409e('0x88')], _0x409e('0x43'));
const clearShader = compileShader(gl[_0x409e('0x88')], _0x409e('0x2a'));
const colorShader = compileShader(gl['FRAGMENT_SHADER'], _0x409e('0x4c'));
const checkerboardShader = compileShader(gl[_0x409e('0x88')], _0x409e('0x9a'));
const displayShaderSource = '\x0a\x20\x20\x20\x20precision\x20highp\x20float;\x0a\x20\x20\x20\x20precision\x20highp\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20varying\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20vec2\x20vR;\x0a\x20\x20\x20\x20varying\x20vec2\x20vT;\x0a\x20\x20\x20\x20varying\x20vec2\x20vB;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uBloom;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uSunrays;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uDithering;\x0a\x20\x20\x20\x20uniform\x20vec2\x20ditherScale;\x0a\x20\x20\x20\x20uniform\x20vec2\x20texelSize;\x0a\x0a\x20\x20\x20\x20vec3\x20linearToGamma\x20(vec3\x20color)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20max(color,\x20vec3(0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20max(1.055\x20*\x20pow(color,\x20vec3(0.416666667))\x20-\x200.055,\x20vec3(0));\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20c\x20=\x20texture2D(uTexture,\x20vUv).rgb;\x0a\x0a\x20\x20\x20\x20#ifdef\x20SHADING\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20lc\x20=\x20texture2D(uTexture,\x20vL).rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20rc\x20=\x20texture2D(uTexture,\x20vR).rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20tc\x20=\x20texture2D(uTexture,\x20vT).rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20bc\x20=\x20texture2D(uTexture,\x20vB).rgb;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dx\x20=\x20length(rc)\x20-\x20length(lc);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dy\x20=\x20length(tc)\x20-\x20length(bc);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20n\x20=\x20normalize(vec3(dx,\x20dy,\x20length(texelSize)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20l\x20=\x20vec3(0.0,\x200.0,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20diffuse\x20=\x20clamp(dot(n,\x20l)\x20+\x200.7,\x200.7,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20c\x20*=\x20diffuse;\x0a\x20\x20\x20\x20#endif\x0a\x0a\x20\x20\x20\x20#ifdef\x20BLOOM\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20bloom\x20=\x20texture2D(uBloom,\x20vUv).rgb;\x0a\x20\x20\x20\x20#endif\x0a\x0a\x20\x20\x20\x20#ifdef\x20SUNRAYS\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20sunrays\x20=\x20texture2D(uSunrays,\x20vUv).r;\x0a\x20\x20\x20\x20\x20\x20\x20\x20c\x20*=\x20sunrays;\x0a\x20\x20\x20\x20#ifdef\x20BLOOM\x0a\x20\x20\x20\x20\x20\x20\x20\x20bloom\x20*=\x20sunrays;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#endif\x0a\x0a\x20\x20\x20\x20#ifdef\x20BLOOM\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20noise\x20=\x20texture2D(uDithering,\x20vUv\x20*\x20ditherScale).r;\x0a\x20\x20\x20\x20\x20\x20\x20\x20noise\x20=\x20noise\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20bloom\x20+=\x20noise\x20/\x20255.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20bloom\x20=\x20linearToGamma(bloom);\x0a\x20\x20\x20\x20\x20\x20\x20\x20c\x20+=\x20bloom;\x0a\x20\x20\x20\x20#endif\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20a\x20=\x20max(c.r,\x20max(c.g,\x20c.b));\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(c,\x20a);\x0a\x20\x20\x20\x20}\x0a';
const bloomPrefilterShader = compileShader(gl['FRAGMENT_SHADER'], _0x409e('0x5b'));
const bloomBlurShader = compileShader(gl['FRAGMENT_SHADER'], '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20vec2\x20vR;\x0a\x20\x20\x20\x20varying\x20vec2\x20vT;\x0a\x20\x20\x20\x20varying\x20vec2\x20vB;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20sum\x20=\x20vec4(0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20+=\x20texture2D(uTexture,\x20vL);\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20+=\x20texture2D(uTexture,\x20vR);\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20+=\x20texture2D(uTexture,\x20vT);\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20+=\x20texture2D(uTexture,\x20vB);\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20*=\x200.25;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20sum;\x0a\x20\x20\x20\x20}\x0a');
const bloomFinalShader = compileShader(gl['FRAGMENT_SHADER'], '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20vec2\x20vR;\x0a\x20\x20\x20\x20varying\x20vec2\x20vT;\x0a\x20\x20\x20\x20varying\x20vec2\x20vB;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x20\x20\x20\x20uniform\x20float\x20intensity;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20sum\x20=\x20vec4(0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20+=\x20texture2D(uTexture,\x20vL);\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20+=\x20texture2D(uTexture,\x20vR);\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20+=\x20texture2D(uTexture,\x20vT);\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20+=\x20texture2D(uTexture,\x20vB);\x0a\x20\x20\x20\x20\x20\x20\x20\x20sum\x20*=\x200.25;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20sum\x20*\x20intensity;\x0a\x20\x20\x20\x20}\x0a');
const sunraysMaskShader = compileShader(gl[_0x409e('0x88')], _0x409e('0x69'));
const sunraysShader = compileShader(gl[_0x409e('0x88')], _0x409e('0x37'));
const splatShader = compileShader(gl[_0x409e('0x88')], '\x0a\x20\x20\x20\x20precision\x20highp\x20float;\x0a\x20\x20\x20\x20precision\x20highp\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTarget;\x0a\x20\x20\x20\x20uniform\x20float\x20aspectRatio;\x0a\x20\x20\x20\x20uniform\x20vec3\x20color;\x0a\x20\x20\x20\x20uniform\x20vec2\x20point;\x0a\x20\x20\x20\x20uniform\x20float\x20radius;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20p\x20=\x20vUv\x20-\x20point.xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20p.x\x20*=\x20aspectRatio;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20splat\x20=\x20exp(-dot(p,\x20p)\x20/\x20radius)\x20*\x20color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20base\x20=\x20texture2D(uTarget,\x20vUv).xyz;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(base\x20+\x20splat,\x201.0);\x0a\x20\x20\x20\x20}\x0a');
const advectionShader = compileShader(gl[_0x409e('0x88')], _0x409e('0x8d'), ext[_0x409e('0x28')] ? null : ['MANUAL_FILTERING']);
const divergenceShader = compileShader(gl['FRAGMENT_SHADER'], '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vUv;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vR;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vT;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vB;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uVelocity;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20L\x20=\x20texture2D(uVelocity,\x20vL).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20R\x20=\x20texture2D(uVelocity,\x20vR).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20T\x20=\x20texture2D(uVelocity,\x20vT).y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20B\x20=\x20texture2D(uVelocity,\x20vB).y;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20C\x20=\x20texture2D(uVelocity,\x20vUv).xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(vL.x\x20<\x200.0)\x20{\x20L\x20=\x20-C.x;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(vR.x\x20>\x201.0)\x20{\x20R\x20=\x20-C.x;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(vT.y\x20>\x201.0)\x20{\x20T\x20=\x20-C.y;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(vB.y\x20<\x200.0)\x20{\x20B\x20=\x20-C.y;\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20div\x20=\x200.5\x20*\x20(R\x20-\x20L\x20+\x20T\x20-\x20B);\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(div,\x200.0,\x200.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a');
const curlShader = compileShader(gl['FRAGMENT_SHADER'], '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vUv;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vR;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vT;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vB;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uVelocity;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20L\x20=\x20texture2D(uVelocity,\x20vL).y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20R\x20=\x20texture2D(uVelocity,\x20vR).y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20T\x20=\x20texture2D(uVelocity,\x20vT).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20B\x20=\x20texture2D(uVelocity,\x20vB).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20vorticity\x20=\x20R\x20-\x20L\x20-\x20T\x20+\x20B;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(0.5\x20*\x20vorticity,\x200.0,\x200.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a');
const vorticityShader = compileShader(gl[_0x409e('0x88')], '\x0a\x20\x20\x20\x20precision\x20highp\x20float;\x0a\x20\x20\x20\x20precision\x20highp\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20varying\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20vec2\x20vR;\x0a\x20\x20\x20\x20varying\x20vec2\x20vT;\x0a\x20\x20\x20\x20varying\x20vec2\x20vB;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uVelocity;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uCurl;\x0a\x20\x20\x20\x20uniform\x20float\x20curl;\x0a\x20\x20\x20\x20uniform\x20float\x20dt;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20L\x20=\x20texture2D(uCurl,\x20vL).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20R\x20=\x20texture2D(uCurl,\x20vR).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20T\x20=\x20texture2D(uCurl,\x20vT).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20B\x20=\x20texture2D(uCurl,\x20vB).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20C\x20=\x20texture2D(uCurl,\x20vUv).x;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20force\x20=\x200.5\x20*\x20vec2(abs(T)\x20-\x20abs(B),\x20abs(R)\x20-\x20abs(L));\x0a\x20\x20\x20\x20\x20\x20\x20\x20force\x20/=\x20length(force)\x20+\x200.0001;\x0a\x20\x20\x20\x20\x20\x20\x20\x20force\x20*=\x20curl\x20*\x20C;\x0a\x20\x20\x20\x20\x20\x20\x20\x20force.y\x20*=\x20-1.0;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20vel\x20=\x20texture2D(uVelocity,\x20vUv).xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(vel\x20+\x20force\x20*\x20dt,\x200.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a');
const pressureShader = compileShader(gl['FRAGMENT_SHADER'], '\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20sampler2D;\x0a\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vUv;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vL;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vR;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vT;\x0a\x20\x20\x20\x20varying\x20highp\x20vec2\x20vB;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uPressure;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uDivergence;\x0a\x0a\x20\x20\x20\x20void\x20main\x20()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20L\x20=\x20texture2D(uPressure,\x20vL).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20R\x20=\x20texture2D(uPressure,\x20vR).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20T\x20=\x20texture2D(uPressure,\x20vT).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20B\x20=\x20texture2D(uPressure,\x20vB).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20C\x20=\x20texture2D(uPressure,\x20vUv).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20divergence\x20=\x20texture2D(uDivergence,\x20vUv).x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20pressure\x20=\x20(L\x20+\x20R\x20+\x20B\x20+\x20T\x20-\x20divergence)\x20*\x200.25;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(pressure,\x200.0,\x200.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a');
const gradientSubtractShader = compileShader(gl['FRAGMENT_SHADER'], _0x409e('0x44'));
const blit = (() => {
    gl[_0x409e('0x59')](gl[_0x409e('0x0')], gl['createBuffer']());
    gl['bufferData'](gl[_0x409e('0x0')], new Float32Array([-0x1, -0x1, -0x1, 0x1, 0x1, 0x1, 0x1, -0x1]), gl['STATIC_DRAW']);
    gl[_0x409e('0x59')](gl[_0x409e('0x9e')], gl['createBuffer']());
    gl[_0x409e('0xa5')](gl['ELEMENT_ARRAY_BUFFER'], new Uint16Array([0x0, 0x1, 0x2, 0x0, 0x2, 0x3]), gl[_0x409e('0x10')]);
    gl['vertexAttribPointer'](0x0, 0x2, gl['FLOAT'], ![], 0x0, 0x0);
    gl[_0x409e('0x40')](0x0);
    return _0x4fdee0 => {
        gl[_0x409e('0x90')](gl['FRAMEBUFFER'], _0x4fdee0);
        gl['drawElements'](gl['TRIANGLES'], 0x6, gl['UNSIGNED_SHORT'], 0x0);
    };
})();
let dye;
let velocity;
let divergence;
let curl;
let pressure;
let bloom;
let bloomFramebuffers = [];
let sunrays;
let sunraysTemp;
let ditheringTexture = createTextureAsync('assets/background.png');
const blurProgram = new Program(blurVertexShader, blurShader);
const copyProgram = new Program(baseVertexShader, copyShader);
const clearProgram = new Program(baseVertexShader, clearShader);
const colorProgram = new Program(baseVertexShader, colorShader);
const checkerboardProgram = new Program(baseVertexShader, checkerboardShader);
const bloomPrefilterProgram = new Program(baseVertexShader, bloomPrefilterShader);
const bloomBlurProgram = new Program(baseVertexShader, bloomBlurShader);
const bloomFinalProgram = new Program(baseVertexShader, bloomFinalShader);
const sunraysMaskProgram = new Program(baseVertexShader, sunraysMaskShader);
const sunraysProgram = new Program(baseVertexShader, sunraysShader);
const splatProgram = new Program(baseVertexShader, splatShader);
const advectionProgram = new Program(baseVertexShader, advectionShader);
const divergenceProgram = new Program(baseVertexShader, divergenceShader);
const curlProgram = new Program(baseVertexShader, curlShader);
const vorticityProgram = new Program(baseVertexShader, vorticityShader);
const pressureProgram = new Program(baseVertexShader, pressureShader);
const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);
const displayMaterial = new Material(baseVertexShader, displayShaderSource);

function initFramebuffers() {
    let _0x5764f5 = getResolution(config[_0x409e('0x56')]);
    let _0x19d657 = getResolution(config['DYE_RESOLUTION']);
    const _0x2c1b4c = ext[_0x409e('0x61')];
    const _0x3dc315 = ext[_0x409e('0x8f')];
    const _0x282646 = ext[_0x409e('0x3f')];
    const _0x1064fd = ext['formatR'];
    const _0x4c606c = ext[_0x409e('0x28')] ? gl[_0x409e('0x98')] : gl[_0x409e('0x55')];
    if (dye == null) dye = createDoubleFBO(_0x19d657['width'], _0x19d657['height'], _0x3dc315['internalFormat'], _0x3dc315[_0x409e('0x13')], _0x2c1b4c, _0x4c606c);
    else dye = resizeDoubleFBO(dye, _0x19d657['width'], _0x19d657['height'], _0x3dc315['internalFormat'], _0x3dc315['format'], _0x2c1b4c, _0x4c606c);
    if (velocity == null) velocity = createDoubleFBO(_0x5764f5['width'], _0x5764f5[_0x409e('0x8c')], _0x282646['internalFormat'], _0x282646[_0x409e('0x13')], _0x2c1b4c, _0x4c606c);
    else velocity = resizeDoubleFBO(velocity, _0x5764f5[_0x409e('0x62')], _0x5764f5['height'], _0x282646['internalFormat'], _0x282646['format'], _0x2c1b4c, _0x4c606c);
    divergence = createFBO(_0x5764f5['width'], _0x5764f5['height'], _0x1064fd['internalFormat'], _0x1064fd[_0x409e('0x13')], _0x2c1b4c, gl['NEAREST']);
    curl = createFBO(_0x5764f5['width'], _0x5764f5['height'], _0x1064fd[_0x409e('0x79')], _0x1064fd[_0x409e('0x13')], _0x2c1b4c, gl['NEAREST']);
    pressure = createDoubleFBO(_0x5764f5['width'], _0x5764f5[_0x409e('0x8c')], _0x1064fd[_0x409e('0x79')], _0x1064fd['format'], _0x2c1b4c, gl['NEAREST']);
    initBloomFramebuffers();
    initSunraysFramebuffers();
}

function initBloomFramebuffers() {
    let _0x2350b3 = getResolution(config['BLOOM_RESOLUTION']);
    const _0xbc6062 = ext['halfFloatTexType'];
    const _0x1051af = ext[_0x409e('0x8f')];
    const _0x73c318 = ext[_0x409e('0x28')] ? gl['LINEAR'] : gl['NEAREST'];
    bloom = createFBO(_0x2350b3[_0x409e('0x62')], _0x2350b3['height'], _0x1051af[_0x409e('0x79')], _0x1051af[_0x409e('0x13')], _0xbc6062, _0x73c318);
    bloomFramebuffers['length'] = 0x0;
    for (let _0xd2d98e = 0x0; _0xd2d98e < config[_0x409e('0x4e')]; _0xd2d98e++) {
        let _0x2fbced = _0x2350b3[_0x409e('0x62')] >> _0xd2d98e + 0x1;
        let _0x5a6398 = _0x2350b3['height'] >> _0xd2d98e + 0x1;
        if (_0x2fbced < 0x2 || _0x5a6398 < 0x2) break;
        let _0x104ef8 = createFBO(_0x2fbced, _0x5a6398, _0x1051af[_0x409e('0x79')], _0x1051af[_0x409e('0x13')], _0xbc6062, _0x73c318);
        bloomFramebuffers['push'](_0x104ef8);
    }
}

function initSunraysFramebuffers() {
    let _0x1f955e = getResolution(config['SUNRAYS_RESOLUTION']);
    const _0x211fbe = ext['halfFloatTexType'];
    const _0x2443b3 = ext[_0x409e('0x76')];
    const _0x460942 = ext[_0x409e('0x28')] ? gl['LINEAR'] : gl['NEAREST'];
    sunrays = createFBO(_0x1f955e['width'], _0x1f955e['height'], _0x2443b3[_0x409e('0x79')], _0x2443b3['format'], _0x211fbe, _0x460942);
    sunraysTemp = createFBO(_0x1f955e[_0x409e('0x62')], _0x1f955e[_0x409e('0x8c')], _0x2443b3[_0x409e('0x79')], _0x2443b3['format'], _0x211fbe, _0x460942);
}

function createFBO(_0x5e65b8, _0xd7aa29, _0x5be847, _0x2f1768, _0x2d3e31, _0x5af907) {
    gl['activeTexture'](gl[_0x409e('0x8b')]);
    let _0x343ae1 = gl['createTexture']();
    gl['bindTexture'](gl[_0x409e('0x67')], _0x343ae1);
    gl[_0x409e('0x91')](gl['TEXTURE_2D'], gl[_0x409e('0x4d')], _0x5af907);
    gl[_0x409e('0x91')](gl[_0x409e('0x67')], gl['TEXTURE_MAG_FILTER'], _0x5af907);
    gl['texParameteri'](gl[_0x409e('0x67')], gl['TEXTURE_WRAP_S'], gl[_0x409e('0x17')]);
    gl['texParameteri'](gl['TEXTURE_2D'], gl[_0x409e('0x6')], gl[_0x409e('0x17')]);
    gl[_0x409e('0x7a')](gl[_0x409e('0x67')], 0x0, _0x5be847, _0x5e65b8, _0xd7aa29, 0x0, _0x2f1768, _0x2d3e31, null);
    let _0x815b4f = gl[_0x409e('0x12')]();
    gl['bindFramebuffer'](gl['FRAMEBUFFER'], _0x815b4f);
    gl['framebufferTexture2D'](gl['FRAMEBUFFER'], gl['COLOR_ATTACHMENT0'], gl[_0x409e('0x67')], _0x343ae1, 0x0);
    gl['viewport'](0x0, 0x0, _0x5e65b8, _0xd7aa29);
    gl[_0x409e('0x80')](gl[_0x409e('0x77')]);
    let _0xfb7325 = 0x1 / _0x5e65b8;
    let _0x1597e7 = 0x1 / _0xd7aa29;
    return {
        'texture': _0x343ae1,
        'fbo': _0x815b4f,
        'width': _0x5e65b8,
        'height': _0xd7aa29,
        'texelSizeX': _0xfb7325,
        'texelSizeY': _0x1597e7,
        'attach'(_0x4c3599) {
            gl[_0x409e('0x11')](gl['TEXTURE0'] + _0x4c3599);
            gl['bindTexture'](gl[_0x409e('0x67')], _0x343ae1);
            return _0x4c3599;
        }
    };
}

function createDoubleFBO(_0x121bef, _0x3f39b5, _0x1304f8, _0x4924ed, _0xc9b482, _0x3e2730) {
    let _0x2f5323 = createFBO(_0x121bef, _0x3f39b5, _0x1304f8, _0x4924ed, _0xc9b482, _0x3e2730);
    let _0x11d342 = createFBO(_0x121bef, _0x3f39b5, _0x1304f8, _0x4924ed, _0xc9b482, _0x3e2730);
    return {
        'width': _0x121bef,
        'height': _0x3f39b5,
        'texelSizeX': _0x2f5323['texelSizeX'],
        'texelSizeY': _0x2f5323[_0x409e('0x26')],
        get 'read'() {
            return _0x2f5323;
        },
        set 'read'(_0x1e19ab) {
            _0x2f5323 = _0x1e19ab;
        },
        get 'write'() {
            return _0x11d342;
        },
        set 'write'(_0x4c41f1) {
            _0x11d342 = _0x4c41f1;
        },
        'swap'() {
            let _0x508e54 = _0x2f5323;
            _0x2f5323 = _0x11d342;
            _0x11d342 = _0x508e54;
        }
    };
}

function resizeFBO(_0x38fd09, _0x1b7563, _0x2e4695, _0x2a2d2d, _0x115269, _0x5b43b5, _0x2c3ce4) {
    let _0x50293b = createFBO(_0x1b7563, _0x2e4695, _0x2a2d2d, _0x115269, _0x5b43b5, _0x2c3ce4);
    copyProgram['bind']();
    gl[_0x409e('0x9b')](copyProgram['uniforms']['uTexture'], _0x38fd09['attach'](0x0));
    blit(_0x50293b[_0x409e('0x94')]);
    return _0x50293b;
}

function resizeDoubleFBO(_0x3e65fb, _0x5c3244, _0x14545a, _0x128840, _0x386eb6, _0x27516c, _0x3f80fb) {
    if (_0x3e65fb[_0x409e('0x62')] == _0x5c3244 && _0x3e65fb['height'] == _0x14545a) return _0x3e65fb;
    _0x3e65fb['read'] = resizeFBO(_0x3e65fb['read'], _0x5c3244, _0x14545a, _0x128840, _0x386eb6, _0x27516c, _0x3f80fb);
    _0x3e65fb['write'] = createFBO(_0x5c3244, _0x14545a, _0x128840, _0x386eb6, _0x27516c, _0x3f80fb);
    _0x3e65fb[_0x409e('0x62')] = _0x5c3244;
    _0x3e65fb[_0x409e('0x8c')] = _0x14545a;
    _0x3e65fb['texelSizeX'] = 0x1 / _0x5c3244;
    _0x3e65fb['texelSizeY'] = 0x1 / _0x14545a;
    return _0x3e65fb;
}

function createTextureAsync(_0x1ed85e) {
    let _0x31e29c = gl['createTexture']();
    gl['bindTexture'](gl[_0x409e('0x67')], _0x31e29c);
    gl[_0x409e('0x91')](gl['TEXTURE_2D'], gl[_0x409e('0x4d')], gl[_0x409e('0x98')]);
    gl[_0x409e('0x91')](gl[_0x409e('0x67')], gl['TEXTURE_MAG_FILTER'], gl[_0x409e('0x98')]);
    gl['texParameteri'](gl['TEXTURE_2D'], gl['TEXTURE_WRAP_S'], gl['REPEAT']);
    gl[_0x409e('0x91')](gl['TEXTURE_2D'], gl[_0x409e('0x6')], gl[_0x409e('0x7c')]);
    gl['texImage2D'](gl[_0x409e('0x67')], 0x0, gl['RGB'], 0x1, 0x1, 0x0, gl[_0x409e('0x5a')], gl[_0x409e('0x74')], new Uint8Array([0xff, 0xff, 0xff]));
    let _0x56d190 = {
        'texture': _0x31e29c,
        'width': 0x1,
        'height': 0x1,
        'attach'(_0x1d60c0) {
            gl[_0x409e('0x11')](gl['TEXTURE0'] + _0x1d60c0);
            gl[_0x409e('0x8a')](gl['TEXTURE_2D'], _0x31e29c);
            return _0x1d60c0;
        }
    };
    let _0x32aef3 = new Image();
    _0x32aef3['onload'] = () => {
        _0x56d190['width'] = _0x32aef3['width'];
        _0x56d190['height'] = _0x32aef3[_0x409e('0x8c')];
        gl['bindTexture'](gl['TEXTURE_2D'], _0x31e29c);
        gl['texImage2D'](gl['TEXTURE_2D'], 0x0, gl[_0x409e('0x5a')], gl[_0x409e('0x5a')], gl[_0x409e('0x74')], _0x32aef3);
    };
    _0x32aef3[_0x409e('0x92')] = _0x1ed85e;
    return _0x56d190;
}

function updateKeywords() {
    let _0x1e43f5 = [];
    if (config['SHADING']) _0x1e43f5['push']('SHADING');
    if (config['BLOOM']) _0x1e43f5[_0x409e('0x72')]('BLOOM');
    if (config[_0x409e('0x4a')]) _0x1e43f5['push'](_0x409e('0x4a'));
    displayMaterial['setKeywords'](_0x1e43f5);
}
let lastUpdateTime = Date['now']();
let colorUpdateTimer = 0x0;
const changeColor = () => {
    document['querySelector']('.content-inner')[_0x409e('0x6f')][_0x409e('0x25')] = _0x409e('0x38');
    document['querySelector'](_0x409e('0x39'))['style']['fill'] = '#1e1f21';
};
const initBackground = () => {
    if (initBackground['loaded']) {
        return;
    }
    initBackground['loaded'] = !![];
    changeColor();
    updateKeywords();
    initFramebuffers();
    multipleSplats(parseInt(Math[_0x409e('0x6c')]() * 0x14) + 0x5);
    update(!![]);
};
window[_0x409e('0x4')](visibilityChangeEvent, initBackground);
window[_0x409e('0x4')](_0x409e('0x5d'), initBackground);
let animationID = null;

function update(_0x2a4540) {
    const _0x315896 = calcDeltaTime();
    if (resizeCanvas()) initFramebuffers();
    updateColors(_0x315896);
    applyInputs();
    if (!config['PAUSED']) step(_0x315896);
    render(null);
    animationID = requestAnimationFrame(update);
}

function calcDeltaTime() {
    let _0x4a506f = Date[_0x409e('0x78')]();
    let _0x4d8647 = (_0x4a506f - lastUpdateTime) / 0x3e8;
    _0x4d8647 = Math['min'](_0x4d8647, 0.016666);
    lastUpdateTime = _0x4a506f;
    return _0x4d8647;
}

function resizeCanvas() {
    let _0x31d7ee = scaleByPixelRatio(canvas['clientWidth']);
    let _0x2ba893 = scaleByPixelRatio(canvas[_0x409e('0x22')]);
    if (canvas[_0x409e('0x62')] != _0x31d7ee || canvas[_0x409e('0x8c')] != _0x2ba893) {
        canvas['width'] = _0x31d7ee;
        canvas['height'] = _0x2ba893;
        return !![];
    }
    return ![];
}

function updateColors(_0x2291b7) {
    if (!config[_0x409e('0x6a')]) return;
    colorUpdateTimer += _0x2291b7 * config['COLOR_UPDATE_SPEED'];
    if (colorUpdateTimer >= 0x1) {
        colorUpdateTimer = wrap(colorUpdateTimer, 0x0, 0x1);
        pointers[_0x409e('0x95')](_0x306f06 => {
            _0x306f06['color'] = generateColor();
        });
    }
}

function applyInputs() {
    if (splatStack[_0x409e('0x18')] > 0x0) multipleSplats(splatStack['pop']());
    pointers[_0x409e('0x95')](_0x3d66d3 => {
        if (_0x3d66d3[_0x409e('0x9')]) {
            _0x3d66d3['moved'] = ![];
            splatPointer(_0x3d66d3);
        }
    });
}

function step(_0xe86ffa) {
    gl['disable'](gl[_0x409e('0x27')]);
    gl[_0x409e('0x15')](0x0, 0x0, velocity['width'], velocity['height']);
    curlProgram[_0x409e('0x47')]();
    gl[_0x409e('0xf')](curlProgram[_0x409e('0x75')]['texelSize'], velocity['texelSizeX'], velocity[_0x409e('0x26')]);
    gl['uniform1i'](curlProgram[_0x409e('0x75')][_0x409e('0x1b')], velocity['read'][_0x409e('0x58')](0x0));
    blit(curl[_0x409e('0x94')]);
    vorticityProgram['bind']();
    gl[_0x409e('0xf')](vorticityProgram[_0x409e('0x75')]['texelSize'], velocity['texelSizeX'], velocity[_0x409e('0x26')]);
    gl[_0x409e('0x9b')](vorticityProgram[_0x409e('0x75')]['uVelocity'], velocity[_0x409e('0x7d')]['attach'](0x0));
    gl['uniform1i'](vorticityProgram['uniforms']['uCurl'], curl['attach'](0x1));
    gl[_0x409e('0x65')](vorticityProgram['uniforms'][_0x409e('0x57')], config[_0x409e('0x84')]);
    gl['uniform1f'](vorticityProgram[_0x409e('0x75')]['dt'], _0xe86ffa);
    blit(velocity[_0x409e('0xa1')][_0x409e('0x94')]);
    velocity['swap']();
    divergenceProgram['bind']();
    gl['uniform2f'](divergenceProgram['uniforms'][_0x409e('0x2d')], velocity[_0x409e('0x68')], velocity[_0x409e('0x26')]);
    gl[_0x409e('0x9b')](divergenceProgram['uniforms'][_0x409e('0x1b')], velocity['read'][_0x409e('0x58')](0x0));
    blit(divergence[_0x409e('0x94')]);
    clearProgram['bind']();
    gl['uniform1i'](clearProgram[_0x409e('0x75')]['uTexture'], pressure['read'][_0x409e('0x58')](0x0));
    gl[_0x409e('0x65')](clearProgram[_0x409e('0x75')]['value'], config[_0x409e('0x63')]);
    blit(pressure['write']['fbo']);
    pressure['swap']();
    pressureProgram['bind']();
    gl['uniform2f'](pressureProgram['uniforms'][_0x409e('0x2d')], velocity[_0x409e('0x68')], velocity[_0x409e('0x26')]);
    gl['uniform1i'](pressureProgram['uniforms']['uDivergence'], divergence['attach'](0x0));
    for (let _0x3e41c8 = 0x0; _0x3e41c8 < config['PRESSURE_ITERATIONS']; _0x3e41c8++) {
        gl[_0x409e('0x9b')](pressureProgram['uniforms'][_0x409e('0x9f')], pressure[_0x409e('0x7d')][_0x409e('0x58')](0x1));
        blit(pressure['write'][_0x409e('0x94')]);
        pressure['swap']();
    }
    gradienSubtractProgram['bind']();
    gl[_0x409e('0xf')](gradienSubtractProgram['uniforms'][_0x409e('0x2d')], velocity['texelSizeX'], velocity[_0x409e('0x26')]);
    gl[_0x409e('0x9b')](gradienSubtractProgram[_0x409e('0x75')][_0x409e('0x9f')], pressure[_0x409e('0x7d')]['attach'](0x0));
    gl['uniform1i'](gradienSubtractProgram[_0x409e('0x75')][_0x409e('0x1b')], velocity[_0x409e('0x7d')][_0x409e('0x58')](0x1));
    blit(velocity['write'][_0x409e('0x94')]);
    velocity[_0x409e('0x24')]();
    advectionProgram['bind']();
    gl[_0x409e('0xf')](advectionProgram['uniforms'][_0x409e('0x2d')], velocity['texelSizeX'], velocity['texelSizeY']);
    if (!ext[_0x409e('0x28')]) gl[_0x409e('0xf')](advectionProgram['uniforms']['dyeTexelSize'], velocity[_0x409e('0x68')], velocity['texelSizeY']);
    let _0x16cb16 = velocity[_0x409e('0x7d')]['attach'](0x0);
    gl['uniform1i'](advectionProgram['uniforms']['uVelocity'], _0x16cb16);
    gl[_0x409e('0x9b')](advectionProgram[_0x409e('0x75')][_0x409e('0x50')], _0x16cb16);
    gl[_0x409e('0x65')](advectionProgram[_0x409e('0x75')]['dt'], _0xe86ffa);
    gl['uniform1f'](advectionProgram[_0x409e('0x75')]['dissipation'], config[_0x409e('0x81')]);
    blit(velocity['write']['fbo']);
    velocity['swap']();
    gl[_0x409e('0x15')](0x0, 0x0, dye[_0x409e('0x62')], dye['height']);
    if (!ext[_0x409e('0x28')]) gl[_0x409e('0xf')](advectionProgram[_0x409e('0x75')]['dyeTexelSize'], dye[_0x409e('0x68')], dye[_0x409e('0x26')]);
    gl['uniform1i'](advectionProgram['uniforms'][_0x409e('0x1b')], velocity[_0x409e('0x7d')]['attach'](0x0));
    gl['uniform1i'](advectionProgram['uniforms'][_0x409e('0x50')], dye[_0x409e('0x7d')]['attach'](0x1));
    gl['uniform1f'](advectionProgram[_0x409e('0x75')][_0x409e('0x1a')], config['DENSITY_DISSIPATION']);
    blit(dye['write']['fbo']);
    dye[_0x409e('0x24')]();
}

function render(_0x3a2db7) {
    if (config['BLOOM']) applyBloom(dye['read'], bloom);
    if (config['SUNRAYS']) {
        applySunrays(dye[_0x409e('0x7d')], dye['write'], sunrays);
        blur(sunrays, sunraysTemp, 0x1);
    }
    if (_0x3a2db7 == null || !config[_0x409e('0x41')]) {
        gl['blendFunc'](gl['ONE'], gl['ONE_MINUS_SRC_ALPHA']);
        gl[_0x409e('0x2b')](gl[_0x409e('0x27')]);
    } else {
        gl[_0x409e('0x3a')](gl['BLEND']);
    }
    let _0xf1c251 = _0x3a2db7 == null ? gl['drawingBufferWidth'] : _0x3a2db7[_0x409e('0x62')];
    let _0x56aefc = _0x3a2db7 == null ? gl['drawingBufferHeight'] : _0x3a2db7[_0x409e('0x8c')];
    gl[_0x409e('0x15')](0x0, 0x0, _0xf1c251, _0x56aefc);
    let _0x42f6ee = _0x3a2db7 == null ? null : _0x3a2db7[_0x409e('0x94')];
    if (!config[_0x409e('0x41')]) drawColor(_0x42f6ee, normalizeColor(config['BACK_COLOR']));
    if (_0x3a2db7 == null && config[_0x409e('0x41')]) drawCheckerboard(_0x42f6ee);
    drawDisplay(_0x42f6ee, _0xf1c251, _0x56aefc);
}

function drawColor(_0x4d69be, _0x1dc3cf) {
    colorProgram['bind']();
    gl['uniform4f'](colorProgram[_0x409e('0x75')][_0x409e('0xd')], _0x1dc3cf['r'], _0x1dc3cf['g'], _0x1dc3cf['b'], 0x1);
    blit(_0x4d69be);
}

function drawCheckerboard(_0x5c4e53) {
    checkerboardProgram['bind']();
    gl['uniform1f'](checkerboardProgram[_0x409e('0x75')][_0x409e('0x51')], canvas[_0x409e('0x62')] / canvas[_0x409e('0x8c')]);
    blit(_0x5c4e53);
}

function drawDisplay(_0x2e5196, _0x5939e2, _0x564ced) {
    displayMaterial['bind']();
    if (config[_0x409e('0x52')]) gl[_0x409e('0xf')](displayMaterial['uniforms'][_0x409e('0x2d')], 0x1 / _0x5939e2, 0x1 / _0x564ced);
    gl['uniform1i'](displayMaterial[_0x409e('0x75')]['uTexture'], dye['read']['attach'](0x0));
    if (config[_0x409e('0x66')]) {
        gl[_0x409e('0x9b')](displayMaterial[_0x409e('0x75')]['uBloom'], bloom[_0x409e('0x58')](0x1));
        gl['uniform1i'](displayMaterial[_0x409e('0x75')][_0x409e('0x97')], ditheringTexture['attach'](0x2));
        let _0x1bfab8 = getTextureScale(ditheringTexture, _0x5939e2, _0x564ced);
        gl['uniform2f'](displayMaterial['uniforms'][_0x409e('0xc')], _0x1bfab8['x'], _0x1bfab8['y']);
    }
    if (config[_0x409e('0x4a')]) gl[_0x409e('0x9b')](displayMaterial[_0x409e('0x75')]['uSunrays'], sunrays[_0x409e('0x58')](0x3));
    blit(_0x2e5196);
}

function applyBloom(_0x47c245, _0x5403c8) {
    if (bloomFramebuffers['length'] < 0x2) return;
    let _0xcf3334 = _0x5403c8;
    gl[_0x409e('0x3a')](gl[_0x409e('0x27')]);
    bloomPrefilterProgram[_0x409e('0x47')]();
    let _0x1f843b = config['BLOOM_THRESHOLD'] * config[_0x409e('0x71')] + 0.0001;
    let _0x4597be = config[_0x409e('0xa4')] - _0x1f843b;
    let _0x2a96c = _0x1f843b * 0x2;
    let _0x4f6cbb = 0.25 / _0x1f843b;
    gl[_0x409e('0x4b')](bloomPrefilterProgram[_0x409e('0x75')][_0x409e('0x85')], _0x4597be, _0x2a96c, _0x4f6cbb);
    gl['uniform1f'](bloomPrefilterProgram[_0x409e('0x75')][_0x409e('0x45')], config['BLOOM_THRESHOLD']);
    gl['uniform1i'](bloomPrefilterProgram['uniforms']['uTexture'], _0x47c245[_0x409e('0x58')](0x0));
    gl[_0x409e('0x15')](0x0, 0x0, _0xcf3334['width'], _0xcf3334[_0x409e('0x8c')]);
    blit(_0xcf3334['fbo']);
    bloomBlurProgram['bind']();
    for (let _0x5b65a4 = 0x0; _0x5b65a4 < bloomFramebuffers['length']; _0x5b65a4++) {
        let _0x14b130 = bloomFramebuffers[_0x5b65a4];
        gl['uniform2f'](bloomBlurProgram[_0x409e('0x75')][_0x409e('0x2d')], _0xcf3334['texelSizeX'], _0xcf3334['texelSizeY']);
        gl[_0x409e('0x9b')](bloomBlurProgram['uniforms']['uTexture'], _0xcf3334['attach'](0x0));
        gl['viewport'](0x0, 0x0, _0x14b130[_0x409e('0x62')], _0x14b130['height']);
        blit(_0x14b130['fbo']);
        _0xcf3334 = _0x14b130;
    }
    gl[_0x409e('0x6d')](gl['ONE'], gl['ONE']);
    gl[_0x409e('0x2b')](gl[_0x409e('0x27')]);
    for (let _0x3f23e4 = bloomFramebuffers['length'] - 0x2; _0x3f23e4 >= 0x0; _0x3f23e4--) {
        let _0x3620bc = bloomFramebuffers[_0x3f23e4];
        gl['uniform2f'](bloomBlurProgram[_0x409e('0x75')]['texelSize'], _0xcf3334['texelSizeX'], _0xcf3334[_0x409e('0x26')]);
        gl['uniform1i'](bloomBlurProgram[_0x409e('0x75')][_0x409e('0x2')], _0xcf3334['attach'](0x0));
        gl['viewport'](0x0, 0x0, _0x3620bc['width'], _0x3620bc['height']);
        blit(_0x3620bc[_0x409e('0x94')]);
        _0xcf3334 = _0x3620bc;
    }
    gl['disable'](gl[_0x409e('0x27')]);
    bloomFinalProgram['bind']();
    gl['uniform2f'](bloomFinalProgram['uniforms'][_0x409e('0x2d')], _0xcf3334[_0x409e('0x68')], _0xcf3334['texelSizeY']);
    gl['uniform1i'](bloomFinalProgram['uniforms']['uTexture'], _0xcf3334[_0x409e('0x58')](0x0));
    gl[_0x409e('0x65')](bloomFinalProgram[_0x409e('0x75')][_0x409e('0x8')], config[_0x409e('0x19')]);
    gl[_0x409e('0x15')](0x0, 0x0, _0x5403c8[_0x409e('0x62')], _0x5403c8[_0x409e('0x8c')]);
    blit(_0x5403c8[_0x409e('0x94')]);
}

function applySunrays(_0x5eaea9, _0xc8603a, _0x2eabe3) {
    gl[_0x409e('0x3a')](gl[_0x409e('0x27')]);
    sunraysMaskProgram['bind']();
    gl['uniform1i'](sunraysMaskProgram[_0x409e('0x75')][_0x409e('0x2')], _0x5eaea9[_0x409e('0x58')](0x0));
    gl['viewport'](0x0, 0x0, _0xc8603a['width'], _0xc8603a[_0x409e('0x8c')]);
    blit(_0xc8603a['fbo']);
    sunraysProgram[_0x409e('0x47')]();
    gl[_0x409e('0x65')](sunraysProgram['uniforms'][_0x409e('0x5e')], config[_0x409e('0x7')]);
    gl['uniform1i'](sunraysProgram[_0x409e('0x75')][_0x409e('0x2')], _0xc8603a['attach'](0x0));
    gl[_0x409e('0x15')](0x0, 0x0, _0x2eabe3['width'], _0x2eabe3[_0x409e('0x8c')]);
    blit(_0x2eabe3[_0x409e('0x94')]);
}

function blur(_0x534f13, _0x501f71, _0x4c1ae3) {
    blurProgram['bind']();
    for (let _0x439bfb = 0x0; _0x439bfb < _0x4c1ae3; _0x439bfb++) {
        gl['uniform2f'](blurProgram['uniforms'][_0x409e('0x2d')], _0x534f13[_0x409e('0x68')], 0x0);
        gl['uniform1i'](blurProgram['uniforms']['uTexture'], _0x534f13['attach'](0x0));
        blit(_0x501f71[_0x409e('0x94')]);
        gl[_0x409e('0xf')](blurProgram[_0x409e('0x75')][_0x409e('0x2d')], 0x0, _0x534f13[_0x409e('0x26')]);
        gl[_0x409e('0x9b')](blurProgram['uniforms'][_0x409e('0x2')], _0x501f71[_0x409e('0x58')](0x0));
        blit(_0x534f13[_0x409e('0x94')]);
    }
}

function splatPointer(_0x23d76) {
    let _0x30f03f = _0x23d76['deltaX'] * config[_0x409e('0x2e')];
    let _0x204661 = _0x23d76['deltaY'] * config[_0x409e('0x2e')];
    splat(_0x23d76['texcoordX'], _0x23d76['texcoordY'], _0x30f03f, _0x204661, _0x23d76[_0x409e('0xd')]);
}

function multipleSplats(_0x2238a1) {
    for (let _0x4d8d02 = 0x0; _0x4d8d02 < _0x2238a1; _0x4d8d02++) {
        const _0x4a7e0f = generateColor();
        _0x4a7e0f['r'] *= 0xa;
        _0x4a7e0f['g'] *= 0xa;
        _0x4a7e0f['b'] *= 0xa;
        const _0x253808 = Math['random']();
        const _0x388e82 = Math[_0x409e('0x6c')]();
        const _0x221e8d = 0x3e8 * (Math['random']() - 0.5);
        const _0x278ce9 = 0x3e8 * (Math['random']() - 0.5);
        splat(_0x253808, _0x388e82, _0x221e8d, _0x278ce9, _0x4a7e0f);
    }
}

function splat(_0x2c74a1, _0x421456, _0x5214ec, _0x397eaa, _0x563d8b) {
    gl['viewport'](0x0, 0x0, velocity['width'], velocity['height']);
    splatProgram[_0x409e('0x47')]();
    gl['uniform1i'](splatProgram['uniforms'][_0x409e('0x16')], velocity[_0x409e('0x7d')]['attach'](0x0));
    gl['uniform1f'](splatProgram['uniforms'][_0x409e('0x51')], canvas['width'] / canvas[_0x409e('0x8c')]);
    gl[_0x409e('0xf')](splatProgram['uniforms'][_0x409e('0x54')], _0x2c74a1, _0x421456);
    gl['uniform3f'](splatProgram[_0x409e('0x75')]['color'], _0x5214ec, _0x397eaa, 0x0);
    gl['uniform1f'](splatProgram[_0x409e('0x75')]['radius'], correctRadius(config['SPLAT_RADIUS'] / 0x64));
    blit(velocity[_0x409e('0xa1')][_0x409e('0x94')]);
    velocity[_0x409e('0x24')]();
    gl['viewport'](0x0, 0x0, dye['width'], dye['height']);
    gl['uniform1i'](splatProgram[_0x409e('0x75')]['uTarget'], dye['read'][_0x409e('0x58')](0x0));
    gl['uniform3f'](splatProgram[_0x409e('0x75')][_0x409e('0xd')], _0x563d8b['r'], _0x563d8b['g'], _0x563d8b['b']);
    blit(dye['write']['fbo']);
    dye['swap']();
}

function correctRadius(_0x226ac8) {
    let _0x1e8f7b = canvas[_0x409e('0x62')] / canvas['height'];
    if (_0x1e8f7b > 0x1) _0x226ac8 *= _0x1e8f7b;
    return _0x226ac8;
}
window['addEventListener'](_0x409e('0x34'), _0xc1a2c2 => {
    const _0x2ca5ce = _0xc1a2c2['changedTouches'];
    for (let _0x433fb2 = 0x0; _0x433fb2 < _0x2ca5ce[_0x409e('0x18')]; _0x433fb2++) {
        let _0x2ad9df = pointers['find'](_0x351e32 => _0x351e32['id'] == _0x2ca5ce[_0x433fb2]['identifier']);
        if (_0x2ad9df == null) continue;
        updatePointerUpData(_0x2ad9df);
    }
});
window['addEventListener']('keydown', _0x18be06 => {
    if (_0x18be06[_0x409e('0xb')] === 'KeyP') config['PAUSED'] = !config[_0x409e('0x23')];
    if (_0x18be06['key'] === '\x20') splatStack[_0x409e('0x72')](parseInt(Math['random']() * 0x14) + 0x5);
});

function updatePointerDownData(_0x2c9855, _0x4c69b2, _0x17d492, _0x13b63e) {
    _0x2c9855['id'] = _0x4c69b2;
    _0x2c9855['down'] = !![];
    _0x2c9855['moved'] = ![];
    _0x2c9855['texcoordX'] = _0x17d492 / canvas['width'];
    _0x2c9855[_0x409e('0x6e')] = 0x1 - _0x13b63e / canvas[_0x409e('0x8c')];
    _0x2c9855[_0x409e('0x6b')] = _0x2c9855[_0x409e('0x3c')];
    _0x2c9855[_0x409e('0xa0')] = _0x2c9855['texcoordY'];
    _0x2c9855['deltaX'] = 0x0;
    _0x2c9855['deltaY'] = 0x0;
    _0x2c9855[_0x409e('0xd')] = generateColor();
}

function updatePointerMoveData(_0x2a87aa, _0x222d32, _0x2ec4e2) {
    _0x2a87aa[_0x409e('0x6b')] = _0x2a87aa[_0x409e('0x3c')];
    _0x2a87aa[_0x409e('0xa0')] = _0x2a87aa[_0x409e('0x6e')];
    _0x2a87aa['texcoordX'] = _0x222d32 / canvas[_0x409e('0x62')];
    _0x2a87aa[_0x409e('0x6e')] = 0x1 - _0x2ec4e2 / canvas['height'];
    _0x2a87aa[_0x409e('0x86')] = correctDeltaX(_0x2a87aa['texcoordX'] - _0x2a87aa['prevTexcoordX']);
    _0x2a87aa[_0x409e('0x14')] = correctDeltaY(_0x2a87aa['texcoordY'] - _0x2a87aa[_0x409e('0xa0')]);
    _0x2a87aa[_0x409e('0x9')] = Math[_0x409e('0x3e')](_0x2a87aa[_0x409e('0x86')]) > 0x0 || Math[_0x409e('0x3e')](_0x2a87aa[_0x409e('0x14')]) > 0x0;
}

function updatePointerUpData(_0x1e03c7) {
    _0x1e03c7['down'] = ![];
}

function correctDeltaX(_0x71020c) {
    let _0xf93ca = canvas[_0x409e('0x62')] / canvas['height'];
    if (_0xf93ca < 0x1) _0x71020c *= _0xf93ca;
    return _0x71020c;
}

function correctDeltaY(_0x45afa0) {
    let _0x125942 = canvas[_0x409e('0x62')] / canvas['height'];
    if (_0x125942 > 0x1) _0x45afa0 /= _0x125942;
    return _0x45afa0;
}

function generateColor() {
    let _0x5f3fc5 = HSVtoRGB(Math['random'](), 0x1, 0x1);
    _0x5f3fc5['r'] *= 0.15;
    _0x5f3fc5['g'] *= 0.15;
    _0x5f3fc5['b'] *= 0.15;
    return _0x5f3fc5;
}

function HSVtoRGB(_0x46df18, _0x195131, _0x30a397) {
    let _0x32a902, _0x324263, _0x2aac77, _0x44476b, _0x51bd20, _0x357d71, _0x33660c, _0x31e984;
    _0x44476b = Math['floor'](_0x46df18 * 0x6);
    _0x51bd20 = _0x46df18 * 0x6 - _0x44476b;
    _0x357d71 = _0x30a397 * (0x1 - _0x195131);
    _0x33660c = _0x30a397 * (0x1 - _0x51bd20 * _0x195131);
    _0x31e984 = _0x30a397 * (0x1 - (0x1 - _0x51bd20) * _0x195131);
    switch (_0x44476b % 0x6) {
        case 0x0:
            _0x32a902 = _0x30a397, _0x324263 = _0x31e984, _0x2aac77 = _0x357d71;
            break;
        case 0x1:
            _0x32a902 = _0x33660c, _0x324263 = _0x30a397, _0x2aac77 = _0x357d71;
            break;
        case 0x2:
            _0x32a902 = _0x357d71, _0x324263 = _0x30a397, _0x2aac77 = _0x31e984;
            break;
        case 0x3:
            _0x32a902 = _0x357d71, _0x324263 = _0x33660c, _0x2aac77 = _0x30a397;
            break;
        case 0x4:
            _0x32a902 = _0x31e984, _0x324263 = _0x357d71, _0x2aac77 = _0x30a397;
            break;
        case 0x5:
            _0x32a902 = _0x30a397, _0x324263 = _0x357d71, _0x2aac77 = _0x33660c;
            break;
    }
    return {
        'r': _0x32a902,
        'g': _0x324263,
        'b': _0x2aac77
    };
}

function normalizeColor(_0x42f2b0) {
    let _0x1fbb63 = {
        'r': _0x42f2b0['r'] / 0xff,
        'g': _0x42f2b0['g'] / 0xff,
        'b': _0x42f2b0['b'] / 0xff
    };
    return _0x1fbb63;
}

function wrap(_0x1bfe9b, _0x501a88, _0x443399) {
    let _0x11f726 = _0x443399 - _0x501a88;
    if (_0x11f726 == 0x0) return _0x501a88;
    return (_0x1bfe9b - _0x501a88) % _0x11f726 + _0x501a88;
}

function getResolution(_0x52e717) {
    let _0x2124c2 = gl[_0x409e('0x9c')] / gl[_0x409e('0x73')];
    if (_0x2124c2 < 0x1) _0x2124c2 = 0x1 / _0x2124c2;
    let _0x349375 = Math['round'](_0x52e717);
    let _0x3d0dae = Math['round'](_0x52e717 * _0x2124c2);
    if (gl['drawingBufferWidth'] > gl[_0x409e('0x73')]) return {
        'width': _0x3d0dae,
        'height': _0x349375
    };
    else return {
        'width': _0x349375,
        'height': _0x3d0dae
    };
}

function getTextureScale(_0x31cb46, _0x55c187, _0x123be8) {
    return {
        'x': _0x55c187 / _0x31cb46['width'],
        'y': _0x123be8 / _0x31cb46[_0x409e('0x8c')]
    };
}

function scaleByPixelRatio(_0x1a6e6) {
    let _0x18ec11 = window[_0x409e('0x64')] || 0x1;
    return Math[_0x409e('0x7f')](_0x1a6e6 * _0x18ec11);
}

function hashCode(_0xed29a7) {
    if (_0xed29a7['length'] == 0x0) return 0x0;
    let _0x4fad83 = 0x0;
    for (let _0x561353 = 0x0; _0x561353 < _0xed29a7[_0x409e('0x18')]; _0x561353++) {
        _0x4fad83 = (_0x4fad83 << 0x5) - _0x4fad83 + _0xed29a7['charCodeAt'](_0x561353);
        _0x4fad83 |= 0x0;
    }
    return _0x4fad83;
};
document['addEventListener']('mousedown', _0x1629dd => {
    if (switchPage && switchPage[_0x409e('0x46')]) {
        return;
    }
    let _0xebdb1a = scaleByPixelRatio(_0x1629dd[_0x409e('0x5f')]);
    let _0x553f28 = scaleByPixelRatio(_0x1629dd[_0x409e('0x82')]);
    let _0x2043a9 = pointers['find'](_0x4d9c4d => _0x4d9c4d['id'] == -0x1);
    if (_0x2043a9 == null) _0x2043a9 = new pointerPrototype();
    updatePointerDownData(_0x2043a9, -0x1, _0xebdb1a, _0x553f28);
});
document['addEventListener'](_0x409e('0x7e'), _0x3d16c8 => {
    if (switchPage && switchPage['switched']) {
        return;
    }
    let _0x5a7233 = pointers[0x0];
    if (!_0x5a7233['down']) return;
    let _0x5ebb3d = scaleByPixelRatio(_0x3d16c8['pageX']);
    let _0x2dbd90 = scaleByPixelRatio(_0x3d16c8['pageY']);
    updatePointerMoveData(_0x5a7233, _0x5ebb3d, _0x2dbd90);
});
document[_0x409e('0x4')](_0x409e('0x1f'), () => {
    if (switchPage && switchPage[_0x409e('0x46')]) {
        return;
    }
    updatePointerUpData(pointers[0x0]);
});
document[_0x409e('0x4')]('touchstart', _0x57f438 => {
    if (switchPage && switchPage[_0x409e('0x46')]) {
        return;
    }
    _0x57f438['preventDefault']();
    const _0x2c2865 = _0x57f438[_0x409e('0x1d')];
    while (_0x2c2865[_0x409e('0x18')] >= pointers[_0x409e('0x18')]) pointers['push'](new pointerPrototype());
    for (let _0x2f8047 = 0x0; _0x2f8047 < _0x2c2865[_0x409e('0x18')]; _0x2f8047++) {
        let _0x1ef035 = scaleByPixelRatio(_0x2c2865[_0x2f8047]['pageX']);
        let _0x454c12 = scaleByPixelRatio(_0x2c2865[_0x2f8047]['pageY']);
        updatePointerDownData(pointers[_0x2f8047 + 0x1], _0x2c2865[_0x2f8047]['identifier'], _0x1ef035, _0x454c12);
    }
});
document['addEventListener']('touchmove', _0x26a215 => {
    if (switchPage && switchPage[_0x409e('0x46')]) {
        return;
    }
    _0x26a215[_0x409e('0x87')]();
    const _0x45f880 = _0x26a215[_0x409e('0x1d')];
    for (let _0x54c35a = 0x0; _0x54c35a < _0x45f880[_0x409e('0x18')]; _0x54c35a++) {
        let _0x5f557c = pointers[_0x54c35a + 0x1];
        if (!_0x5f557c[_0x409e('0x3d')]) continue;
        let _0x3d786c = scaleByPixelRatio(_0x45f880[_0x54c35a][_0x409e('0x5f')]);
        let _0x1d2ddc = scaleByPixelRatio(_0x45f880[_0x54c35a]['pageY']);
        updatePointerMoveData(_0x5f557c, _0x3d786c, _0x1d2ddc);
    }
}, ![]);
document[_0x409e('0x4')]('touchend', _0x4fd01a => {
    if (switchPage && switchPage['switched']) {
        return;
    }
    const _0x572907 = _0x4fd01a['changedTouches'];
    for (let _0xf8107e = 0x0; _0xf8107e < _0x572907[_0x409e('0x18')]; _0xf8107e++) {
        let _0x530061 = pointers[_0x409e('0x70')](_0x1bc76a => _0x1bc76a['id'] == _0x572907[_0xf8107e]['identifier']);
        if (_0x530061 == null) continue;
        updatePointerUpData(_0x530061);
    }
});
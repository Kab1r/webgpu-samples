_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"1uVF":function(e,n,t){"use strict";t.d(n,"f",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"e",(function(){return s})),t.d(n,"d",(function(){return c}));var r=40,a=0,o=16,i=32,s=36,c=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},PvCm:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),a=t.n(r),o=t("HaE+"),i=t("IOcx"),s=t("SoUo"),c=t("1uVF");function u(){return(u=Object(o.a)(a.a.mark((function e(n){var t,r,o,s,u,d,p,m,l,g,v,h,x;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x=function(){var e=i.a.create();i.a.translate(e,e,i.b.fromValues(0,0,-5));var n=Date.now()/1e3;i.a.rotate(e,e,1,i.b.fromValues(Math.sin(n),Math.cos(n),0));var t=i.a.create();return i.a.multiply(t,s,e),t},e.next=3,navigator.gpu.requestAdapter();case 3:return t=e.sent,e.next=6,t.requestDevice();case 6:return r=e.sent,o=Math.abs(n.width/n.height),s=i.a.create(),i.a.perspective(s,2*Math.PI/5,o,1,100),u=n.getContext("gpupresent"),d=u.configureSwapChain({device:r,format:"bgra8unorm"}),p=r.createBuffer({size:c.d.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(p.getMappedRange()).set(c.d),p.unmap(),m=r.createRenderPipeline({vertex:{module:r.createShaderModule({code:f.vertex}),entryPoint:"main",buffers:[{arrayStride:c.f,attributes:[{shaderLocation:0,offset:c.b,format:"float32x4"},{shaderLocation:1,offset:c.a,format:"float32x4"}]}]},fragment:{module:r.createShaderModule({code:f.fragment}),entryPoint:"main",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"}}),l=r.createTexture({size:{width:n.width,height:n.height},format:"depth24plus-stencil8",usage:GPUTextureUsage.RENDER_ATTACHMENT}),g={colorAttachments:[{view:void 0,loadValue:{r:.5,g:.5,b:.5,a:1},storeOp:"store"}],depthStencilAttachment:{view:l.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},64,v=r.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),h=r.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}}]}),e.abrupt("return",(function(){var e=x();r.queue.writeBuffer(v,0,e.buffer,e.byteOffset,e.byteLength),g.colorAttachments[0].view=d.getCurrentTexture().createView();var n=r.createCommandEncoder(),t=n.beginRenderPass(g);t.setPipeline(m),t.setBindGroup(0,h),t.setVertexBuffer(0,p),t.draw(c.e,1,0,0),t.endPass(),r.queue.submit([n.finish()])}));case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={vertex:"\n[[block]] struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>;\n};\n\n[[binding(0), group(0)]] var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragColor : vec4<f32>;\n};\n\n[[stage(vertex)]]\nfn main([[location(0)]] position : vec4<f32>,\n        [[location(1)]] color : vec4<f32>) -> VertexOutput {\n  return VertexOutput(uniforms.modelViewProjectionMatrix * position, color);\n}\n",fragment:"\n[[stage(fragment)]]\nfn main([[location(0)]] fragColor : vec4<f32>) -> [[location(0)]] vec4<f32> {\n  return fragColor;\n}\n"};n.default=Object(s.c)({name:"Rotating Cube",description:"This example shows how to upload uniform data every frame.",slug:"rotatingCube",init:function(e){return u.apply(this,arguments)},source:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeBasicExample } from '../../components/basicExample';\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeColorOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nasync function init(canvas: HTMLCanvasElement) {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  const aspect = Math.abs(canvas.width / canvas.height);\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const context = canvas.getContext('gpupresent');\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: 'bgra8unorm',\n  });\n\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: wgslShaders.vertex,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // color\n              shaderLocation: 1,\n              offset: cubeColorOffset,\n              format: 'float32x4',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: wgslShaders.fragment,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: 'bgra8unorm',\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      cullMode: 'back',\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus-stencil8',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: {\n      width: canvas.width,\n      height: canvas.height,\n    },\n    format: 'depth24plus-stencil8',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // view is acquired and set in render loop.\n        view: undefined,\n\n        loadValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n    ],\n  });\n\n  function getTransformationMatrix() {\n    const viewMatrix = mat4.create();\n    mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -5));\n    const now = Date.now() / 1000;\n    mat4.rotate(\n      viewMatrix,\n      viewMatrix,\n      1,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0)\n    );\n\n    const modelViewProjectionMatrix = mat4.create();\n    mat4.multiply(modelViewProjectionMatrix, projectionMatrix, viewMatrix);\n\n    return modelViewProjectionMatrix as Float32Array;\n  }\n\n  return function frame() {\n    const transformationMatrix = getTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      transformationMatrix.buffer,\n      transformationMatrix.byteOffset,\n      transformationMatrix.byteLength\n    );\n    renderPassDescriptor.colorAttachments[0].view = swapChain\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n    passEncoder.endPass();\n    device.queue.submit([commandEncoder.finish()]);\n  };\n}\n\nconst wgslShaders = {\n  vertex: `\n[[block]] struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>;\n};\n\n[[binding(0), group(0)]] var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragColor : vec4<f32>;\n};\n\n[[stage(vertex)]]\nfn main([[location(0)]] position : vec4<f32>,\n        [[location(1)]] color : vec4<f32>) -> VertexOutput {\n  return VertexOutput(uniforms.modelViewProjectionMatrix * position, color);\n}\n`,\n  fragment: `\n[[stage(fragment)]]\nfn main([[location(0)]] fragColor : vec4<f32>) -> [[location(0)]] vec4<f32> {\n  return fragColor;\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Rotating Cube',\n  description: 'This example shows how to upload uniform data every frame.',\n  slug: 'rotatingCube',\n  init,\n  source: __SOURCE__,\n});\n"})},e3wW:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/rotatingCube",function(){return t("PvCm")}])}},[["e3wW",0,1,4,2,3,5]]]);
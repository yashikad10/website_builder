// import { produce } from 'immer';
// import { PenTool } from 'lucide-react';
// import { useEffect, useMemo, useRef, useState } from 'react';
// import { v4 as uuid } from 'uuid';
// // import { useDrag } from '../../hooks/useDrag';
// import { components } from './config'; // Your components with HTML templates
// import {
//   DomStateElement,
//   // addToVDom,
//   convertToHTML,
//   findAndModifyPropsInVDom,
//   handleAttributeChange,
//   handleStyleChange,
//   setActiveElements,
//   vDomFind,
// } from './dom';

// const Properties: React.FC<{
//   dom: DomStateElement[];
//   active_element: string | null;
//   setDom: (dom: DomStateElement[]) => void;
// }> = ({ active_element, dom, setDom }) => {
//   const props = useMemo<DomStateElement | null>(() => {
//     if (!active_element) return null;
//     const ele = vDomFind(dom, active_element);
//     if (!ele) return null;
//     return ele;
//   }, [active_element, dom]);

//   return (
//     <div className="mt-3 space-y-3">
//       <div className="px-2 w-full">
//         {/* Content Field */}
//         <label>Content</label>
//         <input
//           onChange={(e) => {
//             const val = e.target.value;
//             setDom(
//               produce(dom, (c_dom) => {
//                 findAndModifyPropsInVDom(
//                   active_element || '',
//                   'content',
//                   val,
//                   c_dom,
//                   'content'
//                 );
//               })
//             );
//           }}
//           value={props?.props?.content || ''}
//           className="w-full bg-gray-800 text-white placeholder-gray-400"
//           type="text"
//           placeholder="Content"
//         />
//       </div>

//       {/* Style fields */}
//       {props && (
//         <div className="h-[80vh] overflow-y-auto">
//           <div className="px-2 w-full">
//             <label>Text Color</label>
//             <input
//               type="color"
//               value={props.props.style?.color || '#ffffff'}
//               onChange={(e) =>
//                 handleStyleChange(
//                   'color',
//                   e.target.value,
//                   active_element,
//                   dom,
//                   setDom
//                 )
//               }
//               className="w-full bg-gray-800 text-white"
//             />
//           </div>

//           <div className="px-2 w-full">
//             <label>Font Size</label>
//             <input
//               type="number"
//               value={parseInt(props.props.style?.fontSize || '16', 10)}
//               onChange={(e) =>
//                 handleStyleChange(
//                   'fontSize',
//                   e.target.value + 'px',
//                   active_element,
//                   dom,
//                   setDom
//                 )
//               }
//               className="w-full bg-gray-800 text-white"
//             />
//           </div>

//           {/* Image properties if the element is an image */}
//           {props.element === 'img' && (
//             <>
//               <div className="px-2 w-full">
//                 <label>Image Width</label>
//                 <input
//                   type="string"
//                   value={parseInt(props.props.style?.width || '100', 10)}
//                   onChange={(e) =>
//                     handleStyleChange(
//                       'width',
//                       e.target.value + 'px',
//                       active_element,
//                       dom,
//                       setDom
//                     )
//                   }
//                   className="w-full bg-gray-800 text-white"
//                 />
//               </div>

//               <div className="px-2 w-full">
//                 <label>Image Height</label>
//                 <input
//                   type="number"
//                   value={parseInt(props.props.style?.height || '100', 10)}
//                   onChange={(e) =>
//                     handleStyleChange(
//                       'height',
//                       e.target.value + 'px',
//                       active_element,
//                       dom,
//                       setDom
//                     )
//                   }
//                   className="w-full bg-gray-800 text-white"
//                 />
//               </div>

//               <div className="px-2 w-full">
//                 <label>Image Source</label>
//                 <input
//                   type="text"
//                   value={props.props.attributes?.src || ''}
//                   onChange={(e) =>
//                     handleAttributeChange(
//                       'src',
//                       e.target.value,
//                       active_element,
//                       dom,
//                       setDom
//                     )
//                   }
//                   className="w-full bg-gray-800 text-white"
//                   placeholder="Image URL"
//                 />
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// const Editor: React.FC = () => {
//   const [activeProps, setActiveProps] = useState<null | {
//     x: number;
//     y: number;
//     width: number;
//     height: number;
//     id: string;
//   }>(null);
//   const frameRef = useRef<HTMLIFrameElement>(null);
//   // const { setDragCompId } = useDrag();
//   const [dom_state, setDomState] = useState<DomStateElement[]>([
//     {
//       element: 'body',
//       id: 'root',
//       children: [],
//       props: {
//         style: {},
//       },
//     },
//   ]);

//   const [html, setHtml] = useState<string>('');

//   useEffect(() => {
//     const test = setTimeout(() => {
//       const frame = frameRef.current;
//       if (!frame) return;
//       const doc = frame.contentDocument;
//       if (!doc) return;
//       setActiveElements(doc, (id, x, y, w, h) => {
//         setActiveProps({
//           x,
//           y,
//           width: w,
//           height: h,
//           id,
//         });
//       });
//     }, 1000);
//     return () => {
//       clearTimeout(test);
//     };
//   }, [dom_state, html]);

//   useEffect(() => {
//     setHtml('<html>' + convertToHTML(dom_state) + '</html>');
//   }, [dom_state]);
//   // console.log(html);


//   const downloadHtmlFile = () => {
//     const element = document.createElement('a');
//     const file = new Blob([html], { type: 'text/plain' });
//     element.href = URL.createObjectURL(file);
//     element.download = 'website.html';
//     document.body.appendChild(element); // Required for this to work in FireFox
//     element.click();
//   };

//   const insertTemplate = (template: string) => {
//     setDomState((currentDomState) =>
//       produce(currentDomState, (draft) => {
//         const rootElement = draft.find((el) => el.id === 'root');
//         if (rootElement) {
//           rootElement.children = []; // Clear existing templates
  
//           // Create a new element for the clicked template
//           const tempElement: DomStateElement = {
//             element: template === 'img' ? 'img' : 'div', // Use 'img' for image templates
//             id: uuid(), // Generate a unique ID for the new template
//             props: {
//               style: {
//                 ...(template === 'text' && {
//                   color: 'blue',
//                   fontSize: '16px'
//                 }),
//                 ...(template === 'img' && {
//                   width: '200px',
//                   height: '200px'
//                 })
//               },
//               attributes: {
//                 src: template === 'img' ? 'https://via.placeholder.com/150' : '',
//                 'data-inner-html': template,
//               },
//             },
//             children: [], // No children for this element
//           };
  
//           rootElement.children.push(tempElement);
//         }
//       })
//     );
//   };

//   return (
//     <div className="w-full h-screen flex flex-col bg-gray-900 text-white">
//       <div className="w-full p-2 bg-gray-950 flex gap-4 justify-between">
//         <div className="flex items-center gap-2">
//           <PenTool size={30} color="white" />
//           <div className="text-xl font-bold">Website builder</div>
//         </div>
//         <div>
//           <button
//             onClick={() => downloadHtmlFile()}
//             className="px-3 py-2 bg-blue-700 rounded-md"
//           >
//             Export
//           </button>
//         </div>
//       </div>
//       <div className="flex-grow grid grid-cols-12">
//         <div className="col-span-2 bg-gray-950 p-4">
//           <div className="text-xl font-bold">Templates</div>
//           <div className="grid md:grid-cols-1 gap-3 mt-2">
//             {components.map((comp) => (
//               <div
//                 onClick={() => insertTemplate(comp.html)} // Insert template into the editor
//                 key={comp.id}
//                 className="bg-gray-900 text-white hover:text-blue-600 select-none cursor-pointer p-4 rounded-lg border hover:border-blue-600 flex flex-col items-center justify-center gap-3"
//               >
//                 <div className="text-center text-xs">{comp.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="col-span-8 h-full bg-gray-800">
//           <iframe
//             ref={frameRef}
//             className="bg-white w-full h-full"
//             srcDoc={html}
//           />
//         </div>
//         <div className="col-span-2 p-3">
//           <div className="text-xl">Properties</div>
//           <Properties
//             active_element={activeProps?.id || null}
//             dom={dom_state}
//             setDom={setDomState}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Editor;

import { useEffect, useRef, useState, useCallback } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import { PenTool } from 'lucide-react';
import { components } from './config'; // Import the components

const Editor: React.FC = () => {
  const editorRef = useRef<any>(null);
  const [templates, setTemplates] = useState(components);
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<any>(null);

  useEffect(() => {
    editorRef.current = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      width: 'auto',
      height: '100%',
      panels: {
        defaults: [
          {
            id: 'basic-actions',
            el: '.panel__basic-actions',
            buttons: [
              {
                id: 'save',
                className: 'btn-save',
                label: 'Save',
                command: 'save',
                context: 'save',
              },
            ],
          },
        ],
      },
      storageManager: false, // Disable storage manager
      styleManager: {
        sectors: [
          {
            name: 'Typography',
            open: true,
            buildProps: ['font-family', 'font-size', 'font-weight', 'color', 'letter-spacing', 'line-height'],
            properties: [
              {
                name: 'Text color',
                property: 'color',
                type: 'color',  // Color picker for text color
              },
            ],
          },
          {
            name: 'Background',
            open: true,
            buildProps: ['background-color'],
            properties: [
              {
                name: 'Background color',
                property: 'background-color',
                type: 'color',  // Color picker for background color
              },
            ],
          },
        ],
      },
    });

    const editor = editorRef.current;

    // Event when a component is selected
    editor.on('component:selected', () => {
      const selected = editor.getSelected();
      const tagName = selected.get('tagName');

      // Ensure the selected component contains text
      if (['p', 'div', 'span', 'h1', 'h2', 'h3', 'h4'].includes(tagName)) {
        setSelectedComponent(selected);
      } else {
        setSelectedComponent(null);
      }
    });

    // Event when a block is dropped
    editor.on('block:drag:stop', () => {
      console.log('Block dropped');
    });
  }, []);

  const applyTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      editorRef.current.setComponents(template.html);
    }
    setActiveTemplate(templateId);
  };

  const exportHtml = useCallback(() => {
    if (editorRef.current) {
      const templateHtml = editorRef.current.getHtml();
      const templateCss = editorRef.current.getCss();

      // Combine HTML and CSS
      const fullHtml = `
        <html>
          <head>
            <style>${templateCss}</style>
          </head>
          <body>${templateHtml}</body>
        </html>
      `;

      const blob = new Blob([fullHtml], { type: "text/html" });
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);
      link.download = "custom-template.html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 text-white">
      <div className="w-full p-2 bg-gray-950 flex gap-4 justify-between">
        <div className="flex items-center gap-2">
          <PenTool size={30} color="white" />
          <div className="text-xl font-bold">Website Builder</div>
        </div>
        <div>
          <button 
            onClick={exportHtml} 
            className="px-3 py-2 bg-blue-700 rounded-md"
          >
            Export
          </button>
        </div>
      </div>

      <div className="flex-grow grid grid-cols-12">
        <div id="blocks" className="col-span-2 bg-gray-950 p-4">
          {templates.map(template => (
            <button
              key={template.id}
              onClick={() => applyTemplate(template.id)}
              className={`w-full px-3 py-2 mb-2 rounded-md ${activeTemplate === template.id ? 'bg-blue-700' : 'bg-gray-800'} text-white`}
            >
              {template.name}
            </button>
          ))}
        </div>
        <div className="col-span-8 h-full bg-gray-800" id="gjs"></div>
        <div className="col-span-2 p-3 bg-gray-950 border-l border-gray-700">
          {/* Properties pane */}
          {selectedComponent ? (
            <div>
              <h3 className="text-lg font-bold mb-2">Properties</h3>
              <div className="flex flex-col gap-2">
                <label className="flex flex-col">
                  <span className="text-sm">Text Color</span>
                  <input
                    type="color"
                    value={selectedComponent.getStyle().color || '#000000'}
                    onChange={(e) => {
                      const color = e.target.value;
                      selectedComponent.addStyle({ 'color': color });
                    }}
                    className="mt-1"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm">Background Color</span>
                  <input
                    type="color"
                    value={selectedComponent.getStyle()['background-color'] || '#ffffff'}
                    onChange={(e) => {
                      const bgColor = e.target.value;
                      selectedComponent.addStyle({ 'background-color': bgColor });
                    }}
                    className="mt-1"
                  />
                </label>
                {/* Add more property controls here if needed */}
              </div>
            </div>
          ) : (
            <p>Select a text element to edit properties</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;

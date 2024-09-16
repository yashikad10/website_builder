

// import { useEffect, useRef, useState, useCallback } from "react";
// import grapesjs from "grapesjs";
// import "grapesjs/dist/css/grapes.min.css";
// import { PenTool } from "lucide-react";
// import { components } from "./config";
// import { Undo } from "lucide-react";
// import { Redo } from "lucide-react";
// // @ts-ignore
// import plugin from "grapesjs-tailwind";

// const Editor: React.FC = () => {
//   const editorRef = useRef<any>(null);
//   const [templates, setTemplates] = useState(components);
//   const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
//   const [selectedComponent, setSelectedComponent] = useState<any>(null);

//   useEffect(() => {
//     editorRef.current = grapesjs.init({
//       container: "#gjs",
//       fromElement: true,
//       width: "auto",
//       height: "100%",
//       panels: {
//         defaults: [
//           {
//             id: "basic-actions",
//             el: ".panel__basic-actions",
//             buttons: [
//               {
//                 id: "save",
//                 className: "btn-save",
//                 label: "Save",
//                 command: "save",
//                 context: "save",
//               },
//             ],
//           },
//         ],
//       },
//       storageManager: false, // Disable storage manager
//       styleManager: {
//         sectors: [
//           {
//             name: "Typography",
//             open: true,
//             buildProps: [
//               "font-family",
//               "font-size",
//               "font-weight",
//               "color",
//               "letter-spacing",
//               "line-height",
//             ],
//             properties: [
//               {
//                 name: "Text color",
//                 property: "color",
//                 type: "color", // Color picker for text color
//               },
//             ],
//           },
//           {
//             name: "Background",
//             open: true,
//             buildProps: ["background-color"],
//             properties: [
//               {
//                 name: "Background color",
//                 property: "background-color",
//                 type: "color", // Color picker for background color
//               },
//             ],
//           },
//         ],
//       },
//       plugins: [plugin],
//       pluginsOpts: {
//         [plugin]: {
//           /* options */
//         },
//       },
//     });

//     const editor = editorRef.current;

//     // Event when a component is selected
//     editor.on("component:selected", () => {
//       const selected = editor.getSelected();
//       const tagName = selected.get("tagName");

//       // Ensure the selected component contains text
//       if (
//         [
//           "p",
//           "div",
//           "span",
//           "h1",
//           "h2",
//           "h3",
//           "h4",
//           "nav",
//           "section",
//           "button",
//         ].includes(tagName)
//       ) {
//         setSelectedComponent(selected);
//       } else {
//         setSelectedComponent(null);
//       }
//     });

//     // Event when a block is dropped
//     editor.on("block:drag:stop", () => {
//       console.log("Block dropped");
//     });
//   }, []);

//   const applyTemplate = (templateId: string) => {
//     const template = templates.find((t) => t.id === templateId);
//     if (template) {
//       editorRef.current.setComponents(template.html);
//     }
//     setActiveTemplate(templateId);
//   };

//   const exportHtml = useCallback(() => {
//     if (editorRef.current) {
//       const templateHtml = editorRef.current.getHtml();
//       const templateCss = editorRef.current.getCss();

//       const html = `
//         <html>
//           <head>
//             <style>${templateCss}</style>
//           </head>
//           <body>${templateHtml}</body>
//         </html>
//       `;

//       const blob = new Blob([html], { type: "text/html" });
//       const link = document.createElement("a");

//       link.href = URL.createObjectURL(blob);
//       link.download = "custom-template.html";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   }, []);

//   const handleUndo = () => {
//     if (editorRef.current) {
//       editorRef.current.runCommand("core:undo");
//     }
//   };

//   const handleRedo = () => {
//     if (editorRef.current) {
//       editorRef.current.runCommand("core:redo");
//     }
//   };

//   return (
//     <div className="w-full h-screen flex flex-col bg-gray-900 text-white">
//       <div className="w-full p-2 bg-gray-950 flex gap-4 justify-between">
//         <div className="flex items-center gap-2">
//           <PenTool size={30} color="white" />
//           <div className="text-xl font-bold">Website Builder</div>
//         </div>
//         <div className="flex gap-4">
//           <div className="mt-2 flex gap-4">
//             <Undo className="w-5 h-5 text-white" onClick={handleUndo} />
//             <Redo className="w-5 h-5 text-white" onClick={handleRedo} />
//           </div>
//           <button
//             onClick={exportHtml}
//             className="px-3 py-2 bg-blue-700 rounded-md"
//           >
//             Export
//           </button>
//         </div>
//       </div>

//       <div className="flex-grow grid grid-cols-12">
//         <div id="blocks" className="col-span-2 bg-gray-950 p-4">
//           {templates.map((template) => (
//             <button
//               key={template.id}
//               onClick={() => applyTemplate(template.id)}
//               className={`w-full px-3 py-2 mb-2 rounded-md ${activeTemplate === template.id ? "bg-blue-700" : "bg-gray-800"} text-white`}
//             >
//               {template.name}
//             </button>
//           ))}
//         </div>
//         <div className="col-span-8" id="gjs"></div>
//         <div className="col-span-2 p-3  bg-gray-950 border-l border-gray-700">
//           {selectedComponent ? (
//             <div>
//               <h3 className="text-lg font-bold mb-2">Properties</h3>

//               <div className="space-y-4">
//                 <label className="flex flex-col">
//                   <span className="text-sm font-medium text-gray-500">
//                     Text Color
//                   </span>
//                   <input
//                     type="color"
//                     value={selectedComponent.getStyle().color || "#000000"}
//                     onChange={(e) => {
//                       const color = e.target.value;
//                       selectedComponent.addStyle({ color: color });
//                     }}
//                     className="mt-2 w-full border-b-2 border-gray-300 bg-transparent py-1 "
//                   />
//                 </label>

//                 <label className="flex flex-col">
//                   <span className="text-sm font-medium text-gray-500">
//                     Background Color
//                   </span>
//                   <input
//                     type="color"
//                     value={
//                       selectedComponent.getStyle()["background-color"] ||
//                       "#ffffff"
//                     }
//                     onChange={(e) => {
//                       const bgColor = e.target.value;
//                       selectedComponent.addStyle({
//                         "background-color": bgColor,
//                       });
//                     }}
//                     className="mt-2 w-full border-b-2 border-gray-300 bg-transparent py-1 "
//                   />
//                 </label>
//               </div>
//             </div>
//           ) : (
//             <p>Select a text element to edit </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Editor;




import { useEffect, useRef, useState, useCallback } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { PenTool, Undo, Redo } from "lucide-react"; 
//@ts-ignore
import plugin from "grapesjs-tailwind";
import { components } from "./config";

const Editor: React.FC = () => {
  const editorRef = useRef<any>(null);
  const [templates, setTemplates] = useState(components);
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<any>(null);

  useEffect(() => {
    editorRef.current = grapesjs.init({
      container: "#gjs",  // Target the correct container
      fromElement: true,
      width: "100%",
      height: "100%",
      plugins: [plugin],
      pluginsOpts: {
        [plugin]: {},
      },
      storageManager: false, // Disable storage manager
    });

    const editor = editorRef.current;

    editor.on("component:selected", () => {
      const selected = editor.getSelected();
      const tagName = selected.get("tagName");

      if (
        ["p", "div", "span", "h1", "h2", "h3", "h4", "nav", "section", "button"].includes(tagName)
      ) {
        setSelectedComponent(selected);
      } else {
        setSelectedComponent(null);
      }
    });

    editor.on("block:drag:stop", () => {
      console.log("Block dropped");
    });
  }, []);

  const applyTemplate = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      console.log("Applying template:", template.html);

      if (editorRef.current) {
        editorRef.current.setComponents(template.html);
      }

      setActiveTemplate(templateId);
    } else {
      console.error("Template not found for id:", templateId);
    }
  };

  const exportHtml = useCallback(() => {
    if (editorRef.current) {
      const templateHtml = editorRef.current.getHtml();
      const templateCss = editorRef.current.getCss();

      const html = `
        <html>
          <head>
            <style>${templateCss}</style>
          </head>
          <body>${templateHtml}</body>
        </html>
      `;

      const blob = new Blob([html], { type: "text/html" });
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);
      link.download = "custom-template.html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, []);

  const handleUndo = () => {
    if (editorRef.current) {
      editorRef.current.runCommand("core:undo");
    }
  };

  const handleRedo = () => {
    if (editorRef.current) {
      editorRef.current.runCommand("core:redo");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 text-white">
      <div className="w-full p-2 bg-gray-950 flex gap-4 justify-between">
        <div className="flex items-center gap-2">
          <PenTool size={30} color="white" />
          <div className="text-xl font-bold">Website Builder</div>
        </div>
        <div className="flex gap-4">
          <div className="mt-2 flex gap-4">
            <Undo className="w-5 h-5 text-white" onClick={handleUndo} />
            <Redo className="w-5 h-5 text-white" onClick={handleRedo} />
          </div>
          <button
            onClick={exportHtml}
            className="px-3 py-2 bg-blue-700 rounded-md"
          >
            Export
          </button>
        </div>
      </div>

      <div className="flex-grow grid grid-cols-12">
        <div id="blocks" className="col-span-1 bg-gray-950 p-2 text-sm">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => applyTemplate(template.id)}
              className={`w-full px-3 py-2 mb-2 rounded-md ${
                activeTemplate === template.id ? "bg-blue-700" : "bg-gray-800"
              } text-white`}
            >
              {template.name}
            </button>
          ))}
        </div>

        <div className="col-span-10 bg-white" id="gjs"></div> {/* Ensure the background is white */}

        {/* <div className="col-span-2 p-3 bg-gray-950 border-l border-gray-700">
          {selectedComponent ? (
            <div>
              <h3 className="text-lg font-bold mb-2">Properties</h3>

              <div className="space-y-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">
                    Text Color
                  </span>
                  <input
                    type="color"
                    value={selectedComponent.getStyle().color || "#000000"}
                    onChange={(e) => {
                      const color = e.target.value;
                      selectedComponent.addStyle({ color });
                    }}
                    className="mt-2 w-full border-b-2 border-gray-300 bg-transparent py-1 "
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">
                    Background Color
                  </span>
                  <input
                    type="color"
                    value={
                      selectedComponent.getStyle()["background-color"] ||
                      "#ffffff"
                    }
                    onChange={(e) => {
                      const bgColor = e.target.value;
                      selectedComponent.addStyle({
                        "background-color": bgColor,
                      });
                    }}
                    className="mt-2 w-full border-b-2 border-gray-300 bg-transparent py-1 "
                  />
                </label>
              </div>
            </div>
          ) : (
            <p>Select a text element to edit </p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Editor;

